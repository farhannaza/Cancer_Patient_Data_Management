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
var tailwind_default = "/build/_assets/tailwind-E4THIYJ3.css";

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
          to: "fetch",
          children: "Fetch"
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
  default: () => PatientDashboard
});
import { useState as useState2, useEffect as useEffect2 } from "react";
import Web3 from "web3";

// app/routes/artifacts/CancerPatientData.json
var CancerPatientData_default = {
  contractName: "CancerPatientData",
  abi: [
    {
      anonymous: !1,
      inputs: [
        {
          indexed: !1,
          internalType: "string",
          name: "firstName",
          type: "string"
        },
        {
          indexed: !1,
          internalType: "string",
          name: "lastName",
          type: "string"
        },
        {
          indexed: !1,
          internalType: "string",
          name: "contactNumber",
          type: "string"
        },
        {
          indexed: !1,
          internalType: "string",
          name: "gender",
          type: "string"
        },
        {
          indexed: !1,
          internalType: "string",
          name: "cancerType",
          type: "string"
        }
      ],
      name: "NewPatientAdded",
      type: "event"
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      name: "patients",
      outputs: [
        {
          internalType: "string",
          name: "firstName",
          type: "string"
        },
        {
          internalType: "string",
          name: "lastName",
          type: "string"
        },
        {
          internalType: "string",
          name: "contactNumber",
          type: "string"
        },
        {
          internalType: "string",
          name: "gender",
          type: "string"
        },
        {
          internalType: "string",
          name: "cancerType",
          type: "string"
        }
      ],
      stateMutability: "view",
      type: "function",
      constant: !0
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_firstName",
          type: "string"
        },
        {
          internalType: "string",
          name: "_lastName",
          type: "string"
        },
        {
          internalType: "string",
          name: "_contactNumber",
          type: "string"
        },
        {
          internalType: "string",
          name: "_gender",
          type: "string"
        },
        {
          internalType: "string",
          name: "_cancerType",
          type: "string"
        }
      ],
      name: "addPatient",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [],
      name: "getPatientCount",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256"
        }
      ],
      stateMutability: "view",
      type: "function",
      constant: !0
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "index",
          type: "uint256"
        }
      ],
      name: "getPatient",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string"
        },
        {
          internalType: "string",
          name: "",
          type: "string"
        },
        {
          internalType: "string",
          name: "",
          type: "string"
        },
        {
          internalType: "string",
          name: "",
          type: "string"
        },
        {
          internalType: "string",
          name: "",
          type: "string"
        }
      ],
      stateMutability: "view",
      type: "function",
      constant: !0
    }
  ],
  metadata: '{"compiler":{"version":"0.8.19+commit.7dd6d404"},"language":"Solidity","output":{"abi":[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"firstName","type":"string"},{"indexed":false,"internalType":"string","name":"lastName","type":"string"},{"indexed":false,"internalType":"string","name":"contactNumber","type":"string"},{"indexed":false,"internalType":"string","name":"gender","type":"string"},{"indexed":false,"internalType":"string","name":"cancerType","type":"string"}],"name":"NewPatientAdded","type":"event"},{"inputs":[{"internalType":"string","name":"_firstName","type":"string"},{"internalType":"string","name":"_lastName","type":"string"},{"internalType":"string","name":"_contactNumber","type":"string"},{"internalType":"string","name":"_gender","type":"string"},{"internalType":"string","name":"_cancerType","type":"string"}],"name":"addPatient","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getPatient","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPatientCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"patients","outputs":[{"internalType":"string","name":"firstName","type":"string"},{"internalType":"string","name":"lastName","type":"string"},{"internalType":"string","name":"contactNumber","type":"string"},{"internalType":"string","name":"gender","type":"string"},{"internalType":"string","name":"cancerType","type":"string"}],"stateMutability":"view","type":"function"}],"devdoc":{"kind":"dev","methods":{},"version":1},"userdoc":{"kind":"user","methods":{},"version":1}},"settings":{"compilationTarget":{"project:/contracts/CancerPatientData.sol":"CancerPatientData"},"evmVersion":"paris","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":false,"runs":200},"remappings":[]},"sources":{"project:/contracts/CancerPatientData.sol":{"keccak256":"0x1606ffa19072b06d22608253e21e6cbd80bd27188665ceb74724567767b3df79","license":"MIT","urls":["bzz-raw://7407de9c927da78b09fdea89c424bae24602eca2c42689ff13bad7bfd9329607","dweb:/ipfs/QmdCj4avXLzAq3WdD5zaeCfCfnDH7Xwg2LhemRtvjWRHjw"]}},"version":1}',
  bytecode: "0x608060405234801561001057600080fd5b5061100d806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806356fa8217146100515780637d3a67961461006d57806393119a83146100a1578063c190665b146100d5575b600080fd5b61006b600480360381019061006691906109d5565b6100f3565b005b61008760048036038101906100829190610b12565b6101fb565b604051610098959493929190610bbe565b60405180910390f35b6100bb60048036038101906100b69190610b12565b610581565b6040516100cc959493929190610bbe565b60405180910390f35b6100dd61086f565b6040516100ea9190610c43565b60405180910390f35b60006040518060a00160405280878152602001868152602001858152602001848152602001838152509080600181540180825580915050600190039060005260206000209060050201600090919091909150600082015181600001908161015a9190610e6a565b5060208201518160010190816101709190610e6a565b5060408201518160020190816101869190610e6a565b50606082015181600301908161019c9190610e6a565b5060808201518160040190816101b29190610e6a565b5050507f06e8e43f7b56d21341408aa5f70b229f8cae644e99627e5b40ff6231ef7e0a4a85858585856040516101ec959493929190610bbe565b60405180910390a15050505050565b6060806060806060600080549050861061024a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161024190610f88565b60405180910390fd5b600080878154811061025f5761025e610fa8565b5b90600052602060002090600502016040518060a001604052908160008201805461028890610c8d565b80601f01602080910402602001604051908101604052809291908181526020018280546102b490610c8d565b80156103015780601f106102d657610100808354040283529160200191610301565b820191906000526020600020905b8154815290600101906020018083116102e457829003601f168201915b5050505050815260200160018201805461031a90610c8d565b80601f016020809104026020016040519081016040528092919081815260200182805461034690610c8d565b80156103935780601f1061036857610100808354040283529160200191610393565b820191906000526020600020905b81548152906001019060200180831161037657829003601f168201915b505050505081526020016002820180546103ac90610c8d565b80601f01602080910402602001604051908101604052809291908181526020018280546103d890610c8d565b80156104255780601f106103fa57610100808354040283529160200191610425565b820191906000526020600020905b81548152906001019060200180831161040857829003601f168201915b5050505050815260200160038201805461043e90610c8d565b80601f016020809104026020016040519081016040528092919081815260200182805461046a90610c8d565b80156104b75780601f1061048c576101008083540402835291602001916104b7565b820191906000526020600020905b81548152906001019060200180831161049a57829003601f168201915b505050505081526020016004820180546104d090610c8d565b80601f01602080910402602001604051908101604052809291908181526020018280546104fc90610c8d565b80156105495780601f1061051e57610100808354040283529160200191610549565b820191906000526020600020905b81548152906001019060200180831161052c57829003601f168201915b505050505081525050905080600001518160200151826040015183606001518460800151955095509550955095505091939590929450565b6000818154811061059157600080fd5b90600052602060002090600502016000915090508060000180546105b490610c8d565b80601f01602080910402602001604051908101604052809291908181526020018280546105e090610c8d565b801561062d5780601f106106025761010080835404028352916020019161062d565b820191906000526020600020905b81548152906001019060200180831161061057829003601f168201915b50505050509080600101805461064290610c8d565b80601f016020809104026020016040519081016040528092919081815260200182805461066e90610c8d565b80156106bb5780601f10610690576101008083540402835291602001916106bb565b820191906000526020600020905b81548152906001019060200180831161069e57829003601f168201915b5050505050908060020180546106d090610c8d565b80601f01602080910402602001604051908101604052809291908181526020018280546106fc90610c8d565b80156107495780601f1061071e57610100808354040283529160200191610749565b820191906000526020600020905b81548152906001019060200180831161072c57829003601f168201915b50505050509080600301805461075e90610c8d565b80601f016020809104026020016040519081016040528092919081815260200182805461078a90610c8d565b80156107d75780601f106107ac576101008083540402835291602001916107d7565b820191906000526020600020905b8154815290600101906020018083116107ba57829003601f168201915b5050505050908060040180546107ec90610c8d565b80601f016020809104026020016040519081016040528092919081815260200182805461081890610c8d565b80156108655780601f1061083a57610100808354040283529160200191610865565b820191906000526020600020905b81548152906001019060200180831161084857829003601f168201915b5050505050905085565b60008080549050905090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6108e282610899565b810181811067ffffffffffffffff82111715610901576109006108aa565b5b80604052505050565b600061091461087b565b905061092082826108d9565b919050565b600067ffffffffffffffff8211156109405761093f6108aa565b5b61094982610899565b9050602081019050919050565b82818337600083830152505050565b600061097861097384610925565b61090a565b90508281526020810184848401111561099457610993610894565b5b61099f848285610956565b509392505050565b600082601f8301126109bc576109bb61088f565b5b81356109cc848260208601610965565b91505092915050565b600080600080600060a086880312156109f1576109f0610885565b5b600086013567ffffffffffffffff811115610a0f57610a0e61088a565b5b610a1b888289016109a7565b955050602086013567ffffffffffffffff811115610a3c57610a3b61088a565b5b610a48888289016109a7565b945050604086013567ffffffffffffffff811115610a6957610a6861088a565b5b610a75888289016109a7565b935050606086013567ffffffffffffffff811115610a9657610a9561088a565b5b610aa2888289016109a7565b925050608086013567ffffffffffffffff811115610ac357610ac261088a565b5b610acf888289016109a7565b9150509295509295909350565b6000819050919050565b610aef81610adc565b8114610afa57600080fd5b50565b600081359050610b0c81610ae6565b92915050565b600060208284031215610b2857610b27610885565b5b6000610b3684828501610afd565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610b79578082015181840152602081019050610b5e565b60008484015250505050565b6000610b9082610b3f565b610b9a8185610b4a565b9350610baa818560208601610b5b565b610bb381610899565b840191505092915050565b600060a0820190508181036000830152610bd88188610b85565b90508181036020830152610bec8187610b85565b90508181036040830152610c008186610b85565b90508181036060830152610c148185610b85565b90508181036080830152610c288184610b85565b90509695505050505050565b610c3d81610adc565b82525050565b6000602082019050610c586000830184610c34565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610ca557607f821691505b602082108103610cb857610cb7610c5e565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610d207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610ce3565b610d2a8683610ce3565b95508019841693508086168417925050509392505050565b6000819050919050565b6000610d67610d62610d5d84610adc565b610d42565b610adc565b9050919050565b6000819050919050565b610d8183610d4c565b610d95610d8d82610d6e565b848454610cf0565b825550505050565b600090565b610daa610d9d565b610db5818484610d78565b505050565b5b81811015610dd957610dce600082610da2565b600181019050610dbb565b5050565b601f821115610e1e57610def81610cbe565b610df884610cd3565b81016020851015610e07578190505b610e1b610e1385610cd3565b830182610dba565b50505b505050565b600082821c905092915050565b6000610e4160001984600802610e23565b1980831691505092915050565b6000610e5a8383610e30565b9150826002028217905092915050565b610e7382610b3f565b67ffffffffffffffff811115610e8c57610e8b6108aa565b5b610e968254610c8d565b610ea1828285610ddd565b600060209050601f831160018114610ed45760008415610ec2578287015190505b610ecc8582610e4e565b865550610f34565b601f198416610ee286610cbe565b60005b82811015610f0a57848901518255600182019150602085019450602081019050610ee5565b86831015610f275784890151610f23601f891682610e30565b8355505b6001600288020188555050505b505050505050565b7f50617469656e7420696e646578206f7574206f6620626f756e64730000000000600082015250565b6000610f72601b83610b4a565b9150610f7d82610f3c565b602082019050919050565b60006020820190508181036000830152610fa181610f65565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea264697066735822122036f8701c26424e5cff5974fa43038717b663060f201660a98df6aacc460ea28464736f6c63430008130033",
  deployedBytecode: "0x608060405234801561001057600080fd5b506004361061004c5760003560e01c806356fa8217146100515780637d3a67961461006d57806393119a83146100a1578063c190665b146100d5575b600080fd5b61006b600480360381019061006691906109d5565b6100f3565b005b61008760048036038101906100829190610b12565b6101fb565b604051610098959493929190610bbe565b60405180910390f35b6100bb60048036038101906100b69190610b12565b610581565b6040516100cc959493929190610bbe565b60405180910390f35b6100dd61086f565b6040516100ea9190610c43565b60405180910390f35b60006040518060a00160405280878152602001868152602001858152602001848152602001838152509080600181540180825580915050600190039060005260206000209060050201600090919091909150600082015181600001908161015a9190610e6a565b5060208201518160010190816101709190610e6a565b5060408201518160020190816101869190610e6a565b50606082015181600301908161019c9190610e6a565b5060808201518160040190816101b29190610e6a565b5050507f06e8e43f7b56d21341408aa5f70b229f8cae644e99627e5b40ff6231ef7e0a4a85858585856040516101ec959493929190610bbe565b60405180910390a15050505050565b6060806060806060600080549050861061024a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161024190610f88565b60405180910390fd5b600080878154811061025f5761025e610fa8565b5b90600052602060002090600502016040518060a001604052908160008201805461028890610c8d565b80601f01602080910402602001604051908101604052809291908181526020018280546102b490610c8d565b80156103015780601f106102d657610100808354040283529160200191610301565b820191906000526020600020905b8154815290600101906020018083116102e457829003601f168201915b5050505050815260200160018201805461031a90610c8d565b80601f016020809104026020016040519081016040528092919081815260200182805461034690610c8d565b80156103935780601f1061036857610100808354040283529160200191610393565b820191906000526020600020905b81548152906001019060200180831161037657829003601f168201915b505050505081526020016002820180546103ac90610c8d565b80601f01602080910402602001604051908101604052809291908181526020018280546103d890610c8d565b80156104255780601f106103fa57610100808354040283529160200191610425565b820191906000526020600020905b81548152906001019060200180831161040857829003601f168201915b5050505050815260200160038201805461043e90610c8d565b80601f016020809104026020016040519081016040528092919081815260200182805461046a90610c8d565b80156104b75780601f1061048c576101008083540402835291602001916104b7565b820191906000526020600020905b81548152906001019060200180831161049a57829003601f168201915b505050505081526020016004820180546104d090610c8d565b80601f01602080910402602001604051908101604052809291908181526020018280546104fc90610c8d565b80156105495780601f1061051e57610100808354040283529160200191610549565b820191906000526020600020905b81548152906001019060200180831161052c57829003601f168201915b505050505081525050905080600001518160200151826040015183606001518460800151955095509550955095505091939590929450565b6000818154811061059157600080fd5b90600052602060002090600502016000915090508060000180546105b490610c8d565b80601f01602080910402602001604051908101604052809291908181526020018280546105e090610c8d565b801561062d5780601f106106025761010080835404028352916020019161062d565b820191906000526020600020905b81548152906001019060200180831161061057829003601f168201915b50505050509080600101805461064290610c8d565b80601f016020809104026020016040519081016040528092919081815260200182805461066e90610c8d565b80156106bb5780601f10610690576101008083540402835291602001916106bb565b820191906000526020600020905b81548152906001019060200180831161069e57829003601f168201915b5050505050908060020180546106d090610c8d565b80601f01602080910402602001604051908101604052809291908181526020018280546106fc90610c8d565b80156107495780601f1061071e57610100808354040283529160200191610749565b820191906000526020600020905b81548152906001019060200180831161072c57829003601f168201915b50505050509080600301805461075e90610c8d565b80601f016020809104026020016040519081016040528092919081815260200182805461078a90610c8d565b80156107d75780601f106107ac576101008083540402835291602001916107d7565b820191906000526020600020905b8154815290600101906020018083116107ba57829003601f168201915b5050505050908060040180546107ec90610c8d565b80601f016020809104026020016040519081016040528092919081815260200182805461081890610c8d565b80156108655780601f1061083a57610100808354040283529160200191610865565b820191906000526020600020905b81548152906001019060200180831161084857829003601f168201915b5050505050905085565b60008080549050905090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6108e282610899565b810181811067ffffffffffffffff82111715610901576109006108aa565b5b80604052505050565b600061091461087b565b905061092082826108d9565b919050565b600067ffffffffffffffff8211156109405761093f6108aa565b5b61094982610899565b9050602081019050919050565b82818337600083830152505050565b600061097861097384610925565b61090a565b90508281526020810184848401111561099457610993610894565b5b61099f848285610956565b509392505050565b600082601f8301126109bc576109bb61088f565b5b81356109cc848260208601610965565b91505092915050565b600080600080600060a086880312156109f1576109f0610885565b5b600086013567ffffffffffffffff811115610a0f57610a0e61088a565b5b610a1b888289016109a7565b955050602086013567ffffffffffffffff811115610a3c57610a3b61088a565b5b610a48888289016109a7565b945050604086013567ffffffffffffffff811115610a6957610a6861088a565b5b610a75888289016109a7565b935050606086013567ffffffffffffffff811115610a9657610a9561088a565b5b610aa2888289016109a7565b925050608086013567ffffffffffffffff811115610ac357610ac261088a565b5b610acf888289016109a7565b9150509295509295909350565b6000819050919050565b610aef81610adc565b8114610afa57600080fd5b50565b600081359050610b0c81610ae6565b92915050565b600060208284031215610b2857610b27610885565b5b6000610b3684828501610afd565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610b79578082015181840152602081019050610b5e565b60008484015250505050565b6000610b9082610b3f565b610b9a8185610b4a565b9350610baa818560208601610b5b565b610bb381610899565b840191505092915050565b600060a0820190508181036000830152610bd88188610b85565b90508181036020830152610bec8187610b85565b90508181036040830152610c008186610b85565b90508181036060830152610c148185610b85565b90508181036080830152610c288184610b85565b90509695505050505050565b610c3d81610adc565b82525050565b6000602082019050610c586000830184610c34565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610ca557607f821691505b602082108103610cb857610cb7610c5e565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610d207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610ce3565b610d2a8683610ce3565b95508019841693508086168417925050509392505050565b6000819050919050565b6000610d67610d62610d5d84610adc565b610d42565b610adc565b9050919050565b6000819050919050565b610d8183610d4c565b610d95610d8d82610d6e565b848454610cf0565b825550505050565b600090565b610daa610d9d565b610db5818484610d78565b505050565b5b81811015610dd957610dce600082610da2565b600181019050610dbb565b5050565b601f821115610e1e57610def81610cbe565b610df884610cd3565b81016020851015610e07578190505b610e1b610e1385610cd3565b830182610dba565b50505b505050565b600082821c905092915050565b6000610e4160001984600802610e23565b1980831691505092915050565b6000610e5a8383610e30565b9150826002028217905092915050565b610e7382610b3f565b67ffffffffffffffff811115610e8c57610e8b6108aa565b5b610e968254610c8d565b610ea1828285610ddd565b600060209050601f831160018114610ed45760008415610ec2578287015190505b610ecc8582610e4e565b865550610f34565b601f198416610ee286610cbe565b60005b82811015610f0a57848901518255600182019150602085019450602081019050610ee5565b86831015610f275784890151610f23601f891682610e30565b8355505b6001600288020188555050505b505050505050565b7f50617469656e7420696e646578206f7574206f6620626f756e64730000000000600082015250565b6000610f72601b83610b4a565b9150610f7d82610f3c565b602082019050919050565b60006020820190508181036000830152610fa181610f65565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea264697066735822122036f8701c26424e5cff5974fa43038717b663060f201660a98df6aacc460ea28464736f6c63430008130033",
  immutableReferences: {},
  generatedSources: [],
  deployedGeneratedSources: [
    {
      ast: {
        nodeType: "YulBlock",
        src: "0:13469:2",
        statements: [
          {
            body: {
              nodeType: "YulBlock",
              src: "47:35:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "57:19:2",
                  value: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "73:2:2",
                        type: "",
                        value: "64"
                      }
                    ],
                    functionName: {
                      name: "mload",
                      nodeType: "YulIdentifier",
                      src: "67:5:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "67:9:2"
                  },
                  variableNames: [
                    {
                      name: "memPtr",
                      nodeType: "YulIdentifier",
                      src: "57:6:2"
                    }
                  ]
                }
              ]
            },
            name: "allocate_unbounded",
            nodeType: "YulFunctionDefinition",
            returnVariables: [
              {
                name: "memPtr",
                nodeType: "YulTypedName",
                src: "40:6:2",
                type: ""
              }
            ],
            src: "7:75:2"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "177:28:2",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "194:1:2",
                        type: "",
                        value: "0"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "197:1:2",
                        type: "",
                        value: "0"
                      }
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "187:6:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "187:12:2"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "187:12:2"
                }
              ]
            },
            name: "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
            nodeType: "YulFunctionDefinition",
            src: "88:117:2"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "300:28:2",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "317:1:2",
                        type: "",
                        value: "0"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "320:1:2",
                        type: "",
                        value: "0"
                      }
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "310:6:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "310:12:2"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "310:12:2"
                }
              ]
            },
            name: "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
            nodeType: "YulFunctionDefinition",
            src: "211:117:2"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "423:28:2",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "440:1:2",
                        type: "",
                        value: "0"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "443:1:2",
                        type: "",
                        value: "0"
                      }
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "433:6:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "433:12:2"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "433:12:2"
                }
              ]
            },
            name: "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
            nodeType: "YulFunctionDefinition",
            src: "334:117:2"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "546:28:2",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "563:1:2",
                        type: "",
                        value: "0"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "566:1:2",
                        type: "",
                        value: "0"
                      }
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "556:6:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "556:12:2"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "556:12:2"
                }
              ]
            },
            name: "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae",
            nodeType: "YulFunctionDefinition",
            src: "457:117:2"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "628:54:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "638:38:2",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "656:5:2"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "663:2:2",
                            type: "",
                            value: "31"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "652:3:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "652:14:2"
                      },
                      {
                        arguments: [
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "672:2:2",
                            type: "",
                            value: "31"
                          }
                        ],
                        functionName: {
                          name: "not",
                          nodeType: "YulIdentifier",
                          src: "668:3:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "668:7:2"
                      }
                    ],
                    functionName: {
                      name: "and",
                      nodeType: "YulIdentifier",
                      src: "648:3:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "648:28:2"
                  },
                  variableNames: [
                    {
                      name: "result",
                      nodeType: "YulIdentifier",
                      src: "638:6:2"
                    }
                  ]
                }
              ]
            },
            name: "round_up_to_mul_of_32",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "611:5:2",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "result",
                nodeType: "YulTypedName",
                src: "621:6:2",
                type: ""
              }
            ],
            src: "580:102:2"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "716:152:2",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "733:1:2",
                        type: "",
                        value: "0"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "736:77:2",
                        type: "",
                        value: "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "726:6:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "726:88:2"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "726:88:2"
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "830:1:2",
                        type: "",
                        value: "4"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "833:4:2",
                        type: "",
                        value: "0x41"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "823:6:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "823:15:2"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "823:15:2"
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "854:1:2",
                        type: "",
                        value: "0"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "857:4:2",
                        type: "",
                        value: "0x24"
                      }
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "847:6:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "847:15:2"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "847:15:2"
                }
              ]
            },
            name: "panic_error_0x41",
            nodeType: "YulFunctionDefinition",
            src: "688:180:2"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "917:238:2",
              statements: [
                {
                  nodeType: "YulVariableDeclaration",
                  src: "927:58:2",
                  value: {
                    arguments: [
                      {
                        name: "memPtr",
                        nodeType: "YulIdentifier",
                        src: "949:6:2"
                      },
                      {
                        arguments: [
                          {
                            name: "size",
                            nodeType: "YulIdentifier",
                            src: "979:4:2"
                          }
                        ],
                        functionName: {
                          name: "round_up_to_mul_of_32",
                          nodeType: "YulIdentifier",
                          src: "957:21:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "957:27:2"
                      }
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "945:3:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "945:40:2"
                  },
                  variables: [
                    {
                      name: "newFreePtr",
                      nodeType: "YulTypedName",
                      src: "931:10:2",
                      type: ""
                    }
                  ]
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "1096:22:2",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "panic_error_0x41",
                            nodeType: "YulIdentifier",
                            src: "1098:16:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "1098:18:2"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "1098:18:2"
                      }
                    ]
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "newFreePtr",
                            nodeType: "YulIdentifier",
                            src: "1039:10:2"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "1051:18:2",
                            type: "",
                            value: "0xffffffffffffffff"
                          }
                        ],
                        functionName: {
                          name: "gt",
                          nodeType: "YulIdentifier",
                          src: "1036:2:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "1036:34:2"
                      },
                      {
                        arguments: [
                          {
                            name: "newFreePtr",
                            nodeType: "YulIdentifier",
                            src: "1075:10:2"
                          },
                          {
                            name: "memPtr",
                            nodeType: "YulIdentifier",
                            src: "1087:6:2"
                          }
                        ],
                        functionName: {
                          name: "lt",
                          nodeType: "YulIdentifier",
                          src: "1072:2:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "1072:22:2"
                      }
                    ],
                    functionName: {
                      name: "or",
                      nodeType: "YulIdentifier",
                      src: "1033:2:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "1033:62:2"
                  },
                  nodeType: "YulIf",
                  src: "1030:88:2"
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1134:2:2",
                        type: "",
                        value: "64"
                      },
                      {
                        name: "newFreePtr",
                        nodeType: "YulIdentifier",
                        src: "1138:10:2"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "1127:6:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "1127:22:2"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "1127:22:2"
                }
              ]
            },
            name: "finalize_allocation",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "memPtr",
                nodeType: "YulTypedName",
                src: "903:6:2",
                type: ""
              },
              {
                name: "size",
                nodeType: "YulTypedName",
                src: "911:4:2",
                type: ""
              }
            ],
            src: "874:281:2"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1202:88:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "1212:30:2",
                  value: {
                    arguments: [],
                    functionName: {
                      name: "allocate_unbounded",
                      nodeType: "YulIdentifier",
                      src: "1222:18:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "1222:20:2"
                  },
                  variableNames: [
                    {
                      name: "memPtr",
                      nodeType: "YulIdentifier",
                      src: "1212:6:2"
                    }
                  ]
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "memPtr",
                        nodeType: "YulIdentifier",
                        src: "1271:6:2"
                      },
                      {
                        name: "size",
                        nodeType: "YulIdentifier",
                        src: "1279:4:2"
                      }
                    ],
                    functionName: {
                      name: "finalize_allocation",
                      nodeType: "YulIdentifier",
                      src: "1251:19:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "1251:33:2"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "1251:33:2"
                }
              ]
            },
            name: "allocate_memory",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "size",
                nodeType: "YulTypedName",
                src: "1186:4:2",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "memPtr",
                nodeType: "YulTypedName",
                src: "1195:6:2",
                type: ""
              }
            ],
            src: "1161:129:2"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1363:241:2",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "1468:22:2",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "panic_error_0x41",
                            nodeType: "YulIdentifier",
                            src: "1470:16:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "1470:18:2"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "1470:18:2"
                      }
                    ]
                  },
                  condition: {
                    arguments: [
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "1440:6:2"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1448:18:2",
                        type: "",
                        value: "0xffffffffffffffff"
                      }
                    ],
                    functionName: {
                      name: "gt",
                      nodeType: "YulIdentifier",
                      src: "1437:2:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "1437:30:2"
                  },
                  nodeType: "YulIf",
                  src: "1434:56:2"
                },
                {
                  nodeType: "YulAssignment",
                  src: "1500:37:2",
                  value: {
                    arguments: [
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "1530:6:2"
                      }
                    ],
                    functionName: {
                      name: "round_up_to_mul_of_32",
                      nodeType: "YulIdentifier",
                      src: "1508:21:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "1508:29:2"
                  },
                  variableNames: [
                    {
                      name: "size",
                      nodeType: "YulIdentifier",
                      src: "1500:4:2"
                    }
                  ]
                },
                {
                  nodeType: "YulAssignment",
                  src: "1574:23:2",
                  value: {
                    arguments: [
                      {
                        name: "size",
                        nodeType: "YulIdentifier",
                        src: "1586:4:2"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1592:4:2",
                        type: "",
                        value: "0x20"
                      }
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "1582:3:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "1582:15:2"
                  },
                  variableNames: [
                    {
                      name: "size",
                      nodeType: "YulIdentifier",
                      src: "1574:4:2"
                    }
                  ]
                }
              ]
            },
            name: "array_allocation_size_t_string_memory_ptr",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "1347:6:2",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "size",
                nodeType: "YulTypedName",
                src: "1358:4:2",
                type: ""
              }
            ],
            src: "1296:308:2"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1674:82:2",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        name: "dst",
                        nodeType: "YulIdentifier",
                        src: "1697:3:2"
                      },
                      {
                        name: "src",
                        nodeType: "YulIdentifier",
                        src: "1702:3:2"
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "1707:6:2"
                      }
                    ],
                    functionName: {
                      name: "calldatacopy",
                      nodeType: "YulIdentifier",
                      src: "1684:12:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "1684:30:2"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "1684:30:2"
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "dst",
                            nodeType: "YulIdentifier",
                            src: "1734:3:2"
                          },
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "1739:6:2"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "1730:3:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "1730:16:2"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1748:1:2",
                        type: "",
                        value: "0"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "1723:6:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "1723:27:2"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "1723:27:2"
                }
              ]
            },
            name: "copy_calldata_to_memory_with_cleanup",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "src",
                nodeType: "YulTypedName",
                src: "1656:3:2",
                type: ""
              },
              {
                name: "dst",
                nodeType: "YulTypedName",
                src: "1661:3:2",
                type: ""
              },
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "1666:6:2",
                type: ""
              }
            ],
            src: "1610:146:2"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1846:341:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "1856:75:2",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "1923:6:2"
                          }
                        ],
                        functionName: {
                          name: "array_allocation_size_t_string_memory_ptr",
                          nodeType: "YulIdentifier",
                          src: "1881:41:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "1881:49:2"
                      }
                    ],
                    functionName: {
                      name: "allocate_memory",
                      nodeType: "YulIdentifier",
                      src: "1865:15:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "1865:66:2"
                  },
                  variableNames: [
                    {
                      name: "array",
                      nodeType: "YulIdentifier",
                      src: "1856:5:2"
                    }
                  ]
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "array",
                        nodeType: "YulIdentifier",
                        src: "1947:5:2"
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "1954:6:2"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "1940:6:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "1940:21:2"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "1940:21:2"
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "1970:27:2",
                  value: {
                    arguments: [
                      {
                        name: "array",
                        nodeType: "YulIdentifier",
                        src: "1985:5:2"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1992:4:2",
                        type: "",
                        value: "0x20"
                      }
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "1981:3:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "1981:16:2"
                  },
                  variables: [
                    {
                      name: "dst",
                      nodeType: "YulTypedName",
                      src: "1974:3:2",
                      type: ""
                    }
                  ]
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "2035:83:2",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae",
                            nodeType: "YulIdentifier",
                            src: "2037:77:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "2037:79:2"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "2037:79:2"
                      }
                    ]
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "src",
                            nodeType: "YulIdentifier",
                            src: "2016:3:2"
                          },
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "2021:6:2"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "2012:3:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "2012:16:2"
                      },
                      {
                        name: "end",
                        nodeType: "YulIdentifier",
                        src: "2030:3:2"
                      }
                    ],
                    functionName: {
                      name: "gt",
                      nodeType: "YulIdentifier",
                      src: "2009:2:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "2009:25:2"
                  },
                  nodeType: "YulIf",
                  src: "2006:112:2"
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "src",
                        nodeType: "YulIdentifier",
                        src: "2164:3:2"
                      },
                      {
                        name: "dst",
                        nodeType: "YulIdentifier",
                        src: "2169:3:2"
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "2174:6:2"
                      }
                    ],
                    functionName: {
                      name: "copy_calldata_to_memory_with_cleanup",
                      nodeType: "YulIdentifier",
                      src: "2127:36:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "2127:54:2"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "2127:54:2"
                }
              ]
            },
            name: "abi_decode_available_length_t_string_memory_ptr",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "src",
                nodeType: "YulTypedName",
                src: "1819:3:2",
                type: ""
              },
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "1824:6:2",
                type: ""
              },
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "1832:3:2",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "array",
                nodeType: "YulTypedName",
                src: "1840:5:2",
                type: ""
              }
            ],
            src: "1762:425:2"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2269:278:2",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "2318:83:2",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
                            nodeType: "YulIdentifier",
                            src: "2320:77:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "2320:79:2"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "2320:79:2"
                      }
                    ]
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "2297:6:2"
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "2305:4:2",
                                type: "",
                                value: "0x1f"
                              }
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "2293:3:2"
                            },
                            nodeType: "YulFunctionCall",
                            src: "2293:17:2"
                          },
                          {
                            name: "end",
                            nodeType: "YulIdentifier",
                            src: "2312:3:2"
                          }
                        ],
                        functionName: {
                          name: "slt",
                          nodeType: "YulIdentifier",
                          src: "2289:3:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "2289:27:2"
                      }
                    ],
                    functionName: {
                      name: "iszero",
                      nodeType: "YulIdentifier",
                      src: "2282:6:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "2282:35:2"
                  },
                  nodeType: "YulIf",
                  src: "2279:122:2"
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "2410:34:2",
                  value: {
                    arguments: [
                      {
                        name: "offset",
                        nodeType: "YulIdentifier",
                        src: "2437:6:2"
                      }
                    ],
                    functionName: {
                      name: "calldataload",
                      nodeType: "YulIdentifier",
                      src: "2424:12:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "2424:20:2"
                  },
                  variables: [
                    {
                      name: "length",
                      nodeType: "YulTypedName",
                      src: "2414:6:2",
                      type: ""
                    }
                  ]
                },
                {
                  nodeType: "YulAssignment",
                  src: "2453:88:2",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "offset",
                            nodeType: "YulIdentifier",
                            src: "2514:6:2"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "2522:4:2",
                            type: "",
                            value: "0x20"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "2510:3:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "2510:17:2"
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "2529:6:2"
                      },
                      {
                        name: "end",
                        nodeType: "YulIdentifier",
                        src: "2537:3:2"
                      }
                    ],
                    functionName: {
                      name: "abi_decode_available_length_t_string_memory_ptr",
                      nodeType: "YulIdentifier",
                      src: "2462:47:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "2462:79:2"
                  },
                  variableNames: [
                    {
                      name: "array",
                      nodeType: "YulIdentifier",
                      src: "2453:5:2"
                    }
                  ]
                }
              ]
            },
            name: "abi_decode_t_string_memory_ptr",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "offset",
                nodeType: "YulTypedName",
                src: "2247:6:2",
                type: ""
              },
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "2255:3:2",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "array",
                nodeType: "YulTypedName",
                src: "2263:5:2",
                type: ""
              }
            ],
            src: "2207:340:2"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2737:1627:2",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "2784:83:2",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            nodeType: "YulIdentifier",
                            src: "2786:77:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "2786:79:2"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "2786:79:2"
                      }
                    ]
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "2758:7:2"
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "2767:9:2"
                          }
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "2754:3:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "2754:23:2"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "2779:3:2",
                        type: "",
                        value: "160"
                      }
                    ],
                    functionName: {
                      name: "slt",
                      nodeType: "YulIdentifier",
                      src: "2750:3:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "2750:33:2"
                  },
                  nodeType: "YulIf",
                  src: "2747:120:2"
                },
                {
                  nodeType: "YulBlock",
                  src: "2877:287:2",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "2892:45:2",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "2923:9:2"
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "2934:1:2",
                                type: "",
                                value: "0"
                              }
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "2919:3:2"
                            },
                            nodeType: "YulFunctionCall",
                            src: "2919:17:2"
                          }
                        ],
                        functionName: {
                          name: "calldataload",
                          nodeType: "YulIdentifier",
                          src: "2906:12:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "2906:31:2"
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "2896:6:2",
                          type: ""
                        }
                      ]
                    },
                    {
                      body: {
                        nodeType: "YulBlock",
                        src: "2984:83:2",
                        statements: [
                          {
                            expression: {
                              arguments: [],
                              functionName: {
                                name: "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                nodeType: "YulIdentifier",
                                src: "2986:77:2"
                              },
                              nodeType: "YulFunctionCall",
                              src: "2986:79:2"
                            },
                            nodeType: "YulExpressionStatement",
                            src: "2986:79:2"
                          }
                        ]
                      },
                      condition: {
                        arguments: [
                          {
                            name: "offset",
                            nodeType: "YulIdentifier",
                            src: "2956:6:2"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "2964:18:2",
                            type: "",
                            value: "0xffffffffffffffff"
                          }
                        ],
                        functionName: {
                          name: "gt",
                          nodeType: "YulIdentifier",
                          src: "2953:2:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "2953:30:2"
                      },
                      nodeType: "YulIf",
                      src: "2950:117:2"
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "3081:73:2",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "3126:9:2"
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "3137:6:2"
                              }
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "3122:3:2"
                            },
                            nodeType: "YulFunctionCall",
                            src: "3122:22:2"
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "3146:7:2"
                          }
                        ],
                        functionName: {
                          name: "abi_decode_t_string_memory_ptr",
                          nodeType: "YulIdentifier",
                          src: "3091:30:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "3091:63:2"
                      },
                      variableNames: [
                        {
                          name: "value0",
                          nodeType: "YulIdentifier",
                          src: "3081:6:2"
                        }
                      ]
                    }
                  ]
                },
                {
                  nodeType: "YulBlock",
                  src: "3174:288:2",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "3189:46:2",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "3220:9:2"
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "3231:2:2",
                                type: "",
                                value: "32"
                              }
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "3216:3:2"
                            },
                            nodeType: "YulFunctionCall",
                            src: "3216:18:2"
                          }
                        ],
                        functionName: {
                          name: "calldataload",
                          nodeType: "YulIdentifier",
                          src: "3203:12:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "3203:32:2"
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "3193:6:2",
                          type: ""
                        }
                      ]
                    },
                    {
                      body: {
                        nodeType: "YulBlock",
                        src: "3282:83:2",
                        statements: [
                          {
                            expression: {
                              arguments: [],
                              functionName: {
                                name: "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                nodeType: "YulIdentifier",
                                src: "3284:77:2"
                              },
                              nodeType: "YulFunctionCall",
                              src: "3284:79:2"
                            },
                            nodeType: "YulExpressionStatement",
                            src: "3284:79:2"
                          }
                        ]
                      },
                      condition: {
                        arguments: [
                          {
                            name: "offset",
                            nodeType: "YulIdentifier",
                            src: "3254:6:2"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "3262:18:2",
                            type: "",
                            value: "0xffffffffffffffff"
                          }
                        ],
                        functionName: {
                          name: "gt",
                          nodeType: "YulIdentifier",
                          src: "3251:2:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "3251:30:2"
                      },
                      nodeType: "YulIf",
                      src: "3248:117:2"
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "3379:73:2",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "3424:9:2"
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "3435:6:2"
                              }
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "3420:3:2"
                            },
                            nodeType: "YulFunctionCall",
                            src: "3420:22:2"
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "3444:7:2"
                          }
                        ],
                        functionName: {
                          name: "abi_decode_t_string_memory_ptr",
                          nodeType: "YulIdentifier",
                          src: "3389:30:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "3389:63:2"
                      },
                      variableNames: [
                        {
                          name: "value1",
                          nodeType: "YulIdentifier",
                          src: "3379:6:2"
                        }
                      ]
                    }
                  ]
                },
                {
                  nodeType: "YulBlock",
                  src: "3472:288:2",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "3487:46:2",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "3518:9:2"
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "3529:2:2",
                                type: "",
                                value: "64"
                              }
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "3514:3:2"
                            },
                            nodeType: "YulFunctionCall",
                            src: "3514:18:2"
                          }
                        ],
                        functionName: {
                          name: "calldataload",
                          nodeType: "YulIdentifier",
                          src: "3501:12:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "3501:32:2"
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "3491:6:2",
                          type: ""
                        }
                      ]
                    },
                    {
                      body: {
                        nodeType: "YulBlock",
                        src: "3580:83:2",
                        statements: [
                          {
                            expression: {
                              arguments: [],
                              functionName: {
                                name: "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                nodeType: "YulIdentifier",
                                src: "3582:77:2"
                              },
                              nodeType: "YulFunctionCall",
                              src: "3582:79:2"
                            },
                            nodeType: "YulExpressionStatement",
                            src: "3582:79:2"
                          }
                        ]
                      },
                      condition: {
                        arguments: [
                          {
                            name: "offset",
                            nodeType: "YulIdentifier",
                            src: "3552:6:2"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "3560:18:2",
                            type: "",
                            value: "0xffffffffffffffff"
                          }
                        ],
                        functionName: {
                          name: "gt",
                          nodeType: "YulIdentifier",
                          src: "3549:2:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "3549:30:2"
                      },
                      nodeType: "YulIf",
                      src: "3546:117:2"
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "3677:73:2",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "3722:9:2"
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "3733:6:2"
                              }
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "3718:3:2"
                            },
                            nodeType: "YulFunctionCall",
                            src: "3718:22:2"
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "3742:7:2"
                          }
                        ],
                        functionName: {
                          name: "abi_decode_t_string_memory_ptr",
                          nodeType: "YulIdentifier",
                          src: "3687:30:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "3687:63:2"
                      },
                      variableNames: [
                        {
                          name: "value2",
                          nodeType: "YulIdentifier",
                          src: "3677:6:2"
                        }
                      ]
                    }
                  ]
                },
                {
                  nodeType: "YulBlock",
                  src: "3770:288:2",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "3785:46:2",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "3816:9:2"
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "3827:2:2",
                                type: "",
                                value: "96"
                              }
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "3812:3:2"
                            },
                            nodeType: "YulFunctionCall",
                            src: "3812:18:2"
                          }
                        ],
                        functionName: {
                          name: "calldataload",
                          nodeType: "YulIdentifier",
                          src: "3799:12:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "3799:32:2"
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "3789:6:2",
                          type: ""
                        }
                      ]
                    },
                    {
                      body: {
                        nodeType: "YulBlock",
                        src: "3878:83:2",
                        statements: [
                          {
                            expression: {
                              arguments: [],
                              functionName: {
                                name: "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                nodeType: "YulIdentifier",
                                src: "3880:77:2"
                              },
                              nodeType: "YulFunctionCall",
                              src: "3880:79:2"
                            },
                            nodeType: "YulExpressionStatement",
                            src: "3880:79:2"
                          }
                        ]
                      },
                      condition: {
                        arguments: [
                          {
                            name: "offset",
                            nodeType: "YulIdentifier",
                            src: "3850:6:2"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "3858:18:2",
                            type: "",
                            value: "0xffffffffffffffff"
                          }
                        ],
                        functionName: {
                          name: "gt",
                          nodeType: "YulIdentifier",
                          src: "3847:2:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "3847:30:2"
                      },
                      nodeType: "YulIf",
                      src: "3844:117:2"
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "3975:73:2",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "4020:9:2"
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "4031:6:2"
                              }
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "4016:3:2"
                            },
                            nodeType: "YulFunctionCall",
                            src: "4016:22:2"
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "4040:7:2"
                          }
                        ],
                        functionName: {
                          name: "abi_decode_t_string_memory_ptr",
                          nodeType: "YulIdentifier",
                          src: "3985:30:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "3985:63:2"
                      },
                      variableNames: [
                        {
                          name: "value3",
                          nodeType: "YulIdentifier",
                          src: "3975:6:2"
                        }
                      ]
                    }
                  ]
                },
                {
                  nodeType: "YulBlock",
                  src: "4068:289:2",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "4083:47:2",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "4114:9:2"
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "4125:3:2",
                                type: "",
                                value: "128"
                              }
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "4110:3:2"
                            },
                            nodeType: "YulFunctionCall",
                            src: "4110:19:2"
                          }
                        ],
                        functionName: {
                          name: "calldataload",
                          nodeType: "YulIdentifier",
                          src: "4097:12:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "4097:33:2"
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "4087:6:2",
                          type: ""
                        }
                      ]
                    },
                    {
                      body: {
                        nodeType: "YulBlock",
                        src: "4177:83:2",
                        statements: [
                          {
                            expression: {
                              arguments: [],
                              functionName: {
                                name: "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                nodeType: "YulIdentifier",
                                src: "4179:77:2"
                              },
                              nodeType: "YulFunctionCall",
                              src: "4179:79:2"
                            },
                            nodeType: "YulExpressionStatement",
                            src: "4179:79:2"
                          }
                        ]
                      },
                      condition: {
                        arguments: [
                          {
                            name: "offset",
                            nodeType: "YulIdentifier",
                            src: "4149:6:2"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "4157:18:2",
                            type: "",
                            value: "0xffffffffffffffff"
                          }
                        ],
                        functionName: {
                          name: "gt",
                          nodeType: "YulIdentifier",
                          src: "4146:2:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "4146:30:2"
                      },
                      nodeType: "YulIf",
                      src: "4143:117:2"
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "4274:73:2",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "4319:9:2"
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "4330:6:2"
                              }
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "4315:3:2"
                            },
                            nodeType: "YulFunctionCall",
                            src: "4315:22:2"
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "4339:7:2"
                          }
                        ],
                        functionName: {
                          name: "abi_decode_t_string_memory_ptr",
                          nodeType: "YulIdentifier",
                          src: "4284:30:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "4284:63:2"
                      },
                      variableNames: [
                        {
                          name: "value4",
                          nodeType: "YulIdentifier",
                          src: "4274:6:2"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            name: "abi_decode_tuple_t_string_memory_ptrt_string_memory_ptrt_string_memory_ptrt_string_memory_ptrt_string_memory_ptr",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "2675:9:2",
                type: ""
              },
              {
                name: "dataEnd",
                nodeType: "YulTypedName",
                src: "2686:7:2",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "2698:6:2",
                type: ""
              },
              {
                name: "value1",
                nodeType: "YulTypedName",
                src: "2706:6:2",
                type: ""
              },
              {
                name: "value2",
                nodeType: "YulTypedName",
                src: "2714:6:2",
                type: ""
              },
              {
                name: "value3",
                nodeType: "YulTypedName",
                src: "2722:6:2",
                type: ""
              },
              {
                name: "value4",
                nodeType: "YulTypedName",
                src: "2730:6:2",
                type: ""
              }
            ],
            src: "2553:1811:2"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "4415:32:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "4425:16:2",
                  value: {
                    name: "value",
                    nodeType: "YulIdentifier",
                    src: "4436:5:2"
                  },
                  variableNames: [
                    {
                      name: "cleaned",
                      nodeType: "YulIdentifier",
                      src: "4425:7:2"
                    }
                  ]
                }
              ]
            },
            name: "cleanup_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "4397:5:2",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "cleaned",
                nodeType: "YulTypedName",
                src: "4407:7:2",
                type: ""
              }
            ],
            src: "4370:77:2"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "4496:79:2",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "4553:16:2",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "4562:1:2",
                              type: "",
                              value: "0"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "4565:1:2",
                              type: "",
                              value: "0"
                            }
                          ],
                          functionName: {
                            name: "revert",
                            nodeType: "YulIdentifier",
                            src: "4555:6:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "4555:12:2"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "4555:12:2"
                      }
                    ]
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "4519:5:2"
                          },
                          {
                            arguments: [
                              {
                                name: "value",
                                nodeType: "YulIdentifier",
                                src: "4544:5:2"
                              }
                            ],
                            functionName: {
                              name: "cleanup_t_uint256",
                              nodeType: "YulIdentifier",
                              src: "4526:17:2"
                            },
                            nodeType: "YulFunctionCall",
                            src: "4526:24:2"
                          }
                        ],
                        functionName: {
                          name: "eq",
                          nodeType: "YulIdentifier",
                          src: "4516:2:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "4516:35:2"
                      }
                    ],
                    functionName: {
                      name: "iszero",
                      nodeType: "YulIdentifier",
                      src: "4509:6:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "4509:43:2"
                  },
                  nodeType: "YulIf",
                  src: "4506:63:2"
                }
              ]
            },
            name: "validator_revert_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "4489:5:2",
                type: ""
              }
            ],
            src: "4453:122:2"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "4633:87:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "4643:29:2",
                  value: {
                    arguments: [
                      {
                        name: "offset",
                        nodeType: "YulIdentifier",
                        src: "4665:6:2"
                      }
                    ],
                    functionName: {
                      name: "calldataload",
                      nodeType: "YulIdentifier",
                      src: "4652:12:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "4652:20:2"
                  },
                  variableNames: [
                    {
                      name: "value",
                      nodeType: "YulIdentifier",
                      src: "4643:5:2"
                    }
                  ]
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "4708:5:2"
                      }
                    ],
                    functionName: {
                      name: "validator_revert_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "4681:26:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "4681:33:2"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "4681:33:2"
                }
              ]
            },
            name: "abi_decode_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "offset",
                nodeType: "YulTypedName",
                src: "4611:6:2",
                type: ""
              },
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "4619:3:2",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "4627:5:2",
                type: ""
              }
            ],
            src: "4581:139:2"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "4792:263:2",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "4838:83:2",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            nodeType: "YulIdentifier",
                            src: "4840:77:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "4840:79:2"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "4840:79:2"
                      }
                    ]
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "4813:7:2"
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "4822:9:2"
                          }
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "4809:3:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "4809:23:2"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4834:2:2",
                        type: "",
                        value: "32"
                      }
                    ],
                    functionName: {
                      name: "slt",
                      nodeType: "YulIdentifier",
                      src: "4805:3:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "4805:32:2"
                  },
                  nodeType: "YulIf",
                  src: "4802:119:2"
                },
                {
                  nodeType: "YulBlock",
                  src: "4931:117:2",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "4946:15:2",
                      value: {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4960:1:2",
                        type: "",
                        value: "0"
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "4950:6:2",
                          type: ""
                        }
                      ]
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "4975:63:2",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "5010:9:2"
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "5021:6:2"
                              }
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "5006:3:2"
                            },
                            nodeType: "YulFunctionCall",
                            src: "5006:22:2"
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "5030:7:2"
                          }
                        ],
                        functionName: {
                          name: "abi_decode_t_uint256",
                          nodeType: "YulIdentifier",
                          src: "4985:20:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "4985:53:2"
                      },
                      variableNames: [
                        {
                          name: "value0",
                          nodeType: "YulIdentifier",
                          src: "4975:6:2"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            name: "abi_decode_tuple_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "4762:9:2",
                type: ""
              },
              {
                name: "dataEnd",
                nodeType: "YulTypedName",
                src: "4773:7:2",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "4785:6:2",
                type: ""
              }
            ],
            src: "4726:329:2"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "5120:40:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "5131:22:2",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "5147:5:2"
                      }
                    ],
                    functionName: {
                      name: "mload",
                      nodeType: "YulIdentifier",
                      src: "5141:5:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "5141:12:2"
                  },
                  variableNames: [
                    {
                      name: "length",
                      nodeType: "YulIdentifier",
                      src: "5131:6:2"
                    }
                  ]
                }
              ]
            },
            name: "array_length_t_string_memory_ptr",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "5103:5:2",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "5113:6:2",
                type: ""
              }
            ],
            src: "5061:99:2"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "5262:73:2",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "5279:3:2"
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "5284:6:2"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "5272:6:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "5272:19:2"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "5272:19:2"
                },
                {
                  nodeType: "YulAssignment",
                  src: "5300:29:2",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "5319:3:2"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "5324:4:2",
                        type: "",
                        value: "0x20"
                      }
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "5315:3:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "5315:14:2"
                  },
                  variableNames: [
                    {
                      name: "updated_pos",
                      nodeType: "YulIdentifier",
                      src: "5300:11:2"
                    }
                  ]
                }
              ]
            },
            name: "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "5234:3:2",
                type: ""
              },
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "5239:6:2",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "updated_pos",
                nodeType: "YulTypedName",
                src: "5250:11:2",
                type: ""
              }
            ],
            src: "5166:169:2"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "5403:184:2",
              statements: [
                {
                  nodeType: "YulVariableDeclaration",
                  src: "5413:10:2",
                  value: {
                    kind: "number",
                    nodeType: "YulLiteral",
                    src: "5422:1:2",
                    type: "",
                    value: "0"
                  },
                  variables: [
                    {
                      name: "i",
                      nodeType: "YulTypedName",
                      src: "5417:1:2",
                      type: ""
                    }
                  ]
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "5482:63:2",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: "dst",
                                  nodeType: "YulIdentifier",
                                  src: "5507:3:2"
                                },
                                {
                                  name: "i",
                                  nodeType: "YulIdentifier",
                                  src: "5512:1:2"
                                }
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "5503:3:2"
                              },
                              nodeType: "YulFunctionCall",
                              src: "5503:11:2"
                            },
                            {
                              arguments: [
                                {
                                  arguments: [
                                    {
                                      name: "src",
                                      nodeType: "YulIdentifier",
                                      src: "5526:3:2"
                                    },
                                    {
                                      name: "i",
                                      nodeType: "YulIdentifier",
                                      src: "5531:1:2"
                                    }
                                  ],
                                  functionName: {
                                    name: "add",
                                    nodeType: "YulIdentifier",
                                    src: "5522:3:2"
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "5522:11:2"
                                }
                              ],
                              functionName: {
                                name: "mload",
                                nodeType: "YulIdentifier",
                                src: "5516:5:2"
                              },
                              nodeType: "YulFunctionCall",
                              src: "5516:18:2"
                            }
                          ],
                          functionName: {
                            name: "mstore",
                            nodeType: "YulIdentifier",
                            src: "5496:6:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "5496:39:2"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "5496:39:2"
                      }
                    ]
                  },
                  condition: {
                    arguments: [
                      {
                        name: "i",
                        nodeType: "YulIdentifier",
                        src: "5443:1:2"
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "5446:6:2"
                      }
                    ],
                    functionName: {
                      name: "lt",
                      nodeType: "YulIdentifier",
                      src: "5440:2:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "5440:13:2"
                  },
                  nodeType: "YulForLoop",
                  post: {
                    nodeType: "YulBlock",
                    src: "5454:19:2",
                    statements: [
                      {
                        nodeType: "YulAssignment",
                        src: "5456:15:2",
                        value: {
                          arguments: [
                            {
                              name: "i",
                              nodeType: "YulIdentifier",
                              src: "5465:1:2"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "5468:2:2",
                              type: "",
                              value: "32"
                            }
                          ],
                          functionName: {
                            name: "add",
                            nodeType: "YulIdentifier",
                            src: "5461:3:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "5461:10:2"
                        },
                        variableNames: [
                          {
                            name: "i",
                            nodeType: "YulIdentifier",
                            src: "5456:1:2"
                          }
                        ]
                      }
                    ]
                  },
                  pre: {
                    nodeType: "YulBlock",
                    src: "5436:3:2",
                    statements: []
                  },
                  src: "5432:113:2"
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "dst",
                            nodeType: "YulIdentifier",
                            src: "5565:3:2"
                          },
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "5570:6:2"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "5561:3:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "5561:16:2"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "5579:1:2",
                        type: "",
                        value: "0"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "5554:6:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "5554:27:2"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "5554:27:2"
                }
              ]
            },
            name: "copy_memory_to_memory_with_cleanup",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "src",
                nodeType: "YulTypedName",
                src: "5385:3:2",
                type: ""
              },
              {
                name: "dst",
                nodeType: "YulTypedName",
                src: "5390:3:2",
                type: ""
              },
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "5395:6:2",
                type: ""
              }
            ],
            src: "5341:246:2"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "5685:285:2",
              statements: [
                {
                  nodeType: "YulVariableDeclaration",
                  src: "5695:53:2",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "5742:5:2"
                      }
                    ],
                    functionName: {
                      name: "array_length_t_string_memory_ptr",
                      nodeType: "YulIdentifier",
                      src: "5709:32:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "5709:39:2"
                  },
                  variables: [
                    {
                      name: "length",
                      nodeType: "YulTypedName",
                      src: "5699:6:2",
                      type: ""
                    }
                  ]
                },
                {
                  nodeType: "YulAssignment",
                  src: "5757:78:2",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "5823:3:2"
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "5828:6:2"
                      }
                    ],
                    functionName: {
                      name: "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "5764:58:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "5764:71:2"
                  },
                  variableNames: [
                    {
                      name: "pos",
                      nodeType: "YulIdentifier",
                      src: "5757:3:2"
                    }
                  ]
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "5883:5:2"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "5890:4:2",
                            type: "",
                            value: "0x20"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "5879:3:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "5879:16:2"
                      },
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "5897:3:2"
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "5902:6:2"
                      }
                    ],
                    functionName: {
                      name: "copy_memory_to_memory_with_cleanup",
                      nodeType: "YulIdentifier",
                      src: "5844:34:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "5844:65:2"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "5844:65:2"
                },
                {
                  nodeType: "YulAssignment",
                  src: "5918:46:2",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "5929:3:2"
                      },
                      {
                        arguments: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "5956:6:2"
                          }
                        ],
                        functionName: {
                          name: "round_up_to_mul_of_32",
                          nodeType: "YulIdentifier",
                          src: "5934:21:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "5934:29:2"
                      }
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "5925:3:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "5925:39:2"
                  },
                  variableNames: [
                    {
                      name: "end",
                      nodeType: "YulIdentifier",
                      src: "5918:3:2"
                    }
                  ]
                }
              ]
            },
            name: "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "5666:5:2",
                type: ""
              },
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "5673:3:2",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "5681:3:2",
                type: ""
              }
            ],
            src: "5593:377:2"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "6286:809:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "6296:27:2",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "6308:9:2"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "6319:3:2",
                        type: "",
                        value: "160"
                      }
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "6304:3:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "6304:19:2"
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "6296:4:2"
                    }
                  ]
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "6344:9:2"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "6355:1:2",
                            type: "",
                            value: "0"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "6340:3:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "6340:17:2"
                      },
                      {
                        arguments: [
                          {
                            name: "tail",
                            nodeType: "YulIdentifier",
                            src: "6363:4:2"
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "6369:9:2"
                          }
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "6359:3:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "6359:20:2"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "6333:6:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "6333:47:2"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "6333:47:2"
                },
                {
                  nodeType: "YulAssignment",
                  src: "6389:86:2",
                  value: {
                    arguments: [
                      {
                        name: "value0",
                        nodeType: "YulIdentifier",
                        src: "6461:6:2"
                      },
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "6470:4:2"
                      }
                    ],
                    functionName: {
                      name: "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "6397:63:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "6397:78:2"
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "6389:4:2"
                    }
                  ]
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "6496:9:2"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "6507:2:2",
                            type: "",
                            value: "32"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "6492:3:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "6492:18:2"
                      },
                      {
                        arguments: [
                          {
                            name: "tail",
                            nodeType: "YulIdentifier",
                            src: "6516:4:2"
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "6522:9:2"
                          }
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "6512:3:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "6512:20:2"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "6485:6:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "6485:48:2"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "6485:48:2"
                },
                {
                  nodeType: "YulAssignment",
                  src: "6542:86:2",
                  value: {
                    arguments: [
                      {
                        name: "value1",
                        nodeType: "YulIdentifier",
                        src: "6614:6:2"
                      },
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "6623:4:2"
                      }
                    ],
                    functionName: {
                      name: "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "6550:63:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "6550:78:2"
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "6542:4:2"
                    }
                  ]
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "6649:9:2"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "6660:2:2",
                            type: "",
                            value: "64"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "6645:3:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "6645:18:2"
                      },
                      {
                        arguments: [
                          {
                            name: "tail",
                            nodeType: "YulIdentifier",
                            src: "6669:4:2"
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "6675:9:2"
                          }
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "6665:3:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "6665:20:2"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "6638:6:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "6638:48:2"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "6638:48:2"
                },
                {
                  nodeType: "YulAssignment",
                  src: "6695:86:2",
                  value: {
                    arguments: [
                      {
                        name: "value2",
                        nodeType: "YulIdentifier",
                        src: "6767:6:2"
                      },
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "6776:4:2"
                      }
                    ],
                    functionName: {
                      name: "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "6703:63:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "6703:78:2"
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "6695:4:2"
                    }
                  ]
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "6802:9:2"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "6813:2:2",
                            type: "",
                            value: "96"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "6798:3:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "6798:18:2"
                      },
                      {
                        arguments: [
                          {
                            name: "tail",
                            nodeType: "YulIdentifier",
                            src: "6822:4:2"
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "6828:9:2"
                          }
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "6818:3:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "6818:20:2"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "6791:6:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "6791:48:2"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "6791:48:2"
                },
                {
                  nodeType: "YulAssignment",
                  src: "6848:86:2",
                  value: {
                    arguments: [
                      {
                        name: "value3",
                        nodeType: "YulIdentifier",
                        src: "6920:6:2"
                      },
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "6929:4:2"
                      }
                    ],
                    functionName: {
                      name: "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "6856:63:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "6856:78:2"
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "6848:4:2"
                    }
                  ]
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "6955:9:2"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "6966:3:2",
                            type: "",
                            value: "128"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "6951:3:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "6951:19:2"
                      },
                      {
                        arguments: [
                          {
                            name: "tail",
                            nodeType: "YulIdentifier",
                            src: "6976:4:2"
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "6982:9:2"
                          }
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "6972:3:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "6972:20:2"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "6944:6:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "6944:49:2"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "6944:49:2"
                },
                {
                  nodeType: "YulAssignment",
                  src: "7002:86:2",
                  value: {
                    arguments: [
                      {
                        name: "value4",
                        nodeType: "YulIdentifier",
                        src: "7074:6:2"
                      },
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "7083:4:2"
                      }
                    ],
                    functionName: {
                      name: "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "7010:63:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "7010:78:2"
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "7002:4:2"
                    }
                  ]
                }
              ]
            },
            name: "abi_encode_tuple_t_string_memory_ptr_t_string_memory_ptr_t_string_memory_ptr_t_string_memory_ptr_t_string_memory_ptr__to_t_string_memory_ptr_t_string_memory_ptr_t_string_memory_ptr_t_string_memory_ptr_t_string_memory_ptr__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "6226:9:2",
                type: ""
              },
              {
                name: "value4",
                nodeType: "YulTypedName",
                src: "6238:6:2",
                type: ""
              },
              {
                name: "value3",
                nodeType: "YulTypedName",
                src: "6246:6:2",
                type: ""
              },
              {
                name: "value2",
                nodeType: "YulTypedName",
                src: "6254:6:2",
                type: ""
              },
              {
                name: "value1",
                nodeType: "YulTypedName",
                src: "6262:6:2",
                type: ""
              },
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "6270:6:2",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "6281:4:2",
                type: ""
              }
            ],
            src: "5976:1119:2"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "7166:53:2",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "7183:3:2"
                      },
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "7206:5:2"
                          }
                        ],
                        functionName: {
                          name: "cleanup_t_uint256",
                          nodeType: "YulIdentifier",
                          src: "7188:17:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "7188:24:2"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "7176:6:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "7176:37:2"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "7176:37:2"
                }
              ]
            },
            name: "abi_encode_t_uint256_to_t_uint256_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "7154:5:2",
                type: ""
              },
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "7161:3:2",
                type: ""
              }
            ],
            src: "7101:118:2"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "7323:124:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "7333:26:2",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "7345:9:2"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "7356:2:2",
                        type: "",
                        value: "32"
                      }
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "7341:3:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "7341:18:2"
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "7333:4:2"
                    }
                  ]
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "value0",
                        nodeType: "YulIdentifier",
                        src: "7413:6:2"
                      },
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "7426:9:2"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "7437:1:2",
                            type: "",
                            value: "0"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "7422:3:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "7422:17:2"
                      }
                    ],
                    functionName: {
                      name: "abi_encode_t_uint256_to_t_uint256_fromStack",
                      nodeType: "YulIdentifier",
                      src: "7369:43:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "7369:71:2"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "7369:71:2"
                }
              ]
            },
            name: "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "7295:9:2",
                type: ""
              },
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "7307:6:2",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "7318:4:2",
                type: ""
              }
            ],
            src: "7225:222:2"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "7481:152:2",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "7498:1:2",
                        type: "",
                        value: "0"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "7501:77:2",
                        type: "",
                        value: "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "7491:6:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "7491:88:2"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "7491:88:2"
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "7595:1:2",
                        type: "",
                        value: "4"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "7598:4:2",
                        type: "",
                        value: "0x22"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "7588:6:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "7588:15:2"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "7588:15:2"
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "7619:1:2",
                        type: "",
                        value: "0"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "7622:4:2",
                        type: "",
                        value: "0x24"
                      }
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "7612:6:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "7612:15:2"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "7612:15:2"
                }
              ]
            },
            name: "panic_error_0x22",
            nodeType: "YulFunctionDefinition",
            src: "7453:180:2"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "7690:269:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "7700:22:2",
                  value: {
                    arguments: [
                      {
                        name: "data",
                        nodeType: "YulIdentifier",
                        src: "7714:4:2"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "7720:1:2",
                        type: "",
                        value: "2"
                      }
                    ],
                    functionName: {
                      name: "div",
                      nodeType: "YulIdentifier",
                      src: "7710:3:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "7710:12:2"
                  },
                  variableNames: [
                    {
                      name: "length",
                      nodeType: "YulIdentifier",
                      src: "7700:6:2"
                    }
                  ]
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "7731:38:2",
                  value: {
                    arguments: [
                      {
                        name: "data",
                        nodeType: "YulIdentifier",
                        src: "7761:4:2"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "7767:1:2",
                        type: "",
                        value: "1"
                      }
                    ],
                    functionName: {
                      name: "and",
                      nodeType: "YulIdentifier",
                      src: "7757:3:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "7757:12:2"
                  },
                  variables: [
                    {
                      name: "outOfPlaceEncoding",
                      nodeType: "YulTypedName",
                      src: "7735:18:2",
                      type: ""
                    }
                  ]
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "7808:51:2",
                    statements: [
                      {
                        nodeType: "YulAssignment",
                        src: "7822:27:2",
                        value: {
                          arguments: [
                            {
                              name: "length",
                              nodeType: "YulIdentifier",
                              src: "7836:6:2"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "7844:4:2",
                              type: "",
                              value: "0x7f"
                            }
                          ],
                          functionName: {
                            name: "and",
                            nodeType: "YulIdentifier",
                            src: "7832:3:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "7832:17:2"
                        },
                        variableNames: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "7822:6:2"
                          }
                        ]
                      }
                    ]
                  },
                  condition: {
                    arguments: [
                      {
                        name: "outOfPlaceEncoding",
                        nodeType: "YulIdentifier",
                        src: "7788:18:2"
                      }
                    ],
                    functionName: {
                      name: "iszero",
                      nodeType: "YulIdentifier",
                      src: "7781:6:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "7781:26:2"
                  },
                  nodeType: "YulIf",
                  src: "7778:81:2"
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "7911:42:2",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "panic_error_0x22",
                            nodeType: "YulIdentifier",
                            src: "7925:16:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "7925:18:2"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "7925:18:2"
                      }
                    ]
                  },
                  condition: {
                    arguments: [
                      {
                        name: "outOfPlaceEncoding",
                        nodeType: "YulIdentifier",
                        src: "7875:18:2"
                      },
                      {
                        arguments: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "7898:6:2"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "7906:2:2",
                            type: "",
                            value: "32"
                          }
                        ],
                        functionName: {
                          name: "lt",
                          nodeType: "YulIdentifier",
                          src: "7895:2:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "7895:14:2"
                      }
                    ],
                    functionName: {
                      name: "eq",
                      nodeType: "YulIdentifier",
                      src: "7872:2:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "7872:38:2"
                  },
                  nodeType: "YulIf",
                  src: "7869:84:2"
                }
              ]
            },
            name: "extract_byte_array_length",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "data",
                nodeType: "YulTypedName",
                src: "7674:4:2",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "7683:6:2",
                type: ""
              }
            ],
            src: "7639:320:2"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "8019:87:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "8029:11:2",
                  value: {
                    name: "ptr",
                    nodeType: "YulIdentifier",
                    src: "8037:3:2"
                  },
                  variableNames: [
                    {
                      name: "data",
                      nodeType: "YulIdentifier",
                      src: "8029:4:2"
                    }
                  ]
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "8057:1:2",
                        type: "",
                        value: "0"
                      },
                      {
                        name: "ptr",
                        nodeType: "YulIdentifier",
                        src: "8060:3:2"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "8050:6:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "8050:14:2"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "8050:14:2"
                },
                {
                  nodeType: "YulAssignment",
                  src: "8073:26:2",
                  value: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "8091:1:2",
                        type: "",
                        value: "0"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "8094:4:2",
                        type: "",
                        value: "0x20"
                      }
                    ],
                    functionName: {
                      name: "keccak256",
                      nodeType: "YulIdentifier",
                      src: "8081:9:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "8081:18:2"
                  },
                  variableNames: [
                    {
                      name: "data",
                      nodeType: "YulIdentifier",
                      src: "8073:4:2"
                    }
                  ]
                }
              ]
            },
            name: "array_dataslot_t_string_storage",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "ptr",
                nodeType: "YulTypedName",
                src: "8006:3:2",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "data",
                nodeType: "YulTypedName",
                src: "8014:4:2",
                type: ""
              }
            ],
            src: "7965:141:2"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "8156:49:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "8166:33:2",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "8184:5:2"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "8191:2:2",
                            type: "",
                            value: "31"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "8180:3:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "8180:14:2"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "8196:2:2",
                        type: "",
                        value: "32"
                      }
                    ],
                    functionName: {
                      name: "div",
                      nodeType: "YulIdentifier",
                      src: "8176:3:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "8176:23:2"
                  },
                  variableNames: [
                    {
                      name: "result",
                      nodeType: "YulIdentifier",
                      src: "8166:6:2"
                    }
                  ]
                }
              ]
            },
            name: "divide_by_32_ceil",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "8139:5:2",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "result",
                nodeType: "YulTypedName",
                src: "8149:6:2",
                type: ""
              }
            ],
            src: "8112:93:2"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "8264:54:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "8274:37:2",
                  value: {
                    arguments: [
                      {
                        name: "bits",
                        nodeType: "YulIdentifier",
                        src: "8299:4:2"
                      },
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "8305:5:2"
                      }
                    ],
                    functionName: {
                      name: "shl",
                      nodeType: "YulIdentifier",
                      src: "8295:3:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "8295:16:2"
                  },
                  variableNames: [
                    {
                      name: "newValue",
                      nodeType: "YulIdentifier",
                      src: "8274:8:2"
                    }
                  ]
                }
              ]
            },
            name: "shift_left_dynamic",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "bits",
                nodeType: "YulTypedName",
                src: "8239:4:2",
                type: ""
              },
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "8245:5:2",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "newValue",
                nodeType: "YulTypedName",
                src: "8255:8:2",
                type: ""
              }
            ],
            src: "8211:107:2"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "8400:317:2",
              statements: [
                {
                  nodeType: "YulVariableDeclaration",
                  src: "8410:35:2",
                  value: {
                    arguments: [
                      {
                        name: "shiftBytes",
                        nodeType: "YulIdentifier",
                        src: "8431:10:2"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "8443:1:2",
                        type: "",
                        value: "8"
                      }
                    ],
                    functionName: {
                      name: "mul",
                      nodeType: "YulIdentifier",
                      src: "8427:3:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "8427:18:2"
                  },
                  variables: [
                    {
                      name: "shiftBits",
                      nodeType: "YulTypedName",
                      src: "8414:9:2",
                      type: ""
                    }
                  ]
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "8454:109:2",
                  value: {
                    arguments: [
                      {
                        name: "shiftBits",
                        nodeType: "YulIdentifier",
                        src: "8485:9:2"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "8496:66:2",
                        type: "",
                        value: "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                      }
                    ],
                    functionName: {
                      name: "shift_left_dynamic",
                      nodeType: "YulIdentifier",
                      src: "8466:18:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "8466:97:2"
                  },
                  variables: [
                    {
                      name: "mask",
                      nodeType: "YulTypedName",
                      src: "8458:4:2",
                      type: ""
                    }
                  ]
                },
                {
                  nodeType: "YulAssignment",
                  src: "8572:51:2",
                  value: {
                    arguments: [
                      {
                        name: "shiftBits",
                        nodeType: "YulIdentifier",
                        src: "8603:9:2"
                      },
                      {
                        name: "toInsert",
                        nodeType: "YulIdentifier",
                        src: "8614:8:2"
                      }
                    ],
                    functionName: {
                      name: "shift_left_dynamic",
                      nodeType: "YulIdentifier",
                      src: "8584:18:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "8584:39:2"
                  },
                  variableNames: [
                    {
                      name: "toInsert",
                      nodeType: "YulIdentifier",
                      src: "8572:8:2"
                    }
                  ]
                },
                {
                  nodeType: "YulAssignment",
                  src: "8632:30:2",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "8645:5:2"
                      },
                      {
                        arguments: [
                          {
                            name: "mask",
                            nodeType: "YulIdentifier",
                            src: "8656:4:2"
                          }
                        ],
                        functionName: {
                          name: "not",
                          nodeType: "YulIdentifier",
                          src: "8652:3:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "8652:9:2"
                      }
                    ],
                    functionName: {
                      name: "and",
                      nodeType: "YulIdentifier",
                      src: "8641:3:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "8641:21:2"
                  },
                  variableNames: [
                    {
                      name: "value",
                      nodeType: "YulIdentifier",
                      src: "8632:5:2"
                    }
                  ]
                },
                {
                  nodeType: "YulAssignment",
                  src: "8671:40:2",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "8684:5:2"
                      },
                      {
                        arguments: [
                          {
                            name: "toInsert",
                            nodeType: "YulIdentifier",
                            src: "8695:8:2"
                          },
                          {
                            name: "mask",
                            nodeType: "YulIdentifier",
                            src: "8705:4:2"
                          }
                        ],
                        functionName: {
                          name: "and",
                          nodeType: "YulIdentifier",
                          src: "8691:3:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "8691:19:2"
                      }
                    ],
                    functionName: {
                      name: "or",
                      nodeType: "YulIdentifier",
                      src: "8681:2:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "8681:30:2"
                  },
                  variableNames: [
                    {
                      name: "result",
                      nodeType: "YulIdentifier",
                      src: "8671:6:2"
                    }
                  ]
                }
              ]
            },
            name: "update_byte_slice_dynamic32",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "8361:5:2",
                type: ""
              },
              {
                name: "shiftBytes",
                nodeType: "YulTypedName",
                src: "8368:10:2",
                type: ""
              },
              {
                name: "toInsert",
                nodeType: "YulTypedName",
                src: "8380:8:2",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "result",
                nodeType: "YulTypedName",
                src: "8393:6:2",
                type: ""
              }
            ],
            src: "8324:393:2"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "8755:28:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "8765:12:2",
                  value: {
                    name: "value",
                    nodeType: "YulIdentifier",
                    src: "8772:5:2"
                  },
                  variableNames: [
                    {
                      name: "ret",
                      nodeType: "YulIdentifier",
                      src: "8765:3:2"
                    }
                  ]
                }
              ]
            },
            name: "identity",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "8741:5:2",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "ret",
                nodeType: "YulTypedName",
                src: "8751:3:2",
                type: ""
              }
            ],
            src: "8723:60:2"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "8849:82:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "8859:66:2",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "value",
                                nodeType: "YulIdentifier",
                                src: "8917:5:2"
                              }
                            ],
                            functionName: {
                              name: "cleanup_t_uint256",
                              nodeType: "YulIdentifier",
                              src: "8899:17:2"
                            },
                            nodeType: "YulFunctionCall",
                            src: "8899:24:2"
                          }
                        ],
                        functionName: {
                          name: "identity",
                          nodeType: "YulIdentifier",
                          src: "8890:8:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "8890:34:2"
                      }
                    ],
                    functionName: {
                      name: "cleanup_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "8872:17:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "8872:53:2"
                  },
                  variableNames: [
                    {
                      name: "converted",
                      nodeType: "YulIdentifier",
                      src: "8859:9:2"
                    }
                  ]
                }
              ]
            },
            name: "convert_t_uint256_to_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "8829:5:2",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "converted",
                nodeType: "YulTypedName",
                src: "8839:9:2",
                type: ""
              }
            ],
            src: "8789:142:2"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "8984:28:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "8994:12:2",
                  value: {
                    name: "value",
                    nodeType: "YulIdentifier",
                    src: "9001:5:2"
                  },
                  variableNames: [
                    {
                      name: "ret",
                      nodeType: "YulIdentifier",
                      src: "8994:3:2"
                    }
                  ]
                }
              ]
            },
            name: "prepare_store_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "8970:5:2",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "ret",
                nodeType: "YulTypedName",
                src: "8980:3:2",
                type: ""
              }
            ],
            src: "8937:75:2"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "9094:193:2",
              statements: [
                {
                  nodeType: "YulVariableDeclaration",
                  src: "9104:63:2",
                  value: {
                    arguments: [
                      {
                        name: "value_0",
                        nodeType: "YulIdentifier",
                        src: "9159:7:2"
                      }
                    ],
                    functionName: {
                      name: "convert_t_uint256_to_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "9128:30:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "9128:39:2"
                  },
                  variables: [
                    {
                      name: "convertedValue_0",
                      nodeType: "YulTypedName",
                      src: "9108:16:2",
                      type: ""
                    }
                  ]
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "slot",
                        nodeType: "YulIdentifier",
                        src: "9183:4:2"
                      },
                      {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "slot",
                                nodeType: "YulIdentifier",
                                src: "9223:4:2"
                              }
                            ],
                            functionName: {
                              name: "sload",
                              nodeType: "YulIdentifier",
                              src: "9217:5:2"
                            },
                            nodeType: "YulFunctionCall",
                            src: "9217:11:2"
                          },
                          {
                            name: "offset",
                            nodeType: "YulIdentifier",
                            src: "9230:6:2"
                          },
                          {
                            arguments: [
                              {
                                name: "convertedValue_0",
                                nodeType: "YulIdentifier",
                                src: "9262:16:2"
                              }
                            ],
                            functionName: {
                              name: "prepare_store_t_uint256",
                              nodeType: "YulIdentifier",
                              src: "9238:23:2"
                            },
                            nodeType: "YulFunctionCall",
                            src: "9238:41:2"
                          }
                        ],
                        functionName: {
                          name: "update_byte_slice_dynamic32",
                          nodeType: "YulIdentifier",
                          src: "9189:27:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "9189:91:2"
                      }
                    ],
                    functionName: {
                      name: "sstore",
                      nodeType: "YulIdentifier",
                      src: "9176:6:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "9176:105:2"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "9176:105:2"
                }
              ]
            },
            name: "update_storage_value_t_uint256_to_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "slot",
                nodeType: "YulTypedName",
                src: "9071:4:2",
                type: ""
              },
              {
                name: "offset",
                nodeType: "YulTypedName",
                src: "9077:6:2",
                type: ""
              },
              {
                name: "value_0",
                nodeType: "YulTypedName",
                src: "9085:7:2",
                type: ""
              }
            ],
            src: "9018:269:2"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "9342:24:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "9352:8:2",
                  value: {
                    kind: "number",
                    nodeType: "YulLiteral",
                    src: "9359:1:2",
                    type: "",
                    value: "0"
                  },
                  variableNames: [
                    {
                      name: "ret",
                      nodeType: "YulIdentifier",
                      src: "9352:3:2"
                    }
                  ]
                }
              ]
            },
            name: "zero_value_for_split_t_uint256",
            nodeType: "YulFunctionDefinition",
            returnVariables: [
              {
                name: "ret",
                nodeType: "YulTypedName",
                src: "9338:3:2",
                type: ""
              }
            ],
            src: "9293:73:2"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "9425:136:2",
              statements: [
                {
                  nodeType: "YulVariableDeclaration",
                  src: "9435:46:2",
                  value: {
                    arguments: [],
                    functionName: {
                      name: "zero_value_for_split_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "9449:30:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "9449:32:2"
                  },
                  variables: [
                    {
                      name: "zero_0",
                      nodeType: "YulTypedName",
                      src: "9439:6:2",
                      type: ""
                    }
                  ]
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "slot",
                        nodeType: "YulIdentifier",
                        src: "9534:4:2"
                      },
                      {
                        name: "offset",
                        nodeType: "YulIdentifier",
                        src: "9540:6:2"
                      },
                      {
                        name: "zero_0",
                        nodeType: "YulIdentifier",
                        src: "9548:6:2"
                      }
                    ],
                    functionName: {
                      name: "update_storage_value_t_uint256_to_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "9490:43:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "9490:65:2"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "9490:65:2"
                }
              ]
            },
            name: "storage_set_to_zero_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "slot",
                nodeType: "YulTypedName",
                src: "9411:4:2",
                type: ""
              },
              {
                name: "offset",
                nodeType: "YulTypedName",
                src: "9417:6:2",
                type: ""
              }
            ],
            src: "9372:189:2"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "9617:136:2",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "9684:63:2",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              name: "start",
                              nodeType: "YulIdentifier",
                              src: "9728:5:2"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "9735:1:2",
                              type: "",
                              value: "0"
                            }
                          ],
                          functionName: {
                            name: "storage_set_to_zero_t_uint256",
                            nodeType: "YulIdentifier",
                            src: "9698:29:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "9698:39:2"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "9698:39:2"
                      }
                    ]
                  },
                  condition: {
                    arguments: [
                      {
                        name: "start",
                        nodeType: "YulIdentifier",
                        src: "9637:5:2"
                      },
                      {
                        name: "end",
                        nodeType: "YulIdentifier",
                        src: "9644:3:2"
                      }
                    ],
                    functionName: {
                      name: "lt",
                      nodeType: "YulIdentifier",
                      src: "9634:2:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "9634:14:2"
                  },
                  nodeType: "YulForLoop",
                  post: {
                    nodeType: "YulBlock",
                    src: "9649:26:2",
                    statements: [
                      {
                        nodeType: "YulAssignment",
                        src: "9651:22:2",
                        value: {
                          arguments: [
                            {
                              name: "start",
                              nodeType: "YulIdentifier",
                              src: "9664:5:2"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "9671:1:2",
                              type: "",
                              value: "1"
                            }
                          ],
                          functionName: {
                            name: "add",
                            nodeType: "YulIdentifier",
                            src: "9660:3:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "9660:13:2"
                        },
                        variableNames: [
                          {
                            name: "start",
                            nodeType: "YulIdentifier",
                            src: "9651:5:2"
                          }
                        ]
                      }
                    ]
                  },
                  pre: {
                    nodeType: "YulBlock",
                    src: "9631:2:2",
                    statements: []
                  },
                  src: "9627:120:2"
                }
              ]
            },
            name: "clear_storage_range_t_bytes1",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "start",
                nodeType: "YulTypedName",
                src: "9605:5:2",
                type: ""
              },
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "9612:3:2",
                type: ""
              }
            ],
            src: "9567:186:2"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "9838:464:2",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "9864:431:2",
                    statements: [
                      {
                        nodeType: "YulVariableDeclaration",
                        src: "9878:54:2",
                        value: {
                          arguments: [
                            {
                              name: "array",
                              nodeType: "YulIdentifier",
                              src: "9926:5:2"
                            }
                          ],
                          functionName: {
                            name: "array_dataslot_t_string_storage",
                            nodeType: "YulIdentifier",
                            src: "9894:31:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "9894:38:2"
                        },
                        variables: [
                          {
                            name: "dataArea",
                            nodeType: "YulTypedName",
                            src: "9882:8:2",
                            type: ""
                          }
                        ]
                      },
                      {
                        nodeType: "YulVariableDeclaration",
                        src: "9945:63:2",
                        value: {
                          arguments: [
                            {
                              name: "dataArea",
                              nodeType: "YulIdentifier",
                              src: "9968:8:2"
                            },
                            {
                              arguments: [
                                {
                                  name: "startIndex",
                                  nodeType: "YulIdentifier",
                                  src: "9996:10:2"
                                }
                              ],
                              functionName: {
                                name: "divide_by_32_ceil",
                                nodeType: "YulIdentifier",
                                src: "9978:17:2"
                              },
                              nodeType: "YulFunctionCall",
                              src: "9978:29:2"
                            }
                          ],
                          functionName: {
                            name: "add",
                            nodeType: "YulIdentifier",
                            src: "9964:3:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "9964:44:2"
                        },
                        variables: [
                          {
                            name: "deleteStart",
                            nodeType: "YulTypedName",
                            src: "9949:11:2",
                            type: ""
                          }
                        ]
                      },
                      {
                        body: {
                          nodeType: "YulBlock",
                          src: "10165:27:2",
                          statements: [
                            {
                              nodeType: "YulAssignment",
                              src: "10167:23:2",
                              value: {
                                name: "dataArea",
                                nodeType: "YulIdentifier",
                                src: "10182:8:2"
                              },
                              variableNames: [
                                {
                                  name: "deleteStart",
                                  nodeType: "YulIdentifier",
                                  src: "10167:11:2"
                                }
                              ]
                            }
                          ]
                        },
                        condition: {
                          arguments: [
                            {
                              name: "startIndex",
                              nodeType: "YulIdentifier",
                              src: "10149:10:2"
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "10161:2:2",
                              type: "",
                              value: "32"
                            }
                          ],
                          functionName: {
                            name: "lt",
                            nodeType: "YulIdentifier",
                            src: "10146:2:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "10146:18:2"
                        },
                        nodeType: "YulIf",
                        src: "10143:49:2"
                      },
                      {
                        expression: {
                          arguments: [
                            {
                              name: "deleteStart",
                              nodeType: "YulIdentifier",
                              src: "10234:11:2"
                            },
                            {
                              arguments: [
                                {
                                  name: "dataArea",
                                  nodeType: "YulIdentifier",
                                  src: "10251:8:2"
                                },
                                {
                                  arguments: [
                                    {
                                      name: "len",
                                      nodeType: "YulIdentifier",
                                      src: "10279:3:2"
                                    }
                                  ],
                                  functionName: {
                                    name: "divide_by_32_ceil",
                                    nodeType: "YulIdentifier",
                                    src: "10261:17:2"
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "10261:22:2"
                                }
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "10247:3:2"
                              },
                              nodeType: "YulFunctionCall",
                              src: "10247:37:2"
                            }
                          ],
                          functionName: {
                            name: "clear_storage_range_t_bytes1",
                            nodeType: "YulIdentifier",
                            src: "10205:28:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "10205:80:2"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "10205:80:2"
                      }
                    ]
                  },
                  condition: {
                    arguments: [
                      {
                        name: "len",
                        nodeType: "YulIdentifier",
                        src: "9855:3:2"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "9860:2:2",
                        type: "",
                        value: "31"
                      }
                    ],
                    functionName: {
                      name: "gt",
                      nodeType: "YulIdentifier",
                      src: "9852:2:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "9852:11:2"
                  },
                  nodeType: "YulIf",
                  src: "9849:446:2"
                }
              ]
            },
            name: "clean_up_bytearray_end_slots_t_string_storage",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "array",
                nodeType: "YulTypedName",
                src: "9814:5:2",
                type: ""
              },
              {
                name: "len",
                nodeType: "YulTypedName",
                src: "9821:3:2",
                type: ""
              },
              {
                name: "startIndex",
                nodeType: "YulTypedName",
                src: "9826:10:2",
                type: ""
              }
            ],
            src: "9759:543:2"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "10371:54:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "10381:37:2",
                  value: {
                    arguments: [
                      {
                        name: "bits",
                        nodeType: "YulIdentifier",
                        src: "10406:4:2"
                      },
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "10412:5:2"
                      }
                    ],
                    functionName: {
                      name: "shr",
                      nodeType: "YulIdentifier",
                      src: "10402:3:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "10402:16:2"
                  },
                  variableNames: [
                    {
                      name: "newValue",
                      nodeType: "YulIdentifier",
                      src: "10381:8:2"
                    }
                  ]
                }
              ]
            },
            name: "shift_right_unsigned_dynamic",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "bits",
                nodeType: "YulTypedName",
                src: "10346:4:2",
                type: ""
              },
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "10352:5:2",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "newValue",
                nodeType: "YulTypedName",
                src: "10362:8:2",
                type: ""
              }
            ],
            src: "10308:117:2"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "10482:118:2",
              statements: [
                {
                  nodeType: "YulVariableDeclaration",
                  src: "10492:68:2",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            arguments: [
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "10541:1:2",
                                type: "",
                                value: "8"
                              },
                              {
                                name: "bytes",
                                nodeType: "YulIdentifier",
                                src: "10544:5:2"
                              }
                            ],
                            functionName: {
                              name: "mul",
                              nodeType: "YulIdentifier",
                              src: "10537:3:2"
                            },
                            nodeType: "YulFunctionCall",
                            src: "10537:13:2"
                          },
                          {
                            arguments: [
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "10556:1:2",
                                type: "",
                                value: "0"
                              }
                            ],
                            functionName: {
                              name: "not",
                              nodeType: "YulIdentifier",
                              src: "10552:3:2"
                            },
                            nodeType: "YulFunctionCall",
                            src: "10552:6:2"
                          }
                        ],
                        functionName: {
                          name: "shift_right_unsigned_dynamic",
                          nodeType: "YulIdentifier",
                          src: "10508:28:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "10508:51:2"
                      }
                    ],
                    functionName: {
                      name: "not",
                      nodeType: "YulIdentifier",
                      src: "10504:3:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "10504:56:2"
                  },
                  variables: [
                    {
                      name: "mask",
                      nodeType: "YulTypedName",
                      src: "10496:4:2",
                      type: ""
                    }
                  ]
                },
                {
                  nodeType: "YulAssignment",
                  src: "10569:25:2",
                  value: {
                    arguments: [
                      {
                        name: "data",
                        nodeType: "YulIdentifier",
                        src: "10583:4:2"
                      },
                      {
                        name: "mask",
                        nodeType: "YulIdentifier",
                        src: "10589:4:2"
                      }
                    ],
                    functionName: {
                      name: "and",
                      nodeType: "YulIdentifier",
                      src: "10579:3:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "10579:15:2"
                  },
                  variableNames: [
                    {
                      name: "result",
                      nodeType: "YulIdentifier",
                      src: "10569:6:2"
                    }
                  ]
                }
              ]
            },
            name: "mask_bytes_dynamic",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "data",
                nodeType: "YulTypedName",
                src: "10459:4:2",
                type: ""
              },
              {
                name: "bytes",
                nodeType: "YulTypedName",
                src: "10465:5:2",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "result",
                nodeType: "YulTypedName",
                src: "10475:6:2",
                type: ""
              }
            ],
            src: "10431:169:2"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "10686:214:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "10819:37:2",
                  value: {
                    arguments: [
                      {
                        name: "data",
                        nodeType: "YulIdentifier",
                        src: "10846:4:2"
                      },
                      {
                        name: "len",
                        nodeType: "YulIdentifier",
                        src: "10852:3:2"
                      }
                    ],
                    functionName: {
                      name: "mask_bytes_dynamic",
                      nodeType: "YulIdentifier",
                      src: "10827:18:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "10827:29:2"
                  },
                  variableNames: [
                    {
                      name: "data",
                      nodeType: "YulIdentifier",
                      src: "10819:4:2"
                    }
                  ]
                },
                {
                  nodeType: "YulAssignment",
                  src: "10865:29:2",
                  value: {
                    arguments: [
                      {
                        name: "data",
                        nodeType: "YulIdentifier",
                        src: "10876:4:2"
                      },
                      {
                        arguments: [
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "10886:1:2",
                            type: "",
                            value: "2"
                          },
                          {
                            name: "len",
                            nodeType: "YulIdentifier",
                            src: "10889:3:2"
                          }
                        ],
                        functionName: {
                          name: "mul",
                          nodeType: "YulIdentifier",
                          src: "10882:3:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "10882:11:2"
                      }
                    ],
                    functionName: {
                      name: "or",
                      nodeType: "YulIdentifier",
                      src: "10873:2:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "10873:21:2"
                  },
                  variableNames: [
                    {
                      name: "used",
                      nodeType: "YulIdentifier",
                      src: "10865:4:2"
                    }
                  ]
                }
              ]
            },
            name: "extract_used_part_and_set_length_of_short_byte_array",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "data",
                nodeType: "YulTypedName",
                src: "10667:4:2",
                type: ""
              },
              {
                name: "len",
                nodeType: "YulTypedName",
                src: "10673:3:2",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "used",
                nodeType: "YulTypedName",
                src: "10681:4:2",
                type: ""
              }
            ],
            src: "10605:295:2"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "10997:1303:2",
              statements: [
                {
                  nodeType: "YulVariableDeclaration",
                  src: "11008:51:2",
                  value: {
                    arguments: [
                      {
                        name: "src",
                        nodeType: "YulIdentifier",
                        src: "11055:3:2"
                      }
                    ],
                    functionName: {
                      name: "array_length_t_string_memory_ptr",
                      nodeType: "YulIdentifier",
                      src: "11022:32:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "11022:37:2"
                  },
                  variables: [
                    {
                      name: "newLen",
                      nodeType: "YulTypedName",
                      src: "11012:6:2",
                      type: ""
                    }
                  ]
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "11144:22:2",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "panic_error_0x41",
                            nodeType: "YulIdentifier",
                            src: "11146:16:2"
                          },
                          nodeType: "YulFunctionCall",
                          src: "11146:18:2"
                        },
                        nodeType: "YulExpressionStatement",
                        src: "11146:18:2"
                      }
                    ]
                  },
                  condition: {
                    arguments: [
                      {
                        name: "newLen",
                        nodeType: "YulIdentifier",
                        src: "11116:6:2"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "11124:18:2",
                        type: "",
                        value: "0xffffffffffffffff"
                      }
                    ],
                    functionName: {
                      name: "gt",
                      nodeType: "YulIdentifier",
                      src: "11113:2:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "11113:30:2"
                  },
                  nodeType: "YulIf",
                  src: "11110:56:2"
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "11176:52:2",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "slot",
                            nodeType: "YulIdentifier",
                            src: "11222:4:2"
                          }
                        ],
                        functionName: {
                          name: "sload",
                          nodeType: "YulIdentifier",
                          src: "11216:5:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "11216:11:2"
                      }
                    ],
                    functionName: {
                      name: "extract_byte_array_length",
                      nodeType: "YulIdentifier",
                      src: "11190:25:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "11190:38:2"
                  },
                  variables: [
                    {
                      name: "oldLen",
                      nodeType: "YulTypedName",
                      src: "11180:6:2",
                      type: ""
                    }
                  ]
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "slot",
                        nodeType: "YulIdentifier",
                        src: "11321:4:2"
                      },
                      {
                        name: "oldLen",
                        nodeType: "YulIdentifier",
                        src: "11327:6:2"
                      },
                      {
                        name: "newLen",
                        nodeType: "YulIdentifier",
                        src: "11335:6:2"
                      }
                    ],
                    functionName: {
                      name: "clean_up_bytearray_end_slots_t_string_storage",
                      nodeType: "YulIdentifier",
                      src: "11275:45:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "11275:67:2"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "11275:67:2"
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "11352:18:2",
                  value: {
                    kind: "number",
                    nodeType: "YulLiteral",
                    src: "11369:1:2",
                    type: "",
                    value: "0"
                  },
                  variables: [
                    {
                      name: "srcOffset",
                      nodeType: "YulTypedName",
                      src: "11356:9:2",
                      type: ""
                    }
                  ]
                },
                {
                  nodeType: "YulAssignment",
                  src: "11380:17:2",
                  value: {
                    kind: "number",
                    nodeType: "YulLiteral",
                    src: "11393:4:2",
                    type: "",
                    value: "0x20"
                  },
                  variableNames: [
                    {
                      name: "srcOffset",
                      nodeType: "YulIdentifier",
                      src: "11380:9:2"
                    }
                  ]
                },
                {
                  cases: [
                    {
                      body: {
                        nodeType: "YulBlock",
                        src: "11444:611:2",
                        statements: [
                          {
                            nodeType: "YulVariableDeclaration",
                            src: "11458:37:2",
                            value: {
                              arguments: [
                                {
                                  name: "newLen",
                                  nodeType: "YulIdentifier",
                                  src: "11477:6:2"
                                },
                                {
                                  arguments: [
                                    {
                                      kind: "number",
                                      nodeType: "YulLiteral",
                                      src: "11489:4:2",
                                      type: "",
                                      value: "0x1f"
                                    }
                                  ],
                                  functionName: {
                                    name: "not",
                                    nodeType: "YulIdentifier",
                                    src: "11485:3:2"
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "11485:9:2"
                                }
                              ],
                              functionName: {
                                name: "and",
                                nodeType: "YulIdentifier",
                                src: "11473:3:2"
                              },
                              nodeType: "YulFunctionCall",
                              src: "11473:22:2"
                            },
                            variables: [
                              {
                                name: "loopEnd",
                                nodeType: "YulTypedName",
                                src: "11462:7:2",
                                type: ""
                              }
                            ]
                          },
                          {
                            nodeType: "YulVariableDeclaration",
                            src: "11509:51:2",
                            value: {
                              arguments: [
                                {
                                  name: "slot",
                                  nodeType: "YulIdentifier",
                                  src: "11555:4:2"
                                }
                              ],
                              functionName: {
                                name: "array_dataslot_t_string_storage",
                                nodeType: "YulIdentifier",
                                src: "11523:31:2"
                              },
                              nodeType: "YulFunctionCall",
                              src: "11523:37:2"
                            },
                            variables: [
                              {
                                name: "dstPtr",
                                nodeType: "YulTypedName",
                                src: "11513:6:2",
                                type: ""
                              }
                            ]
                          },
                          {
                            nodeType: "YulVariableDeclaration",
                            src: "11573:10:2",
                            value: {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "11582:1:2",
                              type: "",
                              value: "0"
                            },
                            variables: [
                              {
                                name: "i",
                                nodeType: "YulTypedName",
                                src: "11577:1:2",
                                type: ""
                              }
                            ]
                          },
                          {
                            body: {
                              nodeType: "YulBlock",
                              src: "11641:163:2",
                              statements: [
                                {
                                  expression: {
                                    arguments: [
                                      {
                                        name: "dstPtr",
                                        nodeType: "YulIdentifier",
                                        src: "11666:6:2"
                                      },
                                      {
                                        arguments: [
                                          {
                                            arguments: [
                                              {
                                                name: "src",
                                                nodeType: "YulIdentifier",
                                                src: "11684:3:2"
                                              },
                                              {
                                                name: "srcOffset",
                                                nodeType: "YulIdentifier",
                                                src: "11689:9:2"
                                              }
                                            ],
                                            functionName: {
                                              name: "add",
                                              nodeType: "YulIdentifier",
                                              src: "11680:3:2"
                                            },
                                            nodeType: "YulFunctionCall",
                                            src: "11680:19:2"
                                          }
                                        ],
                                        functionName: {
                                          name: "mload",
                                          nodeType: "YulIdentifier",
                                          src: "11674:5:2"
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "11674:26:2"
                                      }
                                    ],
                                    functionName: {
                                      name: "sstore",
                                      nodeType: "YulIdentifier",
                                      src: "11659:6:2"
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "11659:42:2"
                                  },
                                  nodeType: "YulExpressionStatement",
                                  src: "11659:42:2"
                                },
                                {
                                  nodeType: "YulAssignment",
                                  src: "11718:24:2",
                                  value: {
                                    arguments: [
                                      {
                                        name: "dstPtr",
                                        nodeType: "YulIdentifier",
                                        src: "11732:6:2"
                                      },
                                      {
                                        kind: "number",
                                        nodeType: "YulLiteral",
                                        src: "11740:1:2",
                                        type: "",
                                        value: "1"
                                      }
                                    ],
                                    functionName: {
                                      name: "add",
                                      nodeType: "YulIdentifier",
                                      src: "11728:3:2"
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "11728:14:2"
                                  },
                                  variableNames: [
                                    {
                                      name: "dstPtr",
                                      nodeType: "YulIdentifier",
                                      src: "11718:6:2"
                                    }
                                  ]
                                },
                                {
                                  nodeType: "YulAssignment",
                                  src: "11759:31:2",
                                  value: {
                                    arguments: [
                                      {
                                        name: "srcOffset",
                                        nodeType: "YulIdentifier",
                                        src: "11776:9:2"
                                      },
                                      {
                                        kind: "number",
                                        nodeType: "YulLiteral",
                                        src: "11787:2:2",
                                        type: "",
                                        value: "32"
                                      }
                                    ],
                                    functionName: {
                                      name: "add",
                                      nodeType: "YulIdentifier",
                                      src: "11772:3:2"
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "11772:18:2"
                                  },
                                  variableNames: [
                                    {
                                      name: "srcOffset",
                                      nodeType: "YulIdentifier",
                                      src: "11759:9:2"
                                    }
                                  ]
                                }
                              ]
                            },
                            condition: {
                              arguments: [
                                {
                                  name: "i",
                                  nodeType: "YulIdentifier",
                                  src: "11607:1:2"
                                },
                                {
                                  name: "loopEnd",
                                  nodeType: "YulIdentifier",
                                  src: "11610:7:2"
                                }
                              ],
                              functionName: {
                                name: "lt",
                                nodeType: "YulIdentifier",
                                src: "11604:2:2"
                              },
                              nodeType: "YulFunctionCall",
                              src: "11604:14:2"
                            },
                            nodeType: "YulForLoop",
                            post: {
                              nodeType: "YulBlock",
                              src: "11619:21:2",
                              statements: [
                                {
                                  nodeType: "YulAssignment",
                                  src: "11621:17:2",
                                  value: {
                                    arguments: [
                                      {
                                        name: "i",
                                        nodeType: "YulIdentifier",
                                        src: "11630:1:2"
                                      },
                                      {
                                        kind: "number",
                                        nodeType: "YulLiteral",
                                        src: "11633:4:2",
                                        type: "",
                                        value: "0x20"
                                      }
                                    ],
                                    functionName: {
                                      name: "add",
                                      nodeType: "YulIdentifier",
                                      src: "11626:3:2"
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "11626:12:2"
                                  },
                                  variableNames: [
                                    {
                                      name: "i",
                                      nodeType: "YulIdentifier",
                                      src: "11621:1:2"
                                    }
                                  ]
                                }
                              ]
                            },
                            pre: {
                              nodeType: "YulBlock",
                              src: "11600:3:2",
                              statements: []
                            },
                            src: "11596:208:2"
                          },
                          {
                            body: {
                              nodeType: "YulBlock",
                              src: "11840:156:2",
                              statements: [
                                {
                                  nodeType: "YulVariableDeclaration",
                                  src: "11858:43:2",
                                  value: {
                                    arguments: [
                                      {
                                        arguments: [
                                          {
                                            name: "src",
                                            nodeType: "YulIdentifier",
                                            src: "11885:3:2"
                                          },
                                          {
                                            name: "srcOffset",
                                            nodeType: "YulIdentifier",
                                            src: "11890:9:2"
                                          }
                                        ],
                                        functionName: {
                                          name: "add",
                                          nodeType: "YulIdentifier",
                                          src: "11881:3:2"
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "11881:19:2"
                                      }
                                    ],
                                    functionName: {
                                      name: "mload",
                                      nodeType: "YulIdentifier",
                                      src: "11875:5:2"
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "11875:26:2"
                                  },
                                  variables: [
                                    {
                                      name: "lastValue",
                                      nodeType: "YulTypedName",
                                      src: "11862:9:2",
                                      type: ""
                                    }
                                  ]
                                },
                                {
                                  expression: {
                                    arguments: [
                                      {
                                        name: "dstPtr",
                                        nodeType: "YulIdentifier",
                                        src: "11925:6:2"
                                      },
                                      {
                                        arguments: [
                                          {
                                            name: "lastValue",
                                            nodeType: "YulIdentifier",
                                            src: "11952:9:2"
                                          },
                                          {
                                            arguments: [
                                              {
                                                name: "newLen",
                                                nodeType: "YulIdentifier",
                                                src: "11967:6:2"
                                              },
                                              {
                                                kind: "number",
                                                nodeType: "YulLiteral",
                                                src: "11975:4:2",
                                                type: "",
                                                value: "0x1f"
                                              }
                                            ],
                                            functionName: {
                                              name: "and",
                                              nodeType: "YulIdentifier",
                                              src: "11963:3:2"
                                            },
                                            nodeType: "YulFunctionCall",
                                            src: "11963:17:2"
                                          }
                                        ],
                                        functionName: {
                                          name: "mask_bytes_dynamic",
                                          nodeType: "YulIdentifier",
                                          src: "11933:18:2"
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "11933:48:2"
                                      }
                                    ],
                                    functionName: {
                                      name: "sstore",
                                      nodeType: "YulIdentifier",
                                      src: "11918:6:2"
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "11918:64:2"
                                  },
                                  nodeType: "YulExpressionStatement",
                                  src: "11918:64:2"
                                }
                              ]
                            },
                            condition: {
                              arguments: [
                                {
                                  name: "loopEnd",
                                  nodeType: "YulIdentifier",
                                  src: "11823:7:2"
                                },
                                {
                                  name: "newLen",
                                  nodeType: "YulIdentifier",
                                  src: "11832:6:2"
                                }
                              ],
                              functionName: {
                                name: "lt",
                                nodeType: "YulIdentifier",
                                src: "11820:2:2"
                              },
                              nodeType: "YulFunctionCall",
                              src: "11820:19:2"
                            },
                            nodeType: "YulIf",
                            src: "11817:179:2"
                          },
                          {
                            expression: {
                              arguments: [
                                {
                                  name: "slot",
                                  nodeType: "YulIdentifier",
                                  src: "12016:4:2"
                                },
                                {
                                  arguments: [
                                    {
                                      arguments: [
                                        {
                                          name: "newLen",
                                          nodeType: "YulIdentifier",
                                          src: "12030:6:2"
                                        },
                                        {
                                          kind: "number",
                                          nodeType: "YulLiteral",
                                          src: "12038:1:2",
                                          type: "",
                                          value: "2"
                                        }
                                      ],
                                      functionName: {
                                        name: "mul",
                                        nodeType: "YulIdentifier",
                                        src: "12026:3:2"
                                      },
                                      nodeType: "YulFunctionCall",
                                      src: "12026:14:2"
                                    },
                                    {
                                      kind: "number",
                                      nodeType: "YulLiteral",
                                      src: "12042:1:2",
                                      type: "",
                                      value: "1"
                                    }
                                  ],
                                  functionName: {
                                    name: "add",
                                    nodeType: "YulIdentifier",
                                    src: "12022:3:2"
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "12022:22:2"
                                }
                              ],
                              functionName: {
                                name: "sstore",
                                nodeType: "YulIdentifier",
                                src: "12009:6:2"
                              },
                              nodeType: "YulFunctionCall",
                              src: "12009:36:2"
                            },
                            nodeType: "YulExpressionStatement",
                            src: "12009:36:2"
                          }
                        ]
                      },
                      nodeType: "YulCase",
                      src: "11437:618:2",
                      value: {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "11442:1:2",
                        type: "",
                        value: "1"
                      }
                    },
                    {
                      body: {
                        nodeType: "YulBlock",
                        src: "12072:222:2",
                        statements: [
                          {
                            nodeType: "YulVariableDeclaration",
                            src: "12086:14:2",
                            value: {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "12099:1:2",
                              type: "",
                              value: "0"
                            },
                            variables: [
                              {
                                name: "value",
                                nodeType: "YulTypedName",
                                src: "12090:5:2",
                                type: ""
                              }
                            ]
                          },
                          {
                            body: {
                              nodeType: "YulBlock",
                              src: "12123:67:2",
                              statements: [
                                {
                                  nodeType: "YulAssignment",
                                  src: "12141:35:2",
                                  value: {
                                    arguments: [
                                      {
                                        arguments: [
                                          {
                                            name: "src",
                                            nodeType: "YulIdentifier",
                                            src: "12160:3:2"
                                          },
                                          {
                                            name: "srcOffset",
                                            nodeType: "YulIdentifier",
                                            src: "12165:9:2"
                                          }
                                        ],
                                        functionName: {
                                          name: "add",
                                          nodeType: "YulIdentifier",
                                          src: "12156:3:2"
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "12156:19:2"
                                      }
                                    ],
                                    functionName: {
                                      name: "mload",
                                      nodeType: "YulIdentifier",
                                      src: "12150:5:2"
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "12150:26:2"
                                  },
                                  variableNames: [
                                    {
                                      name: "value",
                                      nodeType: "YulIdentifier",
                                      src: "12141:5:2"
                                    }
                                  ]
                                }
                              ]
                            },
                            condition: {
                              name: "newLen",
                              nodeType: "YulIdentifier",
                              src: "12116:6:2"
                            },
                            nodeType: "YulIf",
                            src: "12113:77:2"
                          },
                          {
                            expression: {
                              arguments: [
                                {
                                  name: "slot",
                                  nodeType: "YulIdentifier",
                                  src: "12210:4:2"
                                },
                                {
                                  arguments: [
                                    {
                                      name: "value",
                                      nodeType: "YulIdentifier",
                                      src: "12269:5:2"
                                    },
                                    {
                                      name: "newLen",
                                      nodeType: "YulIdentifier",
                                      src: "12276:6:2"
                                    }
                                  ],
                                  functionName: {
                                    name: "extract_used_part_and_set_length_of_short_byte_array",
                                    nodeType: "YulIdentifier",
                                    src: "12216:52:2"
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "12216:67:2"
                                }
                              ],
                              functionName: {
                                name: "sstore",
                                nodeType: "YulIdentifier",
                                src: "12203:6:2"
                              },
                              nodeType: "YulFunctionCall",
                              src: "12203:81:2"
                            },
                            nodeType: "YulExpressionStatement",
                            src: "12203:81:2"
                          }
                        ]
                      },
                      nodeType: "YulCase",
                      src: "12064:230:2",
                      value: "default"
                    }
                  ],
                  expression: {
                    arguments: [
                      {
                        name: "newLen",
                        nodeType: "YulIdentifier",
                        src: "11417:6:2"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "11425:2:2",
                        type: "",
                        value: "31"
                      }
                    ],
                    functionName: {
                      name: "gt",
                      nodeType: "YulIdentifier",
                      src: "11414:2:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "11414:14:2"
                  },
                  nodeType: "YulSwitch",
                  src: "11407:887:2"
                }
              ]
            },
            name: "copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "slot",
                nodeType: "YulTypedName",
                src: "10986:4:2",
                type: ""
              },
              {
                name: "src",
                nodeType: "YulTypedName",
                src: "10992:3:2",
                type: ""
              }
            ],
            src: "10905:1395:2"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "12412:71:2",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "memPtr",
                            nodeType: "YulIdentifier",
                            src: "12434:6:2"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "12442:1:2",
                            type: "",
                            value: "0"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "12430:3:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "12430:14:2"
                      },
                      {
                        hexValue: "50617469656e7420696e646578206f7574206f6620626f756e6473",
                        kind: "string",
                        nodeType: "YulLiteral",
                        src: "12446:29:2",
                        type: "",
                        value: "Patient index out of bounds"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "12423:6:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "12423:53:2"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "12423:53:2"
                }
              ]
            },
            name: "store_literal_in_memory_758df732154dc3bda8b190bf9ec527899233bbfd7b24556d145bb93f25cd2906",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "memPtr",
                nodeType: "YulTypedName",
                src: "12404:6:2",
                type: ""
              }
            ],
            src: "12306:177:2"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "12635:220:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "12645:74:2",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "12711:3:2"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "12716:2:2",
                        type: "",
                        value: "27"
                      }
                    ],
                    functionName: {
                      name: "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "12652:58:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "12652:67:2"
                  },
                  variableNames: [
                    {
                      name: "pos",
                      nodeType: "YulIdentifier",
                      src: "12645:3:2"
                    }
                  ]
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "12817:3:2"
                      }
                    ],
                    functionName: {
                      name: "store_literal_in_memory_758df732154dc3bda8b190bf9ec527899233bbfd7b24556d145bb93f25cd2906",
                      nodeType: "YulIdentifier",
                      src: "12728:88:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "12728:93:2"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "12728:93:2"
                },
                {
                  nodeType: "YulAssignment",
                  src: "12830:19:2",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "12841:3:2"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "12846:2:2",
                        type: "",
                        value: "32"
                      }
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "12837:3:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "12837:12:2"
                  },
                  variableNames: [
                    {
                      name: "end",
                      nodeType: "YulIdentifier",
                      src: "12830:3:2"
                    }
                  ]
                }
              ]
            },
            name: "abi_encode_t_stringliteral_758df732154dc3bda8b190bf9ec527899233bbfd7b24556d145bb93f25cd2906_to_t_string_memory_ptr_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "12623:3:2",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "12631:3:2",
                type: ""
              }
            ],
            src: "12489:366:2"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "13032:248:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "13042:26:2",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "13054:9:2"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "13065:2:2",
                        type: "",
                        value: "32"
                      }
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "13050:3:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "13050:18:2"
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "13042:4:2"
                    }
                  ]
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "13089:9:2"
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "13100:1:2",
                            type: "",
                            value: "0"
                          }
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "13085:3:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "13085:17:2"
                      },
                      {
                        arguments: [
                          {
                            name: "tail",
                            nodeType: "YulIdentifier",
                            src: "13108:4:2"
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "13114:9:2"
                          }
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "13104:3:2"
                        },
                        nodeType: "YulFunctionCall",
                        src: "13104:20:2"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "13078:6:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "13078:47:2"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "13078:47:2"
                },
                {
                  nodeType: "YulAssignment",
                  src: "13134:139:2",
                  value: {
                    arguments: [
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "13268:4:2"
                      }
                    ],
                    functionName: {
                      name: "abi_encode_t_stringliteral_758df732154dc3bda8b190bf9ec527899233bbfd7b24556d145bb93f25cd2906_to_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "13142:124:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "13142:131:2"
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "13134:4:2"
                    }
                  ]
                }
              ]
            },
            name: "abi_encode_tuple_t_stringliteral_758df732154dc3bda8b190bf9ec527899233bbfd7b24556d145bb93f25cd2906__to_t_string_memory_ptr__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "13012:9:2",
                type: ""
              }
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "13027:4:2",
                type: ""
              }
            ],
            src: "12861:419:2"
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "13314:152:2",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "13331:1:2",
                        type: "",
                        value: "0"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "13334:77:2",
                        type: "",
                        value: "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "13324:6:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "13324:88:2"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "13324:88:2"
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "13428:1:2",
                        type: "",
                        value: "4"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "13431:4:2",
                        type: "",
                        value: "0x32"
                      }
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "13421:6:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "13421:15:2"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "13421:15:2"
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "13452:1:2",
                        type: "",
                        value: "0"
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "13455:4:2",
                        type: "",
                        value: "0x24"
                      }
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "13445:6:2"
                    },
                    nodeType: "YulFunctionCall",
                    src: "13445:15:2"
                  },
                  nodeType: "YulExpressionStatement",
                  src: "13445:15:2"
                }
              ]
            },
            name: "panic_error_0x32",
            nodeType: "YulFunctionDefinition",
            src: "13286:180:2"
          }
        ]
      },
      contents: `{

    function allocate_unbounded() -> memPtr {
        memPtr := mload(64)
    }

    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {
        revert(0, 0)
    }

    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {
        revert(0, 0)
    }

    function revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() {
        revert(0, 0)
    }

    function revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() {
        revert(0, 0)
    }

    function round_up_to_mul_of_32(value) -> result {
        result := and(add(value, 31), not(31))
    }

    function panic_error_0x41() {
        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)
        mstore(4, 0x41)
        revert(0, 0x24)
    }

    function finalize_allocation(memPtr, size) {
        let newFreePtr := add(memPtr, round_up_to_mul_of_32(size))
        // protect against overflow
        if or(gt(newFreePtr, 0xffffffffffffffff), lt(newFreePtr, memPtr)) { panic_error_0x41() }
        mstore(64, newFreePtr)
    }

    function allocate_memory(size) -> memPtr {
        memPtr := allocate_unbounded()
        finalize_allocation(memPtr, size)
    }

    function array_allocation_size_t_string_memory_ptr(length) -> size {
        // Make sure we can allocate memory without overflow
        if gt(length, 0xffffffffffffffff) { panic_error_0x41() }

        size := round_up_to_mul_of_32(length)

        // add length slot
        size := add(size, 0x20)

    }

    function copy_calldata_to_memory_with_cleanup(src, dst, length) {
        calldatacopy(dst, src, length)
        mstore(add(dst, length), 0)
    }

    function abi_decode_available_length_t_string_memory_ptr(src, length, end) -> array {
        array := allocate_memory(array_allocation_size_t_string_memory_ptr(length))
        mstore(array, length)
        let dst := add(array, 0x20)
        if gt(add(src, length), end) { revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() }
        copy_calldata_to_memory_with_cleanup(src, dst, length)
    }

    // string
    function abi_decode_t_string_memory_ptr(offset, end) -> array {
        if iszero(slt(add(offset, 0x1f), end)) { revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() }
        let length := calldataload(offset)
        array := abi_decode_available_length_t_string_memory_ptr(add(offset, 0x20), length, end)
    }

    function abi_decode_tuple_t_string_memory_ptrt_string_memory_ptrt_string_memory_ptrt_string_memory_ptrt_string_memory_ptr(headStart, dataEnd) -> value0, value1, value2, value3, value4 {
        if slt(sub(dataEnd, headStart), 160) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }

        {

            let offset := calldataload(add(headStart, 0))
            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }

            value0 := abi_decode_t_string_memory_ptr(add(headStart, offset), dataEnd)
        }

        {

            let offset := calldataload(add(headStart, 32))
            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }

            value1 := abi_decode_t_string_memory_ptr(add(headStart, offset), dataEnd)
        }

        {

            let offset := calldataload(add(headStart, 64))
            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }

            value2 := abi_decode_t_string_memory_ptr(add(headStart, offset), dataEnd)
        }

        {

            let offset := calldataload(add(headStart, 96))
            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }

            value3 := abi_decode_t_string_memory_ptr(add(headStart, offset), dataEnd)
        }

        {

            let offset := calldataload(add(headStart, 128))
            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }

            value4 := abi_decode_t_string_memory_ptr(add(headStart, offset), dataEnd)
        }

    }

    function cleanup_t_uint256(value) -> cleaned {
        cleaned := value
    }

    function validator_revert_t_uint256(value) {
        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }
    }

    function abi_decode_t_uint256(offset, end) -> value {
        value := calldataload(offset)
        validator_revert_t_uint256(value)
    }

    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0 {
        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }

        {

            let offset := 0

            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)
        }

    }

    function array_length_t_string_memory_ptr(value) -> length {

        length := mload(value)

    }

    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {
        mstore(pos, length)
        updated_pos := add(pos, 0x20)
    }

    function copy_memory_to_memory_with_cleanup(src, dst, length) {
        let i := 0
        for { } lt(i, length) { i := add(i, 32) }
        {
            mstore(add(dst, i), mload(add(src, i)))
        }
        mstore(add(dst, length), 0)
    }

    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value, pos) -> end {
        let length := array_length_t_string_memory_ptr(value)
        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length)
        copy_memory_to_memory_with_cleanup(add(value, 0x20), pos, length)
        end := add(pos, round_up_to_mul_of_32(length))
    }

    function abi_encode_tuple_t_string_memory_ptr_t_string_memory_ptr_t_string_memory_ptr_t_string_memory_ptr_t_string_memory_ptr__to_t_string_memory_ptr_t_string_memory_ptr_t_string_memory_ptr_t_string_memory_ptr_t_string_memory_ptr__fromStack_reversed(headStart , value4, value3, value2, value1, value0) -> tail {
        tail := add(headStart, 160)

        mstore(add(headStart, 0), sub(tail, headStart))
        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value0,  tail)

        mstore(add(headStart, 32), sub(tail, headStart))
        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value1,  tail)

        mstore(add(headStart, 64), sub(tail, headStart))
        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value2,  tail)

        mstore(add(headStart, 96), sub(tail, headStart))
        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value3,  tail)

        mstore(add(headStart, 128), sub(tail, headStart))
        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value4,  tail)

    }

    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {
        mstore(pos, cleanup_t_uint256(value))
    }

    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {
        tail := add(headStart, 32)

        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))

    }

    function panic_error_0x22() {
        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)
        mstore(4, 0x22)
        revert(0, 0x24)
    }

    function extract_byte_array_length(data) -> length {
        length := div(data, 2)
        let outOfPlaceEncoding := and(data, 1)
        if iszero(outOfPlaceEncoding) {
            length := and(length, 0x7f)
        }

        if eq(outOfPlaceEncoding, lt(length, 32)) {
            panic_error_0x22()
        }
    }

    function array_dataslot_t_string_storage(ptr) -> data {
        data := ptr

        mstore(0, ptr)
        data := keccak256(0, 0x20)

    }

    function divide_by_32_ceil(value) -> result {
        result := div(add(value, 31), 32)
    }

    function shift_left_dynamic(bits, value) -> newValue {
        newValue :=

        shl(bits, value)

    }

    function update_byte_slice_dynamic32(value, shiftBytes, toInsert) -> result {
        let shiftBits := mul(shiftBytes, 8)
        let mask := shift_left_dynamic(shiftBits, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)
        toInsert := shift_left_dynamic(shiftBits, toInsert)
        value := and(value, not(mask))
        result := or(value, and(toInsert, mask))
    }

    function identity(value) -> ret {
        ret := value
    }

    function convert_t_uint256_to_t_uint256(value) -> converted {
        converted := cleanup_t_uint256(identity(cleanup_t_uint256(value)))
    }

    function prepare_store_t_uint256(value) -> ret {
        ret := value
    }

    function update_storage_value_t_uint256_to_t_uint256(slot, offset, value_0) {
        let convertedValue_0 := convert_t_uint256_to_t_uint256(value_0)
        sstore(slot, update_byte_slice_dynamic32(sload(slot), offset, prepare_store_t_uint256(convertedValue_0)))
    }

    function zero_value_for_split_t_uint256() -> ret {
        ret := 0
    }

    function storage_set_to_zero_t_uint256(slot, offset) {
        let zero_0 := zero_value_for_split_t_uint256()
        update_storage_value_t_uint256_to_t_uint256(slot, offset, zero_0)
    }

    function clear_storage_range_t_bytes1(start, end) {
        for {} lt(start, end) { start := add(start, 1) }
        {
            storage_set_to_zero_t_uint256(start, 0)
        }
    }

    function clean_up_bytearray_end_slots_t_string_storage(array, len, startIndex) {

        if gt(len, 31) {
            let dataArea := array_dataslot_t_string_storage(array)
            let deleteStart := add(dataArea, divide_by_32_ceil(startIndex))
            // If we are clearing array to be short byte array, we want to clear only data starting from array data area.
            if lt(startIndex, 32) { deleteStart := dataArea }
            clear_storage_range_t_bytes1(deleteStart, add(dataArea, divide_by_32_ceil(len)))
        }

    }

    function shift_right_unsigned_dynamic(bits, value) -> newValue {
        newValue :=

        shr(bits, value)

    }

    function mask_bytes_dynamic(data, bytes) -> result {
        let mask := not(shift_right_unsigned_dynamic(mul(8, bytes), not(0)))
        result := and(data, mask)
    }
    function extract_used_part_and_set_length_of_short_byte_array(data, len) -> used {
        // we want to save only elements that are part of the array after resizing
        // others should be set to zero
        data := mask_bytes_dynamic(data, len)
        used := or(data, mul(2, len))
    }
    function copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage(slot, src) {

        let newLen := array_length_t_string_memory_ptr(src)
        // Make sure array length is sane
        if gt(newLen, 0xffffffffffffffff) { panic_error_0x41() }

        let oldLen := extract_byte_array_length(sload(slot))

        // potentially truncate data
        clean_up_bytearray_end_slots_t_string_storage(slot, oldLen, newLen)

        let srcOffset := 0

        srcOffset := 0x20

        switch gt(newLen, 31)
        case 1 {
            let loopEnd := and(newLen, not(0x1f))

            let dstPtr := array_dataslot_t_string_storage(slot)
            let i := 0
            for { } lt(i, loopEnd) { i := add(i, 0x20) } {
                sstore(dstPtr, mload(add(src, srcOffset)))
                dstPtr := add(dstPtr, 1)
                srcOffset := add(srcOffset, 32)
            }
            if lt(loopEnd, newLen) {
                let lastValue := mload(add(src, srcOffset))
                sstore(dstPtr, mask_bytes_dynamic(lastValue, and(newLen, 0x1f)))
            }
            sstore(slot, add(mul(newLen, 2), 1))
        }
        default {
            let value := 0
            if newLen {
                value := mload(add(src, srcOffset))
            }
            sstore(slot, extract_used_part_and_set_length_of_short_byte_array(value, newLen))
        }
    }

    function store_literal_in_memory_758df732154dc3bda8b190bf9ec527899233bbfd7b24556d145bb93f25cd2906(memPtr) {

        mstore(add(memPtr, 0), "Patient index out of bounds")

    }

    function abi_encode_t_stringliteral_758df732154dc3bda8b190bf9ec527899233bbfd7b24556d145bb93f25cd2906_to_t_string_memory_ptr_fromStack(pos) -> end {
        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 27)
        store_literal_in_memory_758df732154dc3bda8b190bf9ec527899233bbfd7b24556d145bb93f25cd2906(pos)
        end := add(pos, 32)
    }

    function abi_encode_tuple_t_stringliteral_758df732154dc3bda8b190bf9ec527899233bbfd7b24556d145bb93f25cd2906__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {
        tail := add(headStart, 32)

        mstore(add(headStart, 0), sub(tail, headStart))
        tail := abi_encode_t_stringliteral_758df732154dc3bda8b190bf9ec527899233bbfd7b24556d145bb93f25cd2906_to_t_string_memory_ptr_fromStack( tail)

    }

    function panic_error_0x32() {
        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)
        mstore(4, 0x32)
        revert(0, 0x24)
    }

}
`,
      id: 2,
      language: "Yul",
      name: "#utility.yul"
    }
  ],
  sourceMap: "61:1655:0:-:0;;;;;;;;;;;;;;;;;;;",
  deployedSourceMap: "61:1655:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;638:490;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1335:378;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;;;;:::i;:::-;;;;;;;;343:25;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;;;;:::i;:::-;;;;;;;;1183:98;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;638:490;916:8;930:68;;;;;;;;938:10;930:68;;;;950:9;930:68;;;;961:14;930:68;;;;977:7;930:68;;;;986:11;930:68;;;916:83;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;:::i;:::-;;;;1044:76;1060:10;1072:9;1083:14;1099:7;1108:11;1044:76;;;;;;;;;;:::i;:::-;;;;;;;;638:490;;;;;:::o;1335:378::-;1391:13;1406;1421;1436;1451;1493:8;:15;;;;1485:5;:23;1477:63;;;;;;;;;;;;:::i;:::-;;;;;;;;;1551:22;1576:8;1585:5;1576:15;;;;;;;;:::i;:::-;;;;;;;;;;;;1551:40;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1610:7;:17;;;1629:7;:16;;;1647:7;:21;;;1670:7;:14;;;1686:7;:18;;;1602:103;;;;;;;;;;;1335:378;;;;;;;:::o;343:25::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1183:98::-;1231:7;1258:8;:15;;;;1251:22;;1183:98;:::o;7:75:2:-;40:6;73:2;67:9;57:19;;7:75;:::o;88:117::-;197:1;194;187:12;211:117;320:1;317;310:12;334:117;443:1;440;433:12;457:117;566:1;563;556:12;580:102;621:6;672:2;668:7;663:2;656:5;652:14;648:28;638:38;;580:102;;;:::o;688:180::-;736:77;733:1;726:88;833:4;830:1;823:15;857:4;854:1;847:15;874:281;957:27;979:4;957:27;:::i;:::-;949:6;945:40;1087:6;1075:10;1072:22;1051:18;1039:10;1036:34;1033:62;1030:88;;;1098:18;;:::i;:::-;1030:88;1138:10;1134:2;1127:22;917:238;874:281;;:::o;1161:129::-;1195:6;1222:20;;:::i;:::-;1212:30;;1251:33;1279:4;1271:6;1251:33;:::i;:::-;1161:129;;;:::o;1296:308::-;1358:4;1448:18;1440:6;1437:30;1434:56;;;1470:18;;:::i;:::-;1434:56;1508:29;1530:6;1508:29;:::i;:::-;1500:37;;1592:4;1586;1582:15;1574:23;;1296:308;;;:::o;1610:146::-;1707:6;1702:3;1697;1684:30;1748:1;1739:6;1734:3;1730:16;1723:27;1610:146;;;:::o;1762:425::-;1840:5;1865:66;1881:49;1923:6;1881:49;:::i;:::-;1865:66;:::i;:::-;1856:75;;1954:6;1947:5;1940:21;1992:4;1985:5;1981:16;2030:3;2021:6;2016:3;2012:16;2009:25;2006:112;;;2037:79;;:::i;:::-;2006:112;2127:54;2174:6;2169:3;2164;2127:54;:::i;:::-;1846:341;1762:425;;;;;:::o;2207:340::-;2263:5;2312:3;2305:4;2297:6;2293:17;2289:27;2279:122;;2320:79;;:::i;:::-;2279:122;2437:6;2424:20;2462:79;2537:3;2529:6;2522:4;2514:6;2510:17;2462:79;:::i;:::-;2453:88;;2269:278;2207:340;;;;:::o;2553:1811::-;2698:6;2706;2714;2722;2730;2779:3;2767:9;2758:7;2754:23;2750:33;2747:120;;;2786:79;;:::i;:::-;2747:120;2934:1;2923:9;2919:17;2906:31;2964:18;2956:6;2953:30;2950:117;;;2986:79;;:::i;:::-;2950:117;3091:63;3146:7;3137:6;3126:9;3122:22;3091:63;:::i;:::-;3081:73;;2877:287;3231:2;3220:9;3216:18;3203:32;3262:18;3254:6;3251:30;3248:117;;;3284:79;;:::i;:::-;3248:117;3389:63;3444:7;3435:6;3424:9;3420:22;3389:63;:::i;:::-;3379:73;;3174:288;3529:2;3518:9;3514:18;3501:32;3560:18;3552:6;3549:30;3546:117;;;3582:79;;:::i;:::-;3546:117;3687:63;3742:7;3733:6;3722:9;3718:22;3687:63;:::i;:::-;3677:73;;3472:288;3827:2;3816:9;3812:18;3799:32;3858:18;3850:6;3847:30;3844:117;;;3880:79;;:::i;:::-;3844:117;3985:63;4040:7;4031:6;4020:9;4016:22;3985:63;:::i;:::-;3975:73;;3770:288;4125:3;4114:9;4110:19;4097:33;4157:18;4149:6;4146:30;4143:117;;;4179:79;;:::i;:::-;4143:117;4284:63;4339:7;4330:6;4319:9;4315:22;4284:63;:::i;:::-;4274:73;;4068:289;2553:1811;;;;;;;;:::o;4370:77::-;4407:7;4436:5;4425:16;;4370:77;;;:::o;4453:122::-;4526:24;4544:5;4526:24;:::i;:::-;4519:5;4516:35;4506:63;;4565:1;4562;4555:12;4506:63;4453:122;:::o;4581:139::-;4627:5;4665:6;4652:20;4643:29;;4681:33;4708:5;4681:33;:::i;:::-;4581:139;;;;:::o;4726:329::-;4785:6;4834:2;4822:9;4813:7;4809:23;4805:32;4802:119;;;4840:79;;:::i;:::-;4802:119;4960:1;4985:53;5030:7;5021:6;5010:9;5006:22;4985:53;:::i;:::-;4975:63;;4931:117;4726:329;;;;:::o;5061:99::-;5113:6;5147:5;5141:12;5131:22;;5061:99;;;:::o;5166:169::-;5250:11;5284:6;5279:3;5272:19;5324:4;5319:3;5315:14;5300:29;;5166:169;;;;:::o;5341:246::-;5422:1;5432:113;5446:6;5443:1;5440:13;5432:113;;;5531:1;5526:3;5522:11;5516:18;5512:1;5507:3;5503:11;5496:39;5468:2;5465:1;5461:10;5456:15;;5432:113;;;5579:1;5570:6;5565:3;5561:16;5554:27;5403:184;5341:246;;;:::o;5593:377::-;5681:3;5709:39;5742:5;5709:39;:::i;:::-;5764:71;5828:6;5823:3;5764:71;:::i;:::-;5757:78;;5844:65;5902:6;5897:3;5890:4;5883:5;5879:16;5844:65;:::i;:::-;5934:29;5956:6;5934:29;:::i;:::-;5929:3;5925:39;5918:46;;5685:285;5593:377;;;;:::o;5976:1119::-;6281:4;6319:3;6308:9;6304:19;6296:27;;6369:9;6363:4;6359:20;6355:1;6344:9;6340:17;6333:47;6397:78;6470:4;6461:6;6397:78;:::i;:::-;6389:86;;6522:9;6516:4;6512:20;6507:2;6496:9;6492:18;6485:48;6550:78;6623:4;6614:6;6550:78;:::i;:::-;6542:86;;6675:9;6669:4;6665:20;6660:2;6649:9;6645:18;6638:48;6703:78;6776:4;6767:6;6703:78;:::i;:::-;6695:86;;6828:9;6822:4;6818:20;6813:2;6802:9;6798:18;6791:48;6856:78;6929:4;6920:6;6856:78;:::i;:::-;6848:86;;6982:9;6976:4;6972:20;6966:3;6955:9;6951:19;6944:49;7010:78;7083:4;7074:6;7010:78;:::i;:::-;7002:86;;5976:1119;;;;;;;;:::o;7101:118::-;7188:24;7206:5;7188:24;:::i;:::-;7183:3;7176:37;7101:118;;:::o;7225:222::-;7318:4;7356:2;7345:9;7341:18;7333:26;;7369:71;7437:1;7426:9;7422:17;7413:6;7369:71;:::i;:::-;7225:222;;;;:::o;7453:180::-;7501:77;7498:1;7491:88;7598:4;7595:1;7588:15;7622:4;7619:1;7612:15;7639:320;7683:6;7720:1;7714:4;7710:12;7700:22;;7767:1;7761:4;7757:12;7788:18;7778:81;;7844:4;7836:6;7832:17;7822:27;;7778:81;7906:2;7898:6;7895:14;7875:18;7872:38;7869:84;;7925:18;;:::i;:::-;7869:84;7690:269;7639:320;;;:::o;7965:141::-;8014:4;8037:3;8029:11;;8060:3;8057:1;8050:14;8094:4;8091:1;8081:18;8073:26;;7965:141;;;:::o;8112:93::-;8149:6;8196:2;8191;8184:5;8180:14;8176:23;8166:33;;8112:93;;;:::o;8211:107::-;8255:8;8305:5;8299:4;8295:16;8274:37;;8211:107;;;;:::o;8324:393::-;8393:6;8443:1;8431:10;8427:18;8466:97;8496:66;8485:9;8466:97;:::i;:::-;8584:39;8614:8;8603:9;8584:39;:::i;:::-;8572:51;;8656:4;8652:9;8645:5;8641:21;8632:30;;8705:4;8695:8;8691:19;8684:5;8681:30;8671:40;;8400:317;;8324:393;;;;;:::o;8723:60::-;8751:3;8772:5;8765:12;;8723:60;;;:::o;8789:142::-;8839:9;8872:53;8890:34;8899:24;8917:5;8899:24;:::i;:::-;8890:34;:::i;:::-;8872:53;:::i;:::-;8859:66;;8789:142;;;:::o;8937:75::-;8980:3;9001:5;8994:12;;8937:75;;;:::o;9018:269::-;9128:39;9159:7;9128:39;:::i;:::-;9189:91;9238:41;9262:16;9238:41;:::i;:::-;9230:6;9223:4;9217:11;9189:91;:::i;:::-;9183:4;9176:105;9094:193;9018:269;;;:::o;9293:73::-;9338:3;9293:73;:::o;9372:189::-;9449:32;;:::i;:::-;9490:65;9548:6;9540;9534:4;9490:65;:::i;:::-;9425:136;9372:189;;:::o;9567:186::-;9627:120;9644:3;9637:5;9634:14;9627:120;;;9698:39;9735:1;9728:5;9698:39;:::i;:::-;9671:1;9664:5;9660:13;9651:22;;9627:120;;;9567:186;;:::o;9759:543::-;9860:2;9855:3;9852:11;9849:446;;;9894:38;9926:5;9894:38;:::i;:::-;9978:29;9996:10;9978:29;:::i;:::-;9968:8;9964:44;10161:2;10149:10;10146:18;10143:49;;;10182:8;10167:23;;10143:49;10205:80;10261:22;10279:3;10261:22;:::i;:::-;10251:8;10247:37;10234:11;10205:80;:::i;:::-;9864:431;;9849:446;9759:543;;;:::o;10308:117::-;10362:8;10412:5;10406:4;10402:16;10381:37;;10308:117;;;;:::o;10431:169::-;10475:6;10508:51;10556:1;10552:6;10544:5;10541:1;10537:13;10508:51;:::i;:::-;10504:56;10589:4;10583;10579:15;10569:25;;10482:118;10431:169;;;;:::o;10605:295::-;10681:4;10827:29;10852:3;10846:4;10827:29;:::i;:::-;10819:37;;10889:3;10886:1;10882:11;10876:4;10873:21;10865:29;;10605:295;;;;:::o;10905:1395::-;11022:37;11055:3;11022:37;:::i;:::-;11124:18;11116:6;11113:30;11110:56;;;11146:18;;:::i;:::-;11110:56;11190:38;11222:4;11216:11;11190:38;:::i;:::-;11275:67;11335:6;11327;11321:4;11275:67;:::i;:::-;11369:1;11393:4;11380:17;;11425:2;11417:6;11414:14;11442:1;11437:618;;;;12099:1;12116:6;12113:77;;;12165:9;12160:3;12156:19;12150:26;12141:35;;12113:77;12216:67;12276:6;12269:5;12216:67;:::i;:::-;12210:4;12203:81;12072:222;11407:887;;11437:618;11489:4;11485:9;11477:6;11473:22;11523:37;11555:4;11523:37;:::i;:::-;11582:1;11596:208;11610:7;11607:1;11604:14;11596:208;;;11689:9;11684:3;11680:19;11674:26;11666:6;11659:42;11740:1;11732:6;11728:14;11718:24;;11787:2;11776:9;11772:18;11759:31;;11633:4;11630:1;11626:12;11621:17;;11596:208;;;11832:6;11823:7;11820:19;11817:179;;;11890:9;11885:3;11881:19;11875:26;11933:48;11975:4;11967:6;11963:17;11952:9;11933:48;:::i;:::-;11925:6;11918:64;11840:156;11817:179;12042:1;12038;12030:6;12026:14;12022:22;12016:4;12009:36;11444:611;;;11407:887;;10997:1303;;;10905:1395;;:::o;12306:177::-;12446:29;12442:1;12434:6;12430:14;12423:53;12306:177;:::o;12489:366::-;12631:3;12652:67;12716:2;12711:3;12652:67;:::i;:::-;12645:74;;12728:93;12817:3;12728:93;:::i;:::-;12846:2;12841:3;12837:12;12830:19;;12489:366;;;:::o;12861:419::-;13027:4;13065:2;13054:9;13050:18;13042:26;;13114:9;13108:4;13104:20;13100:1;13089:9;13085:17;13078:47;13142:131;13268:4;13142:131;:::i;:::-;13134:139;;12861:419;;;:::o;13286:180::-;13334:77;13331:1;13324:88;13431:4;13428:1;13421:15;13455:4;13452:1;13445:15",
  source: `// SPDX-License-Identifier: MIT\r
pragma solidity ^0.8.19;\r
\r
contract CancerPatientData {\r
    // Define a struct to hold patient data\r
    struct Patient {\r
        string firstName;\r
        string lastName;\r
        string contactNumber;\r
        string gender;\r
        string cancerType;\r
    }\r
\r
    // Array to store all patients\r
    Patient[] public patients;\r
\r
    // Event to emit when a new patient is added\r
    event NewPatientAdded(\r
        string firstName,\r
        string lastName,\r
        string contactNumber,\r
        string gender,\r
        string cancerType\r
    );\r
\r
    // Function to add a new patient\r
    function addPatient(\r
        string memory _firstName,\r
        string memory _lastName,\r
        string memory _contactNumber,\r
        string memory _gender,\r
        string memory _cancerType\r
    ) public {\r
        // Create a new patient and add it to the array\r
        patients.push(Patient(_firstName, _lastName, _contactNumber, _gender, _cancerType));\r
\r
        // Emit the event\r
        emit NewPatientAdded(_firstName, _lastName, _contactNumber, _gender, _cancerType);\r
    }\r
\r
    // Function to get the number of patients\r
    function getPatientCount() public view returns (uint256) {\r
        return patients.length;\r
    }\r
\r
    // Function to get patient data by index\r
    function getPatient(uint256 index) public view returns (string memory, string memory, string memory, string memory, string memory) {\r
        require(index < patients.length, "Patient index out of bounds");\r
        Patient memory patient = patients[index];\r
        return (patient.firstName, patient.lastName, patient.contactNumber, patient.gender, patient.cancerType);\r
    }\r
}\r
`,
  sourcePath: "C:\\blockchain\\Ethereum\\Cancer_Patient_Data_Management\\contracts\\CancerPatientData.sol",
  ast: {
    absolutePath: "project:/contracts/CancerPatientData.sol",
    exportedSymbols: {
      CancerPatientData: [
        115
      ]
    },
    id: 116,
    license: "MIT",
    nodeType: "SourceUnit",
    nodes: [
      {
        id: 1,
        literals: [
          "solidity",
          "^",
          "0.8",
          ".19"
        ],
        nodeType: "PragmaDirective",
        src: "33:24:0"
      },
      {
        abstract: !1,
        baseContracts: [],
        canonicalName: "CancerPatientData",
        contractDependencies: [],
        contractKind: "contract",
        fullyImplemented: !0,
        id: 115,
        linearizedBaseContracts: [
          115
        ],
        name: "CancerPatientData",
        nameLocation: "70:17:0",
        nodeType: "ContractDefinition",
        nodes: [
          {
            canonicalName: "CancerPatientData.Patient",
            id: 12,
            members: [
              {
                constant: !1,
                id: 3,
                mutability: "mutable",
                name: "firstName",
                nameLocation: "173:9:0",
                nodeType: "VariableDeclaration",
                scope: 12,
                src: "166:16:0",
                stateVariable: !1,
                storageLocation: "default",
                typeDescriptions: {
                  typeIdentifier: "t_string_storage_ptr",
                  typeString: "string"
                },
                typeName: {
                  id: 2,
                  name: "string",
                  nodeType: "ElementaryTypeName",
                  src: "166:6:0",
                  typeDescriptions: {
                    typeIdentifier: "t_string_storage_ptr",
                    typeString: "string"
                  }
                },
                visibility: "internal"
              },
              {
                constant: !1,
                id: 5,
                mutability: "mutable",
                name: "lastName",
                nameLocation: "200:8:0",
                nodeType: "VariableDeclaration",
                scope: 12,
                src: "193:15:0",
                stateVariable: !1,
                storageLocation: "default",
                typeDescriptions: {
                  typeIdentifier: "t_string_storage_ptr",
                  typeString: "string"
                },
                typeName: {
                  id: 4,
                  name: "string",
                  nodeType: "ElementaryTypeName",
                  src: "193:6:0",
                  typeDescriptions: {
                    typeIdentifier: "t_string_storage_ptr",
                    typeString: "string"
                  }
                },
                visibility: "internal"
              },
              {
                constant: !1,
                id: 7,
                mutability: "mutable",
                name: "contactNumber",
                nameLocation: "226:13:0",
                nodeType: "VariableDeclaration",
                scope: 12,
                src: "219:20:0",
                stateVariable: !1,
                storageLocation: "default",
                typeDescriptions: {
                  typeIdentifier: "t_string_storage_ptr",
                  typeString: "string"
                },
                typeName: {
                  id: 6,
                  name: "string",
                  nodeType: "ElementaryTypeName",
                  src: "219:6:0",
                  typeDescriptions: {
                    typeIdentifier: "t_string_storage_ptr",
                    typeString: "string"
                  }
                },
                visibility: "internal"
              },
              {
                constant: !1,
                id: 9,
                mutability: "mutable",
                name: "gender",
                nameLocation: "257:6:0",
                nodeType: "VariableDeclaration",
                scope: 12,
                src: "250:13:0",
                stateVariable: !1,
                storageLocation: "default",
                typeDescriptions: {
                  typeIdentifier: "t_string_storage_ptr",
                  typeString: "string"
                },
                typeName: {
                  id: 8,
                  name: "string",
                  nodeType: "ElementaryTypeName",
                  src: "250:6:0",
                  typeDescriptions: {
                    typeIdentifier: "t_string_storage_ptr",
                    typeString: "string"
                  }
                },
                visibility: "internal"
              },
              {
                constant: !1,
                id: 11,
                mutability: "mutable",
                name: "cancerType",
                nameLocation: "281:10:0",
                nodeType: "VariableDeclaration",
                scope: 12,
                src: "274:17:0",
                stateVariable: !1,
                storageLocation: "default",
                typeDescriptions: {
                  typeIdentifier: "t_string_storage_ptr",
                  typeString: "string"
                },
                typeName: {
                  id: 10,
                  name: "string",
                  nodeType: "ElementaryTypeName",
                  src: "274:6:0",
                  typeDescriptions: {
                    typeIdentifier: "t_string_storage_ptr",
                    typeString: "string"
                  }
                },
                visibility: "internal"
              }
            ],
            name: "Patient",
            nameLocation: "147:7:0",
            nodeType: "StructDefinition",
            scope: 115,
            src: "140:159:0",
            visibility: "public"
          },
          {
            constant: !1,
            functionSelector: "93119a83",
            id: 16,
            mutability: "mutable",
            name: "patients",
            nameLocation: "360:8:0",
            nodeType: "VariableDeclaration",
            scope: 115,
            src: "343:25:0",
            stateVariable: !0,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier: "t_array$_t_struct$_Patient_$12_storage_$dyn_storage",
              typeString: "struct CancerPatientData.Patient[]"
            },
            typeName: {
              baseType: {
                id: 14,
                nodeType: "UserDefinedTypeName",
                pathNode: {
                  id: 13,
                  name: "Patient",
                  nameLocations: [
                    "343:7:0"
                  ],
                  nodeType: "IdentifierPath",
                  referencedDeclaration: 12,
                  src: "343:7:0"
                },
                referencedDeclaration: 12,
                src: "343:7:0",
                typeDescriptions: {
                  typeIdentifier: "t_struct$_Patient_$12_storage_ptr",
                  typeString: "struct CancerPatientData.Patient"
                }
              },
              id: 15,
              nodeType: "ArrayTypeName",
              src: "343:9:0",
              typeDescriptions: {
                typeIdentifier: "t_array$_t_struct$_Patient_$12_storage_$dyn_storage_ptr",
                typeString: "struct CancerPatientData.Patient[]"
              }
            },
            visibility: "public"
          },
          {
            anonymous: !1,
            eventSelector: "06e8e43f7b56d21341408aa5f70b229f8cae644e99627e5b40ff6231ef7e0a4a",
            id: 28,
            name: "NewPatientAdded",
            nameLocation: "433:15:0",
            nodeType: "EventDefinition",
            parameters: {
              id: 27,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: !1,
                  id: 18,
                  indexed: !1,
                  mutability: "mutable",
                  name: "firstName",
                  nameLocation: "466:9:0",
                  nodeType: "VariableDeclaration",
                  scope: 28,
                  src: "459:16:0",
                  stateVariable: !1,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string"
                  },
                  typeName: {
                    id: 17,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "459:6:0",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: !1,
                  id: 20,
                  indexed: !1,
                  mutability: "mutable",
                  name: "lastName",
                  nameLocation: "493:8:0",
                  nodeType: "VariableDeclaration",
                  scope: 28,
                  src: "486:15:0",
                  stateVariable: !1,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string"
                  },
                  typeName: {
                    id: 19,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "486:6:0",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: !1,
                  id: 22,
                  indexed: !1,
                  mutability: "mutable",
                  name: "contactNumber",
                  nameLocation: "519:13:0",
                  nodeType: "VariableDeclaration",
                  scope: 28,
                  src: "512:20:0",
                  stateVariable: !1,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string"
                  },
                  typeName: {
                    id: 21,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "512:6:0",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: !1,
                  id: 24,
                  indexed: !1,
                  mutability: "mutable",
                  name: "gender",
                  nameLocation: "550:6:0",
                  nodeType: "VariableDeclaration",
                  scope: 28,
                  src: "543:13:0",
                  stateVariable: !1,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string"
                  },
                  typeName: {
                    id: 23,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "543:6:0",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: !1,
                  id: 26,
                  indexed: !1,
                  mutability: "mutable",
                  name: "cancerType",
                  nameLocation: "574:10:0",
                  nodeType: "VariableDeclaration",
                  scope: 28,
                  src: "567:17:0",
                  stateVariable: !1,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string"
                  },
                  typeName: {
                    id: 25,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "567:6:0",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string"
                    }
                  },
                  visibility: "internal"
                }
              ],
              src: "448:143:0"
            },
            src: "427:165:0"
          },
          {
            body: {
              id: 61,
              nodeType: "Block",
              src: "848:280:0",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            id: 45,
                            name: "_firstName",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 30,
                            src: "938:10:0",
                            typeDescriptions: {
                              typeIdentifier: "t_string_memory_ptr",
                              typeString: "string memory"
                            }
                          },
                          {
                            id: 46,
                            name: "_lastName",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 32,
                            src: "950:9:0",
                            typeDescriptions: {
                              typeIdentifier: "t_string_memory_ptr",
                              typeString: "string memory"
                            }
                          },
                          {
                            id: 47,
                            name: "_contactNumber",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 34,
                            src: "961:14:0",
                            typeDescriptions: {
                              typeIdentifier: "t_string_memory_ptr",
                              typeString: "string memory"
                            }
                          },
                          {
                            id: 48,
                            name: "_gender",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 36,
                            src: "977:7:0",
                            typeDescriptions: {
                              typeIdentifier: "t_string_memory_ptr",
                              typeString: "string memory"
                            }
                          },
                          {
                            id: 49,
                            name: "_cancerType",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 38,
                            src: "986:11:0",
                            typeDescriptions: {
                              typeIdentifier: "t_string_memory_ptr",
                              typeString: "string memory"
                            }
                          }
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier: "t_string_memory_ptr",
                              typeString: "string memory"
                            },
                            {
                              typeIdentifier: "t_string_memory_ptr",
                              typeString: "string memory"
                            },
                            {
                              typeIdentifier: "t_string_memory_ptr",
                              typeString: "string memory"
                            },
                            {
                              typeIdentifier: "t_string_memory_ptr",
                              typeString: "string memory"
                            },
                            {
                              typeIdentifier: "t_string_memory_ptr",
                              typeString: "string memory"
                            }
                          ],
                          id: 44,
                          name: "Patient",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 12,
                          src: "930:7:0",
                          typeDescriptions: {
                            typeIdentifier: "t_type$_t_struct$_Patient_$12_storage_ptr_$",
                            typeString: "type(struct CancerPatientData.Patient storage pointer)"
                          }
                        },
                        id: 50,
                        isConstant: !1,
                        isLValue: !1,
                        isPure: !1,
                        kind: "structConstructorCall",
                        lValueRequested: !1,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "930:68:0",
                        tryCall: !1,
                        typeDescriptions: {
                          typeIdentifier: "t_struct$_Patient_$12_memory_ptr",
                          typeString: "struct CancerPatientData.Patient memory"
                        }
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_struct$_Patient_$12_memory_ptr",
                          typeString: "struct CancerPatientData.Patient memory"
                        }
                      ],
                      expression: {
                        id: 41,
                        name: "patients",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 16,
                        src: "916:8:0",
                        typeDescriptions: {
                          typeIdentifier: "t_array$_t_struct$_Patient_$12_storage_$dyn_storage",
                          typeString: "struct CancerPatientData.Patient storage ref[] storage ref"
                        }
                      },
                      id: 43,
                      isConstant: !1,
                      isLValue: !1,
                      isPure: !1,
                      lValueRequested: !1,
                      memberLocation: "925:4:0",
                      memberName: "push",
                      nodeType: "MemberAccess",
                      src: "916:13:0",
                      typeDescriptions: {
                        typeIdentifier: "t_function_arraypush_nonpayable$_t_array$_t_struct$_Patient_$12_storage_$dyn_storage_ptr_$_t_struct$_Patient_$12_storage_$returns$__$attached_to$_t_array$_t_struct$_Patient_$12_storage_$dyn_storage_ptr_$",
                        typeString: "function (struct CancerPatientData.Patient storage ref[] storage pointer,struct CancerPatientData.Patient storage ref)"
                      }
                    },
                    id: 51,
                    isConstant: !1,
                    isLValue: !1,
                    isPure: !1,
                    kind: "functionCall",
                    lValueRequested: !1,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "916:83:0",
                    tryCall: !1,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()"
                    }
                  },
                  id: 52,
                  nodeType: "ExpressionStatement",
                  src: "916:83:0"
                },
                {
                  eventCall: {
                    arguments: [
                      {
                        id: 54,
                        name: "_firstName",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 30,
                        src: "1060:10:0",
                        typeDescriptions: {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory"
                        }
                      },
                      {
                        id: 55,
                        name: "_lastName",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 32,
                        src: "1072:9:0",
                        typeDescriptions: {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory"
                        }
                      },
                      {
                        id: 56,
                        name: "_contactNumber",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 34,
                        src: "1083:14:0",
                        typeDescriptions: {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory"
                        }
                      },
                      {
                        id: 57,
                        name: "_gender",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 36,
                        src: "1099:7:0",
                        typeDescriptions: {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory"
                        }
                      },
                      {
                        id: 58,
                        name: "_cancerType",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 38,
                        src: "1108:11:0",
                        typeDescriptions: {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory"
                        }
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory"
                        },
                        {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory"
                        },
                        {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory"
                        },
                        {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory"
                        },
                        {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory"
                        }
                      ],
                      id: 53,
                      name: "NewPatientAdded",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 28,
                      src: "1044:15:0",
                      typeDescriptions: {
                        typeIdentifier: "t_function_event_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                        typeString: "function (string memory,string memory,string memory,string memory,string memory)"
                      }
                    },
                    id: 59,
                    isConstant: !1,
                    isLValue: !1,
                    isPure: !1,
                    kind: "functionCall",
                    lValueRequested: !1,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1044:76:0",
                    tryCall: !1,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()"
                    }
                  },
                  id: 60,
                  nodeType: "EmitStatement",
                  src: "1039:81:0"
                }
              ]
            },
            functionSelector: "56fa8217",
            id: 62,
            implemented: !0,
            kind: "function",
            modifiers: [],
            name: "addPatient",
            nameLocation: "647:10:0",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 39,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: !1,
                  id: 30,
                  mutability: "mutable",
                  name: "_firstName",
                  nameLocation: "682:10:0",
                  nodeType: "VariableDeclaration",
                  scope: 62,
                  src: "668:24:0",
                  stateVariable: !1,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string"
                  },
                  typeName: {
                    id: 29,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "668:6:0",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: !1,
                  id: 32,
                  mutability: "mutable",
                  name: "_lastName",
                  nameLocation: "717:9:0",
                  nodeType: "VariableDeclaration",
                  scope: 62,
                  src: "703:23:0",
                  stateVariable: !1,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string"
                  },
                  typeName: {
                    id: 31,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "703:6:0",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: !1,
                  id: 34,
                  mutability: "mutable",
                  name: "_contactNumber",
                  nameLocation: "751:14:0",
                  nodeType: "VariableDeclaration",
                  scope: 62,
                  src: "737:28:0",
                  stateVariable: !1,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string"
                  },
                  typeName: {
                    id: 33,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "737:6:0",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: !1,
                  id: 36,
                  mutability: "mutable",
                  name: "_gender",
                  nameLocation: "790:7:0",
                  nodeType: "VariableDeclaration",
                  scope: 62,
                  src: "776:21:0",
                  stateVariable: !1,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string"
                  },
                  typeName: {
                    id: 35,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "776:6:0",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: !1,
                  id: 38,
                  mutability: "mutable",
                  name: "_cancerType",
                  nameLocation: "822:11:0",
                  nodeType: "VariableDeclaration",
                  scope: 62,
                  src: "808:25:0",
                  stateVariable: !1,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string"
                  },
                  typeName: {
                    id: 37,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "808:6:0",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string"
                    }
                  },
                  visibility: "internal"
                }
              ],
              src: "657:183:0"
            },
            returnParameters: {
              id: 40,
              nodeType: "ParameterList",
              parameters: [],
              src: "848:0:0"
            },
            scope: 115,
            src: "638:490:0",
            stateMutability: "nonpayable",
            virtual: !1,
            visibility: "public"
          },
          {
            body: {
              id: 70,
              nodeType: "Block",
              src: "1240:41:0",
              statements: [
                {
                  expression: {
                    expression: {
                      id: 67,
                      name: "patients",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 16,
                      src: "1258:8:0",
                      typeDescriptions: {
                        typeIdentifier: "t_array$_t_struct$_Patient_$12_storage_$dyn_storage",
                        typeString: "struct CancerPatientData.Patient storage ref[] storage ref"
                      }
                    },
                    id: 68,
                    isConstant: !1,
                    isLValue: !1,
                    isPure: !1,
                    lValueRequested: !1,
                    memberLocation: "1267:6:0",
                    memberName: "length",
                    nodeType: "MemberAccess",
                    src: "1258:15:0",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256"
                    }
                  },
                  functionReturnParameters: 66,
                  id: 69,
                  nodeType: "Return",
                  src: "1251:22:0"
                }
              ]
            },
            functionSelector: "c190665b",
            id: 71,
            implemented: !0,
            kind: "function",
            modifiers: [],
            name: "getPatientCount",
            nameLocation: "1192:15:0",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 63,
              nodeType: "ParameterList",
              parameters: [],
              src: "1207:2:0"
            },
            returnParameters: {
              id: 66,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: !1,
                  id: 65,
                  mutability: "mutable",
                  name: "",
                  nameLocation: "-1:-1:-1",
                  nodeType: "VariableDeclaration",
                  scope: 71,
                  src: "1231:7:0",
                  stateVariable: !1,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256"
                  },
                  typeName: {
                    id: 64,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "1231:7:0",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256"
                    }
                  },
                  visibility: "internal"
                }
              ],
              src: "1230:9:0"
            },
            scope: 115,
            src: "1183:98:0",
            stateMutability: "view",
            virtual: !1,
            visibility: "public"
          },
          {
            body: {
              id: 113,
              nodeType: "Block",
              src: "1466:247:0",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        commonType: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256"
                        },
                        id: 90,
                        isConstant: !1,
                        isLValue: !1,
                        isPure: !1,
                        lValueRequested: !1,
                        leftExpression: {
                          id: 87,
                          name: "index",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 73,
                          src: "1485:5:0",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256"
                          }
                        },
                        nodeType: "BinaryOperation",
                        operator: "<",
                        rightExpression: {
                          expression: {
                            id: 88,
                            name: "patients",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 16,
                            src: "1493:8:0",
                            typeDescriptions: {
                              typeIdentifier: "t_array$_t_struct$_Patient_$12_storage_$dyn_storage",
                              typeString: "struct CancerPatientData.Patient storage ref[] storage ref"
                            }
                          },
                          id: 89,
                          isConstant: !1,
                          isLValue: !1,
                          isPure: !1,
                          lValueRequested: !1,
                          memberLocation: "1502:6:0",
                          memberName: "length",
                          nodeType: "MemberAccess",
                          src: "1493:15:0",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256"
                          }
                        },
                        src: "1485:23:0",
                        typeDescriptions: {
                          typeIdentifier: "t_bool",
                          typeString: "bool"
                        }
                      },
                      {
                        hexValue: "50617469656e7420696e646578206f7574206f6620626f756e6473",
                        id: 91,
                        isConstant: !1,
                        isLValue: !1,
                        isPure: !0,
                        kind: "string",
                        lValueRequested: !1,
                        nodeType: "Literal",
                        src: "1510:29:0",
                        typeDescriptions: {
                          typeIdentifier: "t_stringliteral_758df732154dc3bda8b190bf9ec527899233bbfd7b24556d145bb93f25cd2906",
                          typeString: 'literal_string "Patient index out of bounds"'
                        },
                        value: "Patient index out of bounds"
                      }
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_bool",
                          typeString: "bool"
                        },
                        {
                          typeIdentifier: "t_stringliteral_758df732154dc3bda8b190bf9ec527899233bbfd7b24556d145bb93f25cd2906",
                          typeString: 'literal_string "Patient index out of bounds"'
                        }
                      ],
                      id: 86,
                      name: "require",
                      nodeType: "Identifier",
                      overloadedDeclarations: [
                        4294967278,
                        4294967278
                      ],
                      referencedDeclaration: 4294967278,
                      src: "1477:7:0",
                      typeDescriptions: {
                        typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        typeString: "function (bool,string memory) pure"
                      }
                    },
                    id: 92,
                    isConstant: !1,
                    isLValue: !1,
                    isPure: !1,
                    kind: "functionCall",
                    lValueRequested: !1,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1477:63:0",
                    tryCall: !1,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()"
                    }
                  },
                  id: 93,
                  nodeType: "ExpressionStatement",
                  src: "1477:63:0"
                },
                {
                  assignments: [
                    96
                  ],
                  declarations: [
                    {
                      constant: !1,
                      id: 96,
                      mutability: "mutable",
                      name: "patient",
                      nameLocation: "1566:7:0",
                      nodeType: "VariableDeclaration",
                      scope: 113,
                      src: "1551:22:0",
                      stateVariable: !1,
                      storageLocation: "memory",
                      typeDescriptions: {
                        typeIdentifier: "t_struct$_Patient_$12_memory_ptr",
                        typeString: "struct CancerPatientData.Patient"
                      },
                      typeName: {
                        id: 95,
                        nodeType: "UserDefinedTypeName",
                        pathNode: {
                          id: 94,
                          name: "Patient",
                          nameLocations: [
                            "1551:7:0"
                          ],
                          nodeType: "IdentifierPath",
                          referencedDeclaration: 12,
                          src: "1551:7:0"
                        },
                        referencedDeclaration: 12,
                        src: "1551:7:0",
                        typeDescriptions: {
                          typeIdentifier: "t_struct$_Patient_$12_storage_ptr",
                          typeString: "struct CancerPatientData.Patient"
                        }
                      },
                      visibility: "internal"
                    }
                  ],
                  id: 100,
                  initialValue: {
                    baseExpression: {
                      id: 97,
                      name: "patients",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 16,
                      src: "1576:8:0",
                      typeDescriptions: {
                        typeIdentifier: "t_array$_t_struct$_Patient_$12_storage_$dyn_storage",
                        typeString: "struct CancerPatientData.Patient storage ref[] storage ref"
                      }
                    },
                    id: 99,
                    indexExpression: {
                      id: 98,
                      name: "index",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 73,
                      src: "1585:5:0",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256"
                      }
                    },
                    isConstant: !1,
                    isLValue: !0,
                    isPure: !1,
                    lValueRequested: !1,
                    nodeType: "IndexAccess",
                    src: "1576:15:0",
                    typeDescriptions: {
                      typeIdentifier: "t_struct$_Patient_$12_storage",
                      typeString: "struct CancerPatientData.Patient storage ref"
                    }
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "1551:40:0"
                },
                {
                  expression: {
                    components: [
                      {
                        expression: {
                          id: 101,
                          name: "patient",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 96,
                          src: "1610:7:0",
                          typeDescriptions: {
                            typeIdentifier: "t_struct$_Patient_$12_memory_ptr",
                            typeString: "struct CancerPatientData.Patient memory"
                          }
                        },
                        id: 102,
                        isConstant: !1,
                        isLValue: !0,
                        isPure: !1,
                        lValueRequested: !1,
                        memberLocation: "1618:9:0",
                        memberName: "firstName",
                        nodeType: "MemberAccess",
                        referencedDeclaration: 3,
                        src: "1610:17:0",
                        typeDescriptions: {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory"
                        }
                      },
                      {
                        expression: {
                          id: 103,
                          name: "patient",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 96,
                          src: "1629:7:0",
                          typeDescriptions: {
                            typeIdentifier: "t_struct$_Patient_$12_memory_ptr",
                            typeString: "struct CancerPatientData.Patient memory"
                          }
                        },
                        id: 104,
                        isConstant: !1,
                        isLValue: !0,
                        isPure: !1,
                        lValueRequested: !1,
                        memberLocation: "1637:8:0",
                        memberName: "lastName",
                        nodeType: "MemberAccess",
                        referencedDeclaration: 5,
                        src: "1629:16:0",
                        typeDescriptions: {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory"
                        }
                      },
                      {
                        expression: {
                          id: 105,
                          name: "patient",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 96,
                          src: "1647:7:0",
                          typeDescriptions: {
                            typeIdentifier: "t_struct$_Patient_$12_memory_ptr",
                            typeString: "struct CancerPatientData.Patient memory"
                          }
                        },
                        id: 106,
                        isConstant: !1,
                        isLValue: !0,
                        isPure: !1,
                        lValueRequested: !1,
                        memberLocation: "1655:13:0",
                        memberName: "contactNumber",
                        nodeType: "MemberAccess",
                        referencedDeclaration: 7,
                        src: "1647:21:0",
                        typeDescriptions: {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory"
                        }
                      },
                      {
                        expression: {
                          id: 107,
                          name: "patient",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 96,
                          src: "1670:7:0",
                          typeDescriptions: {
                            typeIdentifier: "t_struct$_Patient_$12_memory_ptr",
                            typeString: "struct CancerPatientData.Patient memory"
                          }
                        },
                        id: 108,
                        isConstant: !1,
                        isLValue: !0,
                        isPure: !1,
                        lValueRequested: !1,
                        memberLocation: "1678:6:0",
                        memberName: "gender",
                        nodeType: "MemberAccess",
                        referencedDeclaration: 9,
                        src: "1670:14:0",
                        typeDescriptions: {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory"
                        }
                      },
                      {
                        expression: {
                          id: 109,
                          name: "patient",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 96,
                          src: "1686:7:0",
                          typeDescriptions: {
                            typeIdentifier: "t_struct$_Patient_$12_memory_ptr",
                            typeString: "struct CancerPatientData.Patient memory"
                          }
                        },
                        id: 110,
                        isConstant: !1,
                        isLValue: !0,
                        isPure: !1,
                        lValueRequested: !1,
                        memberLocation: "1694:10:0",
                        memberName: "cancerType",
                        nodeType: "MemberAccess",
                        referencedDeclaration: 11,
                        src: "1686:18:0",
                        typeDescriptions: {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory"
                        }
                      }
                    ],
                    id: 111,
                    isConstant: !1,
                    isInlineArray: !1,
                    isLValue: !1,
                    isPure: !1,
                    lValueRequested: !1,
                    nodeType: "TupleExpression",
                    src: "1609:96:0",
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_string_memory_ptr_$",
                      typeString: "tuple(string memory,string memory,string memory,string memory,string memory)"
                    }
                  },
                  functionReturnParameters: 85,
                  id: 112,
                  nodeType: "Return",
                  src: "1602:103:0"
                }
              ]
            },
            functionSelector: "7d3a6796",
            id: 114,
            implemented: !0,
            kind: "function",
            modifiers: [],
            name: "getPatient",
            nameLocation: "1344:10:0",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 74,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: !1,
                  id: 73,
                  mutability: "mutable",
                  name: "index",
                  nameLocation: "1363:5:0",
                  nodeType: "VariableDeclaration",
                  scope: 114,
                  src: "1355:13:0",
                  stateVariable: !1,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256"
                  },
                  typeName: {
                    id: 72,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "1355:7:0",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256"
                    }
                  },
                  visibility: "internal"
                }
              ],
              src: "1354:15:0"
            },
            returnParameters: {
              id: 85,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: !1,
                  id: 76,
                  mutability: "mutable",
                  name: "",
                  nameLocation: "-1:-1:-1",
                  nodeType: "VariableDeclaration",
                  scope: 114,
                  src: "1391:13:0",
                  stateVariable: !1,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string"
                  },
                  typeName: {
                    id: 75,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "1391:6:0",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: !1,
                  id: 78,
                  mutability: "mutable",
                  name: "",
                  nameLocation: "-1:-1:-1",
                  nodeType: "VariableDeclaration",
                  scope: 114,
                  src: "1406:13:0",
                  stateVariable: !1,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string"
                  },
                  typeName: {
                    id: 77,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "1406:6:0",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: !1,
                  id: 80,
                  mutability: "mutable",
                  name: "",
                  nameLocation: "-1:-1:-1",
                  nodeType: "VariableDeclaration",
                  scope: 114,
                  src: "1421:13:0",
                  stateVariable: !1,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string"
                  },
                  typeName: {
                    id: 79,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "1421:6:0",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: !1,
                  id: 82,
                  mutability: "mutable",
                  name: "",
                  nameLocation: "-1:-1:-1",
                  nodeType: "VariableDeclaration",
                  scope: 114,
                  src: "1436:13:0",
                  stateVariable: !1,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string"
                  },
                  typeName: {
                    id: 81,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "1436:6:0",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string"
                    }
                  },
                  visibility: "internal"
                },
                {
                  constant: !1,
                  id: 84,
                  mutability: "mutable",
                  name: "",
                  nameLocation: "-1:-1:-1",
                  nodeType: "VariableDeclaration",
                  scope: 114,
                  src: "1451:13:0",
                  stateVariable: !1,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string"
                  },
                  typeName: {
                    id: 83,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "1451:6:0",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string"
                    }
                  },
                  visibility: "internal"
                }
              ],
              src: "1390:75:0"
            },
            scope: 115,
            src: "1335:378:0",
            stateMutability: "view",
            virtual: !1,
            visibility: "public"
          }
        ],
        scope: 116,
        src: "61:1655:0",
        usedErrors: []
      }
    ],
    src: "33:1685:0"
  },
  compiler: {
    name: "solc",
    version: "0.8.19+commit.7dd6d404.Emscripten.clang"
  },
  networks: {
    "5777": {
      events: {},
      links: {},
      address: "0x44C0486F1DE22b12Fb21b2641fC94c11Aa531EFC",
      transactionHash: "0x6191636e074aa8fbf2b9afcaa1e05c842c091b4054d06bda3496311755703baf"
    },
    "11155111": {
      events: {},
      links: {},
      address: "0x0048e3E8d0B04A4b90756Eb7f3aFdb7431Fd5952",
      transactionHash: "0x732735a3e12581d797116b16a6a55c24707789f64f319291942643b5d0f7fbd9"
    }
  },
  schemaVersion: "3.4.16",
  updatedAt: "2024-10-17T13:23:35.465Z",
  networkType: "ethereum",
  devdoc: {
    kind: "dev",
    methods: {},
    version: 1
  },
  userdoc: {
    kind: "user",
    methods: {},
    version: 1
  }
};

