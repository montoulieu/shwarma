import Image from 'next/image';

function PhotoBio() {
  return (
    <div className="flex">
      <div className="w-1/2">
        <Image
          src="/images/shred-shwarma-sm.jpg"
          height="500px"
          width="500px"
          alt="shwarma playing live at toads tavern"
          className="rounded-lg shadow-md"
        />
      </div>
      <div className="w-1/2 text-center text-white">
        <p>asdlfjnasldivjnaslidfbasd fasld aslkdfj an skdljfb lasdjfbalsdbfasldjhfb asjldhfb asdlfjnasldivjnaslidfbasd fasld aslkdfj an skdljfb lasdjfbalsdbfasldjhfb asjldhfb</p>
        <p>asdlfjnasldivjnaslidfbasd fasld aslkdfj an skdljfb lasdjfbalsdbfasldjhfb asjldhfb</p>
        <p>asdlfjnasldivjnaslidfbasd fasld aslkdfj an skdljfb lasdjfbalsdbfasldjhfb asjldhfb</p>
        <p>asdlfjnasldivjnaslidfbasd fasld aslkdfj an skdljfb lasdjfbalsdbfasldjhfb asjldhfb</p>
      </div>
    </div>
  );
}

export default PhotoBio;
