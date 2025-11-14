import { Code2, Palette, Rocket } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function About() {
  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code is my passion",
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "Transforming ideas into beautiful and intuitive user interfaces",
    },
    {
      icon: Rocket,
      title: "Fast Performance",
      description: "Optimizing applications for the best user experience possible",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground">
            I'm a passionate developer with expertise in building modern web applications.
            With a strong foundation in both frontend and backend technologies, I love
            creating solutions that are both beautiful and functional.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all hover:border-primary/50 group backdrop-blur-sm bg-card/50">
              <CardContent className="pt-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}