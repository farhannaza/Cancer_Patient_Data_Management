import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-VIFVOP3A.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/dashboard.tsx
init_remix_hmr();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\dashboard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\dashboard.tsx"
  );
  import.meta.hot.lastModified = "1728387881012.9487";
}
function DashboardRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Route to love Syafika - the more the better " }, void 0, false, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 24,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}
_c = DashboardRoute;
var _c;
$RefreshReg$(_c, "DashboardRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  DashboardRoute as default
};
//# sourceMappingURL=/build/routes/dashboard-77MMQP3X.js.map
