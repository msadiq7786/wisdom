import { Dot } from "lucide-react";
import SCHOOL_CONTACT from "@/data/contact";

const Banner = () => {
  return (
    <div
      role="region"
      aria-label="School announcement"
      className="bg-accent text-accent-foreground flex w-full items-center justify-center py-2.5 text-sm font-medium"
    >
      <span className="sr-only">
        Important announcement: Admissions are open for students from Grade 1 to
        Grade 7 at Wisdom School, Kesare, Rajendranagar, Mysuru.
      </span>
      <ul
        aria-hidden="true"
        className="inline-flex items-center justify-evenly gap-1.5"
      >
        <li>🎓 Admissions Open | Classes 1–7 </li>
        <Dot className="text-muted-foreground hidden sm:inline" />
        <li className="hidden sm:inline">{SCHOOL_CONTACT.email}</li>
        <Dot className="text-muted-foreground hidden sm:inline" />
        <li className="hidden sm:inline">Mon–Sat: 9:00 AM – 4:00 PM</li>
      </ul>
    </div>
  );
};

export default Banner;
