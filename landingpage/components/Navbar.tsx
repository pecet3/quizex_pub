"use client";
import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { useInView } from "react-intersection-observer";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { links } from "@/links";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  const [ref, inView] = useInView();

  useEffect(() => {
    setTimeout(() => {
      const y = scrollY.get();
      if (y > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }, 50);
  }, [inView]);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const path = usePathname();
  const isHomePage = path === "/";

  return (
    <>
      <motion.nav
        className={`bg-black w-full py-4 sm:py-6 px-2 md:px-8
             lg:px-10 fixed top-0 z-50 flex items-center
                transition-all duration-300 text-xl justify-between ${
                  isVisible && !isMenuOpen
                    ? "bg-opacity-15 backdrop-blur-lg"
                    : "bg-opacity-0"
                }
       `}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          {!isHomePage ? (
            <Logo />
          ) : (
            <div className="opacity-0">
              <Logo />
            </div>
          )}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="hidden md:flex gap-2 sm:gap-4  items-center font-extralight tracking-widest"
        >
          <Link href="/about">About</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href={links.app}>Dashboard</Link>
        </motion.div>

        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-black text-2xl focus:outline-none"
          >
            {isMenuOpen ? <FiX size={32} /> : <FiMenu size={32} />}{" "}
          </button>
        </div>
      </motion.nav>

      {isMenuOpen && (
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ height: 0 }}
          transition={{ duration: 0.5 }}
          className="md:hidden text-2xl font-ibm-plex backdrop-blur-md bg-black bg-opacity-15 
          w-full fixed top-0 z-40 py-8 pt-16 px-6"
        >
          <div className="flex flex-col items-center space-y-4">
            <Link href="/about" onClick={toggleMenu}>
              About
            </Link>
            <Link href="/pricing" onClick={toggleMenu}>
              Pricing
            </Link>
            <Link href={links.app} onClick={toggleMenu}>
              Dashboard
            </Link>
          </div>
        </motion.div>
      )}
      <div ref={ref}></div>
    </>
  );
};
