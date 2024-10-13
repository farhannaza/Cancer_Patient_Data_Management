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
var tailwind_default = "/build/_assets/tailwind-MMLGRMHE.css";

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

// app/root.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: tailwind_default },
  ...void 0 ? [{ rel: "stylesheet", href: void 0 }] : []
];
function App() {
  return /* @__PURE__ */ jsxDEV5("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV5("head", { children: [
      /* @__PURE__ */ jsxDEV5("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("body", { className: "container mx-auto", children: [
      /* @__PURE__ */ jsxDEV5(Navigation, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("main", { children: /* @__PURE__ */ jsxDEV5(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5(Footer, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  default: () => Dashboard
});
import { useState } from "react";
import { Bell, Calendar, FilePlus, MoreVertical, User } from "lucide-react";

// app/components/ui/button.tsx
import * as React2 from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva as cva2 } from "class-variance-authority";
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var buttonVariants = cva2(
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
), Button = React2.forwardRef(
  ({ className, variant, size, asChild = !1, ...props }, ref) => /* @__PURE__ */ jsxDEV6(
    asChild ? Slot : "button",
    {
      className: cn(buttonVariants({ variant, size, className })),
      ref,
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
import * as React3 from "react";
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var Card = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV7(
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
var CardHeader = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV7(
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
var CardTitle = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV7(
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
var CardDescription = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV7(
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
var CardContent = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV7("div", { ref, className: cn("p-6 pt-0", className), ...props }, void 0, !1, {
  fileName: "app/components/ui/card.tsx",
  lineNumber: 63,
  columnNumber: 3
}, this));
CardContent.displayName = "CardContent";
var CardFooter = React3.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV7(
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
import * as React4 from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
var DropdownMenu = DropdownMenuPrimitive.Root, DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
var DropdownMenuSubTrigger = React4.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxDEV8(
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
      /* @__PURE__ */ jsxDEV8(ChevronRight, { className: "ml-auto h-4 w-4" }, void 0, !1, {
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
var DropdownMenuSubContent = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV8(
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
var DropdownMenuContent = React4.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxDEV8(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsxDEV8(
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
var DropdownMenuItem = React4.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxDEV8(
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
var DropdownMenuCheckboxItem = React4.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxDEV8(
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
      /* @__PURE__ */ jsxDEV8("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxDEV8(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsxDEV8(Check, { className: "h-4 w-4" }, void 0, !1, {
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
var DropdownMenuRadioItem = React4.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV8(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxDEV8("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxDEV8(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsxDEV8(Circle, { className: "h-2 w-2 fill-current" }, void 0, !1, {
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
var DropdownMenuLabel = React4.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxDEV8(
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
var DropdownMenuSeparator = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV8(
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
}) => /* @__PURE__ */ jsxDEV8(
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
import * as React5 from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
var Progress = React5.forwardRef(({ className, value, ...props }, ref) => /* @__PURE__ */ jsxDEV9(
  ProgressPrimitive.Root,
  {
    ref,
    className: cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxDEV9(
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
import * as React6 from "react";
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
var Table = React6.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV10("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ jsxDEV10(
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
var TableHeader = React6.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV10("thead", { ref, className: cn("[&_tr]:border-b", className), ...props }, void 0, !1, {
  fileName: "app/components/ui/table.tsx",
  lineNumber: 23,
  columnNumber: 3
}, this));
TableHeader.displayName = "TableHeader";
var TableBody = React6.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV10(
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
var TableFooter = React6.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV10(
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
var TableRow = React6.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV10(
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
var TableHead = React6.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV10(
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
var TableCell = React6.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV10(
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
var TableCaption = React6.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV10(
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
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
function Dashboard() {
  let [treatmentProgress, setTreatmentProgress] = useState(65);
  return /* @__PURE__ */ jsxDEV11("div", { className: "flex flex-col min-h-screen bg-gray-100", children: [
    /* @__PURE__ */ jsxDEV11("header", { className: "bg-white shadow-sm", children: /* @__PURE__ */ jsxDEV11("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxDEV11("h1", { className: "text-2xl font-semibold text-gray-900", children: "Patient Dashboard" }, void 0, !1, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV11("div", { className: "flex items-center space-x-4", children: [
        /* @__PURE__ */ jsxDEV11(Button, { variant: "ghost", size: "icon", children: /* @__PURE__ */ jsxDEV11(Bell, { className: "h-5 w-5" }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 35,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 34,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV11(DropdownMenu, { children: [
          /* @__PURE__ */ jsxDEV11(DropdownMenuTrigger, { asChild: !0, children: /* @__PURE__ */ jsxDEV11(Button, { variant: "ghost", className: "relative h-8 w-8 rounded-full", children: /* @__PURE__ */ jsxDEV11(User, { className: "h-5 w-5" }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 40,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 39,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 38,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV11(DropdownMenuContent, { align: "end", children: [
            /* @__PURE__ */ jsxDEV11(DropdownMenuLabel, { children: "My Account" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 44,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV11(DropdownMenuSeparator, {}, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 45,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV11(DropdownMenuItem, { children: "Profile" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 46,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV11(DropdownMenuItem, { children: "Settings" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 47,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV11(DropdownMenuItem, { children: "Logout" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 48,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 43,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 37,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV11("main", { className: "flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
      /* @__PURE__ */ jsxDEV11("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-4", children: [
        /* @__PURE__ */ jsxDEV11(Card, { children: [
          /* @__PURE__ */ jsxDEV11(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
            /* @__PURE__ */ jsxDEV11(CardTitle, { className: "text-sm font-medium", children: "Total Patients" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 59,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV11(User, { className: "h-4 w-4 text-muted-foreground" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 60,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 58,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV11(CardContent, { children: [
            /* @__PURE__ */ jsxDEV11("div", { className: "text-2xl font-bold", children: "1,234" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 63,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV11("p", { className: "text-xs text-muted-foreground", children: "+20% from last month" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 64,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 62,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 57,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV11(Card, { children: [
          /* @__PURE__ */ jsxDEV11(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
            /* @__PURE__ */ jsxDEV11(CardTitle, { className: "text-sm font-medium", children: "Active Treatments" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 69,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV11(FilePlus, { className: "h-4 w-4 text-muted-foreground" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 70,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 68,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV11(CardContent, { children: [
            /* @__PURE__ */ jsxDEV11("div", { className: "text-2xl font-bold", children: "567" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 73,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV11("p", { className: "text-xs text-muted-foreground", children: "+5% from last week" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 74,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 72,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 67,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV11(Card, { children: [
          /* @__PURE__ */ jsxDEV11(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
            /* @__PURE__ */ jsxDEV11(CardTitle, { className: "text-sm font-medium", children: "Upcoming Appointments" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 79,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV11(Calendar, { className: "h-4 w-4 text-muted-foreground" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 80,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 78,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV11(CardContent, { children: [
            /* @__PURE__ */ jsxDEV11("div", { className: "text-2xl font-bold", children: "89" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 83,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV11("p", { className: "text-xs text-muted-foreground", children: "For the next 7 days" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 84,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 82,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 77,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV11(Card, { children: [
          /* @__PURE__ */ jsxDEV11(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [
            /* @__PURE__ */ jsxDEV11(CardTitle, { className: "text-sm font-medium", children: "Treatment Success Rate" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 89,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV11(MoreVertical, { className: "h-4 w-4 text-muted-foreground" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 90,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 88,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV11(CardContent, { children: [
            /* @__PURE__ */ jsxDEV11("div", { className: "text-2xl font-bold", children: "78%" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 93,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV11("p", { className: "text-xs text-muted-foreground", children: "+2% from last year" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 94,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 92,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 87,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV11("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6", children: [
        /* @__PURE__ */ jsxDEV11(Card, { className: "col-span-2", children: [
          /* @__PURE__ */ jsxDEV11(CardHeader, { children: /* @__PURE__ */ jsxDEV11(CardTitle, { children: "Upcoming Appointments" }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 102,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 101,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV11(CardContent, { children: /* @__PURE__ */ jsxDEV11(Table, { children: [
            /* @__PURE__ */ jsxDEV11(TableHeader, { children: /* @__PURE__ */ jsxDEV11(TableRow, { children: [
              /* @__PURE__ */ jsxDEV11(TableHead, { children: "Patient" }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 108,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV11(TableHead, { children: "Date" }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 109,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV11(TableHead, { children: "Time" }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 110,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ jsxDEV11(TableHead, { children: "Type" }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 111,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 107,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 106,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV11(TableBody, { children: [
              /* @__PURE__ */ jsxDEV11(TableRow, { children: [
                /* @__PURE__ */ jsxDEV11(TableCell, { children: "John Doe" }, void 0, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 116,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV11(TableCell, { children: "2023-05-15" }, void 0, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 117,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV11(TableCell, { children: "09:00 AM" }, void 0, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 118,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV11(TableCell, { children: "Chemotherapy" }, void 0, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 119,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 115,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV11(TableRow, { children: [
                /* @__PURE__ */ jsxDEV11(TableCell, { children: "Jane Smith" }, void 0, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 122,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV11(TableCell, { children: "2023-05-15" }, void 0, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 123,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV11(TableCell, { children: "11:30 AM" }, void 0, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 124,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV11(TableCell, { children: "Radiation" }, void 0, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 125,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 121,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV11(TableRow, { children: [
                /* @__PURE__ */ jsxDEV11(TableCell, { children: "Bob Johnson" }, void 0, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 128,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV11(TableCell, { children: "2023-05-16" }, void 0, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 129,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV11(TableCell, { children: "02:00 PM" }, void 0, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 130,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV11(TableCell, { children: "Follow-up" }, void 0, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 131,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 127,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 114,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 105,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 104,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 100,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV11(Card, { children: [
          /* @__PURE__ */ jsxDEV11(CardHeader, { children: /* @__PURE__ */ jsxDEV11(CardTitle, { children: "Treatment Progress" }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 140,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 139,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV11(CardContent, { children: /* @__PURE__ */ jsxDEV11("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxDEV11("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxDEV11("div", { className: "space-y-1", children: [
                /* @__PURE__ */ jsxDEV11("p", { className: "text-sm font-medium", children: "Overall Progress" }, void 0, !1, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 146,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV11("p", { className: "text-2xl font-bold", children: [
                  treatmentProgress,
                  "%"
                ] }, void 0, !0, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 147,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 145,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV11(
                "div",
                {
                  className: "w-20 h-20 rounded-full border-8 border-primary",
                  style: {
                    background: `conic-gradient(var(--primary) ${treatmentProgress}%, transparent 0)`
                  }
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 149,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 144,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV11(Progress, { value: treatmentProgress, className: "w-full" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 156,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV11("p", { className: "text-sm text-muted-foreground", children: "Next milestone: 75% - Estimated 2 weeks" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 157,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 143,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 142,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 138,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 99,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV11(Card, { className: "mt-6", children: [
        /* @__PURE__ */ jsxDEV11(CardHeader, { children: /* @__PURE__ */ jsxDEV11(CardTitle, { children: "Recent Test Results" }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 167,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 166,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV11(CardContent, { children: /* @__PURE__ */ jsxDEV11(Table, { children: [
          /* @__PURE__ */ jsxDEV11(TableHeader, { children: /* @__PURE__ */ jsxDEV11(TableRow, { children: [
            /* @__PURE__ */ jsxDEV11(TableHead, { children: "Date" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 173,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV11(TableHead, { children: "Test Type" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 174,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV11(TableHead, { children: "Result" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 175,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV11(TableHead, { children: "Status" }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 176,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 172,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 171,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV11(TableBody, { children: [
            /* @__PURE__ */ jsxDEV11(TableRow, { children: [
              /* @__PURE__ */ jsxDEV11(TableCell, { children: "2023-05-10" }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 181,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV11(TableCell, { children: "Blood Count" }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 182,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV11(TableCell, { children: "Normal" }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 183,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV11(TableCell, { children: /* @__PURE__ */ jsxDEV11("span", { className: "inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800", children: "Good" }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 185,
                columnNumber: 21
              }, this) }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 184,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 180,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV11(TableRow, { children: [
              /* @__PURE__ */ jsxDEV11(TableCell, { children: "2023-05-05" }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 191,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV11(TableCell, { children: "MRI Scan" }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 192,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV11(TableCell, { children: "No significant changes" }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 193,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV11(TableCell, { children: /* @__PURE__ */ jsxDEV11("span", { className: "inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800", children: "Stable" }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 195,
                columnNumber: 21
              }, this) }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 194,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 190,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV11(TableRow, { children: [
              /* @__PURE__ */ jsxDEV11(TableCell, { children: "2023-04-28" }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 201,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV11(TableCell, { children: "Tumor Marker" }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 202,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV11(TableCell, { children: "Slightly elevated" }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 203,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV11(TableCell, { children: /* @__PURE__ */ jsxDEV11("span", { className: "inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800", children: "Monitor" }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 205,
                columnNumber: 21
              }, this) }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 204,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 200,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 179,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 170,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 169,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 165,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 55,
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
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
function Hero() {
  return /* @__PURE__ */ jsxDEV12("section", { className: "w-full min-h-screen py-12 md:py-24 lg:py-32", children: /* @__PURE__ */ jsxDEV12("div", { className: "container px-4 md:px-6", children: /* @__PURE__ */ jsxDEV12("div", { className: "flex flex-col items-center justify-center space-y-4 text-center", children: [
    /* @__PURE__ */ jsxDEV12("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsxDEV12("h1", { className: "text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none my-8", children: "OnchologyChain" }, void 0, !1, {
        fileName: "app/components/custom/Hero.tsx",
        lineNumber: 9,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV12("p", { className: "mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 pb-3", children: "Cancer Patient's Data Management System" }, void 0, !1, {
        fileName: "app/components/custom/Hero.tsx",
        lineNumber: 12,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/custom/Hero.tsx",
      lineNumber: 8,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV12("div", { className: "space-x-4", children: [
      /* @__PURE__ */ jsxDEV12(
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
      /* @__PURE__ */ jsxDEV12(
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
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
var meta = () => [
  { title: "OnchologyChain" },
  { name: "description", content: "Welcome to OnchologyChain!" }
];
function RootRoute() {
  return /* @__PURE__ */ jsxDEV13(Hero, {}, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 13,
    columnNumber: 10
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-A7JF6FEJ.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-RTCGGSKO.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-LS2LPRW5.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-TCGLLYIO.js", imports: ["/build/_shared/chunk-OCNFEN6V.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-VPANNSLU.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/dashboard": { id: "routes/dashboard", parentId: "root", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard-ZXUKUQKF.js", imports: ["/build/_shared/chunk-NMZL6IDN.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "82465672", hmr: { runtime: "/build/_shared\\chunk-LS2LPRW5.js", timestamp: 1728829682179 }, url: "/build/manifest-82465672.js" };

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
