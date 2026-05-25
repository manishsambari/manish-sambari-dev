import { GraduationCap, Award, ExternalLink } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.E in Computer Science Engineering",
      institution: "Terna Engineering College, Mumbai",
      grade: "CGPA: 7.20",
      period: "Dec 2021 – May 2025",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "B. N. N. College, Bhiwandi",
      grade: "Percentage: 89.50%",
      period: "May 2021",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Vikas English Medium School, Bhiwandi",
      grade: "Percentage: 82.20%",
      period: "March 2019",
    },
  ];

  const certifications = [
    {
      name: "Full-Stack Development Cohort 2.0",
      issuer: "Chai aur Code",
      link: "#",
    },
    {
      name: "Web Development Cohort 1.0",
      issuer: "Sheryians Coding School",
      link: "#",
    },
    {
      name: "Web Development Cohort 2.0",
      issuer: "Harkirat Singh",
      link: "#",
    },
    {
      name: "Full Stack Python Developer",
      issuer: "Kamal Classes",
      link: "https://drive.google.com/file/d/131Q1F9nOtBv9HfpUTwkjO3YU726Kre-U/view",
    },
    {
      name: "Oracle Cloud Infrastructure 2025 Foundations Associate",
      issuer: "Oracle",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=8C5314EEDCE53749057B5132C2B4F75F967C7B8BE3817A1EBC5E7CFFE50E33AB",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
            <span className="text-primary">$</span> cat education.json
          </div>
          <h2 className="font-mono text-3xl md:text-4xl font-bold">
            <span className="text-primary">##</span> Education &amp; Certifications
          </h2>
          <p className="font-mono text-sm text-muted-foreground mt-2">
            // academic foundation &amp; professional credentials
          </p>
        </div>

        {/* Education */}
        <div className="mb-12">
          <h3 className="font-mono text-lg uppercase tracking-widest text-accent mb-5">
            // academic_background
          </h3>
          <div className="space-y-3">
            {education.map((edu, index) => (
              <div key={index} className="term-card p-5">
                <div className="flex items-start gap-4">
                  <div className="border border-border p-2 bg-secondary/40">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <div>
                        <h4 className="font-mono font-bold text-foreground">{edu.degree}</h4>
                        <p className="font-mono text-sm text-primary mt-0.5">
                          {edu.institution}
                        </p>
                      </div>
                      <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground border border-border px-2 py-1 self-start">
                        {edu.period}
                      </span>
                    </div>
                    <div className="font-mono text-sm text-accent mt-2">
                      → {edu.grade}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="font-mono text-lg uppercase tracking-widest text-accent mb-5">
            // certifications
          </h3>
          <div className="term-card">
            <div className="grid grid-cols-12 gap-px bg-border border-b border-border">
              <div className="col-span-7 md:col-span-7 bg-secondary/40 px-4 py-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Certification
              </div>
              <div className="col-span-3 md:col-span-3 bg-secondary/40 px-4 py-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Issuer
              </div>
              <div className="col-span-2 md:col-span-2 bg-secondary/40 px-4 py-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground text-right">
                Action
              </div>
            </div>
            {certifications.map((c, index) => (
              <div
                key={index}
                className="grid grid-cols-12 gap-px bg-border border-b border-border last:border-0 hover:bg-secondary/20"
              >
                <div className="col-span-7 md:col-span-7 bg-card px-4 py-3 font-mono text-sm text-foreground flex items-center gap-2">
                  <Award className="w-3.5 h-3.5 text-primary shrink-0" />
                  {c.name}
                </div>
                <div className="col-span-3 md:col-span-3 bg-card px-4 py-3 font-mono text-sm text-muted-foreground">
                  {c.issuer}
                </div>
                <div className="col-span-2 md:col-span-2 bg-card px-4 py-3 text-right">
                  {c.link !== "#" ? (
                    <a
                      href={c.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-2 py-1 text-[10px] font-mono uppercase tracking-widest border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" />
                      view
                    </a>
                  ) : (
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      —
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
