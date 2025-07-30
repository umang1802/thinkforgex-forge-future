import { Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground/5 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">ThinkForgeX</h3>
            <p className="text-muted-foreground mb-4">
              Crafting Intelligent Digital Solutions for the modern world.
            </p>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-primary" />
              <a href="mailto:admin@thinkforgex.com" className="text-primary hover:underline">
                admin@thinkforgex.com
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Product Development</li>
              <li>AI & Automation</li>
              <li>Cloud & DevOps</li>
              <li>UI/UX Design</li>
              <li>Technology Consulting</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>EduForgeX - School Management System</li>
              <li>Custom Enterprise Solutions</li>
              <li>AI-Powered Automation Tools</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} ThinkForgeX. All rights reserved. | Professional IT Consultancy Services
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;