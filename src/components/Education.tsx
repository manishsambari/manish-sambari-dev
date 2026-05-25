import { GraduationCap, Award, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const Education = () => {
  const education = [
    {
      degree: "B.E in Computer Science Engineering",
      institution: "Terna Engineering College, Mumbai",
      grade: "CGPA: 7.20",
      period: "Dec 2021 – May 2025",
      bg: "pop-blue",
    },
    {
      degree: "Higher Secondary (HSC)",
      institution: "B. N. N. College, Bhiwandi",
      grade: "89.50%",
      period: "May 2021",
      bg: "pop-green",
    },
    {
      degree: "Secondary (SSC)",
      institution: "Vikas English Medium School, Bhiwandi",
      grade: "82.20%",
      period: "March 2019",
      bg: "pop-yellow",
    },
  ];

  const certifications = [
    { name: "Full-Stack Development Cohort 2.0", issuer: "Chai aur Code", link: "#" },
    { name: "Web Development Cohort 1.0", issuer: "Sheryians Coding School", link: "#" },
    { name: "Web Development Cohort 2.0", issuer: "Harkirat Singh", link: "#" },
    {
      name: "Full Stack Python Developer",
      issuer: "Kamal Classes",
      link: "https://drive.google.com/file/d/131Q1F9nOtBv9HfpUTwkjO3YU726Kre-U/view",
    },
    {
      name: "Oracle Cloud Infrastructure 2025 — Foundations Associate",
      issuer: "Oracle",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=8C5314EEDCE53749057B5132C2B4F75F967C7B8BE3817A1EBC5E7CFFE50E33AB",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <span className="section-eyebrow pop-mint">✦ Learning</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-3">
            Education & certs
          </h2>
        </div>

        {/* Education cards */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-5 mb-10">
          {education.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`bento p-5 md:p-6 ${e.bg} relative`}
            >
              <span className="sticker pop-card absolute -top-3 -right-3 rotate-3 wobble-soft">
                {e.period}
              </span>
              <div className="inline-flex items-center justify-center w-12 h-12 bg-card border-2 border-foreground rounded-full mb-3">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl font-bold mb-1">{e.degree}</h3>
              <p className="text-sm font-semibold text-foreground/75 mb-2">
                {e.institution}
              </p>
              <span className="inline-flex items-center px-2.5 py-1 bg-card border-2 border-foreground rounded-full text-xs font-bold">
                → {e.grade}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bento p-5 md:p-6 bg-card"
        >
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-5 h-5" />
            <h3 className="font-display text-2xl font-bold">Certifications</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {certifications.map((c, i) => (
              <div
                key={i}
                className="flex items-center justify-between gap-3 px-4 py-3 border-2 border-foreground rounded-xl bg-background hover:bg-muted transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm leading-tight">{c.name}</p>
                  <p className="text-xs text-foreground/70 mt-0.5">{c.issuer}</p>
                </div>
                {c.link !== "#" ? (
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 inline-flex items-center gap-1 px-2.5 py-1 border-2 border-foreground rounded-full bg-card text-xs font-bold hover:-translate-y-0.5 transition-transform"
                  >
                    <ExternalLink className="w-3 h-3" />
                    View
                  </a>
                ) : (
                  <span className="shrink-0 text-xs text-foreground/40">—</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
