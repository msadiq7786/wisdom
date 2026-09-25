import GalleryCard from "@/components/ui/gallery-card";
import GALLERIES from "@/data/galleries";

function GalleryPage() {
  return (
    <div className="bg-background space-y-6 px-6 py-6 md:px-16 lg:px-24 xl:px-32">
      <h1 className="text-primary text-4xl font-bold">Gallery</h1>
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
    </div>
  );
}

export default GalleryPage;
