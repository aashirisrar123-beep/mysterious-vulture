
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Navbar() {
  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#menu", label: "Menu" },
    { href: "#reservations", label: "Reservations" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-4 py-2 bg-white shadow-sm dark:bg-gray-900">
      <div className="flex items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Menu className="h-6 w-6 mr-4 cursor-pointer md:hidden" />
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px] pt-10">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <SheetClose key={item.href} asChild>
                  <Link
                    href={item.href}
                    className="text-lg font-medium hover:text-primary transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <Link href="#home" className="text-2xl font-bold text-primary [London Eatery]">
          [London Eatery]
        </Link>
      </div>
      <div className="hidden md:flex items-center gap-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-sm font-medium hover:text-primary transition-colors duration-200"
          >
            {item.label}
          </Link>
        ))}
        <Button variant="outline" className="ml-4">
          Book a Table
        </Button>
      </div>
    </nav>
  );
}
