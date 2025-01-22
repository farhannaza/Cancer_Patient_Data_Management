import { MetaFunction } from "@remix-run/node";
import Hero from "~/components/custom/Hero";

export const meta: MetaFunction = () => {
  return [
    { title: "OnchologyChain" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

import { getAuth } from '@clerk/remix/ssr.server'


export default function RootRoute() {
  return <Hero />;
}
