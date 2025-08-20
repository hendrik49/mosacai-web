'use client'

import { PhoneCarousel } from "@/app/components/phone-carousel";
import Button from "@/app/components/ui/button";
import { cn } from "@/lib/utils";
import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import FloatingCard, { FloatingCardTestimonial } from "./components/floating-card";

export default function HomePage() {
  const PhoneRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Navbar />
      <div className="px-5">
        {/* Blur ellipse */}
        <div
          className="fixed top-[-650px] left-[118.38px] z-[-1] w-[810px] h-[906px] rounded-full blur-2xl"
          style={{
            background: "radial-gradient(circle at center, #7A5EA8, #000000)",
          }}
        />


        <div className="max-w-[540px] mx-auto flex flex-col items-center">
          <h1 className="text-[48px] text-center leading-tight mt-8">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.7) 100%)"
              }}
            >
              UI/UX driven mobile development agency
            </span>{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(86.48deg, #A594FD 42.22%, #EB8BF7 70.67%)"
              }}
            >
              We are PGV.
            </span>
          </h1>
          <p className="text-center text-[#EFEDFDB2] mt-4">
            Crafting top-notch mobile and web solutions that prioritise an exceptional user experience and stunning UI, all powered by the latest trends & technologies.
          </p>
          <Button variant="secondary" className="mt-5 w-fit">Learn more</Button>
        </div>

        <FloatingCard />

        <FloatingCardTestimonial />

        <PhoneCarousel className="my-10 mx-auto" />
      </div>
    </>
  )
}

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "AI", href: "/ai" },
  { name: "Contact", href: "/contact" },
];

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // set initial value on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

function Navbar() {
  const path = usePathname()
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 flex items-center py-[26px] px-5 backdrop-blur-xl">
        {/* Left: Logo */}
        <div className="flex-1">
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/images/logo.png"
              alt="Mosaic AI Logo"
              className="h-8 w-auto"
            />
          </Link>
        </div>

        {/* Center: Nav Items */}
        <ul className="hidden lg:flex gap-x-4 border border-white/20 rounded-full py-[11px] px-[13px] bg-white/20 backdrop-blur-xl">
          {navItems.map((item) => (
            <li key={item.name} className="px-3">
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* Right: Button */}
        <div className="flex-1 flex justify-end gap-x-3">
          <Button>Work with us</Button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex items-center space-x-2"
          >
            {
              isOpen ? (
                <XIcon className="w-8 h-8" />
              ) : (
                <MenuIcon className="w-8 h-8" />
              )
            }
          </button>
        </div>



        {/* div as a border with blur effect */}
        <div className="absolute left-0 bottom-0 z-[-1] w-[100%] h-[1px] rounded-full"
          style={{
            background: "radial-gradient(circle at center, #FFFFFF1F, #00000000)",
          }}
        />
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: "0%" }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{
              duration: 0.4,
              ease: [0.25, 1, 0.5, 1],
            }}
            className="fixed left-0 right-0 z-50 bg-[#00000080] backdrop-blur-xl h-full"
          >
            <ul className="flex flex-col gap-1 py-4 px-5">
              {navItems.map((item) => (
                <React.Fragment key={item.name}>
                  <li
                    className={cn(
                      "px-3 py-3",
                      path === item.href &&
                      "bg-gradient-to-r from-white/10 to-transparent border-l"
                    )}
                  >
                    <Link href={item.href}>{item.name}</Link>
                  </li>

                  {/* Gradient divider */}
                  <div
                    className="z-[-1] w-[100%] h-[1px] rounded-full last:hidden"
                    style={{
                      background:
                        "radial-gradient(circle at center, #FFFFFF1F, #00000000)",
                    }}
                  />
                </React.Fragment>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
