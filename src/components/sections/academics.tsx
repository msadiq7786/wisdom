import { BookOpen, Globe, Star } from "lucide-react";

const Academics = () => {
  return (
    <section
      id="academics"
      className="px-6 py-16 md:px-16 lg:px-24 xl:px-32"
      aria-labelledby="academics-heading"
    >
      <span className="sr-only">
        Wisdom School provides education from Grade 1 through Grade 7 with a
        focus on academic foundations, communication, creativity, independent
        thinking, and Islamic values.
      </span>

      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2
          id="academics-heading"
          className="text-primary mb-4 text-3xl font-medium sm:text-4xl"
        >
          Learning at Wisdom School
        </h2>
        <p className="leading-relaxed">
          Our academic approach focuses on building strong foundations while
          encouraging curiosity, understanding, communication, creativity, and
          independent thinking.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 max-w-5xl mx-auto">
        {/* Grades 1-7 */}
        <div className="bg-muted rounded-sm p-6 flex flex-col items-center text-center gap-3">
          <div className="bg-primary text-primary-foreground flex size-14 items-center justify-center rounded-full">
            <BookOpen className="size-6" aria-hidden="true" />
          </div>
          <h3 className="text-primary text-lg font-semibold">Grades 1-7</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Age-appropriate learning designed to help children develop essential
            academic knowledge and skills across all year groups.
          </p>
        </div>

        {/* Learning Beyond Textbooks */}
        <div className="bg-muted rounded-sm p-6 flex flex-col items-center text-center gap-3">
          <div className="bg-primary text-primary-foreground flex size-14 items-center justify-center rounded-full">
            <Globe className="size-6" aria-hidden="true" />
          </div>
          <h3 className="text-primary text-lg font-semibold">
            Learning Beyond Textbooks
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            We encourage children to explore ideas, participate in activities,
            communicate confidently, and connect classroom learning with everyday
            life.
          </p>
        </div>

        {/* Values-Based Education */}
        <div className="bg-muted rounded-sm p-6 flex flex-col items-center text-center gap-3">
          <div className="bg-primary text-primary-foreground flex size-14 items-center justify-center rounded-full">
            <Star className="size-6" aria-hidden="true" />
          </div>
          <h3 className="text-primary text-lg font-semibold">
            Values-Based Education
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Academic learning is supported by Islamic values, good manners,
            discipline, responsibility, and respect for others.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Academics;
