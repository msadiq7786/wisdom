import { Folder } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface GalleryProps {
  title: string;
  image: string;
  href: string;
}

const GalleryCard = ({ title, image, href }: GalleryProps) => {
  return (
    <Link
      href={`/gallery/${href}`}
      key={title}
      className="group flex flex-col bg-white shadow-md"
    >
      {/* Image Card */}
      <div className="relative aspect-4/3 flex-1 overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={1200}
          height={900}
          className="h-full w-full object-cover object-center"
        />

        <div className="bg-primary/40 absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Folder className="text-muted/80 size-12" />
        </div>
      </div>
      <h3 className="bg-primary text-primary-foreground px-4 py-2 text-base font-medium decoration-2 underline-offset-2 group-hover:underline">
        {title}
      </h3>
    </Link>
  );
};

export default GalleryCard;
