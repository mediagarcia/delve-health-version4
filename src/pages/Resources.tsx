import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, FileText, BookOpen } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Resources = () => {
  const whitePapers = [
    {
      title: "Best Practices for eCOA Implementation in Decentralized Trials",
      summary:
        "Comprehensive guide on deploying electronic Clinical Outcome Assessments across hybrid and fully decentralized trials.",
      category: "eCOA",
    },
    {
      title: "Improving Patient Diversity Through Digital Enrollment Strategies",
      summary:
        "Research-backed strategies for reaching underrepresented populations in clinical trials using digital tools.",
      category: "Patient Engagement",
    },
    {
      title: "Wearables and Digital Biomarkers: A Regulatory Perspective",
      summary: "Navigate regulatory requirements for integrating wearable devices and digital endpoints into your trials.",
      category: "Wearables",
    },
    {
      title: "Data Quality in Decentralized Clinical Trials",
      summary:
        "Learn how real-time data validation and remote monitoring improve data integrity across decentralized studies.",
      category: "Data Quality",
    },
  ];

  const caseStudies = [
    {
      title: "40% Faster Enrollment in Phase III Oncology Trial",
      summary:
        "How a global sponsor used Delve Health's platform to accelerate diverse patient recruitment across 15 countries.",
      therapeutic: "Oncology",
      result: "40% faster enrollment, 35% improved data quality",
    },
    {
      title: "Reducing Site Burden in Rare Disease Study",
      summary:
        "Streamlining operations for a pediatric rare disease trial with just 50 patients across multiple continents.",
      therapeutic: "Rare Disease",
      result: "60% reduction in site queries, 95% patient retention",
    },
    {
      title: "Hybrid Trial Success in Cardiovascular Research",
      summary: "Combining traditional site visits with remote monitoring to improve patient experience and data capture.",
      therapeutic: "Cardiovascular",
      result: "85% patient satisfaction, 30% cost savings",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold">Resources & Insights</h1>
              <p className="text-xl text-muted-foreground">
                Explore our collection of white papers, case studies, and research on decentralized clinical trials
              </p>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="white-papers" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
                <TabsTrigger value="white-papers">White Papers</TabsTrigger>
                <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
              </TabsList>

              <TabsContent value="white-papers">
                <div className="grid md:grid-cols-2 gap-6">
                  {whitePapers.map((paper, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow group">
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <FileText className="text-primary" size={24} />
                          </div>
                          <div className="flex-grow">
                            <div className="text-xs font-semibold text-accent mb-2 uppercase">{paper.category}</div>
                            <h3 className="text-xl font-semibold mb-3">{paper.title}</h3>
                            <p className="text-muted-foreground mb-4">{paper.summary}</p>
                            <Button variant="link" className="p-0 group-hover:translate-x-1 transition-transform">
                              Download PDF <ArrowRight className="ml-2" size={16} />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="case-studies">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {caseStudies.map((study, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow group">
                      <CardContent className="pt-6">
                        <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-4">
                          <BookOpen className="text-success" size={24} />
                        </div>
                        <div className="text-xs font-semibold text-primary mb-2 uppercase">{study.therapeutic}</div>
                        <h3 className="text-xl font-semibold mb-3">{study.title}</h3>
                        <p className="text-muted-foreground mb-4">{study.summary}</p>
                        <div className="bg-muted/50 rounded-md p-3 mb-4">
                          <p className="text-sm font-semibold text-success">{study.result}</p>
                        </div>
                        <Button variant="link" className="p-0 group-hover:translate-x-1 transition-transform">
                          Read Full Story <ArrowRight className="ml-2" size={16} />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold">Ready to see these outcomes in your trials?</h2>
              <p className="text-xl text-muted-foreground">
                Schedule a demo to learn how Delve Health can help you achieve similar results
              </p>
              <Button asChild variant="hero" size="xl">
                <Link to="/demo">
                  Schedule a Demo <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Resources;
