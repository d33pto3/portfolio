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
  images: string[];
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
      "A comprehensive cinema management platform empowering hall owners and streamlining ticket booking for moviegoers.",
    technicalStack: [
      {
        category: "Frontend",
        items: [
          {
            tool: "React",
            purpose:
              "Building a dynamic, responsive user interface for both admins and customers.",
          },
          {
            tool: "Redux Toolkit",
            purpose:
              "Managing complex global state for booking flows and admin dashboards.",
          },
          {
            tool: "Tailwind CSS",
            purpose:
              "Rapidly styling a custom design system with consistent constraints.",
          },
        ],
      },
      {
        category: "Backend",
        items: [
          {
            tool: "Node.js & Express",
            purpose:
              "Handling API requests, authentication, and business logic.",
          },
          {
            tool: "MongoDB",
            purpose:
              "Storing flexible data structures for movies, showtimes, and user profiles.",
          },
          {
            tool: "Mongoose",
            purpose:
              "Modeling application data and enforcing schema validation.",
          },
        ],
      },
      {
        category: "Infrastructure",
        items: [
          {
            tool: "Vercel",
            purpose: "Hosting the frontend with seamless CI/CD integration.",
          },
          { tool: "Render", purpose: "Deploying the backend API service." },
        ],
      },
    ],
    description: [
      "The cinema industry in Bangladesh has largely remained offline, leading to inefficiencies in ticket management and a frustrating experience for moviegoers. Cinehall addresses this gap by providing a centralized platform that connects cinema hall owners, administrators, and users. The challenge was to create a system that could handle real-time inventory management (seat booking) while providing distinct interfaces for different user roles.",
      "The architectural solution involves a decoupled Monorepo structure (client and server). The backend utilizes a RESTful API design to serve data to the React frontend. We implemented role-based access control (RBAC) to ensure security across Admin, Hall Owner, and User portals. For the booking engine, we used optimistic UI updates to ensure the application feels snappy, while verifying seat availability on the server side to prevent double bookings.",
      "A key technical implementation detail was the real-time seat selection feature. We utilized efficient data structures to map the cinema seating layout and optimized database queries to check seat status instantly. This ensures that when a user selects a seat, it is temporarily locked to prevent race conditions during high-traffic movie releases.",
    ],
    images: [
      "./cinehall.png",
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2670&auto=format&fit=crop",
    ],
    futureRoadmap: [
      "Implement WebSocket integration for live seat updates across all connected clients.",
      "Add a mobile application using React Native for on-the-go booking.",
      "Integrate automated payment gateway refunds for cancelled shows.",
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
    images: [
      "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=2700&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506197061617-7f5c0b093236?q=80&w=2670&auto=format&fit=crop",
    ],
    futureRoadmap: [
      "Develop an offline-first mode for travelers with poor connectivity in remote areas.",
      "Implement a community review and photo-sharing system.",
      "Partner with local transport services for integrated travel logistics.",
    ],
  },
  {
    id: "imagewall",
    title: "I-MAGE-WALL",
    category: "Frontend Development",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    summary:
      "A highly interactive, infinite-scroll image gallery showcasing high-resolution photography with fluid animations.",
    technicalStack: [
      {
        category: "Frontend",
        items: [
          {
            tool: "Vanilla JavaScript",
            purpose: "Maximizing performance without framework overhead.",
          },
          {
            tool: "WebGL (Three.js)",
            purpose: "Rendering distortion effects and smooth transitions.",
          },
          {
            tool: "Lenis Scroll",
            purpose:
              " providing a normalized, smooth scrolling experience across browsers.",
          },
        ],
      },
    ],
    description: [
      "Standard image galleries can feel static and uninspiring. I-Mage-Wall was created as an experiment to push the boundaries of web interactions, transforming a simple gallery into an engaging visual journey. The primary challenge was handling a large number of high-field images without compromising frame rate or scrolling performance.",
      "The solution leverages WebGL to offload rendering tasks to the GPU. By treating images as textures on a 3D plane, we achieved distortion effects and fluid motion that CSS alone cannot match. We implemented a custom virtual scroll logic that only renders items currently in the viewport (and a small buffer), recycling DOM elements to keep the memory footprint low.",
      "A standout technical detail is the implementation of the 'infinite' scroll illusion. By mathematically modifying the UV coordinates in the fragment shader based on scroll position, we created a seamless loop. This required precise synchronization between the DOM scroll position and the WebGL scene to ensure the HTML overlays perfectly matched the 3D canvas.",
    ],
    images: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop",
    ],
    futureRoadmap: [
      "Add support for video textures mixed with static images.",
      "Implement gyroscope-based interaction for mobile devices.",
      "Create a backend to allow users to upload and curate their own walls.",
    ],
  },
  {
    id: "hawa",
    title: "HAWA",
    category: "Frontend Development",
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2700&auto=format&fit=crop",
    summary:
      "A conceptual weather visualization app that turns meteorological data into soothing, generative art.",
    technicalStack: [
      {
        category: "Frontend",
        items: [
          {
            tool: "React",
            purpose: "Managing UI state and component lifecycle.",
          },
          {
            tool: "Canvas API",
            purpose: "Drawing real-time generative particles based on data.",
          },
          {
            tool: "OpenWeatherMap API",
            purpose: "Sourcing live meteorological data.",
          },
        ],
      },
    ],
    description: [
      "Weather apps are typically purely functional and data-heavy. Hawa attempts to humanize this data, translating numbers into feelings. The challenge was to create an algorithm that could meaningfully interpret weather conditions—like wind speed 15km/h vs 50km/h—into distinct visual styles without being literal or cartoonish.",
      "We built a generative art engine using the HTML5 Canvas API. The engine takes weather parameters as inputs to control particle physics, color palettes, and motion blur. For instance, high humidity triggers a 'soft focus' effect mimicking mist, while high wind speeds increase the entropy and velocity of the particles.",
      "Handling the state management for the generative system was crucial. We separated the animation loop from the React render cycle to ensure 60fps performance. React manages the data fetching and high-level configuration, while a dedicated class handles the per-frame canvas drawing, preventing React re-renders from causing stutter in the animation.",
    ],
    images: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2700&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=2670&auto=format&fit=crop",
    ],
    futureRoadmap: [
      "Integrate audio synthesis to generate ambient, weather-based soundscapes.",
      "Expand the generative models to include astronomical data (moon phases, star visibility).",
      "Release as a standalone PWA or native mobile app widget.",
    ],
  },
];
