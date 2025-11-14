import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface Skill {
  name: string;
  icon: string;
  color: string;
}

export function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML/CSS", icon: "html5", color: "#E34F26" },
        { name: "JavaScript", icon: "javascript", color: "#F0DB4F" },
        { name: "TypeScript", icon: "typescript", color: "#3178C6" },
        { name: "React", icon: "react", color: "#61DAFB" },
        { name: "Vue.js", icon: "vuedotjs", color: "#4FC08D" },
        // { name: "Next.js", icon: "nextdotjs", color: "#FFFFFF" },
        { name: "TailwindCSS", icon: "tailwindcss", color: "#06B6D4" },
        { name: "Bootstrap", icon: "bootstrap", color: "#7952B3" },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "PHP", icon: "php", color: "#777BB4" },
        { name: "Laravel", icon: "laravel", color: "#FF2D20" },
        { name: "Node.js", icon: "nodedotjs", color: "#339933" },
        // { name: "Express", icon: "express", color: "#FFFFFF" },
        // { name: "Python", icon: "python", color: "#3776AB" },
        { name: "MySQL", icon: "mysql", color: "#00758F" },
        { name: "PostgreSQL", icon: "postgresql", color: "#4169E1" },
        // { name: "MongoDB", icon: "mongodb", color: "#47A248" },
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", icon: "git", color: "#F05032" },
        { name: "GitHub", icon: "github", color: "#FFFFFF" },
        { name: "GitLab", icon: "gitlab", color: "#FFFFFF" },
        { name: "Canva", icon: "canva", color: "#3969E7" },
        { name: "Figma", icon: "figma", color: "#F24E1E" },
        { name: "WordPress", icon: "wordpress", color: "#00749C" },
        { name: "Wix", icon: "wix", color: "#FFFFFF" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="backdrop-blur-sm bg-card/50 border-border hover:border-primary/50 transition-all group"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border hover:border-primary/50 transition-all cursor-default hover:bg-accent group/skill bg-background/30"
                    >
                      <img
                        src={`https://cdn.simpleicons.org/${skill.icon}`}
                        alt={skill.name}
                        className="w-5 h-5 group-hover/skill:scale-110 transition-transform"
                      />
                      <span className="text-sm">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
