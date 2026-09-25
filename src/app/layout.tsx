import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Script from "next/script";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wisdom School | Islamic Values-Based School in Mysuru | Grades 1–7",
  description:
    "Wisdom School in Kesare, Rajendranagar, Mysuru provides education for Grades 1–7, combining academic learning with Islamic values, character development, discipline and holistic growth.",
  keywords: [
    "Wisdom School Mysuru",
    "Wisdom School Kesare",
    "schools in Kesare Mysuru",
    "schools in Rajendranagar Mysuru",
    "school in Kesare",
    "primary school in Mysuru",
    "Islamic school in Mysuru",
    "Islamic values based school in Mysuru",
    "Islamic school in Kesare",
    "primary education in Mysuru",
    "Grade 1 school in Mysuru",
    "Grade 7 school in Mysuru",
    "schools near Rajendranagar Mysuru",
  ],
  openGraph: {
    title: "Wisdom School | Grades 1–7 | Mysuru",
    description:
      "Wisdom School in Kesare, Rajendranagar, Mysuru provides academic education with Islamic values, character development, discipline, and holistic growth for students from Grades 1–7.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wisdom School Mysuru | Grades 1–7",
    description:
      "Academic learning, Islamic values, character development and holistic growth for students from Grades 1–7 in Kesare, Mysuru.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "School",
  name: "Wisdom School",
  description:
    "Wisdom School is an Islamic values-based school in Kesare, Rajendranagar, Mysuru providing education from Grade 1 to Grade 7.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "11th Cross, Kesare",
    addressLocality: "Rajendranagar, Mysuru",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  areaServed: "Mysuru",
  educationalLevel: "Primary and Middle School",
  telephone: "+91 98458 35938",
  email: "info@wisdomschool.com",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${notoSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Script
          id="json-ld-school"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
