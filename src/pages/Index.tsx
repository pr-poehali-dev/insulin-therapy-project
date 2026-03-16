import { useState, useEffect, useCallback } from "react";
import Icon from "@/components/ui/icon";

const slides = [
  { id: 1, type: "title" },
  { id: 2, type: "relevance" },
  { id: 3, type: "goals" },
  { id: 4, type: "etiology" },
  { id: 5, type: "insulin" },
  { id: 6, type: "practice" },
  { id: 7, type: "awareness" },
  { id: 8, type: "diet" },
  { id: 9, type: "complications" },
  { id: 10, type: "role" },
  { id: 11, type: "conclusion" },
  { id: 12, type: "thanks" },
];

function SlideTitle() {
  return (
    <div className="slide-content flex flex-col items-center justify-center text-center h-full">
      <div className="title-badge">Выпускная квалификационная работа</div>
      <h1 className="slide-main-title mt-6">
        Роль фельдшера в формировании образа жизни<br />и проведении инсулинотерапии<br />у пациентов с сахарным диабетом 1 типа
      </h1>
      <div className="title-divider" />
      <div className="title-meta">
        <div className="meta-row">
          <span className="meta-label">Студент группы Ф-21</span>
          <span className="meta-value">Воловатов С. В.</span>
        </div>
        <div className="meta-row">
          <span className="meta-label">Руководитель</span>
          <span className="meta-value">Синицына Л. Г.</span>
        </div>
        <div className="meta-row">
          <span className="meta-label">Год</span>
          <span className="meta-value">2026</span>
        </div>
      </div>
      <div className="title-emblem">⚕</div>
    </div>
  );
}

