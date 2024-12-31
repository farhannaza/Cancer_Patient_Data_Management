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
import { UserButton } from "@clerk/remix";
import OrganizationProfilePage from "~/routes/organization-profile/$";


export default function Navigation() {
  return (
    <div className="flex flex-col bg-white dark:bg-gray-900">
      <div className="w-full px-4 py-6 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold text-gray-900 dark:text-gray-100"
        >
          OnchologyChain
        </Link>
        <NavigationMenu>
          <NavigationMenuList className="flex gap-4">
            <NavigationMenuLink asChild>
              <Link
                to="/"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
              >
                Home
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                to="form"
              >
                Form
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                to="fetch"
              >
                Fetch
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                to="dashboard"
              >
                Dashboard
              </Link>
            </NavigationMenuLink>
            <UserButton /> 
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
