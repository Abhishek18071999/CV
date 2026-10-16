import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export type Scene3DMode = "globe" | "topology" | "constellation";

declare global {
  interface Window {
    THREE?: any;
  }
}

type Props = {
  mode: Scene3DMode;
  onModeChange: (mode: Scene3DMode) => void;
  focusedNode: string;
  onFocusNode: (node: string) => void;
};

const SUPPLIER_NODES = ["ALL", "Xtream", "Sabre", "TravelFusion", "TBO", "AerTicket", "Atlas"] as const;

export function Scene3DStage({ mode, onModeChange, focusedNode, onFocusNode }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [autoRotate, setAutoRotate] = useState(true);
  const [packetRate, setPacketRate] = useState(1420);

  const stateRef = useRef({
    mode,
    focusedNode,
    autoRotate,
    burstFrames: 0,
    targetRotX: 0.25,
    targetRotY: -0.6,
  });

  useEffect(() => { stateRef.current.mode = mode; }, [mode]);
  useEffect(() => { stateRef.current.focusedNode = focusedNode; }, [focusedNode]);
  useEffect(() => { stateRef.current.autoRotate = autoRotate; }, [autoRotate]);

  const dispatchBurst = () => {
    stateRef.current.burstFrames = 50;
    setPacketRate(1850 + Math.floor(Math.random() * 650));
  };

  useEffect(() => {
    let animationFrameId = 0;
    let cleanupFn: (() => void) | undefined;

    const initThree = () => {
      const THREE = window.THREE;
      const container = containerRef.current;
      const canvas = canvasRef.current;
      if (!THREE || !container || !canvas) return;

      const width = container.clientWidth || 520;
      const height = container.clientHeight || 240;

      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(width, height);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
      camera.position.set(0, 0.5, 9.0);

      const rootGroup = new THREE.Group();
      scene.add(rootGroup);

      const globeGroup = new THREE.Group();
      const topologyGroup = new THREE.Group();
      const constellationGroup = new THREE.Group();
      rootGroup.add(globeGroup);
      rootGroup.add(topologyGroup);
      rootGroup.add(constellationGroup);

      const makeBadgeTexture = (text: string, borderHex: string) => {
        const c = document.createElement("canvas");
        c.width = 256;
        c.height = 64;
        const ctx = c.getContext("2d");
        if (ctx) {
          ctx.fillStyle = "rgba(8, 12, 22, 0.86)";
          ctx.strokeStyle = borderHex;
          ctx.lineWidth = 3;
          ctx.beginPath();
          if (typeof ctx.roundRect === "function") {
            ctx.roundRect(6, 8, 244, 48, 18);
          } else {
            ctx.rect(6, 8, 244, 48);
          }
          ctx.fill();
          ctx.stroke();
          ctx.font = "bold 21px monospace";
          ctx.fillStyle = "#f8fafc";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(text, 128, 33);
        }
        const tex = new THREE.CanvasTexture(c);
        tex.needsUpdate = true;
        return tex;
      };

      globeGroup.add(new THREE.Mesh(
        new THREE.SphereGeometry(2.45, 26, 18),
        new THREE.MeshBasicMaterial({ color: 0x34d399, wireframe: true, transparent: true, opacity: 0.2 }),
      ));
      globeGroup.add(new THREE.Mesh(
        new THREE.SphereGeometry(2.38, 24, 16),
        new THREE.MeshBasicMaterial({ color: 0x060a12, transparent: true, opacity: 0.84 }),
      ));

      const nodes = [
        { name: "Xtream", label: "BLR · Xtream Hub", pos: new THREE.Vector3(0.75, 0.65, 2.25), color: 0x34d399 },
        { name: "Sabre", label: "Sabre GDS", pos: new THREE.Vector3(-1.85, 1.25, 1.05), color: 0x38bdf8 },
        { name: "TravelFusion", label: "TravelFusion", pos: new THREE.Vector3(-0.55, 2.0, 1.3), color: 0xa855f7 },
        { name: "TBO", label: "TBO API", pos: new THREE.Vector3(1.8, 1.05, 1.32), color: 0xfbbf24 },
        { name: "AerTicket", label: "AerTicket", pos: new THREE.Vector3(0.2, 2.2, 1.05), color: 0xf472b6 },
        { name: "Atlas", label: "Atlas GDS", pos: new THREE.Vector3(2.05, -0.35, 1.25), color: 0x2dd4bf },
      ];

      const hubPos = nodes[0].pos;
      const packets: Array<{ mesh: any; curve: any; t: number; speed: number; nodeName: string }> = [];

      nodes.forEach((n, idx) => {
        const dot = new THREE.Mesh(
          new THREE.SphereGeometry(idx === 0 ? 0.15 : 0.11, 14, 14),
          new THREE.MeshBasicMaterial({ color: n.color }),
        );
        dot.position.copy(n.pos);
        globeGroup.add(dot);

        const hex = "#" + n.color.toString(16).padStart(6, "0");
        const sprite = new THREE.Sprite(
          new THREE.SpriteMaterial({ map: makeBadgeTexture(n.label, hex), transparent: true }),
        );
        sprite.position.copy(n.pos).multiplyScalar(1.22);
        sprite.scale.set(1.5, 0.38, 1);
        globeGroup.add(sprite);

        if (idx > 0) {
          const mid = hubPos.clone().add(n.pos).multiplyScalar(0.5).normalize().multiplyScalar(3.25);
          const curve = new THREE.QuadraticBezierCurve3(hubPos, mid, n.pos);
          const arcGeo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(36));
          const arcLine = new THREE.Line(
            arcGeo,
            new THREE.LineBasicMaterial({ color: n.color, transparent: true, opacity: 0.65 }),
          );
          globeGroup.add(arcLine);

          const pkt = new THREE.Mesh(
            new THREE.SphereGeometry(0.07, 10, 10),
            new THREE.MeshBasicMaterial({ color: 0xffffff }),
          );
          globeGroup.add(pkt);
          packets.push({ mesh: pkt, curve, t: idx * 0.18, speed: 0.006 + idx * 0.001, nodeName: n.name });
        }
      });

      const tiers = [
        { label: "OTA Partners (JWT Auth)", y: 1.95, color: 0x38bdf8 },
        { label: "Xtream API Gateway (C#)", y: 0.65, color: 0x34d399 },
        { label: "Redis Cache + MongoDB Logs", y: -0.65, color: 0xfbbf24 },
        { label: "GDS Mesh: Sabre · TBO · TF", y: -1.95, color: 0xa855f7 },
      ];
      tiers.forEach((t, i) => {
        const plate = new THREE.Mesh(
          new THREE.BoxGeometry(4.0, 0.25, 2.0),
          new THREE.MeshBasicMaterial({ color: t.color, wireframe: true, transparent: true, opacity: 0.55 }),
        );
        plate.position.set(0, t.y, 0);
        topologyGroup.add(plate);

        const hex = "#" + t.color.toString(16).padStart(6, "0");
        const sp = new THREE.Sprite(
          new THREE.SpriteMaterial({ map: makeBadgeTexture(t.label, hex), transparent: true }),
        );
        sp.position.set(0, t.y + 0.35, 1.15);
        sp.scale.set(2.0, 0.48, 1);
        topologyGroup.add(sp);

        if (i < tiers.length - 1) {
          const rod = new THREE.Mesh(
            new THREE.CylinderGeometry(0.035, 0.035, 1.3, 8),
            new THREE.MeshBasicMaterial({ color: 0x34d399, transparent: true, opacity: 0.45 }),
          );
          rod.position.set(0, t.y - 0.65, 0);
          topologyGroup.add(rod);
        }
      });

      const starNodes = [
        { label: "C# / ASP.NET", pos: [0, 0, 0], color: 0x34d399 },
        { label: "Sabre GDS", pos: [2.25, 1.15, 0.5], color: 0x38bdf8 },
        { label: "TravelFusion", pos: [-2.2, 1.05, 0.4], color: 0xa855f7 },
        { label: "TBO & Atlas", pos: [2.0, -1.2, -0.35], color: 0xfbbf24 },
        { label: "MongoDB Logs", pos: [-2.0, -1.15, 0.6], color: 0xf472b6 },
        { label: "Redis & MySQL", pos: [0, 2.0, -0.7], color: 0x2dd4bf },
      ];
      const originVec = new THREE.Vector3(0, 0, 0);
      starNodes.forEach((s, i) => {
        const v = new THREE.Vector3(s.pos[0], s.pos[1], s.pos[2]);
        const oct = new THREE.Mesh(
          new THREE.OctahedronGeometry(i === 0 ? 0.32 : 0.2, 0),
          new THREE.MeshBasicMaterial({ color: s.color, wireframe: true }),
        );
        oct.position.copy(v);
        constellationGroup.add(oct);

        const hex = "#" + s.color.toString(16).padStart(6, "0");
        const sp = new THREE.Sprite(
          new THREE.SpriteMaterial({ map: makeBadgeTexture(s.label, hex), transparent: true }),
        );
        sp.position.copy(v).add(new THREE.Vector3(0, 0.4, 0));
        sp.scale.set(1.6, 0.4, 1);
        constellationGroup.add(sp);

        if (i > 0) {
          const line = new THREE.Line(
            new THREE.BufferGeometry().setFromPoints([originVec, v]),
            new THREE.LineBasicMaterial({ color: s.color, transparent: true, opacity: 0.45 }),
          );
          constellationGroup.add(line);
        }
      });

      let dragging = false;
      let prevX = 0;
      let prevY = 0;

      const onDown = (e: PointerEvent) => {
        dragging = true;
        prevX = e.clientX;
        prevY = e.clientY;
      };
      const onMove = (e: PointerEvent) => {
        if (!dragging) return;
        const dx = e.clientX - prevX;
        const dy = e.clientY - prevY;
        prevX = e.clientX;
        prevY = e.clientY;
        stateRef.current.targetRotY += dx * 0.008;
        stateRef.current.targetRotX = Math.max(-1.0, Math.min(1.0, stateRef.current.targetRotX + dy * 0.008));
      };
      const onUp = () => { dragging = false; };

      container.addEventListener("pointerdown", onDown);
      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerup", onUp);

      const onResize = () => {
        if (!container) return;
        const w = container.clientWidth || 520;
        const h = container.clientHeight || 240;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };
      window.addEventListener("resize", onResize);

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        const st = stateRef.current;

        globeGroup.visible = st.mode === "globe";
        topologyGroup.visible = st.mode === "topology";
        constellationGroup.visible = st.mode === "constellation";

        if (st.autoRotate && !dragging) {
          st.targetRotY += 0.0038;
        }

        rootGroup.rotation.y += (st.targetRotY - rootGroup.rotation.y) * 0.08;
        rootGroup.rotation.x += (st.targetRotX - rootGroup.rotation.x) * 0.08;

        const boost = st.burstFrames > 0 ? 3.2 : 1.0;
        if (st.burstFrames > 0) st.burstFrames--;

        packets.forEach((p) => {
          p.mesh.visible = st.focusedNode === "ALL" || st.focusedNode === p.nodeName || st.focusedNode === "Xtream";
          p.t = (p.t + p.speed * boost) % 1;
          p.curve.getPoint(p.t, p.mesh.position);
        });

        renderer.render(scene, camera);
      };
      animate();

      cleanupFn = () => {
        cancelAnimationFrame(animationFrameId);
        container.removeEventListener("pointerdown", onDown);
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerup", onUp);
        window.removeEventListener("resize", onResize);
        renderer.dispose();
      };
    };

    if (window.THREE) {
      initThree();
    } else {
      const existing = document.querySelector('script[data-threejs="r128"]') as HTMLScriptElement | null;
      if (existing) {
        existing.addEventListener("load", initThree);
      } else {
        const script = document.createElement("script");
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
        script.async = true;
        script.setAttribute("data-threejs", "r128");
        script.onload = initThree;
        document.head.appendChild(script);
      }
    }

    return () => { if (cleanupFn) cleanupFn(); };
  }, []);

  return (
    <div className="mt-7 rounded-3xl border bg-card/70 p-4 shadow-xl backdrop-blur-xl">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b pb-3">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-primary animate-pulse" />
          <span className="font-mono text-xs font-semibold">3D GDS & API Telemetry Stage</span>
          <span className="hidden sm:inline font-mono text-[11px] text-primary">· {packetRate} req/s</span>
        </div>

        <div className="flex flex-wrap items-center gap-1">
          {(["globe", "topology", "constellation"] as Scene3DMode[]).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => onModeChange(m)}
              className={cn(
                "rounded-full px-2.5 py-1 font-mono text-[11px] transition-colors",
                mode === m ? "bg-primary text-primary-foreground font-semibold" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {m === "globe" ? "Globe 3D" : m === "topology" ? "Topology" : "StarMap"}
            </button>
          ))}
          <button
            type="button"
            onClick={dispatchBurst}
            className="rounded-full border border-primary/40 bg-primary/10 px-2.5 py-1 font-mono text-[11px] text-primary hover:bg-primary/20"
          >
            ⚡ Burst
          </button>
          <button
            type="button"
            onClick={() => setAutoRotate((v) => !v)}
            className="rounded-full border px-2 py-1 font-mono text-[11px] text-muted-foreground hover:text-foreground"
          >
            {autoRotate ? "Auto" : "Manual"}
          </button>
        </div>
      </div>

      <div
        ref={containerRef}
        className="relative mt-3 h-56 w-full cursor-grab overflow-hidden rounded-2xl border bg-background/60 active:cursor-grabbing sm:h-64"
      >
        <canvas ref={canvasRef} className="block size-full" />
        <div className="pointer-events-none absolute inset-x-3 bottom-2.5 flex flex-wrap items-center justify-between gap-2 rounded-xl border bg-background/80 px-3 py-1.5 font-mono text-[11px] backdrop-blur-md">
          <span>
            <strong className="text-primary">● {focusedNode === "ALL" ? "ALL 5 GDS SUPPLIERS" : focusedNode}</strong> · JWT + REST/SOAP
          </span>
          <span className="text-muted-foreground">Drag to rotate 3D</span>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        <span className="mr-1 font-mono text-[11px] text-muted-foreground">Focus Node:</span>
        {SUPPLIER_NODES.map((node) => (
          <button
            key={node}
            type="button"
            onClick={() => {
              onFocusNode(node);
              dispatchBurst();
            }}
            className={cn(
              "rounded-lg border px-2 py-0.5 font-mono text-[11px] transition-colors",
              focusedNode === node
                ? "border-primary bg-primary text-primary-foreground font-semibold"
                : "text-muted-foreground hover:border-foreground/30 hover:text-foreground",
            )}
          >
            {node}
          </button>
        ))}
      </div>
    </div>
  );
}
