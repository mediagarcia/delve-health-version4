import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Smartphone, Clock, Shield, Globe } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ecoaImage from "@/assets/ecoa-platform.jpg";
import heroImage from "@/assets/hero-clinical-trial.jpg";

const SolutionECOA = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold">
                eCOA that keeps patients engaged and sites aligned
              </h1>
              <p className="text-xl text-muted-foreground">
                Streamline data collection and improve compliance across all trial sites with our patient-friendly
                digital diaries
              </p>
              <Button asChild variant="hero" size="xl">
                <Link to="/demo">
                  Schedule a Demo <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Overview with Image */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <img
                  src={ecoaImage}
                  alt="eCOA platform interface showing digital diary"
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Transform patient data collection with intuitive eCOA
                </h2>
                <p className="text-lg text-muted-foreground">
                  Our electronic Clinical Outcome Assessments (eCOA) solution replaces paper diaries with an engaging
                  digital experience that patients love and sites trust. Real-time validation ensures data quality from
                  day one.
                </p>
                <div className="space-y-3">
                  {[
                    "Reduce protocol deviations by 60%",
                    "Improve patient compliance rates",
                    "Accelerate database lock by weeks",
                    "Ensure regulatory-ready audit trails",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="text-success flex-shrink-0" size={20} />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Capabilities */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Built for modern clinical trials</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive features designed for patient-centricity and operational excellence
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="text-primary" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Patient-Friendly Design</h3>
                  <p className="text-sm text-muted-foreground">
                    Intuitive interfaces that work on any device with minimal training required
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Clock className="text-accent" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Real-Time Data Collection</h3>
                  <p className="text-sm text-muted-foreground">
                    Instant data capture and review with automated quality checks and alerts
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Globe className="text-success" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Offline Functionality</h3>
                  <p className="text-sm text-muted-foreground">
                    Works anywhere, even without internet connection, syncing when back online
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Shield className="text-primary" size={32} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Compliance & Audit Trail</h3>
                  <p className="text-sm text-muted-foreground">
                    Built-in 21 CFR Part 11 compliance with complete audit trails and data security
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">How eCOA supports your trial</h2>
                <p className="text-xl text-muted-foreground">A streamlined 4-step process from setup to analysis</p>
              </div>

              <div className="space-y-12">
                {[
                  {
                    step: "01",
                    title: "Configure & Deploy",
                    description:
                      "Set up your study protocols, assessments, and visit schedules with our easy-to-use configuration tools. Deploy to sites in days, not months.",
                  },
                  {
                    step: "02",
                    title: "Train & Onboard",
                    description:
                      "Simple training for sites and patients with comprehensive support materials. Most patients are comfortable within minutes.",
                  },
                  {
                    step: "03",
                    title: "Collect & Validate",
                    description:
                      "Real-time data collection with built-in validation rules. Automatic reminders keep patients on schedule and ensure compliance.",
                  },
                  {
                    step: "04",
                    title: "Monitor & Report",
                    description:
                      "Centralized monitoring dashboards provide instant visibility. Export regulatory-ready reports with complete audit trails.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-8 items-start">
                    <div className="flex-shrink-0 w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold">
                      {item.step}
                    </div>
                    <div className="flex-grow pt-2">
                      <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                      <p className="text-lg text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Customer Story */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-block px-4 py-2 bg-primary-foreground/10 rounded-full text-sm font-semibold mb-6">
                  SUCCESS STORY
                </div>
              </div>
              <blockquote className="text-2xl md:text-3xl font-medium text-center mb-8">
                "We saw a 35% improvement in data capture completeness and virtually eliminated query resolution time.
                The platform's intuitive design led to 95% patient satisfaction scores."
              </blockquote>
              <div className="text-center">
                <p className="font-semibold">Dr. Michael Rodriguez</p>
                <p className="text-primary-foreground/80">Study Director, Phase III Oncology Trial</p>
              </div>
              <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2">35%</div>
                  <div className="text-primary-foreground/80">Improvement in data quality</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">95%</div>
                  <div className="text-primary-foreground/80">Patient satisfaction</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">-80%</div>
                  <div className="text-primary-foreground/80">Query resolution time</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Related Resources</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="text-sm font-semibold text-primary mb-2">WHITE PAPER</div>
                    <h3 className="text-xl font-semibold mb-3">
                      Best Practices for eCOA Implementation in Decentralized Trials
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Learn how leading sponsors are deploying eCOA to improve patient engagement and data quality.
                    </p>
                    <Button variant="link" className="p-0">
                      Download PDF <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="text-sm font-semibold text-accent mb-2">CASE STUDY</div>
                    <h3 className="text-xl font-semibold mb-3">
                      How a Phase III Oncology Trial Reduced Screen Failures by 40%
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Real results from a global study using Delve Health's eCOA platform.
                    </p>
                    <Button variant="link" className="p-0">
                      Read More <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold">See eCOA in action</h2>
              <p className="text-xl text-muted-foreground">
                Schedule a personalized demo to explore how our eCOA solution can transform your clinical trials
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

export default SolutionECOA;
