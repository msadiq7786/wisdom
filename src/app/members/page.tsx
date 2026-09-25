import MemberCard from "@/components/ui/member-card";
import { MEMBERS } from "@/data/members";

function Members() {
  return (
    <div className="bg-background space-y-6 px-6 py-6 md:px-16 lg:px-24 xl:px-32">
      <h1 className="text-4xl font-bold">Members</h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {MEMBERS.map((member) => (
          <MemberCard
            key={member.name}
            name={member.name}
            role={member.role}
            image={member.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Members;
