import Image from "next/image";

const missionIcon = "/images/illustration/mission.svg";
const visionIcon = "/images/illustration/vision.svg";

const Feature = () => {
  return (
    <section
      className="bg-primary text-primary-foreground overflow-hidden px-6 py-16 md:px-16 lg:px-24 xl:px-32"
      aria-labelledby="mission-vision-heading"
    >
      <span className="sr-only">
        Our mission is to provide quality education while developing academic
        ability, character, discipline, confidence, and a love for learning. Our
        vision is to nurture responsible and compassionate students grounded in
        Islamic values.
      </span>
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2
          id="mission-vision-heading"
          className="title-font mb-4 text-3xl font-medium sm:text-4xl"
        >
          Our Mission &amp; Vision
        </h2>

        <p className="leading-relaxed">
          We are committed to creating a positive learning environment where
          children develop knowledge, character, confidence, and a strong sense
          of responsibility.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Mission */}
        <div className="bg-accent flex flex-col items-center p-8 text-center">
          <Image
            src={missionIcon}
            alt=""
            aria-hidden="true"
            width={70}
            height={70}
            className="mb-4"
          />

          <h3 className="mb-4 text-2xl font-medium sm:text-3xl">Our Mission</h3>

          <p className="max-w-xl leading-relaxed">
            To provide quality education in a supportive and values-based
            environment where students develop strong academic foundations, good
            character, discipline, confidence, and a love for learning.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-accent flex flex-col items-center p-8 text-center">
          <Image
            src={visionIcon}
            alt=""
            aria-hidden="true"
            width={70}
            height={70}
            className="mb-4"
          />

          <h3 className="mb-4 text-2xl font-medium sm:text-3xl">Our Vision</h3>

          <p className="max-w-xl leading-relaxed">
            To nurture knowledgeable, responsible, confident, and compassionate
            young individuals who uphold Islamic values, respect others,
            contribute positively to society, and continue learning throughout
            life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Feature;
