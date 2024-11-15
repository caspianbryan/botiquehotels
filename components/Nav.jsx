"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { id: 1, href: "/Europe", label: "Europe" },
  { id: 2, href: "/Asia", label: "Asia" },
  { id: 3, href: "/Americas", label: "Americas" },
  { id: 4, href: "/Oceania", label: "Oceania" },
  { id: 5, href: "/Themes", label: "Themes" },
  { id: 6, href: "/Journal", label: "Journal" },
];

const Nav = () => {
  const [isPopup, setIsPopup] = useState(false);
  const [showNav, setShowNav] = useState(true); // State to control the nav visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Track the last scroll position

  const togglePlaces = () => {
    setIsPopup(!isPopup);
  };

  // Handle scrolling
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // User is scrolling down
        setShowNav(false);
      } else {
        // User is scrolling up
        setShowNav(true);
      }

      setLastScrollY(currentScrollY); // Update the last scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`m-4 md:mx-5 lg:mx-20 transition-transform duration-500 ${showNav ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="flex justify-between">
        <Image
          src="/images/32.jpg"
          width={25}
          height={25}
          alt="Nav elements"
          onClick={togglePlaces}
        />
        <Link href="/">
          <h1 className="font-bold text-xl">Boutique Hotels</h1>
        </Link>
        <Image
          src="/images/22.jpg"
          width={25}
          height={25}
          alt="Instagram"
        />
      </div>
      <div className="">
        <ul className="hidden md:flex items-center justify-center space-x-10 p-2">
          {navLinks.map((nav) => (
            <Link href={nav.href} key={nav.id}>
              <li className="hover:underline text-xs">
                <div className="flex items-center space-x-2">
                  {nav.label}
                  <Image
                    src="/images/31.jpg"
                    height={10}
                    width={15}
                    alt="icon"
                  />
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      {isPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex">
          <div
            className="bg-white w-full md:w-1/3 h-full transform transition-transform duration-1000 ease-in-out translate-x-0"
            style={{ transform: isPopup ? `translateX(0)` : `translateX(-100%)` }}
          >
            <button
              onClick={togglePlaces}
              className="absolute top-4 right-4 text-green-600 font-bold"
            >
              <Image
                src="/images/close.jpg"
                width={30}
                height={30}
                alt="Instagram"
              />
            </button>
            <ul className="space-y-4 p-6 text-center mt-10">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={togglePlaces}
                    className="hover:underline font-medium text-xl"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
