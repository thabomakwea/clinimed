/* @ds-bundle: {"format":3,"namespace":"StudioAdminDesignSystem_217327","components":[{"name":"Avatar","sourcePath":"components/avatar/Avatar.jsx"},{"name":"Badge","sourcePath":"components/badge/Badge.jsx"},{"name":"Button","sourcePath":"components/button/Button.jsx"},{"name":"Card","sourcePath":"components/card/Card.jsx"},{"name":"CardHeader","sourcePath":"components/card/Card.jsx"},{"name":"CardTitle","sourcePath":"components/card/Card.jsx"},{"name":"CardDescription","sourcePath":"components/card/Card.jsx"},{"name":"CardContent","sourcePath":"components/card/Card.jsx"},{"name":"CardFooter","sourcePath":"components/card/Card.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Label","sourcePath":"components/forms/Label.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"}],"sourceHashes":{"components/avatar/Avatar.jsx":"e70e39d31efa","components/badge/Badge.jsx":"16b2353dd549","components/button/Button.jsx":"3fcb33c58489","components/card/Card.jsx":"f213804ac174","components/forms/Checkbox.jsx":"452d372a3a17","components/forms/Input.jsx":"c437500a0248","components/forms/Label.jsx":"1a2a13e73c09","components/forms/Switch.jsx":"138a7efdcd05","ds-fallback.js":"738bc8d834d1","ui_kits/studio-admin/CustomersTable.jsx":"8d1847050b77","ui_kits/studio-admin/Dashboard.jsx":"7b93a5215c98","ui_kits/studio-admin/Login.jsx":"a44175cd78d3","ui_kits/studio-admin/Sidebar.jsx":"8c9aee22cf88","ui_kits/studio-admin/TopBar.jsx":"2914902989ab","ui_kits/studio-admin/data.jsx":"e9152770d385","ui_kits/studio-admin/icons.jsx":"fbb11b36ec34"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.StudioAdminDesignSystem_217327 = window.StudioAdminDesignSystem_217327 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/avatar/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.sa-avatar{
  position:relative;display:inline-flex;align-items:center;justify-content:center;
  flex-shrink:0;width:2rem;height:2rem;border-radius:var(--radius-lg);overflow:hidden;
  background:var(--muted);font-family:var(--font-sans);font-size:var(--text-xs);
  font-weight:500;color:var(--muted-foreground);user-select:none;
}
.sa-avatar[data-shape=circle]{border-radius:50%;}
.sa-avatar[data-size=sm]{width:1.5rem;height:1.5rem;font-size:10px;}
.sa-avatar[data-size=lg]{width:2.5rem;height:2.5rem;font-size:var(--text-sm);}
.sa-avatar img{width:100%;height:100%;object-fit:cover;}
.sa-avatar[data-grayscale=true] img{filter:grayscale(1);}
`;
let injected = false;
function useStyle() {
  if (!injected && typeof document !== "undefined") {
    const s = document.createElement("style");
    s.setAttribute("data-sa", "avatar");
    s.textContent = CSS;
    document.head.appendChild(s);
    injected = true;
  }
}
function Avatar({
  src,
  alt = "",
  fallback,
  size = "default",
  shape = "rounded",
  grayscale = false,
  className = "",
  ...props
}) {
  useStyle();
  const [errored, setErrored] = React.useState(false);
  const showImg = src && !errored;
  return /*#__PURE__*/React.createElement("span", _extends({
    "data-size": size,
    "data-shape": shape,
    "data-grayscale": String(grayscale),
    className: `sa-avatar ${className}`.trim()
  }, props), showImg ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    onError: () => setErrored(true)
  }) : fallback);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/avatar/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/badge/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.sa-badge{
  display:inline-flex;align-items:center;justify-content:center;gap:.25rem;width:fit-content;
  height:1.25rem;padding:.125rem .5rem;border:1px solid transparent;
  border-radius:var(--radius-4xl);font-family:var(--font-sans);font-size:var(--text-xs);
  font-weight:500;line-height:1;white-space:nowrap;overflow:hidden;
}
.sa-badge svg{width:.75rem;height:.75rem;pointer-events:none;}
.sa-badge[data-variant=default]{background:var(--primary);color:var(--primary-foreground);}
.sa-badge[data-variant=secondary]{background:var(--secondary);color:var(--secondary-foreground);}
.sa-badge[data-variant=destructive]{background:color-mix(in oklch,var(--destructive) 10%,transparent);color:var(--destructive);}
.sa-badge[data-variant=outline]{border-color:var(--border);color:var(--foreground);background:transparent;}
.sa-badge[data-variant=success]{background:color-mix(in oklch,oklch(0.62 0.17 145) 12%,transparent);color:oklch(0.52 0.17 145);}
`;
let injected = false;
function useStyle() {
  if (!injected && typeof document !== "undefined") {
    const s = document.createElement("style");
    s.setAttribute("data-sa", "badge");
    s.textContent = CSS;
    document.head.appendChild(s);
    injected = true;
  }
}
function Badge({
  variant = "default",
  className = "",
  children,
  ...props
}) {
  useStyle();
  return /*#__PURE__*/React.createElement("span", _extends({
    "data-variant": variant,
    className: `sa-badge ${className}`.trim()
  }, props), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badge/Badge.jsx", error: String((e && e.message) || e) }); }

// components/button/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.sa-btn{
  --sa-btn-radius: var(--radius-lg);
  display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;
  gap:.375rem;border:1px solid transparent;background-clip:padding-box;
  border-radius:var(--sa-btn-radius);font-family:var(--font-sans);
  font-size:var(--text-sm);font-weight:500;line-height:1;white-space:nowrap;
  cursor:pointer;user-select:none;transition:background-color .15s,color .15s,border-color .15s,box-shadow .15s,transform .05s;
  outline:none;height:2rem;padding:0 .625rem;
}
.sa-btn svg{width:1rem;height:1rem;flex-shrink:0;pointer-events:none;}
.sa-btn:focus-visible{border-color:var(--ring);box-shadow:0 0 0 3px color-mix(in oklch,var(--ring) 50%,transparent);}
.sa-btn:active:not([aria-haspopup]){transform:translateY(1px);}
.sa-btn:disabled{pointer-events:none;opacity:.5;}

.sa-btn[data-variant=default]{background:var(--primary);color:var(--primary-foreground);}
.sa-btn[data-variant=default]:hover{background:color-mix(in oklch,var(--primary) 80%,transparent);}
.sa-btn[data-variant=outline]{border-color:var(--border);background:var(--background);color:var(--foreground);}
.sa-btn[data-variant=outline]:hover{background:var(--muted);}
.sa-btn[data-variant=secondary]{background:var(--secondary);color:var(--secondary-foreground);}
.sa-btn[data-variant=secondary]:hover{background:color-mix(in oklch,var(--secondary),var(--foreground) 5%);}
.sa-btn[data-variant=ghost]{background:transparent;color:var(--foreground);}
.sa-btn[data-variant=ghost]:hover{background:var(--muted);}
.sa-btn[data-variant=destructive]{background:color-mix(in oklch,var(--destructive) 10%,transparent);color:var(--destructive);}
.sa-btn[data-variant=destructive]:hover{background:color-mix(in oklch,var(--destructive) 20%,transparent);}
.sa-btn[data-variant=link]{background:transparent;color:var(--primary);text-underline-offset:4px;height:auto;padding:0;}
.sa-btn[data-variant=link]:hover{text-decoration:underline;}

.sa-btn[data-size=xs]{height:1.5rem;gap:.25rem;padding:0 .5rem;font-size:var(--text-xs);border-radius:min(var(--radius-md),10px);}
.sa-btn[data-size=xs] svg{width:.75rem;height:.75rem;}
.sa-btn[data-size=sm]{height:1.75rem;gap:.25rem;padding:0 .625rem;font-size:.8rem;border-radius:min(var(--radius-md),12px);}
.sa-btn[data-size=sm] svg{width:.875rem;height:.875rem;}
.sa-btn[data-size=lg]{height:2.25rem;padding:0 .625rem;}
.sa-btn[data-size=icon]{width:2rem;height:2rem;padding:0;}
.sa-btn[data-size=icon-sm]{width:1.75rem;height:1.75rem;padding:0;border-radius:min(var(--radius-md),12px);}
.sa-btn[data-size=icon-lg]{width:2.25rem;height:2.25rem;padding:0;}
`;
let injected = false;
function useStyle() {
  if (!injected && typeof document !== "undefined") {
    const s = document.createElement("style");
    s.setAttribute("data-sa", "button");
    s.textContent = CSS;
    document.head.appendChild(s);
    injected = true;
  }
}
function Button({
  variant = "default",
  size = "default",
  className = "",
  type = "button",
  children,
  ...props
}) {
  useStyle();
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    "data-variant": variant,
    "data-size": size,
    className: `sa-btn ${className}`.trim()
  }, props), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/button/Button.jsx", error: String((e && e.message) || e) }); }

