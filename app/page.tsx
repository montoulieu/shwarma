import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import MusicReleases from "@/components/MusicReleases";
import LatestVideos from "@/components/LatestVideos";
import GalleryPhotos from "@/components/GalleryPhotos";
import BandMembersList from "@/components/BandMembersList";
import MainFooter from "@/components/MainFooter";

export default function Home() {
  return (
    <div className="grain-overlay">
      <Navigation />

      <main>
        <HeroSection />

        {/* Divider */}
        <div className="section-divider" />

        <MusicReleases />

        <div className="section-divider" />

        <LatestVideos />

        <div className="section-divider" />

        <GalleryPhotos />

        <div className="section-divider" />

        <BandMembersList />
      </main>

      <MainFooter />
    </div>
  );
}
