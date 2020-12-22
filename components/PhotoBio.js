function PhotoBio() {
  const bandMembers = [
    {
      name: 'Pieter Montoulieu',
      role: 'guitar, vocals',
      time: '2015-present',
    },
    {
      name: 'Jackson Kaufman',
      role: 'guitar, vocals',
      time: '2015-present',
    },
    {
      name: 'Steve Sanchez',
      role: 'drums, backing vocals',
      time: '2015-present',
    },
    {
      name: 'Dalton Groves',
      role: 'keys, backing vocals',
      time: '2018-present',
    },
    {
      name: 'Kevin Schultz',
      role: 'bass, backing vocals',
      time: '2018-present',
    },
  ];
  return (
    <div className="md:flex px-4 md:px-0">
      <div className="md:w-1/2 text-center mb-5 md:mb-0 ">
        <img
          src="/images/shred-shwarma-sm.jpg"
          height="500px"
          width="500px"
          alt="shwarma playing live at toads tavern"
          className="rounded-3xl shadow-md mx-auto"
        />
      </div>
      <div className="md:w-1/2 xl:w-1/3 text-white flex justify-center flex-col md:pl-4 lg:pl-12">
        <h2 className="heading font-bubblegum">About</h2>
        <div className="mb-10 font-light text-white text-xl">
          <p className="mb-2">shwarma is an experimental psychedelic and progressive rock band hailing from Denver, Colorado.</p>
          <p>Born out of a desire to play whatever style we felt like trying, and always with an appreciation for the greats that have come before and inspired us.</p>
        </div>
        <h2 className="heading font-bubblegum">Members</h2>
        <ul className="text-white">
          {bandMembers.map((member) => (
            <li>
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
      </div>
    </div>
  );
}

export default PhotoBio;
