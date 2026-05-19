"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Tech() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "1. Stimulate in Specialized Chamber",
      desc: "Donor cells are placed in Cellivate’s specialized, directionally-specific electromagnetic stimulation chamber. This unique magnetic modulation triggers target signal secretion.",
      detail: "Our proprietary technology utilizes pulsed electromagnetic fields (PEMF) to activate TRPC1 calcium channels, kickstarting a mitochondrial survival adaptation known as mitohormesis."
    },
    {
      title: "2. Cultivate & Signal Production",
      desc: "Cells are grown in their preferred environment. Under the magnetic influence, they release signal-rich extracellular vesicles (EVs) at massive yields.",
      detail: "Instead of raw nutrients, we focus on instructing cells. The cells behave naturally, secreting both 'happy signals' and functional proteins into the media."
    },
    {
      title: "3. Filter & Collect BOOSTER™",
      desc: "We collect the conditioned media, filter out cellular debris, and quantify EV concentration using nanoparticle tracking analysis (NTA) and chip-based systems.",
      detail: "We add stabilizer additives to guarantee batch consistency. The final output is a completely animal-free, chemically defined bio-signal cocktail ready for target applications."
    }
  ];

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg-main)" }}>
      {/* Intro Hero banner */}
      <section style={{ background: "#0a0a0c", color: "#ffffff", padding: "80px 0", textAlign: "center", position: "relative" }}>
        <div className="section-container" style={{ position: "relative", zIndex: 2 }}>
          <span style={{ color: "var(--accent-red)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px" }}>The Platform</span>
          <h1 style={{ fontSize: "3.2rem", fontWeight: 800, marginTop: "10px" }}>BOOSTER™ Technology</h1>
          <p style={{ fontSize: "1.2rem", color: "#cbd5e1", maxWidth: "700px", margin: "20px auto 0 auto", lineHeight: "1.6" }}>
            A Paradigm Shift in Serum Production: From raw animal extraction to programmable extracellular signaling platforms.
          </p>
        </div>
        <div 
          style={{ 
            position: "absolute", 
            top: 0, 
            left: 0, 
            width: "100%", 
            height: "100%", 
            backgroundImage: "url('/cells_microscope.png')", 
            backgroundSize: "cover", 
            backgroundPosition: "center",
            opacity: 0.1,
            pointerEvents: "none"
          }} 
        />
      </section>

      {/* Slide 8: The Streamlined 3-Step Process */}
      <section style={{ padding: "100px 0" }}>
        <div className="section-container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={{ color: "var(--accent-red)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", fontSize: "0.9rem" }}>Process Workflow</span>
            <h2 style={{ fontSize: "2.6rem", fontWeight: 800, color: "var(--brand-primary)", marginTop: "10px" }}>
              Streamlined Three-Step Serum Generation
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "60px", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {steps.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  style={{
                    textAlign: "left",
                    padding: "24px",
                    borderRadius: "16px",
                    border: `2px solid ${activeStep === idx ? "var(--accent-red)" : "rgba(0,0,0,0.06)"}`,
                    background: activeStep === idx ? "#ffffff" : "transparent",
                    cursor: "pointer",
                    transition: "all 0.3s",
                    boxShadow: activeStep === idx ? "0 10px 30px rgba(0,0,0,0.04)" : "none"
                  }}
                >
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: activeStep === idx ? "var(--accent-red)" : "var(--brand-primary)", marginBottom: "8px" }}>
                    {step.title}
                  </h3>
                  <p style={{ color: "var(--brand-light)", fontSize: "0.95rem", lineHeight: "1.5" }}>
                    {step.desc}
                  </p>
                </button>
              ))}
            </div>

            <div style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.06)", padding: "50px", borderRadius: "24px", boxShadow: "0 20px 40px rgba(0,0,0,0.02)", minHeight: "350px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <span style={{ color: "var(--accent-red)", fontWeight: 700, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px" }}>Technical Depth</span>
              <h3 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--brand-primary)", margin: "10px 0 20px 0" }}>
                {steps[activeStep].title}
              </h3>
              <p style={{ color: "var(--brand-light)", fontSize: "1.1rem", lineHeight: "1.6", marginBottom: "20px" }}>
                {steps[activeStep].desc}
              </p>
              <div style={{ background: "var(--bg-secondary)", padding: "20px", borderRadius: "12px", borderLeft: "4px solid var(--accent-red)" }}>
                <span style={{ fontWeight: 700, color: "var(--brand-primary)", display: "block", marginBottom: "6px", fontSize: "0.9rem" }}>BIOLOGICAL ENGINE:</span>
                <p style={{ color: "var(--brand-light)", fontSize: "0.95rem", lineHeight: "1.5" }}>
                  {steps[activeStep].detail}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 9: Extracellular Vesicles (EVs) */}
      <section style={{ background: "#121214", color: "#ffffff", padding: "100px 0" }}>
        <div className="section-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "60px", alignItems: "center" }}>
            <div>
              <span style={{ color: "var(--accent-red)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", fontSize: "0.9rem" }}>The Signaling Unit</span>
              <h2 style={{ fontSize: "2.8rem", fontWeight: 800, color: "#ffffff", margin: "10px 0 24px 0" }}>
                Extracellular Vesicles (EVs)
              </h2>
              <p style={{ fontSize: "1.15rem", color: "#cbd5e1", lineHeight: "1.6", marginBottom: "30px" }}>
                Cells communicate and regulate biological responses via extracellular vesicles (EVs). These tiny nano-particles carry essential proteins, RNA, and regulatory messages.
              </p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                <div style={{ background: "rgba(255,255,255,0.04)", padding: "20px", borderRadius: "12px" }}>
                  <h4 style={{ color: "var(--accent-red)", fontSize: "1.5rem", fontWeight: 800 }}>6000x</h4>
                  <p style={{ color: "#94a3b8", fontSize: "0.9rem", marginTop: "4px" }}>Smaller than a human hair (30nm – 10μm)</p>
                </div>
                <div style={{ background: "rgba(255,255,255,0.04)", padding: "20px", borderRadius: "12px" }}>
                  <h4 style={{ color: "var(--accent-red)", fontSize: "1.5rem", fontWeight: 800 }}>2013</h4>
                  <p style={{ color: "#94a3b8", fontSize: "0.9rem", marginTop: "4px" }}>Nobel Prize in Physiology or Medicine for EV discovery</p>
                </div>
              </div>
            </div>

            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)", padding: "40px", borderRadius: "24px" }}>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#ffffff", marginBottom: "20px" }}>Cell Signaling Realities</h3>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "flex", gap: "16px" }}>
                  <div style={{ width: "32px", height: "32px", background: "rgba(239, 68, 68, 0.2)", borderRadius: "50%", display: "flex", alignItems: "center", color: "#f87171", fontWeight: 700, flexShrink: 0, justifyContent: "center" }}>!</div>
                  <div>
                    <h4 style={{ fontWeight: 600, color: "#ffffff" }}>Stressed Cells = Stress Signals</h4>
                    <p style={{ color: "#94a3b8", fontSize: "0.9rem", marginTop: "2px" }}>Conventional serum draws are fraught with slaughterhouse stress, forcing cells to secrete toxic, apoptotic signals that impair laboratory cultures.</p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "16px" }}>
                  <div style={{ width: "32px", height: "32px", background: "rgba(16, 185, 129, 0.2)", borderRadius: "50%", display: "flex", alignItems: "center", color: "#34d399", fontWeight: 700, flexShrink: 0, justifyContent: "center" }}>✓</div>
                  <div>
                    <h4 style={{ fontWeight: 600, color: "#ffffff" }}>Happy Cells = Happy Signals</h4>
                    <p style={{ color: "#94a3b8", fontSize: "0.9rem", marginTop: "2px" }}>Under our customized electromagnetic stimulation chamber, donor cells secrete high concentrations of growth-promoting, regenerative signals.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 10: Academic Scrutiny & MoA */}
      <section style={{ padding: "100px 0" }}>
        <div className="section-container">
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "60px", alignItems: "center" }}>
            <div>
              <span style={{ color: "var(--accent-red)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", fontSize: "0.9rem" }}>Mechanism of Action</span>
              <h2 style={{ fontSize: "2.6rem", fontWeight: 800, color: "var(--brand-primary)", margin: "10px 0 20px 0" }}>
                Rigorous Academic Scrutiny & Mechanism
              </h2>
              <p style={{ color: "var(--brand-light)", lineHeight: "1.6", marginBottom: "20px" }}>
                Our PEMF (Pulsed Electromagnetic Field) technology induces <strong>mitohormesis</strong> (mitochondrial survival adaptations). This promotes mitochondriogenesis and reduces apoptosis.
              </p>
              <p style={{ color: "var(--brand-light)", lineHeight: "1.6", marginBottom: "24px" }}>
                Specifically, magnetic modulation activates a calcium-mitochondrial axis via the <strong>TRPC1</strong> (Transient Receptor Potential Canonical 1) channel. This stimulates cellular respiration and co-activates PGC-1α transcription, generating high secretome output containing vital proteins and bio-active molecules.
              </p>
              
              <div style={{ borderLeft: "4px solid var(--accent-red)", paddingLeft: "20px", fontStyle: "italic", color: "var(--brand-light)" }}>
                "PEMF stimulation triggers extracellular vesicle release, creating an ideal cell-derived substrate for muscle, cartilage, and neural repair assays."
                <span style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "var(--brand-primary)", marginTop: "8px", fontStyle: "normal" }}>
                  — Published in Biomaterials, Adv. Biosystems, and Stem Cell Research
                </span>
              </div>
            </div>

            <div style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.06)", padding: "40px", borderRadius: "24px", boxShadow: "0 20px 40px rgba(0,0,0,0.02)" }}>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--brand-primary)", marginBottom: "20px" }}>Validated Growth Lineages</h3>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div style={{ background: "var(--bg-main)", padding: "16px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontWeight: 600 }}>Myogenesis (Muscle)</span>
                  <span style={{ color: "var(--accent-red)", fontWeight: 700 }}>2x EV Output</span>
                </div>
                <div style={{ background: "var(--bg-main)", padding: "16px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontWeight: 600 }}>Stem Cells (hMSC)</span>
                  <span style={{ color: "var(--accent-red)", fontWeight: 700 }}>Comparable to FBS</span>
                </div>
                <div style={{ background: "var(--bg-main)", padding: "16px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontWeight: 600 }}>Fibroblasts (HFB)</span>
                  <span style={{ color: "var(--accent-red)", fontWeight: 700 }}>Enhanced Proliferation</span>
                </div>
                <div style={{ background: "var(--bg-main)", padding: "16px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontWeight: 600 }}>Cancer Assays (HCT)</span>
                  <span style={{ color: "var(--accent-red)", fontWeight: 700 }}>14x EV Output</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 36: Competitive Landscape Table */}
      <section style={{ padding: "100px 0", background: "#fdfdfb" }}>
        <div className="section-container">
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <span style={{ color: "var(--accent-red)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", fontSize: "0.9rem" }}>The Standard Matrix</span>
            <h2 style={{ fontSize: "2.6rem", fontWeight: 800, color: "var(--brand-primary)", marginTop: "10px" }}>
              Competitive Technical Landscape
            </h2>
          </div>

          <div style={{ overflowX: "auto", borderRadius: "20px", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 15px 40px rgba(0,0,0,0.02)" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", background: "#ffffff", textAlign: "left" }}>
              <thead>
                <tr style={{ background: "#121214", color: "#ffffff" }}>
                  <th style={{ padding: "20px", fontWeight: 600 }}>Parameter</th>
                  <th style={{ padding: "20px", fontWeight: 600 }}>FBS (Fetal Bovine Serum)</th>
                  <th style={{ padding: "20px", fontWeight: 600 }}>Recombinant Proteins</th>
                  <th style={{ padding: "20px", fontWeight: 600 }}>Hydrolysates</th>
                  <th style={{ padding: "20px", fontWeight: 600 }}>HPL (Platelet Lysate)</th>
                  <th style={{ padding: "20px", fontWeight: 600, background: "var(--accent-red)" }}>Cellivate BOOSTER™</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                  <td style={{ padding: "20px", fontWeight: 700 }}>Performance</td>
                  <td style={{ padding: "20px" }}>High (Broad)</td>
                  <td style={{ padding: "20px" }}>Moderate–High (Narrow)</td>
                  <td style={{ padding: "20px" }}>Moderate</td>
                  <td style={{ padding: "20px" }}>High (Specific)</td>
                  <td style={{ padding: "20px", fontWeight: 600, color: "var(--accent-red)", background: "rgba(217, 35, 52, 0.02)" }}>High (Targeted & Broad)</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                  <td style={{ padding: "20px", fontWeight: 700 }}>Consistency</td>
                  <td style={{ padding: "20px" }}>Low</td>
                  <td style={{ padding: "20px" }}>High</td>
                  <td style={{ padding: "20px" }}>Moderate</td>
                  <td style={{ padding: "20px" }}>Low–Moderate</td>
                  <td style={{ padding: "20px", fontWeight: 600, color: "var(--accent-red)", background: "rgba(217, 35, 52, 0.02)" }}>High (Designed Output)</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                  <td style={{ padding: "20px", fontWeight: 700 }}>Scalability</td>
                  <td style={{ padding: "20px" }}>Limited (Slaughterhouse)</td>
                  <td style={{ padding: "20px" }}>Limited (Cost-driven)</td>
                  <td style={{ padding: "20px" }}>High</td>
                  <td style={{ padding: "20px" }}>Limited</td>
                  <td style={{ padding: "20px", fontWeight: 600, color: "var(--accent-red)", background: "rgba(217, 35, 52, 0.02)" }}>High (Cell-based loop)</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                  <td style={{ padding: "20px", fontWeight: 700 }}>Complexity</td>
                  <td style={{ padding: "20px" }}>High (Undefined)</td>
                  <td style={{ padding: "20px" }}>Low</td>
                  <td style={{ padding: "20px" }}>Moderate</td>
                  <td style={{ padding: "20px" }}>High</td>
                  <td style={{ padding: "20px", fontWeight: 600, color: "var(--accent-red)", background: "rgba(217, 35, 52, 0.02)" }}>High (Functional Signaling)</td>
                </tr>
                <tr>
                  <td style={{ padding: "20px", fontWeight: 700 }}>Cost Trajectory</td>
                  <td style={{ padding: "20px" }}>Increasing (Supply constraints)</td>
                  <td style={{ padding: "20px" }}>High</td>
                  <td style={{ padding: "20px" }}>Low–Moderate</td>
                  <td style={{ padding: "20px" }}>High</td>
                  <td style={{ padding: "20px", fontWeight: 600, color: "var(--accent-red)", background: "rgba(217, 35, 52, 0.02)" }}>Decreasing with scale</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
