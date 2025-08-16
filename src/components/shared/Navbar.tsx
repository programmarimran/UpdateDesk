"use client";
import React, { use, useEffect, useRef } from "react";
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
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname } from "next/navigation";
import { RxCross2 } from "react-icons/rx";
import { pinyon } from "@/lib/utils";
import { ThemeContext } from "@/context/themeContext";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  // const menuRef = useRef(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const user=use(ThemeContext)
  
  console.log(user?.name)

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (menuRef.current && !menuRef.current.contains(event.target)) {
  //       setIsOpen(false);
  //     }
  //   };

  //   if (isOpen) {
  //     document.addEventListener("mousedown", handleClickOutside);
  //     // document.addEventListener("touchstart", handleClickOutside);
  //   }

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //     // document.removeEventListener("touchstart", handleClickOutside);
  //   };
  // }, [isOpen]);
  useEffect(() => {
  const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  if (isOpen) {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
  }

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
    document.removeEventListener("touchstart", handleClickOutside);
  };
}, [isOpen]);


  return (
    <header className="shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* logo */}
        <div>
          <Link href="/" className="text-2xl font-bold">
            <span className={` text-primary ${pinyon.className}`}>Update</span>Desk
          </Link>
        </div>

        {/* desktop menu */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex space-x-4 items-center">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  className={`hover:text-red-500 link ${
                    pathname === "/news"
                      ? "font-extrabold text-4xl text-red-700"
                      : ""
                  }`}
                  href="/news"
                >
                  News
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={`hover:text-red-500 ${
                  pathname === "/services"
                    ? "font-extrabold text-4xl text-red-700"
                    : ""
                }`}
              >
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-2">
                  <li>
                    <NavigationMenuLink
                      className={`${
                        pathname === "/services/web"
                          ? "font-extrabold text-2xl text-red-700"
                          : ""
                      }`}
                      href="/services/web"
                    >
                      Web developer
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink href="/services/seo">Seo</NavigationMenuLink>
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
                <ul className="grid w-[200px] gap-2">
                  <li>
                    <NavigationMenuLink href="/services/category">
                      Category
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink href="/services/tag">Tag</NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink href="/services/author">Author</NavigationMenuLink>
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

        {/* night light toggle and login button */}
        <div className="hidden md:flex flex-row items-center space-x-4">
          <div className="flex items-center space-x-4">
            <span>Night mode</span>
            <Switch />
          </div>
          <div>
            <Link href="/login">
              <Button variant="default"> Login</Button>
            </Link>
          </div>
        </div>

        {/* mobile hamburger menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="md:hidden p-2 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          {isOpen ? <RxCross2 size={24} /> : <GiHamburgerMenu size={24} />}
        </button>

        {isOpen && (
          <div
            id="mobile-menu"
            ref={menuRef}
            className="md:hidden absolute w-full top-16 right-4 bg-white shadow-lg rounded-lg p-4 space-y-2 z-50"
          >
            <NavigationMenu>
              <NavigationMenuList className="flex flex-col space-y-2">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      onClick={() => setIsOpen(false)}
                      className={`hover:text-red-500 link ${
                        pathname === "/news"
                          ? "font-extrabold text-4xl text-red-700"
                          : ""
                      }`}
                      href="/news"
                    >
                      News
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`hover:text-red-500 ${
                      pathname === "/services"
                        ? "font-extrabold text-4xl text-red-700"
                        : ""
                    }`}
                  >
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] mx-auto gap-2">
                      <li onClick={() => setIsOpen(false)}>
                        <NavigationMenuLink
                          className={`${
                            pathname === "/services/web"
                              ? "font-extrabold text-2xl text-red-700"
                              : ""
                          }`}
                          href="/services/web"
                        >
                          Web developer
                        </NavigationMenuLink>
                      </li>
                      <li onClick={() => setIsOpen(false)}>
                        <NavigationMenuLink href="/services/seo">Seo</NavigationMenuLink>
                      </li>
                      <li onClick={() => setIsOpen(false)}>
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
                    <ul className="grid w-[200px] mx-auto gap-2">
                      <li onClick={() => setIsOpen(false)}>
                        <NavigationMenuLink href="/services/category">
                          Category
                        </NavigationMenuLink>
                      </li>
                      <li onClick={() => setIsOpen(false)}>
                        <NavigationMenuLink href="/services/tag">Tag</NavigationMenuLink>
                      </li>
                      <li onClick={() => setIsOpen(false)}>
                        <NavigationMenuLink href="/services/author">Author</NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link onClick={() => setIsOpen(false)} href="/about">
                      About
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
