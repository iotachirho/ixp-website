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

// Macros:
// a = member keys
// b = member

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
  | "samTurner"
  | "quinnButterfield"
  | "evanJohnson"
  | "nickSmetzer"
  | "daltonFlood"
  | "tylerHerron"
  | "karlMenzel"
  | "cheyneMinto"
  | "evanBrooks"
  | "alexHolmes"
  | "kevinBritt"
  | "alexButler"
  | "stevenDefreitas"
  | "samElder"
  | "mattHawley"
  | "zachLucas"
  | "ryanRabat"
  | "reggieSanders"
  | "stephenSissons"
  | "wilsonDang"
  | "nealGalloway"
  | "joshLatto"
  | "chanceRaymond"
  | "scottRiggle"
  | "judsonRose"
  | "davidMcDonald"
  | "thomasOutzen"
  | "ulisesPastran"
  | "philRepsher"
  | "erikStendebach"
  | "allenTrang"
  | "ericZipf"
  | "bradSheppard"
  | "jeremySherby"
  | "benBachus"
  | "adamSanchezGuerrero"
  | "cameronHill"
  | "cameronMeyer"
  | "austinMurr"
  | "brianRusk"
  | "patrickSpence"
  | "graemeBaxter"
  | "mikeHall"
  | "andrewThompson"
  | "kellanCaldwell"
  | "johnDavis"
  | "alexGore"
  | "brianHalbert"
  | "brandonHoerl"
  | "hunterMabrey"
  | "rossRocketto"
  | "ryanThorpe"
  | "bobbyWhitlow"
  | "chrisDeFelice"
  | "scottLaPlante"
  | "codySparks"
  | "ryanWilbraham"
  | "andrewWinklemann"
  | "willClark"
  | "davidHobson"
  | "zachMcGaugh"
  | "benMcMullen"
  | "randyShoup"
  | "bradSides"
  | "jasonAtkinson"
  | "mattBrodie"
  | "brandonFitzgerald"
  | "chrisFoglesong"
  | "justinLinick"
  | "mattMcAuliff"
  | "matthewPilon"
  | "evanPounds"
  | "graysonPool"
  | "johnTalamantez"
  | "johnCooper"
  | "jayMadhani"
  | "robertMarkley"
  | "ryanMcKenna"
  | "howardWilen"
  | "jackBonner"
  | "alanCrane"
  | "benjaminDeaver"
  | "adamEgly"
  | "benGurwitz"
  | "robertPate"
  | "adamBunch"
  | "ericCline"
  | "jefferyFancher"
  | "mikeHobson"
  | "jeffHoly"
  | "benjiHyland"
  | "brianLowenberg"
  | "adamMuffett"
  | "jayRumisek"
  | "robertCowart"
  | "martyMiller"
  | "sethGreen"
  | "kendallHollrah"
  | "mattLonesk"
  | "nathanRoach"
  | "benThompson"
  | "mikeClark"
  | "ethanCohen"
  | "randallLahann"
  | "kalanMcEuen"
  | "chrisONeal"
  | "mikeRugh"
  | "mattZimmerman"
  | "andyArana"
  | "danBauer"
  | "johnathanClay"
  | "steveCline"
  | "russClinton"
  | "dougConyers"
  | "jasonCooper"
  | "ericDutcher"
  | "seanElfstrom"
  | "danHadad"
  | "jasonKlein"
  | "markLangsdorf"
  | "nateLepley"
  | "brianMcNichols"
  | "joeRobledo"
  | "mikeWalloch"
  | "chrisWhite"
  | "scottWilson"
  | "alexBlosser"
  | "scottClausen"
  | "davidCuellar"
  | "gradyEnglish"
  | "codyJones"
  | "jasonKapp"
  | "grahamKarlin"
  | "daveMolloy"
  | "gregPoulter"
  | "chrisVilla"
  | "johnAntiaco"
  | "steveBark"
  | "dougBlack"
  | "steveGotts"
  | "jeffHaggard"
  | "aaronHuffman"
  | "justinLombard"
  | "jasonMeyers"
  | "steveObrey"
  | "jamesPatrick"
  | "patrickSims"
  | "raySlanina"
  | "bryanSmith"
  | "coreySnipes"
  | "ronaldStephens"
  | "jimTaylor"
  | "danTedford"
  | "daveTimberger"
  | "wayneWalker"
  | "brianWeyant"
  | "mattWheelock";

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
  quinnButterfield: {
    firstName: "Quinn",
    lastName: "Butterfield",
    active: false,
    positions: [],
  },
  evanJohnson: {
    firstName: "Evan",
    lastName: "Johnson",
    active: false,
    positions: [],
  },
  nickSmetzer: {
    firstName: "Nick",
    lastName: "Smetzer",
    active: false,
    positions: [],
  },
  daltonFlood: {
    firstName: "Dalton",
    lastName: "Flood",
    active: false,
    positions: [],
  },
  tylerHerron: {
    firstName: "Tyler",
    lastName: "Herron",
    active: false,
    positions: [],
  },
  karlMenzel: {
    firstName: "Karl",
    lastName: "Menzel",
    active: false,
    positions: [],
  },
  cheyneMinto: {
    firstName: "Cheyne",
    lastName: "Minto",
    active: false,
    positions: [],
  },
  evanBrooks: {
    firstName: "Evan",
    lastName: "Brooks",
    active: false,
    positions: [],
  },
  alexHolmes: {
    firstName: "Alex",
    lastName: "Holmes",
    active: false,
    positions: [],
  },
  kevinBritt: {
    firstName: "Kevin",
    lastName: "Britt",
    active: false,
    positions: [],
  },
  alexButler: {
    firstName: "Alex",
    lastName: "Butler",
    active: false,
    positions: [],
  },
  stevenDefreitas: {
    firstName: "Steven",
    lastName: "Defreitas",
    active: false,
    positions: [],
  },
  samElder: {
    firstName: "Sam",
    lastName: "Elder",
    active: false,
    positions: [],
  },
  mattHawley: {
    firstName: "Matt",
    lastName: "Hawley",
    active: false,
    positions: [],
  },
  zachLucas: {
    firstName: "Zach",
    lastName: "Lucas",
    active: false,
    positions: [],
  },
  ryanRabat: {
    firstName: "Ryan",
    lastName: "Rabat",
    active: false,
    positions: [],
  },
  reggieSanders: {
    firstName: "Reggie",
    lastName: "Sanders",
    active: false,
    positions: [],
  },
  stephenSissons: {
    firstName: "Stephen",
    lastName: "Sissons",
    active: false,
    positions: [],
  },
  wilsonDang: {
    firstName: "Wilson",
    lastName: "Dang",
    active: false,
    positions: [],
  },
  nealGalloway: {
    firstName: "Neal",
    lastName: "Galloway",
    active: false,
    positions: [],
  },
  joshLatto: {
    firstName: "Josh",
    lastName: "Latto",
    active: false,
    positions: [],
  },
  chanceRaymond: {
    firstName: "Chance",
    lastName: "Raymond",
    active: false,
    positions: [],
  },
  scottRiggle: {
    firstName: "Scott",
    lastName: "Riggle",
    active: false,
    positions: [],
  },
  judsonRose: {
    firstName: "Judson",
    lastName: "Rose",
    active: false,
    positions: [],
  },

  davidMcDonald: {
    firstName: "David",
    lastName: "McDonald",
    active: false,
    positions: [],
  },
  thomasOutzen: {
    firstName: "Thomas",
    lastName: "Outzen",
    active: false,
    positions: [],
  },
  ulisesPastran: {
    firstName: "Ulises",
    lastName: "Pastran",
    active: false,
    positions: [],
  },
  philRepsher: {
    firstName: "Phil",
    lastName: "Repsher",
    active: false,
    positions: [],
  },
  erikStendebach: {
    firstName: "Erik",
    lastName: "Stendebach",
    active: false,
    positions: [],
  },
  allenTrang: {
    firstName: "Allen",
    lastName: "Trang",
    active: false,
    positions: [],
  },
  ericZipf: {
    firstName: "Eric",
    lastName: "Zipf",
    active: false,
    positions: [],
  },
  bradSheppard: {
    firstName: "Brad",
    lastName: "Sheppard",
    active: false,
    positions: [],
  },
  jeremySherby: {
    firstName: "Jeremy",
    lastName: "Sherby",
    active: false,
    positions: [],
  },
  benBachus: {
    firstName: "Ben",
    lastName: "Bachus",
    active: false,
    positions: [],
  },
  adamSanchezGuerrero: {
    firstName: "Adam",
    lastName: "Sanchez-Guerrero",
    active: false,
    positions: [],
  },
  cameronHill: {
    firstName: "Cameron",
    lastName: "Hill",
    active: false,
    positions: [],
  },
  cameronMeyer: {
    firstName: "Cameron",
    lastName: "Meyer",
    active: false,
    positions: [],
  },
  austinMurr: {
    firstName: "Austin",
    lastName: "Murr",
    active: false,
    positions: [],
  },
  brianRusk: {
    firstName: "Brian",
    lastName: "Rusk",
    active: false,
    positions: [],
  },
  patrickSpence: {
    firstName: "Patrick",
    lastName: "Spence",
    active: false,
    positions: [],
  },
  graemeBaxter: {
    firstName: "Graeme",
    lastName: "Baxter",
    active: false,
    positions: [],
  },
  mikeHall: {
    firstName: "Mike",
    lastName: "Hall",
    active: false,
    positions: [],
  },
  andrewThompson: {
    firstName: "Andrew",
    lastName: "Thompson",
    active: false,
    positions: [],
  },
  kellanCaldwell: {
    firstName: "Kellan",
    lastName: "Caldwell",
    active: false,
    positions: [],
  },
  johnDavis: {
    firstName: "John",
    lastName: "Davis",
    active: false,
    positions: [],
  },
  alexGore: {
    firstName: "Alex",
    lastName: "Gore",
    active: false,
    positions: [],
  },
  brianHalbert: {
    firstName: "Brian",
    lastName: "Halbert",
    active: false,
    positions: [],
  },
  brandonHoerl: {
    firstName: "Brandon",
    lastName: "Hoerl",
    active: false,
    positions: [],
  },
  hunterMabrey: {
    firstName: "Hunter",
    lastName: "Mabrey",
    active: false,
    positions: [],
  },
  rossRocketto: {
    firstName: "Ross",
    lastName: "Rocketto",
    active: false,
    positions: [],
  },
  ryanThorpe: {
    firstName: "Ryan",
    lastName: "Thorpe",
    active: false,
    positions: [],
  },
  bobbyWhitlow: {
    firstName: "Bobby",
    lastName: "Whitlow",
    active: false,
    positions: [],
  },
  chrisDeFelice: {
    firstName: "Chris",
    lastName: "DeFelice",
    active: false,
    positions: [],
  },
  scottLaPlante: {
    firstName: "Scott",
    lastName: "LaPlante",
    active: false,
    positions: [],
  },
  codySparks: {
    firstName: "Cody",
    lastName: "Sparks",
    active: false,
    positions: [],
  },
  ryanWilbraham: {
    firstName: "Ryan",
    lastName: "Wilbraham",
    active: false,
    positions: [],
  },
  andrewWinklemann: {
    firstName: "Andrew",
    lastName: "Winklemann",
    active: false,
    positions: [],
  },
  willClark: {
    firstName: "Will",
    lastName: "Clark",
    active: false,
    positions: [],
  },
  davidHobson: {
    firstName: "David",
    lastName: "Hobson",
    active: false,
    positions: [],
  },
  zachMcGaugh: {
    firstName: "Zach",
    lastName: "McGaugh",
    active: false,
    positions: [],
  },
  benMcMullen: {
    firstName: "Ben",
    lastName: "McMullen",
    active: false,
    positions: [],
  },
  randyShoup: {
    firstName: "Randy",
    lastName: "Shoup",
    active: false,
    positions: [],
  },
  bradSides: {
    firstName: "Brad",
    lastName: "Sides",
    active: false,
    positions: [],
  },
  jasonAtkinson: {
    firstName: "Jason",
    lastName: "Atkinson",
    active: false,
    positions: [],
  },
  mattBrodie: {
    firstName: "Matt",
    lastName: "Brodie",
    active: false,
    positions: [],
  },
  brandonFitzgerald: {
    firstName: "Brandon",
    lastName: "Fitzgerald",
    active: false,
    positions: [],
  },
  chrisFoglesong: {
    firstName: "Chris",
    lastName: "Foglesong",
    active: false,
    positions: [],
  },
  justinLinick: {
    firstName: "Justin",
    lastName: "Linick",
    active: false,
    positions: [],
  },
  mattMcAuliff: {
    firstName: "Matt",
    lastName: "McAuliff",
    active: false,
    positions: [],
  },
  matthewPilon: {
    firstName: "Matthew",
    lastName: "Pilon",
    active: false,
    positions: [],
  },
  evanPounds: {
    firstName: "Evan",
    lastName: "Pounds",
    active: false,
    positions: [],
  },
  graysonPool: {
    firstName: "Grayson",
    lastName: "Pool",
    active: false,
    positions: [],
  },
  johnTalamantez: {
    firstName: "John",
    lastName: "Talamantez",
    active: false,
    positions: [],
  },
  johnCooper: {
    firstName: "John",
    lastName: "Cooper",
    active: false,
    positions: [],
  },
  jayMadhani: {
    firstName: "Jay",
    lastName: "Madhani",
    active: false,
    positions: [],
  },
  robertMarkley: {
    firstName: "Robert",
    lastName: "Markley",
    active: false,
    positions: [],
  },
  ryanMcKenna: {
    firstName: "Ryan",
    lastName: "McKenna",
    active: false,
    positions: [],
  },
  howardWilen: {
    firstName: "Howard",
    lastName: "Wilen",
    active: false,
    positions: [],
  },
  jackBonner: {
    firstName: "Jack",
    lastName: "Bonner",
    active: false,
    positions: [],
  },
  alanCrane: {
    firstName: "Alan",
    lastName: "Crane",
    active: false,
    positions: [],
  },
  benjaminDeaver: {
    firstName: "Benjamin",
    lastName: "Deaver",
    active: false,
    positions: [],
  },
  adamEgly: {
    firstName: "Adam",
    lastName: "Egly",
    active: false,
    positions: [],
  },
  benGurwitz: {
    firstName: "Ben",
    lastName: "Gurwitz",
    active: false,
    positions: [],
  },
  robertPate: {
    firstName: "Robert",
    lastName: "Pate",
    active: false,
    positions: [],
  },
  adamBunch: {
    firstName: "Adam",
    lastName: "Bunch",
    active: false,
    positions: [],
  },
  ericCline: {
    firstName: "Eric",
    lastName: "Cline",
    active: false,
    positions: [],
  },
  jefferyFancher: {
    firstName: "Jeffery",
    lastName: "Fancher",
    active: false,
    positions: [],
  },
  mikeHobson: {
    firstName: "Mike",
    lastName: "Hobson",
    active: false,
    positions: [],
  },
  jeffHoly: {
    firstName: "Jeff",
    lastName: "Holy",
    active: false,
    positions: [],
  },
  benjiHyland: {
    firstName: "Benji",
    lastName: "Hyland",
    active: false,
    positions: [],
  },
  brianLowenberg: {
    firstName: "Brian",
    lastName: "Lowenberg",
    active: false,
    positions: [],
  },
  adamMuffett: {
    firstName: "Adam",
    lastName: "Muffett",
    active: false,
    positions: [],
  },
  jayRumisek: {
    firstName: "Jay",
    lastName: "Rumisek",
    active: false,
    positions: [],
  },
  robertCowart: {
    firstName: "Robert",
    lastName: "Cowart",
    active: false,
    positions: [],
  },
  martyMiller: {
    firstName: "Marty",
    lastName: "Miller",
    active: false,
    positions: [],
  },
  sethGreen: {
    firstName: "Seth",
    lastName: "Green",
    active: false,
    positions: [],
  },
  kendallHollrah: {
    firstName: "Kendall",
    lastName: "Hollrah",
    active: false,
    positions: [],
  },
  mattLonesk: {
    firstName: "Matt",
    lastName: "Lonesk",
    active: false,
    positions: [],
  },
  nathanRoach: {
    firstName: "Nathan",
    lastName: "Roach",
    active: false,
    positions: [],
  },
  benThompson: {
    firstName: "Ben",
    lastName: "Thompson",
    active: false,
    positions: [],
  },
  mikeClark: {
    firstName: "Mike",
    lastName: "Clark",
    active: false,
    positions: [],
  },
  ethanCohen: {
    firstName: "Ethan",
    lastName: "Cohen",
    active: false,
    positions: [],
  },
  randallLahann: {
    firstName: "Randall",
    lastName: "Lahann",
    active: false,
    positions: [],
  },
  kalanMcEuen: {
    firstName: "Kalan",
    lastName: "McEuen",
    active: false,
    positions: [],
  },
  chrisONeal: {
    firstName: "Chris",
    lastName: "O'Neal",
    active: false,
    positions: [],
  },
  mikeRugh: {
    firstName: "Mike",
    lastName: "Rugh",
    active: false,
    positions: [],
  },
  mattZimmerman: {
    firstName: "Matt",
    lastName: "Zimmerman",
    active: false,
    positions: [],
  },
  andyArana: {
    firstName: "Andy",
    lastName: "Arana",
    active: false,
    positions: [],
  },
  danBauer: {
    firstName: "Dan",
    lastName: "Bauer",
    active: false,
    positions: [],
  },
  johnathanClay: {
    firstName: "Johnathan",
    lastName: "Clay",
    active: false,
    positions: [],
  },
  steveCline: {
    firstName: "Steve",
    lastName: "Cline",
    active: false,
    positions: [],
  },
  russClinton: {
    firstName: "Russ",
    lastName: "Clinton",
    active: false,
    positions: [],
  },
  dougConyers: {
    firstName: "Doug",
    lastName: "Conyers",
    active: false,
    positions: [],
  },
  jasonCooper: {
    firstName: "Jason",
    lastName: "Cooper",
    active: false,
    positions: [],
  },
  ericDutcher: {
    firstName: "Eric",
    lastName: "Dutcher",
    active: false,
    positions: [],
  },
  seanElfstrom: {
    firstName: "Sean",
    lastName: "Elfstrom",
    active: false,
    positions: [],
  },
  danHadad: {
    firstName: "Dan",
    lastName: "Hadad",
    active: false,
    positions: [],
  },
  jasonKlein: {
    firstName: "Jason",
    lastName: "Klein",
    active: false,
    positions: [],
  },
  markLangsdorf: {
    firstName: "Mark",
    lastName: "Langsdorf",
    active: false,
    positions: [],
  },
  nateLepley: {
    firstName: "Nate",
    lastName: "Lepley",
    active: false,
    positions: [],
  },
  brianMcNichols: {
    firstName: "Brian",
    lastName: "McNichols",
    active: false,
    positions: [],
  },
  joeRobledo: {
    firstName: "Joe",
    lastName: "Robledo",
    active: false,
    positions: [],
  },
  mikeWalloch: {
    firstName: "Mike",
    lastName: "Walloch",
    active: false,
    positions: [],
  },
  chrisWhite: {
    firstName: "Chris",
    lastName: "White",
    active: false,
    positions: [],
  },
  scottWilson: {
    firstName: "Scott",
    lastName: "Wilson",
    active: false,
    positions: [],
  },
  alexBlosser: {
    firstName: "Alex",
    lastName: "Blosser",
    active: false,
    positions: [],
  },
  scottClausen: {
    firstName: "Scott",
    lastName: "Clausen",
    active: false,
    positions: [],
  },
  davidCuellar: {
    firstName: "David",
    lastName: "Cuellar",
    active: false,
    positions: [],
  },
  gradyEnglish: {
    firstName: "Grady",
    lastName: "English",
    active: false,
    positions: [],
  },
  codyJones: {
    firstName: "Cody",
    lastName: "Jones",
    active: false,
    positions: [],
  },
  jasonKapp: {
    firstName: "Jason",
    lastName: "Kapp",
    active: false,
    positions: [],
  },
  grahamKarlin: {
    firstName: "Graham",
    lastName: "Karlin",
    active: false,
    positions: [],
  },
  daveMolloy: {
    firstName: "Dave",
    lastName: "Molloy",
    active: false,
    positions: [],
  },
  gregPoulter: {
    firstName: "Greg",
    lastName: "Poulter",
    active: false,
    positions: [],
  },
  chrisVilla: {
    firstName: "Chris",
    lastName: "Villa",
    active: false,
    positions: [],
  },
  johnAntiaco: {
    firstName: "John",
    lastName: "Antiaco",
    active: false,
    positions: [],
  },
  steveBark: {
    firstName: "Steve",
    lastName: "Bark",
    active: false,
    positions: [],
  },
  dougBlack: {
    firstName: "Doug",
    lastName: "Black",
    active: false,
    positions: [],
  },
  steveGotts: {
    firstName: "Steve",
    lastName: "Gotts",
    active: false,
    positions: [],
  },
  jeffHaggard: {
    firstName: "Jeff",
    lastName: "Haggard",
    active: false,
    positions: [],
  },
  aaronHuffman: {
    firstName: "Aaron",
    lastName: "Huffman",
    active: false,
    positions: [],
  },
  justinLombard: {
    firstName: "Justin",
    lastName: "Lombard",
    active: false,
    positions: [],
  },
  jasonMeyers: {
    firstName: "Jason",
    lastName: "Meyers",
    active: false,
    positions: [],
  },
  steveObrey: {
    firstName: "Steve",
    lastName: "Obrey",
    active: false,
    positions: [],
  },
  jamesPatrick: {
    firstName: "James",
    lastName: "Patrick",
    active: false,
    positions: [],
  },
  patrickSims: {
    firstName: "Patrick",
    lastName: "Sims",
    active: false,
    positions: [],
  },
  raySlanina: {
    firstName: "Ray",
    lastName: "Slanina",
    active: false,
    positions: [],
  },
  bryanSmith: {
    firstName: "Bryan",
    lastName: "Smith",
    active: false,
    positions: [],
  },
  coreySnipes: {
    firstName: "Corey",
    lastName: "Snipes",
    active: false,
    positions: [],
  },
  ronaldStephens: {
    firstName: "Ronald",
    lastName: "Stephens",
    active: false,
    positions: [],
  },
  jimTaylor: {
    firstName: "Jim",
    lastName: "Taylor",
    active: false,
    positions: [],
  },
  danTedford: {
    firstName: "Dan",
    lastName: "Tedford",
    active: false,
    positions: [],
  },
  daveTimberger: {
    firstName: "Dave",
    lastName: "Timberger",
    active: false,
    positions: [],
  },
  wayneWalker: {
    firstName: "Wayne",
    lastName: "Walker",
    active: false,
    positions: [],
  },
  brianWeyant: {
    firstName: "Brian",
    lastName: "Weyant",
    active: false,
    positions: [],
  },
  mattWheelock: {
    firstName: "Matt",
    lastName: "Wheelock",
    active: false,
    positions: [],
  },
};

