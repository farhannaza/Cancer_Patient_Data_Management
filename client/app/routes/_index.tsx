import { MetaFunction } from "@remix-run/node";
import Hero from "~/components/custom/Hero";

export const meta: MetaFunction = () => {
  return [
    { title: "OnchologyChain" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

import { getAuth } from '@clerk/remix/ssr.server'
import { LoaderFunction, redirect } from '@remix-run/node'

export const loader: LoaderFunction = async (args) => {
  const { userId } = await getAuth(args)
  if (!userId) {
    return redirect('/sign-in')
  }
  return {}
}
export default function RootRoute() {
  return <Hero />;
}
