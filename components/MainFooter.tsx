import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpotify,
  faApple,
  faAmazon,
  faBandcamp,
  faYoutube,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const platforms = [
  { icon: faSpotify, label: "Spotify", href: "https://open.spotify.com/artist/5WHhSHtZd60meLMNDxRbYV" },
  { icon: faApple, label: "Apple Music", href: "https://music.apple.com/us/artist/shwarma/1390163595" },
  { icon: faYoutube, label: "YouTube", href: "https://www.youtube.com/channel/UC69vsi_MuqB8VCka-wj8Mcg/" },
  { icon: faAmazon, label: "Amazon", href: "https://music.amazon.com/artists/B07DB43C7C/shwarma" },
  { icon: faBandcamp, label: "Bandcamp", href: "https://shwarma.bandcamp.com/" },
];

const socials = [
  { icon: faFacebook, label: "Facebook", href: "https://www.facebook.com/shwarmaband" },
  { icon: faInstagram, label: "Instagram", href: "https://www.instagram.com/shwarmaband/" },
];

export default function MainFooter() {
  return (
    <footer className="relative py-20 px-6 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-teal-950/20 via-transparent to-transparent" />

      <div className="relative max-w-5xl mx-auto">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Ready to <span className="text-teal-400">feel the shwarmth</span>?
          </h2>
          <p className="text-lg text-white/60 mb-8 max-w-xl mx-auto">
            Book us for your next event, festival, or just say hello
          </p>
          <a
            href="mailto:shwarmaband@gmail.com"
            className="btn-glow text-xl inline-block"
          >
            Get in Touch
          </a>
        </div>

        {/* Divider */}
        <div className="section-divider mb-12" />

        {/* Links Grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Streaming */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/50 mb-4">
              Stream Music
            </h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {platforms.map((p) => (
                <a
                  key={p.label}
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                  title={p.label}
                >
                  <FontAwesomeIcon icon={p.icon} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="text-center">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/50 mb-4">
              Follow Us
            </h3>
            <div className="flex justify-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                  title={s.label}
                >
                  <FontAwesomeIcon icon={s.icon} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/50 mb-4">
              Booking
            </h3>
            <a
              href="mailto:shwarmaband@gmail.com"
              className="text-teal-400 hover:text-teal-300 transition-colors font-medium"
            >
              shwarmaband@gmail.com
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-sm text-white/30">
            © shwarma {new Date().getFullYear()} · Denver, Colorado
          </p>
          <p className="text-xs text-white/20 mt-2">
            Made with 🌯 and love
          </p>
        </div>
      </div>
    </footer>
  );
}
