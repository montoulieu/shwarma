import { faApple, faBandcamp, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

function MusicReleases() {
  const releases = [
    {
      name: 'Loveworthy Live EP',
      year: 2021,
      image: 'https://f4.bcbits.com/img/a1088914233_10.jpg',
      // embedID: 1195944678,
      links: [
        {
          icon: faBandcamp,
          name: 'Bandcamp',
          url: 'https://shwarma.bandcamp.com/album/loveworthy-live-ep',
        },
      ],
    },
    {
      name: 'Emily\'s Aparments',
      year: 2020,
      image: 'https://f4.bcbits.com/img/a0616848912_16.jpg',
      embedID: 1195944678,
      links: [
        {
          icon: faBandcamp,
          name: 'Bandcamp',
          url: 'https://shwarma.bandcamp.com/album/emilys-aparments',
        },
        {
          icon: faSpotify,
          name: 'Spotify',
          url: 'https://open.spotify.com/album/5ffzN9nN2m49DgNhCCvKqg',
        },
        {
          icon: faApple,
          name: 'Apple Music',
          url: 'https://music.apple.com/us/album/emilys-aparments/1507941253',
        },
      ],
    },
    {
      name: 'The Briny Deep',
      year: 2018,
      image: 'https://f4.bcbits.com/img/a2680474440_16.jpg',
      embedID: 2712994336,
      links: [
        {
          icon: faBandcamp,
          name: 'Bandcamp',
          url: 'https://shwarma.bandcamp.com/album/the-briny-deep',
        },
        {
          icon: faSpotify,
          name: 'Spotify',
          url: 'https://open.spotify.com/album/400Kvbo0Ss35bk3iuOCKnf',
        },
        {
          icon: faApple,
          name: 'Apple Music',
          url: 'https://music.apple.com/us/album/the-briny-deep/1390300526',
        },
      ],
    },
    {
      name: 'Angular EP',
      year: 2017,
      image: 'https://f4.bcbits.com/img/a1946338181_16.jpg',
      embedID: 1418255605,
      links: [
        {
          icon: faBandcamp,
          name: 'Bandcamp',
          url: 'https://shwarma.bandcamp.com/album/angular-ep',
        },
        {
          icon: faSpotify,
          name: 'Spotify',
          url: 'https://open.spotify.com/album/6O97C6axHK3yxNZ4mJJ9gs',
        },
        {
          icon: faApple,
          name: 'Apple Music',
          url: 'https://music.apple.com/us/album/angular-ep/1390956650',
        },
      ],
    },
  ];

  function openBandcampEmbedWindow(id) {
    const params = 'scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no, width=320,height=800,left=0,top=0';
    window.open(`https://bandcamp.com/EmbeddedPlayer/album=${id}/size=large/bgcol=212324/linkcol=098af8/transparent=true/`, 'test', params);
  }

  return (
    <div className="px-3 md:px-0 pb-10">
      <h2 className="heading font-bubblegum mb-5">Music Releases</h2>
      <ul className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 ">
        {releases.map((release) => (
          <li
            className="pb-5"
            key={release.name}
          >
            <div className="text-center mb-4">
              <button
                onClick={() => openBandcampEmbedWindow(release.embedID)}
                type="button"
                className="rounded-3xl"
              >
                <Image
                  src={release.image}
                  height="512"
                  width="512"
                  className="rounded-3xl shadow-lg cursor-pointer"
                  alt={`${release.name} album cover`}
                  loading="lazy"
                />
              </button>
            </div>

            <div className=" py-2">
              <h3 className="subheading">
                {release.name}
              </h3>
              <h3 className="subheading">
                {release.year}
              </h3>
            </div>

            <div className="flex items-center">
              <p className="text-yellow-200 mr-2 font-light uppercase">Listen on:</p>
              <ul className="flex items-center">
                {release.links.map((link) => (
                  <li key={link.url}>
                    <a
                      href={link.url}
                      className="inline-block px-2 yellow-hover text-xl"
                      title={link.name}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={link.icon}
                        height="2rem"
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
