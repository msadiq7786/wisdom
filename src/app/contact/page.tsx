"use client";

import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLocationDot,
  FaPhone,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";

import InfoCard from "@/components/ui/info-card";
import SCHOOL_CONTACT from "@/data/contact";

const SOCIAL_ICONS = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  youtube: FaYoutube,
  linkedin: FaLinkedinIn,
  whatsapp: FaWhatsapp,
} as const;

const contactInfo = [
  {
    Icon: FaPhone,
    title: "Call Us",
    label: SCHOOL_CONTACT.phones[0]?.value ?? "",
    href: SCHOOL_CONTACT.phones[0]?.href ?? "#",
  },
  {
    Icon: FaEnvelope,
    title: "Email Us",
    label: SCHOOL_CONTACT.email,
    href: `mailto:${SCHOOL_CONTACT.email}`,
  },
  {
    Icon: FaLocationDot,
    title: "Visit Us",
    label: SCHOOL_CONTACT.address,
    href: SCHOOL_CONTACT.locationUrl,
  },
];

function ContactPage() {
  return (
    <main className="bg-background px-6 py-12 md:px-16 lg:px-24 xl:px-32">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <header className="mb-12 max-w-3xl">
          <h1 className="text-primary text-4xl font-bold md:text-5xl">
            Contact Wisdom School
          </h1>

          <p className="text-muted-foreground mt-4 text-base leading-relaxed md:text-lg">
            We would be happy to hear from parents and families interested in
            learning more about Wisdom School, our educational approach,
            facilities, and admissions.
          </p>
        </header>

        {/* Contact Information */}
        <section
          aria-labelledby="contact-information-heading"
          className="mb-14"
        >
          <h2
            id="contact-information-heading"
            className="text-primary mb-6 text-2xl font-semibold"
          >
            Get in Touch
          </h2>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {contactInfo.map(({ Icon, title, label, href }) => (
              <InfoCard key={title} Icon={Icon} label={label} href={href} />
            ))}
          </div>
        </section>

        {/* Admissions */}
        <section
          aria-labelledby="admissions-heading"
          className="bg-muted mb-14 rounded-xl p-6 md:p-8"
        >
          <div className="max-w-3xl">
            <h2
              id="admissions-heading"
              className="text-primary text-2xl font-semibold"
            >
              Admissions & Enquiries
            </h2>

            <p className="text-muted-foreground mt-3 leading-relaxed">
              Looking for a supportive school environment that combines academic
              learning with Islamic values and character development? Contact
              Wisdom School to learn more about admissions for Grades 1–7.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {SCHOOL_CONTACT.phones[0]?.href && (
                <a
                  href={SCHOOL_CONTACT.phones[0].href}
                  className="bg-primary text-primary-foreground inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-90"
                >
                  <FaPhone size={14} />
                  Call the School
                </a>
              )}

              {SCHOOL_CONTACT.locationUrl && (
                <a
                  href={SCHOOL_CONTACT.locationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-primary text-primary inline-flex items-center gap-2 rounded-md border px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-80"
                >
                  <FaLocationDot size={14} />
                  Get Directions
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Social Media */}
        {SCHOOL_CONTACT.socials.length > 0 && (
          <section aria-labelledby="social-heading" className="mb-14">
            <h2
              id="social-heading"
              className="text-primary mb-3 text-2xl font-semibold"
            >
              Connect With Us
            </h2>

            <p className="text-muted-foreground mb-5">
              Follow Wisdom School for school updates, activities, and
              announcements.
            </p>

            <div className="flex flex-wrap gap-3">
              {SCHOOL_CONTACT.socials.map(({ platform, href, label }) => {
                const Icon = SOCIAL_ICONS[platform];

                if (!Icon) return null;

                return (
                  <a
                    key={platform}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="bg-primary text-primary-foreground flex size-11 items-center justify-center rounded-full transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-offset-2"
                  >
                    <Icon size={18} aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </section>
        )}

        {/* Location */}
        <section aria-labelledby="location-heading">
          <div className="mb-5">
            <h2
              id="location-heading"
              className="text-primary text-2xl font-semibold"
            >
              Visit Our School
            </h2>

            <p className="text-muted-foreground mt-2 max-w-2xl leading-relaxed">
              Wisdom School is located at 11th Cross, Kesare, Rajendranagar,
              Mysuru, Karnataka. We welcome parents and families to visit the
              school and learn more about our learning environment.
            </p>
          </div>

          <div className="border-border h-80 overflow-hidden rounded-xl border md:h-112.5">
            <iframe
              className="h-full w-full"
              title="Location of Wisdom School, Kesare, Rajendranagar, Mysuru"
              src={SCHOOL_CONTACT.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="mt-4 flex items-start gap-2">
            <FaLocationDot
              className="text-primary mt-1 shrink-0"
              aria-hidden="true"
            />

            <p className="text-muted-foreground text-sm leading-relaxed">
              {SCHOOL_CONTACT.address}
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default ContactPage;
