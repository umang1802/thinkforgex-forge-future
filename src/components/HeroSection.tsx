import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, Shield } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/30 pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            ThinkForgeX
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Crafting Intelligent Digital Solutions
          </p>
          <p className="text-lg text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            We partner with startups, enterprises, and institutions to transform their vision into 
            high-impact software solutions. From school automation platforms to custom AI-based systems, 
            our expertise lies in turning complex business needs into simple, elegant technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" onClick={scrollToContact} className="text-lg px-8 py-6">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="text-lg px-8 py-6">
              Our Services
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-card">
              <Code className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Product Development</h3>
              <p className="text-sm text-muted-foreground text-center">End-to-end development solutions</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-card">
              <Zap className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-lg font-semibold mb-2">AI & Automation</h3>
              <p className="text-sm text-muted-foreground text-center">Intelligent automation tools</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-card">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Scalable Solutions</h3>
              <p className="text-sm text-muted-foreground text-center">Secure and scalable architecture</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;