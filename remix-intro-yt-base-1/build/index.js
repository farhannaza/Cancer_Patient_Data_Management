var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 51,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 101,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-C7UWCFPG.css";

// app/components/custom/Navigation.tsx
import { Link as Link2 } from "@remix-run/react";

// app/components/ui/navigation-menu.tsx
import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { ChevronDown } from "lucide-react";

// app/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// app/components/ui/navigation-menu.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var NavigationMenu = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV2(
  NavigationMenuPrimitive.Root,
  {
    ref,
    className: cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxDEV2(NavigationMenuViewport, {}, void 0, !1, {
        fileName: "app/components/ui/navigation-menu.tsx",
        lineNumber: 21,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/ui/navigation-menu.tsx",
    lineNumber: 12,
    columnNumber: 3
  },
  this
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;
var NavigationMenuList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV2(
  NavigationMenuPrimitive.List,
  {
    ref,
    className: cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/navigation-menu.tsx",
    lineNumber: 30,
    columnNumber: 3
  },
  this
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;
var navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
), NavigationMenuTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV2(
  NavigationMenuPrimitive.Trigger,
  {
    ref,
    className: cn(navigationMenuTriggerStyle(), "group", className),
    ...props,
    children: [
      children,
      " ",
      /* @__PURE__ */ jsxDEV2(
        ChevronDown,
        {
          className: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        },
        void 0,
        !1,
        {
          fileName: "app/components/ui/navigation-menu.tsx",
          lineNumber: 57,
          columnNumber: 5
        },
        this
      )
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/ui/navigation-menu.tsx",
    lineNumber: 51,
    columnNumber: 3
  },
  this
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;
var NavigationMenuContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV2(
  NavigationMenuPrimitive.Content,
  {
    ref,
    className: cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/navigation-menu.tsx",
    lineNumber: 69,
    columnNumber: 3
  },
  this
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;
var NavigationMenuLink = NavigationMenuPrimitive.Link, NavigationMenuViewport = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV2("div", { className: cn("absolute left-0 top-full flex justify-center"), children: /* @__PURE__ */ jsxDEV2(
  NavigationMenuPrimitive.Viewport,
  {
    className: cn(
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
      className
    ),
    ref,
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/navigation-menu.tsx",
    lineNumber: 87,
    columnNumber: 5
  },
  this
) }, void 0, !1, {
  fileName: "app/components/ui/navigation-menu.tsx",
  lineNumber: 86,
  columnNumber: 3
}, this));
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;
var NavigationMenuIndicator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV2(
  NavigationMenuPrimitive.Indicator,
  {
    ref,
    className: cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxDEV2("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" }, void 0, !1, {
      fileName: "app/components/ui/navigation-menu.tsx",
      lineNumber: 112,
      columnNumber: 5
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/navigation-menu.tsx",
    lineNumber: 104,
    columnNumber: 3
  },
  this
));
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;

// app/components/custom/Navigation.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function Navigation() {
  return /* @__PURE__ */ jsxDEV3("div", { className: "flex flex-col bg-white dark:bg-gray-900", children: /* @__PURE__ */ jsxDEV3("div", { className: "w-full px-4 py-6 flex items-center justify-between", children: [
    /* @__PURE__ */ jsxDEV3(
      Link2,
      {
        to: "/",
        className: "text-2xl font-bold text-gray-900 dark:text-gray-100",
        children: "OnchologyChain"
      },
      void 0,
      !1,
      {
        fileName: "app/components/custom/Navigation.tsx",
        lineNumber: 17,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV3(NavigationMenu, { children: /* @__PURE__ */ jsxDEV3(NavigationMenuList, { className: "flex gap-4", children: [
      /* @__PURE__ */ jsxDEV3(NavigationMenuLink, { asChild: !0, children: /* @__PURE__ */ jsxDEV3(
        Link2,
        {
          to: "/",
          className: "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100",
          children: "Home"
        },
        void 0,
        !1,
        {
          fileName: "app/components/custom/Navigation.tsx",
          lineNumber: 26,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/custom/Navigation.tsx",
        lineNumber: 25,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV3(NavigationMenuLink, { asChild: !0, children: /* @__PURE__ */ jsxDEV3(
        Link2,
        {
          className: "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100",
          to: "#",
          children: "Features"
        },
        void 0,
        !1,
        {
          fileName: "app/components/custom/Navigation.tsx",
          lineNumber: 34,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/custom/Navigation.tsx",
        lineNumber: 33,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV3(NavigationMenuLink, { asChild: !0, children: /* @__PURE__ */ jsxDEV3(
        Link2,
        {
          className: "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100",
          to: "form",
          children: "Update"
        },
        void 0,
        !1,
        {
          fileName: "app/components/custom/Navigation.tsx",
          lineNumber: 42,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/custom/Navigation.tsx",
        lineNumber: 41,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV3(NavigationMenuLink, { asChild: !0, children: /* @__PURE__ */ jsxDEV3(
        Link2,
        {
          className: "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100",
          to: "#",
          children: "Contact"
        },
        void 0,
        !1,
        {
          fileName: "app/components/custom/Navigation.tsx",
          lineNumber: 50,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/custom/Navigation.tsx",
        lineNumber: 49,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV3(NavigationMenuLink, { asChild: !0, children: /* @__PURE__ */ jsxDEV3(
        Link2,
        {
          className: "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100",
          to: "dashboard",
          children: "Dashboard"
        },
        void 0,
        !1,
        {
          fileName: "app/components/custom/Navigation.tsx",
          lineNumber: 58,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/custom/Navigation.tsx",
        lineNumber: 57,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/custom/Navigation.tsx",
      lineNumber: 24,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/custom/Navigation.tsx",
      lineNumber: 23,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/custom/Navigation.tsx",
    lineNumber: 16,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/custom/Navigation.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/components/custom/Footer.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
function Footer() {
  return /* @__PURE__ */ jsxDEV4("div", { className: "w-full h-20 flex items-center justify-center border-t text-gray-600 dark:border-gray-800 dark:text-gray-300", children: /* @__PURE__ */ jsxDEV4("p", { children: "\xA9 OnchologyChain. All rights reserved." }, void 0, !1, {
    fileName: "app/components/custom/Footer.tsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/custom/Footer.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/hooks/use-toast.ts
import * as React2 from "react";
var TOAST_LIMIT = 1, TOAST_REMOVE_DELAY = 1e6;
var count = 0;
function genId() {
  return count = (count + 1) % Number.MAX_SAFE_INTEGER, count.toString();
}
var toastTimeouts = /* @__PURE__ */ new Map(), addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId))
    return;
  let timeout = setTimeout(() => {
    toastTimeouts.delete(toastId), dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
}, reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === action.toast.id ? { ...t, ...action.toast } : t
        )
      };
    case "DISMISS_TOAST": {
      let { toastId } = action;
      return toastId ? addToRemoveQueue(toastId) : state.toasts.forEach((toast2) => {
        addToRemoveQueue(toast2.id);
      }), {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === toastId || toastId === void 0 ? {
            ...t,
            open: !1
          } : t
        )
      };
    }
    case "REMOVE_TOAST":
      return action.toastId === void 0 ? {
        ...state,
        toasts: []
      } : {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId)
      };
  }
}, listeners = [], memoryState = { toasts: [] };
function dispatch(action) {
  memoryState = reducer(memoryState, action), listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast({ ...props }) {
  let id = genId(), update = (props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: { ...props2, id }
  }), dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  return dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: !0,
      onOpenChange: (open) => {
        open || dismiss();
      }
    }
  }), {
    id,
    dismiss,
    update
  };
}
function useToast() {
  let [state, setState] = React2.useState(memoryState);
  return React2.useEffect(() => (listeners.push(setState), () => {
    let index = listeners.indexOf(setState);
    index > -1 && listeners.splice(index, 1);
  }), [state]), {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  };
}

// app/components/ui/toast.tsx
import * as React3 from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva as cva2 } from "class-variance-authority";
import { X } from "lucide-react";
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var ToastProvider = ToastPrimitives.Provider, ToastViewport = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV5(
  ToastPrimitives.Viewport,
  {
    ref,
    className: cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/toast.tsx",
    lineNumber: 14,
    columnNumber: 3
  },
  this
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
var toastVariants = cva2(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), Toast = React3.forwardRef(({ className, variant, ...props }, ref) => /* @__PURE__ */ jsxDEV5(
  ToastPrimitives.Root,
  {
    ref,
    className: cn(toastVariants({ variant }), className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/toast.tsx",
    lineNumber: 47,
    columnNumber: 5
  },
  this
));
Toast.displayName = ToastPrimitives.Root.displayName;
var ToastAction = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV5(
  ToastPrimitives.Action,
  {
    ref,
    className: cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/toast.tsx",
    lineNumber: 60,
    columnNumber: 3
  },
  this
));
ToastAction.displayName = ToastPrimitives.Action.displayName;
var ToastClose = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV5(
  ToastPrimitives.Close,
  {
    ref,
    className: cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    ),
    "toast-close": "",
    ...props,
    children: /* @__PURE__ */ jsxDEV5(X, { className: "h-4 w-4" }, void 0, !1, {
      fileName: "app/components/ui/toast.tsx",
      lineNumber: 84,
      columnNumber: 5
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/toast.tsx",
    lineNumber: 75,
    columnNumber: 3
  },
  this
));
ToastClose.displayName = ToastPrimitives.Close.displayName;
var ToastTitle = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV5(
  ToastPrimitives.Title,
  {
    ref,
    className: cn("text-sm font-semibold", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/toast.tsx",
    lineNumber: 93,
    columnNumber: 3
  },
  this
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;
var ToastDescription = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV5(
  ToastPrimitives.Description,
  {
    ref,
    className: cn("text-sm opacity-90", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/toast.tsx",
    lineNumber: 105,
    columnNumber: 3
  },
  this
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

// app/components/ui/toaster.tsx
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
function Toaster() {
  let { toasts } = useToast();
  return /* @__PURE__ */ jsxDEV6(ToastProvider, { children: [
    toasts.map(function({ id, title, description, action, ...props }) {
      return /* @__PURE__ */ jsxDEV6(Toast, { ...props, children: [
        /* @__PURE__ */ jsxDEV6("div", { className: "grid gap-1", children: [
          title && /* @__PURE__ */ jsxDEV6(ToastTitle, { children: title }, void 0, !1, {
            fileName: "app/components/ui/toaster.tsx",
            lineNumber: 20,
            columnNumber: 25
          }, this),
          description && /* @__PURE__ */ jsxDEV6(ToastDescription, { children: description }, void 0, !1, {
            fileName: "app/components/ui/toaster.tsx",
            lineNumber: 22,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/ui/toaster.tsx",
          lineNumber: 19,
          columnNumber: 13
        }, this),
        action,
        /* @__PURE__ */ jsxDEV6(ToastClose, {}, void 0, !1, {
          fileName: "app/components/ui/toaster.tsx",
          lineNumber: 26,
          columnNumber: 13
        }, this)
      ] }, id, !0, {
        fileName: "app/components/ui/toaster.tsx",
        lineNumber: 18,
        columnNumber: 11
      }, this);
    }),
    /* @__PURE__ */ jsxDEV6(ToastViewport, {}, void 0, !1, {
      fileName: "app/components/ui/toaster.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ui/toaster.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/root.tsx
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: tailwind_default },
  ...void 0 ? [{ rel: "stylesheet", href: void 0 }] : []
];
function App() {
  return /* @__PURE__ */ jsxDEV7("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV7("head", { children: [
      /* @__PURE__ */ jsxDEV7("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV7("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV7(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV7(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV7("body", { className: "mx-auto min-w-full", children: [
      /* @__PURE__ */ jsxDEV7(Toaster, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV7(Navigation, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV7("main", { children: /* @__PURE__ */ jsxDEV7(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV7(Footer, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV7(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV7(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV7(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  default: () => Dashboard
});
import { useState as useState2 } from "react";
import { Bell, Calendar, FilePlus, MoreVertical, AlignJustify } from "lucide-react";

// app/components/ui/button.tsx
import * as React4 from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva as cva3 } from "class-variance-authority";
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
var buttonVariants = cva3(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Button = React4.forwardRef(
  ({ className, variant, size, asChild = !1, ...props }, ref) => /* @__PURE__ */ jsxDEV8(
    asChild ? Slot : "button",
    {
      className: cn(buttonVariants({ variant, size, className })),
      ref,
      type: props.type || "button",
      onClick: () => console.log("Button clicked"),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/button.tsx",
      lineNumber: 46,
      columnNumber: 7
    },
    this
  )
);
Button.displayName = "Button";

// app/components/ui/card.tsx
import * as React5 from "react";
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
var Card = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV9(
  "div",
  {
    ref,
    className: cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/card.tsx",
    lineNumber: 9,
    columnNumber: 3
  },
  this
));
Card.displayName = "Card";
var CardHeader = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV9(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/card.tsx",
    lineNumber: 24,
    columnNumber: 3
  },
  this
));
CardHeader.displayName = "CardHeader";
var CardTitle = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV9(
  "h3",
  {
    ref,
    className: cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/card.tsx",
    lineNumber: 36,
    columnNumber: 3
  },
  this
));
CardTitle.displayName = "CardTitle";
var CardDescription = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV9(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/card.tsx",
    lineNumber: 51,
    columnNumber: 3
  },
  this
));
CardDescription.displayName = "CardDescription";
var CardContent = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV9("div", { ref, className: cn("p-6 pt-0", className), ...props }, void 0, !1, {
  fileName: "app/components/ui/card.tsx",
  lineNumber: 63,
  columnNumber: 3
}, this));
CardContent.displayName = "CardContent";
var CardFooter = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV9(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/card.tsx",
    lineNumber: 71,
    columnNumber: 3
  },
  this
));
CardFooter.displayName = "CardFooter";

// app/components/ui/dropdown-menu.tsx
import * as React6 from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
var DropdownMenu = DropdownMenuPrimitive.Root, DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
var DropdownMenuSubTrigger = React6.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxDEV10(
  DropdownMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxDEV10(ChevronRight, { className: "ml-auto h-4 w-4" }, void 0, !1, {
        fileName: "app/components/ui/dropdown-menu.tsx",
        lineNumber: 35,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 25,
    columnNumber: 3
  },
  this
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
var DropdownMenuSubContent = React6.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV10(
  DropdownMenuPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 45,
    columnNumber: 3
  },
  this
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
var DropdownMenuContent = React6.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxDEV10(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsxDEV10(
  DropdownMenuPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 62,
    columnNumber: 5
  },
  this
) }, void 0, !1, {
  fileName: "app/components/ui/dropdown-menu.tsx",
  lineNumber: 61,
  columnNumber: 3
}, this));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
var DropdownMenuItem = React6.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxDEV10(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 81,
    columnNumber: 3
  },
  this
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
var DropdownMenuCheckboxItem = React6.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxDEV10(
  DropdownMenuPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsxDEV10("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxDEV10(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsxDEV10(Check, { className: "h-4 w-4" }, void 0, !1, {
        fileName: "app/components/ui/dropdown-menu.tsx",
        lineNumber: 108,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/dropdown-menu.tsx",
        lineNumber: 107,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/dropdown-menu.tsx",
        lineNumber: 106,
        columnNumber: 5
      }, this),
      children
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 97,
    columnNumber: 3
  },
  this
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
var DropdownMenuRadioItem = React6.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV10(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxDEV10("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxDEV10(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsxDEV10(Circle, { className: "h-2 w-2 fill-current" }, void 0, !1, {
        fileName: "app/components/ui/dropdown-menu.tsx",
        lineNumber: 131,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/dropdown-menu.tsx",
        lineNumber: 130,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/dropdown-menu.tsx",
        lineNumber: 129,
        columnNumber: 5
      }, this),
      children
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 121,
    columnNumber: 3
  },
  this
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
var DropdownMenuLabel = React6.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxDEV10(
  DropdownMenuPrimitive.Label,
  {
    ref,
    className: cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 145,
    columnNumber: 3
  },
  this
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
var DropdownMenuSeparator = React6.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV10(
  DropdownMenuPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 161,
    columnNumber: 3
  },
  this
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
var DropdownMenuShortcut = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxDEV10(
  "span",
  {
    className: cn("ml-auto text-xs tracking-widest opacity-60", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/dropdown-menu.tsx",
    lineNumber: 174,
    columnNumber: 5
  },
  this
);
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

// app/components/ui/progress.tsx
import * as React7 from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
var Progress = React7.forwardRef(({ className, value, ...props }, ref) => /* @__PURE__ */ jsxDEV11(
  ProgressPrimitive.Root,
  {
    ref,
    className: cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxDEV11(
      ProgressPrimitive.Indicator,
      {
        className: "h-full w-full flex-1 bg-primary transition-all",
        style: { transform: `translateX(-${100 - (value || 0)}%)` }
      },
      void 0,
      !1,
      {
        fileName: "app/components/ui/progress.tsx",
        lineNumber: 18,
        columnNumber: 5
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/progress.tsx",
    lineNumber: 10,
    columnNumber: 3
  },
  this
));
Progress.displayName = ProgressPrimitive.Root.displayName;

// app/components/ui/table.tsx
import * as React8 from "react";
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
var Table = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV12("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ jsxDEV12(
  "table",
  {
    ref,
    className: cn("w-full caption-bottom text-sm", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/table.tsx",
    lineNumber: 10,
    columnNumber: 5
  },
  this
) }, void 0, !1, {
  fileName: "app/components/ui/table.tsx",
  lineNumber: 9,
  columnNumber: 3
}, this));
Table.displayName = "Table";
var TableHeader = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV12("thead", { ref, className: cn("[&_tr]:border-b", className), ...props }, void 0, !1, {
  fileName: "app/components/ui/table.tsx",
  lineNumber: 23,
  columnNumber: 3
}, this));
TableHeader.displayName = "TableHeader";
var TableBody = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV12(
  "tbody",
  {
    ref,
    className: cn("[&_tr:last-child]:border-0", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/table.tsx",
    lineNumber: 31,
    columnNumber: 3
  },
  this
));
TableBody.displayName = "TableBody";
var TableFooter = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV12(
  "tfoot",
  {
    ref,
    className: cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/table.tsx",
    lineNumber: 43,
    columnNumber: 3
  },
  this
));
TableFooter.displayName = "TableFooter";
var TableRow = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV12(
  "tr",
  {
    ref,
    className: cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/table.tsx",
    lineNumber: 58,
    columnNumber: 3
  },
  this
));
TableRow.displayName = "TableRow";
var TableHead = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV12(
  "th",
  {
    ref,
    className: cn(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/table.tsx",
    lineNumber: 73,
    columnNumber: 3
  },
  this
));
TableHead.displayName = "TableHead";
var TableCell = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV12(
  "td",
  {
    ref,
    className: cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/table.tsx",
    lineNumber: 88,
    columnNumber: 3
  },
  this
));
TableCell.displayName = "TableCell";
var TableCaption = React8.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV12(
  "caption",
  {
    ref,
    className: cn("mt-4 text-sm text-muted-foreground", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/table.tsx",
    lineNumber: 100,
    columnNumber: 3
  },
  this
));
TableCaption.displayName = "TableCaption";

// app/routes/dashboard.tsx
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
function Dashboard() {
  let [treatmentProgress, setTreatmentProgress] = useState2(65);
  return /* @__PURE__ */ jsxDEV13("div", { className: "flex flex-col min-h-screen bg-gray-100", children: [
    /* @__PURE__ */ jsxDEV13("header", { className: "bg-white shadow-sm", children: /* @__PURE__ */ jsxDEV13("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxDEV13("h1", { className: "text-2xl font-semibold text-gray-900", children: "Hello, Dr.Rahim" }, void 0, !1, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 32,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV13("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ jsxDEV13(Button, { variant: "ghost", size: "icon", children: /* @__PURE__ */ jsxDEV13(Bell, { className: "h-5 w-5" }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 35,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 34,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV13(DropdownMenu, { modal: !1, children: [
          /* @__PURE__ */ jsxDEV13(DropdownMenuTrigger, { asChild: !0, children: /* @__PURE__ */ jsxDEV13(Button, { variant: "ghost", className: "relative", children: /* @__PURE__ */ jsxDEV13(AlignJustify, { className: " relative h-5 w-5 rounded" }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 40,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 39,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 38,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV13(DropdownMenuContent, { align: "end", className: "z-50 ", children: [
            /* @__PURE__ */ jsxDEV13(DropdownMenuLabel, { children: "My Account" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 44,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV13(DropdownMenuSeparator, {}, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 45,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV13(DropdownMenuItem, { children: "Profile" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 46,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV13(DropdownMenuItem, { children: "Settings" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 47,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV13(DropdownMenuItem, { children: "Logout" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 48,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 43,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 37,
          columnNumber: 7
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 33,
        columnNumber: 5
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 31,
      columnNumber: 3
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV13("main", { className: "flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
      /* @__PURE__ */ jsxDEV13("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-4", children: [
        /* @__PURE__ */ jsxDEV13(Card, { children: [
          /* @__PURE__ */ jsxDEV13(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
            /* @__PURE__ */ jsxDEV13(CardTitle, { className: "text-sm font-medium", children: "Total Patients" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 61,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV13(AlignJustify, { className: "h-4 w-4 text-muted-foreground" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 62,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 60,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV13(CardContent, { children: [
            /* @__PURE__ */ jsxDEV13("div", { className: "text-2xl font-bold", children: "1,234" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 65,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV13("p", { className: "text-xs text-muted-foreground", children: "+20% from last month" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 66,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 64,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 59,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV13(Card, { children: [
          /* @__PURE__ */ jsxDEV13(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
            /* @__PURE__ */ jsxDEV13(CardTitle, { className: "text-sm font-medium", children: "Active Treatments" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 71,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV13(FilePlus, { className: "h-4 w-4 text-muted-foreground" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 72,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 70,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV13(CardContent, { children: [
            /* @__PURE__ */ jsxDEV13("div", { className: "text-2xl font-bold", children: "567" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 75,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV13("p", { className: "text-xs text-muted-foreground", children: "+5% from last week" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 76,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 74,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 69,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV13(Card, { children: [
          /* @__PURE__ */ jsxDEV13(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
            /* @__PURE__ */ jsxDEV13(CardTitle, { className: "text-sm font-medium", children: "Upcoming Appointments" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 81,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV13(Calendar, { className: "h-4 w-4 text-muted-foreground" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 82,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 80,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV13(CardContent, { children: [
            /* @__PURE__ */ jsxDEV13("div", { className: "text-2xl font-bold", children: "89" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 85,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV13("p", { className: "text-xs text-muted-foreground", children: "For the next 7 days" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 86,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 84,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 79,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV13(Card, { children: [
          /* @__PURE__ */ jsxDEV13(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
            /* @__PURE__ */ jsxDEV13(CardTitle, { className: "text-sm font-medium", children: "Treatment Success Rate" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 91,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV13(MoreVertical, { className: "h-4 w-4 text-muted-foreground" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 92,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 90,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV13(CardContent, { children: [
            /* @__PURE__ */ jsxDEV13("div", { className: "text-2xl font-bold", children: "78%" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 95,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV13("p", { className: "text-xs text-muted-foreground", children: "+2% from last year" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 96,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 94,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 89,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV13("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6", children: [
        /* @__PURE__ */ jsxDEV13(Card, { className: "col-span-2", children: [
          /* @__PURE__ */ jsxDEV13(CardHeader, { children: /* @__PURE__ */ jsxDEV13(CardTitle, { children: "Upcoming Appointments" }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 104,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 103,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV13(CardContent, { children: /* @__PURE__ */ jsxDEV13(Table, { children: [
            /* @__PURE__ */ jsxDEV13(TableHeader, { children: /* @__PURE__ */ jsxDEV13(TableRow, { children: [
              /* @__PURE__ */ jsxDEV13(TableHead, { children: "Patient" }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 110,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV13(TableHead, { children: "Date" }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 111,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV13(TableHead, { children: "Time" }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 112,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV13(TableHead, { children: "Type" }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 113,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 109,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 108,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV13(TableBody, { children: [
              /* @__PURE__ */ jsxDEV13(TableRow, { children: [
                /* @__PURE__ */ jsxDEV13(TableCell, { children: "Alia Rahim" }, void 0, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 118,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV13(TableCell, { children: "2023-05-15" }, void 0, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 119,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV13(TableCell, { children: "09:00 AM" }, void 0, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 120,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV13(TableCell, { children: "Chemotherapy" }, void 0, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 121,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 117,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV13(TableRow, { children: [
                /* @__PURE__ */ jsxDEV13(TableCell, { children: "Maria Kasim" }, void 0, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 124,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV13(TableCell, { children: "2023-05-15" }, void 0, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 125,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV13(TableCell, { children: "11:30 AM" }, void 0, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 126,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV13(TableCell, { children: "Radiation" }, void 0, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 127,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 123,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV13(TableRow, { children: [
                /* @__PURE__ */ jsxDEV13(TableCell, { children: "Abu Ali" }, void 0, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 130,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV13(TableCell, { children: "2023-05-16" }, void 0, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 131,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV13(TableCell, { children: "02:00 PM" }, void 0, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 132,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV13(TableCell, { children: "Follow-up" }, void 0, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 133,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 129,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 116,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 107,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 106,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 102,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV13(Card, { children: [
          /* @__PURE__ */ jsxDEV13(CardHeader, { children: /* @__PURE__ */ jsxDEV13(CardTitle, { children: "Treatment Progress" }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 142,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 141,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV13(CardContent, { children: /* @__PURE__ */ jsxDEV13("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxDEV13("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxDEV13("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxDEV13("p", { className: "text-sm font-medium", children: "Overall Progress" }, void 0, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 148,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV13("p", { className: "text-2xl font-bold", children: [
                  treatmentProgress,
                  "%"
                ] }, void 0, !0, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 149,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 147,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV13(
                "div",
                {
                  className: "w-32 h-32 rounded-full border-8 border-primary",
                  style: {
                    background: `conic-gradient(var(--primary) ${treatmentProgress}%, transparent 0)`
                  }
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 151,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 146,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV13(Progress, { value: treatmentProgress, className: "w-full" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 158,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV13("p", { className: "text-sm text-muted-foreground", children: "Next milestone: 75% - Estimated 2 weeks" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 159,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 145,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 144,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 140,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 101,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV13(Card, { className: "mt-6", children: [
        /* @__PURE__ */ jsxDEV13(CardHeader, { children: /* @__PURE__ */ jsxDEV13(CardTitle, { children: "Recent Test Results" }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 169,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 168,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV13(CardContent, { children: /* @__PURE__ */ jsxDEV13(Table, { children: [
          /* @__PURE__ */ jsxDEV13(TableHeader, { children: /* @__PURE__ */ jsxDEV13(TableRow, { children: [
            /* @__PURE__ */ jsxDEV13(TableHead, { children: "Date" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 175,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV13(TableHead, { children: "Test Type" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 176,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV13(TableHead, { children: "Result" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 177,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV13(TableHead, { children: "Status" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 178,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 174,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 173,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV13(TableBody, { children: [
            /* @__PURE__ */ jsxDEV13(TableRow, { children: [
              /* @__PURE__ */ jsxDEV13(TableCell, { children: "2023-05-10" }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 183,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV13(TableCell, { children: "Blood Count" }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 184,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV13(TableCell, { children: "Normal" }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 185,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV13(TableCell, { children: /* @__PURE__ */ jsxDEV13("span", { className: "inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800", children: "Good" }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 187,
                columnNumber: 21
              }, this) }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 186,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 182,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV13(TableRow, { children: [
              /* @__PURE__ */ jsxDEV13(TableCell, { children: "2023-05-05" }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 193,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV13(TableCell, { children: "MRI Scan" }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 194,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV13(TableCell, { children: "No significant changes" }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 195,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV13(TableCell, { children: /* @__PURE__ */ jsxDEV13("span", { className: "inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800", children: "Stable" }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 197,
                columnNumber: 21
              }, this) }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 196,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 192,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV13(TableRow, { children: [
              /* @__PURE__ */ jsxDEV13(TableCell, { children: "2023-04-28" }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 203,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV13(TableCell, { children: "Tumor Marker" }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 204,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV13(TableCell, { children: "Slightly elevated" }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 205,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV13(TableCell, { children: /* @__PURE__ */ jsxDEV13("span", { className: "inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800", children: "Monitor" }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 207,
                columnNumber: 21
              }, this) }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 206,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 202,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 181,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 172,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 171,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 167,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => RootRoute,
  meta: () => meta
});

// app/components/custom/Hero.tsx
import { Link as Link3 } from "@remix-run/react";
import { jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
function Hero() {
  return /* @__PURE__ */ jsxDEV14("section", { className: "w-full min-h-screen py-12 md:py-24 lg:py-32", children: /* @__PURE__ */ jsxDEV14("div", { className: "container px-4 md:px-6", children: /* @__PURE__ */ jsxDEV14("div", { className: "flex flex-col items-center justify-center space-y-4 text-center", children: [
    /* @__PURE__ */ jsxDEV14("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxDEV14("h1", { className: "text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none my-8", children: "OnchologyChain" }, void 0, !1, {
        fileName: "app/components/custom/Hero.tsx",
        lineNumber: 9,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV14("p", { className: "mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 pb-3", children: "Cancer Patient's Data Management System" }, void 0, !1, {
        fileName: "app/components/custom/Hero.tsx",
        lineNumber: 12,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/custom/Hero.tsx",
      lineNumber: 8,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV14("div", { className: "space-x-4", children: [
      /* @__PURE__ */ jsxDEV14(
        Link3,
        {
          className: "inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300",
          to: "#",
          children: "Get Started"
        },
        void 0,
        !1,
        {
          fileName: "app/components/custom/Hero.tsx",
          lineNumber: 17,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ jsxDEV14(
        Link3,
        {
          className: "inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300",
          to: "#",
          children: "Learn More"
        },
        void 0,
        !1,
        {
          fileName: "app/components/custom/Hero.tsx",
          lineNumber: 23,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/custom/Hero.tsx",
      lineNumber: 16,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/custom/Hero.tsx",
    lineNumber: 7,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/custom/Hero.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/custom/Hero.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
import { jsxDEV as jsxDEV15 } from "react/jsx-dev-runtime";
var meta = () => [
  { title: "OnchologyChain" },
  { name: "description", content: "Welcome to OnchologyChain!" }
];
function RootRoute() {
  return /* @__PURE__ */ jsxDEV15(Hero, {}, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 13,
    columnNumber: 10
  }, this);
}

// app/routes/form.tsx
var form_exports = {};
__export(form_exports, {
  default: () => NewPatientForm
});
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// app/routes/formcomp/zodt.tsx
import * as z from "zod";
var formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters."
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters."
  }),
  gender: z.string({
    required_error: "Please select a gender."
  }),
  contactNumber: z.string().min(10, {
    message: "Contact number must be at least 10 digits."
  }),
  cancerType: z.string({
    required_error: "Please select a cancer type."
  })
});

// app/components/ui/input.tsx
import * as React9 from "react";
import { jsxDEV as jsxDEV16 } from "react/jsx-dev-runtime";
var Input = React9.forwardRef(
  ({ className, type, ...props }, ref) => /* @__PURE__ */ jsxDEV16(
    "input",
    {
      type,
      className: cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ref,
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/input.tsx",
      lineNumber: 11,
      columnNumber: 7
    },
    this
  )
);
Input.displayName = "Input";

// app/components/ui/select.tsx
import * as React10 from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check as Check2, ChevronDown as ChevronDown2, ChevronUp } from "lucide-react";
import { jsxDEV as jsxDEV17 } from "react/jsx-dev-runtime";
var Select = SelectPrimitive.Root;
var SelectValue = SelectPrimitive.Value, SelectTrigger = React10.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV17(
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxDEV17(SelectPrimitive.Icon, { asChild: !0, children: /* @__PURE__ */ jsxDEV17(ChevronDown2, { className: "h-4 w-4 opacity-50" }, void 0, !1, {
        fileName: "app/components/ui/select.tsx",
        lineNumber: 27,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/select.tsx",
        lineNumber: 26,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/ui/select.tsx",
    lineNumber: 17,
    columnNumber: 3
  },
  this
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectScrollUpButton = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV17(
  SelectPrimitive.ScrollUpButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxDEV17(ChevronUp, { className: "h-4 w-4" }, void 0, !1, {
      fileName: "app/components/ui/select.tsx",
      lineNumber: 45,
      columnNumber: 5
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/select.tsx",
    lineNumber: 37,
    columnNumber: 3
  },
  this
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
var SelectScrollDownButton = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV17(
  SelectPrimitive.ScrollDownButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxDEV17(ChevronDown2, { className: "h-4 w-4" }, void 0, !1, {
      fileName: "app/components/ui/select.tsx",
      lineNumber: 62,
      columnNumber: 5
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/select.tsx",
    lineNumber: 54,
    columnNumber: 3
  },
  this
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
var SelectContent = React10.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsxDEV17(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxDEV17(
  SelectPrimitive.Content,
  {
    ref,
    className: cn(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsxDEV17(SelectScrollUpButton, {}, void 0, !1, {
        fileName: "app/components/ui/select.tsx",
        lineNumber: 84,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV17(
        SelectPrimitive.Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        },
        void 0,
        !1,
        {
          fileName: "app/components/ui/select.tsx",
          lineNumber: 85,
          columnNumber: 7
        },
        this
      ),
      /* @__PURE__ */ jsxDEV17(SelectScrollDownButton, {}, void 0, !1, {
        fileName: "app/components/ui/select.tsx",
        lineNumber: 94,
        columnNumber: 7
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/ui/select.tsx",
    lineNumber: 73,
    columnNumber: 5
  },
  this
) }, void 0, !1, {
  fileName: "app/components/ui/select.tsx",
  lineNumber: 72,
  columnNumber: 3
}, this));
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV17(
  SelectPrimitive.Label,
  {
    ref,
    className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/select.tsx",
    lineNumber: 104,
    columnNumber: 3
  },
  this
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectItem = React10.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV17(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxDEV17("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxDEV17(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsxDEV17(Check2, { className: "h-4 w-4" }, void 0, !1, {
        fileName: "app/components/ui/select.tsx",
        lineNumber: 126,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/select.tsx",
        lineNumber: 125,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/components/ui/select.tsx",
        lineNumber: 124,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ jsxDEV17(SelectPrimitive.ItemText, { children }, void 0, !1, {
        fileName: "app/components/ui/select.tsx",
        lineNumber: 130,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/ui/select.tsx",
    lineNumber: 116,
    columnNumber: 3
  },
  this
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectSeparator = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV17(
  SelectPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/select.tsx",
    lineNumber: 139,
    columnNumber: 3
  },
  this
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

// app/components/ui/form.tsx
import * as React12 from "react";
import { Slot as Slot2 } from "@radix-ui/react-slot";
import {
  Controller,
  FormProvider,
  useFormContext
} from "react-hook-form";

// app/components/ui/label.tsx
import * as React11 from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva as cva4 } from "class-variance-authority";
import { jsxDEV as jsxDEV18 } from "react/jsx-dev-runtime";
var labelVariants = cva4(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Label3 = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV18(
  LabelPrimitive.Root,
  {
    ref,
    className: cn(labelVariants(), className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/label.tsx",
    lineNumber: 16,
    columnNumber: 3
  },
  this
));
Label3.displayName = LabelPrimitive.Root.displayName;

// app/components/ui/form.tsx
import { jsxDEV as jsxDEV19 } from "react/jsx-dev-runtime";
var Form = FormProvider, FormFieldContext = React12.createContext(
  {}
), FormField = ({
  ...props
}) => /* @__PURE__ */ jsxDEV19(FormFieldContext.Provider, { value: { name: props.name }, children: /* @__PURE__ */ jsxDEV19(Controller, { ...props }, void 0, !1, {
  fileName: "app/components/ui/form.tsx",
  lineNumber: 37,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/ui/form.tsx",
  lineNumber: 36,
  columnNumber: 5
}, this), useFormField = () => {
  let fieldContext = React12.useContext(FormFieldContext), itemContext = React12.useContext(FormItemContext), { getFieldState, formState } = useFormContext(), fieldState = getFieldState(fieldContext.name, formState);
  if (!fieldContext)
    throw new Error("useFormField should be used within <FormField>");
  let { id } = itemContext;
  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  };
}, FormItemContext = React12.createContext(
  {}
), FormItem = React12.forwardRef(({ className, ...props }, ref) => {
  let id = React12.useId();
  return /* @__PURE__ */ jsxDEV19(FormItemContext.Provider, { value: { id }, children: /* @__PURE__ */ jsxDEV19("div", { ref, className: cn("space-y-2", className), ...props }, void 0, !1, {
    fileName: "app/components/ui/form.tsx",
    lineNumber: 81,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/ui/form.tsx",
    lineNumber: 80,
    columnNumber: 5
  }, this);
});
FormItem.displayName = "FormItem";
var FormLabel = React12.forwardRef(({ className, ...props }, ref) => {
  let { error, formItemId } = useFormField();
  return /* @__PURE__ */ jsxDEV19(
    Label3,
    {
      ref,
      className: cn(error && "text-destructive", className),
      htmlFor: formItemId,
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/form.tsx",
      lineNumber: 94,
      columnNumber: 5
    },
    this
  );
});
FormLabel.displayName = "FormLabel";
var FormControl = React12.forwardRef(({ ...props }, ref) => {
  let { error, formItemId, formDescriptionId, formMessageId } = useFormField();
  return /* @__PURE__ */ jsxDEV19(
    Slot2,
    {
      ref,
      id: formItemId,
      "aria-describedby": error ? `${formDescriptionId} ${formMessageId}` : `${formDescriptionId}`,
      "aria-invalid": !!error,
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/form.tsx",
      lineNumber: 111,
      columnNumber: 5
    },
    this
  );
});
FormControl.displayName = "FormControl";
var FormDescription = React12.forwardRef(({ className, ...props }, ref) => {
  let { formDescriptionId } = useFormField();
  return /* @__PURE__ */ jsxDEV19(
    "p",
    {
      ref,
      id: formDescriptionId,
      className: cn("text-sm text-muted-foreground", className),
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/form.tsx",
      lineNumber: 133,
      columnNumber: 5
    },
    this
  );
});
FormDescription.displayName = "FormDescription";
var FormMessage = React12.forwardRef(({ className, children, ...props }, ref) => {
  let { error, formMessageId } = useFormField(), body = error ? String(error?.message) : children;
  return body ? /* @__PURE__ */ jsxDEV19(
    "p",
    {
      ref,
      id: formMessageId,
      className: cn("text-sm font-medium text-destructive", className),
      ...props,
      children: body
    },
    void 0,
    !1,
    {
      fileName: "app/components/ui/form.tsx",
      lineNumber: 155,
      columnNumber: 5
    },
    this
  ) : null;
});
FormMessage.displayName = "FormMessage";

// app/routes/form.tsx
import { jsxDEV as jsxDEV20 } from "react/jsx-dev-runtime";
function NewPatientForm() {
  let form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      contactNumber: "",
      gender: "",
      cancerType: ""
    }
  });
  function onSubmit(values) {
    console.log("Form submitted!", values), toast({
      title: "New patient data submitted",
      description: "The form was submitted successfully."
    });
  }
  return /* @__PURE__ */ jsxDEV20("div", { className: "max-w-2xl mx-auto p-4 bg-white shadow rounded-lg", children: [
    /* @__PURE__ */ jsxDEV20("h1", { className: "text-2xl font-bold mb-6", children: "New Cancer Patient Registration" }, void 0, !1, {
      fileName: "app/routes/form.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV20(Form, { ...form, children: /* @__PURE__ */ jsxDEV20("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-8", children: [
      /* @__PURE__ */ jsxDEV20("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxDEV20(
          FormField,
          {
            control: form.control,
            name: "firstName",
            render: ({ field }) => /* @__PURE__ */ jsxDEV20(FormItem, { children: [
              /* @__PURE__ */ jsxDEV20(FormLabel, { children: "First name" }, void 0, !1, {
                fileName: "app/routes/form.tsx",
                lineNumber: 57,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV20(FormControl, { children: /* @__PURE__ */ jsxDEV20(Input, { placeholder: "First", ...field }, void 0, !1, {
                fileName: "app/routes/form.tsx",
                lineNumber: 59,
                columnNumber: 21
              }, this) }, void 0, !1, {
                fileName: "app/routes/form.tsx",
                lineNumber: 58,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV20(FormMessage, {}, void 0, !1, {
                fileName: "app/routes/form.tsx",
                lineNumber: 61,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/form.tsx",
              lineNumber: 56,
              columnNumber: 17
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/form.tsx",
            lineNumber: 52,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV20(
          FormField,
          {
            control: form.control,
            name: "lastName",
            render: ({ field }) => /* @__PURE__ */ jsxDEV20(FormItem, { children: [
              /* @__PURE__ */ jsxDEV20(FormLabel, { children: "Last name" }, void 0, !1, {
                fileName: "app/routes/form.tsx",
                lineNumber: 70,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV20(FormControl, { children: /* @__PURE__ */ jsxDEV20(Input, { placeholder: "Last", ...field }, void 0, !1, {
                fileName: "app/routes/form.tsx",
                lineNumber: 72,
                columnNumber: 21
              }, this) }, void 0, !1, {
                fileName: "app/routes/form.tsx",
                lineNumber: 71,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV20(FormMessage, {}, void 0, !1, {
                fileName: "app/routes/form.tsx",
                lineNumber: 74,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/form.tsx",
              lineNumber: 69,
              columnNumber: 17
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/form.tsx",
            lineNumber: 65,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/form.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV20("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxDEV20(
          FormField,
          {
            control: form.control,
            name: "gender",
            render: ({ field }) => /* @__PURE__ */ jsxDEV20(FormItem, { children: [
              /* @__PURE__ */ jsxDEV20(FormLabel, { children: "Gender" }, void 0, !1, {
                fileName: "app/routes/form.tsx",
                lineNumber: 85,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV20(Select, { onValueChange: field.onChange, defaultValue: field.value, children: [
                /* @__PURE__ */ jsxDEV20(FormControl, { children: /* @__PURE__ */ jsxDEV20(SelectTrigger, { children: /* @__PURE__ */ jsxDEV20(SelectValue, { placeholder: "Select gender" }, void 0, !1, {
                  fileName: "app/routes/form.tsx",
                  lineNumber: 89,
                  columnNumber: 25
                }, this) }, void 0, !1, {
                  fileName: "app/routes/form.tsx",
                  lineNumber: 88,
                  columnNumber: 23
                }, this) }, void 0, !1, {
                  fileName: "app/routes/form.tsx",
                  lineNumber: 87,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV20(SelectContent, { children: [
                  /* @__PURE__ */ jsxDEV20(SelectItem, { value: "male", children: "Male" }, void 0, !1, {
                    fileName: "app/routes/form.tsx",
                    lineNumber: 93,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV20(SelectItem, { value: "female", children: "Female" }, void 0, !1, {
                    fileName: "app/routes/form.tsx",
                    lineNumber: 94,
                    columnNumber: 23
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/form.tsx",
                  lineNumber: 92,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/form.tsx",
                lineNumber: 86,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV20(FormMessage, {}, void 0, !1, {
                fileName: "app/routes/form.tsx",
                lineNumber: 97,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/form.tsx",
              lineNumber: 84,
              columnNumber: 17
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/form.tsx",
            lineNumber: 80,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV20(
          FormField,
          {
            control: form.control,
            name: "contactNumber",
            render: ({ field }) => /* @__PURE__ */ jsxDEV20(FormItem, { children: [
              /* @__PURE__ */ jsxDEV20(FormLabel, { children: "Contact number" }, void 0, !1, {
                fileName: "app/routes/form.tsx",
                lineNumber: 106,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV20(FormControl, { children: /* @__PURE__ */ jsxDEV20(Input, { placeholder: "011-12345678", ...field }, void 0, !1, {
                fileName: "app/routes/form.tsx",
                lineNumber: 108,
                columnNumber: 21
              }, this) }, void 0, !1, {
                fileName: "app/routes/form.tsx",
                lineNumber: 107,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV20(FormMessage, {}, void 0, !1, {
                fileName: "app/routes/form.tsx",
                lineNumber: 110,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/form.tsx",
              lineNumber: 105,
              columnNumber: 17
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/form.tsx",
            lineNumber: 101,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/form.tsx",
        lineNumber: 79,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV20(
        FormField,
        {
          control: form.control,
          name: "cancerType",
          render: ({ field }) => /* @__PURE__ */ jsxDEV20(FormItem, { children: [
            /* @__PURE__ */ jsxDEV20(FormLabel, { children: "Cancer Type" }, void 0, !1, {
              fileName: "app/routes/form.tsx",
              lineNumber: 120,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV20(Select, { onValueChange: field.onChange, defaultValue: field.value, children: [
              /* @__PURE__ */ jsxDEV20(FormControl, { children: /* @__PURE__ */ jsxDEV20(SelectTrigger, { children: /* @__PURE__ */ jsxDEV20(SelectValue, { placeholder: "Select cancer type" }, void 0, !1, {
                fileName: "app/routes/form.tsx",
                lineNumber: 124,
                columnNumber: 23
              }, this) }, void 0, !1, {
                fileName: "app/routes/form.tsx",
                lineNumber: 123,
                columnNumber: 21
              }, this) }, void 0, !1, {
                fileName: "app/routes/form.tsx",
                lineNumber: 122,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV20(SelectContent, { children: [
                /* @__PURE__ */ jsxDEV20(SelectItem, { value: "breast", children: "Breast Cancer" }, void 0, !1, {
                  fileName: "app/routes/form.tsx",
                  lineNumber: 128,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV20(SelectItem, { value: "lung", children: "Lung Cancer" }, void 0, !1, {
                  fileName: "app/routes/form.tsx",
                  lineNumber: 129,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV20(SelectItem, { value: "prostate", children: "Prostate Cancer" }, void 0, !1, {
                  fileName: "app/routes/form.tsx",
                  lineNumber: 130,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV20(SelectItem, { value: "colorectal", children: "Colorectal Cancer" }, void 0, !1, {
                  fileName: "app/routes/form.tsx",
                  lineNumber: 131,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV20(SelectItem, { value: "melanoma", children: "Melanoma" }, void 0, !1, {
                  fileName: "app/routes/form.tsx",
                  lineNumber: 132,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV20(SelectItem, { value: "leukemia", children: "Leukemia" }, void 0, !1, {
                  fileName: "app/routes/form.tsx",
                  lineNumber: 133,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV20(SelectItem, { value: "lymphoma", children: "Lymphoma" }, void 0, !1, {
                  fileName: "app/routes/form.tsx",
                  lineNumber: 134,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV20(SelectItem, { value: "other", children: "Other" }, void 0, !1, {
                  fileName: "app/routes/form.tsx",
                  lineNumber: 135,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/form.tsx",
                lineNumber: 127,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/form.tsx",
              lineNumber: 121,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV20(FormMessage, {}, void 0, !1, {
              fileName: "app/routes/form.tsx",
              lineNumber: 138,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/form.tsx",
            lineNumber: 119,
            columnNumber: 15
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/form.tsx",
          lineNumber: 115,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV20(Button, { type: "submit", children: "Submit" }, void 0, !1, {
        fileName: "app/routes/form.tsx",
        lineNumber: 142,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/form.tsx",
      lineNumber: 50,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/form.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/form.tsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-LUJ2QZ2N.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-XAESSOVX.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-LS2LPRW5.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-TLLO23W3.js", imports: ["/build/_shared/chunk-RID6SA6X.js", "/build/_shared/chunk-I33NTPQU.js", "/build/_shared/chunk-Q5MLNVT7.js", "/build/_shared/chunk-NMZL6IDN.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-VXQTEGPC.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/dashboard": { id: "routes/dashboard", parentId: "root", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard-OB3QR5KU.js", imports: ["/build/_shared/chunk-LIQ3KBJZ.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/form": { id: "routes/form", parentId: "root", path: "form", index: void 0, caseSensitive: void 0, module: "/build/routes/form-57TIOUDV.js", imports: ["/build/_shared/chunk-LIQ3KBJZ.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "905666bf", hmr: { runtime: "/build/_shared\\chunk-LS2LPRW5.js", timestamp: 1729161081138 }, url: "/build/manifest-905666BF.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public\\build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/dashboard": {
    id: "routes/dashboard",
    parentId: "root",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/form": {
    id: "routes/form",
    parentId: "root",
    path: "form",
    index: void 0,
    caseSensitive: void 0,
    module: form_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
