import Image from 'next/image';

function PhotoBio() {
  return (
    <div className="md:flex py-10 px-4 md:px-0">
      <div className="md:w-1/2 text-center mb-5 md:mb-0 ">
        <Image
          src="/images/shred-shwarma-sm.jpg"
          height="500px"
          width="500px"
          alt="shwarma playing live at toads tavern"
          className="rounded-full shadow-md"
        />
      </div>
      <div className="md:w-1/2 text-white flex justify-center flex-col md:pl-12">
        <h2 className="heading font-bubblegum">About</h2>
        <div className="mb-10 font-light text-white">
          <p>shwarma is an experimental psychedelic rock band hailing from Denver, Colorado.</p>
          <p>asdlfjnasldivjnaslidfbasd fasld aslkdfj an skdljfb lasdjfbalsdbfasldjhfb asjldhfb</p>
        </div>
        <h2 className="heading font-bubblegum">Members</h2>
        <ul className="text-white">
          <li>
            <strong>Pieter Montoulieu</strong>
            {' '}
            <small> – guitar, vocals (2015-present)</small>
          </li>
          <li>
            <strong>Jackson Kaufman</strong>
            {' '}
            <small> – guitar, vocals (2015-present)</small>
          </li>
          <li>
            <strong>Steve Sanchez</strong>
            {' '}
            <small> – drums, backing vocals (2015-present)</small>
          </li>
          <li>
            <strong>Dalton Groves</strong>
            {' '}
            <small> – keys, backing vocals (2019–present)</small>
          </li>
          <li>
            <strong>Kevin Schultz</strong>
            {' '}
            <small> – bass, backing vocals (2019–present)</small>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PhotoBio;
