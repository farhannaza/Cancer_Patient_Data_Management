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
// Import rootAuthLoader
import { rootAuthLoader } from "@clerk/remix/ssr.server";
import { dark,neobrutalism, shadesOfPurple } from '@clerk/themes'


export const loader: LoaderFunction = (args) => rootAuthLoader(args)

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
]

function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="container mx-auto">
        <Toaster/>
        <Navigation />
        <main><Outlet /></main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default ClerkApp(App, {
  appearance: {
    baseTheme: [dark] 
    
  },
})
