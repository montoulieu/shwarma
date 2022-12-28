import React from 'react'
import bandMembers from '@data/bandMembers'

const BandMembersList = () => {
  return (
    <div>
        {/* <h2 className="heading font-heading">Members</h2> */}
        {bandMembers
        && (
        <ul className="text-xs md:text-sm lg:text-xs xl:text-sm flex justify-center mt-2 text-brand font-light flex-wrap">
          {bandMembers.map((member) => (
            <li key={member.name} className="mr-2">
              {member.name}
            </li>
          ))}
        </ul>
        )}      
    </div>
  )
}

export default BandMembersList
