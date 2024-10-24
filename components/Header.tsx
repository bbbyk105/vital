'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image"; 
import { NavItem } from "@/types";

interface HeaderProps {
  items: NavItem[];
}

export default function Header({ items }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden flex flex-col items-center bg-white shadow-lg">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-lg py-2 font-medium hover:text-blue-700"
            >
              {item.title}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
