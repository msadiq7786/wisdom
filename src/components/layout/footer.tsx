"use client";

import {
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaLocationDot,
  FaPhone,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import SCHOOL_CONTACT from "@/data/contact";
import { NAVIGATION } from "@/data/navigation";

const SOCIAL_ICONS = {
  github: FaGithub,
  whatsapp: FaWhatsapp,
  facebook: FaFacebookF,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  youtube: FaYoutube,
} as const;

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-slate-900/90 px-6 pt-14 text-white md:px-16 lg:px-24 xl:px-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 pb-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <Link href="/" className="inline-flex flex-col gap-3">
              <Image
                src="/images/logo/logo.png"
                alt="Wisdom School Logo"
                width={180}
                height={160}
                priority
                className="h-20 w-auto object-contain"
              />

              <span className="text-xl font-semibold text-white">
                {SCHOOL_CONTACT.schoolName}
              </span>
            </Link>

            <p className="mt-5 text-base leading-7 text-slate-300">
              Providing children from Grades 1–7 with meaningful education,
              Islamic values, strong character, and the confidence to grow.
            </p>

            <div className="mt-6 flex gap-3">
              {SCHOOL_CONTACT.socials.map(({ platform, label, href }) => {
                const Icon = SOCIAL_ICONS[platform];

                return (
                  <a
                    key={platform}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="hover:bg-primary rounded-md p-2 text-slate-300 transition-colors hover:text-white"
                  >
                    <Icon size={22} />
                  </a>
                );
              })}
            </div>
          </div>

          <nav
            className="flex flex-wrap items-center gap-x-8 gap-y-3 md:justify-end"
            aria-label="Footer navigation for Wisdom School"
          >
            {NAVIGATION.map((path, idx) => (
              <Link
                key={idx}
                href={path.href}
                className="hover:text-accent text-sm transition-colors"
              >
                {path.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="border-t border-white/15 py-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex items-start gap-3">
              <div className="bg-primary text-primary-foreground flex size-10 shrink-0 items-center justify-center rounded-md">
                <FaLocationDot size={18} />
              </div>

              <div>
                <h4 className="text-base font-semibold">Address</h4>
                <p className="mt-1 text-sm leading-6 text-slate-300">
                  {SCHOOL_CONTACT.address}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-primary text-primary-foreground flex size-10 shrink-0 items-center justify-center rounded-md">
                <FaPhone size={18} />
              </div>

              <div>
                <h4 className="text-base font-semibold">Phone</h4>
                <div className="mt-1 flex flex-col text-sm text-slate-300">
                  {SCHOOL_CONTACT.phones.map((phone) => (
                    <a
                      key={phone.href}
                      href={phone.href}
                      className="hover:text-blue-300"
                    >
                      {phone.value}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-primary text-primary-foreground flex size-10 shrink-0 items-center justify-center rounded-md">
                <FaEnvelope size={18} />
              </div>

              <div>
                <h4 className="text-base font-semibold">Email</h4>
                <a
                  href={`mailto:${SCHOOL_CONTACT.email}`}
                  className="mt-1 block text-sm text-slate-300 hover:text-blue-300"
                >
                  {SCHOOL_CONTACT.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/15 py-5">
            <p className="text-xs text-slate-300 text-center">
              © {new Date().getFullYear()} {SCHOOL_CONTACT.schoolName}. All
              rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
