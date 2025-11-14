import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string[];
  technologies: string[];
}

export function Experience() {
  const experiences: ExperienceItem[] = [
    {
      title: "IT Crew - Internship",
      company:
        "Dinas Pemberdayaan Perempuan, Perlindungan Anak, Pengendalian Penduduk, dan Keluarga Berencana (DP3APPKB) Kota Surabaya - Program Magang dan Studi Independen Bersertifikat (MSIB) Batch 7",
      period: "Sep 2024 - Des 2024",
      location: "Surabaya, Indonesia",
      type: "Full-time",
      description: [
        "Collaborated in a 4-member intern team to build a web-based e-learning platform for training programs",
        "Focused on backend development using Laravel and PostgreSQL, covering system design, database structure, and API integration",
        "Developed database schemas and backend logic for user authentication, role management, and course modules",
        "Ensured smooth integration between front-end and back-end systems through testing and optimization",
        "Delivered a 100% successful final presentation, meeting all functional and technical goals",
      ],
      technologies: ["Vue.js", "PHP", "Laravel", "PostgreSQL"],
    },
    {
      title: "Front-End Developer - Internship",
      company: "PT. Warna Warni Media",
      period: "Feb 2024 - Mei 2024",
      location: "Surabaya, Indonesia",
      type: "Full-time",
      description: [
        "Redesigned and maintained the company website (mediainovasi.id) to improve visual appearance and functionality",
        "Implemented new features and optimized performance and security using HTML, CSS, JavaScript, and native PHP",
        "Fixed bugs and ensured responsive design for better user experience across multiple devices",
        "Collaborated with the internal team to align design updates with company branding andcontent goals",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">Work Experience</h2>
          <p className="text-lg text-muted-foreground">
            My professional journey and accomplishments
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="backdrop-blur-sm bg-card/50 border-border hover:border-primary/50 transition-all hover:shadow-lg group relative overflow-hidden"
            >
              {/* Decorative line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-start gap-3">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-muted group-hover:scale-110 transition-transform flex-shrink-0">
                        <Briefcase className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl mb-1">
                          {exp.title}
                        </CardTitle>
                        <p className="text-lg text-primary">{exp.company}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 md:text-right">
                    <div className="flex items-center gap-2 text-muted-foreground md:justify-end">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex gap-2 md:justify-end">
                      <Badge
                        variant="outline"
                        className="bg-muted/50 border-border"
                      >
                        {exp.type}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="bg-muted/50 border-border"
                      >
                        {exp.location}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-muted-foreground">
                      <span className="text-primary mt-1.5 flex-shrink-0">
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-border/50">
                  <p className="text-sm text-muted-foreground mb-3">
                    Technologies Used:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-muted/50 hover:bg-accent hover:border-primary/50 transition-all"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
