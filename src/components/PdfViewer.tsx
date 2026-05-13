"use client";

import { useEffect, useRef, useState } from "react";
import { Maximize2, Minimize2, ExternalLink, Loader2, Download, FileText } from "lucide-react";

export default function  PdfViewer({ src, title }: { src: string; title: string }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const objectRef = useRef<HTMLObjectElement>(null);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    // If the object tag never reports load within timeout, assume an extension or
    // the browser failed to render and show the fallback UI.
    const timeout = window.setTimeout(() => {
      if (loading) setFailed(true);
    }, 6000);
    return () => window.clearTimeout(timeout);
  }, [loading]);

  useEffect(() => {
    const onFsChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);

  const toggleFullscreen = async () => {
    const el = wrapperRef.current;
    if (!el) return;
    if (!document.fullscreenElement) {
      try {
        await el.requestFullscreen();
      } catch {
        /* ignore */
      }
    } else {
      await document.exitFullscreen();
    }
  };

  return (
    <div ref={wrapperRef} className={`pdf-viewer ${isFullscreen ? "pdf-viewer--fullscreen" : ""}`}>
      <div className="pdf-viewer__toolbar">
        <span className="pdf-viewer__name">{title}</span>
        <div className="pdf-viewer__actions">
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="pdf-viewer__action"
            title="Янги ойнада очиш"
          >
            <ExternalLink size={16} />
            <span>Янги ойнада</span>
          </a>
          <button
            type="button"
            onClick={toggleFullscreen}
            className="pdf-viewer__action"
            title={isFullscreen ? "Чиқиш" : "Тўлиқ экран"}
          >
            {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
            <span>{isFullscreen ? "Чиқиш" : "Тўлиқ экран"}</span>
          </button>
        </div>
      </div>
      <div className="pdf-viewer__frame-wrap">
        {loading && !failed && (
          <div className="pdf-viewer__loading">
            <Loader2 className="pdf-viewer__spinner" size={32} />
            <span>Ҳужжат юкланмоқда...</span>
          </div>
        )}
        {failed ? (
          <div className="pdf-viewer__error">
            <FileText size={48} />
            <p>
              Браузерингиз ёки кенгайтма (PDF extension) бу ҳужжатни кўрсата олмади.
              Юклаб олинг ёки янги ойнада очинг.
            </p>
            <div className="pdf-viewer__error-actions">
              <a
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className="pdf-viewer__action pdf-viewer__action--primary"
              >
                <ExternalLink size={16} />
                <span>Янги ойнада очиш</span>
              </a>
              <a href={src} download className="pdf-viewer__action">
                <Download size={16} />
                <span>Юклаб олиш</span>
              </a>
            </div>
          </div>
        ) : (
          <object
            ref={objectRef}
            data={`${src}#view=FitH&toolbar=1`}
            type="application/pdf"
            className="pdf-viewer__iframe"
            onLoad={() => setLoading(false)}
          >
            <div className="pdf-viewer__error">
              <FileText size={48} />
              <p>Браузерингиз PDF файлларни кўрсата олмайди.</p>
              <div className="pdf-viewer__error-actions">
                <a
                  href={src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pdf-viewer__action pdf-viewer__action--primary"
                >
                  <ExternalLink size={16} />
                  <span>Янги ойнада очиш</span>
                </a>
                <a href={src} download className="pdf-viewer__action">
                  <Download size={16} />
                  <span>Юклаб олиш</span>
                </a>
              </div>
            </div>
          </object>
        )}
      </div>
    </div>
  );
}