// app/components/ui/card.tsx
import * as React4 from "react";
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
var Card = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV8(
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
var CardHeader = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV8(
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
var CardTitle = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV8(
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
var CardDescription = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV8(
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
var CardContent = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV8("div", { ref, className: cn("p-6 pt-0", className), ...props }, void 0, !1, {
  fileName: "app/components/ui/card.tsx",
  lineNumber: 63,
  columnNumber: 3
}, this));
CardContent.displayName = "CardContent";
var CardFooter = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV8(
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

// app/components/ui/avatar.tsx
import * as React5 from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
var Avatar = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV9(
  AvatarPrimitive.Root,
  {
    ref,
    className: cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/avatar.tsx",
    lineNumber: 10,
    columnNumber: 3
  },
  this
));
Avatar.displayName = AvatarPrimitive.Root.displayName;
var AvatarImage = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV9(
  AvatarPrimitive.Image,
  {
    ref,
    className: cn("aspect-square h-full w-full", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/avatar.tsx",
    lineNumber: 25,
    columnNumber: 3
  },
  this
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
var AvatarFallback = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV9(
  AvatarPrimitive.Fallback,
  {
    ref,
    className: cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/avatar.tsx",
    lineNumber: 37,
    columnNumber: 3
  },
  this
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

// app/routes/dashboard.tsx
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
function PatientDashboard() {
  let [patients, setPatients] = useState2([]), [web3, setWeb3] = useState2(null), [contract, setContract] = useState2(null);
  useEffect2(() => {
    if (typeof window < "u" && typeof window.ethereum < "u") {
      let web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);
      let contractInstance = new web3Instance.eth.Contract(
        CancerPatientData_default.abi,
        "0xdFfcA983d2293675714deaC2B55cc80F5b9846fb"
        // Replace with your contract's deployed address
      );
      setContract(contractInstance), fetchPatientData(contractInstance);
    } else
      console.error("Ethereum wallet is not available");
  }, []);
  let fetchPatientData = async (contractInstance) => {
    try {
      let patientCount = await contractInstance.methods.getPatientCount().call(), patientDataArray = [];
      for (let i = 0; i < patientCount; i++) {
        let data = await contractInstance.methods.getPatient(i).call();
        patientDataArray.push({
          firstName: data[0],
          lastName: data[1],
          contactNumber: data[2],
          gender: data[3],
          cancerType: data[4]
        });
      }
      setPatients(patientDataArray);
    } catch (err) {
      console.error("Error fetching patient data:", err);
    }
  };
  return /* @__PURE__ */ jsxDEV10("div", { className: "container mx-auto p-4 space-y-6", children: patients.map((patient, index) => /* @__PURE__ */ jsxDEV10(Card, { children: [
    /* @__PURE__ */ jsxDEV10(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: /* @__PURE__ */ jsxDEV10("div", { className: "flex items-center space-x-4", children: [
      /* @__PURE__ */ jsxDEV10(Avatar, { className: "h-20 w-20", children: [
        /* @__PURE__ */ jsxDEV10(AvatarImage, { alt: `${patient.firstName} ${patient.lastName}` }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 56,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ jsxDEV10(AvatarFallback, { children: [
          patient.firstName[0],
          patient.lastName[0]
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 57,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 55,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV10("div", { children: /* @__PURE__ */ jsxDEV10(CardTitle, { className: "text-2xl", children: [
        patient.firstName,
        " ",
        patient.lastName
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 60,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 59,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 54,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 53,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV10(CardContent, { children: /* @__PURE__ */ jsxDEV10("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxDEV10("div", { className: "flex items-center space-x-2 text-sm", children: /* @__PURE__ */ jsxDEV10("span", { children: [
        "Contact Number: ",
        patient.contactNumber
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 67,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 66,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV10("div", { className: "flex items-center space-x-2 text-sm", children: /* @__PURE__ */ jsxDEV10("span", { children: [
        "Gender: ",
        patient.gender
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 70,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 69,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ jsxDEV10("div", { className: "flex items-center space-x-2 text-sm", children: /* @__PURE__ */ jsxDEV10("span", { children: [
        "Cancer Type: ",
        patient.cancerType
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 73,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 72,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 65,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 64,
      columnNumber: 11
    }, this)
  ] }, index, !0, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 52,
    columnNumber: 9
  }, this)) }, void 0, !1, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 50,
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
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
function Hero() {
  return /* @__PURE__ */ jsxDEV11("section", { className: "w-full min-h-screen py-12 md:py-24 lg:py-32", children: /* @__PURE__ */ jsxDEV11("div", { className: "container px-4 md:px-6", children: /* @__PURE__ */ jsxDEV11("div", { className: "flex flex-col items-center justify-center space-y-4 text-center", children: [
    /* @__PURE__ */ jsxDEV11("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxDEV11("h1", { className: "text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none my-8", children: "OnchologyChain" }, void 0, !1, {
        fileName: "app/components/custom/Hero.tsx",
        lineNumber: 9,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV11("p", { className: "mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 pb-3", children: "Cancer Patient's Data Management System" }, void 0, !1, {
        fileName: "app/components/custom/Hero.tsx",
        lineNumber: 12,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/custom/Hero.tsx",
      lineNumber: 8,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV11("div", { className: "space-x-4", children: [
      /* @__PURE__ */ jsxDEV11(
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
      /* @__PURE__ */ jsxDEV11(
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
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
var meta = () => [
  { title: "OnchologyChain" },
  { name: "description", content: "Welcome to OnchologyChain!" }
];
function RootRoute() {
  return /* @__PURE__ */ jsxDEV12(Hero, {}, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 13,
    columnNumber: 10
  }, this);
}

// app/routes/fetch.tsx
var fetch_exports = {};
__export(fetch_exports, {
  default: () => fetch_default
});
import { useState as useState3, useEffect as useEffect3 } from "react";
import Web32 from "web3";
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
var PatientData = () => {
  let [web3, setWeb3] = useState3(null), [contract, setContract] = useState3(null), [account, setAccount] = useState3(""), [patientIndex, setPatientIndex] = useState3(0), [patientData, setPatientData] = useState3(null), [error, setError] = useState3(null);
  useEffect3(() => {
    loadWeb3(), loadBlockchainData();
  }, []);
  let loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web32(window.ethereum);
      try {
        await window.ethereum.enable();
      } catch {
        alert("User denied account access.");
      }
    } else
      alert("Non-Ethereum browser detected. You should consider trying MetaMask!");
  }, loadBlockchainData = async () => {
    let web32 = new Web32(window.ethereum), accounts = await web32.eth.getAccounts();
    if (accounts.length === 0) {
      alert("No accounts found. Please ensure your wallet is connected.");
      return;
    }
    setAccount(accounts[0]);
    let networkId = await web32.eth.net.getId(), networkData = CancerPatientData_default.networks[networkId];
    if (networkData) {
      let contractInstance = new web32.eth.Contract(
        CancerPatientData_default.abi,
        networkData.address
      );
      setContract(contractInstance);
    } else
      alert("The smart contract is not deployed to the current network");
  };
  return /* @__PURE__ */ jsxDEV13("div", { className: "patient-data", children: [
    /* @__PURE__ */ jsxDEV13("h1", { children: "Fetch Patient Data" }, void 0, !1, {
      fileName: "app/routes/fetch.tsx",
      lineNumber: 72,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV13(
      "input",
      {
        type: "number",
        value: patientIndex,
        onChange: (e) => setPatientIndex(Number(e.target.value)),
        placeholder: "Enter patient index"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/fetch.tsx",
        lineNumber: 73,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV13("button", { onClick: async () => {
      if (!contract) {
        setError("Contract is not initialized");
        return;
      }
      try {
        let data = await contract.methods.getPatient(patientIndex).call();
        setPatientData(data), setError(null);
      } catch (err) {
        console.error("Error fetching patient data:", err), setError("Error fetching patient data");
      }
    }, children: "Fetch Patient" }, void 0, !1, {
      fileName: "app/routes/fetch.tsx",
      lineNumber: 79,
      columnNumber: 7
    }, this),
    error && /* @__PURE__ */ jsxDEV13("p", { style: { color: "red" }, children: error }, void 0, !1, {
      fileName: "app/routes/fetch.tsx",
      lineNumber: 81,
      columnNumber: 17
    }, this),
    patientData && /* @__PURE__ */ jsxDEV13("div", { children: [
      /* @__PURE__ */ jsxDEV13("h2", { children: "Patient Details" }, void 0, !1, {
        fileName: "app/routes/fetch.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV13("p", { children: [
        "First Name: ",
        patientData[0]
      ] }, void 0, !0, {
        fileName: "app/routes/fetch.tsx",
        lineNumber: 86,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV13("p", { children: [
        "Last Name: ",
        patientData[1]
      ] }, void 0, !0, {
        fileName: "app/routes/fetch.tsx",
        lineNumber: 87,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV13("p", { children: [
        "Contact Number: ",
        patientData[2]
      ] }, void 0, !0, {
        fileName: "app/routes/fetch.tsx",
        lineNumber: 88,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV13("p", { children: [
        "Gender: ",
        patientData[3]
      ] }, void 0, !0, {
        fileName: "app/routes/fetch.tsx",
        lineNumber: 89,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV13("p", { children: [
        "Cancer Type: ",
        patientData[4]
      ] }, void 0, !0, {
        fileName: "app/routes/fetch.tsx",
        lineNumber: 90,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/fetch.tsx",
      lineNumber: 84,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/fetch.tsx",
    lineNumber: 71,
    columnNumber: 5
  }, this);
}, fetch_default = PatientData;

// app/routes/form.tsx
var form_exports = {};
__export(form_exports, {
  default: () => form_default
});
import { useState as useState4, useEffect as useEffect4 } from "react";
import Web33 from "web3";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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

// app/components/ui/button.tsx
import * as React7 from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva as cva3 } from "class-variance-authority";
import { jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
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
), Button = React7.forwardRef(
  ({ className, variant, size, asChild = !1, ...props }, ref) => /* @__PURE__ */ jsxDEV14(
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

// app/components/ui/input.tsx
import * as React8 from "react";
import { jsxDEV as jsxDEV15 } from "react/jsx-dev-runtime";
var Input = React8.forwardRef(
  ({ className, type, ...props }, ref) => /* @__PURE__ */ jsxDEV15(
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
import * as React9 from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown as ChevronDown2, ChevronUp } from "lucide-react";
import { jsxDEV as jsxDEV16 } from "react/jsx-dev-runtime";
var Select = SelectPrimitive.Root;
var SelectValue = SelectPrimitive.Value, SelectTrigger = React9.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV16(
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
      /* @__PURE__ */ jsxDEV16(SelectPrimitive.Icon, { asChild: !0, children: /* @__PURE__ */ jsxDEV16(ChevronDown2, { className: "h-4 w-4 opacity-50" }, void 0, !1, {
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
var SelectScrollUpButton = React9.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV16(
  SelectPrimitive.ScrollUpButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxDEV16(ChevronUp, { className: "h-4 w-4" }, void 0, !1, {
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
var SelectScrollDownButton = React9.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV16(
  SelectPrimitive.ScrollDownButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxDEV16(ChevronDown2, { className: "h-4 w-4" }, void 0, !1, {
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
var SelectContent = React9.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsxDEV16(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxDEV16(
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
      /* @__PURE__ */ jsxDEV16(SelectScrollUpButton, {}, void 0, !1, {
        fileName: "app/components/ui/select.tsx",
        lineNumber: 84,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ jsxDEV16(
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
      /* @__PURE__ */ jsxDEV16(SelectScrollDownButton, {}, void 0, !1, {
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
var SelectLabel = React9.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV16(
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
var SelectItem = React9.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV16(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxDEV16("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxDEV16(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsxDEV16(Check, { className: "h-4 w-4" }, void 0, !1, {
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
      /* @__PURE__ */ jsxDEV16(SelectPrimitive.ItemText, { children }, void 0, !1, {
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
var SelectSeparator = React9.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV16(
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
import * as React11 from "react";
import { Slot as Slot2 } from "@radix-ui/react-slot";
import {
  Controller,
  FormProvider,
  useFormContext
} from "react-hook-form";

// app/components/ui/label.tsx
import * as React10 from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva as cva4 } from "class-variance-authority";
import { jsxDEV as jsxDEV17 } from "react/jsx-dev-runtime";
var labelVariants = cva4(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Label2 = React10.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV17(
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
Label2.displayName = LabelPrimitive.Root.displayName;

// app/components/ui/form.tsx
import { jsxDEV as jsxDEV18 } from "react/jsx-dev-runtime";
var Form = FormProvider, FormFieldContext = React11.createContext(
  {}
), FormField = ({
  ...props
}) => /* @__PURE__ */ jsxDEV18(FormFieldContext.Provider, { value: { name: props.name }, children: /* @__PURE__ */ jsxDEV18(Controller, { ...props }, void 0, !1, {
  fileName: "app/components/ui/form.tsx",
  lineNumber: 37,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/ui/form.tsx",
  lineNumber: 36,
  columnNumber: 5
}, this), useFormField = () => {
  let fieldContext = React11.useContext(FormFieldContext), itemContext = React11.useContext(FormItemContext), { getFieldState, formState } = useFormContext(), fieldState = getFieldState(fieldContext.name, formState);
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
}, FormItemContext = React11.createContext(
  {}
), FormItem = React11.forwardRef(({ className, ...props }, ref) => {
  let id = React11.useId();
  return /* @__PURE__ */ jsxDEV18(FormItemContext.Provider, { value: { id }, children: /* @__PURE__ */ jsxDEV18("div", { ref, className: cn("space-y-2", className), ...props }, void 0, !1, {
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
var FormLabel = React11.forwardRef(({ className, ...props }, ref) => {
  let { error, formItemId } = useFormField();
  return /* @__PURE__ */ jsxDEV18(
    Label2,
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
var FormControl = React11.forwardRef(({ ...props }, ref) => {
  let { error, formItemId, formDescriptionId, formMessageId } = useFormField();
  return /* @__PURE__ */ jsxDEV18(
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
var FormDescription = React11.forwardRef(({ className, ...props }, ref) => {
  let { formDescriptionId } = useFormField();
  return /* @__PURE__ */ jsxDEV18(
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
var FormMessage = React11.forwardRef(({ className, children, ...props }, ref) => {
  let { error, formMessageId } = useFormField(), body = error ? String(error?.message) : children;
  return body ? /* @__PURE__ */ jsxDEV18(
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
import { jsxDEV as jsxDEV19 } from "react/jsx-dev-runtime";
var NewPatientForm = () => {
  let [account, setAccount] = useState4(""), [contract, setContract] = useState4(null), [loading, setLoading] = useState4(!1);
  useEffect4(() => {
    loadWeb3(), loadBlockchainData();
  }, []);
  let loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web33(window.ethereum);
      try {
        await window.ethereum.enable();
      } catch {
        alert("User denied account access.");
      }
    } else
      alert("Non-Ethereum browser detected. You should consider trying MetaMask!");
  }, loadBlockchainData = async () => {
    let web3 = new Web33(window.ethereum), accounts = await web3.eth.getAccounts();
    if (accounts.length === 0) {
      alert("No accounts found. Please ensure your wallet is connected.");
      return;
    }
    setAccount(accounts[0]);
    let networkId = await web3.eth.net.getId(), networkData = CancerPatientData_default.networks[networkId];
    if (networkData) {
      let contractInstance = new web3.eth.Contract(
        CancerPatientData_default.abi,
        networkData.address
      );
      setContract(contractInstance);
    } else
      alert("The smart contract is not deployed to the current network");
  }, form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      contactNumber: "",
      gender: "",
      cancerType: ""
    }
  }), onSubmit = async (values) => {
    if (!contract) {
      console.error("Contract is not initialized");
      return;
    }
    setLoading(!0);
    try {
      await contract.methods.addPatient(
        values.firstName,
        values.lastName,
        values.contactNumber,
        values.gender,
        values.cancerType
      ).send({ from: account }), toast({
        title: "New patient data submitted",
        description: "The form was submitted successfully."
      });
    } catch (error) {
      console.error("Error submitting form:", error), toast({
        title: "Error",
        description: "There was an error submitting the form: ${error.message}"
      });
    }
    setLoading(!1);
  };
  return /* @__PURE__ */ jsxDEV19("div", { className: "max-w-2xl mx-auto p-4 bg-white shadow rounded-lg", children: [
    /* @__PURE__ */ jsxDEV19("h1", { className: "text-2xl font-bold mb-6", children: "New Cancer Patient Registration" }, void 0, !1, {
      fileName: "app/routes/form.tsx",
      lineNumber: 117,
      columnNumber: 7
    }, this),
    loading && /* @__PURE__ */ jsxDEV19("div", { className: "loading", children: "Loading..." }, void 0, !1, {
      fileName: "app/routes/form.tsx",
      lineNumber: 118,
      columnNumber: 19
    }, this),
    /* @__PURE__ */ jsxDEV19(Form, { ...form, children: /* @__PURE__ */ jsxDEV19("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-8", children: [
      /* @__PURE__ */ jsxDEV19("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxDEV19(
          FormField,
          {
            control: form.control,
            name: "firstName",
            render: ({ field }) => /* @__PURE__ */ jsxDEV19(FormItem, { children: [
              /* @__PURE__ */ jsxDEV19(FormLabel, { children: "First name" }, void 0, !1, {
                fileName: "app/routes/form.tsx",
                lineNumber: 127,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV19(FormControl, { children: /* @__PURE__ */ jsxDEV19(Input, { placeholder: "First", ...field }, void 0, !1, {
                fileName: "app/routes/form.tsx",
                lineNumber: 129,
                columnNumber: 21
              }, this) }, void 0, !1, {
                fileName: "app/routes/form.tsx",
                lineNumber: 128,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV19(FormMessage, {}, void 0, !1, {
                fileName: "app/routes/form.tsx",
                lineNumber: 131,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/form.tsx",
              lineNumber: 126,
              columnNumber: 17
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/form.tsx",
            lineNumber: 122,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV19(
          FormField,
          {
            control: form.control,
            name: "lastName",
            render: ({ field }) => /* @__PURE__ */ jsxDEV19(FormItem, { children: [
              /* @__PURE__ */ jsxDEV19(FormLabel, { children: "Last name" }, void 0, !1, {
                fileName: "app/routes/form.tsx",
                lineNumber: 140,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV19(FormControl, { children: /* @__PURE__ */ jsxDEV19(Input, { placeholder: "Last", ...field }, void 0, !1, {
                fileName: "app/routes/form.tsx",
                lineNumber: 142,
                columnNumber: 21
              }, this) }, void 0, !1, {
                fileName: "app/routes/form.tsx",
                lineNumber: 141,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV19(FormMessage, {}, void 0, !1, {
                fileName: "app/routes/form.tsx",
                lineNumber: 144,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/form.tsx",
              lineNumber: 139,
              columnNumber: 17
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/form.tsx",
            lineNumber: 135,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/form.tsx",
        lineNumber: 121,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV19("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxDEV19(
          FormField,
          {
            control: form.control,
            name: "gender",
            render: ({ field }) => /* @__PURE__ */ jsxDEV19(FormItem, { children: [
              /* @__PURE__ */ jsxDEV19(FormLabel, { children: "Gender" }, void 0, !1, {
                fileName: "app/routes/form.tsx",
                lineNumber: 155,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV19(Select, { onValueChange: field.onChange, defaultValue: field.value, children: [
                /* @__PURE__ */ jsxDEV19(FormControl, { children: /* @__PURE__ */ jsxDEV19(SelectTrigger, { children: /* @__PURE__ */ jsxDEV19(SelectValue, { placeholder: "Select gender" }, void 0, !1, {
                  fileName: "app/routes/form.tsx",
                  lineNumber: 159,
                  columnNumber: 25
                }, this) }, void 0, !1, {
                  fileName: "app/routes/form.tsx",
                  lineNumber: 158,
                  columnNumber: 23
                }, this) }, void 0, !1, {
                  fileName: "app/routes/form.tsx",
                  lineNumber: 157,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV19(SelectContent, { children: [
                  /* @__PURE__ */ jsxDEV19(SelectItem, { value: "male", children: "Male" }, void 0, !1, {
                    fileName: "app/routes/form.tsx",
                    lineNumber: 163,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ jsxDEV19(SelectItem, { value: "female", children: "Female" }, void 0, !1, {
                    fileName: "app/routes/form.tsx",
                    lineNumber: 164,
                    columnNumber: 23
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/form.tsx",
                  lineNumber: 162,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/form.tsx",
                lineNumber: 156,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV19(FormMessage, {}, void 0, !1, {
                fileName: "app/routes/form.tsx",
                lineNumber: 167,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/form.tsx",
              lineNumber: 154,
              columnNumber: 17
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/form.tsx",
            lineNumber: 150,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV19(
          FormField,
          {
            control: form.control,
            name: "contactNumber",
            render: ({ field }) => /* @__PURE__ */ jsxDEV19(FormItem, { children: [
              /* @__PURE__ */ jsxDEV19(FormLabel, { children: "Contact number" }, void 0, !1, {
                fileName: "app/routes/form.tsx",
                lineNumber: 176,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV19(FormControl, { children: /* @__PURE__ */ jsxDEV19(Input, { placeholder: "011-12345678", ...field }, void 0, !1, {
                fileName: "app/routes/form.tsx",
                lineNumber: 178,
                columnNumber: 21
              }, this) }, void 0, !1, {
                fileName: "app/routes/form.tsx",
                lineNumber: 177,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV19(FormMessage, {}, void 0, !1, {
                fileName: "app/routes/form.tsx",
                lineNumber: 180,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/form.tsx",
              lineNumber: 175,
              columnNumber: 17
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/form.tsx",
            lineNumber: 171,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/form.tsx",
        lineNumber: 149,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV19(
        FormField,
        {
          control: form.control,
          name: "cancerType",
          render: ({ field }) => /* @__PURE__ */ jsxDEV19(FormItem, { children: [
            /* @__PURE__ */ jsxDEV19(FormLabel, { children: "Cancer Type" }, void 0, !1, {
              fileName: "app/routes/form.tsx",
              lineNumber: 190,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV19(Select, { onValueChange: field.onChange, defaultValue: field.value, children: [
              /* @__PURE__ */ jsxDEV19(FormControl, { children: /* @__PURE__ */ jsxDEV19(SelectTrigger, { children: /* @__PURE__ */ jsxDEV19(SelectValue, { placeholder: "Select cancer type" }, void 0, !1, {
                fileName: "app/routes/form.tsx",
                lineNumber: 194,
                columnNumber: 23
              }, this) }, void 0, !1, {
                fileName: "app/routes/form.tsx",
                lineNumber: 193,
                columnNumber: 21
              }, this) }, void 0, !1, {
                fileName: "app/routes/form.tsx",
                lineNumber: 192,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV19(SelectContent, { children: [
                /* @__PURE__ */ jsxDEV19(SelectItem, { value: "breast", children: "Breast Cancer" }, void 0, !1, {
                  fileName: "app/routes/form.tsx",
                  lineNumber: 198,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV19(SelectItem, { value: "lung", children: "Lung Cancer" }, void 0, !1, {
                  fileName: "app/routes/form.tsx",
                  lineNumber: 199,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV19(SelectItem, { value: "prostate", children: "Prostate Cancer" }, void 0, !1, {
                  fileName: "app/routes/form.tsx",
                  lineNumber: 200,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV19(SelectItem, { value: "colorectal", children: "Colorectal Cancer" }, void 0, !1, {
                  fileName: "app/routes/form.tsx",
                  lineNumber: 201,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV19(SelectItem, { value: "melanoma", children: "Melanoma" }, void 0, !1, {
                  fileName: "app/routes/form.tsx",
                  lineNumber: 202,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV19(SelectItem, { value: "leukemia", children: "Leukemia" }, void 0, !1, {
                  fileName: "app/routes/form.tsx",
                  lineNumber: 203,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV19(SelectItem, { value: "lymphoma", children: "Lymphoma" }, void 0, !1, {
                  fileName: "app/routes/form.tsx",
                  lineNumber: 204,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV19(SelectItem, { value: "other", children: "Other" }, void 0, !1, {
                  fileName: "app/routes/form.tsx",
                  lineNumber: 205,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/form.tsx",
                lineNumber: 197,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/form.tsx",
              lineNumber: 191,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV19(FormMessage, {}, void 0, !1, {
              fileName: "app/routes/form.tsx",
              lineNumber: 208,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/form.tsx",
            lineNumber: 189,
            columnNumber: 15
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/form.tsx",
          lineNumber: 185,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV19(Button, { type: "submit", children: "Submit" }, void 0, !1, {
        fileName: "app/routes/form.tsx",
        lineNumber: 212,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/form.tsx",
      lineNumber: 120,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/form.tsx",
      lineNumber: 119,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/form.tsx",
    lineNumber: 116,
    columnNumber: 5
  }, this);
}, form_default = NewPatientForm;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-6INWWPL5.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-RTCGGSKO.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-LS2LPRW5.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-E3R3VUE3.js", imports: ["/build/_shared/chunk-HFYMB3PK.js", "/build/_shared/chunk-SOHRHHGW.js", "/build/_shared/chunk-4QZGTYD2.js", "/build/_shared/chunk-NMZL6IDN.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-4FDPIZ3E.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/dashboard": { id: "routes/dashboard", parentId: "root", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard-MGSQNXGS.js", imports: ["/build/_shared/chunk-JLBXJSAK.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/fetch": { id: "routes/fetch", parentId: "root", path: "fetch", index: void 0, caseSensitive: void 0, module: "/build/routes/fetch-HX6LBJOW.js", imports: ["/build/_shared/chunk-JLBXJSAK.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/form": { id: "routes/form", parentId: "root", path: "form", index: void 0, caseSensitive: void 0, module: "/build/routes/form-SSNLOZIQ.js", imports: ["/build/_shared/chunk-JLBXJSAK.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "23857454", hmr: { runtime: "/build/_shared\\chunk-LS2LPRW5.js", timestamp: 1729182185522 }, url: "/build/manifest-23857454.js" };

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
  "routes/fetch": {
    id: "routes/fetch",
    parentId: "root",
    path: "fetch",
    index: void 0,
    caseSensitive: void 0,
    module: fetch_exports
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
