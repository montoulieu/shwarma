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
            src="/images/shwarma-live-crowd-1.jpg"
            width="954"
            height="620"
            alt="shwarma playing live at cervantes"
            className="rounded-3xl shadow-md mx-auto"
          />
          <BandMembersList />
        </div>

        <div className="font-light text-white text-xl max-w-lg mx-auto flex flex-col justify-center">
          <p>
            Out from the depths of Denver’s music scene comes the 6-piece
            kebab-rock monstrosity that is{" "}
            <span className="font-bold text-brand">shwarma</span>. Creating
            music since 2017, they have released 3 albums and 2 EPs, with a
            third currently set to release on 5/29.
          </p>
          <p></p>
          <p>
            shwarma is renowned for delivering an eclectic musical experience,
            effortlessly transitioning between genres and changing time
            signatures on the fly. Over the years, they&apos;ve dominated the
            Denver music scene and are now branching out to new cities. Get
            ready to{" "}
            <span className="font-bold text-brand">feel the shwarmth!</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PhotoBio;
