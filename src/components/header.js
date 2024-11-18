// components/Header.js
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Disable scroll when the mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <div className="fixed top-0 left-0 w-full z-20 flex items-center justify-between px-2 py-4 bg-transparent text-white md:mix-blend-exclusion">
      {/* Desktop Menu Links (displayed inline on desktop only) */}
      <div className="md:flex md:w-full md:justify-between md:text-lg hidden">
        <Link href="/">Andrea Gatti</Link>
        <Link href="/about">About</Link>
        <Link href="/works">Works</Link>
        <a href="mailto:gattiandrea@tutanota.com">Contacts</a>
      </div>

      {/* Mobile Menu Toggle Button (visible on mobile only, floated right) */}
      <button
        className="focus:outline-none md:hidden z-30 ml-auto"
        onClick={toggleMenu}
      >
        {isMenuOpen ? "Close" : "Menu"}
      </button>

      {/* Fullscreen Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center text-center text-5xl space-y-10 z-20 md:hidden">
            <ul className="space-y-6 uppercase">
              <li>
                <Link href="/" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={toggleMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/works" onClick={toggleMenu}>
                  Works
                </Link>
              </li>
              <li>
                <a href="mailto:gattiandrea@tutanota.com" onClick={toggleMenu}>
                  Contacts
                </a>
              </li>
            </ul>
        </div>
      )}
    </div>
  );
}
