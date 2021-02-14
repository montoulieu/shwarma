import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faYoutube, faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import { NextSeo } from 'next-seo';

function Stream() {
  return (
    <div className="min-h-screen flex flex-col content-center justify-center text-center text-yellow-400 text-lg p-3">
      <NextSeo
        title="shwarma - Loveworthy Live EP Premiere"
        description="shwarma is an experimental psychedelic and progressive rock band hailing from Denver, Colorado."
        openGraph={{
          url: 'https://www.shwarma.band/stream',
          title: 'shwarma - Loveworthy Live EP Premiere',
          description: 'Loveworthy Live EP stream links',
          images: [
            {
              url: '/images/loveworthy-live-premiere-small.jpg',
              alt: 'shwarma live',
            },
          ],
        }}
        twitter={{
          handle: '@shwarmadelica',
          site: '@shwarmadelica',
          cardType: 'summary_large_image',
        }}
      />
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
          href="https://www.youtube.com/watch?v=qxzOTcbdgy8"
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
          href="https://www.facebook.com/shwarmaband/posts/2956500767972578"
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
