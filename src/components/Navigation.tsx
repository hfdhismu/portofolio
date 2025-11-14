import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export function Navigation() {
  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#home" className="text-xl relative group">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Portfolio
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all group-hover:w-full"></span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => scrollToSection(item.href)}
                className="hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger className="md:hidden" variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent>
            <ul className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-lg hover:text-primary transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}