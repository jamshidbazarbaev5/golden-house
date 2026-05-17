import path from "path";
import fs from "fs/promises";
import { NextRequest } from "next/server";

const decodeSegments = (slug: string[]) =>
  slug.map((s) => {
    try {
      return decodeURIComponent(s);
    } catch {
      return s;
    }
  });

const mimeFor = (ext: string) => {
  switch (ext) {
    case ".pdf":
      return "application/pdf";
    case ".doc":
      return "application/msword";
    case ".docx":
      return "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
    default:
      return "application/octet-stream";
  }
};

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string[] }> },
) {
  const { slug } = await params;
  const segments = decodeSegments(slug);

  if (segments.some((s) => s.includes(".."))) {
    return new Response("Not found", { status: 404 });
  }

  const filePath = path.join(process.cwd(), "public", "Меню", ...segments);

  let data: Buffer;
  try {
    data = await fs.readFile(filePath);
  } catch {
    return new Response("Not found", { status: 404 });
  }

  const ext = path.extname(filePath).toLowerCase();
  const filename = path.basename(filePath);
  const encodedName = encodeURIComponent(filename);

  return new Response(new Uint8Array(data), {
    status: 200,
    headers: {
      "Content-Type": mimeFor(ext),
      "Content-Disposition": `attachment; filename*=UTF-8''${encodedName}`,
      "Content-Length": String(data.length),
      "Cache-Control": "no-store",
    },
  });
}
