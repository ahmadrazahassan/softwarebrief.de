"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { MediaVideo } from "@/data/vendor-media";
import { videoPoster, videoUrl } from "@/lib/cloudinary";

/**
 * Produktfilm in der Übersicht. Vor dem Klick lädt nur das Standbild von Cloudinary, das Video selbst erst danach.
 */
export function ProductFilm({ video, vendor }: { video: MediaVideo; vendor: string }) {
  const [playing, setPlaying] = useState(false);
  const player = useRef<HTMLVideoElement>(null);
  const poster = videoPoster(video.id, video.posterAt);

  useEffect(() => {
    if (playing) player.current?.play().catch(() => { /* Der Browser verlangt manchmal einen zweiten Klick, die Steuerung bleibt sichtbar. */ });
  }, [playing]);

  return (
    <figure className="film" id="produktfilm">
      <div className="film-frame">
        {playing ? (
          <video ref={player} controls playsInline preload="auto" poster={poster} aria-label={video.title}>
            <source src={videoUrl(video.id)} type="video/mp4" />
            Ihr Browser kann dieses Video nicht abspielen. <a href={videoUrl(video.id)}>Video herunterladen</a>
          </video>
        ) : (
          <button type="button" className="film-start" onClick={() => setPlaying(true)} aria-label={`Video abspielen: ${video.title}, Länge ${video.duration} Minuten`}>
            <Image src={poster} alt="" fill sizes="(max-width: 1100px) 100vw, 760px" unoptimized />
            <span className="film-tag">Herstellervideo von {vendor}</span>
            <span className="film-play" aria-hidden="true"><Play size={30} fill="currentColor" strokeWidth={0} /></span>
            <span className="film-time" aria-hidden="true">{video.duration} Min.</span>
          </button>
        )}
      </div>
      <figcaption>
        <strong>{video.title}</strong>
        <p>{video.description}</p>
        <p className="film-small">Das Video lädt erst nach Ihrem Klick. Untertitel liegen uns nicht vor.</p>
      </figcaption>
    </figure>
  );
}
