import Image from 'next/image';
import { faApple, faBandcamp, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        {
          icon: faApple,
          url: 'https://music.apple.com/us/album/emilys-aparments/1507941253',
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
          url: 'https://shwarma.bandcamp.com/album/the-briny-deep',
        },
        {
          icon: faSpotify,
          url: 'https://open.spotify.com/album/400Kvbo0Ss35bk3iuOCKnf',
        },
        {
          icon: faApple,
          url: 'https://music.apple.com/us/album/the-briny-deep/1390300526',
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
          url: 'https://shwarma.bandcamp.com/album/angular-ep',
        },
        {
          icon: faSpotify,
          url: 'https://open.spotify.com/album/6O97C6axHK3yxNZ4mJJ9gs',
        },
        {
          icon: faApple,
          url: 'https://music.apple.com/us/album/angular-ep/1390956650',
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
              className="rounded-lg shadow-lg"
            />
            <div className="flex py-2">
              <h3 className="subheading">{release.name}</h3>
              <h3 className="subheading ml-auto">{release.year}</h3>
            </div>
            <div>
              <ul className="flex items-center">
                <p className="text-white mr-2">Listen on:</p>
                {release.links.map((link) => (
                  <li>
                    <a
                      href={link.url}
                      className="px-1 pink-hover"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={link.icon}
                        size="2x"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MusicReleases;
