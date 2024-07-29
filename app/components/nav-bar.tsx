'use client'

import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo.jsx";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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
          <p className="font-bold text-inherit">Jess Beauty Studio</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6" justify="end">
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link color="foreground" href="#">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/services">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/services">
            Pricing
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/services">
            Contact
          </Link>
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
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
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
