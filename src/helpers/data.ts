export enum Position {
  President = "President",
  VicePresident = "Vice President",
  AlumniChair = "Alumni Chair",
  JudicialChair = "Judicial Chair",
  StandardsChair = "Standards Chair",
  Treasurer = "Treasurer",
}

export interface Member {
  firstName: string;
  lastName: string;
  active: boolean;
  positions: Position[];
}

export interface PledgeClass {
  year: number;
  name: string;
  members: Member[];
}

export type MembersKeys =
  | "kjGhast"
  | "joshAnaya"
  | "tuckerCraft"
  | "huesGibbson"
  | "richardGrau"
  | "maxHightower"
  | "forrestKeller"
  | "williamHinson"
  | "nathanKoehler"
  | "andrewPhillips"
  | "elliotSchein"
  | "meyerStellmen"
  | "alexanderInskeep"
  | "julianSantovena"
  | "prestonRhea"
  | "mosesHorne"
  | "gozerKnecht"
  | "vaughnKohl"
  | "travisMewborne"
  | "oliverChapinEiserloh"
  | "nathanGlancy"
  | "kareemHinedi"
  | "michaelLeonard"
  | "benjaminMalik"
  | "ianNielsen"
  | "quinnOwyang"
  | "lamonteBrooks"
  | "joelCampbell"
  | "ethanCourtman"
  | "austinDavidson"
  | "alexHicks"
  | "andrewLadd"
  | "ethanThomas"
  | "samTurner";

export const members: { [key in MembersKeys]: Member } = {
  kjGhast: {
    firstName: "Kj",
    lastName: "Ghast",
    active: true,
    positions: [],
  },
  joshAnaya: {
    firstName: "Josh",
    lastName: "Anaya",
    active: true,
    positions: [],
  },
  tuckerCraft: {
    firstName: "Tucker",
    lastName: "Craft",
    active: true,
    positions: [],
  },
  huesGibbson: {
    firstName: "Hues",
    lastName: "Gibbson",
    active: true,
    positions: [],
  },
  richardGrau: {
    firstName: "Richard",
    lastName: "Grau",
    active: true,
    positions: [],
  },
  maxHightower: {
    firstName: "Max",
    lastName: "Hightower",
    active: true,
    positions: [],
  },
  forrestKeller: {
    firstName: "Forrest",
    lastName: "Keller",
    active: true,
    positions: [],
  },
  williamHinson: {
    firstName: "William",
    lastName: "Hinson",
    active: true,
    positions: [],
  },
  nathanKoehler: {
    firstName: "Nathan",
    lastName: "Koehler",
    active: true,
    positions: [],
  },
  andrewPhillips: {
    firstName: "Andrew",
    lastName: "Phillips",
    active: true,
    positions: [],
  },
  elliotSchein: {
    firstName: "Elliot",
    lastName: "Schein",
    active: true,
    positions: [],
  },
  meyerStellmen: {
    firstName: "Meyer",
    lastName: "Stellmen",
    active: true,
    positions: [],
  },
  alexanderInskeep: {
    firstName: "Alexander",
    lastName: "Inskeep",
    positions: [Position.VicePresident],
    active: true,
  },
  julianSantovena: {
    firstName: "Julian",
    lastName: "Santoveña",
    positions: [Position.Treasurer],
    active: true,
  },
  prestonRhea: {
    firstName: "Preston",
    lastName: "Rhea",
    active: true,
    positions: [],
  },
  mosesHorne: {
    firstName: "Moses",
    lastName: "Horne",
    active: true,
    positions: [],
  },
  gozerKnecht: {
    firstName: "Gozer",
    lastName: "Knecht",
    active: true,
    positions: [],
  },
  vaughnKohl: {
    firstName: "Vaughn",
    lastName: "Kohl",
    active: true,
    positions: [],
  },
  travisMewborne: {
    firstName: "Travis",
    lastName: "Mewborne",
    active: true,
    positions: [],
  },
  oliverChapinEiserloh: {
    firstName: "Oliver",
    lastName: "Chapin-Eiserloh",
    positions: [Position.JudicialChair],
    active: true,
  },
  nathanGlancy: {
    firstName: "Nathan",
    lastName: "Glancy",
    active: false,
    positions: [],
  },
  kareemHinedi: {
    firstName: "Kareem",
    lastName: "Hinedi",
    active: false,
    positions: [],
  },
  michaelLeonard: {
    firstName: "Michael",
    lastName: "Leonard",
    active: true,
    positions: [],
  },
  benjaminMalik: {
    firstName: "Benjamin",
    lastName: "Malik",
    positions: [Position.StandardsChair],
    active: true,
  },
  ianNielsen: {
    firstName: "Ian",
    lastName: "Nielsen",
    active: false,
    positions: [],
  },
  quinnOwyang: {
    firstName: "Quinn",
    lastName: "Owyang",
    positions: [Position.President, Position.AlumniChair],
    active: true,
  },
  lamonteBrooks: {
    firstName: "Lamonte",
    lastName: "Brooks",
    active: false,
    positions: [],
  },
  joelCampbell: {
    firstName: "Joel",
    lastName: "Campbell",
    active: false,
    positions: [],
  },
  ethanCourtman: {
    firstName: "Ethan",
    lastName: "Courtman",
    active: false,
    positions: [],
  },
  austinDavidson: {
    firstName: "Austin",
    lastName: "Davidson",
    active: false,
    positions: [],
  },
  alexHicks: {
    firstName: "Alex",
    lastName: "Hicks",
    active: false,
    positions: [],
  },
  andrewLadd: {
    firstName: "Andrew",
    lastName: "Ladd",
    active: false,
    positions: [],
  },
  ethanThomas: {
    firstName: "Ethan",
    lastName: "Thomas",
    active: false,
    positions: [],
  },
  samTurner: {
    firstName: "Sam",
    lastName: "Turner",
    active: false,
    positions: [],
  },
};