export type PledgeClassesKeys =
  | "pc2022"
  | "pc2021"
  | "pc2020"
  | "pc2019"
  | "pc2018"
  | "pc2017"
  | "pc2016"
  | "pc2015"
  | "pc2014"
  | "pc2013"
  | "pc2012"
  | "pc2011"
  | "pc2010"
  | "pc2009"
  | "pc2008"
  | "pc2007"
  | "pc2006"
  | "pc2005"
  | "pc2004"
  | "pc2003"
  | "pc2002"
  | "pc2001"
  | "pc2000"
  | "pc1999"
  | "pc1998"
  | "pc1997"
  | "pc1996"
  | "pc1995";

export const pledgeClasses: { [key in PledgeClassesKeys]: PledgeClass } = {
  pc2022: {
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
  pc2021: {
    year: 2021,
    name: "Alpha Theta",
    members: [members.alexanderInskeep, members.julianSantovena],
  },
  pc2020: {
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
  pc2019: {
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
  pc2018: {
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
  pc2017: {
    year: 2017,
    name: "Alpha Delta",
    members: [
      members.quinnButterfield,
      members.evanJohnson,
      members.nickSmetzer,
    ],
  },
  pc2016: {
    year: 2016,
    name: "Alpha Gamma",
    members: [
      members.daltonFlood,
      members.tylerHerron,
      members.karlMenzel,
      members.cheyneMinto,
    ],
  },
  pc2015: {
    year: 2015,
    name: "Chi",
    members: [members.evanBrooks, members.alexHolmes],
  },
  pc2014: {
    year: 2014,
    name: "Upsilon",
    members: [
      members.kevinBritt,
      members.alexButler,
      members.stevenDefreitas,
      members.samElder,
      members.mattHawley,
      members.zachLucas,
      members.ryanRabat,
      members.reggieSanders,
      members.stephenSissons,
    ],
  },
  pc2013: {
    year: 2013,
    name: "Tau",
    members: [
      members.wilsonDang,
      members.nealGalloway,
      members.joshLatto,
      members.chanceRaymond,
      members.scottRiggle,
      members.judsonRose,
    ],
  },
  pc2012: {
    year: 2012,
    name: "Sigma",
    members: [
      members.davidMcDonald,
      members.thomasOutzen,
      members.ulisesPastran,
      members.philRepsher,
      members.erikStendebach,
      members.allenTrang,
      members.ericZipf,
    ],
  },
  pc2011: {
    year: 2011,
    name: "Rho",
    members: [members.bradSheppard, members.jeremySherby],
  },
  pc2010: {
    year: 2010,
    name: "Pi",
    members: [
      members.benBachus,
      members.adamSanchezGuerrero,
      members.cameronHill,
      members.cameronMeyer,
      members.austinMurr,
      members.brianRusk,
      members.patrickSpence,
    ],
  },
  pc2009: {
    year: 2009,
    name: "Omicron",
    members: [members.graemeBaxter, members.mikeHall, members.andrewThompson],
  },
  pc2008: {
    year: 2008,
    name: "Xi",
    members: [
      members.kellanCaldwell,
      members.johnDavis,
      members.alexGore,
      members.brianHalbert,
      members.brandonHoerl,
      members.hunterMabrey,
      members.rossRocketto,
      members.ryanThorpe,
      members.bobbyWhitlow,
    ],
  },
  pc2007: {
    year: 2007,
    name: "Nu",
    members: [
      members.chrisDeFelice,
      members.scottLaPlante,
      members.codySparks,
      members.ryanWilbraham,
      members.andrewWinklemann,
    ],
  },
  pc2006: {
    year: 2006,
    name: "Mu",
    members: [
      members.willClark,
      members.davidHobson,
      members.zachMcGaugh,
      members.benMcMullen,
      members.randyShoup,
      members.bradSides,
    ],
  },
  pc2005: {
    year: 2005,
    name: "Lambda",
    members: [
      members.jasonAtkinson,
      members.mattBrodie,
      members.brandonFitzgerald,
      members.chrisFoglesong,
      members.justinLinick,
      members.mattMcAuliff,
      members.matthewPilon,
      members.evanPounds,
    ],
  },
  pc2004: {
    year: 2004,
    name: "Lambda",
    members: [members.graysonPool, members.johnTalamantez],
  },
  pc2003: {
    year: 2003,
    name: "Iota",
    members: [
      members.johnCooper,
      members.jayMadhani,
      members.robertMarkley,
      members.ryanMcKenna,
      members.howardWilen,
    ],
  },
  pc2002: {
    year: 2002,
    name: "Theta",
    members: [
      members.jackBonner,
      members.alanCrane,
      members.benjaminDeaver,
      members.adamEgly,
      members.benGurwitz,
      members.robertPate,
    ],
  },
  pc2001: {
    year: 2001,
    name: "Eta",
    members: [
      members.adamBunch,
      members.ericCline,
      members.jefferyFancher,
      members.mikeHobson,
      members.jeffHoly,
      members.benjiHyland,
      members.brianLowenberg,
      members.adamMuffett,
      members.jayRumisek,
    ],
  },
  pc2000: {
    year: 2000,
    name: "Zeta",
    members: [members.robertCowart, members.martyMiller],
  },
  pc1999: {
    year: 1999,
    name: "Epsilon",
    members: [
      members.sethGreen,
      members.kendallHollrah,
      members.mattLonesk,
      members.nathanRoach,
      members.benThompson,
    ],
  },
  pc1998: {
    year: 1998,
    name: "Delta",
    members: [
      members.mikeClark,
      members.ethanCohen,
      members.randallLahann,
      members.kalanMcEuen,
      members.chrisONeal,
      members.mikeRugh,
      members.mattZimmerman,
    ],
  },
  pc1997: {
    year: 1997,
    name: "Gamma",
    members: [
      members.andyArana,
      members.danBauer,
      members.johnathanClay,
      members.steveCline,
      members.russClinton,
      members.dougConyers,
      members.jasonCooper,
      members.ericDutcher,
      members.seanElfstrom,
      members.danHadad,
      members.jasonKlein,
      members.markLangsdorf,
      members.nateLepley,
      members.brianMcNichols,
      members.joeRobledo,
      members.mikeWalloch,
      members.chrisWhite,
      members.scottWilson,
    ],
  },
  pc1996: {
    year: 1997,
    name: "Beta",
    members: [
      members.alexBlosser,
      members.scottClausen,
      members.davidCuellar,
      members.gradyEnglish,
      members.codyJones,
      members.jasonKapp,
      members.grahamKarlin,
      members.daveMolloy,
      members.gregPoulter,
      members.chrisVilla,
    ],
  },
  pc1995: {
    year: 1996,
    name: "Alpha",
    members: [
      members.johnAntiaco,
      members.steveBark,
      members.dougBlack,
      members.steveGotts,
      members.jeffHaggard,
      members.aaronHuffman,
      members.justinLombard,
      members.jasonMeyers,
      members.steveObrey,
      members.jamesPatrick,
      members.patrickSims,
      members.raySlanina,
      members.bryanSmith,
      members.coreySnipes,
      members.ronaldStephens,
      members.jimTaylor,
      members.danTedford,
      members.daveTimberger,
      members.wayneWalker,
      members.brianWeyant,
      members.mattWheelock,
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
