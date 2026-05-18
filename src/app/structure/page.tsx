import { Users } from "lucide-react";
import "./structure.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ташкилот тузилмаси — Ёшлар маркази",
  description: "Ёшлар ижтимоий-иқтисодий маркази ташкилий тузилмаси.",
};

interface Department {
  title: string;
  staff: number;
}

interface Deputy {
  title: string;
  subtitle: string;
  departments: Department[];
}

const deputies: Deputy[] = [
  {
    title: "Директор ўринбосари",
    subtitle: "Лойиҳалар бўйича",
    departments: [
      { title: "Лойиҳалар бўлими", staff: 8 },
      { title: "Инвестициялар бўлими", staff: 6 },
      { title: "Ёшлар бўлими", staff: 10 },
    ],
  },
  {
    title: "Директор ўринбосари",
    subtitle: "Молия-иқтисод бўйича",
    departments: [
      { title: "Молия-иқтисод бўлими", staff: 5 },
      { title: "Бухгалтерия", staff: 4 },
      { title: "Тендер бўлими", staff: 3 },
    ],
  },
];

const directDepts: Department[] = [
  { title: "Кадрлар бўлими", staff: 4 },
  { title: "Ҳуқуқий бўлим", staff: 3 },
  { title: "АТ бўлими", staff: 5 },
];

export default function StructurePage() {
  return (
    <main className="org">
      <header className="org-header">
        <p className="org-eyebrow">Дирекция ҳақида · Ташкилот тузилмаси</p>
        <h1 className="org-heading">
          Ташкилий <em>тузилма</em>
        </h1>
      </header>

      <section className="org-chart">
        {/* ── Level 0: Director ── */}
        <div className="oc-level">
          <div className="oc-box oc-box--root">
            <span className="oc-tag">Раҳбар</span>
            <h2 className="oc-box__title oc-box__title--lg">Директор</h2>
            <p className="oc-box__sub">Ёшлар ижтимоий-иқтисодий маркази</p>
          </div>
        </div>

        {/* vertical stem from director */}
        <div className="oc-stem" />

        {/* horizontal rail spanning all 5 columns */}
        <div className="oc-rail" />

        {/* ── Level 1: Deputies + Direct depts ── */}
        <div className="oc-level oc-level--children" style={{ "--cols": 5 } as React.CSSProperties}>
          {/* Deputy 1 */}
          <div className="oc-col">
            <div className="oc-drop" />
            <div className="oc-box oc-box--deputy">
              <span className="oc-tag">{deputies[0].subtitle}</span>
              <h3 className="oc-box__title">{deputies[0].title}</h3>
            </div>
            <div className="oc-stem oc-stem--sm" />
            <div className="oc-subrail" />
            <div className="oc-leaves" style={{ "--lcols": deputies[0].departments.length } as React.CSSProperties}>
              {deputies[0].departments.map((d, i) => (
                <div key={i} className="oc-leaf">
                  <div className="oc-drop oc-drop--sm" />
                  <div className="oc-box oc-box--dept">
                    <h4 className="oc-box__title oc-box__title--sm">{d.title}</h4>
                    <span className="oc-box__staff"><Users size={11} /> {d.staff}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Deputy 2 */}
          <div className="oc-col">
            <div className="oc-drop" />
            <div className="oc-box oc-box--deputy">
              <span className="oc-tag">{deputies[1].subtitle}</span>
              <h3 className="oc-box__title">{deputies[1].title}</h3>
            </div>
            <div className="oc-stem oc-stem--sm" />
            <div className="oc-subrail" />
            <div className="oc-leaves" style={{ "--lcols": deputies[1].departments.length } as React.CSSProperties}>
              {deputies[1].departments.map((d, i) => (
                <div key={i} className="oc-leaf">
                  <div className="oc-drop oc-drop--sm" />
                  <div className="oc-box oc-box--dept">
                    <h4 className="oc-box__title oc-box__title--sm">{d.title}</h4>
                    <span className="oc-box__staff"><Users size={11} /> {d.staff}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Direct departments */}
          {directDepts.map((d, i) => (
            <div key={i} className="oc-col">
              <div className="oc-drop" />
              <div className="oc-box oc-box--dept oc-box--direct">
                <h4 className="oc-box__title oc-box__title--sm">{d.title}</h4>
                <span className="oc-box__staff"><Users size={11} /> {d.staff}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
