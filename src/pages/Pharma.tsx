import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Check, Users, BarChart2, Layers, Activity } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Pharma = () => {
  const valueProps = [
    "Centralized data across wearables, ePRO, and diaries",
    "Automated compliance with human intervention when it matters",
    "Regulatory-aligned digital endpoints (FDA, EMA, PMDA)",
    "Real-time dashboards for global oversight"
  ];

  const features = [
    { icon: <Globe />, title: "Global Scale", desc: "Deploy multilingual eCOA + wearables across any region." },
    { icon: <Check />, title: "Regulatory Alignment", desc: "Fit-for-purpose biomarker validation for FDA/EMA submissions." },
    { icon: <Users />, title: "Human Concierge", desc: "Real humans reach out when patients fall behind — improving compliance." },
    { icon: <BarChart2 />, title: "Real-Time Oversight", desc: "Live dashboards for safety signals, sync failures, and endpoint quality." }
  ];

  const unifiedFeatures = [
    "Validated wearable integrations (cellular + Bluetooth)",
    "Sensor calibration & objective endpoint mapping",
    "ePRO + symptom tracking with regulatory audit trails",
    "Digital biomarkers contextualized by real-world signals"
  ];

  const retentionFeatures = [
    "Proactive intervention for sync failures",
    "Multilingual patient outreach and device troubleshooting",
    "Scheduling, reminders, and adherence coaching",
    "Huge reductions in missing data and protocol deviations"
  ];

  const caseStudies = [
    { title: "Global Phase III Program", desc: "95% retention at 12 months with concierge + wearable oversight.", img: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80" },
    { title: "Digital Endpoint Validation", desc: "Objective signals correlated with gold-standard clinical measures.", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" },
    { title: "Hybrid Oncology Study", desc: "63% improvement in adherence through patient outreach programs.", img: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1b98?ixlib=rb-4.0.3&auto=format&fit=crop&w=1760&q=80" }
  ];

  const stats = [
    { val: "95%", label: "Device Compliance" },
    { val: "87%", label: "Retention at 12 Months" },
    { val: "60%", label: "Fewer Missed Syncs" },
    { val: "30%", label: "Faster Enrollment Support" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center bg-primary overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1932&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-display font-extrabold text-5xl lg:text-6xl text-white leading-tight mb-8">
              Make Your Global Trials Human.
            </h1>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              Unified eCOA, validated wearable endpoints, and human concierge support help pharma teams run decentralized and hybrid trials with confidence.
            </p>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
              <Link to="/demo">Book a Pharma Demo</Link>
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
                The Modern Infrastructure for Global Drug Trials
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Today's trials generate millions of signals — but only actionable, validated endpoints move programs forward. Delve Health brings eCOA, wearables, and multilingual concierge together into a single, regulatory-aligned ecosystem.
              </p>
              <ul className="space-y-3">
                {valueProps.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-primary">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Pharma Digital Platform"
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
              Built for Pharma Sponsors
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

      {/* Unified eCOA + Wearables */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2187d80a18f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Wearables and eCOA"
                className="rounded-2xl shadow-2xl border border-border"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-6">
                Unified eCOA + Wearables
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Instead of juggling siloed vendors, Delve harmonizes subjective and objective data streams into a single real-time environment.
              </p>
              <ul className="space-y-3 mb-8">
                {unifiedFeatures.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-primary">
                    <Layers className="w-5 h-5 text-secondary mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Retention */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
                Retention Powered by Humans, Not Just Software
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                When a device misses a sync, a diary goes incomplete, or a patient feels lost — automation flags the issue, and our concierge team resolves it in minutes.
              </p>
              <ul className="space-y-3">
                {retentionFeatures.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-accent mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1932&q=80"
                alt="Patient Concierge"
                className="rounded-2xl shadow-2xl border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary">
              Proven in Drug Development
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, i) => (
              <Card key={i} className="overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all group">
                <div className="h-48 bg-muted overflow-hidden relative">
                  <img src={study.img} alt={study.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg text-primary mb-3">{study.title}</h3>
                  <p className="text-muted-foreground text-sm">{study.desc}</p>
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
              Run Your Next Global Trial With Confidence.
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Real-time oversight. Validated digital endpoints. Human-centered retention.
            </p>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
              <Link to="/demo">Book a Pharma Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pharma;
