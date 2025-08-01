import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import Link from "next/link";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <header className="shadow-md">
      <nav className=" max-w-7xl mx-auto flex justify-between items-center p-4 ">
        {/* logo */}
        <div>
          <Link href="/" className="text-2xl font-bold">
            <span className="text-blue-500">News</span>Portal
          </Link>
        </div>

        {/* desktop menu */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex space-x-4 items-center">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/news">News</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-2 ">
                  <li>
                    <NavigationMenuLink href="/services/web">
                      Web developer
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink href="/services/seo">
                      Seo
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink href="/services/daily-news">
                      Daily news
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Achives</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-2 ">
                  <li>
                    <NavigationMenuLink href="/services/category">
                      Category
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink href="/services/tag">
                      Tag
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink href="/services/author">
                      Author
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/about">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {/* mobile menu */}

        {/* night light toggle and login button */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-4">
            <span>Night mode</span>
            <Switch />
          </div>
          <Link href="/login">
            <Button variant="default"> Login</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
