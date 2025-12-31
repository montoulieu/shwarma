export interface BandMember {
  name: string;
  role: string;
  shortRole: string;
  time: string;
}

const bandMembers: BandMember[] = [
  {
    name: "Pieter Montoulieu",
    role: "guitar, vocals",
    shortRole: "GTR/VOX",
    time: "2015 - present",
  },
  {
    name: "Jackson Kaufman",
    role: "guitar, vocals",
    shortRole: "GTR/VOX",
    time: "2015 - present",
  },
  {
    name: "Steve Sanchez",
    role: "drums, backing vocals",
    shortRole: "DRUMS",
    time: "2015 - present",
  },
  {
    name: "Kevin Schultz",
    role: "bass, backing vocals",
    shortRole: "BASS",
    time: "2018 - present",
  },
  {
    name: "Will Trafas",
    role: "keys",
    shortRole: "KEYS",
    time: "2022 - present",
  },
  {
    name: "Miles Mckee",
    role: "saxophone",
    shortRole: "SAX",
    time: "2024 - present",
  },
];

export default bandMembers;
