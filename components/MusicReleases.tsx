"use client";

import Image from "next/image";
import releases, { Release } from "@/data/releases";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

function MusicReleases() {
  return (
    <div>
      <h2 className="heading font-heading">Music Releases</h2>
      <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {releases.map((release) => (
          <li className="" key={release.name}>
            <div className="text-center mb-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    type="button"
                    className="rounded-lg hover:opacity-80 transition-opacity duration-200 p-0 h-auto w-auto"
                    variant="ghost"
                  >
                    <Image
                      src={release.image}
                      height={512}
                      width={512}
                      className="rounded-lg shadow-lg cursor-pointer"
                      alt={`${release.name} album cover`}
                      loading="lazy"
                    />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-fit border-none bg-transparent p-0 shadow-none">
                  <iframe
                    className="mx-auto block"
                    src={`https://bandcamp.com/EmbeddedPlayer/album=${release.embedID}/size=large/bgcol=212324/linkcol=098af8/transparent=true/`}
                    seamless
                    width="350px"
                    height="780px"
                    title={`${release.name} bandcamp player`}
                  />
                </DialogContent>
              </Dialog>
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
                      className="inline-block px-2 text-brand hover:opacity-50 text-xl transition-opacity duration-200"
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
