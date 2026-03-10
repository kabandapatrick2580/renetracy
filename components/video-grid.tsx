import { VideoItem } from "@/lib/types";

type VideoGridProps = {
  items: VideoItem[];
};

export function VideoGrid({ items }: VideoGridProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {items.map((video) => (
        <article key={video.title} className="glass-card gold-ring overflow-hidden rounded-[2rem]">
          <div className="aspect-video">
            <iframe
              src={video.embedUrl}
              title={video.title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
          <div className="p-6">
            <h3 className="font-serif text-2xl text-ink">{video.title}</h3>
            <p className="mt-3 text-sm leading-7 text-ink/70">{video.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
