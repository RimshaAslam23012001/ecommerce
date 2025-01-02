import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black to-slate-700 py-8 px-4 text-white">
      {/* Navigation Links */}
      <nav className="flex flex-wrap justify-center gap-8 mb-8 text-lg font-medium">
        <Link href={"#"} className="hover:text-cyan-500 text-amber-500">
          Home
        </Link>
        <Link href={"#"} className="hover:text-cyan-500 text-amber-500">
          About
        </Link>
        <Link href={"/Delivery"} className="hover:text-cyan-500 text-amber-500">
          Delivery
        </Link>
        <Link href={"/FAQ"} className="hover:text-cyan-500 text-amber-500">
          FAQ
        </Link>
      </nav>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 mb-8">
        <Link
          href={"https://facebook.com"}
          target="_blank"
          rel="nofollow noopener"
          aria-label="Facebook"
        >
          <Image
            src="https://img.icons8.com/fluent/50/000000/facebook-new.png"  // Increased size to 50px
            alt="Facebook Icon"
            width={50}
            height={50}
            className="transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </Link>
        <Link
          href={"https://linkedin.com"}
          target="_blank"
          rel="nofollow noopener"
          aria-label="LinkedIn"
        >
          <Image
            src="https://img.icons8.com/fluent/50/000000/linkedin-2.png"  // Increased size to 50px
            alt="LinkedIn Icon"
            width={50}
            height={50}
            className="transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </Link>
        <Link
          href={"https://twitter.com"}
          target="_blank"
          rel="nofollow noopener"
          aria-label="Twitter"
        >
          <Image
            src="https://img.icons8.com/fluent/50/000000/twitter.png"  // Increased size to 50px
            alt="Twitter Icon"
            width={50}
            height={50}
            className="transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </Link>
        <Link
          href={"https://instagram.com"}
          target="_blank"
          rel="nofollow noopener"
          aria-label="Instagram"
        >
          <Image
            src="https://img.icons8.com/fluent/50/000000/instagram-new.png"  // Increased size to 50px
            alt="Instagram Icon"
            width={50}
            height={50}
            className="transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </Link>
      </div>

      {/* Copyright */}
      <p className="text-center text-sm text-amber-400 hover:text-cyan-600">
        &copy; 2024 Rimsha Aslam. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
