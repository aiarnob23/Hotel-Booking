"use client";
import Cookies from "js-cookie";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import { ThemeSwitch } from "@/components/theme-switch";
import { signIn, signOut } from "next-auth/react";
import { useUser } from "@/app/providers";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user, setUser } = useUser();

  // Define menu items with href for each item
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Bookings", href: "/bookings" },
  ];

  const handleSignOut = () => {
    signOut();
    Cookies.remove("email");
    Cookies.remove("name");
    Cookies.remove("accessToken");
    setUser(null);
  };

  return (
    <Navbar className="" onMenuOpenChange={setIsMenuOpen}>
      {/* Left side: Logo and menu toggle */}
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
        />
        <NavbarBrand>
          <p className="font-bold lg:-ml-[200px] text-inherit">Switz Hotels</p>
        </NavbarBrand>
      </NavbarContent>

      {/* Center: Navigation Links */}
      <NavbarContent className="hidden lg:flex gap-4" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.href}>
            <Link
              href={item.href}
              color="foreground" // Default link color from NextUI
              className="hover:text-blue-600 transition-colors px-2" // Hover effect and padding
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Right side: Theme switch and login/logout */}
      <NavbarContent justify="end">
        <ThemeSwitch />
        {user ? (
          <NavbarItem className="hidden lg:flex lg:-mr-[200px]">
            <Button onClick={handleSignOut}>Log Out</Button>
          </NavbarItem>
        ) : (
          <NavbarItem className=" lg:flex lg:-mr-[200px]">
            <Button
              onClick={() => {
                signIn("google", { callbackUrl: "/" });
              }}
            >
              Sign In
            </Button>
          </NavbarItem>
        )}
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.href}>
            <Link
              className="w-full hover:text-blue-600 transition-colors px-2"
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
