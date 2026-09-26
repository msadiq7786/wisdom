"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useRef, useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { Menu, X } from "lucide-react";
import Banner from "../ui/banner";
import { motion } from "motion/react";
import { NAVIGATION } from "@/data/navigation";
import SCHOOL_CONTACT from "@/data/contact";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const pathname = usePathname();

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        toggleRef.current &&
        !toggleRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <motion.header
      className="bg-background"
      initial={{
        y: -50,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}

      transition={{
        duration: 0.3,
      }}
    >
      {/* Announcement Bar */}
      <Banner />

      {/* Main Header */}
      <div className="border-border border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8 lg:px-10">
          {/* School Identity */}
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label="Wisdom School Home"
          >
            <Image
              src="/images/logo/logo.png"
              alt="Wisdom School Logo"
              width={150}
              height={120}
              priority
              className="h-16 w-auto object-contain sm:h-17.5"
            />

            <div className="border-border border-l pl-3">
              <p className="text-primary text-lg leading-tight font-bold sm:text-xl">
                Wisdom Nursery and Primary School
              </p>

              <p className="text-muted-foreground mt-1 text-xs sm:text-sm">
                Knowledge • Character • Excellence
              </p>
            </div>
          </Link>

          {/* Desktop Contact */}
          <div className="hidden items-center gap-3 md:flex">
            <motion.div
              animate={{
                y: [0, -3, 0],
              }}
              transition={{
                duration: 2.2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="bg-primary text-primary-foreground relative flex size-10 items-center justify-center rounded-full"
            >
              <FaPhone size={15} />

              <span className="bg-primary left-3. absolute -bottom-1 size-3 rotate-45 shadow-lg" />
            </motion.div>

            <div className="flex flex-col">
              <span className="text-muted-foreground text-[11px] font-medium tracking-wider uppercase">
                Call Us
              </span>

              <div className="flex items-center gap-3 text-sm font-semibold">
                {SCHOOL_CONTACT.phones.map((phone, index) => (
                  <Fragment key={phone.href}>
                    {index > 0 && <span className="text-border">|</span>}
                    <a
                      href={phone.href}
                      className="text-primary hover:text-accent transition-colors"
                    >
                      {phone.value}
                    </a>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            className="text-primary border-border hover:bg-muted flex size-10 items-center justify-center rounded-md border transition-colors sm:hidden"
          >
            <motion.span
              animate={{ rotate: open ? 180 : 0, scale: open ? 1.05 : 1 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </motion.span>
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav
        className="bg-primary border-primary-foreground/10 relative z-40 border-b"
        aria-label="Main navigation"
      >
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
          {/* Desktop Navigation */}
          <div className="hidden h-11 items-center justify-center sm:flex">
            {NAVIGATION.map((path) => {
              const isActive = path.href === pathname;

              return (
                <Link
                  key={path.href}
                  href={path.href}
                  className={`relative flex h-full min-w-25 items-center justify-center px-6 text-sm uppercase transition-colors ${
                    isActive
                      ? "bg-accent text-accent-foreground"
                      : "text-primary-foreground hover:bg-primary-foreground/10"
                  }`}
                >
                  {path.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Navigation */}
          <motion.div
            ref={menuRef}
            initial={false}
            aria-hidden={!open}
            animate={
              open
                ? { opacity: 1, height: "auto", y: 0 }
                : { opacity: 0, height: 0, y: -8 }
            }
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="pointer-events-none absolute top-full left-0 z-50 w-full overflow-hidden bg-white shadow-lg sm:hidden"
            style={{ pointerEvents: open ? "auto" : "none" }}
          >
            <div className="flex flex-col">
              {NAVIGATION.map((path) => {
                const isActive = path.href === pathname;

                return (
                  <Link
                    key={path.href}
                    href={path.href}
                    onClick={() => setOpen(false)}
                    className={`border-border flex items-center justify-between border-b px-6 py-3.5 text-sm font-medium transition-colors last:border-0 ${
                      isActive
                        ? "bg-accent text-accent-foreground"
                        : "text-primary hover:bg-muted"
                    }`}
                  >
                    {path.label}

                    {isActive && (
                      <span className="size-1.5 rounded-full bg-current" />
                    )}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
