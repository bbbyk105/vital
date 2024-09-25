import React, { ReactNode } from 'react'
import Link from "next/link";
import Image from "next/image"; // Imageコンポーネントの追加
import { NavItem } from '@/types';

interface MainNavProps {
    items: NavItem[];
    children?: ReactNode;
  }
  
  export default function MainNav({ items }: MainNavProps) {

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 ">
          <div className="container mx-auto flex items-center justify-between py-4 px-6">
            <div className="logo">
              <Image
                src="/logo.jpg"
                alt="Company Logo"
                width={120}
                height={40}
                priority={true}
              />
            </div>
            <nav>
              <ul className="flex gap-6">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="#About">About</Link>
                </li>
                <li>
                  <Link href="/recruit">Recruit</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
  )
}