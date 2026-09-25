import GALLERIES from "@/data/galleries";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface PageProps {
  params: Promise<{ id: string }>;
}

const EventGallery = async ({ params }: PageProps) => {
  const { id } = await params;

  const EVENT = GALLERIES[id];

  return (
    <div className="bg-muted/50 space-y-6 px-6 py-6 md:px-16 lg:px-24 xl:px-32">
      <header className="text-primary">
        <h1 className="text-4xl font-bold tracking-tight">{EVENT.title}</h1>
        <div className="text-accent mt-2 flex flex-wrap items-center space-x-1 text-sm font-medium">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <ChevronRight />
          <Link href="/gallery" className="hover:underline">
            Gallery
          </Link>
          <ChevronRight />
          <span className="text-primary">{EVENT.title}</span>
        </div>
      </header>
      <p className="text-md text-justify leading-7">{EVENT.description}</p>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {EVENT.images.map((item, idx) => (
          <div
            key={`${EVENT.title}-${idx}`}
            className="overflow-hidden shadow-lg"
          >
            <div className="relative aspect-4/3 w-full">
              <Image
                src={item}
                alt={`${EVENT.title} Image ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventGallery;
