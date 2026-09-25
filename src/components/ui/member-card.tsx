import Image from "next/image";

interface MemberCardProps {
  name: string;
  role: string;
  image: string;
}

const MemberCard = ({ name, role, image }: MemberCardProps) => {
  return (
    <div className="group overflow-hidden bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg">
      <div className="relative aspect-4/3 overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className="object-fit h-full w-full object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="bg-accent text-accent-foreground p-3 font-medium">
        <h3 className="font-serif text-lg font-semibold tracking-wide uppercase">
          {name}
        </h3>
        <p className="text-sm font-light capitalize">{role}</p>
      </div>
    </div>
  );
};

export default MemberCard;
