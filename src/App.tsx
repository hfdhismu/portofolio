import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <footer className="bg-muted py-8 text-center text-muted-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent"></div>
        <div className="relative z-10">
          <p>&copy; 2025 Portfolio. All rights reserved.</p>
          <p className="text-sm mt-2">
            Built with React, TypeScript & TailwindCSS
          </p>
        </div>
      </footer>
    </div>
  );
}
