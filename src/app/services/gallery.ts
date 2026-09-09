import { Injectable } from '@angular/core';

export interface GalleryImage {
  id: number;
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  category: string;
}

export interface Category {
  id: string;
  label: string;
  icon: string;
}

@Injectable({ providedIn: 'root' })
export class GalleryService {
  readonly categories: Category[] = [
    { id: 'all',       label: 'Todas',       icon: 'grid_view' },
    { id: 'nature',    label: 'Natureza',    icon: 'park' },
    { id: 'cities',    label: 'Cidades',     icon: 'location_city' },
    { id: 'animals',   label: 'Animais',     icon: 'pets' },
    { id: 'abstract',  label: 'Abstrato',    icon: 'blur_on' },
    { id: 'people',    label: 'Pessoas',     icon: 'people' },
    { id: 'food',      label: 'Gastronomia', icon: 'restaurant' },
  ];

  readonly images: GalleryImage[] = [
    // Natureza
    { id: 1,  category: 'nature',   title: 'Floresta Nebulosa',    description: 'Floresta densa com névoa ao amanhecer',        url: 'https://picsum.photos/seed/forest1/1200/800',  thumbnail: 'https://picsum.photos/seed/forest1/600/400' },
    { id: 2,  category: 'nature',   title: 'Cachoeira Serena',     description: 'Queda d\'água em mata preservada',             url: 'https://picsum.photos/seed/water2/1200/800',   thumbnail: 'https://picsum.photos/seed/water2/600/400' },
    { id: 3,  category: 'nature',   title: 'Pôr do Sol no Campo',  description: 'Horizonte dourado sobre campo aberto',         url: 'https://picsum.photos/seed/sunset3/1200/800',  thumbnail: 'https://picsum.photos/seed/sunset3/600/400' },
    { id: 4,  category: 'nature',   title: 'Montanhas Nevadas',    description: 'Picos cobertos de neve ao entardecer',         url: 'https://picsum.photos/seed/mountain4/1200/800',thumbnail: 'https://picsum.photos/seed/mountain4/600/400' },
    { id: 5,  category: 'nature',   title: 'Lago Cristalino',      description: 'Lago de água clara refletindo o céu',          url: 'https://picsum.photos/seed/lake5/1200/800',    thumbnail: 'https://picsum.photos/seed/lake5/600/400' },

    // Cidades
    { id: 6,  category: 'cities',   title: 'Metrópole Noturna',    description: 'Skyline iluminado de uma grande cidade',       url: 'https://picsum.photos/seed/city6/1200/800',    thumbnail: 'https://picsum.photos/seed/city6/600/400' },
    { id: 7,  category: 'cities',   title: 'Beco Histórico',       description: 'Rua de paralelepípedo em centro histórico',    url: 'https://picsum.photos/seed/alley7/1200/800',   thumbnail: 'https://picsum.photos/seed/alley7/600/400' },
    { id: 8,  category: 'cities',   title: 'Ponte Moderna',        description: 'Arquitetura de ponte sobre rio urbano',        url: 'https://picsum.photos/seed/bridge8/1200/800',  thumbnail: 'https://picsum.photos/seed/bridge8/600/400' },
    { id: 9,  category: 'cities',   title: 'Mercado ao Ar Livre',  description: 'Feira movimentada no centro da cidade',        url: 'https://picsum.photos/seed/market9/1200/800',  thumbnail: 'https://picsum.photos/seed/market9/600/400' },

    // Animais
    { id: 10, category: 'animals',  title: 'Raposa Curiosa',       description: 'Raposa vermelha no habitat natural',           url: 'https://picsum.photos/seed/fox10/1200/800',    thumbnail: 'https://picsum.photos/seed/fox10/600/400' },
    { id: 11, category: 'animals',  title: 'Águia em Voo',         description: 'Águia planejando sobre vales rochosos',        url: 'https://picsum.photos/seed/eagle11/1200/800',  thumbnail: 'https://picsum.photos/seed/eagle11/600/400' },
    { id: 12, category: 'animals',  title: 'Lobo Solitário',       description: 'Lobo cinzento contemplando o horizonte',       url: 'https://picsum.photos/seed/wolf12/1200/800',   thumbnail: 'https://picsum.photos/seed/wolf12/600/400' },
    { id: 13, category: 'animals',  title: 'Cervo na Névoa',       description: 'Cervo entre árvores numa manhã fria',          url: 'https://picsum.photos/seed/deer13/1200/800',   thumbnail: 'https://picsum.photos/seed/deer13/600/400' },

    // Abstrato
    { id: 14, category: 'abstract', title: 'Geometria de Luz',     description: 'Prisma de luz em composição abstrata',         url: 'https://picsum.photos/seed/abstract14/1200/800',thumbnail: 'https://picsum.photos/seed/abstract14/600/400' },
    { id: 15, category: 'abstract', title: 'Ondas de Cor',         description: 'Gradientes fluidos em movimento',             url: 'https://picsum.photos/seed/wave15/1200/800',   thumbnail: 'https://picsum.photos/seed/wave15/600/400' },
    { id: 16, category: 'abstract', title: 'Fractais Digitais',    description: 'Padrão fractal em escala infinita',            url: 'https://picsum.photos/seed/fractal16/1200/800', thumbnail: 'https://picsum.photos/seed/fractal16/600/400' },

    // Pessoas
    { id: 17, category: 'people',   title: 'Retrato Urbano',       description: 'Fotografia de rua em preto e branco',         url: 'https://picsum.photos/seed/portrait17/1200/800',thumbnail: 'https://picsum.photos/seed/portrait17/600/400' },
    { id: 18, category: 'people',   title: 'Dança Tradicional',    description: 'Celebração cultural ao ar livre',             url: 'https://picsum.photos/seed/dance18/1200/800',  thumbnail: 'https://picsum.photos/seed/dance18/600/400' },
    { id: 19, category: 'people',   title: 'Trabalho Artesanal',   description: 'Artesão trabalhando peça à mão',              url: 'https://picsum.photos/seed/craft19/1200/800',  thumbnail: 'https://picsum.photos/seed/craft19/600/400' },

    // Gastronomia
    { id: 20, category: 'food',     title: 'Mise en Place',        description: 'Preparação de prato em cozinha profissional',  url: 'https://picsum.photos/seed/food20/1200/800',   thumbnail: 'https://picsum.photos/seed/food20/600/400' },
    { id: 21, category: 'food',     title: 'Mercado de Especiarias','description': 'Cores e aromas de um bazar de especiarias', url: 'https://picsum.photos/seed/spice21/1200/800',  thumbnail: 'https://picsum.photos/seed/spice21/600/400' },
    { id: 22, category: 'food',     title: 'Café da Manhã',        description: 'Mesa de café da manhã com frutas e pães',     url: 'https://picsum.photos/seed/breakfast22/1200/800',thumbnail:'https://picsum.photos/seed/breakfast22/600/400' },
  ];

  getByCategory(categoryId: string): GalleryImage[] {
    if (categoryId === 'all') return this.images;
    return this.images.filter(img => img.category === categoryId);
  }

  getCategoryLabel(categoryId: string): string {
    return this.categories.find(c => c.id === categoryId)?.label ?? categoryId;
  }
}
