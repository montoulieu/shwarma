import React from "react";
import bandMembers from "@/data/bandMembers";

interface BandMember {
  name: string;
  shortRole: string;
  // Add other properties if they exist in the data
}

const BandMembersList = () => {
  return (
    <div>
      {/* <h2 className="heading font-heading">Members</h2> */}
      {bandMembers && (
        <ul className="text-xs md:text-sm lg:text-xs xl:text-sm flex justify-center mt-2 text-brand font-light flex-wrap gap-y-2">
          {(bandMembers as BandMember[]).map((member) => (
            <li
              key={member.name}
              className="border-r-2 border-brand/60 px-3 last:border-r-0 last:mr-0 text-center"
            >
              <div className="font-medium">{member.name}</div>
              <div className="font-light text-xs">{member.shortRole}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BandMembersList;
