import Image from "next/image";
import releases from "data/releases";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MusicReleases() {
  const openBandcampEmbedWindow = (id) => {
    if (!id) return;
    const params =
      "scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no, width=320,height=800,left=0,top=0";
    window.open(
      `https://bandcamp.com/EmbeddedPlayer/album=${id}/size=large/bgcol=212324/linkcol=098af8/transparent=true/`,
      "test",
      params
    );
  };

  return (
    <div>
      <h2 className="heading font-heading">Music Releases</h2>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {releases.map((release) => (
          <li className="" key={release.name}>
            <div className="text-center mb-4">
              <button
                onClick={() => openBandcampEmbedWindow(release.embedID)}
                type="button"
                className="rounded-lg"
              >
                <Image
                  src={release.image}
                  height="512"
                  width="512"
                  className="rounded-lg shadow-lg cursor-pointer"
                  alt={`${release.name} album cover`}
                  loading="lazy"
                />
              </button>
            </div>

            <div className="mb-2">
              <h3 className="subheading">{release.name}</h3>
              <h3 className="subheading font-light">{release.year}</h3>
            </div>

            <div className="flex items-center">
              <p className="text-brand mr-2 font-light uppercase">Listen on:</p>

              <ul className="flex items-center">
                {release.links.map((link) => (
                  <li key={link.url}>
                    <a
                      href={link.url}
                      className="inline-block px-2 text-brand hover:opacity-50 text-xl"
                      title={link.name}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={link.icon} height="2rem" />
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
