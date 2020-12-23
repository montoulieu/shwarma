function PhotoBio({ headingFirst, headingSecond, bandMembers }) {
  return (
    <div className="md:flex px-3 md:px-0">
      <div className="md:w-1/2 text-center mb-5 md:mb-0 ">
        <img
          src="/images/shred-shwarma-sm.jpg"
          height="500px"
          width="500px"
          alt="shwarma playing live at toads tavern"
          className="rounded-3xl shadow-md mx-auto"
        />
      </div>
      <div className="md:w-1/2 xl:w-1/3 text-white flex justify-center flex-col md:pl-4 lg:pl-12 py-4 md:py-0 ">
        <h2 className="heading font-bubblegum">About</h2>
        <div className="mb-10 font-light text-white text-xl">
          <p className="mb-2">{headingFirst}</p>
          <p>{headingSecond}</p>
        </div>
        <h2 className="heading font-bubblegum">Members</h2>
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
    </div>
  );
}

export default PhotoBio;
