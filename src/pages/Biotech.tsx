import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dna, Check, Zap, BarChart2, Clock, Shield } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Biotech = () => {
  const features = [
    { icon: <Zap />, title: "Rapid Deployment", desc: "Get studies running fast with pre-validated wearable integrations." },
    { icon: <Shield />, title: "Regulatory Ready", desc: "Fit-for-purpose digital endpoints designed for FDA/EMA approval." },
    { icon: <BarChart2 />, title: "Real-Time Visibility", desc: "Live dashboards to monitor patient compliance and data quality." },
    { icon: <Clock />, title: "Reduced Timelines", desc: "Human concierge support accelerates enrollment and retention." }
  ];

  const stats = [
    { val: "40%", label: "Faster Study Setup" },
    { val: "92%", label: "ePRO Completion Rate" },
    { val: "75%", label: "Reduction in Missing Data" },
    { val: "95%", label: "Patient Satisfaction" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center bg-primary overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-display font-extrabold text-5xl lg:text-6xl text-white leading-tight mb-8">
              Move Fast Without Breaking Your Trial.
            </h1>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              Fit-for-purpose digital endpoints and human concierge support help biotech teams run lean, efficient trials without sacrificing data quality.
            </p>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
              <Link to="/demo">Book a Biotech Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Value Prop */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-6">
                Enterprise Capabilities for Emerging Biotech
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Small teams. Big ambitions. Delve gives biotech companies the same validated digital endpoints and patient support that global pharma relies on — without the enterprise overhead.
              </p>
              <ul className="space-y-3">
                {[
                  "Pre-validated wearable integrations",
                  "Multilingual patient concierge support",
                  "Scalable from Phase I to Phase III",
                  "Pay-as-you-grow pricing models"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-primary">
                    <Check className="w-5 h-5 text-accent mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Biotech Platform"
                className="rounded-2xl shadow-2xl border border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4">
              Built for Lean Biotech Teams
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feat, i) => (
              <Card key={i} className="border-0 shadow-sm hover:shadow-md transition-all">
                <CardContent className="pt-8 pb-8">
                  <div className="w-12 h-12 rounded-full bg-primary/5 text-accent flex items-center justify-center mb-6">
                    {feat.icon}
                  </div>
                  <h3 className="font-bold text-lg text-primary mb-3">{feat.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feat.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="bg-accent py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20 text-white">
            {stats.map((stat, idx) => (
              <div key={idx} className="px-4">
                <div className="font-display font-bold text-3xl md:text-4xl mb-2">{stat.val}</div>
                <div className="text-sm font-medium uppercase tracking-wide opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-extrabold text-4xl text-primary mb-6">
              Run Your Trial Like the Big Players.
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Enterprise-grade infrastructure with startup-friendly flexibility.
            </p>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
              <Link to="/demo">Book a Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Biotech;
