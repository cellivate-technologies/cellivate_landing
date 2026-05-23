"use client";

import React, { useState, useEffect } from "react";

export default function Resources() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [currentPage, setCurrentPage] = useState(0); // 0 corresponds to spread 0 (pages 1-2)
  const totalSpreads = 4; // 8 pages, so 4 spreads

  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    email: "",
    company: ""
  });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "error">("idle");

  // Check if already unlocked previously
  useEffect(() => {
    if (typeof window !== "undefined") {
      const unlocked = localStorage.getItem("cellivate_ebook_unlocked");
      if (unlocked === "true") {
        setIsUnlocked(true);
      }
    }
  }, []);

  const handleNext = () => {
    if (currentPage < totalSpreads - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleUnlockSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_EBOOK_ID || "mbdbdyyj"; // Fallback Formspree ID

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          source: "Ebook Unlock Form"
        })
      });

      if (response.ok) {
        localStorage.setItem("cellivate_ebook_unlocked", "true");
        setIsUnlocked(true);
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.error("Error unlocking ebook:", error);
      setFormStatus("error");
    }
  };

  const books = [
    {
      id: "fbs-problem",
      title: "Strategic Brief: The FBS Problem",
      url: "/The FBS Problem_Strategic Brief_Cellivate_May2026 (1).pdf",
      desc: "Strategic analysis of ethical, regulatory, and cost bottlenecks of Fetal Bovine Serum usage in cell culture workflows."
    },
    {
      id: "regen-med",
      title: "Cell Culture Media for Regenerative Medicine",
      url: "/Cell culture media for regenerative medicine (1).pdf",
      desc: "Review of key considerations in selecting cell culture media for cell-based therapies and regenerative medicine applications."
    },
    {
      id: "msc-secretome",
      title: "MSC Secretome for Skin",
      url: "/MSC Secretome Skin (1).pdf",
      desc: "Investigating the regenerative and anti-aging properties of Mesenchymal Stem Cell secretome formulations on human skin tissue."
    },
    {
      id: "pemf-exposure",
      title: "PEMF Exposure & Muscle Secretome",
      url: "/Brief exposure to directionally-specific pemf mobilizes the muscle secretome and is antagonized by streptomycin a potential regenerative (1).pdf",
      desc: "Study of electromagnetically stimulated cell systems and downstream secretome profiling under streptomycinal antagonism."
    }
  ];

  const [selectedBookIndex, setSelectedBookIndex] = useState(0);
  const currentBook = books[selectedBookIndex];

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg-main)", padding: "80px 0" }}>
      <div className="section-container" style={{ textAlign: "center", marginBottom: "40px" }}>
        <span style={{ color: "var(--accent-red)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", fontSize: "0.9rem" }}>
          Ebooks & Technical Literature
        </span>
        <h1 style={{ fontSize: "clamp(1.9rem, 5vw, 3.2rem)", fontWeight: 800, color: "var(--brand-primary)", marginTop: "10px" }}>
          Technical Resources & Strategic Briefs
        </h1>
        <p style={{ color: "var(--brand-light)", fontSize: "1.1rem", maxWidth: "600px", margin: "16px auto 0 auto", lineHeight: "1.6" }}>
          Access our complete technical publications detailing mechanism of action studies, strategic briefs, and secretome formulations.
        </p>
      </div>

      {!isUnlocked ? (
        /* Unlock Form Container */
        <div className="section-container" style={{ maxWidth: "550px", margin: "0 auto", padding: "0 20px" }}>
          <div
            style={{
              background: "#ffffff",
              border: "1px solid rgba(0,0,0,0.06)",
              borderRadius: "24px",
              padding: "40px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.02)",
              textAlign: "left"
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "30px" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "12px" }}>🔒</div>
              <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--brand-primary)", marginBottom: "8px" }}>
                Unlock Technical Literature
              </h2>
              <p style={{ color: "var(--brand-light)", fontSize: "0.95rem", lineHeight: "1.5" }}>
                Enter your details to instantly unlock our full suite of technical publications, corporate reports, and strategic briefs.
              </p>
            </div>

            <form onSubmit={handleUnlockSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {formStatus === "error" && (
                <div style={{ background: "#fef2f2", border: "1px solid #fecaca", padding: "12px", borderRadius: "8px", color: "#991b1b", fontSize: "0.9rem" }}>
                  ⚠️ Something went wrong. Please try again or contact us directly at admin@cellivatetech.com.
                </div>
              )}

              <div>
                <label htmlFor="name" style={{ display: "block", fontWeight: 600, marginBottom: "8px", color: "var(--brand-primary)" }}>Full Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{ width: "100%", padding: "14px", border: "1px solid rgba(0,0,0,0.1)", borderRadius: "12px", fontSize: "1rem" }}
                  placeholder="Dr. Sarah Jenkins"
                />
              </div>

              <div>
                <label htmlFor="designation" style={{ display: "block", fontWeight: 600, marginBottom: "8px", color: "var(--brand-primary)" }}>Designation / Title</label>
                <input
                  type="text"
                  id="designation"
                  required
                  value={formData.designation}
                  onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                  style={{ width: "100%", padding: "14px", border: "1px solid rgba(0,0,0,0.1)", borderRadius: "12px", fontSize: "1rem" }}
                  placeholder="Research Scientist, Lab Director, etc."
                />
              </div>

              <div>
                <label htmlFor="email" style={{ display: "block", fontWeight: 600, marginBottom: "8px", color: "var(--brand-primary)" }}>Professional Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{ width: "100%", padding: "14px", border: "1px solid rgba(0,0,0,0.1)", borderRadius: "12px", fontSize: "1rem" }}
                  placeholder="sarah.jenkins@biotech.com"
                />
              </div>

              <div>
                <label htmlFor="company" style={{ display: "block", fontWeight: 600, marginBottom: "8px", color: "var(--brand-primary)" }}>Company / Institution</label>
                <input
                  type="text"
                  id="company"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  style={{ width: "100%", padding: "14px", border: "1px solid rgba(0,0,0,0.1)", borderRadius: "12px", fontSize: "1rem" }}
                  placeholder="Institute of Molecular Biology"
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === "submitting"}
                style={{
                  background: "var(--accent-red)",
                  color: "#ffffff",
                  border: "none",
                  padding: "16px",
                  borderRadius: "30px",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.3s",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  boxShadow: "0 10px 25px rgba(217, 35, 52, 0.2)"
                }}
              >
                {formStatus === "submitting" ? (
                  <>
                    <div style={{ width: "20px", height: "20px", border: "2px solid #ffffff", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
                    Unlocking Literature...
                  </>
                ) : (
                  "Access Technical Literature"
                )}
              </button>
            </form>

            <p style={{ color: "#94a3b8", fontSize: "0.8rem", marginTop: "20px", textAlign: "center", lineHeight: "1.4" }}>
              By submitting, you agree to receive technical validation updates from Cellivate Technologies. You can unsubscribe at any time.
            </p>
          </div>
        </div>
      ) : (
        /* Dropdown & PDF Iframe Previewer Container */
        <div className="section-container" style={{ maxWidth: "900px", margin: "0 auto", padding: "0 20px" }}>
          {/* Dropdown Card */}
          <div
            style={{
              background: "#ffffff",
              border: "1px solid rgba(0,0,0,0.06)",
              borderRadius: "24px",
              padding: "30px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.01)",
              marginBottom: "30px",
              display: "flex",
              flexDirection: "column",
              gap: "20px"
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label htmlFor="book-select" style={{ fontWeight: 700, color: "var(--brand-primary)", fontSize: "1rem" }}>
                Select Literature to View:
              </label>
              <div style={{ position: "relative", width: "100%" }}>
                <select
                  id="book-select"
                  value={selectedBookIndex}
                  onChange={(e) => setSelectedBookIndex(Number(e.target.value))}
                  style={{
                    width: "100%",
                    padding: "16px 20px",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "var(--brand-primary)",
                    background: "#fcfcfa",
                    border: "2px solid rgba(0,0,0,0.06)",
                    borderRadius: "16px",
                    cursor: "pointer",
                    appearance: "none",
                    WebkitAppearance: "none",
                    outline: "none",
                    transition: "all 0.25s ease"
                  }}
                >
                  {books.map((b, idx) => (
                    <option key={b.id} value={idx}>
                      📖 {b.title}
                    </option>
                  ))}
                </select>
                <div
                  style={{
                    position: "absolute",
                    right: "20px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    pointerEvents: "none",
                    color: "var(--brand-light)",
                    fontSize: "0.8rem",
                    fontWeight: "bold"
                  }}
                >
                  ▼
                </div>
              </div>
            </div>

            {/* Selected Book Details */}
            <div style={{ borderTop: "1px solid rgba(0,0,0,0.05)", paddingTop: "20px" }}>
              <h3 style={{ fontSize: "1.45rem", fontWeight: 800, color: "var(--brand-primary)", marginBottom: "8px" }}>
                {currentBook.title}
              </h3>
              <p style={{ color: "var(--brand-light)", fontSize: "1rem", lineHeight: "1.6", margin: 0 }}>
                {currentBook.desc}
              </p>
            </div>

            {/* Action Buttons Row */}
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", borderTop: "1px solid rgba(0,0,0,0.05)", paddingTop: "20px" }}>
              <a
                href={currentBook.url}
                download
                style={{
                  background: "var(--accent-red)",
                  color: "#ffffff",
                  padding: "14px 28px",
                  borderRadius: "30px",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  boxShadow: "0 6px 15px rgba(217, 35, 52, 0.15)",
                  transition: "all 0.3s ease"
                }}
              >
                <span>📥</span>
                <span>Download PDF</span>
              </a>

              <a
                href={currentBook.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "rgba(59, 46, 154, 0.08)",
                  color: "#3b2e9a",
                  padding: "14px 28px",
                  borderRadius: "30px",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  transition: "all 0.3s ease"
                }}
              >
                <span>🔗</span>
                <span>Open in New Tab</span>
              </a>
            </div>
          </div>

          {/* Iframe Preview Container */}
          <div
            style={{
              background: "#ffffff",
              border: "1px solid rgba(0,0,0,0.06)",
              borderRadius: "24px",
              padding: "16px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.03)",
              overflow: "hidden"
            }}
          >
            <iframe
              src={`${currentBook.url}#toolbar=0`}
              title={currentBook.title}
              style={{
                width: "100%",
                height: "650px",
                border: "none",
                borderRadius: "12px",
                background: "#f8f8f8"
              }}
            />
          </div>
        </div>
      )}

      {/* Global CSS spinner rule keyframe in case style jsx doesn't evaluate */}
      <style jsx global>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </main>
  );
}
