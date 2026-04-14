// ═══════════════════════════════════════════════════════════════
//  SHEIKH LAB — Central People Database
//
//  To add a member:    add an entry to the array below
//  To mark as alumni:  set isAlumni: true, left: "20XX"
//  To hide someone:    set hidden: true
//
//  IMAGES: Place images in assets/images/
//          Set image to "" to show silhouette fallback
//
//  role options:
//    "phd"      → PhD Scholar
//    "postdoc"  → Postdoctoral Researcher
//    "masters"  → Master's Student
// ═══════════════════════════════════════════════════════════════

const LAB_MEMBERS = [

  {
    id: "adrian-zahir",
    role: "phd",
    isAlumni: false,
    hidden: false,

    image: "assets/images/adrian-zahir.jpg",

    name: "Adriana Zahir",

    joined: "1217 AE",
    left: "",

    department: "Department of Xenobiological Engineering",
    university: "Solmira Arcane Institute of Biotechnics",

    email: "adriana.zahir@solmira-lab.ae",

    bio: "Adriana Zahir researches adaptive bio-construct systems and emergent cellular intelligence in high-radiation environments across off-world biomes.",

    researchAreas: [
      "Xenobiological systems",
      "Synthetic living networks",
      "Adaptive cellular intelligence"
    ],

    currentProject: "Engineering self-stabilizing bio-lattices capable of learning environmental radiation patterns in orbital ecosystems.",

    education: [
      {
        degree: "PhD (Ongoing)",
        institution: "Solmira Arcane Institute of Biotechnics",
        year: "1217 AE–Present"
      },
      {
        degree: "M.Sc Bio-Systems Engineering",
        institution: "Nadirion Institute of Molecular Sciences",
        url:     "https://doi.org/10.xxxx/xxxxx",
      }
    ],

    publications: [
      {
        title: "Adaptive resonance patterns in synthetic cellular networks",
        authors:  "Zahir A, Sheikh JA",
        journal: "Journal of Xenobiological Engineering",
        year:     3511,
        type:     "article",
        tags:     ["Sci-Fi"],
        doi:      "https://doi.org/...",
        featured: false,
      },
      {
        title:   "Memory formation in bio-lattice computational organisms",
        authors: "Zahir A",
        journal: "Annals of Synthetic Life Studies",
        year:    "1215 AE",
        type:    "article",
        tags:    ["Fiction"],
        doi:     "https://doi.org/10.xxxx/xxxxx",
        featured: false,
      },
    ],

    links: {
      scholar: "https://scholar.solmira.ae/adriana-zahir",
      linkedin: "https://network.solmira.ae/adriana",
      github: "https://forge.solmira.ae/adriana",
      orcid: "https://orcid.solmira.ae/0000-000X",
      website: "https://adriana.solmira.ae"
    }
  },

  {
    id:       "phd-scholar-1",
    role:     "phd",
    isAlumni: false,
    hidden:   false,

    // Place photo at assets/images/phd-scholar-1.jpg
    // Set to "" to show silhouette fallback
    image:    "",

    name:     "Scholar Name",
    joined:   "20XX",
    left:     "",

    department:  "Department of Biotechnology",
    university:  "Jamia Hamdard, New Delhi",
    email:       "email@example.com",

    bio:            "Short biography placeholder.",
    researchAreas:  ["Research Area One", "Research Area Two"],
    currentProject: "Current project placeholder.",

    education: [
      { degree: "PhD (Ongoing)", institution: "Jamia Hamdard", year: "20XX–Present" },
      { degree: "M.Sc Biotechnology", institution: "University Name", year: "20XX" },
    ],

    publications: [],
    links: { scholar:"", linkedin:"", github:"", orcid:"", website:"" },
  },

  {
    id:       "phd-scholar-2",
    role:     "phd",
    isAlumni: false,
    hidden:   false,
    image:    "",

    name:     "Scholar Name",
    joined:   "20XX",
    left:     "",

    department:  "Department of Biotechnology",
    university:  "Jamia Hamdard, New Delhi",
    email:       "email@example.com",

    bio:            "Short biography placeholder.",
    researchAreas:  ["Research Area One", "Research Area Two"],
    currentProject: "Current project placeholder.",

    education: [
      { degree: "PhD (Ongoing)", institution: "Jamia Hamdard", year: "20XX–Present" },
      { degree: "M.Sc Biotechnology", institution: "University Name", year: "20XX" },
    ],

    publications: [],
    links: { scholar:"", linkedin:"", github:"", orcid:"", website:"" },
  },

  {
    id:       "postdoc-1",
    role:     "postdoc",
    isAlumni: false,
    hidden:   false,
    image:    "",

    name:     "Researcher Name",
    joined:   "20XX",
    left:     "",

    department:  "Department of Biotechnology",
    university:  "Jamia Hamdard, New Delhi",
    email:       "email@example.com",

    bio:            "Short biography placeholder.",
    researchAreas:  ["Research Area One"],
    currentProject: "Current project placeholder.",

    education: [
      { degree: "PhD", institution: "University Name", year: "20XX" },
    ],

    publications: [],
    links: { scholar:"", linkedin:"", github:"", orcid:"", website:"" },
  },

  {
    id:       "masters-1",
    role:     "masters",
    isAlumni: false,
    hidden:   false,
    image:    "",

    name:     "Student Name",
    joined:   "20XX",
    left:     "",

    department:  "Department of Biotechnology",
    university:  "Jamia Hamdard, New Delhi",
    email:       "",

    bio:            "",
    researchAreas:  ["Dissertation area placeholder"],
    currentProject: "",
    education:      [],
    publications:   [],
    links: { scholar:"", linkedin:"", github:"", orcid:"", website:"" },
  },

  {
    id:       "masters-2",
    role:     "masters",
    isAlumni: false,
    hidden:   false,
    image:    "",

    name:     "Student Name",
    joined:   "20XX",
    left:     "",

    department:  "Department of Biotechnology",
    university:  "Jamia Hamdard, New Delhi",
    email:       "",

    bio:            "",
    researchAreas:  ["Dissertation area placeholder"],
    currentProject: "",
    education:      [],
    publications:   [],
    links: { scholar:"", linkedin:"", github:"", orcid:"", website:"" },
  },

  {
    id:       "masters-3",
    role:     "masters",
    isAlumni: false,
    hidden:   false,
    image:    "",

    name:     "Student Name",
    joined:   "20XX",
    left:     "",

    department:  "Department of Biotechnology",
    university:  "Jamia Hamdard, New Delhi",
    email:       "",

    bio:            "",
    researchAreas:  ["Dissertation area placeholder"],
    currentProject: "",
    education:      [],
    publications:   [],
    links: { scholar:"", linkedin:"", github:"", orcid:"", website:"" },
  },

  {
    id:       "alumni-1",
    role:     "phd",
    isAlumni: true,
    hidden:   false,
    image:    "",

    name:     "Alumni Name",
    joined:   "20XX",
    left:     "20XX",

    department:  "Department of Biotechnology",
    university:  "Jamia Hamdard, New Delhi",
    email:       "",

    bio:            "Thesis area placeholder. Now at [current position].",
    researchAreas:  ["Research Area One"],
    currentProject: "",

    education: [
      { degree: "PhD", institution: "Jamia Hamdard", year: "20XX" },
    ],

    publications: [],
    links: { scholar:"", linkedin:"", github:"", orcid:"", website:"" },
  },

  {
    id:       "alumni-2",
    role:     "postdoc",
    isAlumni: true,
    hidden:   false,
    image:    "",

    name:     "Alumni Name",
    joined:   "20XX",
    left:     "20XX",

    department:  "Department of Biotechnology",
    university:  "Jamia Hamdard, New Delhi",
    email:       "",

    bio:            "Research area placeholder. Now at [current position].",
    researchAreas:  ["Research Area One"],
    currentProject: "",

    education: [
      { degree: "PhD", institution: "University Name", year: "20XX" },
    ],

    publications: [],
    links: { scholar:"", linkedin:"", github:"", orcid:"", website:"" },
  },

  {
    id: "layla-haroun",
    role: "postdoc",
    isAlumni: true,
    hidden: false,
    image: "assets/images/layla-haroun.jpg",

    name: "Layla Haroun",

    joined: "1208 AE",
    left: "1215 AE",

    department: "Department of Biotechnology",
    university: "Solmira Arcane Institute of Biotechnics",

    email: "layla.haroun@archive-solmira.ae",

    bio: "Layla Haroun is a former postdoctoral researcher specializing in synthetic microbial systems and adaptive bio-networks. Her work focused on designing self-regulating biological frameworks for environmental stability in extreme ecosystems.",

    researchAreas: [
      "Synthetic microbial systems",
      "Adaptive bio-networks",
      "Environmental biotechnology"
    ],

    currentProject: "",

    education: [
      {
        degree: "PhD in Synthetic Biotechnology",
        institution: "Solmira Arcane Institute of Biotechnics",
        year: "1208 AE"
      },
      {
        degree: "M.Sc Biotechnology",
        institution: "Nadirion Institute of Molecular Sciences",
        year: "1205 AE"
      }
    ],

    publications: [
      {
        title:    "Self-regulating microbial lattices in unstable environments",
        authors:  "Haroun L",
        journal:  "Journal of Synthetic Ecosystem Engineering",
        year:     3511,
        type:     "review",
        tags:     ["Fiction"],
        doi:      "https://doi.org/10.xxxx/xxxxx",
        featured: false,
      },
      {
        title:    "Adaptive feedback loops in engineered biological networks",
        authors:  "Haroun L",
        journal:  "Annals of Xenobiological Systems",
        year:     "1213 AE",
        type:     "book-chapter",
        tags:     ["Fiction"],
        doi:      "",
        featured: true,
      }
    ],

    links: {
      scholar: "https://scholar.solmira.ae/layla-haroun",
      linkedin: "https://network.solmira.ae/layla",
      github: "https://forge.solmira.ae/layla",
      orcid: "https://orcid.solmira.ae/0000-000X",
      website: ""
    }
  },

];