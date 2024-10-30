"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
// import {Link} from "@nextui-org/link";
import Link from "next/link";
import logo from "../../public/images/beautyStudio_logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ThemeSwitcher } from "./themeSwitcher";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const closeMobilMenu = () => {
    setIsMenuOpen(false);
  };

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Pricing", link: "/pricing" },
    { name: "Contact", link: "/contact" },
    { name: "Book", link: "/book" },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      isBordered
      shouldHideOnScroll
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/" className="flex items-center gap-4">
            <Image src={logo} alt="logo" width={60} height={60} />

            <p className="font-bold text-inherit md:hidden lg:block">Jess Beauty Studio</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6" justify="end">
        <NavbarItem>
          <Link
            color="foreground"
            href="/"
            className={pathname == "/" ? "text-danger" : ""}
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="/about"
            className={pathname == "/about" ? "text-danger" : ""}
          >
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="/services"
            className={pathname == "/services" ? "text-danger" : ""}
          >
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="/pricing"
            className={pathname == "/pricing" ? "text-danger" : ""}
          >
            Pricing
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="/contact"
            className={pathname == "/contact" ? "text-danger" : ""}
          >
            Contact
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="danger" href="/book" variant="flat">
            Book
          </Button>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className={`w-full text-xl ${
                pathname === item.link ? "text-danger" : "text-foreground"
              }`}
              href={item.link}
              onClick={closeMobilMenu}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <div className="text-foreground">
           <ThemeSwitcher />
        </div>
      </NavbarMenu>
    </Navbar>
  );
}
