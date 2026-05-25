import { Calendar, MapPin, ExternalLink, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const Internships = () => {
  const internships = [
    {
      title: "Full Stack Developer Intern",
      company: "KVAR Technologies Pvt. Ltd.",
      period: "February 2026 – Present",
      location: "Mumbai, India",
      current: true,
      bg: "pop-yellow",
      bullets: [
        "Developed and scaled a Production Monitoring System with RBAC for 7+ user roles, improving scalability and workflow efficiency.",
        "Migrated legacy EJS → React.js and redesigned the backend into modular architecture, achieving a 70% reduction in API latency.",
        "Architected a B2B lead automation system integrating the IndiaMart API with a heuristic scoring engine and email sequencing.",
      ],
      skills: ["React.js", "Node.js", "PostgreSQL", "RBAC", "B2B Automation"],
      certificateLink: "#",
    },
    {
      title: "Full Stack Developer Intern",
      company: "NullClass",
      period: "Jun 2025 – Nov 2025",
      location: "Remote",
      bg: "pop-pink",
      bullets: [
        "Built the MERN-stack backend for a course-selling platform including APIs, authentication, and database schema design.",
        "Developed secure login/signup flows using JWT and handled role-based access control.",
        "Optimized MongoDB queries and backend logic for speed, stability, and data accuracy.",
      ],
      skills: ["MERN", "JWT", "MongoDB", "REST APIs", "Auth"],
      certificateLink: "#",
    },
    {
      title: "Frontend Developer Intern",
      company: "Dejorix Tech",
      period: "Jan 2025 – Mar 2025",
      location: "Mumbai, India",
      bg: "pop-blue",
      bullets: [
        "Built responsive UIs with React.js and Tailwind, improving frontend load performance by 25% via state management & lazy loading.",
        "Integrated Three.js 3D models into web environments — +40% engagement, consistent 60 FPS performance.",
        "Collaborated with designers to refine layouts and maintain consistent UI/UX.",
      ],
      skills: ["React.js", "Tailwind", "Three.js", "REST APIs", "UI/UX"],
      certificateLink: "https://drive.google.com/file/d/1Mbk2yi2rA5J4VS4_TC1QiNbv7ENKmaLQ/view",
    },
    {
      title: "Python Developer Intern",
      company: "Pythonic Labs",
      period: "Apr 2024 – May 2024",
      location: "Mumbai, India",
      bg: "pop-green",
      bullets: [
        "Built Python + SQL solutions for analytics, data visualization, and API integration.",
        "Delivered projects like Vendor Performance Analysis, Banking EDA, and Ola Data Analytics.",
        "Automated data-processing workflows to reduce manual effort and improve scalability.",
      ],
      skills: ["Python", "SQL", "Analytics", "Power BI"],
      certificateLink: "https://drive.google.com/file/d/1u5T6SH-V91cPwbBka782u1yr0P0AlIf_/view",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <span className="section-eyebrow pop-yellow">★ Experience</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-3">
            Where I've worked
          </h2>
        </div>

        <div className="space-y-5">
          {internships.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className={`bento p-6 md:p-8 relative ${it.bg}`}
            >
              {it.current && (
                <span className="sticker bg-card absolute -top-3 -right-3 rotate-6 wobble">
                  <span className="w-2 h-2 rounded-full bg-foreground animate-pulse" />
                  current role
                </span>
              )}

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-card border-2 border-foreground rounded-full text-xs font-bold">
                      <Briefcase className="w-3 h-3" />
                      Internship
                    </span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold">{it.title}</h3>
                  <p className="font-bold text-lg mt-1">@ {it.company}</p>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-foreground/75">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {it.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {it.location}
                    </span>
                  </div>
                </div>
                {it.certificateLink !== "#" && (
                  <a
                    href={it.certificateLink}
                    target="_blank"
                    rel="noreferrer"
                    className="pill-btn bg-card self-start"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Certificate
                  </a>
                )}
              </div>

              <ul className="space-y-2 mb-5">
                {it.bullets.map((b, j) => (
                  <li key={j} className="flex gap-2.5">
                    <span className="text-foreground font-bold mt-0.5">→</span>
                    <span className="text-foreground/90 leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4 border-t-2 border-dashed border-foreground/30">
                {it.skills.map((s) => (
                  <span key={s} className="chip bg-card">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;
