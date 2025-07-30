import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target, Eye, Heart } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Proven Track Record",
      description: "Successful delivery of robust products across various industries"
    },
    {
      icon: Eye,
      title: "Dedicated Team",
      description: "Agile team of experienced developers and architects"
    },
    {
      icon: CheckCircle,
      title: "Quality First",
      description: "High attention to detail, security, and scalability"
    },
    {
      icon: Heart,
      title: "Client-Focused",
      description: "Committed to understanding and exceeding client expectations"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">About ThinkForgeX</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              ThinkForgeX is an IT product-based consultancy focused on building powerful, scalable, 
              and intelligent digital products. We partner with startups, enterprises, and institutions 
              to transform their vision into high-impact software solutions.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              From school automation platforms to custom AI-based systems, our expertise lies in 
              turning complex business needs into simple, elegant technology that drives real results.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Why Choose Us</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <value.icon className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                        <p className="text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center bg-gradient-primary rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg opacity-95 max-w-2xl mx-auto">
              To empower businesses with cutting-edge technology solutions that simplify operations, 
              enhance productivity, and drive sustainable growth in the digital age.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;