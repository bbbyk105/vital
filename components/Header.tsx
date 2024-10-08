import React, { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image"; 
import { NavItem } from "@/types";

interface HeaderProps {
  items: NavItem[];
  children?: ReactNode;
}

export default function Header({ items }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 ">
      <div className="container mx-auto flex items-center justify-between py-3 px-6">
        <div className="logo">
          <Image
            src="/logo.jpg"
            alt="Company Logo"
            width={120}
            height={40}
            priority={true}
          />
        </div>
        <nav className="md:flex gap-6 hidden">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-lg sm:text-sm font-medium hover:text-blue-700"
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
