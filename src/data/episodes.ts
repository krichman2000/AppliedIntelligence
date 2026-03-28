export type Topic = {
  name: string;
  color: string;
  bg: string;
  border: string;
};

export type Episode = {
  id: number;
  title: string;
  guest: string;
  guestTitle: string;
  description?: string;
  duration: string;
  date: string;
  topics: string[];
  featured?: boolean;
  photo?: string;
  youtubeId?: string;
};

export const topics: Topic[] = [
  { name: "AI Infrastructure", color: "#3B82F6", bg: "#EFF6FF", border: "#BFDBFE" },
  { name: "AI in Finance", color: "#059669", bg: "#ECFDF5", border: "#A7F3D0" },
  { name: "AI in Healthcare", color: "#DC2626", bg: "#FEF2F2", border: "#FECACA" },
  { name: "AI at Work", color: "#0891B2", bg: "#ECFEFF", border: "#A5F3FC" },
  { name: "AI Strategy", color: "#7C3AED", bg: "#F5F3FF", border: "#DDD6FE" },
  { name: "AI & Jobs", color: "#D97706", bg: "#FFFBEB", border: "#FDE68A" },
];

export const episodes: Episode[] = [
  {
    id: 1,
    title: "Enterprise AI: From Experimentation to Implementation",
    guest: "Jeff McMillan",
    guestTitle: "Founder, McMillan AI",
    description:
      "Jeff McMillan, founder of McMillan AI and former Head of Firmwide AI at Morgan Stanley, shares insights on helping organizations move beyond experimentation to practical, scalable AI implementation.",
    duration: "55:00",
    date: "Mar 24, 2026",
    topics: ["AI Strategy", "AI in Finance"],
    featured: true,
    photo: "/guests/McMillan.webp",
    youtubeId: "j09QMR57xLQ",
  },
  {
    id: 2,
    title: "Transforming Global Payments with AI",
    guest: "Anthony Soohoo",
    guestTitle: "CEO, MoneyGram",
    description:
      "Anthony Soohoo, CEO of MoneyGram, discusses leading the company's transformation into a digital-first global payments platform, modernizing financial infrastructure, and building customer-centric, technology-driven organizations.",
    duration: "52:30",
    date: "Mar 17, 2026",
    topics: ["AI in Finance", "AI Strategy"],
    photo: "/guests/Anthony-Soohoo.jpeg",
    youtubeId: "YXGP07vtFMc",
  },
  {
    id: 3,
    title: "Sustainable Urban Mobility Through AI",
    guest: "Fredrik Hjelm",
    guestTitle: "CEO, Voi Technology",
    description:
      "Fredrik Hjelm, co-founder and CEO of Voi Technology, explores how AI is enabling the shift toward cleaner, more efficient mobility solutions across European cities.",
    duration: "48:15",
    date: "Mar 10, 2026",
    topics: ["AI Infrastructure", "AI Strategy"],
    photo: "/guests/Fredrik-Hjelm.png",
    youtubeId: "p5Y4jQkKdqY",
  },
  {
    id: 4,
    title: "Reinventing Men's Health with AI",
    guest: "Sokratis Papafloratos",
    guestTitle: "CEO, Numan",
    description:
      "Sokratis Papafloratos, co-founder and CEO of Numan, discusses how personalized, technology-driven care is reshaping how patients engage with modern healthcare systems.",
    duration: "51:20",
    date: "Mar 3, 2026",
    topics: ["AI in Healthcare"],
    photo: "/guests/Sokratis-Papafloratos.png",
    youtubeId: "xohuren94vY",
  },
  {
    id: 5,
    title: "Building AI-Powered Fitness Platforms",
    guest: "Brendan Falk",
    guestTitle: "CEO, Hercules App",
    description:
      "Brendan Falk, founder and CEO of Hercules, shares how data-driven strategies and AI are helping users optimize training, nutrition, and overall health.",
    duration: "44:50",
    date: "Feb 24, 2026",
    topics: ["AI Strategy", "AI at Work"],
    photo: "/guests/Brendan-Falk.jpeg",
    youtubeId: "uPJNY3mSwVI",
  },
  {
    id: 6,
    title: "AI in Education and Student Success",
    guest: "Jason Robinovitz",
    guestTitle: "COO, Score at the Top",
    description:
      "Jason Robinovitz, COO at Score at the Top, discusses how AI and innovative learning strategies are improving outcomes for students through personalized education.",
    duration: "44:36",
    date: "Feb 17, 2026",
    topics: ["AI at Work", "AI Strategy"],
    photo: "/guests/Jason-Robinovitz.jpeg",
    youtubeId: "EPBP7qrFaKc",
  },
];

export function getTopicByName(name: string): Topic | undefined {
  return topics.find((t) => t.name === name);
}

export function getFeaturedEpisode(): Episode | undefined {
  return episodes.find((e) => e.featured);
}

export function getRecentEpisodes(): Episode[] {
  return episodes.filter((e) => !e.featured);
}
