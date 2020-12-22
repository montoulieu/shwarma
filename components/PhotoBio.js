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
      <div className="md:w-1/2 text-white flex justify-center flex-col pl-12">
        <h2 className="text-xl font-bold text-purple-300">About</h2>
        <div className="mb-10 font-light text-purple-200">
          <p>shwarma is an experimental psychedelic rock band hailing from Denver, Colorado.</p>
          <p>asdlfjnasldivjnaslidfbasd fasld aslkdfj an skdljfb lasdjfbalsdbfasldjhfb asjldhfb</p>
        </div>
        <h2 className="text-xl font-bold text-purple-300">Members</h2>
        <ul className="text-purple-200">
          <li>
            Pieter Montoulieu – guitar, vocals
            {' '}
            <small>(2015-present)</small>
          </li>
          <li>
            Jackson Kaufman – guitar, vocals
            {' '}
            <small>(2015-present)</small>
          </li>
          <li>
            Steve Sanchez – drums, backing vocals
            {' '}
            <small>(2015-present)</small>
          </li>
          <li>
            Dalton Groves – keys, backing vocals
            {' '}
            <small>(2019–present)</small>
          </li>
          <li>
            Kevin Schultz – bass, backing vocals
            {' '}
            <small>(2019–present)</small>
          </li>

        </ul>
      </div>
    </div>
  );
}

export default PhotoBio;
