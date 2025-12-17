import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Target, Users, Heart, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import teamImage from "@/assets/team-collaboration.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/5 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Heart className="text-primary mx-auto animate-pulse mb-4" size={48} />
              <h1 className="text-4xl md:text-6xl font-bold">
                Behind every dataset is a life we're helping change
              </h1>
              <p className="text-xl text-muted-foreground">
                We believe every trial should be built for people first — powered by empathy, driven by evidence, and made possible by connection.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <img src={teamImage} alt="Delve Health team collaboration" className="rounded-lg shadow-xl" />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
                <p className="text-lg text-muted-foreground">
                  Delve Health began with one patient — and now powers thousands worldwide. We were founded on the belief that clinical research forgot how to listen. So we built the translator.
                </p>
                <p className="text-lg text-muted-foreground">
                  We unite validated wearables, multilingual eCOA, and real-human concierge engagement to transform raw signals into regulator-ready insight. Because technology connects data, but empathy connects people.
                </p>
                <p className="text-lg text-muted-foreground">
                  Our hybrid engine pairs AI automation with live concierge outreach — keeping retention high, compliance strong, and endpoints clean across 50+ global studies in 120 languages.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Values</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Heart className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Patient-First</h3>
                  <p className="text-muted-foreground">
                    Every decision we make starts with how it impacts patient experience and accessibility
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Target className="text-accent" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Outcome-Driven</h3>
                  <p className="text-muted-foreground">
                    We focus on measurable results that truly advance clinical research and patient care
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="text-success" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Collaborative</h3>
                  <p className="text-muted-foreground">
                    We partner closely with sponsors, sites, and patients to co-create better solutions
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                  <p className="text-muted-foreground">
                    We continuously evolve our technology to meet the changing needs of modern clinical trials
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section id="leadership" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Leadership Team</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Experienced leaders combining clinical research expertise with technology innovation
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl font-bold text-primary">
                    JD
                  </div>
                  <h3 className="text-xl font-semibold mb-1">Jane Doe</h3>
                  <p className="text-primary font-medium mb-3">CEO & Co-Founder</p>
                  <p className="text-sm text-muted-foreground">
                    Former VP of Clinical Operations at a top-10 pharma company with 20+ years of experience in global
                    trial management.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl font-bold text-accent">
                    MS
                  </div>
                  <h3 className="text-xl font-semibold mb-1">Michael Smith</h3>
                  <p className="text-primary font-medium mb-3">CTO & Co-Founder</p>
                  <p className="text-sm text-muted-foreground">
                    Technology leader who previously built healthcare platforms serving millions of patients across 50+
                    countries.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-success/20 to-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl font-bold text-success">
                    SC
                  </div>
                  <h3 className="text-xl font-semibold mb-1">Dr. Sarah Chen</h3>
                  <p className="text-primary font-medium mb-3">Chief Medical Officer</p>
                  <p className="text-sm text-muted-foreground">
                    Board-certified physician and clinical research expert with extensive experience in regulatory
                    affairs and patient advocacy.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
                <p className="text-xl text-primary-foreground/80">Measurable results across global clinical trials</p>
              </div>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-5xl font-bold mb-2">500+</div>
                  <div className="text-primary-foreground/80">Clinical Trials Supported</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">50K+</div>
                  <div className="text-primary-foreground/80">Patients Enrolled</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">40%</div>
                  <div className="text-primary-foreground/80">Faster Enrollment</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">95%</div>
                  <div className="text-primary-foreground/80">Data Quality Score</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold">Join us in transforming clinical trials</h2>
              <p className="text-xl text-muted-foreground">
                Partner with Delve Health to make your next study more accessible, efficient, and patient-centric
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

export default About;
