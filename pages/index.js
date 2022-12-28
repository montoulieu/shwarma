import PhotoBio from "@components/PhotoBio";
import MusicReleases from "@components/MusicReleases";
import LatestVideos from "@components/LatestVideos";
import GalleryPhotos from "@components/GalleryPhotos";
import MainFooter from "@components/MainFooter";

export default function Home() {
  return (
    <div className="h-full p-6">
      <main className="container mx-auto">
        <PhotoBio />
        <MusicReleases />
        <LatestVideos />
        <GalleryPhotos />
        <MainFooter />
      </main>
    </div>
  );
}
