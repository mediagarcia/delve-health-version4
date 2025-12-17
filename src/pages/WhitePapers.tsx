import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, FileText, Download } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import clinicalResearchTeam from "@/assets/clinical-research-team.jpg";

const WhitePapers = () => {
  const whitePapers = [
    {
      title: "Best Practices for eCOA Implementation in Decentralized Trials",
      summary:
        "Comprehensive guide on deploying electronic Clinical Outcome Assessments across hybrid and fully decentralized trials.",
      category: "eCOA",
      pages: "24 pages",
      published: "March 2024",
    },
    {
      title: "Improving Patient Diversity Through Digital Enrollment Strategies",
      summary:
        "Research-backed strategies for reaching underrepresented populations in clinical trials using digital tools.",
      category: "Patient Engagement",
      pages: "18 pages",
      published: "February 2024",
    },
    {
      title: "Wearables and Digital Biomarkers: A Regulatory Perspective",
      summary: "Navigate regulatory requirements for integrating wearable devices and digital endpoints into your trials.",
      category: "Wearables",
      pages: "32 pages",
      published: "January 2024",
    },
    {
      title: "Data Quality in Decentralized Clinical Trials",
      summary:
        "Learn how real-time data validation and remote monitoring improve data integrity across decentralized studies.",
      category: "Data Quality",
      pages: "28 pages",
      published: "December 2023",
    },
    {
      title: "The Future of Patient-Centric Trial Design",
      summary:
        "Explore emerging trends in patient-focused clinical trial methodologies and digital health technologies.",
      category: "Innovation",
      pages: "22 pages",
      published: "November 2023",
    },
    {
      title: "Remote Monitoring Best Practices",
      summary:
        "Guidelines for implementing effective remote patient monitoring strategies in clinical trials.",
      category: "Remote Monitoring",
      pages: "26 pages",
      published: "October 2023",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img src={clinicalResearchTeam} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <FileText size={16} />
                White Papers
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">Expert Insights & Research</h1>
              <p className="text-xl text-muted-foreground">
                In-depth analysis and best practices for modern decentralized clinical trials. Download our research to stay ahead in the evolving landscape of clinical research.
              </p>
            </div>
          </div>
        </section>

        {/* White Papers Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {whitePapers.map((paper, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow group">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <FileText className="text-primary" size={24} />
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="text-xs font-semibold text-accent uppercase">{paper.category}</div>
                            <span className="text-xs text-muted-foreground">•</span>
                            <div className="text-xs text-muted-foreground">{paper.pages}</div>
                          </div>
                          <h3 className="text-xl font-semibold mb-3">{paper.title}</h3>
                          <p className="text-muted-foreground mb-4">{paper.summary}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">{paper.published}</span>
                            <Button variant="link" className="p-0 group-hover:translate-x-1 transition-transform">
                              Download PDF <Download className="ml-2" size={16} />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Informed</h2>
                <p className="text-lg text-muted-foreground">
                  Subscribe to receive our latest white papers and industry insights
                </p>
              </div>
              <Card className="bg-background">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="px-4 py-3 rounded-md border border-border bg-background w-full md:w-96"
                    />
                    <Button size="lg">Subscribe</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold">Ready to transform your clinical trials?</h2>
              <p className="text-xl text-muted-foreground">
                See how Delve Health's platform brings these insights to life
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="hero" size="xl">
                  <Link to="/demo">
                    Schedule a Demo <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="xl">
                  <Link to="/resources/case-studies">View Case Studies</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WhitePapers;
