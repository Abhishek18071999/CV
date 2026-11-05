/* @ds-bundle: {"format":4,"namespace":"Ahlawat","components":[{"name":"Button"},{"name":"EmailCopy"},{"name":"Kbd"},{"name":"SectionHeading"},{"name":"Chip"},{"name":"StatusPill"},{"name":"StatGrid"},{"name":"Marquee"},{"name":"SkillTag"},{"name":"ScoreRing"},{"name":"SpotlightCard"},{"name":"IconTile"},{"name":"WorkCard"},{"name":"Backdrop"},{"name":"Nav"},{"name":"CommandMenu"},{"name":"Timeline"},{"name":"SearchField"},{"name":"ApiConsole"},{"name":"CodeWindow"},{"name":"FlowDiagram"},{"name":"LogList"},{"name":"Icon"}]} */
/* Ahlawat design system \u2014 hand-written from artifacts/cv/src/components/cv/*.tsx (React 18 globals, no build step). */
(function () {
  "use strict";
  var React = window.React;
  var h = React.createElement;
  var useState = React.useState, useEffect = React.useEffect, useMemo = React.useMemo, useRef = React.useRef;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(" ");
  }
  function reducedMotion() {
    try { return window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) { return false; }
  }

  /* \u2500\u2500 Icon: lucide-react 0.545.0 + react-icons/fa geometry, copied verbatim \u2500\u2500 */
  var ICONS = {"arrow-up-right":[["path",{"d":"M7 7h10v10"}],["path",{"d":"M7 17 17 7"}]],"arrow-right":[["path",{"d":"M5 12h14"}],["path",{"d":"m12 5 7 7-7 7"}]],"arrow-down-to-line":[["path",{"d":"M12 17V3"}],["path",{"d":"m6 11 6 6 6-6"}],["path",{"d":"M19 21H5"}]],"map-pin":[["path",{"d":"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["circle",{"cx":"12","cy":"10","r":"3"}]],"command":[["path",{"d":"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"}]],"moon":[["path",{"d":"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"}]],"sun":[["circle",{"cx":"12","cy":"12","r":"4"}],["path",{"d":"M12 2v2"}],["path",{"d":"M12 20v2"}],["path",{"d":"m4.93 4.93 1.41 1.41"}],["path",{"d":"m17.66 17.66 1.41 1.41"}],["path",{"d":"M2 12h2"}],["path",{"d":"M20 12h2"}],["path",{"d":"m6.34 17.66-1.41 1.41"}],["path",{"d":"m19.07 4.93-1.41 1.41"}]],"copy":[["rect",{"width":"14","height":"14","x":"8","y":"8","rx":"2","ry":"2"}],["path",{"d":"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"}]],"external-link":[["path",{"d":"M15 3h6v6"}],["path",{"d":"M10 14 21 3"}],["path",{"d":"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]],"search":[["path",{"d":"m21 21-4.34-4.34"}],["circle",{"cx":"11","cy":"11","r":"8"}]],"x":[["path",{"d":"M18 6 6 18"}],["path",{"d":"m6 6 12 12"}]],"award":[["path",{"d":"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"}],["circle",{"cx":"12","cy":"8","r":"6"}]],"braces":[["path",{"d":"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"}],["path",{"d":"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"}]],"plane":[["path",{"d":"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"}]],"file-search":[["path",{"d":"M14 2v4a2 2 0 0 0 2 2h4"}],["path",{"d":"M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"}],["path",{"d":"m9 18-1.5-1.5"}],["circle",{"cx":"5","cy":"14","r":"3"}]],"book-open-text":[["path",{"d":"M12 7v14"}],["path",{"d":"M16 12h2"}],["path",{"d":"M16 8h2"}],["path",{"d":"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}],["path",{"d":"M6 12h2"}],["path",{"d":"M6 8h2"}]],"calendar-clock":[["path",{"d":"M16 14v2.2l1.6 1"}],["path",{"d":"M16 2v4"}],["path",{"d":"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"}],["path",{"d":"M3 10h5"}],["path",{"d":"M8 2v4"}],["circle",{"cx":"16","cy":"16","r":"6"}]],"workflow":[["rect",{"width":"8","height":"8","x":"3","y":"3","rx":"2"}],["path",{"d":"M7 11v4a2 2 0 0 0 2 2h4"}],["rect",{"width":"8","height":"8","x":"13","y":"13","rx":"2"}]],"handshake":[["path",{"d":"m11 17 2 2a1 1 0 1 0 3-3"}],["path",{"d":"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"}],["path",{"d":"m21 3 1 11h-2"}],["path",{"d":"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"}],["path",{"d":"M3 4h8"}]],"github":{"viewBox":"0 0 496 512","d":"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},"linkedin":{"viewBox":"0 0 448 512","d":"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"}};
  function Icon(props) {
    var name = props.name, size = props.size || 16, data = ICONS[name];
    if (!data) return null;
    var common = { className: cx("ah-icon", props.className), width: size, height: size, "aria-hidden": props.label ? undefined : true, "aria-label": props.label, role: props.label ? "img" : undefined, style: props.style };
    if (!Array.isArray(data)) {
      return h("svg", Object.assign({ viewBox: data.viewBox, fill: "currentColor" }, common), h("path", { d: data.d }));
    }
    return h("svg", Object.assign({ viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: props.strokeWidth || 2, strokeLinecap: "round", strokeLinejoin: "round" }, common),
      data.map(function (n, i) {
        var a = {}; for (var k in n[1]) a[k === "stroke-width" ? "strokeWidth" : k] = n[1][k]; a.key = i;
        return h(n[0], a);
      }));
  }
  Icon.names = Object.keys(ICONS);

  /* \u2500\u2500 Button \u2500\u2500 */
  function Button(props) {
    var variant = props.variant || "primary", size = props.size || "md";
    var iconOnly = !props.children && props.icon;
    var cls = cx("ah-btn", "ah-btn--" + variant, "ah-btn--" + size, iconOnly && "ah-btn--icon", props.glow && "ah-btn--glow", props.className);
    var iconSize = size === "sm" ? 16 : 16;
    var kids = [
      props.icon && props.iconPosition !== "end" ? h(Icon, { key: "i", name: props.icon, size: iconSize }) : null,
      props.children,
      props.arrow ? h(Icon, { key: "a", name: "arrow-up-right", size: 16, className: "ah-btn-arrow" }) : null,
      props.icon && props.iconPosition === "end" ? h(Icon, { key: "e", name: props.icon, size: iconSize }) : null,
    ];
    var rest = { className: cls, onClick: props.onClick, "aria-label": props["aria-label"] || props.label, disabled: props.disabled, title: props.title };
    if (props.href) return h("a", Object.assign(rest, { href: props.href, target: props.target, rel: props.target === "_blank" ? "noreferrer noopener" : undefined, download: props.download }), kids);
    return h("button", Object.assign(rest, { type: props.type || "button" }), kids);
  }

  /* \u2500\u2500 EmailCopy \u2500\u2500 */
  function EmailCopy(props) {
    var s = useState(false), copied = s[0], setCopied = s[1];
    function onClick() {
      var done = function () { setCopied(true); setTimeout(function () { setCopied(false); }, 1600); if (props.onCopy) props.onCopy(props.email); };
      try { navigator.clipboard.writeText(props.email).then(done, done); } catch (e) { done(); }
    }
    return h("button", { type: "button", className: "ah-email", onClick: onClick, "data-copied": copied ? "" : undefined, "aria-label": "Copy " + props.email },
      h("span", { className: "ah-email-addr" }, props.email),
      h("span", { className: "ah-email-tag" }, h(Icon, { name: "copy", size: 12 }), copied ? "Copied" : "Copy"));
  }

  /* \u2500\u2500 Kbd \u2500\u2500 */
  function Kbd(props) { return h("kbd", { className: cx("ah-kbd", props.className) }, props.children); }

  /* \u2500\u2500 SectionHeading \u2500\u2500 */
  function SectionHeading(props) {
    return h("div", { className: cx("ah-heading", props.children && "ah-heading--aside", props.className) },
      h("div", null,
        h("p", { className: "ah-eyebrow" },
          h("span", { className: "ah-eyebrow-index" }, props.index),
          h("span", { className: "ah-eyebrow-rule" }),
          props.eyebrow),
        h(props.as || "h2", { className: "ah-heading-title" }, props.title, props.accent ? " " : null,
          props.accent ? h("span", { className: "ah-accent" }, props.accent) : null)),
      props.children || null);
  }

  /* \u2500\u2500 Chip \u2500\u2500 */
  function Chip(props) { return h("span", { className: cx("ah-chip", props.className) }, props.children); }

  /* \u2500\u2500 StatusPill \u2500\u2500 */
  function StatusPill(props) {
    if (props.variant === "current") {
      return h("span", { className: cx("ah-status ah-status--current", props.className) }, h("span", { className: "ah-pulse" }), props.children || "current");
    }
    var tag = props.href ? "a" : "span";
    return h(tag, { className: cx("ah-status", props.className), href: props.href },
      h("span", { className: "ah-ping", "aria-hidden": true }),
      props.children,
      props.href ? h(Icon, { name: "arrow-up-right", size: 14 }) : null);
  }

  /* \u2500\u2500 StatGrid \u2500\u2500 */
  function StatGrid(props) {
    return h("dl", { className: cx("ah-stats", props.className) },
      (props.items || []).map(function (s) {
        return h("div", { key: s.label, className: "ah-stat" },
          h("dt", { className: "ah-sr" }, s.label),
          h("dd", { className: "ah-stat-value" }, s.value),
          h("dd", { className: "ah-stat-label" }, s.label));
      }));
  }

  /* \u2500\u2500 Marquee \u2500\u2500 */
  function Marquee(props) {
    var items = props.items || [];
    var doubled = items.concat(items);
    return h("div", { className: cx("ah-marquee", props.className), "aria-hidden": true },
      h("div", { className: "ah-marquee-track", style: props.duration ? { animationDuration: props.duration + "s" } : undefined },
        doubled.map(function (t, i) {
          return h("span", { key: i, className: "ah-marquee-item" }, t, h("span", { className: "ah-marquee-dot" }));
        })));
  }

  /* \u2500\u2500 SkillTag \u2500\u2500 */
  function SkillTag(props) {
    var state = props.state || "default";
    return h(props.as || "span", { className: cx("ah-skill", state === "hit" && "ah-skill--hit", state === "dim" && "ah-skill--dim", props.className) }, props.children);
  }

  /* \u2500\u2500 ScoreRing \u2500\u2500 */
  function ScoreRing(props) {
    var value = Math.max(0, Math.min(100, props.value || 0));
    var r = 26, c = 2 * Math.PI * r;
    var st = useState(reducedMotion() ? value : 0), shown = st[0], setShown = st[1];
    useEffect(function () { var id = requestAnimationFrame(function () { setShown(value); }); return function () { cancelAnimationFrame(id); }; }, [value]);
    return h("div", { className: "ah-ring", role: "img", "aria-label": Math.round(value) + "%" },
      h("svg", { viewBox: "0 0 64 64" },
        h("circle", { cx: 32, cy: 32, r: r, fill: "none", strokeWidth: 4, className: "ah-ring-track" }),
        h("circle", { cx: 32, cy: 32, r: r, fill: "none", strokeWidth: 4, strokeLinecap: "round", className: "ah-ring-value", strokeDasharray: c, strokeDashoffset: c * (1 - shown / 100) })),
      h("span", { className: "ah-ring-label", "aria-hidden": true }, Math.round(value) + "%"));
  }

  /* \u2500\u2500 SpotlightCard \u2500\u2500 */
  function SpotlightCard(props) {
    function onMove(e) {
      var rect = e.currentTarget.getBoundingClientRect();
      e.currentTarget.style.setProperty("--x", e.clientX - rect.left + "px");
      e.currentTarget.style.setProperty("--y", e.clientY - rect.top + "px");
    }
    return h(props.as || "div", { className: cx("ah-spot", props.padded !== false && "ah-spot--pad", props.className), onPointerMove: onMove, style: props.style }, props.children);
  }

  /* \u2500\u2500 IconTile \u2500\u2500 */
  function IconTile(props) { return h("span", { className: cx("ah-tile", props.className) }, h(Icon, { name: props.icon, size: 18 })); }

  /* \u2500\u2500 WorkCard \u2500\u2500 */
  function WorkCard(props) {
    return h(SpotlightCard, { className: cx("ah-work", props.className) },
      h("div", { className: "ah-work-top" },
        h(IconTile, { icon: props.icon || "braces" }),
        props.kicker ? h("span", { className: "ah-kicker" }, props.kicker) : null),
      h("h3", { className: "ah-work-title" }, props.title),
      props.description ? h("p", { className: "ah-work-desc" }, props.description) : null,
      props.children ? h("div", { style: { marginTop: 32 } }, props.children) : null,
      props.tags && props.tags.length ? h("div", { className: "ah-chips ah-work-tags" }, props.tags.map(function (t) { return h(Chip, { key: t }, t); })) : null);
  }

  /* \u2500\u2500 Backdrop \u2500\u2500 */
  function Backdrop(props) {
    return h("div", { className: cx("ah-backdrop", props.placement === "bottom" && "ah-backdrop--bottom", props.grain && "ah-grain", props.className), style: props.style },
      h("div", { className: "ah-backdrop-grid", "aria-hidden": true }),
      props.glow !== false ? h("div", { className: "ah-backdrop-glow", "aria-hidden": true }) : null,
      props.children);
  }

  /* \u2500\u2500 Nav \u2500\u2500 */
  function Nav(props) {
    var theme = props.theme || "ink";
    return h("nav", { className: cx("ah-nav", props.className), "aria-label": "Primary" },
      h("a", { href: props.homeHref || "#top", className: "ah-monogram", "aria-label": "Back to top" }, props.monogram || "a"),
      h("ul", { className: "ah-nav-links" }, (props.items || []).map(function (it) {
        return h("li", { key: it.id }, h("a", { href: "#" + it.id, className: "ah-nav-link", "aria-current": props.active === it.id ? "true" : undefined, onClick: props.onNavigate ? function (e) { e.preventDefault(); props.onNavigate(it.id); } : undefined }, it.label));
      })),
      h("div", { className: "ah-nav-actions" },
        props.onOpenCommand !== null ? h("button", { type: "button", className: "ah-btn ah-btn--ghost ah-btn--sm ah-nav-cmd", onClick: props.onOpenCommand, "aria-label": "Open command menu" }, h(Icon, { name: "command", size: 14 }), h("span", null, "K")) : null,
        h(Button, { variant: "ghost", size: "sm", icon: theme === "ink" ? "sun" : "moon", label: "Switch to " + (theme === "ink" ? "light" : "dark") + " theme", onClick: props.onToggleTheme }),
        h(Button, { variant: "ink", size: "sm", icon: "arrow-down-to-line", href: props.resumeHref || "#", download: props.resumeDownload }, props.resumeLabel || "Resume")));
  }

  /* \u2500\u2500 Timeline (one role of the Experience list) \u2500\u2500 */
  function Timeline(props) {
    return h("div", { className: cx("ah-role", props.className) },
      h("div", { className: "ah-role-meta" },
        h("p", { className: "ah-label" }, props.period),
        h("h3", { className: "ah-role-company" }, props.company),
        h("p", { className: "ah-role-title" }, props.role),
        props.location ? h("p", { className: "ah-role-loc" }, props.location) : null,
        props.current ? h(StatusPill, { variant: "current" }) : null),
      h("div", { className: "ah-role-body" },
        h("ul", { className: "ah-bullets" }, (props.bullets || []).map(function (b) {
          return h("li", { key: b.lead, className: "ah-bullet" },
            h("span", { className: "ah-bullet-dot", "aria-hidden": true }),
            h("p", { className: "ah-bullet-text" }, h("span", { className: "ah-bullet-lead" }, b.lead + "."), " " + b.text));
        })),
        props.stack && props.stack.length ? h("div", { className: "ah-chips" }, props.stack.map(function (t) { return h(Chip, { key: t }, t); })) : null));
  }

  /* \u2500\u2500 SearchField \u2500\u2500 */
  function SearchField(props) {
    var controlled = props.value !== undefined;
    var s = useState(props.defaultValue || ""), inner = s[0], setInner = s[1];
    var value = controlled ? props.value : inner;
    function set(v) { if (!controlled) setInner(v); if (props.onChange) props.onChange(v); }
    return h("label", { className: cx("ah-search", props.className) },
      h(Icon, { name: "search", size: 16 }),
      h("input", { type: "search", value: value, placeholder: props.placeholder || "Search", "aria-label": props.label || props.placeholder || "Search", onChange: function (e) { set(e.target.value); } }),
      value ? h("button", { type: "button", className: "ah-search-clear", "aria-label": "Clear filter", onClick: function () { set(""); } }, h(Icon, { name: "x", size: 14 })) : null);
  }

  /* \u2500\u2500 JSON highlighter (ApiConsole.tsx) \u2500\u2500 */
  var TOKEN = /("(?:\\.|[^"\\])*")(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d+)?/g;
  function highlight(line) {
    var parts = [], last = 0, m;
    TOKEN.lastIndex = 0;
    while ((m = TOKEN.exec(line))) {
      if (m.index > last) parts.push(line.slice(last, m.index));
      if (m[1] && m[2]) { parts.push(h("span", { key: m.index, className: "sx-key" }, m[1]), h("span", { key: m.index + "c", className: "ah-muted" }, m[2])); }
      else if (m[1]) parts.push(h("span", { key: m.index, className: "sx-str" }, m[1]));
      else parts.push(h("span", { key: m.index, className: m[3] ? "sx-lit" : "sx-num" }, m[0]));
      last = m.index + m[0].length;
    }
    if (last < line.length) parts.push(line.slice(last));
    return parts;
  }

  /* \u2500\u2500 ApiConsole \u2500\u2500 */
  var DEFAULT_ENDPOINTS = {
    profile: { method: "GET", path: "/v1/engineers/abhishek", latency: 38, body: { name: "Abhishek Ahlawat", role: "Software Engineer", company: "Corefares Consulting", location: "Bengaluru, IN", focus: ["backend APIs", "travel-tech integrations"], openToWork: true } },
    stack: { method: "GET", path: "/v1/engineers/abhishek/stack", latency: 24, body: { languages: ["C#", "Java", "Python"], apis: ["REST", "SOAP/XML", "gRPC"], auth: "JWT", data: ["MongoDB", "MySQL", "Redis"], cloud: "AWS" } },
    shipped: { method: "GET", path: "/v1/engineers/abhishek/shipped", latency: 51, body: { platform: "Xtream REST API", integrations: ["TBO", "TravelFusion", "AerTicket", "Atlas", "Sabre"], tooling: ["Developer Corner", "MongoDB log search"], workflows: ["Branded Fares", "Technical Stops"], automation: "Flight reconciliation cron" } }
  };
  function ApiConsole(props) {
    var endpoints = props.endpoints || DEFAULT_ENDPOINTS;
    var keys = Object.keys(endpoints);
    var a = useState(props.defaultTab || keys[0]), active = a[0], setActive = a[1];
    var animate = props.animate !== false && !reducedMotion();
    var l = useState(animate), loading = l[0], setLoading = l[1];
    var ep = endpoints[active];
    var lines = useMemo(function () { return JSON.stringify(ep.body, null, 2).split("\n"); }, [ep]);
    var v = useState(animate ? 0 : lines.length), visible = v[0], setVisible = v[1];
    useEffect(function () {
      if (!animate) { setLoading(false); setVisible(lines.length); return; }
      setLoading(true); setVisible(0);
      var interval, timeout = setTimeout(function () {
        setLoading(false);
        interval = setInterval(function () { setVisible(function (n) { if (n >= lines.length) clearInterval(interval); return Math.min(lines.length, n + 1); }); }, 45);
      }, 420);
      return function () { clearTimeout(timeout); clearInterval(interval); };
    }, [lines, animate]);
    return h("div", { className: cx("ah-console", props.className) },
      h("div", { className: "ah-console-edge", "aria-hidden": true }),
      h("div", { className: "ah-console-shell" },
        h("div", { className: "ah-console-bar" },
          h("span", { className: "ah-console-dot" }), h("span", { className: "ah-console-dot" }), h("span", { className: "ah-console-dot" }),
          h("div", { role: "tablist", "aria-label": props.label || "Example API responses", className: "ah-tabs" },
            keys.map(function (k) { return h("button", { key: k, role: "tab", "aria-selected": active === k, className: "ah-tab", onClick: function () { setActive(k); } }, k); }))),
        h("div", { className: "ah-console-status" },
          h("p", { className: "ah-console-req" }, h("span", { className: "ah-method" }, ep.method || "GET"), h("span", { className: "ah-muted" }, ep.path)),
          loading ? h("span", { className: "ah-muted" }, "pending\u2026")
            : h("span", { className: "ah-ok" }, h("span", { className: "ah-ok-dot" }), h("span", { className: "ah-primary" }, ep.status || "200 OK"), h("span", { className: "ah-muted" }, ep.latency + "ms"))),
        h("pre", { className: "ah-console-body", style: props.minHeight ? { minHeight: props.minHeight } : undefined },
          loading ? h("div", { className: "ah-skel", "aria-hidden": true }, [72, 54, 64, 40, 58].map(function (w, i) { return h("span", { key: i, style: { width: w + "%", animationDelay: i * 80 + "ms" } }); }))
            : h("code", null,
              lines.slice(0, visible).map(function (line, i) { return h("div", { key: active + i, className: "ah-line" }, h("span", { className: "ah-ln" }, i + 1), h("span", { className: "ah-code" }, highlight(line))); }),
              visible < lines.length ? h("span", { className: "ah-caret" }) : null))));
  }

  /* \u2500\u2500 CodeWindow (ApiVisual) \u2500\u2500 */
  function CodeWindow(props) {
    var headers = props.headers || [];
    var body = props.body;
    var bodyText = body === undefined ? null : typeof body === "string" ? body : JSON.stringify(body).replace(/,"/g, ', "').replace(/":/g, '": ').replace(/^\{/, "{ ").replace(/\}$/, " }");
    return h("div", { className: cx("ah-codewin", props.className) },
      h("div", { className: "ah-codewin-head" }, h("span", null, props.title), props.status !== null ? h("span", { className: "ah-primary" }, props.status || "\u25cf live") : null),
      h("pre", null,
        props.method ? h("span", { className: "ah-primary" }, props.method) : null, props.method ? " " : null,
        props.path ? h("span", null, props.path) : null,
        headers.map(function (hd, i) { return h(React.Fragment, { key: i }, "\n", h("span", { className: "sx-key" }, hd[0]), h("span", { className: "ah-muted" }, ": "), h("span", { className: "sx-str" }, hd[1])); }),
        bodyText ? h(React.Fragment, null, "\n\n", highlight(bodyText)) : null));
  }

  /* \u2500\u2500 FlowDiagram \u2500\u2500 */
  function FlowDiagram(props) {
    var nodes = props.nodes || ["Client", "Service", "Supplier"];
    var on = props.highlight === undefined ? 1 : props.highlight;
    var out = [];
    nodes.forEach(function (n, i) {
      out.push(h("span", { key: "n" + i, className: cx("ah-node", i === on && "ah-node--on") }, n));
      if (i < nodes.length - 1) out.push(h("span", { key: "w" + i, className: "ah-wire" }, h("span", { className: "ah-packet", style: { animationDelay: i * 1.2 + "s" } })));
    });
    return h("div", { className: cx("ah-flow", props.className), role: "img", "aria-label": nodes.join(" \u2192 ") }, out);
  }

  /* \u2500\u2500 LogList \u2500\u2500 */
  function LogList(props) {
    return h("div", { className: cx("ah-logs", props.className) },
      h("div", { className: "ah-log-search" }, h(Icon, { name: "search", size: 12 }), h("span", null, props.query || "", h("span", { className: "ah-cursor" }, "|"))),
      (props.rows || []).map(function (r, i) {
        return h("div", { key: i, className: "ah-log" }, h("span", { className: r.level === "WARN" ? "ah-log-warn" : "ah-log-info" }, r.level), h("span", null, r.msg));
      }));
  }

  /* \u2500\u2500 CommandMenu (CommandMenu.tsx over shadcn Command + Dialog; cmdk behaviour re-implemented) \u2500\u2500 */
  var cmdSeq = 0;
  function CommandMenu(props) {
    var open = props.inline ? true : !!props.open;
    var q = useState(""), query = q[0], setQuery = q[1];
    var s = useState(0), sel = s[0], setSel = s[1];
    var idRef = useRef(null); if (idRef.current === null) idRef.current = "ah-cmd-" + (++cmdSeq);
    var inputRef = useRef(null), listRef = useRef(null), lastFocus = useRef(null);
    var groups = props.groups || [];
    var needle = query.trim().toLowerCase();
    var shown = [], flat = [];
    groups.forEach(function (g) {
      var items = (g.items || []).filter(function (it) {
        if (!needle) return true;
        return (it.label + " " + (it.keywords || []).join(" ")).toLowerCase().indexOf(needle) !== -1;
      });
      if (items.length) { shown.push({ heading: g.heading, items: items }); items.forEach(function (it) { flat.push(it); }); }
    });
    function close() { if (props.onOpenChange) props.onOpenChange(false); }
    function run(it) { if (!props.inline) close(); if (it.onSelect) it.onSelect(); }

    useEffect(function () { setSel(0); }, [needle]);
    useEffect(function () {
      if (!open) return;
      lastFocus.current = document.activeElement;
      setQuery(""); setSel(0);
      if (!props.inline && inputRef.current) inputRef.current.focus();
      return function () { if (!props.inline && lastFocus.current && lastFocus.current.focus) lastFocus.current.focus(); };
    }, [open]);
    useEffect(function () {
      if (props.hotkey === false || !props.onOpenChange) return;
      function onKey(e) {
        if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) { e.preventDefault(); props.onOpenChange(!open); }
      }
      window.addEventListener("keydown", onKey);
      return function () { window.removeEventListener("keydown", onKey); };
    }, [open, props.onOpenChange, props.hotkey]);
    useEffect(function () {
      var el = listRef.current && listRef.current.querySelector('[data-selected="true"]');
      if (el && el.scrollIntoView) el.scrollIntoView({ block: "nearest" });
    }, [sel, needle]);

    if (!open) return null;
    function onKeyDown(e) {
      var n = flat.length;
      if (e.key === "ArrowDown") { e.preventDefault(); setSel(function (s) { return n ? (s + 1) % n : 0; }); }
      else if (e.key === "ArrowUp") { e.preventDefault(); setSel(function (s) { return n ? (s - 1 + n) % n : 0; }); }
      else if (e.key === "Home") { e.preventDefault(); setSel(0); }
      else if (e.key === "End") { e.preventDefault(); setSel(Math.max(0, flat.length - 1)); }
      else if (e.key === "Enter") { e.preventDefault(); if (flat[sel]) run(flat[sel]); }
      else if (e.key === "Escape" && !props.inline) { e.preventDefault(); close(); }
    }
    var idx = -1, listId = idRef.current + "-list";
    var panel = h("div", { className: cx("ah-cmd", props.inline && "ah-cmd--inline", props.className), role: props.inline ? undefined : "dialog", "aria-modal": props.inline ? undefined : true, "aria-label": props.label || "Command menu", onKeyDown: onKeyDown },
      h("div", { className: "ah-cmd-input" },
        h(Icon, { name: "search", size: 20 }),
        h("input", { ref: inputRef, value: query, onChange: function (e) { setQuery(e.target.value); }, placeholder: props.placeholder || "Type a command or search\u2026", role: "combobox", "aria-expanded": true, "aria-controls": listId, "aria-activedescendant": flat[sel] ? idRef.current + "-" + sel : undefined, autoComplete: "off", spellCheck: false })),
      h("div", { className: "ah-cmd-list", role: "listbox", id: listId, ref: listRef },
        flat.length === 0 ? h("div", { className: "ah-cmd-empty" }, props.emptyText || "No results found.") : null,
        shown.map(function (g, gi) {
          return h("div", { key: gi, className: "ah-cmd-group", role: "group", "aria-label": g.heading },
            g.heading ? h("div", { className: "ah-cmd-heading", "aria-hidden": true }, g.heading) : null,
            g.items.map(function (it) {
              idx++; var i = idx;
              return h("div", { key: it.id || it.label, id: idRef.current + "-" + i, role: "option", "aria-selected": i === sel, "data-selected": i === sel ? "true" : undefined, className: "ah-cmd-item",
                onMouseMove: function () { if (sel !== i) setSel(i); }, onClick: function () { run(it); } },
                it.icon ? h(Icon, { name: it.icon, size: 20 }) : null,
                h("span", { className: "ah-cmd-label" }, it.label),
                it.shortcut ? h("span", { className: "ah-cmd-shortcut" }, it.shortcut) : null);
            }));
        })),
      props.inline ? null : h("button", { type: "button", className: "ah-cmd-close", onClick: close, "aria-label": "Close" }, h(Icon, { name: "x", size: 16 })));
    if (props.inline) return panel;
    return h("div", { className: "ah-cmd-layer" }, h("div", { className: "ah-cmd-overlay", onClick: close }), panel);
  }

  window.Ahlawat = {
    Button: Button, EmailCopy: EmailCopy, Kbd: Kbd, SectionHeading: SectionHeading, Chip: Chip, StatusPill: StatusPill,
    StatGrid: StatGrid, Marquee: Marquee, SkillTag: SkillTag, ScoreRing: ScoreRing, SpotlightCard: SpotlightCard,
    IconTile: IconTile, WorkCard: WorkCard, Backdrop: Backdrop, Nav: Nav, Timeline: Timeline, SearchField: SearchField,
    ApiConsole: ApiConsole, CodeWindow: CodeWindow, FlowDiagram: FlowDiagram, LogList: LogList, Icon: Icon, CommandMenu: CommandMenu,
    highlight: highlight, ease: [0.22, 1, 0.36, 1]
  };
})();
