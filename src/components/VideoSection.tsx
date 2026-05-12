"use client";

import { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => {});
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  };

  const goFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    const anyV = v as HTMLVideoElement & {
      webkitRequestFullscreen?: () => Promise<void>;
      webkitEnterFullscreen?: () => void;
    };
    if (v.requestFullscreen) v.requestFullscreen().catch(() => {});
    else if (anyV.webkitRequestFullscreen) anyV.webkitRequestFullscreen();
    else if (anyV.webkitEnterFullscreen) anyV.webkitEnterFullscreen();
  };

  return (
    <section className="video-section">
      <div className="video-section__inner">
        <div className="video-section__header">
          <span className="video-section__label">Видеопрезентация</span>
          <h2 className="video-section__title">Посмотрите наш проект</h2>
          <p className="video-section__sub">
            Узнайте больше о современной концепции Ёшлар маркази
          </p>
        </div>

        <div className="video-section__player">
          <video
            ref={videoRef}
            className="video-section__video"
            src="/video1.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onClick={() => togglePlay()}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onVolumeChange={(e) => setIsMuted((e.target as HTMLVideoElement).muted)}
          />

          <div className="video-section__controls">
            <button
              type="button"
              className="video-section__btn"
              onClick={togglePlay}
              aria-label={isPlaying ? "Пауза" : "Воспроизвести"}
            >
              {isPlaying ? (
                <Pause style={{ width: 20, height: 20 }} />
              ) : (
                <Play style={{ width: 20, height: 20 }} />
              )}
            </button>
            <button
              type="button"
              className="video-section__btn"
              onClick={toggleMute}
              aria-label={isMuted ? "Включить звук" : "Выключить звук"}
            >
              {isMuted ? (
                <VolumeX style={{ width: 20, height: 20 }} />
              ) : (
                <Volume2 style={{ width: 20, height: 20 }} />
              )}
            </button>
            <button
              type="button"
              className="video-section__btn"
              onClick={goFullscreen}
              aria-label="На весь экран"
            >
              <Maximize style={{ width: 20, height: 20 }} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
