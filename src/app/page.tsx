"use client";

import { motion } from "motion/react";

import HeroSlider from "@/components/ui/hero-slider";
import About from "@/components/sections/about";
import Feature from "@/components/sections/feature";
import Gallery from "@/components/sections/gallery";
import Location from "@/components/sections/location";
import WhyUs from "@/components/sections/why-us";
import Academics from "@/components/sections/academics";
import AdmissionsCta from "@/components/sections/admissions-cta";
import GoToTop from "@/components/ui/go-to-top";
import Members from "./members/page";

const sections = [
  About,
  Feature,
  WhyUs,
  Academics,
  Members,
  Gallery,
  Location,
  AdmissionsCta,
];

const heroVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
} as const;

const sectionVariants = [
  {
    hidden: { opacity: 0, y: 28, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  },
  {
    hidden: { opacity: 0, x: -18 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  },
  {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
] as const;

function Home() {
  return (
    <div>
      <motion.div variants={heroVariant} initial="hidden" animate="visible">
        <HeroSlider />
      </motion.div>

      {sections.map((Section, index) => {
        const variant = sectionVariants[index % sectionVariants.length];

        return (
          <motion.div
            key={index}
            variants={variant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <Section />
          </motion.div>
        );
      })}

      <GoToTop />
    </div>
  );
}

export default Home;
