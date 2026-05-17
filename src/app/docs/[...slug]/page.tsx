import path from "path";
import fs from "fs/promises";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { Download, FileText, ArrowLeft } from "lucide-react";
import mammoth from "mammoth";

type Params = { slug: string[] };

const decodeSegments = (slug: string[]) =>
  slug.map((s) => {
    try {
      return decodeURIComponent(s);
    } catch {
      return s;
    }
  });

const titleFromSlug = (segments: string[]) => {
  const last = segments[segments.length - 1] || "";
  return last.replace(/\.[^.]+$/, "").replace(/\+$/, "").trim();
};

const downloadUrlFromSegments = (segments: string[]) =>
  "/api/download/" + segments.map(encodeURIComponent).join("/");

async function loadDocx(filePath: string) {
  const result = await mammoth.convertToHtml(
    { path: filePath },
    {
      styleMap: [
        "p[style-name='Heading 1'] => h1:fresh",
        "p[style-name='Heading 2'] => h2:fresh",
        "p[style-name='Heading 3'] => h3:fresh",
      ],
    },
  );
  return result.value;
}

export default async function DocViewerPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const segments = decodeSegments(slug);

  if (segments.some((s) => s.includes(".."))) {
    notFound();
  }

  const filePath = path.join(
    process.cwd(),
    "public",
    "Меню",
    ...segments,
  );

  let exists = true;
  try {
    await fs.access(filePath);
  } catch {
    exists = false;
  }

  if (!exists) notFound();

  const ext = path.extname(filePath).toLowerCase();
  const title = titleFromSlug(segments);
  const downloadUrl = downloadUrlFromSegments(segments);

  // For PDFs only: show a download button instead of a viewer.
  if (ext === ".pdf") {
    return (
      <main className="doc-viewer" style={{ background: '#f5f7f6' }}>
        <div className="doc-viewer__inner">
          <div className="doc-viewer__header">
            <Link href="/" className="doc-viewer__back">
              <ArrowLeft size={16} /> Бош саҳифа
            </Link>
            <h1 className="doc-viewer__title">{title}</h1>
          </div>
          <div className="doc-viewer__fallback">
            <FileText size={48} />
            <p>PDF ҳужжатни кўриш учун уни юклаб олинг</p>
            <a href={downloadUrl} className="doc-viewer__download">
              <Download size={18} /> Юклаб олиш
            </a>
          </div>
        </div>
      </main>
    );
  }

  let body: React.ReactNode;

  if (ext === ".docx") {
    try {
      const html = await loadDocx(filePath);
      body = (
        <article
          className="doc-viewer__content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      );
    } catch {
      redirect(downloadUrl);
    }
  } else {
    body = (
      <div className="doc-viewer__fallback">
        <FileText size={48} />
        <p>Ҳужжатни кўрсатиб бўлмади.</p>
      </div>
    );
  }

  return (
    <main className="doc-viewer">
      <div className="doc-viewer__inner">
        <div className="doc-viewer__header">
          <Link href="/" className="doc-viewer__back">
            <ArrowLeft size={16} /> Бош саҳифа
          </Link>
          <h1 className="doc-viewer__title">{title}</h1>
        </div>
        {body}
      </div>
    </main>
  );
}
