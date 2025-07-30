import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Brain, Cloud, Palette, Users } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Code2,
      title: "Product Development",
      description: "End-to-end web and mobile app development with cutting-edge technologies and best practices."
    },
    {
      icon: Brain,
      title: "AI & Automation",
      description: "Building AI-powered tools to automate operations and enhance business intelligence."
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and deployment pipelines for modern applications."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Intuitive, modern, and user-centered design solutions that drive engagement."
    },
    {
      icon: Users,
      title: "Consulting",
      description: "Strategic tech advisory for startups and SMEs to accelerate digital transformation."
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions to transform your business and accelerate growth
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;