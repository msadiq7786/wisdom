import MemberCard from "@/components/ui/member-card";
import { MEMBERS } from "@/data/members";

const Members = () => {
  return (
    <section
      className="bg-primary text-primary-foreground px-6 py-16 md:px-16 lg:px-24 xl:px-32"
      aria-labelledby="leadership-heading"
    >
      <span className="sr-only">
        School leadership at Wisdom School works with teachers and parents to
        support students&apos; academic learning, character development, and
        overall growth.
      </span>

      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2
          id="leadership-heading"
          className="title-font mb-4 text-3xl font-medium sm:text-4xl"
        >
          Meet Our School Leadership
        </h2>

        <p className="leading-relaxed">
          With a commitment to meaningful education and character development,
          our school leadership works together with teachers and parents to
          create a positive learning environment where every child is encouraged
          to learn, grow, and achieve their potential.
        </p>
      </div>

      <div className="flex justify-center">
        <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-4">
          {MEMBERS.map((member, idx) => (
            <MemberCard key={idx} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;
