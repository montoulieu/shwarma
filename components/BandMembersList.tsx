import bandMembers from "@/data/bandMembers";

const memberPhotos: Record<string, string> = {
  "Pieter Montoulieu": "/images/slider/pieter.jpg",
  "Jackson Kaufman": "/images/slider/jackson.jpg",
  "Steve Sanchez": "/images/slider/steve.jpg",
  "Kevin Schultz": "/images/slider/kevin.jpg",
  "Will Trafas": "/images/slider/will-on-keys.jpg",
  "Miles Mckee": "/images/slider/band-lights.jpg", // Using group shot as placeholder
};

const instrumentIcons: Record<string, string> = {
  "GTR/VOX": "🎸",
  "DRUMS": "🥁",
  "BASS": "🎸",
  "KEYS": "🎹",
  "SAX": "🎷",
};

export default function BandMembersList() {
  return (
    <section id="band" className="section">
      <div className="section-content">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-label mb-4 block">The Band</span>
          <h2 className="heading heading-gradient mb-4">Meet shwarma</h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Six weirdos making noise since 2015
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {bandMembers.map((member, index) => (
            <div
              key={member.name}
              className="group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Photo Container */}
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
                {/* Background Photo */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${memberPhotos[member.name] || "/images/slider/band-lights.jpg"})`,
                  }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                {/* Instrument Icon (shows on hover) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-5xl">{instrumentIcons[member.shortRole] || "🎵"}</span>
                </div>

                {/* Border glow on hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-lime-500/50 rounded-2xl transition-colors duration-300" />
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="font-bold text-lg group-hover:text-lime-400 transition-colors">
                  {member.name.split(" ")[0]}
                </h3>
                <p className="text-sm text-white/50">{member.role}</p>
                <p className="text-xs text-white/30 mt-1">{member.time}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Band Bio */}
        <div className="mt-20 max-w-3xl mx-auto text-center">
          <div className="glass-card p-8 md:p-12">
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-6">
              Out from the depths of Denver&apos;s music scene comes the 6-piece
              kebab-rock monstrosity that is <span className="text-lime-400 font-bold">shwarma</span>.
              Creating music since 2017, they have released 3 albums and 2 EPs,
              with more on the way.
            </p>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              Renowned for delivering an eclectic musical experience—effortlessly
              transitioning between genres and changing time signatures on the fly—shwarma
              has dominated the Denver music scene and is now branching out to new cities.
            </p>
            <p className="text-2xl font-black text-lime-400 mt-8">
              Get ready to feel the shwarmth! 🔥
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
