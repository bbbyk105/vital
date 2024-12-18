"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavItem } from "@/types";

interface HeaderProps {
  items: NavItem[];
}

export default function Header({ items }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[50] transition-all duration-300 
      ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-lg py-2"
          : "bg-white/50 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="relative z-[60] flex items-center space-x-2"
          >
            <Image
              src="/logo.png"
              alt="Company Logo"
              width={120}
              height={40}
              priority
              className="transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {items?.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-300
                  hover:text-blue-600 group"
              >
                {item.title}
                <span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 
                  transition-transform duration-300 group-hover:scale-x-100"
                />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-[60] w-10 h-10 flex items-center justify-center"
            aria-label="メニューを開く"
          >
            <div className="relative flex flex-col items-center justify-center w-6 h-6">
              <span
                className={`absolute w-6 h-0.5 bg-gray-600 transform transition-all duration-300 ease-in-out
                ${isOpen ? "rotate-45" : "-translate-y-2"}`}
              />
              <span
                className={`absolute w-6 h-0.5 bg-gray-600 transform transition-all duration-300 ease-in-out
                ${isOpen ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute w-6 h-0.5 bg-gray-600 transform transition-all duration-300 ease-in-out
                ${isOpen ? "-rotate-45" : "translate-y-2"}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 z-[55] bg-white transition-transform duration-300 lg:hidden
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-screen pt-20 px-6 pb-8 overflow-y-auto bg-white">
          <nav className="flex flex-col items-center justify-start flex-1 space-y-6">
            {items?.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3 text-lg font-medium text-gray-800 
                  transition-colors duration-300 hover:text-blue-600
                  border-b border-gray-100 last:border-none"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