export type PledgeClassesKeys = "pc22" | "pc21" | "pc20" | "pc19" | "pc18";

export const pledgeClasses: { [key in PledgeClassesKeys]: PledgeClass } = {
  pc22: {
    year: 2022,
    name: "Alpha Iota",
    members: [
      members.kjGhast,
      members.joshAnaya,
      members.tuckerCraft,
      members.huesGibbson,
      members.richardGrau,
      members.maxHightower,
      members.forrestKeller,
      members.williamHinson,
      members.nathanKoehler,
      members.andrewPhillips,
      members.elliotSchein,
      members.meyerStellmen,
    ],
  },
  pc21: {
    year: 2021,
    name: "Alpha Theta",
    members: [members.alexanderInskeep, members.julianSantovena],
  },
  pc20: {
    year: 2020,
    name: "Alpha Eta",
    members: [
      members.prestonRhea,
      members.mosesHorne,
      members.gozerKnecht,
      members.vaughnKohl,
      members.travisMewborne,
    ],
  },
  pc19: {
    year: 2019,
    name: "Alpha Zeta",
    members: [
      members.oliverChapinEiserloh,
      members.nathanGlancy,
      members.kareemHinedi,
      members.michaelLeonard,
      members.benjaminMalik,
      members.ianNielsen,
      members.quinnOwyang,
    ],
  },
  pc18: {
    year: 2018,
    name: "Alpha Epsilon",
    members: [
      members.lamonteBrooks,
      members.joelCampbell,
      members.ethanCourtman,
      members.austinDavidson,
      members.alexHicks,
      members.andrewLadd,
      members.ethanThomas,
      members.samTurner,
    ],
  },
};

export const getMembers = (): Member[] => {
  return Object.values(members);
};

export const getExecutives = (): Member[] => {
  return Object.values(members).filter((member) => member.positions.length > 0);
};

export const getPledgeClasses = (): PledgeClass[] => {
  return Object.values(pledgeClasses);
};
