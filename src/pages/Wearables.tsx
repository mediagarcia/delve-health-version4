import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Check, Activity, Smartphone, BarChart3, Shield, Headset, AlertCircle, RefreshCw, Globe, Wifi, Box, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Wearables = () => {
  const stats1 = [
    { val: "60%", label: "Reduction in missed syncs" },
    { val: "100+", label: "Wearable models supported" },
    { val: "50+", label: "Global studies powered by Delve" },
  ];

  const stats2 = [
    { val: "95%", label: "Device compliance" },
    { val: "87%", label: "Retention at 6 months" },
    { val: "63%", label: "Higher engagement vs. site-only workflows" },
  ];

  const integrationFeatures = [
    { icon: <Smartphone className="w-6 h-6" />, title: "Universal Device Compatibility", desc: "Connect medical wearables, consumer sensors, cellular devices, or BYOD—all in one platform." },
    { icon: <BarChart3 className="w-6 h-6" />, title: "Real-Time Signal Harmonization", desc: "Normalize HR, HRV, SpO₂, sleep, steps, respiratory data into a consistent clinical data model." },
    { icon: <Shield className="w-6 h-6" />, title: "Automated QC & Signal Integrity", desc: "Detect outliers, missing samples, device drift, timestamp errors, and physiological anomalies." },
    { icon: <Wifi className="w-6 h-6" />, title: "Open Endpoint APIs", desc: "Export harmonized endpoints directly to EDC, analytics pipelines, or regulatory submission packages." },
  ];

  const endpointFeatures = [
    { icon: <Activity className="w-6 h-6" />, title: "Validated Algorithms", desc: "Gait speed, step quality, HR/HRV, sleep staging, SpO₂ trends, respiratory rate, and more." },
    { icon: <Shield className="w-6 h-6" />, title: "Regulatory-Ready Digital Endpoints", desc: "Developed using correlation, training, verification & FDA-aligned methodologies." },
    { icon: <BarChart3 className="w-6 h-6" />, title: "Live Endpoint Dashboards", desc: "Monitor patient status, stability of signals, algorithm outputs, and clinical trends." },
    { icon: <RefreshCw className="w-6 h-6" />, title: "Endpoint + ePRO Fusion", desc: "Combine symptoms, diaries, and objective measures into unified digital outcomes." },
  ];

  const engagementFeatures = [
    { icon: <Headset className="w-6 h-6" />, title: "Human Concierge Support", desc: "Onboarding, troubleshooting, reminders, and missed sync recovery." },
    { icon: <AlertCircle className="w-6 h-6" />, title: "Automated Issue Detection", desc: "Hardware failures, low battery, connectivity loss—caught instantly." },
    { icon: <RefreshCw className="w-6 h-6" />, title: "Closed-Loop Compliance", desc: "Automated triggers + human outreach ensures continuous evidence collection." },
    { icon: <Check className="w-6 h-6" />, title: "95% Compliance", desc: "Industry-leading adherence across diverse studies worldwide." },
  ];

  const validationFeatures = [
    { icon: <Shield className="w-6 h-6" />, title: "FDA/EMA Aligned", desc: "Fit-for-purpose validation & reproducibility checks for digital submissions." },
    { icon: <Box className="w-6 h-6" />, title: "Provisioning & Logistics", desc: "Shipping, SIM activation, returns, replacements, and inventory management." },
    { icon: <Smartphone className="w-6 h-6" />, title: "BYOD + Medical-Grade", desc: "Support for both patient-owned and sponsor-provided wearables." },
    { icon: <Globe className="w-6 h-6" />, title: "24/7 Global Support", desc: "Technical, clinical, patient-facing, and site support teams available worldwide." },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center bg-primary overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-display font-extrabold text-5xl lg:text-6xl text-white leading-tight mb-8">
              Digital Measures<br/>
              <span className="text-accent">Powered by Wearables</span>
            </h1>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              Transform raw sensor signals into validated digital endpoints. Standardize every device, operationalize every workflow, and generate continuous evidence—backed by real human engagement.
            </p>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
              <Link to="/demo">Explore Digital Measures</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* From Sensors to Submissions */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-6">
                From Sensors to Submissions
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Sponsors don't just need wearables—they need <strong className="text-primary">digital measures</strong> that meet FDA and EMA expectations for accuracy, reproducibility, and clinical relevance.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Delve converts multi-device signals into standardized metrics and validated digital endpoints, aligned with regulatory frameworks and built for hybrid and decentralized trials.
              </p>
              <ul className="space-y-3">
                {[
                  "Fit-for-purpose digital endpoint development",
                  "Correlation to gold standards",
                  "Algorithm training & verification pathways",
                  "Regulatory-aligned study documentation"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-primary">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Digital measures overview"
                className="rounded-2xl shadow-2xl border border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 1: Device Integration */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4">
              1. Device Integration & Signal Harmonization
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrationFeatures.map((feat, i) => (
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

      {/* Stats 1 */}
      <section className="bg-accent py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-8 text-center divide-x divide-white/20 text-white">
            {stats1.map((stat, idx) => (
              <div key={idx} className="px-4">
                <div className="font-display font-bold text-3xl md:text-4xl mb-2">{stat.val}</div>
                <div className="text-sm font-medium opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wearables Reality */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-6">
                The Wearables Reality No One Talks About
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Digital measures fail not because the sensors fail— but because <strong className="text-primary">no one operationalizes the devices.</strong>
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Patients forget to charge devices. Sites are overwhelmed. CROs lack playbooks. Data gaps grow quietly.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed font-semibold">
                Delve steps in with automation + real human follow-up so every wearable actually works in the real world.
              </p>
              <ul className="space-y-3">
                {[
                  "Missed sync detection & human outreach",
                  "Battery, connectivity & signal monitoring",
                  "Device troubleshooting & onboarding",
                  "Site workflows & escalation paths",
                  "Global multilingual support"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-primary">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Operationalizing wearables at scale"
                className="rounded-2xl shadow-2xl border border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 2: Digital Endpoints */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4">
              2. Digital Endpoints & Real-Time Clinical Insights
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {endpointFeatures.map((feat, i) => (
              <Card key={i} className="border-0 shadow-sm hover:shadow-md transition-all">
                <CardContent className="pt-8 pb-8">
                  <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-6">
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

      {/* Dashboard Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
            Unified Clinical Dashboard
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            Endpoints, ePRO, and wearable signals combined into one clinical command center.
          </p>
          <div className="max-w-5xl mx-auto bg-white/10 rounded-xl p-8 border border-white/20">
            <div className="bg-white rounded-lg h-64 flex items-center justify-center text-muted-foreground">
              <span className="text-lg font-medium">Live Dashboard Preview</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 3: Engagement */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4">
              3. Engagement & Compliance Engine
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {engagementFeatures.map((feat, i) => (
              <Card key={i} className="border-0 shadow-sm hover:shadow-md transition-all">
                <CardContent className="pt-8 pb-8">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mb-6">
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

      {/* Stats 2 */}
      <section className="bg-accent py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-8 text-center divide-x divide-white/20 text-white">
            {stats2.map((stat, idx) => (
              <div key={idx} className="px-4">
                <div className="font-display font-bold text-3xl md:text-4xl mb-2">{stat.val}</div>
                <div className="text-sm font-medium opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillar 4: Validation */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4">
              4. Validation, Deployment & Global Scale
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {validationFeatures.map((feat, i) => (
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

      {/* Final CTA */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-primary opacity-10"></div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h2 className="font-display font-extrabold text-4xl md:text-5xl mb-6">
            See How Digital Measures Transform Your Study
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Schedule a live walkthrough of the unified platform powering sensors, endpoints, analytics, and engagement.
          </p>
          <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-secondary">
            <Link to="/demo">Book a Demo</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Wearables;
