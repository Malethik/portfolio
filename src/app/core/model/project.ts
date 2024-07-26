import { Project } from './project.interface';

export const PROJECTS: Project[] = [
  {
    name: 'MotoMarket',
    technologies: [
      'Angular',
      'TypeScript',
      'JavaScript',
      'NodeJS',
      'NestJS',
      'PostgreSQL',
    ],
    description:
      'A social selling network for motorcycle enthusiasts. The idea was to have a platform where users can sell and buy motorcycles, parts, and accessories. The project was developed using Angular for the frontend, NodeJS with NestJS for the backend, and PostgreSQL for the database.',
    image: '../../../assets/motomarket.webp',
    path: 'https://motomarketes.netlify.app/home',
    front: 'https://github.com/Malethik/MotoMarket_Front',
    back: 'https://github.com/Malethik/MotoMarket_Back',
  },
  {
    name: 'Pokedex',
    technologies: ['Angular', 'JavaScript', 'TypeScript'],
    description:
      'Using the PokeAPI, I created a Pokedex where users can search for their favorite Pokemon. The project was developed using Angular.',
    image: '../../../assets/pokedex.webp',
    path: 'https://sbirulino.netlify.app',
    front: 'https://github.com/Malethik/Pokemon-Angular-17',
  },
];
