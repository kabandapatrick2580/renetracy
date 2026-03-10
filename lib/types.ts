export type NavItem = {
  label: string;
  href: string;
};

export type MusicRelease = {
  title: string;
  year: string;
  cover: string;
  spotifyUrl: string;
  appleUrl: string;
  description: string;
};

export type VideoItem = {
  title: string;
  embedUrl: string;
  thumbnail: string;
  description: string;
  uploadDate: string;
};

export type GalleryItem = {
  src: string;
  alt: string;
  heightClass: string;
};
