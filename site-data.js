// ═══════════════════════════════════════════════════════════════
//  SHEIKH LAB — Central Site Data
//
//  This file controls ALL content on index.html.
//  Edit values here — index.html renders everything automatically.
//
//  ⚠️ ICONS: Do not change icon values unless you know the
//     correct FontAwesome class. Browse: https://fontawesome.com/icons
//
//  IMAGES: Place images in assets/images/
//          Set to "" to show silhouette fallback
// ═══════════════════════════════════════════════════════════════

const SITE_DATA = {

  // ── Site Meta ──────────────────────────────────────────────
  // Used for meta tags, Open Graph, and browser tab title
  meta: {
    siteUrl:     "https://theaxonaut.github.io/", // update when hosted
    ogImage:     "assets/images/og-image.png",           // drop in your image here
  },

  // ── Principal Investigator ─────────────────────────────────
  pi: {
    name:         "Dr. Javaid Ahmad Sheikh",
    title:        "Assistant Professor (Principal Investigator)",
    department:   "Department of Biotechnology, Jamia Hamdard",

    // Place PI photo at assets/images/pi.jpg
    // Set to "" to show silhouette fallback
    image:        "assets/images/pi.jpg",

    bio:          "Dr. Javaid Ahmad Sheikh is an immunologist and biotechnology researcher specializing in infectious diseases, particularly tuberculosis. His work spans molecular immunology, vaccine design, and translational diagnostics. He has contributed significantly to understanding host–pathogen interactions and immune responses, integrating computational and experimental biology to identify novel therapeutic and diagnostic targets.",

    education: {
      degree:      "Ph.D. PGIMER (2013)",
      affiliation: "Jamia Hamdard",
    },

    scholarUrl:   "https://scholar.google.com/citations?user=cxCM-5kAAAAJ",
    orcid:        "0000-0002-9628-3169",
    facultyUrl:   "https://www.jamiahamdard.ac.in/facultyBio?id=248",

    researchInterests: [
      "Immunology",
      "Infectious Diseases",
      "Tuberculosis Research",
      "Host–Pathogen Interactions",
      "Vaccine Development",
      "Translational Biotechnology",
      "Molecular Diagnostics",
      "Comparative Genomics",
    ],

    highlights: [
      "Developed peptide-based vaccine candidates against tuberculosis using reverse vaccinology",
      "Worked on differentiation of sarcoidosis and tuberculosis at molecular level",
      "Explored serodiagnostic biomarkers and immune complexes in TB",
      "Investigated host immune responses and pathogen virulence mechanisms",
      "Studied SARS-CoV-2 phylogenetics and disease evolution during COVID-19 pandemic",
    ],

    courses: [
      // ⚠️ DO NOT CHANGE icon values
      { name: "Immunology",            icon: "fa-solid fa-virus" },
      { name: "Microbiology",          icon: "fa-solid fa-bacterium" },
      { name: "Developmental Biology", icon: "fa-solid fa-seedling" },
      { name: "Animal Biotechnology",  icon: "fa-solid fa-dna" },
    ],
  },

  // ── Lab Statistics ─────────────────────────────────────────
  stats: {
    publications: 29,
    grants:       2,
  },

  // ── Hero Card ──────────────────────────────────────────────
  hero: {
    subtitle:    "Department of Biotechnology, Jamia Hamdard",
    heading:     "Sheikh Immunology & Infectious Disease Lab",
    description: "Decoding host–pathogen interactions and translational immunology. We integrate genomics, immunological assays, and computational approaches to develop diagnostics, vaccines, and therapeutic strategies.",
    cardTitle:   "Tuberculosis Immunology & Pathogen Virulence",
    cardDesc:    "Developing promiscuous peptide-based vaccine candidates and unearthing serodiagnostic biomarkers using comparative genomics and reverse vaccinology.",
  },

  // ── Marquee Items ──────────────────────────────────────────
  marquee: [
    "BSL-II Laboratory",
    "Animal Cell Culture Facility",
    "Plant Tissue Culture Facility",
    "Interdisciplinary Biotechnology Research",
    "Host-Pathogen Interaction",
  ],

  // ── Research Areas ─────────────────────────────────────────
  // Min: 2, Max: 8. "Interested in our Work?" is always appended automatically.
  researchAreas: [
    {
      title:       "Tuberculosis Immunology",
      description: "Understanding immune responses and pathogen strategies in TB infections, targeting host evasion mechanisms and biomarker discovery.",
      tag:         "Ongoing Project",
      // ⚠️ DO NOT CHANGE — FontAwesome icon class
      icon:        "fa-solid fa-shield-virus",
      color:       "primary",
    },
    {
      title:       "Vaccine Development",
      description: "Designing peptide and DNA-based vaccines using computational and experimental approaches via reverse vaccinology frameworks.",
      tag:         "Major Domain",
      // ⚠️ DO NOT CHANGE — FontAwesome icon class
      icon:        "fa-solid fa-syringe",
      color:       "secondary",
    },
    {
      title:       "Host–Pathogen Interaction",
      description: "Studying molecular mechanisms of infection and immune evasion, aiming to bridge the knowledge gap in multi-drug resistant strains.",
      tag:         "In-vivo/In-vitro",
      // ⚠️ DO NOT CHANGE — FontAwesome icon class
      icon:        "fa-solid fa-disease",
      color:       "accent",
    },
    {
      title:       "Translational Diagnostics",
      description: "Developing non-invasive biomarkers, diagnostic platforms, and assay tools for precise identification of infectious pathogens.",
      tag:         "Clinical Translational",
      // ⚠️ DO NOT CHANGE — FontAwesome icon class
      icon:        "fa-solid fa-vial-circle-check",
      color:       "secondary",
    },
    {
      title:       "Viral Evolution & Genomics",
      description: "Analyzing viral phylogenetics, including SARS-CoV-2 evolution and emergence of novel structural variants across populations.",
      tag:         "Completed Focus",
      // ⚠️ DO NOT CHANGE — FontAwesome icon class
      icon:        "fa-solid fa-chart-line",
      color:       "primary",
    },
  ],

  // ── Publications Section ───────────────────────────────────
  publications: {
    description: "The lab has published high-impact research spanning tuberculosis immunology and diagnostics, vaccine development, host immune response mechanisms, and phylogenetics of emerging pathogens like SARS-CoV-2.",
    focusTopics: [
      "Tuberculosis immunology and diagnostics",
      "Vaccine development",
      "Host immune response",
      "COVID-19 genomics",
    ],
  },

  // ── Grants Section ─────────────────────────────────────────
  grants: {
    description: "Funded by Indian government agencies to advance peptide-based diagnostics and reverse vaccinology paradigms. The projects fuel core operations in designing multi-epitope vaccines against infectious agents.",
    infrastructure: [
      "BSL-II Laboratory Infrastructure",
      "Fully Equipped Animal Cell Culture Facility",
      "Plant Tissue Culture & Bioreactor Hub",
    ],
  },

  // ── Contact Details ────────────────────────────────────────
  contact: {
    address:       "Room 221, SCLS, Jamia Hamdard, New Delhi – 110062, India",
    emailPrimary:  "jasheikh@jamiahamdard.ac.in",
    emailAlt:      "javaidspr@gmail.com",
    phone:         "+91-9417666314",
    lat:           28.512676,
    lng:           77.248977,
    googleMapsUrl: "https://www.google.com/maps?q=28.512665,77.249403",
  },

  // ── Footer ─────────────────────────────────────────────────
  footer: {
    tagline: "Dedicated to pushing the boundaries of translational immunology and combating emergent global infectious pathogens.",
  },
};