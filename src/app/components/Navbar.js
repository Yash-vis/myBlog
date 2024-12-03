"use client";

import React, { useState } from "react";
import Link from "next/link";
import FollowBtn from "./FollowBtn";
import { useSession } from "next-auth/react";
import UnFollowBtn from "./UnFollowBtn";

const Navbar = ({ className }) => {
  const { status, data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 text-white p-4 z-10 ${className}`}>
      <div className="flex justify-between items-center">
        <div>
          <h4>My Logo</h4>
        </div>

        <div className="hidden md:flex">
          <ul className="flex gap-6">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/post">Post</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>

        <div className="hidden md:flex items-center">
          {status === "authenticated" ? <UnFollowBtn /> : <FollowBtn />}
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/post">Post</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>

          <div className="mt-4">
            {status === "authenticated" ? <UnFollowBtn /> : <FollowBtn />}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
