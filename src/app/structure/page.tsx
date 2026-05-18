import { Users } from "lucide-react";
import "./structure.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tashkilot tuzilmasi — Yoshlar markazi",
  description: "Yoshlar ijtimoiy-iqtisodiy markazi tashkiliy tuzilmasi.",
};

interface Department {
  title: string;
  staff: number;
}

interface Branch {
  title: string;
  staff?: number;
  departments: Department[];
}

const branches: Branch[] = [
  {
    title: "Bosh muhandis",
    departments: [
      {
        title:
          "Birlamchi ruxsat beruvchi, loyiha hujjatlari va tanlov hujjatlarini tayyorlash bo'limi",
        staff: 2,
      },
      {
        title:
          "Loyihalarni boshqarish va qurilishni texnik kuzatish, shuningdek, respublika hududlaridagi texnik nazorat bo'yicha mutaxassislar bo'limi",
        staff: 2,
      },
    ],
  },
  {
    title: "Direktorning iqtisodiy masalalar bo'yicha o'rinbosari",
    departments: [
      {
        title: "Monitoring, marketing, manzilli dasturlarni tayyorlash bo'limi",
        staff: 1,
      },
      {
        title:
          "Tanlov savdolarini tashkil etish, xo'jalik-shartnoma munosabatlari va investitsiya shartnomalari bo'limi",
        staff: 1,
      },
      {
        title:
          "Xalqaro hamkorlik, Investitsiyalarni jalb qilish va rivojlantirish bo'limi",
        staff: 1,
      },
    ],
  },
  {
    title: "Buxgalteriya",
    staff: 1,
    departments: [
      { title: "Bosh yuristkonsult", staff: 1 },
      {
        title: "Kadrlar va maxsus ishlar bo'yicha mutaxassis",
        staff: 1,
      },
    ],
  },
];

export default function StructurePage() {
  const cols = branches.length;

  return (
    <main className="org">
      <header className="org-header">
        <p className="org-eyebrow">Direksiya haqida · Tashkilot tuzilmasi</p>
        <h1 className="org-heading">
          Tashkiliy <em>tuzilma</em>
        </h1>
      </header>

      <section className="org-chart">
        {/* ── Level 0: Director ── */}
        <div className="oc-level">
          <div className="oc-box oc-box--root">
            <span className="oc-tag">Rahbar</span>
            <h2 className="oc-box__title oc-box__title--lg">Direktor</h2>
          </div>
        </div>

        {/* vertical stem from director */}
        <div className="oc-stem" />

        {/* horizontal rail spanning all columns */}
        <div className="oc-rail" style={{ "--cols": cols } as React.CSSProperties} />

        {/* ── Level 1: Branches ── */}
        <div
          className="oc-level oc-level--children"
          style={{ "--cols": cols } as React.CSSProperties}
        >
          {branches.map((branch, idx) => (
            <div key={idx} className="oc-col">
              <div className="oc-drop" />
              <div className="oc-box oc-box--deputy">
                <h3 className="oc-box__title">{branch.title}</h3>
                {branch.staff !== undefined && (
                  <span className="oc-box__staff">
                    <Users size={11} /> {branch.staff}
                  </span>
                )}
              </div>
              <div className="oc-leaves">
                {branch.departments.map((d, i) => (
                  <div key={i} className="oc-leaf">
                    <div className="oc-box oc-box--dept">
                      <h4 className="oc-box__title oc-box__title--sm">
                        {d.title}
                      </h4>
                      <span className="oc-box__staff">
                        <Users size={11} /> {d.staff}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
