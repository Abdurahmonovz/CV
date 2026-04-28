"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.clear();
    console.log("%c🔒 Source code is protected", "color: #64DC9A; font-size: 16px; font-weight: bold;");
    console.log("%c© 2025 Abdurahmonov Zayniddin", "color: #888; font-size: 12px;");

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && e.key === "I") ||
        (e.ctrlKey && e.shiftKey && e.key === "J") ||
        (e.ctrlKey && e.key === "U")
      ) {
        e.preventDefault();
        return false;
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          -webkit-tap-highlight-color: transparent;
        }

        :root {
          --color-background-primary: #ffffff;
          --color-background-secondary: #fafaf8;
          --color-text-primary: #1a1a1a;
          --color-text-secondary: #6b6b6b;
          --color-border-secondary: #e0e0e0;
          --color-border-tertiary: #e8e8e8;
        }

        body {
          background: #f5f5f0;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          padding: 16px;
          font-family: 'Syne', sans-serif;
          margin: 0;
        }

        .cv-wrap {
          font-family: 'Syne', sans-serif;
          background: var(--color-background-primary);
          color: var(--color-text-primary);
          max-width: 680px;
          width: 100%;
          padding: 0;
          box-shadow: 0 20px 40px rgba(0,0,0,0.05);
          border-radius: 0px;
        }

        .cv-header {
          background: #0f0f0f;
          color: #f5f5f0;
          padding: 24px 20px 20px;
          position: relative;
          overflow: hidden;
        }

        .cv-header::before {
          content: '';
          position: absolute;
          top: -40px;
          right: -40px;
          width: 160px;
          height: 160px;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 50%;
        }

        .cv-header::after {
          content: '';
          position: absolute;
          bottom: -60px;
          left: 60px;
          width: 120px;
          height: 120px;
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 50%;
        }

        .badge-row {
          display: flex;
          gap: 8px;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }

        .badge {
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          background: rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.6);
          padding: 4px 10px;
          border-radius: 2px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .badge.active {
          background: rgba(100,220,160,0.15);
          color: #64DC9A;
        }

        h1.name {
          font-size: 28px;
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.2;
          color: #f5f5f0;
          margin-bottom: 8px;
        }

        .role-tag {
          font-family: 'Space Mono', monospace;
          font-size: 12px;
          color: #64DC9A;
          letter-spacing: 0.08em;
        }

        .meta-row {
          display: flex;
          gap: 16px;
          margin-top: 20px;
          flex-wrap: wrap;
        }

        .meta-item {
          font-size: 11px;
          color: rgba(255,255,255,0.45);
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .meta-item span.dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(255,255,255,0.25);
          display: inline-block;
        }

        .cv-body {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 0;
          min-height: auto;
        }

        .sidebar {
          background: var(--color-background-secondary);
          border-right: 0.5px solid var(--color-border-tertiary);
          padding: 20px 16px;
        }

        .main-content {
          padding: 20px 20px;
        }

        .s-section {
          margin-bottom: 24px;
        }

        .s-label {
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-text-secondary);
          margin-bottom: 12px;
          padding-bottom: 6px;
          border-bottom: 0.5px solid var(--color-border-tertiary);
        }

        .skill-chip {
          display: inline-block;
          font-family: 'Space Mono', monospace;
          font-size: 10px;
          background: var(--color-background-primary);
          border: 0.5px solid var(--color-border-secondary);
          color: var(--color-text-primary);
          padding: 4px 8px;
          border-radius: 3px;
          margin: 3px 2px 0 0;
        }

        .skill-chip.main {
          background: #0f0f0f;
          color: #f5f5f0;
          border-color: #0f0f0f;
        }

        .contact-line {
          font-size: 11px;
          color: var(--color-text-secondary);
          margin-bottom: 8px;
          line-height: 1.5;
        }

        .contact-val {
          font-weight: 500;
          color: var(--color-text-primary);
          font-size: 11px;
        }

        .section-title {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-text-secondary);
          margin-bottom: 16px;
          padding-bottom: 6px;
          border-bottom: 0.5px solid var(--color-border-tertiary);
          font-family: 'Space Mono', monospace;
        }

        .project-card {
          background: var(--color-background-secondary);
          border: 0.5px solid var(--color-border-tertiary);
          border-radius: 8px;
          padding: 14px;
          margin-bottom: 12px;
        }

        .proj-name {
          font-size: 14px;
          font-weight: 600;
          color: var(--color-text-primary);
          margin-bottom: 4px;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 6px;
        }

        .proj-link {
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          color: #1a7a4a;
          text-decoration: none;
          letter-spacing: 0.03em;
          word-break: break-all;
        }

        .proj-link:hover {
          text-decoration: underline;
        }

        .proj-desc {
          font-size: 11px;
          color: var(--color-text-secondary);
          margin-top: 8px;
          line-height: 1.5;
        }

        .proj-tags {
          margin-top: 8px;
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .proj-tag {
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          background: var(--color-background-primary);
          border: 0.5px solid var(--color-border-secondary);
          color: var(--color-text-secondary);
          padding: 3px 8px;
          border-radius: 3px;
        }

        .prog-bar-row {
          margin-bottom: 12px;
        }

        .prog-name {
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          color: var(--color-text-primary);
          margin-bottom: 6px;
        }

        .prog-track {
          height: 4px;
          background: var(--color-border-tertiary);
          border-radius: 2px;
          overflow: hidden;
        }

        .prog-fill {
          height: 100%;
          background: #0f0f0f;
          border-radius: 2px;
        }

        .edu-item {
          margin-bottom: 14px;
        }

        .edu-title {
          font-size: 13px;
          font-weight: 600;
          color: var(--color-text-primary);
        }

        .edu-sub {
          font-size: 11px;
          color: var(--color-text-secondary);
          margin-top: 2px;
        }

        @media (max-width: 640px) {
          body {
            padding: 0;
          }

          .cv-wrap {
            max-width: 100%;
            border-radius: 0;
            box-shadow: none;
          }

          .cv-header {
            padding: 20px 16px 16px;
          }

          h1.name {
            font-size: 24px;
          }

          .role-tag {
            font-size: 10px;
          }

          .meta-row {
            gap: 12px;
            margin-top: 16px;
          }

          .meta-item {
            font-size: 10px;
          }

          .cv-body {
            grid-template-columns: 1fr;
          }

          .sidebar {
            border-right: none;
            border-bottom: 0.5px solid var(--color-border-tertiary);
            padding: 16px;
          }

          .main-content {
            padding: 16px;
          }

          .s-section {
            margin-bottom: 20px;
          }

          .section-title {
            margin-bottom: 12px;
          }

          .project-card {
            padding: 12px;
          }

          .proj-name {
            font-size: 13px;
          }

          .badge {
            font-size: 9px;
            padding: 3px 8px;
          }

          .skill-chip {
            font-size: 9px;
            padding: 3px 7px;
          }

          .contact-line {
            font-size: 10px;
          }

          .prog-name {
            font-size: 10px;
          }

          .edu-title {
            font-size: 12px;
          }

          .edu-sub {
            font-size: 10px;
          }
        }

        @media (max-width: 480px) {
          .cv-header {
            padding: 16px 14px 14px;
          }

          h1.name {
            font-size: 22px;
          }

          .badge-row {
            gap: 6px;
            margin-bottom: 12px;
          }

          .meta-row {
            gap: 10px;
            margin-top: 12px;
          }

          .sidebar,
          .main-content {
            padding: 14px;
          }

          .project-card {
            padding: 10px;
          }

          .proj-desc {
            font-size: 10px;
          }
        }
      `}</style>

      <div className="cv-wrap">
        <div className="cv-header">
          <div className="badge-row">
            <span className="badge active">Junior Frontend Dev</span>
            <span className="badge">Open to work</span>
            <span className="badge">2025</span>
          </div>
          <h1 className="name">Abdurahmonov<br />Zayniddin</h1>
          <div className="role-tag">// FRONTEND ENGINEER</div>
          <div className="meta-row">
            <div className="meta-item"><span className="dot"></span> Toshkent, O&apos;zbekiston</div>
            <div className="meta-item"><span className="dot"></span> 21.06.2005</div>
            <div className="meta-item"><span className="dot"></span> TIU Universiteti</div>
          </div>
        </div>

        <div className="cv-body">
          <div className="sidebar">
            <div className="s-section">
              <div className="s-label">Aloqa</div>
              <div className="contact-line">Joylashuv<br /><span className="contact-val">Toshkent, O&apos;zbekiston</span></div>
              <div className="contact-line">Viloyat<br /><span className="contact-val">Samarqandlik</span></div>
              <div className="contact-line">Ta&apos;lim<br /><span className="contact-val">TIU Universiteti</span></div>
            </div>

            <div className="s-section">
              <div className="s-label">Asosiy texnologiyalar</div>
              <span className="skill-chip main">React</span>
              <span className="skill-chip main">Next.js</span>
              <span className="skill-chip main">TypeScript</span>
              <span className="skill-chip main">JavaScript</span>
              <span className="skill-chip">HTML5</span>
              <span className="skill-chip">CSS3</span>
              <span className="skill-chip">Sass</span>
            </div>

            <div className="s-section">
              <div className="s-label">Ko&apos;nikmalar darajasi</div>
              <div className="prog-bar-row">
                <div className="prog-name"><span>HTML/CSS/Sass</span><span>95%</span></div>
                <div className="prog-track"><div className="prog-fill" style={{ width: "95%" }}></div></div>
              </div>
              <div className="prog-bar-row">
                <div className="prog-name"><span>JavaScript</span><span>80%</span></div>
                <div className="prog-track"><div className="prog-fill" style={{ width: "80%" }}></div></div>
              </div>
              <div className="prog-bar-row">
                <div className="prog-name"><span>React</span><span>80%</span></div>
                <div className="prog-track"><div className="prog-fill" style={{ width: "80%" }}></div></div>
              </div>
              <div className="prog-bar-row">
                <div className="prog-name"><span>TypeScript</span><span>70%</span></div>
                <div className="prog-track"><div className="prog-fill" style={{ width: "70%" }}></div></div>
              </div>
              <div className="prog-bar-row">
                <div className="prog-name"><span>Next.js</span><span>80%</span></div>
                <div className="prog-track"><div className="prog-fill" style={{ width: "80%" }}></div></div>
              </div>
            </div>

            <div className="s-section">
              <div className="s-label">Tillar</div>
              <div className="contact-line">O&apos;zbek — <span className="contact-val">Ona tili</span></div>
              <div className="contact-line">Rus — <span className="contact-val">O&apos;rta daraja</span></div>
            </div>
          </div>

          <div className="main-content">
            <div style={{ marginBottom: "20px" }}>
              <div className="section-title">Men haqimda</div>
              <p style={{ fontSize: "12px", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
                Samarqand shahridan bo&apos;lgan, hozirda Toshkentda yashaydigan Frontend dasturchiman. 
                PDP Academy&apos;da chuqurlashtirilgan o&apos;qish orqali zamonaviy web texnologiyalarni 
                o&apos;rganib, real loyihalar yaratish tajribasiga ega bo&apos;ldim. Hozirda startup loyiha ustida ishlamoqdaman.
              </p>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <div className="section-title">Ta&apos;lim</div>
              <div className="edu-item">
                <div className="edu-title">PDP Academy</div>
                <div className="edu-sub">Frontend dasturlash kursi · 2025–2026</div>
              </div>
              <div className="edu-item">
                <div className="edu-title">TIU Universiteti</div>
                <div className="edu-sub">Yurispridensiya · 2025 – hozir</div>
              </div>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <div className="section-title">Loyihalar</div>

              <div className="project-card">
                <div className="proj-name">AutoMarket</div>
                <a className="proj-link" href="https://automarket-two.vercel.app/" target="_blank" rel="noopener noreferrer">
                  automarket-two.vercel.app ↗
                </a>
                <div className="proj-desc">
                  Avtomobil sotish platformasi — PDP Academy&apos;dagi yakuniy loyiha. 
                  Foydalanuvchi interfeysi, filtrlash va mahsulot ko&apos;rish funksiyalari.
                </div>
                <div className="proj-tags">
                  <span className="proj-tag">React</span>
                  <span className="proj-tag">JavaScript</span>
                  <span className="proj-tag">CSS</span>
                  <span className="proj-tag">Vercel</span>
                </div>
              </div>

              <div className="project-card">
                <div className="proj-name">
                  FlowMarket
                  <span style={{ fontSize: "9px", background: "#e8f5ee", color: "#1a7a4a", padding: "2px 8px", borderRadius: "3px", fontFamily: "monospace" }}>STARTUP</span>
                </div>
                <a className="proj-link" href="https://flow-market-virid.vercel.app/uz/home" target="_blank" rel="noopener noreferrer">
                  flow-market-virid.vercel.app ↗
                </a>
                <div className="proj-desc">
                  Hozirda rivojlantirilayotgan startup bozor loyihasi. 
                  Ko&apos;p tilli qo&apos;llab-quvvatlash (O&apos;zbek) bilan ishlab chiqilgan zamonaviy marketplace platformasi.
                </div>
                <div className="proj-tags">
                  <span className="proj-tag">Next.js</span>
                  <span className="proj-tag">TypeScript</span>
                  <span className="proj-tag">i18n</span>
                  <span className="proj-tag">Vercel</span>
                </div>
              </div>
            </div>

            <div>
              <div className="section-title">Qo&apos;shimcha</div>
              <p style={{ fontSize: "12px", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
                Jamoa bilan ishlash, yangi texnologiyalarni tez o&apos;rganish va clean code yozishga ishtiyoqli. 
                Frontend sohada o&apos;sish va real dunyodagi muammolarni hal qiluvchi mahsulotlar yaratishga intilaman.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}