import { GalleryItem, MusicRelease, NavItem, VideoItem } from "@/lib/types";

export const siteConfig = {
  name: "Rene & Tracy",
  title: "Rene & Tracy | Premium Gospel Music Ministry from Kigali, Rwanda",
  description:
    "Rene & Tracy are a Kigali-based married gospel duo creating worship experiences, ministry moments, and gospel music that draw nations into Christ-centered transformation.",
  url: "https://www.rene-tracy.com",
  location: "Kigali, Rwanda",
  email: "booking@reneandtracy.com",
  mission: "Nations Intimately Experiencing In Christ Realities",
  keywords: [
    "Rwandan Gospel Artists",
    "Gospel Music Rwanda",
    "Kigali Gospel Music",
    "Christian Worship Rwanda",
    "Rene and Tracy Gospel Music",
    "Gospel duo Rwanda",
    "Worship ministry Kigali"
  ]
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Music", href: "/music" },
  { label: "Videos", href: "/videos" },
  { label: "Gallery", href: "/gallery" },
  { label: "Ministry", href: "/ministry" },
  { label: "Contact", href: "/contact" }
];

export const musicReleases: MusicRelease[] = [
  {
    title: "Imirimo yawe irivugira",
    year: "2025",
    cover: "/images/imirimo.png",
    spotifyUrl: "#",
    appleUrl: "#",
    description: "A worship single centered on greace and the power of God's work in our lives."
  },
  {
    title: "Jehovah",
    year: "2024",
    cover: "/images/rene_tracy.jpg",
    spotifyUrl: "#",
    appleUrl: "#",
    description: "A powerful anthem declaring the majesty and faithfulness of God as Jehovah."
  },
  {
    title: "Niryubahwe",
    year: "2023",
    cover: "/images/niryubahwe.png",
    spotifyUrl: "#",
    appleUrl: "#",
    description: "A heartfelt worship song expressing adoration and praise to God for His goodness and faithfulness."
  }
];

export const videos: VideoItem[] = [
  {
    title: "In Christ Now | Alive in Us",
    embedUrl: "https://www.youtube.com/watch?v=p28jkdCaSaA&pp=ygUOcmVuZSBhbmQgdHJhY3k%3D",
    thumbnail: "/images/gallery1.svg",
    description: "An intimate worship moment from Kigali.",
    uploadDate: "2025-04-10"
  },
  {
    title: "In Christ now worship #Worship experience",
    embedUrl: "https://www.youtube.com/watch?v=qDvYVflAff4&t=4373s",
    thumbnail: "/images/gallery2.svg",
    description: "A stripped-back ministry set focused on prayer and healing.",
    uploadDate: "2025-06-21"
  },
  {
    title: "Official Music Video",
    embedUrl: "https://www.youtube.com/embed/VIDEO_ID_3",
    thumbnail: "/images/gallery3.svg",
    description: "A cinematic visual anchored in worship and testimony.",
    uploadDate: "2025-09-14"
  }
];

export const galleryItems: GalleryItem[] = [
  {
    src: "/images/gallery1.svg",
    alt: "Rene and Tracy in a worship session",
    heightClass: "h-[24rem]"
  },
  {
    src: "/images/gallery2.svg",
    alt: "The duo during a ministry event in Kigali",
    heightClass: "h-[18rem]"
  },
  {
    src: "/images/gallery3.svg",
    alt: "A portrait of Rene and Tracy dressed elegantly",
    heightClass: "h-[28rem]"
  },
  {
    src: "/images/gallery4.svg",
    alt: "Stage lighting around Rene and Tracy during worship",
    heightClass: "h-[22rem]"
  }
];

export const heroSlides = [
  {
    src: "/images/hero.png",
    alt: "Rene and Tracy portrait in Kigali",
    eyebrow: "Featured Portrait"
  },
  {
    src: "/images/rene_tracy.jpg",
    alt: "Rene and Tracy in a worship session",
    eyebrow: "Worship Session"
  },
  {
    src: "/images/rene_tracy_portrait.png",
    alt: "Editorial portrait of Rene and Tracy",
    eyebrow: "Editorial Portrait"
  },
  {
    src: "/images/tracy.png",
    alt: "Live atmosphere during ministry",
    eyebrow: "Live Atmosphere"
  }
];
