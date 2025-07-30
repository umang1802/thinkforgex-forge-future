import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, ArrowRight, BookOpen, Users, BarChart, MessageCircle } from "lucide-react";

const ProductsSection = () => {
  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Products</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions designed to solve real-world challenges
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-elegant">
            <CardHeader className="text-center pb-8">
              <div className="mx-auto mb-6 w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center">
                <GraduationCap className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-3xl mb-4">EduForgeX</CardTitle>
              <CardDescription className="text-lg">
                An AI-powered School Management System (SMS) that digitizes student records, 
                fee systems, communication, and daily operations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <BookOpen className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Student Management</h4>
                      <p className="text-sm text-muted-foreground">Digital student records, attendance tracking, and academic progress monitoring</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <BarChart className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Fee Management</h4>
                      <p className="text-sm text-muted-foreground">Automated fee collection, payment tracking, and financial reporting</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Users className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Parent Portal</h4>
                      <p className="text-sm text-muted-foreground">Real-time communication between teachers, students, and parents</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MessageCircle className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">AI-Powered Insights</h4>
                      <p className="text-sm text-muted-foreground">Intelligent analytics for better educational outcomes</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} size="lg">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;