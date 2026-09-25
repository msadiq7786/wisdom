import Link from "next/link";

const AdmissionsCta = () => {
  return (
    <section
      className="bg-primary text-primary-foreground px-6 py-16 md:px-16 lg:px-24 xl:px-32"
      aria-labelledby="admissions-heading"
    >
      <span className="sr-only">
        Admissions are open for students from Grade 1 to Grade 7. Contact Wisdom
        School in Kesare, Rajendranagar, Mysuru to learn about the admission
        process.
      </span>

      <div className="mx-auto max-w-3xl text-center">
        <h2
          id="admissions-heading"
          className="mb-4 text-3xl font-semibold sm:text-4xl"
        >
          Admissions Open for Grades 1-7
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed opacity-90">
          Looking for a supportive school environment that combines academic
          learning with Islamic values and character development? Get in touch
          with Wisdom School to learn more about admissions for Grades 1 to 7.
        </p>

        <p className="mb-2 text-sm opacity-80">
          Families in Kesare and nearby areas can contact Wisdom School to learn
          more about admissions for Grades 1-7.
        </p>

        <div className="mt-6 flex justify-center">
          <Link
            href="/contact"
            className="bg-accent text-accent-foreground hover:bg-accent/90 inline-flex items-center gap-2 rounded-sm px-6 py-3 text-sm font-semibold transition-colors"
            aria-label="Contact Wisdom School"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsCta;
