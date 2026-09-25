import { BookOpen, HeartHandshake, Lightbulb, Users } from "lucide-react";

const WhyUs = () => {
  return (
    <section
      className="bg-muted px-6 py-16 md:px-16 lg:px-24 xl:px-32"
      aria-labelledby="why-us-heading"
    >
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2
          id="why-us-heading"
          className="mb-4 text-3xl font-medium sm:text-4xl"
        >
          Why Choose Wisdom School?
        </h2>

        <p className="leading-relaxed">
          A supportive environment where children learn, grow, and build strong
          values.
        </p>
      </div>

      <div className="grid grid-cols-1 justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Academic Foundation */}
        <div className="flex max-w-80 flex-col items-center text-center">
          <div className="bg-primary text-primary-foreground flex size-20 items-center justify-center rounded-full">
            <BookOpen className="size-8" />
          </div>

          <div className="mt-5 space-y-2">
            <h3 className="text-accent text-lg font-semibold">
              Academic Foundation
            </h3>
            <p className="text-muted-foreground text-sm">
              Building strong concepts, skills, and confidence for learning.
            </p>
          </div>
        </div>

        {/* Islamic Values */}
        <div className="flex max-w-80 flex-col items-center text-center">
          <div className="bg-primary text-primary-foreground flex size-20 items-center justify-center rounded-full">
            <HeartHandshake className="size-8" />
          </div>

          <div className="mt-5 space-y-2">
            <h3 className="text-accent text-lg font-semibold">
              Islamic Values
            </h3>
            <p className="text-muted-foreground text-sm">
              Nurturing honesty, respect, kindness, and good character.
            </p>
          </div>
        </div>

        {/* Holistic Development */}
        <div className="flex max-w-80 flex-col items-center text-center">
          <div className="bg-primary text-primary-foreground flex size-20 items-center justify-center rounded-full">
            <Lightbulb className="size-8" />
          </div>

          <div className="mt-5 space-y-2">
            <h3 className="text-accent text-lg font-semibold">
              Holistic Development
            </h3>
            <p className="text-muted-foreground text-sm">
              Supporting academic, social, creative, and personal growth.
            </p>
          </div>
        </div>

        {/* Supportive Environment */}
        <div className="flex max-w-80 flex-col items-center text-center">
          <div className="bg-primary text-primary-foreground flex size-20 items-center justify-center rounded-full">
            <Users className="size-8" />
          </div>

          <div className="mt-5 space-y-2">
            <h3 className="text-accent text-lg font-semibold">
              Supportive Environment
            </h3>
            <p className="text-muted-foreground text-sm">
              Helping children learn with confidence in a welcoming environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
