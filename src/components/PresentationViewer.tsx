"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";

interface Props {
  slides: string[];
}

export default function PresentationViewer({ slides }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const thumbsRef = useRef<HTMLDivElement>(null);

  const prev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const next = useCallback(() => {
    setActiveIndex((i) => (i + 1) % slides.length);
  }, [slides.length]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "Escape") setLightboxOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [prev, next]);

  // Scroll active thumbnail into view
  useEffect(() => {
    const el = thumbsRef.current?.querySelector<HTMLButtonElement>(
      `[data-idx="${activeIndex}"]`
    );
    el?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [activeIndex]);

  if (slides.length === 0) return null;

  return (
    <div className="pres-viewer">
      {/* Main stage */}
      <div className="pres-viewer__stage">
        <button
          type="button"
          className="pres-viewer__nav pres-viewer__nav--prev"
          onClick={prev}
          aria-label="Предыдущий слайд"
        >
          <ChevronLeft style={{ width: 24, height: 24 }} />
        </button>

        <div
          className="pres-viewer__image-wrap"
          onClick={() => setLightboxOpen(true)}
        >
          <Image
            key={slides[activeIndex]}
            src={slides[activeIndex]}
            alt={`Слайд ${activeIndex + 1}`}
            fill
            sizes="(max-width: 1024px) 100vw, 1200px"
            className="pres-viewer__image"
            priority={activeIndex === 0}
          />
          <button
            type="button"
            className="pres-viewer__zoom"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxOpen(true);
            }}
            aria-label="Увеличить"
          >
            <Maximize2 style={{ width: 18, height: 18 }} />
          </button>
        </div>

        <button
          type="button"
          className="pres-viewer__nav pres-viewer__nav--next"
          onClick={next}
          aria-label="Следующий слайд"
        >
          <ChevronRight style={{ width: 24, height: 24 }} />
        </button>
      </div>

      {/* Counter */}
      <div className="pres-viewer__counter">
        <span className="pres-viewer__counter-current">{activeIndex + 1}</span>
        <span className="pres-viewer__counter-sep">/</span>
        <span className="pres-viewer__counter-total">{slides.length}</span>
      </div>

      {/* Thumbnails */}
      <div ref={thumbsRef} className="pres-viewer__thumbs">
        {slides.map((src, i) => (
          <button
            key={src}
            type="button"
            data-idx={i}
            className={`pres-viewer__thumb${
              i === activeIndex ? " pres-viewer__thumb--active" : ""
            }`}
            onClick={() => setActiveIndex(i)}
            aria-label={`Перейти к слайду ${i + 1}`}
          >
            <Image
              src={src}
              alt={`Слайд ${i + 1}`}
              fill
              sizes="160px"
              className="pres-viewer__thumb-img"
            />
            <span className="pres-viewer__thumb-num">{i + 1}</span>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="pres-lightbox"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="pres-lightbox__close"
            onClick={() => setLightboxOpen(false)}
            aria-label="Закрыть"
          >
            <X style={{ width: 24, height: 24 }} />
          </button>
          <button
            type="button"
            className="pres-lightbox__nav pres-lightbox__nav--prev"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Предыдущий слайд"
          >
            <ChevronLeft style={{ width: 32, height: 32 }} />
          </button>
          <div
            className="pres-lightbox__image-wrap"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={slides[activeIndex]}
              alt={`Слайд ${activeIndex + 1}`}
              fill
              sizes="100vw"
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
          <button
            type="button"
            className="pres-lightbox__nav pres-lightbox__nav--next"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Следующий слайд"
          >
            <ChevronRight style={{ width: 32, height: 32 }} />
          </button>
          <div className="pres-lightbox__counter">
            {activeIndex + 1} / {slides.length}
          </div>
        </div>
      )}
    </div>
  );
}
