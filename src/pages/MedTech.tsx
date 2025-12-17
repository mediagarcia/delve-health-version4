import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Stethoscope, Check, Users, BarChart2, Activity, FileCheck } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const MedTech = () => {
  const features = [
    { icon: <Activity />, title: "Real-World Evidence", desc: "Capture device performance data in natural patient environments." },
    { icon: <Users />, title: "Patient Training", desc: "Concierge-led device onboarding and troubleshooting support." },
    { icon: <BarChart2 />, title: "Post-Market Surveillance", desc: "Continuous monitoring dashboards for regulatory compliance." },
    { icon: <FileCheck />, title: "FDA/CE Alignment", desc: "Documentation and audit trails for regulatory submissions." }
  ];

  const stats = [
    { val: "94%", label: "Patient Retention in Post-Market Studies" },
    { val: "85%", label: "Device Compliance Rate" },
    { val: "50%", label: "Reduction in Site Burden" },
    { val: "35%", label: "Faster Data Collection" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center bg-primary overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-display font-extrabold text-5xl lg:text-6xl text-white leading-tight mb-8">
              Real-World Data for Medical Device Innovation.
            </h1>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              Capture post-market performance data, train patients on device usage, and maintain compliance with real-time dashboards and human support.
            </p>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
              <Link to="/demo">Book a MedTech Demo</Link>
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
                Post-Market Evidence at Scale
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Medical device companies need continuous real-world performance data. Delve's platform captures patient experiences, device metrics, and adverse events in a unified system.
              </p>
              <ul className="space-y-3">
                {[
                  "Continuous device performance monitoring",
                  "Patient-reported outcomes for safety signals",
                  "Automated compliance tracking",
                  "Integration with existing device ecosystems"
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
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="MedTech Platform"
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
              Built for Medical Device Companies
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
              Capture Real-World Device Performance.
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Partner with Delve to build robust post-market evidence programs.
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

export default MedTech;
