export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: "cinehall",
    title: "CINEHALL",
    category: "Full Stack Development",
    year: "2023",
    image: "./cinehall.png",
  },
  {
    id: "paharnama",
    title: "PAHARNAMA",
    category: "Full Stack Development",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=2700&auto=format&fit=crop",
  },
  {
    id: "imagewall",
    title: "I-MAGE-WALL",
    category: "Frontend Development",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
  },
  {
    id: "hawa",
    title: "HAWA",
    category: "Frontend Development",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2700&auto=format&fit=crop",
  },
];
