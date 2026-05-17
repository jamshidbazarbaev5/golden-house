import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";
import { getAllNews } from "@/data/newsData";

export default function NewsSection() {
  const newsItems = getAllNews();

  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            So&apos;nggi yangiliklar
          </p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">
            Yangiliklar va tadbirlar
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.slice(0, 3).map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.id}`}
              className="group block"
            >
              <div className="overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex items-center gap-3 text-xs uppercase tracking-wider text-muted-foreground">
                <span className="text-primary">{item.category}</span>
                <span>·</span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> {item.date}
                </span>
              </div>
              <h3 className="mt-3 font-serif text-2xl leading-snug transition group-hover:text-primary">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                {item.excerpt}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium transition hover:border-primary hover:text-primary"
          >
            Barcha yangiliklar <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
