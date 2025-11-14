import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import Pasfoto from "../assets/foto/Pasfoto.jpg";

export function Hero() {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      {/* Simple background */}
      <div className="absolute inset-0 bg-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="order-2 md:order-1 flex justify-center">
              <div className="relative group">
                <div className="relative">
                  <ImageWithFallback
                    src={Pasfoto}
                    alt="Profile"
                    className="w-80 h-80 object-cover rounded-full border-2 border-border shadow-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="order-1 md:order-2 space-y-6 text-center md:text-left">
              <div className="space-y-2">
                <p className="text-muted-foreground text-lg animate-in fade-in slide-in-from-bottom-4 duration-1000">
                  Welcome to my portfolio
                </p>
                <h1 className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100 text-4xl md:text-5xl lg:text-6xl text-center md:text-left">
                  Hi, I'm{" "}
                  <span className="text-foreground whitespace-nowrap">
                    Hafidh Ismu' Azam
                  </span>
                </h1>
              </div>

              <p className="text-xl md:text-2xl text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
                Full Stack Web Developer
              </p>

              <p className="text-lg text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
                I build exceptional digital experiences that make people's lives
                easier
              </p>

              <div className="flex gap-4 justify-center md:justify-start animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
                <Button size="lg" onClick={scrollToProjects}>
                  View My Projects
                  <ArrowDown className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() =>
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Contact Me
                </Button>
              </div>

              <div className="flex gap-4 justify-center md:justify-start pt-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
                <a
                  href="https://github.com/hfdhismu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:text-primary hover:scale-110 transition-all"
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                </a>
                <a
                  href="https://www.linkedin.com/in/hfdhismu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:text-primary hover:scale-110 transition-all"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </a>
                <a href="mailto:hafidh.azam@gmail.com">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:text-primary hover:scale-110 transition-all"
                  >
                    <Mail className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