function SlideRelevance() {
  const items = [
    { icon: "TrendingUp", text: "Рост заболеваемости СД 1 типа в РФ", sub: "более 277 000 человек" },
    { icon: "AlertTriangle", text: "Риск ранней инвалидизации", sub: "при отсутствии должного контроля" },
    { icon: "BookOpen", text: "Необходимость обучения пациентов", sub: "методам самоконтроля и самопомощи" },
  ];
  return (
    <div className="slide-content">
      <h2 className="slide-title">Актуальность темы</h2>
      <div className="accent-line" />
      <div className="relevance-grid">
        {items.map((item, i) => (
          <div key={i} className="relevance-card">
            <div className="relevance-number">{String(i + 1).padStart(2, "0")}</div>
            <div className="relevance-icon-wrap">
              <Icon name={item.icon} size={28} />
            </div>
            <div>
              <div className="relevance-text">{item.text}</div>
              <div className="relevance-sub">{item.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SlideGoals() {
  const tasks = [
    "Изучить научную литературу по теме сахарного диабета 1 типа",
    "Оценить уровень информированности пациентов",
    "Определить роль фельдшера в обучении и сопровождении пациентов",
  ];
  return (
    <div className="slide-content">
      <h2 className="slide-title">Цель и задачи исследования</h2>
      <div className="accent-line" />
      <div className="goal-box">
        <div className="goal-label">Цель исследования</div>
        <p className="goal-text">
          Изучить деятельность фельдшера по коррекции образа жизни и реализации программ инсулинотерапии у пациентов с сахарным диабетом 1 типа
        </p>
      </div>
      <div className="tasks-label">Задачи</div>
      <div className="tasks-list">
        {tasks.map((t, i) => (
          <div key={i} className="task-item">
            <span className="task-num">{i + 1}</span>
            <span className="task-text">{t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SlideEtiology() {
  const steps = [
    { label: "Генетическая предрасположенность", sub: "+ триггерные вирусы", color: "#1e3a6e" },
    { label: "Аутоиммунная атака", sub: "выработка аутоантител", color: "#1a56b0" },
    { label: "Гибель β-клеток", sub: "поджелудочной железы", color: "#2563eb" },
    { label: "Абсолютный дефицит инсулина", sub: "нарушение утилизации глюкозы", color: "#3b82f6" },
    { label: "Развитие СД 1 типа", sub: "хроническая гипергликемия", color: "#60a5fa" },
  ];
  return (
    <div className="slide-content">
      <h2 className="slide-title">Этиология и патогенез</h2>
      <div className="accent-line" />
      <div className="chain-wrap">
        {steps.map((s, i) => (
          <div key={i} className="chain-row">
            <div className="chain-card" style={{ borderLeftColor: s.color }}>
              <div className="chain-label" style={{ color: s.color }}>{s.label}</div>
              <div className="chain-sub">{s.sub}</div>
            </div>
            {i < steps.length - 1 && (
              <div className="chain-arrow">
                <Icon name="ChevronDown" size={20} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function SlideInsulin() {
  const types = [
    { name: "Ультракороткий", onset: "5–15 мин", peak: "1–1.5 ч", duration: "3–5 ч", color: "#1e3a6e" },
    { name: "Короткий", onset: "30 мин", peak: "2–4 ч", duration: "6–8 ч", color: "#1a56b0" },
    { name: "Средний (НПХ)", onset: "1–2 ч", peak: "4–12 ч", duration: "18–24 ч", color: "#2563eb" },
    { name: "Длительный", onset: "1–2 ч", peak: "нет пика", duration: "до 42 ч", color: "#60a5fa" },
  ];
  return (
    <div className="slide-content">
      <h2 className="slide-title">Современная инсулинотерапия</h2>
      <div className="accent-line" />
      <div className="schema-box">
        <span className="schema-badge">Интенсифицированная схема (базально-болюсная)</span>
      </div>
      <div className="insulin-table-wrap">
        <table className="insulin-table">
          <thead>
            <tr>
              <th>Вид инсулина</th>
              <th>Начало действия</th>
              <th>Пик</th>
              <th>Длительность</th>
            </tr>
          </thead>
          <tbody>
            {types.map((t, i) => (
              <tr key={i}>
                <td>
                  <span className="insulin-dot" style={{ background: t.color }} />
                  {t.name}
                </td>
                <td>{t.onset}</td>
                <td>{t.peak}</td>
                <td>{t.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SlidePractice() {
  const stats = [
    { label: "Пациентов", value: "20", icon: "Users" },
    { label: "Возраст", value: "35–60 лет", icon: "Calendar" },
    { label: "Стаж болезни", value: "10–20 лет", icon: "Clock" },
  ];
  return (
    <div className="slide-content">
      <h2 className="slide-title">Практическая часть</h2>
      <div className="accent-line" />
      <div className="practice-info">
        <div className="practice-base">
          <Icon name="Building2" size={20} />
          <span><strong>База исследования:</strong> ГБУЗ «Михайловская центральная районная больница»</span>
        </div>
        <div className="practice-method">
          <Icon name="ClipboardList" size={20} />
          <span><strong>Метод:</strong> анкетирование пациентов с СД 1 типа</span>
        </div>
      </div>
      <div className="practice-stats">
        {stats.map((s, i) => (
          <div key={i} className="practice-stat-card">
            <Icon name={s.icon} size={32} />
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function polarToCartesian(cx: number, cy: number, r: number, deg: number) {
  const rad = (deg * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

interface PieData { label: string; value: number; color: string }

function PieChart({ data }: { data: PieData[] }) {
  const total = data.reduce((s, d) => s + d.value, 0);
  let angle = -90;
  const cx = 100, cy = 100, r = 80;
  const segments = data.map((d) => {
    const startAngle = angle;
    const sweep = (d.value / total) * 360;
    angle += sweep;
    const start = polarToCartesian(cx, cy, r, startAngle);
    const end = polarToCartesian(cx, cy, r, startAngle + sweep - 0.01);
    const largeArc = sweep > 180 ? 1 : 0;
    return { ...d, path: `M ${cx} ${cy} L ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 1 ${end.x} ${end.y} Z` };
  });
  return (
    <svg viewBox="0 0 200 200" className="pie-svg">
      {segments.map((s, i) => (
        <path key={i} d={s.path} fill={s.color} stroke="white" strokeWidth="2" />
      ))}
    </svg>
  );
}

interface BarData { label: string; value: number; color: string }

function BarChart({ bars }: { bars: BarData[] }) {
  const max = Math.max(...bars.map(b => b.value));
  return (
    <div className="bar-chart">
      {bars.map((b, i) => (
        <div key={i} className="bar-row">
          <div className="bar-label">{b.label}</div>
          <div className="bar-track">
            <div
              className="bar-fill"
              style={{ width: `${(b.value / max) * 100}%`, background: b.color }}
            />
          </div>
          <div className="bar-val">{b.value}%</div>
        </div>
      ))}
    </div>
  );
}

function SlideAwareness() {
  const pieData: PieData[] = [
    { label: "Хорошо информированы", value: 20, color: "#1e3a6e" },
    { label: "Поверхностные знания", value: 55, color: "#3b82f6" },
    { label: "Не информированы", value: 25, color: "#bfdbfe" },
  ];
  return (
    <div className="slide-content">
      <h2 className="slide-title">Результаты: информированность пациентов</h2>
      <div className="accent-line" />
      <div className="chart-layout">
        <div className="pie-wrap">
          <PieChart data={pieData} />
        </div>
        <div className="chart-legend">
          {pieData.map((d, i) => (
            <div key={i} className="legend-item">
              <span className="legend-dot" style={{ background: d.color }} />
              <span className="legend-label">{d.label}</span>
              <span className="legend-val">{d.value}%</span>
            </div>
          ))}
          <div className="chart-conclusion">
            <Icon name="Info" size={16} />
            Стаж болезни не гарантирует достаточного уровня знаний
          </div>
        </div>
      </div>
    </div>
  );
}

function SlideDiet() {
  const bars: BarData[] = [
    { label: "Знают о диете", value: 100, color: "#1e3a6e" },
    { label: "Соблюдают диету", value: 25, color: "#2563eb" },
    { label: "Имеют глюкометр", value: 30, color: "#93c5fd" },
  ];
  return (
    <div className="slide-content">
      <h2 className="slide-title">Диета и самоконтроль</h2>
      <div className="accent-line" />
      <BarChart bars={bars} />
      <div className="chart-conclusion" style={{ marginTop: "1.5rem" }}>
        <Icon name="AlertCircle" size={16} />
        Выявлена крайне низкая приверженность лечению несмотря на осведомлённость
      </div>
    </div>
  );
}

function SlideComplications() {
  const pie1: PieData[] = [
    { label: "Не умеют", value: 80, color: "#1e3a6e" },
    { label: "Умеют", value: 20, color: "#bfdbfe" },
  ];
  const pie2: PieData[] = [
    { label: "Не знают", value: 40, color: "#1a56b0" },
    { label: "Знают", value: 60, color: "#bfdbfe" },
  ];
  return (
    <div className="slide-content">
      <h2 className="slide-title">Осведомлённость об осложнениях</h2>
      <div className="accent-line" />
      <div className="complications-grid">
        <div className="complication-block">
          <div className="comp-title">Помощь при гипогликемии</div>
          <PieChart data={pie1} />
          <div className="comp-stat"><strong>80%</strong> <span>не умеют оказать помощь</span></div>
        </div>
        <div className="complication-block">
          <div className="comp-title">Диабетическая стопа</div>
          <PieChart data={pie2} />
          <div className="comp-stat"><strong>40%</strong> <span>не знают о патологии</span></div>
        </div>
      </div>
    </div>
  );
}

function SlideRole() {
  const directions = [
    { icon: "Syringe", text: "Обучение технике инъекций инсулина" },
    { icon: "Calculator", text: "Расчёт хлебных единиц и дозировки" },
    { icon: "UtensilsCrossed", text: "Консультирование по диете и питанию" },
    { icon: "Heart", text: "Обучение уходу за стопами" },
    { icon: "Activity", text: "Обучение методам самоконтроля" },
  ];
  return (
    <div className="slide-content">
      <h2 className="slide-title">Роль фельдшера в обучении пациентов</h2>
      <div className="accent-line" />
      <div className="role-grid">
        {directions.map((d, i) => (
          <div key={i} className="role-card">
            <div className="role-icon">
              <Icon name={d.icon} size={26} />
            </div>
            <div className="role-text">{d.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SlideConclusion() {
  const conclusions = [
    { icon: "CheckCircle2", text: "Цель исследования достигнута в полном объёме" },
    { icon: "TrendingDown", text: "Выявлен недостаточный уровень знаний у большинства пациентов" },
    { icon: "GraduationCap", text: "65% пациентов выразили желание пройти обучение в школе диабета" },
  ];
  const bars: BarData[] = [
    { label: "Хотят пройти обучение", value: 65, color: "#1a56b0" },
    { label: "Не хотят / не определились", value: 35, color: "#bfdbfe" },
  ];
  return (
    <div className="slide-content">
      <h2 className="slide-title">Заключение</h2>
      <div className="accent-line" />
      <div className="conclusion-list">
        {conclusions.map((c, i) => (
          <div key={i} className="conclusion-item">
            <Icon name={c.icon} size={24} />
            <span>{c.text}</span>
          </div>
        ))}
      </div>
      <div className="conclusion-chart">
        <BarChart bars={bars} />
      </div>
    </div>
  );
}

function SlideThanks() {
  return (
    <div className="slide-content flex flex-col items-center justify-center text-center h-full">
      <div className="thanks-emblem">⚕</div>
      <h2 className="thanks-title">Спасибо за внимание</h2>
      <div className="title-divider" />
      <p className="thanks-sub">Готов ответить на вопросы</p>
      <div className="thanks-info">
        <div>Студент группы Ф-21 · Воловатов С. В.</div>
        <div>Руководитель: Синицына Л. Г.</div>
      </div>
    </div>
  );
}

const slideComponents: Record<string, () => JSX.Element> = {
  title: SlideTitle,
  relevance: SlideRelevance,
  goals: SlideGoals,
  etiology: SlideEtiology,
  insulin: SlideInsulin,
  practice: SlidePractice,
  awareness: SlideAwareness,
  diet: SlideDiet,
  complications: SlideComplications,
  role: SlideRole,
  conclusion: SlideConclusion,
  thanks: SlideThanks,
};

const Index = () => {
  const [current, setCurrent] = useState(0);
  const [animDir, setAnimDir] = useState<"next" | "prev">("next");
  const [key, setKey] = useState(0);
  const [isPrint, setIsPrint] = useState(false);

  const goTo = useCallback((idx: number, dir: "next" | "prev") => {
    if (idx < 0 || idx >= slides.length) return;
    setAnimDir(dir);
    setKey(k => k + 1);
    setCurrent(idx);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") goTo(current + 1, "next");
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") goTo(current - 1, "prev");
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [current, goTo]);

  const handlePrint = () => {
    setIsPrint(true);
    setTimeout(() => {
      window.print();
      setIsPrint(false);
    }, 300);
  };

  const slide = slides[current];
  const Component = slideComponents[slide.type];

  if (isPrint) {
    return (
      <div className="print-all-slides">
        {slides.map((s) => {
          const C = slideComponents[s.type];
          return (
            <div key={s.id} className="print-slide">
              <C />
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="presentation-root">
      <button className="pdf-btn" onClick={handlePrint} title="Сохранить как PDF">
        <Icon name="Download" size={16} />
        <span>PDF</span>
      </button>

      <div key={key} className={`presentation-slide slide-enter-${animDir}`}>
        <Component />
      </div>

      <div className="slide-nav">
        <button
          className="nav-btn"
          onClick={() => goTo(current - 1, "prev")}
          disabled={current === 0}
        >
          <Icon name="ChevronLeft" size={20} />
        </button>
        <div className="slide-counter">
          <span className="counter-current">{String(current + 1).padStart(2, "0")}</span>
          <span className="counter-sep">/</span>
          <span className="counter-total">{String(slides.length).padStart(2, "0")}</span>
        </div>
        <button
          className="nav-btn"
          onClick={() => goTo(current + 1, "next")}
          disabled={current === slides.length - 1}
        >
          <Icon name="ChevronRight" size={20} />
        </button>
      </div>

      <div className="slide-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === current ? "dot-active" : ""}`}
            onClick={() => goTo(i, i > current ? "next" : "prev")}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;