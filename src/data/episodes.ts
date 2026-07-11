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
  transcript?: string;
};

export const topics: Topic[] = [
  { name: "AI Infrastructure", color: "#3B82F6", bg: "#EFF6FF", border: "#BFDBFE" },
  { name: "AI in Finance", color: "#059669", bg: "#ECFDF5", border: "#A7F3D0" },
  { name: "AI in Healthcare", color: "#DC2626", bg: "#FEF2F2", border: "#FECACA" },
  { name: "AI at Work", color: "#0891B2", bg: "#ECFEFF", border: "#A5F3FC" },
  { name: "AI Strategy", color: "#7C3AED", bg: "#F5F3FF", border: "#DDD6FE" },
  { name: "AI & Jobs", color: "#D97706", bg: "#FFFBEB", border: "#FDE68A" },
  { name: "AI in Lending", color: "#DB2777", bg: "#FDF2F8", border: "#FBCFE8" },
];

export const episodes: Episode[] = [
  {
    id: 13,
    title: "Invisible Failures: Making the Human-AI Interaction Observable",
    guest: "Moritz Sudhof",
    guestTitle: "Co-Founder & CEO, Bigspin",
    description:
      "Moritz Sudhof, co-founder and CEO of Bigspin, joins Keith Richman to discuss why most AI failures leave no trace — no crash, no error, no complaint — and why companies can't fix what they can't see. In this episode of Applied Intelligence, Moritz explores \"invisible failures\" and \"tokenflation,\" the gap between how power users and passive users get value from AI, and how teams can build observability into the human-AI interaction to learn what \"good\" actually means for their business.",
    duration: "47:20",
    date: "Jul 8, 2026",
    topics: ["AI Strategy", "AI at Work"],
    featured: true,
    photo: "/guests/Moritz-Sudhof.png",
    youtubeId: "am9rfdOOGEo",
  },
  {
    id: 11,
    title: "Shadow Code: Quality Assurance in the Age of AI-Generated Code",
    guest: "Pramin Pradeep",
    guestTitle: "Co-Founder & CEO, BotGauge",
    description:
      "Pramin Pradeep, co-founder and CEO of BotGauge, joins Keith Richman to discuss what happens to software quality when AI can generate code faster than teams can test it. In this episode of Applied Intelligence, Pramin explores the rise of \"shadow code\" — untested AI-generated code that quietly ships to production — and how companies can use agentic end-to-end testing, human-in-the-loop guardrails, and smarter QA budgets to release reliably at speed.",
    duration: "43:10",
    date: "Jun 16, 2026",
    topics: ["AI at Work", "AI Strategy"],
    photo: "/guests/Pramin-Pradeep.jpg",
    youtubeId: "BgjsU73ySJQ",
  },
  {
    id: 12,
    title: "Governing the Agentic Workforce: Identity, Trust, and Enterprise AI",
    guest: "Joe Mayberry",
    guestTitle: "Sr. Director, Global Agentic AI, SailPoint",
    description:
      "Joe Mayberry, Senior Director of Global Agentic AI at SailPoint, joins Keith Richman to discuss what it actually takes to deploy AI agents safely inside the enterprise. In this episode of Applied Intelligence, Joe explores why agents should be governed like humans — with their own identities, trust levels, and clear ownership — and how companies can work through data readiness, enablement, and governance to move from AI experimentation toward a true hybrid workforce.",
    duration: "49:45",
    date: "May 28, 2026",
    topics: ["AI Strategy", "AI at Work"],
    photo: "/guests/Joe-Mayberry.jpeg",
    youtubeId: "a9UrkGHmOlg",
  },
  {
    id: 10,
    title: "AI-Powered Growth: Scaling Content and SEO with Machine Learning",
    guest: "Marcos Ciarrocchi",
    guestTitle: "Co-Founder, Graphite",
    description:
      "Marcos Ciarrocchi, co-founder of Graphite, joins Keith Richman to discuss how AI is reshaping organic growth, search, and brand discovery. In this episode of Applied Intelligence, Marcos explores the shift from traditional SEO to answer-engine optimization, and how companies can use data, experimentation, and AI-powered growth systems to show up where customers now make decisions.",
    duration: "45:12",
    date: "May 6, 2026",
    topics: ["AI Strategy", "AI at Work"],
    photo: "/guests/Marco.png",
    youtubeId: "4KN-QYW8jw8",
  },
  {
    id: 9,
    title: "AI for the Physical World: Transforming Fleet Operations with IoT",
    guest: "Praveen Murugesan",
    guestTitle: "VP Engineering, Samsara",
    description:
      "Praveen Murugesan, VP Engineering at Samsara, joins Keith Richman to discuss how AI is moving from software demos into the physical world. In this episode of Applied Intelligence, Praveen shares how Samsara turns massive streams of IoT, video, vehicle, and sensor data into automation and insight for real-world operations—from safer fleets to smarter frontline workflows.",
    duration: "48:30",
    date: "Apr 29, 2026",
    topics: ["AI Infrastructure", "AI Strategy"],
    photo: "/guests/Praveen.png",
    youtubeId: "TCTxnTpQZ8M",
  },
  {
    id: 8,
    title: "Mastering AI Evals: Building Trustworthy AI Products",
    guest: "Hamel Husain",
    guestTitle: "AI Evals Expert, Parlance Labs",
    description:
      "Hamel Husain, a machine learning engineer and leading voice on AI evaluations, joins Keith Richman to discuss how teams can build AI products that actually work in production. In this episode of Applied Intelligence, Hamel explains why evals, error analysis, and data-driven debugging are becoming essential skills for anyone shipping reliable AI systems.",
    duration: "52:15",
    date: "Apr 22, 2026",
    topics: ["AI Strategy", "AI at Work"],
    photo: "/guests/Hamel.png",
    youtubeId: "uwo1jRHgaoQ",
  },
  {
    id: 7,
    title: "Employees as Air Traffic Controllers: Rethinking Work in the AI Era",
    guest: "Sergio Furio",
    guestTitle: "CEO, Creditas",
    description:
      "Sergio Furio, CEO of Creditas, joins Keith Richman to discuss how AI is fundamentally transforming his Brazilian fintech company. In this episode of Applied Intelligence, Sergio reveals how transitioning from traditional apps to 24/7 AI conversational agents is revolutionizing the customer experience and loan underwriting. He details how Creditas automated 85 complex legal risk assessments for collateralized lending and drastically boosted employee productivity—allowing the company to grow 30% annually while halving its overall headcount. Sergio also shares how AI platforms like Claude, Perplexity, and Notion are shifting company culture, turning traditional managers into hands-on 'builders' who can execute end-to-end. If you want to know what real-world AI deployment looks like at a massive scale, this is a must-listen.",
    duration: "34:24",
    date: "Apr 8, 2026",
    topics: ["AI in Finance", "AI in Lending", "AI Strategy", "AI & Jobs"],
    photo: "/guests/Sergio-Furio.jpg",
    youtubeId: "VDeyqsO_sgs",
  },
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
