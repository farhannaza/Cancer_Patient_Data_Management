import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import { ClerkProvider, GoogleOneTap } from "@clerk/remix";
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

import { ClerkApp } from "@clerk/remix";
// Import rootAuthLoader
import { rootAuthLoader } from "@clerk/remix/ssr.server";

export const loader: LoaderFunction = args => {
  return rootAuthLoader(args, ({ request }) => {
    const { sessionId, userId, getToken } = request.auth;
    console.log("sessionID", sessionId);
    console.log("userID", userId);
    console.log("getToken", getToken);
    console.log("request", request);
    // fetch data
    return { yourData: 'here' };
  });
};

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
        <ClerkProvider>
          <GoogleOneTap />
          <Navigation />
          <main><Outlet /></main>
          <Footer />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </ClerkProvider>
      </body>
    </html>
  );
}

export default ClerkApp(App);
