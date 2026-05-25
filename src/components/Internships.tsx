import { Calendar, MapPin, ExternalLink, Terminal } from "lucide-react";

const Internships = () => {
  const internships = [
    {
      title: "Full Stack Developer Intern",
      company: "NullClass",
      period: "June 2025 – November 2025",
      location: "Remote",
      bullets: [
        "Built the MERN-stack backend for a course-selling platform, including APIs, authentication, and database schema design.",
        "Developed secure login/signup flows using JWT and handled role-based access control.",
        "Assisted frontend development by integrating APIs, fixing UI issues, and improving the overall user experience.",
        "Optimized MongoDB queries and backend logic to improve speed, stability, and data accuracy.",
        "Collaborated with team to test features, manage deployments, and maintain clean, maintainable code.",
      ],
      skills: ["MERN Stack", "JWT", "MongoDB", "REST APIs", "Authentication", "Deployments"],
      certificateLink: "#",
    },
    {
      title: "Frontend Developer Intern",
      company: "Dejorix",
      period: "January 2025 – March 2025",
      location: "Mumbai, Maharashtra",
      bullets: [
        "Worked at a startup, building portfolio websites and client-facing frontend projects.",
        "Developed clean, responsive React.js interfaces with reusable components and smooth user interactions.",
        "Integrated REST APIs and optimized frontend performance for faster loading and better user experience.",
        "Collaborated with designers to refine layouts, maintain consistent UI/UX, and fix visual or functional issues.",
        "Implemented efficient state management and modular component structures to ensure scalable, maintainable frontend code.",
      ],
      skills: ["React.js", "UI/UX", "REST APIs", "State Management", "Responsive Design"],
      certificateLink: "https://drive.google.com/file/d/1Mbk2yi2rA5J4VS4_TC1QiNbv7ENKmaLQ/view",
    },
    {
      title: "Python Developer Intern",
      company: "Pythonic Labs",
      period: "April 2024 – May 2024",
      location: "Mumbai, Maharashtra",
      bullets: [
        "Developed Python- and SQL-based solutions for analytics, data visualization, and API integration.",
        "Built projects such as Vendor Performance Analysis, Banking EDA, and Ola Data Analytics, converting raw datasets into clear reports and dashboards.",
        "Delivered actionable insights that improved reporting accuracy and decision-making efficiency.",
        "Automated multiple data-processing workflows to reduce manual effort and improve scalability.",
        "Collaborated with senior developers to refine project logic, enhance data pipelines, and optimize SQL queries for faster execution.",
      ],
      skills: ["Python", "SQL", "Data Analytics", "Power BI", "Automation"],
      certificateLink: "https://drive.google.com/file/d/1u5T6SH-V91cPwbBka782u1yr0P0AlIf_/view",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
            <span className="text-primary">$</span> cat work_experience.log
          </div>
          <h2 className="font-mono text-3xl md:text-4xl font-bold">
            <span className="text-primary">##</span> Work Experience
          </h2>
          <p className="font-mono text-sm text-muted-foreground mt-2">
            // internships that shaped my engineering journey
          </p>
        </div>

        <div className="space-y-5">
          {internships.map((internship, index) => (
            <div key={index} className="term-card">
              <div className="border-b border-border bg-secondary/30 px-4 py-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                <Terminal className="w-3.5 h-3.5 text-primary" />
                <span>~/{internship.company.toLowerCase().replace(/\s+/g, "_")}.log</span>
                <span className="ml-auto text-accent">#{String(index + 1).padStart(2, "0")}</span>
              </div>

              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                  <div>
                    <h3 className="font-mono text-lg md:text-xl font-bold text-foreground">
                      {internship.title}
                    </h3>
                    <div className="font-mono text-sm text-primary mt-0.5">
                      @ {internship.company}
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs font-mono text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-primary" />
                        {internship.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-primary" />
                        {internship.location}
                      </span>
                    </div>
                  </div>
                  {internship.certificateLink !== "#" && (
                    <a
                      href={internship.certificateLink}
                      target="_blank"
                      rel="noreferrer"
                      className="self-start inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono uppercase tracking-wider border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      certificate
                    </a>
                  )}
                </div>

                <ul className="space-y-1.5 mb-4">
                  {internship.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="font-mono text-sm text-foreground/80 leading-relaxed pl-5 relative"
                    >
                      <span className="absolute left-0 text-primary">▸</span>
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border">
                  {internship.skills.map((s) => (
                    <span key={s} className="term-chip">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;
