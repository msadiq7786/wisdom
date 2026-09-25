import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="px-6 py-8 md:px-16 lg:px-24 xl:px-32"
      aria-labelledby="about-heading"
    >
      <span className="sr-only">
        About Wisdom School: Wisdom School is located at 11th Cross, Kesare,
        Rajendranagar, Mysuru, Karnataka. The school provides education from
        Grade 1 to Grade 7 with a focus on academics, Islamic values, character
        development, discipline, and holistic growth.
      </span>

      <div className="flex flex-col flex-wrap-reverse items-center gap-12 md:flex-row">
        <div className="flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:justify-between md:text-left lg:grow">
          <h2
            id="about-heading"
            className="text-primary mb-4 text-2xl font-semibold tracking-tight uppercase sm:text-3xl"
          >
            About Wisdom School
          </h2>

          <p className="text-justify leading-relaxed">
            Wisdom School is an Islamic values-based school serving students
            from Grade 1 to Grade 7 in Kesare, Rajendranagar, Mysuru. We believe
            that education is not only about academic achievement but also about
            developing good character, discipline, confidence, responsibility,
            and respect for others.
          </p>
          <p className="mt-3 text-justify leading-relaxed">
            Our learning environment encourages children to ask questions,
            discover their abilities, develop strong foundational skills, and
            grow into responsible individuals. Alongside academic learning, we
            nurture Islamic values and positive habits that help students make
            thoughtful and responsible choices in everyday life.
          </p>
          <p className="mt-3 text-justify leading-relaxed">
            With the support of teachers, parents, and the wider school
            community, we strive to provide children with a meaningful and
            well-rounded educational experience.
          </p>
        </div>
        <div className="hidden w-3/5 p-4 md:block md:w-2/5 lg:w-1/2 xl:max-w-sm">
          <Image
            width={400}
            height={400}
            className="h-auto w-full object-cover object-center"
            alt="Students learning together at Wisdom School, Kesare, Rajendranagar, Mysuru"
            src="https://res.cloudinary.com/udm8np99/image/upload/v1790186390/IMG_9295_website.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
