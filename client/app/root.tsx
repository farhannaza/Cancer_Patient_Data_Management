import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from "./tailwind.css"
import Navigation from "./components/custom/Navigation";
import Footer from "./components/custom/Footer";
import { Toaster } from "./components/ui/toaster"

import { ClerkApp } from "@clerk/remix";
import { rootAuthLoader } from "@clerk/remix/ssr.server";
import { dark } from '@clerk/themes'
import { ThemeProvider } from "./components/theme-provider"

export const loader: LoaderFunction = (args) => {
  if (!process.env.CLERK_SECRET_KEY) {
    throw new Error("Missing CLERK_SECRET_KEY");
  }
  return rootAuthLoader(args);
};

export function ErrorBoundary() {
  return (
    <html>
      <head>
        <title>Error</title>
        <Meta />
        <Links />
      </head>
      <body>
        <Scripts />
      </body>
    </html>
  );
}

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
]

export function App() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen bg-background antialiased">
        <ThemeProvider defaultTheme="system">
          <div className="relative flex min-h-screen flex-col">
            <Toaster/>
            <Navigation />
            <main className="flex-1"><Outlet /></main>
            <Footer />
          </div>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </ThemeProvider>
      </body>
    </html>
  );
}

export default ClerkApp(App, {
  appearance: {
    baseTheme: [dark] 
  },
})
