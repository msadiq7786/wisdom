import React from "react";

interface InfoProps {
  Icon: React.ComponentType<{ size?: number }>;
  label: string;
  href: string;
}
const InfoCard = ({ Icon, label, href }: InfoProps) => {
  return (
    <div className="inline-flex items-center gap-1">
      <span className="bg-primary text-primary-foreground flex items-center justify-center rounded-full p-3">
        <Icon size={22} />
      </span>
      <a href={href} className="text-md font-semibold">
        {label}
      </a>
    </div>
  );
};

export default InfoCard;
