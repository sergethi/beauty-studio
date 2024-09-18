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
  Link,
  Button,
} from "@nextui-org/react";
import logo from "../../public/images/beautyStudio_logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";



export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname()


  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isBordered>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          {/* <AcmeLogo /> */}

          <Image src={logo} alt="logo" width={60} height={60} />

          <p className="font-bold text-inherit">Jess Beauty Studio</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6" justify="end">
        <NavbarItem>
          <Link color="foreground" href="/" className={pathname == "/" ? "text-danger": ""}>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/about" className={pathname == "/about" ? "text-danger": ""} >
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/services" className={pathname == "/services" ? "text-danger": ""} >
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/pricing" className={pathname == "/pricing" ? "text-danger": ""}>
            Pricing
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/contact" className={pathname == "/contact" ? "text-danger": ""}>
            Contact
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="danger" href="/book" variant="flat">
            Book
          </Button>
        </NavbarItem>
      </NavbarContent>
      {/* <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
