import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpotify,
  faApple,
  faAmazon,
  faBandcamp,
  faYoutube,
  faDeezer,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function SocialLinks() {
  const musicPlatforms = [
    {
      icon: faSpotify,
      label: "Spotify",
      link: "https://open.spotify.com/artist/5WHhSHtZd60meLMNDxRbYV?si=rFn0yEOlS8OmX4TqxiqSbw",
    },
    {
      icon: faApple,
      label: "Apple Music",
      link: "https://music.apple.com/us/artist/shwarma/1390163595",
    },
    {
      icon: faYoutube,
      label: "Youtube Music",
      link: "https://www.youtube.com/channel/UC69vsi_MuqB8VCka-wj8Mcg/",
    },
    {
      icon: faAmazon,
      label: "Amazon Music",
      link: "https://music.amazon.com/artists/B07DB43C7C/shwarma",
    },
    {
      icon: faBandcamp,
      label: "Bandcamp",
      link: "https://shwarma.bandcamp.com/",
    },
    // {
    //   icon: faTidal,
    //   label: 'Tidal',
    //   link: 'https://tidal.com/browse/artist/9889666',
    // },
    // {
    //   icon: faDeezer,
    //   label: "Deezer",
    //   link: "https://www.deezer.com/en/artist/14902845",
    // },
  ];

  const socialPlatforms = [
    {
      icon: faFacebook,
      label: "Facebook",
      link: "https://www.facebook.com/shwarmaband",
    },
    {
      icon: faInstagram,
      label: "Instagram",
      link: "https://www.instagram.com/shwarmaband/",
    },
    {
      icon: faTwitter,
      label: "Twitter",
      link: "https://twitter.com/shwarmaband",
    },
  ];

  return (
    <div className="py-6">
      <div className="music-links mb-3">
        <ul className="flex flex-wrap justify-center">
          {musicPlatforms.map((platform) => (
            <li key={platform.label} className="px-2 md:px-4">
              <a
                href={platform.link}
                target="_blank"
                rel="noreferrer"
                className="text-brand text-3xl"
                title={platform.label}
              >
                <FontAwesomeIcon icon={platform.icon} height="2rem" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="social-links">
        <ul className="flex flex-wrap justify-center">
          {socialPlatforms.map((platform) => (
            <li key={platform.label} className="px-2 md:px-4">
              <a
                href={platform.link}
                target="_blank"
                rel="noreferrer"
                className="text-brand text-3xl"
                title={platform.label}
              >
                <FontAwesomeIcon icon={platform.icon} height="2rem" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SocialLinks;
