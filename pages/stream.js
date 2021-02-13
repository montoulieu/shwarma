import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faYoutube, faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

function Stream() {
  return (
    <div className="min-h-screen flex flex-col content-center justify-center text-center text-yellow-400 text-lg p-3">
      <div className="md:w-1/2 mx-auto mb-10">
        <Image
          src="/images/loveworthy-live-premiere-small.jpg"
          width="1200"
          height="628"
          className="w-full rounded-lg"
        />
      </div>
      <div className="flex flex-col md:flex-row font-bold md:mx-auto ">
        <a
          href=""
          className="border-2 border-yellow-400 text-lg rounded-lg p-5 mb-3 md:mb-0 w-full md:w-64 md:mr-3"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faYoutube}
            size="lg"
            className="mr-2"
          />
          Watch on Youtube
        </a>
        <a
          href="https://www.facebook.com/shwarmaband/posts/2952664751689513"
          className="border-2 border-yellow-400 text-lg rounded-lg p-5 w-full md:w-64"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            size="lg"
            className="mr-2"
          />
          Watch on Facebook
        </a>
      </div>
    </div>
  );
}

export default Stream;
