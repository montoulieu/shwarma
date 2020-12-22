import Image from 'next/image';
import { faBandcamp, faSpotify } from '@fortawesome/free-brands-svg-icons';

function MusicReleases() {
  const releases = [
    {
      name: 'Emily\'s Aparments',
      year: 2020,
      image: 'https://f4.bcbits.com/img/a0616848912_16.jpg',
      links: [
        {
          icon: faBandcamp,
          url: 'https://shwarma.bandcamp.com/album/emilys-aparments',
        },
        {
          icon: faSpotify,
          url: 'https://open.spotify.com/album/5ffzN9nN2m49DgNhCCvKqg',
        },
      ],
    },
    {
      name: 'The Briny Deep',
      year: 2018,
      image: 'https://f4.bcbits.com/img/a2680474440_16.jpg',
      links: [
        {
          icon: faBandcamp,
          url: 'https://shwarma.bandcamp.com/album/emilys-aparments',
        },
        {
          icon: faSpotify,
          url: 'https://open.spotify.com/album/5ffzN9nN2m49DgNhCCvKqg',
        },
      ],
    },
    {
      name: 'Angular EP',
      year: 2017,
      image: 'https://f4.bcbits.com/img/a1946338181_16.jpg',
      links: [
        {
          icon: faBandcamp,
          url: 'https://shwarma.bandcamp.com/album/emilys-aparments',
        },
        {
          icon: faSpotify,
          url: 'https://open.spotify.com/album/5ffzN9nN2m49DgNhCCvKqg',
        },
      ],
    },
  ];
  return (
    <div className="px-4 md:px-0">
      <h2 className="heading font-bubblegum mb-3">Music Releases</h2>
      <ul className="grid md:grid-cols-3 gap-6 ">
        {releases.map((release) => (
          <li>
            <Image
              src={release.image}
              height="512"
              width="512"
              className="rounded-lg"
            />
            <div className="flex py-2">
              <h3 className="subheading">{release.name}</h3>
              <h3 className="subheading ml-auto">{release.year}</h3>
            </div>
            <div>
              <p className="text-white">Listen on:</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MusicReleases;
