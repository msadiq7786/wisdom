import SCHOOL_CONTACT from "@/data/contact";

const Location = () => {
  return (
    <section
      className="bg-muted px-6 py-16 md:px-16 lg:px-24 xl:px-32"
      aria-labelledby="location-heading"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-primary mb-2 text-sm font-semibold tracking-wide uppercase">
            Find Us
          </p>

          <h2
            id="location-heading"
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Visit Wisdom School
          </h2>

          <p className="text-muted-foreground mt-4 leading-relaxed">
            We welcome parents and families to visit our school and learn more
            about our learning environment, academics, facilities, and
            admissions.
          </p>
        </div>
        <address className="text-muted-foreground text-md text-center leading-6">
          <strong className="text-foreground">Wisdom School - </strong>
          11th Cross, Kesare Rajendranagar, Mysuru Karnataka, India
        </address>
        <div className="border-border h-80 overflow-hidden rounded-lg border sm:h-100 lg:h-105">
          <iframe
            src={SCHOOL_CONTACT.mapEmbedUrl}
            title="Map showing the location of Wisdom School in Kesare, Rajendranagar, Mysuru"
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </section>
  );
};

export default Location;
