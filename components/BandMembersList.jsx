import React from 'react'

const BandMembersList = () => {
  return (
    <div>
        <h2 className="heading font-heading">Members</h2>
        {bandMembers
        && (
        <ul className="text-white">
          {bandMembers.map((member) => (
            <li key={member.name}>
              <strong>{member.name}</strong>
              {' '}
              <small>
                {' '}
                –
                {' '}
                {member.role}
              </small>
            </li>
          ))}
        </ul>
        )}      
    </div>
  )
}

export default BandMembersList
