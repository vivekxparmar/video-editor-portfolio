export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  poster: string;
  aspectRatio: string;
  sources: {
    quality: "2160p" | "1080p" | "720p" | "480p";
    src: string;
  }[];
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "reel-1",
    title: "Cinematic Motion Intro",
    category: "Motion Graphics",
    poster: "/images/thumbnails/reel-1.jpg",
    aspectRatio: "16/9",
    sources: [{ quality: "1080p", src: "/videos/Cam Intro.mp4" }],
  },
  {
    id: "reel-2",
    title: "Motion  Graphics",
    category: "Google Gemini Intro",
    poster: "/images/thumbnails/reel-2.jpg",
    aspectRatio: "16/9",
    sources: [{ quality: "1080p", src: "/videos/Gemini Graphics.mp4" }],
  },
  {
    id: "reel-3",
    title: "Luxurious UI",
    category: "Motion Graphics",
    poster: "/images/thumbnails/reel-3.jpg",
    aspectRatio: "16/9",
    sources: [{ quality: "1080p", src: "/videos/Glowing Liquid Glass UI.mp4" }],
  },
  {
    id: "reel-4",
    title: "Apple Liquid UI",
    category: "Motion Graphics",
    poster: "/images/thumbnails/reel-3.jpg",
    aspectRatio: "16/9",
    sources: [{ quality: "1080p", src: "/videos/Classic Liquid Glass.mp4" }],
  },
  {
    id: "reel-5",
    title: "Masking Magic",
    category: "Masking, Color Grading, Sound Design",
    poster: "/images/thumbnails/reel-3.jpg",
    aspectRatio: "16/9",
    sources: [{ quality: "1080p", src: "/videos/Masking_Magic.mp4" }],
  },
  {
    id: "reel-6",
    title: "Talking Head 1",
    category: "Talking Head Style, Podcast Style",
    poster: "/images/thumbnails/reel-3.jpg",
    aspectRatio: "9/16",
    sources: [{ quality: "1080p", src: "/videos/LukeRaw_prob3.mp4" }],
  },
  {
    id: "reel-7",
    title: "Talking Head 2",
    category: "Talking Head Style, Podcast Style",
    poster: "/images/thumbnails/reel-3.jpg",
    aspectRatio: "9/16",
    sources: [{ quality: "1080p", src: "/videos/MrBeastRaw_prob3_.mp4" }],
  },
];
