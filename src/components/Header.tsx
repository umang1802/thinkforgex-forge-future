import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-primary">ThinkForgeX</div>
        <nav className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">Home</button>
          <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">About</button>
          <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">Services</button>
          <button onClick={() => scrollToSection('products')} className="text-foreground hover:text-primary transition-colors">Products</button>
          <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">Contact</button>
        </nav>
        <Button onClick={() => scrollToSection('contact')} className="hidden md:inline-flex">
          Get Started
        </Button>
      </div>
    </header>
  );
};

export default Header;