import { ArrowRight } from "lucide-react";
import GalleryCard from "../ui/gallery-card";
import Link from "next/link";
import GALLERIES from "../../data/galleries";

const Gallery = () => {
  return (
    <section
      className="flex flex-col items-center space-y-4 px-6 py-16 md:px-16 lg:px-24 xl:px-32"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2
          id="gallery-heading"
          className="mb-4 text-3xl font-medium sm:text-4xl"
        >
          Our School Gallery
        </h2>
        <span className="sr-only">
          View photographs showing school activities, students, learning,
          celebrations, and other moments from the Wisdom School community.
        </span>
        <p className="leading-relaxed">
          Take a glimpse into the learning, activities, celebrations, and
          memorable moments that make our school community special.
        </p>
      </div>
      {/* Gallery */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        {Object.entries(GALLERIES)
          .slice(0, 8)
          .map(([key, value]) => (
            <GalleryCard
              key={key}
              {...value}
              href={key}
              image={value.images[0]}
            />
          ))}
      </div>
      <Link
        href="/gallery"
        className="text-accent/80 hover:text-accent inline-flex items-center gap-1 font-medium transition-opacity"
        aria-label="View all school gallery albums"
      >
        View All Photos
        <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
    </section>
  );
};

export default Gallery;
