/**
 * v0 by Vercel.
 * @see https://v0.dev/t/RpImR1PAsTR
 */

import { Link } from "@remix-run/react";
import {
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenu,
} from "~/components/ui/navigation-menu";
import { SignedOut, UserButton } from "@clerk/remix";
import { Protect } from "@clerk/remix";
import { ThemeToggle } from "../theme-toggle"


export default function Navigation() {
  return (
    <div className="flex flex-col bg-background text-foreground">
      <div className="w-full px-4 py-6 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold text-foreground"
        >
          OncologyChain
        </Link>
        <NavigationMenu>
          <NavigationMenuList className="flex gap-4">
            <NavigationMenuLink asChild>
              <Link
                to="/"
                className="text-muted-foreground hover:text-foreground"
              >
                Home
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                to="http://192.168.1.6:3000/medical-profile"
                className="text-muted-foreground hover:text-foreground"
              >
                Risk Analysis
              </Link>
            </NavigationMenuLink>
            <SignedOut>
            <NavigationMenuLink asChild>
              <Link
                to="sign-in"
                className="text-muted-foreground hover:text-foreground"
              >
                Sign In
              </Link>
            </NavigationMenuLink>
            </SignedOut>
            <Protect permission="org:patient:data">
              <NavigationMenuLink asChild>
                <Link
                  to="patient"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Profile
                </Link>
              </NavigationMenuLink>
            </Protect>
            <Protect permission="org:doctor:domain">
              <NavigationMenuLink asChild>
                <Link
                  className="text-muted-foreground hover:text-foreground"
                  to="form"
                >
                  Form
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link
                  className="text-muted-foreground hover:text-foreground"
                  to="fetch"
                >
                  Fetch
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link
                  className="text-muted-foreground hover:text-foreground"
                  to="dashboard"
                >
                  Dashboard
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link
                  className="text-muted-foreground hover:text-foreground"
                  to="http://192.168.1.6:3000/upload-form"
                >
                  CancerCare(Zahin)
                </Link>
              </NavigationMenuLink>
            </Protect>
            <Protect permission="org:sys_domains:manage">
              <NavigationMenuLink asChild>
                <Link
                  className="text-muted-foreground hover:text-foreground"
                  to="admin"
                >
                  Admin
                </Link>
              </NavigationMenuLink>
            </Protect>
            <UserButton />
            <ThemeToggle />
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
