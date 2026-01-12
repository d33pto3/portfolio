export interface TechDetail {
  tool: string;
  purpose: string;
}

export interface TechCategory {
  category: string;
  items: TechDetail[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  summary: string;
  technicalStack: TechCategory[];
  description: string[]; // Array of paragraphs
  images: number;
  futureRoadmap: string[];
}

export const projects: Project[] = [
  {
    id: "cinehall",
    title: "CINEHALL",
    category: "Full Stack Development",
    year: "2023",
    image: "./cinehall.png",
    summary:
      "A unified cinema booking and management ecosystem that creates a seamless bridge between movie theater owners and audiences across web and mobile platforms.",
    technicalStack: [
      {
        category: "Frontend & Mobile",
        items: [
          {
            tool: "Next.js 16 (Web)",
            purpose:
              "Powers the public-facing platform to maximize SEO and server-side rendering performance.",
          },
          {
            tool: "Vite & React 19 (Admin)",
            purpose:
              "Drives the data-intensive dashboard, enabling a snappy, rich client-side interface.",
          },
          {
            tool: "Expo (Mobile)",
            purpose:
              "Delivers a native booking experience for iOS and Android, sharing design tokens via NativeWind.",
          },
          {
            tool: "Tailwind CSS",
            purpose:
              "Key driver for a consistent, responsive, and modern 'Cinematic Noir' aesthetic across all three pillars.",
          },
        ],
      },
      {
        category: "Backend",
        items: [
          {
            tool: "Node.js & Express",
            purpose:
              "Orchestrates the core RESTful API, serving as the central nervous system for all three applications.",
          },
          {
            tool: "TypeScript",
            purpose:
              "Enforces end-to-end type safety and code maintainability across the entire full-stack monorepo.",
          },
        ],
      },
      {
        category: "Infrastructure & Services",
        items: [
          {
            tool: "MongoDB",
            purpose:
              "Stores and manages complex data relationships between movies, showtimes, hall layouts, and user bookings.",
          },
          {
            tool: "Firebase Auth",
            purpose:
              "Provides secure, frictionless, and unified authentication across Web, Admin, and Mobile.",
          },
          {
            tool: "SSLCommerz",
            purpose:
              "Integrated payment gateway for processing secure, real-time online ticket transactions.",
          },
        ],
      },
    ],
    description: [
      "The cinema booking landscape is often fragmented, transforming what should be a simple night out into a frustrating experience of disjointed apps and inefficient management tools. Cinehall addresses this by building a cohesive multi-platform solution that serves two masters equally well: the moviegoer and the theater owner. The project is built with a modern, scalable architecture consisting of three core pillars: CineHall Web for high-speed discovery, CineHall Admin for sophisticated management, and CineHall Mobile for on-the-go access.",
      "The architectural solution involves a centralized Node.js/Express backend acting as the single source of truth, managing the intricate state of seat availability, movie schedules, and financial transactions across the entire ecosystem. To ensure high performance, CineHall Web utilizes Next.js's server capabilities, while CineHall Admin uses Vite to support complex interactions like managing hall layouts via drag-and-drop interfaces.",
      "A key technical highlight is the implementation of automated booking integrity checks using node-cron. This system effectively manages temporary seat locks and clears abandoned sessions to maximize ticket inventory without human intervention, ensuring strict data integrity and preventing booking collisions.",
    ],
    images: 4,
    futureRoadmap: [
      "WebSockets for real-time seat locking.",
      "Analytics suite for revenue tracking.",
      "AI-driven movie recommendation engine.",
    ],
  },
  {
    id: "imagewall",
    title: "I Mage Wall",
    category: "Frontend Development",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    summary:
      'A high-performance, masonry-style image gallery that empowers creators to curate and share visual narratives in a responsive, "Cinematic Noir" environment without aspect-ratio constraints.',
    technicalStack: [
      {
        category: "Frontend Architecture",
        items: [
          {
            tool: "React 18 & TypeScript",
            purpose: "Component logic & Type safety",
          },
          { tool: "Vite", purpose: "Next-gen build tooling" },
        ],
      },
      {
        category: "UI & Animation",
        items: [
          { tool: "Tailwind CSS", purpose: "Utility-first styling" },
          {
            tool: "Framer Motion",
            purpose: "Physics-based micro-interactions & page transitions",
          },
          { tool: "Masonic", purpose: "Virtualized grid engine" },
        ],
      },
      {
        category: "Backend & Infrastructure",
        items: [
          { tool: "Firebase Auth", purpose: "Secure identity management" },
          { tool: "Cloud Firestore", purpose: "NoSQL realtime database" },
          { tool: "Firebase Storage", purpose: "Scalable media hosting" },
        ],
      },
    ],
    description: [
      "In the current digital landscape, presenting high-resolution visual content often suffers from rigid grid systems that crop images or force unnatural aspect ratios, diminishing the artist's original intent. Additionally, building a secure, scalable backend for media hosting usually requires significant infrastructure overhead. Mage's Wall addresses these core issues by providing a fluid, adaptive platform where content dictates the form, not the other way around.",
      "The application leverages a sophisticated virtualization engine to render a seamless masonry layout. This ensures that whether a user is viewing a vertical panorama or a wide landscape, proper screen real estate is allocated dynamically. Under the hood, the architecture utilizes a serverless Firebase integration, separating concerns effectively: authentication state is managed via a custom useAuth hook listener for persistent sessions, while image metadata and binary data are synchronized in real-time between Firestore and Storage buckets.",
      'To achieve a premium "Cinematic" feel, the interface implements a glassmorphic design language using backdrop-filters and subtle gradients. Performance is maintained through optimistic UI updates and skeletal loading states, effectively negating Cumulative Layout Shift (CLS) during network requests. This combination of strict TypeScript reliability and fluid framer-motion animations results in an experience that feels both robust and organic.',
    ],
    images: 2,
    futureRoadmap: [
      "AI-Powered Categorization via Google Cloud Vision.",
      "Social Interaction Layer for user curation.",
      "Progressive Web App (PWA) for offline access.",
    ],
  },
  {
    id: "hawa",
    title: "Hawa Weather App",
    category: "Web Application",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2700&auto=format&fit=crop",
    summary:
      "A high-precision, Swiss-style weather dashboard featuring dynamic theming (Swiss, Cyber, Glass), bi-lingual support (En/Bn), and interactive map integration.",
    technicalStack: [
      {
        category: "Core",
        items: [
          { tool: "React", purpose: "UI Library" },
          { tool: "TypeScript", purpose: "Type Safety" },
          { tool: "Vite", purpose: "Build Tool" },
        ],
      },
      {
        category: "Styling",
        items: [
          { tool: "Tailwind CSS", purpose: "Utility CSS" },
          { tool: "Vanilla CSS", purpose: "Custom Styles" },
        ],
      },
      {
        category: "Libraries",
        items: [
          { tool: "React Leaflet", purpose: "Maps" },
          { tool: "i18next", purpose: "Internationalization" },
          { tool: "React Icons", purpose: "Icons" },
        ],
      },
      {
        category: "Data & APIs",
        items: [
          { tool: "Open-Meteo API", purpose: "Weather Data" },
          { tool: "Nominatim API", purpose: "Geocoding" },
        ],
      },
    ],
    description: [
      "Hawa Weather App represents a stylistic departure from minimal weather dashboards, adopting a bold 'Swiss Style' grid layout that emphasizes typographic hierarchy and structural clarity. The application offers a unique user experience with three distinct toggleable themes—Swiss, Cyber, and Glass—allowing the interface to adapt from a rigid brutalist look to a modern frosted glass aesthetic instantly.",
      "Functionally, the app provides real-time weather metrics including temperature, apparent temperature, wind speed, and humidity by leveraging the Open-Meteo API. It features robust location services, allowing users to select districts ('Zillas') from a list or pinpoint precise locations on an interactive Leaflet map, which are then reverse-geocoded to human-readable addresses.",
      "Built for accessibility and performance, the application includes full internationalization support with seamless English-to-Bangla switching. The responsive grid architecture ensures that the complex layout scales elegantly across devices, maintaining its visual integrity from desktop monitors to mobile screens.",
    ],
    images: 0,
    futureRoadmap: [
      "Implement a graphical 7-day forecast visualization.",
      "Add 'Favorites' functionality to save and manage multiple locations.",
      "Integrate severe weather alerts and browser notifications.",
      "Develop a progressive web app (PWA) version for offline capabilities.",
    ],
  },
  {
    id: "paharnama",
    title: "PAHARNAMA",
    category: "Full Stack Development",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=2700&auto=format&fit=crop",
    summary:
      "An immersive travel guide and booking platform dedicated to the serene hill tracks of Bangladesh.",
    technicalStack: [
      {
        category: "Frontend",
        items: [
          {
            tool: "Next.js",
            purpose:
              "Leveraging server-side rendering for optimal SEO and performance.",
          },
          {
            tool: "Framer Motion",
            purpose: "Creating smooth page transitions and micro-interactions.",
          },
          {
            tool: "Mapbox GL",
            purpose:
              "Rendering interactive maps for location scouting and navigation.",
          },
        ],
      },
      {
        category: "Backend",
        items: [
          {
            tool: "Supabase",
            purpose:
              "Providing a robust backend-as-a-service with auth and realtime database.",
          },
          {
            tool: "PostgreSQL",
            purpose:
              "Handling relational data for bookings, users, and locations.",
          },
        ],
      },
    ],
    description: [
      "Travelers often struggle to find reliable information and booking options for remote areas like the Hill Tracts. Paharnama is built to bridge this gap, offering a curated platform for discovery and reservation. The goal was to build an application that not only functions well but also visually represents the tranquility of the destination.",
      "We chose Next.js for its hybrid rendering capabilities, allowing us to generate static pages for travel guides (vital for SEO) while using dynamic rendering for the booking system. The integration with Supabase allowed for rapid development of the backend, utilizing Row Level Security (RLS) to safely manage user data directly from the frontend.",
      "Performance was a priority, specifically for the image-heavy content. We implemented an advanced image optimization pipeline using Next.js Image component and lazy loading strategies. Additionally, the map integration uses vector tiles to ensure smooth zooming and panning even on lower-end devices, providing an interactive exploration experience.",
    ],
    images: 0,
    futureRoadmap: [
      "Offline-first mode for remote areas.",
      "Community review and photo-sharing.",
      "Integrated local transport booking.",
    ],
  },
];