// components/card/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.sa-card{
  display:flex;flex-direction:column;gap:1rem;overflow:hidden;
  border-radius:var(--radius-xl);background:var(--card);color:var(--card-foreground);
  font-family:var(--font-sans);font-size:var(--text-sm);
  padding-top:1rem;padding-bottom:1rem;box-shadow:0 0 0 1px var(--ring-hairline);
}
.sa-card[data-size=sm]{gap:.75rem;padding-top:.75rem;padding-bottom:.75rem;}
.sa-card-header{display:grid;grid-auto-rows:min-content;align-items:start;gap:.25rem;padding:0 1rem;}
.sa-card[data-size=sm] .sa-card-header{padding:0 .75rem;}
.sa-card-title{font-family:var(--font-heading);font-size:var(--text-base);line-height:var(--leading-snug);font-weight:500;}
.sa-card-description{font-size:var(--text-sm);color:var(--muted-foreground);}
.sa-card-content{padding:0 1rem;}
.sa-card[data-size=sm] .sa-card-content{padding:0 .75rem;}
.sa-card-footer{display:flex;align-items:center;border-top:1px solid var(--border);background:color-mix(in oklch,var(--muted) 50%,transparent);padding:1rem;margin-bottom:-1rem;border-radius:0 0 var(--radius-xl) var(--radius-xl);}
`;
let injected = false;
function useStyle() {
  if (!injected && typeof document !== "undefined") {
    const s = document.createElement("style");
    s.setAttribute("data-sa", "card");
    s.textContent = CSS;
    document.head.appendChild(s);
    injected = true;
  }
}
function Card({
  size = "default",
  className = "",
  children,
  ...props
}) {
  useStyle();
  return /*#__PURE__*/React.createElement("div", _extends({
    "data-size": size,
    className: `sa-card ${className}`.trim()
  }, props), children);
}
function CardHeader({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `sa-card-header ${className}`.trim()
  }, props), children);
}
function CardTitle({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `sa-card-title ${className}`.trim()
  }, props), children);
}
function CardDescription({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `sa-card-description ${className}`.trim()
  }, props), children);
}
function CardContent({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `sa-card-content ${className}`.trim()
  }, props), children);
}
function CardFooter({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `sa-card-footer ${className}`.trim()
  }, props), children);
}
Object.assign(__ds_scope, { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/card/Card.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.sa-checkbox{
  appearance:none;position:relative;flex-shrink:0;width:1rem;height:1rem;
  border:1px solid var(--input);border-radius:var(--radius-sm);background:transparent;
  cursor:pointer;transition:background-color .15s,border-color .15s;outline:none;
}
.sa-checkbox:checked{background:var(--primary);border-color:var(--primary);}
.sa-checkbox:checked::after{
  content:"";position:absolute;left:4.5px;top:1.5px;width:4px;height:8px;
  border:solid var(--primary-foreground);border-width:0 2px 2px 0;transform:rotate(45deg);
}
.sa-checkbox:focus-visible{box-shadow:0 0 0 3px color-mix(in oklch,var(--ring) 50%,transparent);}
.sa-checkbox:disabled{opacity:.5;cursor:not-allowed;}
`;
let injected = false;
function useStyle() {
  if (!injected && typeof document !== "undefined") {
    const s = document.createElement("style");
    s.setAttribute("data-sa", "checkbox");
    s.textContent = CSS;
    document.head.appendChild(s);
    injected = true;
  }
}
function Checkbox({
  className = "",
  ...props
}) {
  useStyle();
  return /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    className: `sa-checkbox ${className}`.trim()
  }, props));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.sa-input{
  display:flex;width:100%;min-width:0;height:2rem;padding:.25rem .625rem;
  border:1px solid var(--input);border-radius:var(--radius-lg);background:transparent;
  font-family:var(--font-sans);font-size:var(--text-sm);color:var(--foreground);
  transition:border-color .15s,box-shadow .15s;outline:none;
}
.sa-input::placeholder{color:var(--muted-foreground);}
.sa-input:focus-visible{border-color:var(--ring);box-shadow:0 0 0 3px color-mix(in oklch,var(--ring) 50%,transparent);}
.sa-input:disabled{opacity:.5;cursor:not-allowed;background:color-mix(in oklch,var(--input) 50%,transparent);}
`;
let injected = false;
function useStyle() {
  if (!injected && typeof document !== "undefined") {
    const s = document.createElement("style");
    s.setAttribute("data-sa", "input");
    s.textContent = CSS;
    document.head.appendChild(s);
    injected = true;
  }
}
function Input({
  className = "",
  type = "text",
  ...props
}) {
  useStyle();
  return /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    className: `sa-input ${className}`.trim()
  }, props));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Label.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.sa-label{display:inline-flex;align-items:center;gap:.5rem;font-family:var(--font-sans);font-size:var(--text-sm);font-weight:500;line-height:1;color:var(--foreground);user-select:none;}
`;
let injected = false;
function useStyle() {
  if (!injected && typeof document !== "undefined") {
    const s = document.createElement("style");
    s.setAttribute("data-sa", "label");
    s.textContent = CSS;
    document.head.appendChild(s);
    injected = true;
  }
}
function Label({
  className = "",
  children,
  ...props
}) {
  useStyle();
  return /*#__PURE__*/React.createElement("label", _extends({
    className: `sa-label ${className}`.trim()
  }, props), children);
}
Object.assign(__ds_scope, { Label });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Label.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.sa-switch{
  appearance:none;position:relative;flex-shrink:0;width:2rem;height:1.15rem;
  border-radius:var(--radius-4xl);background:var(--secondary);border:1px solid var(--border);
  cursor:pointer;transition:background-color .15s;outline:none;
}
.sa-switch::after{
  content:"";position:absolute;top:50%;left:2px;transform:translateY(-50%);
  width:.85rem;height:.85rem;border-radius:50%;background:var(--background);
  box-shadow:var(--shadow-xs);transition:left .15s;
}
.sa-switch:checked{background:var(--primary);border-color:var(--primary);}
.sa-switch:checked::after{left:calc(100% - .85rem - 2px);}
.sa-switch:focus-visible{box-shadow:0 0 0 3px color-mix(in oklch,var(--ring) 50%,transparent);}
.sa-switch:disabled{opacity:.5;cursor:not-allowed;}
`;
let injected = false;
function useStyle() {
  if (!injected && typeof document !== "undefined") {
    const s = document.createElement("style");
    s.setAttribute("data-sa", "switch");
    s.textContent = CSS;
    document.head.appendChild(s);
    injected = true;
  }
}
function Switch({
  className = "",
  ...props
}) {
  useStyle();
  return /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    className: `sa-switch ${className}`.trim()
  }, props));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// ds-fallback.js
try { (() => {
/* ---------------------------------------------------------------------------
   Studio Admin DS — runtime fallback.
   When this HTML is rendered inside the Design System pipeline, the compiled
   _ds_bundle.js populates window.StudioAdminDesignSystem_217327 and this file
   no-ops. When opened standalone (raw preview / download), the bundle may not
   be injected, so we define the same token-driven primitives here. Either way,
   window.StudioAdminDesignSystem_217327 ends up with the full component set.
   --------------------------------------------------------------------------- */
(function () {
  const NS = window.StudioAdminDesignSystem_217327 = window.StudioAdminDesignSystem_217327 || {};
  const inject = (id, css) => {
    if (!document.getElementById(id)) {
      const s = document.createElement("style");
      s.id = id;
      s.textContent = css;
      document.head.appendChild(s);
    }
  };
  if (!NS.Button) {
    inject("sa-fb-button", `
      .sa-btn{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;gap:.375rem;border:1px solid transparent;background-clip:padding-box;border-radius:var(--radius-lg);font-family:var(--font-sans);font-size:var(--text-sm);font-weight:500;line-height:1;white-space:nowrap;cursor:pointer;user-select:none;transition:background-color .15s,color .15s,border-color .15s,box-shadow .15s,transform .05s;outline:none;height:2rem;padding:0 .625rem;}
      .sa-btn svg{width:1rem;height:1rem;flex-shrink:0;}
      .sa-btn:focus-visible{border-color:var(--ring);box-shadow:0 0 0 3px color-mix(in oklch,var(--ring) 50%,transparent);}
      .sa-btn:active:not([aria-haspopup]){transform:translateY(1px);}
      .sa-btn:disabled{pointer-events:none;opacity:.5;}
      .sa-btn[data-variant=default]{background:var(--primary);color:var(--primary-foreground);}
      .sa-btn[data-variant=default]:hover{background:color-mix(in oklch,var(--primary) 80%,transparent);}
      .sa-btn[data-variant=outline]{border-color:var(--border);background:var(--background);color:var(--foreground);}
      .sa-btn[data-variant=outline]:hover{background:var(--muted);}
      .sa-btn[data-variant=secondary]{background:var(--secondary);color:var(--secondary-foreground);}
      .sa-btn[data-variant=secondary]:hover{background:color-mix(in oklch,var(--secondary),var(--foreground) 5%);}
      .sa-btn[data-variant=ghost]{background:transparent;color:var(--foreground);}
      .sa-btn[data-variant=ghost]:hover{background:var(--muted);}
      .sa-btn[data-variant=destructive]{background:color-mix(in oklch,var(--destructive) 10%,transparent);color:var(--destructive);}
      .sa-btn[data-variant=destructive]:hover{background:color-mix(in oklch,var(--destructive) 20%,transparent);}
      .sa-btn[data-variant=link]{background:transparent;color:var(--primary);text-underline-offset:4px;height:auto;padding:0;}
      .sa-btn[data-variant=link]:hover{text-decoration:underline;}
      .sa-btn[data-size=xs]{height:1.5rem;gap:.25rem;padding:0 .5rem;font-size:var(--text-xs);border-radius:min(var(--radius-md),10px);}
      .sa-btn[data-size=xs] svg{width:.75rem;height:.75rem;}
      .sa-btn[data-size=sm]{height:1.75rem;gap:.25rem;padding:0 .625rem;font-size:.8rem;border-radius:min(var(--radius-md),12px);}
      .sa-btn[data-size=sm] svg{width:.875rem;height:.875rem;}
      .sa-btn[data-size=lg]{height:2.25rem;padding:0 .625rem;}
      .sa-btn[data-size=icon]{width:2rem;height:2rem;padding:0;}
      .sa-btn[data-size=icon-sm]{width:1.75rem;height:1.75rem;padding:0;border-radius:min(var(--radius-md),12px);}
      .sa-btn[data-size=icon-lg]{width:2.25rem;height:2.25rem;padding:0;}
    `);
    NS.Button = function ({
      variant = "default",
      size = "default",
      className = "",
      type = "button",
      children,
      ...p
    }) {
      return React.createElement("button", {
        type,
        "data-variant": variant,
        "data-size": size,
        className: `sa-btn ${className}`.trim(),
        ...p
      }, children);
    };
  }
  if (!NS.Badge) {
    inject("sa-fb-badge", `
      .sa-badge{display:inline-flex;align-items:center;justify-content:center;gap:.25rem;width:fit-content;height:1.25rem;padding:.125rem .5rem;border:1px solid transparent;border-radius:var(--radius-4xl);font-family:var(--font-sans);font-size:var(--text-xs);font-weight:500;line-height:1;white-space:nowrap;overflow:hidden;}
      .sa-badge svg{width:.75rem;height:.75rem;}
      .sa-badge[data-variant=default]{background:var(--primary);color:var(--primary-foreground);}
      .sa-badge[data-variant=secondary]{background:var(--secondary);color:var(--secondary-foreground);}
      .sa-badge[data-variant=destructive]{background:color-mix(in oklch,var(--destructive) 10%,transparent);color:var(--destructive);}
      .sa-badge[data-variant=outline]{border-color:var(--border);color:var(--foreground);background:transparent;}
      .sa-badge[data-variant=success]{background:color-mix(in oklch,oklch(0.62 0.17 145) 12%,transparent);color:oklch(0.52 0.17 145);}
    `);
    NS.Badge = function ({
      variant = "default",
      className = "",
      children,
      ...p
    }) {
      return React.createElement("span", {
        "data-variant": variant,
        className: `sa-badge ${className}`.trim(),
        ...p
      }, children);
    };
  }
  if (!NS.Card) {
    inject("sa-fb-card", `
      .sa-card{display:flex;flex-direction:column;gap:1rem;overflow:hidden;border-radius:var(--radius-xl);background:var(--card);color:var(--card-foreground);font-family:var(--font-sans);font-size:var(--text-sm);padding-top:1rem;padding-bottom:1rem;box-shadow:0 0 0 1px var(--ring-hairline);}
      .sa-card[data-size=sm]{gap:.75rem;padding-top:.75rem;padding-bottom:.75rem;}
      .sa-card-header{display:grid;grid-auto-rows:min-content;align-items:start;gap:.25rem;padding:0 1rem;}
      .sa-card-title{font-family:var(--font-heading);font-size:var(--text-base);line-height:var(--leading-snug);font-weight:500;}
      .sa-card-description{font-size:var(--text-sm);color:var(--muted-foreground);}
      .sa-card-content{padding:0 1rem;}
      .sa-card-footer{display:flex;align-items:center;border-top:1px solid var(--border);background:color-mix(in oklch,var(--muted) 50%,transparent);padding:1rem;margin-bottom:-1rem;border-radius:0 0 var(--radius-xl) var(--radius-xl);}
    `);
    const mk = (cls, tag = "div") => ({
      className = "",
      children,
      ...p
    }) => React.createElement(tag, {
      className: `${cls} ${className}`.trim(),
      ...p
    }, children);
    NS.Card = function ({
      size = "default",
      className = "",
      children,
      ...p
    }) {
      return React.createElement("div", {
        "data-size": size,
        className: `sa-card ${className}`.trim(),
        ...p
      }, children);
    };
    NS.CardHeader = mk("sa-card-header");
    NS.CardTitle = mk("sa-card-title");
    NS.CardDescription = mk("sa-card-description");
    NS.CardContent = mk("sa-card-content");
    NS.CardFooter = mk("sa-card-footer");
  }
  if (!NS.Input) {
    inject("sa-fb-input", `
      .sa-input{display:flex;width:100%;min-width:0;height:2rem;padding:.25rem .625rem;border:1px solid var(--input);border-radius:var(--radius-lg);background:transparent;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--foreground);transition:border-color .15s,box-shadow .15s;outline:none;}
      .sa-input::placeholder{color:var(--muted-foreground);}
      .sa-input:focus-visible{border-color:var(--ring);box-shadow:0 0 0 3px color-mix(in oklch,var(--ring) 50%,transparent);}
      .sa-label{display:inline-flex;align-items:center;gap:.5rem;font-family:var(--font-sans);font-size:var(--text-sm);font-weight:500;line-height:1;color:var(--foreground);user-select:none;}
    `);
    NS.Input = function ({
      className = "",
      type = "text",
      ...p
    }) {
      return React.createElement("input", {
        type,
        className: `sa-input ${className}`.trim(),
        ...p
      });
    };
    NS.Label = function ({
      className = "",
      children,
      ...p
    }) {
      return React.createElement("label", {
        className: `sa-label ${className}`.trim(),
        ...p
      }, children);
    };
  }
  if (!NS.Switch) {
    inject("sa-fb-switch", `
      .sa-switch{appearance:none;position:relative;flex-shrink:0;width:2rem;height:1.15rem;border-radius:var(--radius-4xl);background:var(--secondary);border:1px solid var(--border);cursor:pointer;transition:background-color .15s;outline:none;}
      .sa-switch::after{content:"";position:absolute;top:50%;left:2px;transform:translateY(-50%);width:.85rem;height:.85rem;border-radius:50%;background:var(--background);box-shadow:var(--shadow-xs);transition:left .15s;}
      .sa-switch:checked{background:var(--primary);border-color:var(--primary);}
      .sa-switch:checked::after{left:calc(100% - .85rem - 2px);}
      .sa-checkbox{appearance:none;position:relative;flex-shrink:0;width:1rem;height:1rem;border:1px solid var(--input);border-radius:var(--radius-sm);background:transparent;cursor:pointer;transition:background-color .15s,border-color .15s;outline:none;}
      .sa-checkbox:checked{background:var(--primary);border-color:var(--primary);}
      .sa-checkbox:checked::after{content:"";position:absolute;left:4.5px;top:1.5px;width:4px;height:8px;border:solid var(--primary-foreground);border-width:0 2px 2px 0;transform:rotate(45deg);}
    `);
    NS.Switch = function ({
      className = "",
      ...p
    }) {
      return React.createElement("input", {
        type: "checkbox",
        role: "switch",
        className: `sa-switch ${className}`.trim(),
        ...p
      });
    };
    NS.Checkbox = function ({
      className = "",
      ...p
    }) {
      return React.createElement("input", {
        type: "checkbox",
        className: `sa-checkbox ${className}`.trim(),
        ...p
      });
    };
  }
  if (!NS.Avatar) {
    inject("sa-fb-avatar", `
      .sa-avatar{position:relative;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;width:2rem;height:2rem;border-radius:var(--radius-lg);overflow:hidden;background:var(--muted);font-family:var(--font-sans);font-size:var(--text-xs);font-weight:500;color:var(--muted-foreground);user-select:none;}
      .sa-avatar[data-shape=circle]{border-radius:50%;}
      .sa-avatar[data-size=sm]{width:1.5rem;height:1.5rem;font-size:10px;}
      .sa-avatar[data-size=lg]{width:2.5rem;height:2.5rem;font-size:var(--text-sm);}
      .sa-avatar img{width:100%;height:100%;object-fit:cover;}
      .sa-avatar[data-grayscale=true] img{filter:grayscale(1);}
    `);
    NS.Avatar = function ({
      src,
      alt = "",
      fallback,
      size = "default",
      shape = "rounded",
      grayscale = false,
      className = "",
      ...p
    }) {
      const [err, setErr] = React.useState(false);
      const show = src && !err;
      return React.createElement("span", {
        "data-size": size,
        "data-shape": shape,
        "data-grayscale": String(grayscale),
        className: `sa-avatar ${className}`.trim(),
        ...p
      }, show ? React.createElement("img", {
        src,
        alt,
        onError: () => setErr(true)
      }) : fallback);
    };
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ds-fallback.js", error: String((e && e.message) || e) }); }

// ui_kits/studio-admin/CustomersTable.jsx
try { (() => {
/* Studio Admin — Recent customers table */
const NS_T = window.StudioAdminDesignSystem_217327;
const CUSTOMERS = [{
  name: "Olivia Martin",
  email: "olivia.martin@email.com",
  status: "Active",
  spend: "$1,999.00",
  plan: "Enterprise",
  av: 5
}, {
  name: "Jackson Lee",
  email: "jackson.lee@email.com",
  status: "Active",
  spend: "$39.00",
  plan: "Starter",
  av: 12
}, {
  name: "Isabella Nguyen",
  email: "isabella.n@email.com",
  status: "Churned",
  spend: "$299.00",
  plan: "Pro",
  av: 25
}, {
  name: "William Kim",
  email: "will.kim@email.com",
  status: "Active",
  spend: "$99.00",
  plan: "Pro",
  av: 33
}, {
  name: "Sofia Davis",
  email: "sofia.davis@email.com",
  status: "Pending",
  spend: "$39.00",
  plan: "Starter",
  av: 47
}, {
  name: "Ethan Carter",
  email: "ethan.carter@email.com",
  status: "Active",
  spend: "$2,499.00",
  plan: "Enterprise",
  av: 53
}];
function StatusBadge({
  status
}) {
  const {
    Badge
  } = NS_T;
  const map = {
    Active: "success",
    Churned: "destructive",
    Pending: "secondary"
  };
  return /*#__PURE__*/React.createElement(Badge, {
    variant: map[status] || "outline"
  }, status);
}
function CustomersTable() {
  const {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    Button,
    Checkbox,
    Avatar
  } = NS_T;
  const {
    Plus
  } = window.Icons;
  const initials = n => n.split(" ").map(p => p[0]).join("").slice(0, 2);
  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement("div", {
    className: "sa-perf-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CardTitle, null, "Recent Customers"), /*#__PURE__*/React.createElement(CardDescription, null, "286 customers this month")), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm"
  }, /*#__PURE__*/React.createElement(Plus, null), "Add customer"))), /*#__PURE__*/React.createElement("div", {
    className: "sa-table-wrap"
  }, /*#__PURE__*/React.createElement("table", {
    className: "sa-table"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    className: "sa-th-check"
  }, /*#__PURE__*/React.createElement(Checkbox, null)), /*#__PURE__*/React.createElement("th", null, "Customer"), /*#__PURE__*/React.createElement("th", null, "Status"), /*#__PURE__*/React.createElement("th", null, "Plan"), /*#__PURE__*/React.createElement("th", {
    className: "sa-th-right"
  }, "Total spend"))), /*#__PURE__*/React.createElement("tbody", null, CUSTOMERS.map(c => /*#__PURE__*/React.createElement("tr", {
    key: c.email
  }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Checkbox, null)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
    className: "sa-cust"
  }, /*#__PURE__*/React.createElement(Avatar, {
    size: "sm",
    src: `https://i.pravatar.cc/48?img=${c.av}`,
    fallback: initials(c.name),
    grayscale: true
  }), /*#__PURE__*/React.createElement("div", {
    className: "sa-cust-text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sa-cust-name"
  }, c.name), /*#__PURE__*/React.createElement("span", {
    className: "sa-cust-mail"
  }, c.email)))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(StatusBadge, {
    status: c.status
  })), /*#__PURE__*/React.createElement("td", {
    className: "sa-muted"
  }, c.plan), /*#__PURE__*/React.createElement("td", {
    className: "sa-th-right sa-mono"
  }, c.spend)))))));
}
Object.assign(window, {
  CustomersTable
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio-admin/CustomersTable.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio-admin/Dashboard.jsx
try { (() => {
/* Studio Admin — Default dashboard content */
const NS = window.StudioAdminDesignSystem_217327;
function MetricCards() {
  const {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    Badge
  } = NS;
  const {
    DollarSign,
    UserPlus,
    Users,
    Waves,
    TrendingUp,
    TrendingDown
  } = window.Icons;
  const data = [{
    icon: DollarSign,
    label: "Total Revenue",
    value: "$1,250.00",
    delta: "+12.5%",
    up: true,
    note: "Visitors up over last 6 months"
  }, {
    icon: UserPlus,
    label: "New Customers",
    value: "1,234",
    delta: "-20%",
    up: false,
    note: "Acquisition needs attention"
  }, {
    icon: Users,
    label: "Active Accounts",
    value: "45,678",
    delta: "+12.5%",
    up: true,
    note: "Engagement exceeds targets"
  }, {
    icon: Waves,
    label: "Growth Rate",
    value: "4.5%",
    delta: "+4.5%",
    up: true,
    note: "Meets growth projections"
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "sa-metric-grid"
  }, data.map(m => {
    const Ico = m.icon;
    const Trend = m.up ? TrendingUp : TrendingDown;
    return /*#__PURE__*/React.createElement(Card, {
      key: m.label,
      className: "sa-metric-card"
    }, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement(CardTitle, null, /*#__PURE__*/React.createElement("span", {
      className: "sa-metric-ico"
    }, /*#__PURE__*/React.createElement(Ico, null))), /*#__PURE__*/React.createElement(CardDescription, null, m.label)), /*#__PURE__*/React.createElement(CardContent, null, /*#__PURE__*/React.createElement("div", {
      className: "sa-metric-row"
    }, /*#__PURE__*/React.createElement("span", {
      className: "sa-metric-value"
    }, m.value), /*#__PURE__*/React.createElement(Badge, {
      variant: m.up ? "default" : "destructive"
    }, /*#__PURE__*/React.createElement(Trend, null), m.delta)), /*#__PURE__*/React.createElement("p", {
      className: "sa-metric-note"
    }, m.note)));
  }));
}

/* ---- smooth area chart ---- */
function smoothPath(pts) {
  if (!pts.length) return "";
  let d = `M ${pts[0][0]} ${pts[0][1]}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const [x0, y0] = pts[i];
    const [x1, y1] = pts[i + 1];
    const cx = (x0 + x1) / 2;
    d += ` C ${cx} ${y0}, ${cx} ${y1}, ${x1} ${y1}`;
  }
  return d;
}
function AreaChart() {
  const W = 900,
    H = 240,
    pad = 8;
  const seed = [38, 42, 35, 55, 48, 62, 52, 70, 58, 77, 66, 84, 72, 68, 90, 82, 96, 88, 104, 98, 86, 112, 100, 120];
  const seed2 = seed.map((v, i) => Math.max(14, v * 0.55 + i % 4 * 4));
  const max = 130;
  const toPts = arr => arr.map((v, i) => [pad + i / (arr.length - 1) * (W - pad * 2), H - pad - v / max * (H - pad * 2)]);
  const p1 = toPts(seed),
    p2 = toPts(seed2);
  const line1 = smoothPath(p1),
    line2 = smoothPath(p2);
  const area1 = `${line1} L ${W - pad} ${H} L ${pad} ${H} Z`;
  const area2 = `${line2} L ${W - pad} ${H} L ${pad} ${H} Z`;
  return /*#__PURE__*/React.createElement("svg", {
    className: "sa-chart",
    viewBox: `0 0 ${W} ${H}`,
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "g1",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "var(--chart-3)",
    stopOpacity: "0.30"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "var(--chart-3)",
    stopOpacity: "0"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "g2",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "var(--chart-1)",
    stopOpacity: "0.35"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "var(--chart-1)",
    stopOpacity: "0"
  }))), /*#__PURE__*/React.createElement("path", {
    d: area1,
    fill: "url(#g1)"
  }), /*#__PURE__*/React.createElement("path", {
    d: area2,
    fill: "url(#g2)"
  }), /*#__PURE__*/React.createElement("path", {
    d: line1,
    fill: "none",
    stroke: "var(--chart-3)",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: line2,
    fill: "none",
    stroke: "var(--chart-1)",
    strokeWidth: "2"
  }));
}
function PerformanceCard() {
  const {
    Card,
    CardHeader,
    CardTitle,
    CardDescription
  } = NS;
  const ranges = ["Last 3 months", "Last 30 days", "Last 7 days"];
  const [active, setActive] = React.useState(0);
  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement("div", {
    className: "sa-perf-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CardTitle, null, "Total Visitors"), /*#__PURE__*/React.createElement(CardDescription, null, "Total for the last 3 months")), /*#__PURE__*/React.createElement("div", {
    className: "sa-seg"
  }, ranges.map((r, i) => /*#__PURE__*/React.createElement("button", {
    key: r,
    type: "button",
    "data-active": i === active || undefined,
    onClick: () => setActive(i)
  }, r))))), /*#__PURE__*/React.createElement("div", {
    className: "sa-chart-wrap"
  }, /*#__PURE__*/React.createElement(AreaChart, null)), /*#__PURE__*/React.createElement("div", {
    className: "sa-chart-x"
  }, ["Apr 6", "Apr 17", "Apr 28", "May 9", "May 20", "Jun 1", "Jun 12", "Jun 23"].map(d => /*#__PURE__*/React.createElement("span", {
    key: d
  }, d))));
}
Object.assign(window, {
  MetricCards,
  PerformanceCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio-admin/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio-admin/Login.jsx
try { (() => {
/* Studio Admin — Login screen (auth v1) */
function LoginScreen({
  onLogin
}) {
  const {
    Button,
    Input,
    Label,
    Checkbox
  } = window.StudioAdminDesignSystem_217327;
  const {
    Command,
    Google
  } = window.Icons;
  const [email, setEmail] = React.useState("hello@arham.dev");
  return /*#__PURE__*/React.createElement("div", {
    className: "sa-login"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sa-login-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sa-login-brand"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sa-brand-mark"
  }, /*#__PURE__*/React.createElement(Command, null)), /*#__PURE__*/React.createElement("span", {
    className: "sa-login-word"
  }, "Studio Admin")), /*#__PURE__*/React.createElement("div", {
    className: "sa-login-head"
  }, /*#__PURE__*/React.createElement("h1", null, "Login to your account"), /*#__PURE__*/React.createElement("p", null, "Enter your details to access the dashboard.")), /*#__PURE__*/React.createElement("form", {
    className: "sa-login-form",
    onSubmit: e => {
      e.preventDefault();
      onLogin();
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "button",
    variant: "outline",
    className: "sa-login-google"
  }, /*#__PURE__*/React.createElement(Google, null), "Continue with Google"), /*#__PURE__*/React.createElement("div", {
    className: "sa-login-or"
  }, /*#__PURE__*/React.createElement("span", null, "or continue with")), /*#__PURE__*/React.createElement("div", {
    className: "sa-field"
  }, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "le"
  }, "Email Address"), /*#__PURE__*/React.createElement(Input, {
    id: "le",
    type: "email",
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: "you@example.com"
  })), /*#__PURE__*/React.createElement("div", {
    className: "sa-field"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sa-field-row"
  }, /*#__PURE__*/React.createElement(Label, {
    htmlFor: "lp"
  }, "Password"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "sa-link",
    onClick: e => e.preventDefault()
  }, "Forgot password?")), /*#__PURE__*/React.createElement(Input, {
    id: "lp",
    type: "password",
    defaultValue: "hunter2hunter2"
  })), /*#__PURE__*/React.createElement(Label, {
    className: "sa-remember"
  }, /*#__PURE__*/React.createElement(Checkbox, {
    defaultChecked: true
  }), " Remember me for 30 days"), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    className: "sa-login-submit"
  }, "Login"), /*#__PURE__*/React.createElement("p", {
    className: "sa-login-foot"
  }, "Don't have an account? ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "sa-link",
    onClick: e => e.preventDefault()
  }, "Register")))), /*#__PURE__*/React.createElement("div", {
    className: "sa-login-aside"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sa-login-aside-inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sa-brand-mark sa-brand-mark-lg"
  }, /*#__PURE__*/React.createElement(Command, null)), /*#__PURE__*/React.createElement("blockquote", null, "\"The cleanest admin starter I've shipped on. Theme presets and layout controls out of the box.\""), /*#__PURE__*/React.createElement("cite", null, "\u2014 Studio Admin, Pro workspace"))));
}
Object.assign(window, {
  LoginScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio-admin/Login.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio-admin/Sidebar.jsx
try { (() => {
/* Studio Admin — application sidebar (inset variant) */
const {
  sidebarGroups
} = window;
function NavRow({
  item,
  active,
  collapsed,
  onClick
}) {
  const Icon = item.icon;
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => !item.soon && onClick(item.key),
    "data-active": active || undefined,
    title: collapsed ? item.title : undefined,
    className: "sa-nav-row"
  }, Icon && /*#__PURE__*/React.createElement(Icon, {
    className: "sa-nav-ico"
  }), !collapsed && /*#__PURE__*/React.createElement("span", {
    className: "sa-nav-label"
  }, item.title), !collapsed && item.soon && /*#__PURE__*/React.createElement("span", {
    className: "sa-nav-soon"
  }, "Soon"), !collapsed && item.isNew && /*#__PURE__*/React.createElement("span", {
    className: "sa-nav-new"
  }, "New"));
}
function AppSidebar({
  active,
  onNavigate,
  collapsed,
  onLogout
}) {
  const {
    Command,
    ChevronsUpDown,
    Plus,
    Bell,
    EllipsisVertical
  } = window.Icons;
  return /*#__PURE__*/React.createElement("aside", {
    className: "sa-sidebar",
    "data-collapsed": collapsed || undefined
  }, /*#__PURE__*/React.createElement("div", {
    className: "sa-sb-head"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "sa-account"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sa-brand-mark"
  }, /*#__PURE__*/React.createElement(Command, null)), !collapsed && /*#__PURE__*/React.createElement("span", {
    className: "sa-account-text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sa-account-name"
  }, "Studio Admin"), /*#__PURE__*/React.createElement("span", {
    className: "sa-account-plan"
  }, "Pro workspace")), !collapsed && /*#__PURE__*/React.createElement(ChevronsUpDown, {
    className: "sa-account-chev"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "sa-sb-quick"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "sa-quick-btn"
  }, /*#__PURE__*/React.createElement(Plus, null), !collapsed && /*#__PURE__*/React.createElement("span", null, "Quick Create")), !collapsed && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "sa-quick-bell",
    "aria-label": "Notifications"
  }, /*#__PURE__*/React.createElement(Bell, null))), /*#__PURE__*/React.createElement("nav", {
    className: "sa-sb-nav"
  }, sidebarGroups.map(g => /*#__PURE__*/React.createElement("div", {
    className: "sa-nav-group",
    key: g.label
  }, !collapsed && /*#__PURE__*/React.createElement("div", {
    className: "sa-nav-grouplabel"
  }, g.label), g.items.map(it => /*#__PURE__*/React.createElement(NavRow, {
    key: it.key,
    item: it,
    collapsed: collapsed,
    active: active === it.key,
    onClick: onNavigate
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "sa-sb-foot"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "sa-user",
    onClick: onLogout,
    title: "Log out"
  }, /*#__PURE__*/React.createElement("img", {
    className: "sa-user-av",
    src: "https://i.pravatar.cc/64?img=68",
    alt: ""
  }), !collapsed && /*#__PURE__*/React.createElement("span", {
    className: "sa-user-text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sa-user-name"
  }, "Arham Khan"), /*#__PURE__*/React.createElement("span", {
    className: "sa-user-mail"
  }, "hello@arham.dev")), !collapsed && /*#__PURE__*/React.createElement(EllipsisVertical, {
    className: "sa-user-chev"
  }))));
}
Object.assign(window, {
  AppSidebar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio-admin/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio-admin/TopBar.jsx
try { (() => {
/* Studio Admin — top header bar */
function TopBar({
  onToggleSidebar,
  dark,
  onToggleTheme
}) {
  const {
    PanelLeft,
    Search,
    Settings2,
    Sun,
    Moon,
    Github
  } = window.Icons;
  const {
    Button
  } = window.StudioAdminDesignSystem_217327;
  return /*#__PURE__*/React.createElement("header", {
    className: "sa-topbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sa-topbar-left"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "sa-icon-ghost",
    onClick: onToggleSidebar,
    "aria-label": "Toggle sidebar"
  }, /*#__PURE__*/React.createElement(PanelLeft, null)), /*#__PURE__*/React.createElement("span", {
    className: "sa-topbar-sep"
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "sa-search"
  }, /*#__PURE__*/React.createElement(Search, {
    className: "sa-search-ico"
  }), /*#__PURE__*/React.createElement("span", {
    className: "sa-search-ph"
  }, "Search"), /*#__PURE__*/React.createElement("kbd", {
    className: "sa-kbd"
  }, "\u2318K"))), /*#__PURE__*/React.createElement("div", {
    className: "sa-topbar-right"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "sa-icon-ghost",
    "aria-label": "Layout controls"
  }, /*#__PURE__*/React.createElement(Settings2, null)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "sa-icon-ghost",
    onClick: onToggleTheme,
    "aria-label": "Toggle theme"
  }, dark ? /*#__PURE__*/React.createElement(Sun, null) : /*#__PURE__*/React.createElement(Moon, null)), /*#__PURE__*/React.createElement(Button, {
    size: "icon",
    "aria-label": "GitHub"
  }, /*#__PURE__*/React.createElement(Github, null)), /*#__PURE__*/React.createElement("img", {
    className: "sa-topbar-av",
    src: "https://i.pravatar.cc/64?img=68",
    alt: "Account"
  })));
}
Object.assign(window, {
  TopBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio-admin/TopBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio-admin/data.jsx
try { (() => {
/* Studio Admin — sidebar navigation model (mirrors sidebar-items.ts) */
function buildGroups() {
  const I = window.Icons;
  return [{
    label: "Dashboards",
    items: [{
      key: "default",
      title: "Default",
      icon: I.LayoutDashboard
    }, {
      key: "crm",
      title: "CRM",
      icon: I.ChartBar
    }, {
      key: "finance",
      title: "Finance",
      icon: I.Banknote
    }, {
      key: "analytics",
      title: "Analytics",
      icon: I.Gauge
    }, {
      key: "productivity",
      title: "Productivity",
      icon: I.ListTodo
    }, {
      key: "ecommerce",
      title: "E-commerce",
      icon: I.ShoppingBag
    }, {
      key: "academy",
      title: "Academy",
      icon: I.GraduationCap,
      isNew: true
    }, {
      key: "logistics",
      title: "Logistics",
      icon: I.Forklift
    }]
  }, {
    label: "Pages",
    items: [{
      key: "mail",
      title: "Email",
      icon: I.Mail
    }, {
      key: "chat",
      title: "Chat",
      icon: I.MessageSquare,
      soon: true
    }, {
      key: "calendar",
      title: "Calendar",
      icon: I.Calendar,
      soon: true
    }, {
      key: "kanban",
      title: "Kanban",
      icon: I.Kanban,
      soon: true
    }, {
      key: "invoice",
      title: "Invoice",
      icon: I.ReceiptText,
      soon: true
    }, {
      key: "users",
      title: "Users",
      icon: I.Users
    }, {
      key: "roles",
      title: "Roles",
      icon: I.Lock
    }, {
      key: "auth",
      title: "Authentication",
      icon: I.Fingerprint
    }]
  }];
}
window.sidebarGroups = buildGroups();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio-admin/data.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio-admin/icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Lucide icon set used across the Studio Admin UI kit.
   Geometry copied from lucide-react (ISC). Stroke 2, round caps, 24px grid. */
const S = paths => props => /*#__PURE__*/React.createElement("svg", _extends({
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, props), paths);
const Icons = {
  LayoutDashboard: S(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    width: "7",
    height: "9",
    x: "3",
    y: "3",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    width: "7",
    height: "5",
    x: "14",
    y: "3",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    width: "7",
    height: "9",
    x: "14",
    y: "12",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    width: "7",
    height: "5",
    x: "3",
    y: "16",
    rx: "1"
  }))),
  ChartBar: S(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 3v16a2 2 0 0 0 2 2h16"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 16v-3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 16V8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 16v-5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 16v-9"
  }))),
  Banknote: S(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    width: "20",
    height: "12",
    x: "2",
    y: "6",
    rx: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 12h.01M18 12h.01"
  }))),
  Gauge: S(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m12 14 4-4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.34 19a10 10 0 1 1 17.32 0"
  }))),
  ListTodo: S(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "5",
    width: "6",
    height: "6",
    rx: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m3 17 2 2 4-4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 6h8M13 12h8M13 18h8"
  }))),
  ShoppingBag: S(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 6h18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 10a4 4 0 0 1-8 0"
  }))),
  GraduationCap: S(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M21.42 10.92a1 1 0 0 0-.02-1.84L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.83l8.57 3.91a2 2 0 0 0 1.66 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 10v6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5"
  }))),
  Forklift: S(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 12H5a2 2 0 0 0-2 2v5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "13",
    cy: "19",
    r: "2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "5",
    cy: "19",
    r: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 19h3m5-17v17h6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 8h4l3 3v8"
  }))),
  Mail: S(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    width: "20",
    height: "16",
    x: "2",
    y: "4",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
  }))),
  MessageSquare: S(/*#__PURE__*/React.createElement("path", {
    d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
  })),
  Calendar: S(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M8 2v4M16 2v4"
  }), /*#__PURE__*/React.createElement("rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "4",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 10h18"
  }))),
  Kanban: S(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6 5v11"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 5v6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 5v14"
  }))),
  ReceiptText: S(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 8H8M16 12H8M13 16H8"
  }))),
  Users: S(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "7",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
  }))),
  Lock: S(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    width: "18",
    height: "11",
    x: "3",
    y: "11",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 11V7a5 5 0 0 1 10 0v4"
  }))),
  Fingerprint: S(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 13.12c0 2.38 0 6.38-1 8.88"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.29 21.02c.12-.6.43-2.3.5-3.02"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 12a10 10 0 0 1 18-6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 16h.01"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21.8 16c.2-2 .131-5.354 0-6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.65 22c.21-.66.45-1.32.57-2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 6.8a6 6 0 0 1 9 5.2v2"
  }))),
  Search: S(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.3-4.3"
  }))),
  Settings2: S(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M20 7h-9M14 17H5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17",
    cy: "17",
    r: "3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "7",
    r: "3"
  }))),
  Sun: S(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
  }))),
  Moon: S(/*#__PURE__*/React.createElement("path", {
    d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
  })),
  ChevronRight: S(/*#__PURE__*/React.createElement("path", {
    d: "m9 18 6-6-6-6"
  })),
  ChevronsUpDown: S(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m7 15 5 5 5-5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m7 9 5-5 5 5"
  }))),
  EllipsisVertical: S(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "5",
    r: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "19",
    r: "1"
  }))),
  Plus: S(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M12 5v14"
  }))),
  DollarSign: S(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
    x1: "12",
    x2: "12",
    y1: "2",
    y2: "22"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
  }))),
  UserPlus: S(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "7",
    r: "4"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "19",
    x2: "19",
    y1: "8",
    y2: "14"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "22",
    x2: "16",
    y1: "11",
    y2: "11"
  }))),
  Waves: S(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 12c.6.5 1.2 1 2.5 1C7 13 7 11 9.5 11c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 18c.6.5 1.2 1 2.5 1C7 19 7 17 9.5 17c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
  }))),
  TrendingUp: S(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M16 7h6v6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m22 7-8.5 8.5-5-5L2 17"
  }))),
  TrendingDown: S(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M16 17h6v-6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m22 17-8.5-8.5-5 5L2 7"
  }))),
  Command: S(/*#__PURE__*/React.createElement("path", {
    d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"
  })),
  Bell: S(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M10.27 21a2 2 0 0 0 3.46 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.26 15.36A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.64C19.4 13.98 18 12.22 18 8A6 6 0 0 0 6 8c0 4.22-1.4 5.98-2.74 7.36"
  }))),
  CreditCard: S(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    width: "20",
    height: "14",
    x: "2",
    y: "5",
    rx: "2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "2",
    x2: "22",
    y1: "10",
    y2: "10"
  }))),
  CircleUser: S(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 20.66a8 8 0 0 1 10 0"
  }))),
  LogOut: S(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m16 17 5-5-5-5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 12H9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
  }))),
  PanelLeft: S(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "3",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 3v18"
  }))),
  Github: props => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    fill: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.5 11.5 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.595 24 12.297c0-6.627-5.373-12-12-12"
  })),
  Google: props => /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "#4285F4",
    d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.76h3.57c2.08-1.92 3.27-4.74 3.27-8.09Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#34A853",
    d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.76c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#FBBC05",
    d: "M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84Z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#EA4335",
    d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38Z"
  }))
};
Object.assign(window, {
  Icons
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio-admin/icons.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardHeader = __ds_scope.CardHeader;

__ds_ns.CardTitle = __ds_scope.CardTitle;

__ds_ns.CardDescription = __ds_scope.CardDescription;

__ds_ns.CardContent = __ds_scope.CardContent;

__ds_ns.CardFooter = __ds_scope.CardFooter;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Label = __ds_scope.Label;

__ds_ns.Switch = __ds_scope.Switch;

})();
