function About() {
  return (
    <main className="bg-background px-6 py-12 md:px-16 lg:px-24 xl:px-32">
      <div className="mx-auto max-w-5xl space-y-14">
        {/* Introduction */}
        <header className="max-w-3xl space-y-4">
          <h1 className="text-primary text-4xl font-bold md:text-5xl">
            About Wisdom School
          </h1>

          <p className="text-muted-foreground text-lg leading-relaxed">
            Wisdom Nursery and Primary School is an Islamic values-based school located in Kesare,
            Rajendranagar, Mysuru, providing education for students from Grade 1
            to Grade 7.
          </p>

          <p className="leading-relaxed">
            We believe that meaningful education helps children develop not only
            academically, but also as confident, responsible, respectful, and
            compassionate individuals.
          </p>
        </header>

        {/* Who We Are */}
        <section className="max-w-4xl space-y-4">
          <h2 className="text-primary text-2xl font-semibold md:text-3xl">
            Who We Are
          </h2>

          <p className="leading-relaxed">
            Wisdom School provides a supportive learning environment where
            children are encouraged to learn with curiosity, ask questions,
            discover their abilities, and develop confidence in themselves.
          </p>

          <p className="leading-relaxed">
            Our approach brings together academic learning and Islamic values,
            helping students understand the importance of knowledge, good
            character, discipline, honesty, respect, kindness, and
            responsibility.
          </p>

          <p className="leading-relaxed">
            We aim to create a school community where children feel welcomed,
            respected, and encouraged to become responsible members of their
            families and society.
          </p>
        </section>

        {/* Our Approach */}
        <section className="max-w-4xl space-y-4">
          <h2 className="text-primary text-2xl font-semibold md:text-3xl">
            Our Educational Approach
          </h2>

          <p className="leading-relaxed">
            Our educational approach focuses on developing strong academic
            foundations while encouraging children to think, communicate,
            explore, and learn independently.
          </p>

          <p className="leading-relaxed">
            We believe every child learns in their own way. Our teachers strive
            to provide guidance and encouragement that helps students understand
            concepts clearly and develop a positive attitude toward learning.
          </p>

          <p className="leading-relaxed">
            Beyond textbooks, we encourage participation, creativity,
            communication, teamwork, and activities that help children connect
            their learning with everyday life.
          </p>
        </section>

        {/* Values */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-primary text-2xl font-semibold md:text-3xl">
              Our Values
            </h2>

            <p className="leading-relaxed">
              Values are an important part of a child's education. We encourage
              students to develop habits and qualities that help them grow into
              responsible and considerate individuals.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Knowledge",
                description:
                  "Encouraging curiosity, understanding, and a love for learning.",
              },
              {
                title: "Respect",
                description:
                  "Teaching children to respect themselves, others, and their community.",
              },
              {
                title: "Discipline",
                description:
                  "Developing responsible habits and a positive approach to learning.",
              },
              {
                title: "Honesty",
                description:
                  "Encouraging truthfulness, integrity, and responsible choices.",
              },
              {
                title: "Kindness",
                description:
                  "Nurturing compassion, cooperation, and care for others.",
              },
              {
                title: "Responsibility",
                description:
                  "Helping students understand their responsibilities at school, home, and in society.",
              },
            ].map((value) => (
              <div key={value.title} className="bg-muted rounded-lg p-5">
                <h3 className="text-accent mb-2 font-semibold">
                  {value.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Islamic Values */}
        <section className="bg-muted rounded-xl p-6 md:p-8">
          <div className="max-w-4xl space-y-4">
            <h2 className="text-primary text-2xl font-semibold md:text-3xl">
              Islamic Values in Education
            </h2>

            <p className="leading-relaxed">
              At Wisdom School, Islamic values are an important part of our
              approach to education. We encourage children to develop good
              manners, honesty, respect, kindness, discipline, responsibility,
              and consideration for others.
            </p>

            <p className="leading-relaxed">
              We believe that knowledge and character go hand in hand. By
              creating an environment that encourages positive values, we aim to
              help students make thoughtful choices and develop a strong sense
              of responsibility.
            </p>
          </div>
        </section>

        {/* Student Development */}
        <section className="max-w-4xl space-y-4">
          <h2 className="text-primary text-2xl font-semibold md:text-3xl">
            Growing Beyond Academics
          </h2>

          <p className="leading-relaxed">
            Education extends beyond classroom lessons. We encourage students to
            develop communication skills, confidence, creativity, cooperation,
            and the ability to work with others.
          </p>

          <p className="leading-relaxed">
            Through learning experiences and school activities, children have
            opportunities to explore their interests, express themselves, and
            develop skills that support their personal growth.
          </p>
        </section>

        {/* School Community */}
        <section className="max-w-4xl space-y-4">
          <h2 className="text-primary text-2xl font-semibold md:text-3xl">
            Our School Community
          </h2>

          <p className="leading-relaxed">
            A child's education is strengthened when schools and families work
            together. We value the involvement of parents and the wider school
            community in supporting children's learning and development.
          </p>

          <p className="leading-relaxed">
            We strive to maintain a positive and respectful environment where
            students, teachers, parents, and the school community can work
            together towards the growth and well-being of every child.
          </p>
        </section>

        {/* Trust */}
        <section className="max-w-4xl space-y-4">
          <h2 className="text-primary text-2xl font-semibold md:text-3xl">
            Wisdom Educational & Welfare Trust
          </h2>

          <p className="leading-relaxed">
            Wisdom School is associated with the Wisdom Educational and Welfare
            Trust. The Trust provides the organizational foundation supporting
            the school's educational activities and its commitment to education,
            values, character development, and community welfare.
          </p>

          <p className="leading-relaxed">The Trust leadership includes:</p>

          <ul className="text-muted-foreground grid gap-2 sm:grid-cols-2">
            <li>
              <strong className="text-foreground">Samiulla</strong> — President
            </li>
            <li>
              <strong className="text-foreground">Khalid Imran</strong> —
              Secretary
            </li>
            <li>
              <strong className="text-foreground">Syed Abdul Sabeel</strong> —
              Treasurer
            </li>
            <li>
              <strong className="text-foreground">Kamran Ahmed</strong> — Vice
              President
            </li>
            <li>
              <strong className="text-foreground">Jameel Ahmed</strong> —
              Trustee
            </li>
            <li>
              <strong className="text-foreground">Syed Afsarulla</strong> —
              Trustee
            </li>
          </ul>
        </section>

        {/* Location / Closing */}
        <section className="border-border border-t pt-10">
          <h2 className="text-primary mb-4 text-2xl font-semibold md:text-3xl">
            Visit Wisdom School
          </h2>

          <p className="max-w-3xl leading-relaxed">
            Wisdom School is located at 11th Cross, Kesare, Rajendranagar,
            Mysuru, Karnataka. Parents and families are welcome to contact the
            school to learn more about our educational approach, school
            environment, and admissions for Grades 1 to 7.
          </p>
        </section>
      </div>
    </main>
  );
}

export default About;
