import Image from "next/image";
import Link from "next/link";
import { FaApple, FaSpotify } from "react-icons/fa";
import { MusicRelease } from "@/lib/types";

type MusicCardProps = {
  release: MusicRelease;
};

export function MusicCard({ release }: MusicCardProps) {
  return (
    <article className="glass-card gold-ring overflow-hidden rounded-[2rem]">
      <div className="relative aspect-[4/4.2]">
        <Image
          src={release.cover}
          alt={release.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="space-y-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-serif text-2xl text-ink">{release.title}</h3>
            <p className="mt-2 text-xs uppercase tracking-[0.24em] text-gold">{release.year}</p>
          </div>
        </div>
        <p className="text-sm leading-7 text-ink/70">{release.description}</p>
        <div className="flex gap-3">
          <Link
            href={release.spotifyUrl}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-ink/80 transition hover:border-gold hover:text-gold"
          >
            <FaSpotify />
            Spotify
          </Link>
          <Link
            href={release.appleUrl}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-ink/80 transition hover:border-gold hover:text-gold"
          >
            <FaApple />
            Apple Music
          </Link>
        </div>
      </div>
    </article>
  );
}
