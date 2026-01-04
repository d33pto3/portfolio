export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 'days',
    title: 'DAYS',
    category: 'Design & Dev',
    year: '2023',
    // Using simple placeholders as requested for now
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop'
  },
  {
    id: 'tripscout',
    title: 'TRIPSCOUT',
    category: 'Mobile App',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=2700&auto=format&fit=crop'
  },
  {
    id: 'ochre',
    title: 'OCHRE',
    category: 'Branding',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop'
  },
  {
    id: 'flou',
    title: 'FLOU',
    category: 'E-commerce',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2700&auto=format&fit=crop'
  }
];
