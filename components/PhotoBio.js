import Image from "next/image";
import LogoShwarma from "./SVG/LogoShwarma";
import SocialLinks from "@components/SocialLinks";
import BandMembersList from "./BandMembersList";

function PhotoBio({ headingFirst, headingSecond, bandMembers }) {
  return (
    <div className="md:flex mb-10">
      <div className="grid lg:grid-cols-2 gap-6 justify">
        <LogoShwarma className="h-32 w-auto mx-auto" />
        <SocialLinks />

        <div>
          <Image
            src="/images/shwarma-live-crowd.jpg"
            width="954"
            height="620"
            alt="shwarma playing live at cervantes"
            className="rounded-3xl shadow-md mx-auto"
          />
          <BandMembersList />
        </div>

        <div className="font-light text-white text-xl max-w-lg mx-auto flex flex-col justify-center">
          <p>
            Out from the depths of Denver’s music scene comes the 5-piece
            kebab-rock monstrosity that is{" "}
            <span className="font-bold text-brand">shwarma</span>.
          </p>
          <p>
            Creating music since 2017, they have released 3 albums and 2 EPs,
            with a third currently in production.
          </p>
          <p>
            The shwarmth brings many styles of music to the table and is known
            for switching genres and time signatures on the fly. They’ve been
            playing the Denver metro area for years and are planning a tour for
            early 2023.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PhotoBio;
