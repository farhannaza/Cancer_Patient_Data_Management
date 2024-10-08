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
  default: () => root_default,
  links: () => links,
  loader: () => loader
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
var tailwind_default = "/build/_assets/tailwind-RD7AJQ3Q.css";

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
        children: "CuteLove"
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
          to: "#",
          children: "Pricing"
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
  return /* @__PURE__ */ jsxDEV4("div", { className: "w-full h-20 flex items-center justify-center border-t text-gray-600 dark:border-gray-800 dark:text-gray-300", children: /* @__PURE__ */ jsxDEV4("p", { children: "\xA9 SyafikaComel. All rights reserved." }, void 0, !1, {
    fileName: "app/components/custom/Footer.tsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/custom/Footer.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/root.tsx
import { ClerkApp } from "@clerk/remix";
import { rootAuthLoader } from "@clerk/remix/ssr.server";
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var loader = (args) => rootAuthLoader(args, ({ request }) => {
  let { sessionId, userId, getToken } = request.auth;
  return console.log("sessionID", sessionId), console.log("userID", userId), console.log("getToken", getToken), console.log("request", request), { yourData: "here" };
}), links = () => [
  { rel: "stylesheet", href: tailwind_default },
  ...void 0 ? [{ rel: "stylesheet", href: void 0 }] : []
];
function App() {
  return /* @__PURE__ */ jsxDEV5("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV5("head", { children: [
      /* @__PURE__ */ jsxDEV5("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("body", { className: "container mx-auto", children: [
      /* @__PURE__ */ jsxDEV5(Navigation, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("main", { children: /* @__PURE__ */ jsxDEV5(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 48,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5(Footer, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
}
var root_default = ClerkApp(App);

// app/routes/dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  default: () => DashboardRoute
});
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
function DashboardRoute() {
  return /* @__PURE__ */ jsxDEV6("div", { className: "p-4", children: /* @__PURE__ */ jsxDEV6("div", { className: "flex justify-between items-center gap-4", children: /* @__PURE__ */ jsxDEV6("h1", { children: "Route to love Syafika - the more the better " }, void 0, !1, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 5,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/sign-in.$.tsx
var sign_in_exports = {};
__export(sign_in_exports, {
  default: () => SignUpRoute
});
import { SignIn } from "@clerk/remix";
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
function SignUpRoute() {
  return /* @__PURE__ */ jsxDEV7("div", { className: "flex items-center justify-center h-[calc(100vh-80px)]", children: /* @__PURE__ */ jsxDEV7(SignIn, {}, void 0, !1, {
    fileName: "app/routes/sign-in.$.tsx",
    lineNumber: 6,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/sign-in.$.tsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

// app/routes/sign-up.$.tsx
var sign_up_exports = {};
__export(sign_up_exports, {
  default: () => SignUpRoute2
});
import { SignUp } from "@clerk/remix";
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
function SignUpRoute2() {
  return /* @__PURE__ */ jsxDEV8("div", { className: "flex items-center justify-center h-[calc(100vh-80px)]", children: /* @__PURE__ */ jsxDEV8(SignUp, {}, void 0, !1, {
    fileName: "app/routes/sign-up.$.tsx",
    lineNumber: 6,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/sign-up.$.tsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => AccordionDemo,
  loader: () => loader2,
  meta: () => meta
});
import { getAuth } from "@clerk/remix/ssr.server";
import { redirect } from "@remix-run/node";

// app/components/ui/accordion.tsx
import * as React2 from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown as ChevronDown2 } from "lucide-react";
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
var Accordion = AccordionPrimitive.Root, AccordionItem = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV9(
  AccordionPrimitive.Item,
  {
    ref,
    className: cn("border-b", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/accordion.tsx",
    lineNumber: 13,
    columnNumber: 3
  },
  this
));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React2.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV9(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxDEV9(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxDEV9(ChevronDown2, { className: "h-4 w-4 shrink-0 transition-transform duration-200" }, void 0, !1, {
        fileName: "app/components/ui/accordion.tsx",
        lineNumber: 35,
        columnNumber: 7
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/ui/accordion.tsx",
    lineNumber: 26,
    columnNumber: 5
  },
  this
) }, void 0, !1, {
  fileName: "app/components/ui/accordion.tsx",
  lineNumber: 25,
  columnNumber: 3
}, this));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
var AccordionContent = React2.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV9(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsxDEV9("div", { className: cn("pb-4 pt-0", className), children }, void 0, !1, {
      fileName: "app/components/ui/accordion.tsx",
      lineNumber: 50,
      columnNumber: 5
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/accordion.tsx",
    lineNumber: 45,
    columnNumber: 3
  },
  this
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

// app/routes/_index.tsx
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
var meta = () => [
  { title: "OnchologyChain" },
  { name: "description", content: "Welcome to Remix!" }
], loader2 = async (args) => {
  let { userId } = await getAuth(args);
  return userId ? { data: { userId } } : redirect("/sign-in");
};
function AccordionDemo() {
  return /* @__PURE__ */ jsxDEV10(Accordion, { type: "single", collapsible: !0, className: "w-full", children: [
    /* @__PURE__ */ jsxDEV10(AccordionItem, { value: "item-1", children: [
      /* @__PURE__ */ jsxDEV10(AccordionTrigger, { children: "Why Syafika so Comel??" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV10(AccordionContent, { children: "Because no one more Comel in the whole world!!" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV10(AccordionItem, { value: "item-2", children: [
      /* @__PURE__ */ jsxDEV10(AccordionTrigger, { children: "Is it True?" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV10(AccordionContent, { children: "Yes, no one can prove otherwise." }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV10(AccordionItem, { value: "item-3", children: [
      /* @__PURE__ */ jsxDEV10(AccordionTrigger, { children: "Can Anyone Challenge her cutenes?" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV10(AccordionContent, { children: "Yes. But actually No." }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-GHUIPH6A.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-P5OVQBKN.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-WI45ZEBI.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-A6REOEEY.js", imports: ["/build/_shared/chunk-PCKPTWKJ.js", "/build/_shared/chunk-K47NBBJG.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-G2BLXJUT.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/dashboard": { id: "routes/dashboard", parentId: "root", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard-EZWF2HQP.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/sign-in.$": { id: "routes/sign-in.$", parentId: "root", path: "sign-in/*", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-in.$-B7XIWGYV.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/sign-up.$": { id: "routes/sign-up.$", parentId: "root", path: "sign-up/*", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-up.$-LRKCZPLK.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "24160355", hmr: { runtime: "/build/_shared\\chunk-WI45ZEBI.js", timestamp: 1728402206724 }, url: "/build/manifest-24160355.js" };

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
  "routes/sign-in.$": {
    id: "routes/sign-in.$",
    parentId: "root",
    path: "sign-in/*",
    index: void 0,
    caseSensitive: void 0,
    module: sign_in_exports
  },
  "routes/sign-up.$": {
    id: "routes/sign-up.$",
    parentId: "root",
    path: "sign-up/*",
    index: void 0,
    caseSensitive: void 0,
    module: sign_up_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
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
