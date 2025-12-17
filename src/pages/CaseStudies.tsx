import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen, TrendingUp, Users, Target } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-clinical-trial.jpg";
import patientsDigitalHealth from "@/assets/patients-digital-health.jpg";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "40% Faster Enrollment in Phase III Oncology Trial",
      summary:
        "How a global sponsor used Delve Health's platform to accelerate diverse patient recruitment across 15 countries.",
      therapeutic: "Oncology",
      result: "40% faster enrollment, 35% improved data quality",
      patientCount: "1,200+ patients",
      icon: TrendingUp,
    },
    {
      title: "Reducing Site Burden in Rare Disease Study",
      summary:
        "Streamlining operations for a pediatric rare disease trial with just 50 patients across multiple continents.",
      therapeutic: "Rare Disease",
      result: "60% reduction in site queries, 95% patient retention",
      patientCount: "50 patients",
      icon: Target,
    },
    {
      title: "Hybrid Trial Success in Cardiovascular Research",
      summary: "Combining traditional site visits with remote monitoring to improve patient experience and data capture.",
      therapeutic: "Cardiovascular",
      result: "85% patient satisfaction, 30% cost savings",
      patientCount: "800+ patients",
      icon: Users,
    },
    {
      title: "Accelerating Diabetes Research with Digital Endpoints",
      summary:
        "Leveraging wearables and eCOA to capture real-world patient data in a Type 2 diabetes management study.",
      therapeutic: "Endocrinology",
      result: "50% more data points, 45% faster completion",
      patientCount: "500 patients",
      icon: TrendingUp,
    },
    {
      title: "Global Respiratory Trial with Remote Monitoring",
      summary:
        "Implementing decentralized trial design for a chronic respiratory disease study across 8 countries.",
      therapeutic: "Respiratory",
      result: "70% reduction in patient travel, 90% retention",
      patientCount: "600+ patients",
      icon: Users,
    },
    {
      title: "Pediatric Vaccine Study with Family Engagement",
      summary:
        "Enhancing family participation in a pediatric vaccine trial through mobile app and at-home assessments.",
      therapeutic: "Pediatrics",
      result: "95% family satisfaction, 100% data completeness",
      patientCount: "300 families",
      icon: Target,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-success/5 via-background to-primary/5 py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img src={heroImage} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <BookOpen size={16} />
                Case Studies
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">Real Results, Real Impact</h1>
              <p className="text-xl text-muted-foreground">
                Discover how leading sponsors and CROs are transforming their clinical trials with Delve Health. See the measurable outcomes achieved across diverse therapeutic areas.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">45%</div>
                <div className="text-sm text-muted-foreground">Average Enrollment Increase</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-success mb-2">90%</div>
                <div className="text-sm text-muted-foreground">Patient Retention Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">35%</div>
                <div className="text-sm text-muted-foreground">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Successful Trials</div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {caseStudies.map((study, index) => {
                  const Icon = study.icon;
                  return (
                    <Card key={index} className="hover:shadow-lg transition-shadow group">
                      <CardContent className="pt-6">
                        <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-4">
                          <Icon className="text-success" size={24} />
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="text-xs font-semibold text-primary uppercase">{study.therapeutic}</div>
                          <span className="text-xs text-muted-foreground">•</span>
                          <div className="text-xs text-muted-foreground">{study.patientCount}</div>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">{study.title}</h3>
                        <p className="text-muted-foreground mb-4">{study.summary}</p>
                        <div className="bg-success/5 border border-success/20 rounded-md p-3 mb-4">
                          <p className="text-sm font-semibold text-success">{study.result}</p>
                        </div>
                        <Button variant="link" className="p-0 group-hover:translate-x-1 transition-transform">
                          Read Full Story <ArrowRight className="ml-2" size={16} />
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <img src={patientsDigitalHealth} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-background">
                <CardContent className="pt-8 pb-8">
                  <div className="text-center space-y-6">
                    <div className="text-4xl text-primary mb-4">"</div>
                    <p className="text-xl md:text-2xl font-medium italic">
                      Delve Health transformed how we conduct clinical trials. The platform's flexibility and patient-centric design enabled us to recruit diverse populations faster than ever before.
                    </p>
                    <div className="pt-4">
                      <div className="font-semibold">Dr. Sarah Mitchell</div>
                      <div className="text-sm text-muted-foreground">VP Clinical Operations, Global Pharma</div>
                    </div>
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
              <h2 className="text-3xl md:text-5xl font-bold">Ready to see these outcomes in your trials?</h2>
              <p className="text-xl text-muted-foreground">
                Join the sponsors achieving breakthrough results with Delve Health
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="hero" size="xl">
                  <Link to="/demo">
                    Schedule a Demo <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="xl">
                  <Link to="/resources/white-papers">View White Papers</Link>
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

export default CaseStudies;
