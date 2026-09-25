export type SocialPlatform =
  "facebook" | "instagram" | "youtube" | "linkedin" | "whatsapp";

export type SocialLink = {
  platform: SocialPlatform;
  label: string;
  href: string;
};

export type ContactPhone = {
  label: string;
  value: string;
  href: string;
};

export const SCHOOL_CONTACT = {
  schoolName: "Wisdom School",
  email: "info@wisdomschool.com",
  address: "1st Cross, Rajendranagar, Mysuru",
  locationUrl: "https://maps.app.goo.gl/ukgb5aiE8tZDhdWg6",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2918.1753607261144!2d76.65950397506582!3d12.338168087922043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDIwJzE3LjQiTiA3NsKwMzknNDMuNSJF!5e1!3m2!1sen!2sin!4v1790266903896!5m2!1sen!2sin",
  phones: [
    {
      label: "Primary Contact",
      value: "+91 98458 35938",
      href: "tel:+919845835938",
    },
    {
      label: "Admissions",
      value: "+91 90363 63285",
      href: "tel:+919036363285",
    },
  ] as ContactPhone[],
  socials: [
    {
      platform: "facebook",
      label: "Facebook",
      href: "https://facebook.com/wisdomschool",
    },
    {
      platform: "instagram",
      label: "Instagram",
      href: "https://instagram.com/wisdomschool",
    },
    {
      platform: "youtube",
      label: "YouTube",
      href: "https://youtube.com/@wisdomschool",
    },
    {
      platform: "linkedin",
      label: "LinkedIn",
      href: "https://linkedin.com/company/wisdomschool",
    },
    {
      platform: "whatsapp",
      label: "WhatsApp",
      href: "https://wa.me/919845838938",
    },
  ] as SocialLink[],
} as const;

export default SCHOOL_CONTACT;
