export interface SunsetPost {
  id: number;
  date: Date;
  title: string;
  location: string;
  description: string;
  fullContent: string;
  image: string;
}

export const sunsetPosts: SunsetPost[] = [
  {
    id: 1,
    date: new Date(2026, 0, 1),
    title: "Consistency",
    location: "South Ponto Beach, Encinitas",
    description: "Stoked to get out",
    fullContent: "Today's sunset was truly spectacular. I arrived at the beach just as the sun began its descent, and the transformation of the sky was nothing short of magical. The horizon glowed with intense oranges and deep pinks, while the clouds above caught the last rays of light, creating a dramatic display of color.\n\nAs I watched, the colors deepened and spread across the entire sky. The ocean reflected these warm hues, creating a mirror effect that doubled the beauty. Seagulls flew silhouetted against the vibrant backdrop, and the sound of waves provided the perfect soundtrack to this natural masterpiece.\n\nThe golden hour truly lived up to its name today. It's moments like these that remind me why I started this journal - to capture and remember the simple, profound beauty that nature offers us every day.",
    image: "/ponto.jpg",
  },
];


