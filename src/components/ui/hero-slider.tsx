"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const SLIDE_IMAGES = [
  {
    src: "https://res.cloudinary.com/udm8np99/image/upload/v1790153869/ChatGPT_Image_Sep_23_2026_02_13_01_PM.png",
    alt: "Students participating in a school activity at Wisdom School",
  },
  {
    src: "https://res.cloudinary.com/udm8np99/image/upload/v1790186053/school_gallery_01.jpg",
    alt: "Students gathered for a school event at Wisdom School",
  },
  {
    src: "https://res.cloudinary.com/udm8np99/image/upload/v1790186595/IMG_9297_website.jpg",
    alt: "Children learning together at Wisdom School, Mysuru",
  },
  {
    src: "https://res.cloudinary.com/udm8np99/image/upload/v1790186715/IMG_9294_website.jpg",
    alt: "Students at Wisdom School, Kesare, Rajendranagar, Mysuru",
  },
];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);
  const LIMIT = SLIDE_IMAGES.length - 1;

  const goToPrevious = () => {
    setIndex((prevIndex) => (prevIndex <= 0 ? LIMIT : prevIndex - 1));
  };

  const goToNext = () => {
    setIndex((prevIndex) => (prevIndex >= LIMIT ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const sliderIntervalId = setInterval(goToNext, 5000);

    return () => clearInterval(sliderIntervalId);
  }, [LIMIT]);

  return (
    <section
      className="relative h-[65svh] min-h-120 w-full overflow-hidden"
      aria-label="Welcome to Wisdom School"
    >
      {/* SR-only contextual description */}
      <span className="sr-only">
        Welcome to Wisdom School in Kesare, Rajendranagar, Mysuru. Wisdom School
        provides education for students from Grade 1 to Grade 7, combining
        academic learning with Islamic values, character development,
        discipline, confidence, and personal growth.
      </span>

      {/* Slides */}
      {SLIDE_IMAGES.map((slide, i) => (
        <Image
          key={`${slide.src}-${i}`}
          src={slide.src}
          alt={slide.alt}
          fill
          priority={i === 0}
          sizes="100vw"
          className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-in-out ${
            i === index
              ? "translate-x-0"
              : i < index
                ? "-translate-x-full"
                : "translate-x-full"
          }`}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-black/40" />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex items-center px-6 md:px-12 lg:px-20 xl:px-28">
        <div className="max-w-3xl text-white">
          <p className="mb-2 text-base font-light tracking-wide italic sm:text-lg md:text-xl">
            Welcome to Wisdom School
          </p>

          <h1 className="text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Building Knowledge,
            <span className="mt-1 block text-[#f2f6ff] drop-shadow-[0_2px_0_rgba(14,94,183,0.65)]">
              Character &amp; Confidence
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-sm font-medium sm:text-base md:text-lg">
            Providing children from Grades 1 to 7 with a strong academic
            foundation, Islamic values, good character, and a supportive
            environment to learn and grow.
          </p>

          <p className="mt-2 text-xs font-light opacity-90 sm:text-sm">
            Kesare, Rajendranagar, Mysuru, Karnataka
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-sm px-5 py-2.5 font-semibold transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Previous Button */}
      <button
        type="button"
        onClick={goToPrevious}
        aria-label="Previous slide"
        className="bg-accent/80 text-accent-foreground hover:bg-accent absolute top-1/2 left-4 z-30 -translate-y-1/2 p-1.5 transition-colors md:left-6 md:p-2"
      >
        <ChevronLeft className="size-5 md:size-6" />
      </button>

      {/* Next Button */}
      <button
        type="button"
        onClick={goToNext}
        aria-label="Next slide"
        className="bg-accent/80 text-accent-foreground hover:bg-accent absolute top-1/2 right-4 z-30 -translate-y-1/2 p-1.5 transition-colors md:right-6 md:p-2"
      >
        <ChevronRight className="size-5 md:size-6" />
      </button>

      {/* Slide indicators */}
      <div
        className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 gap-2"
        role="tablist"
        aria-label="Slide navigation"
      >
        {SLIDE_IMAGES.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-white" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
