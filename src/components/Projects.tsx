import { ExternalLink, Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import bukuAppImg from "../assets/foto/buku-app.png";
import tiketAppImg from "../assets/foto/tiket-app.png";

export function Projects() {
  const projects = [
    {
      title: "Buku App - Library Borrowing System",
      description:
        "A web-based library system that allows users to borrow and return books, manage member accounts, track borrowing history, and provide an admin dashboard for managing books and loan records.",
      image: bukuAppImg,
      tags: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      github: "https://github.com/hfdhismu/buku-app",
      demo: "#",
    },
    {
      title: "Tiket App - Ticket Reservation Platform",
      description:
        "A full-stack ticket reservation web platform enabling users to browse schedules, select seats, make bookings, upload payment proof, and track check-in status — complete with admin dashboard and role-based access.",
      image: tiketAppImg,
      tags: ["Laravel", "PHP", "MySQL", "Bootstrap", "Vite"],
      github: "https://github.com/hfdhismu/tiket-app",
      demo: "#",
    },
    // {
    //   title: "Creative Portfolio CMS",
    //   description: "A headless CMS built for creatives to showcase their work with customizable themes and layouts.",
    //   image: "https://images.unsplash.com/photo-1505304451-3b3b85a91afe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGNvZGluZ3xlbnwxfHx8fDE3NjI1OTQ4OTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    //   tags: ["Next.js", "Sanity", "TailwindCSS"],
    //   github: "https://github.com",
    //   demo: "https://example.com",
    // },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground">
            Here are some of my recent works that showcase my skills and
            experience
          </p>
        </div>

        <div className="justify-center grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all group border-border hover:border-primary/50 backdrop-blur-sm bg-card/80"
            >
              <div className="aspect-video overflow-hidden relative">
                <div className="absolute inset-0 bg-background/60 z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
