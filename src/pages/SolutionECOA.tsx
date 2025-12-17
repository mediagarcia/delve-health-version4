import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Check, Users, Activity, Smartphone, FileText, Headset, Watch, BarChart3 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const SolutionECOA = () => {
  const stats = [
    { val: "92%", label: "ePRO Completion" },
    { val: "45%", label: "Improved Daily Adherence" },
    { val: "30%", label: "Faster Data Availability" },
    { val: "120+", label: "Languages Supported" },
  ];

  const pillars = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "1. Patient-Centric, Multilingual, Accessible",
      desc: "Mobile-first assessments with adaptive UX, multimedia prompts, and multilingual support ensure high compliance across diverse populations and age groups."
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "2. Researcher-Controlled & Protocol-Driven",
      desc: "Robust form builder, branching logic, edit checks, version control, and visit structures give sponsors and CROs complete control with zero engineering bottlenecks."
    },
    {
      icon: <Watch className="w-8 h-8" />,
      title: "3. Connected to Wearables & Human Support",
      desc: "Sensor data + ePRO combined with concierge-supported compliance means continuous, dependable evidence — not isolated diary entries."
    }
  ];

  const formBuilderFeatures = [
    "PRO, ClinRO, ObsRO, PerfRO support",
    "Full branching, scoring, conditional logic",
    "Audio, video, and image capture inside forms",
    "Sequential forms and multi-part workflows",
    "Visit windows auto-adjusted to patient behavior",
    "Real-time edit checks and version control"
  ];

  const wearableFusionFeatures = [
    "FDA-aligned digital endpoints",
    "Activity, HR, HRV, SpO₂, sleep, respiratory data",
    "Correlated with symptom diaries, ClinRO, and visit forms",
    "Real-time biomarker trends and alerts"
  ];

  const humanEngagementFeatures = [
    "Follow-up on missed entries in real time",
    "Multilingual patient coaching & troubleshooting",
    "Direct support for sites during busy visit days",
    "Reduced deviations, higher compliance",
    "Proactive intervention when wearable or app issues occur"
  ];

  const caseStudies = [
    { title: "Hybrid Oncology Study", stat: "92% ePRO completion using concierge follow-up on missed tasks." },
    { title: "Respiratory Trial", stat: "45% improvement in daily symptom diary adherence." },
    { title: "Chronic Conditions", stat: "30% faster interim analysis using unified ePRO + wearable data." }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center bg-primary overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-display font-extrabold text-5xl lg:text-6xl text-white leading-tight mb-8">
              Unified eCOA + Wearables +<br/>
              <span className="text-accent">Human Engagement</span>
            </h1>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              The only eCOA platform designed for real-world trials — combining digital assessments, validated biomarkers, real-time QC, and live patient support to ensure every data point is complete, accurate, and operationalized.
            </p>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
              <Link to="/demo">See eCOA Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-6">
                eCOA Built for Real-World Research
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Clinical outcomes fail when patients miss diaries, devices break, or sites can't support troubleshooting. Delve Health solves this by blending modern eCOA, wearable-driven insights, and human engagement into one unified ecosystem.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Data becomes more reliable. Patients stay supported. Sites stay unburdened. Sponsors get cleaner evidence with fewer deviations and faster readouts.
              </p>
              <ul className="space-y-3">
                {[
                  "Multilingual, global-ready eCOA + ePRO",
                  "Real-time QC and deviation prevention",
                  "BYOD or fully provisioned devices with SIM",
                  "Wearables + ePRO harmonized to create digital endpoints",
                  "Concierge support in 120+ languages"
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
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="eCOA platform overview"
                className="rounded-2xl shadow-2xl border border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4">
              The Three Pillars of Modern eCOA
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pillars.map((pillar, i) => (
              <Card key={i} className="border-0 shadow-sm hover:shadow-md transition-all">
                <CardContent className="pt-8 pb-8">
                  <div className="w-16 h-16 rounded-full bg-primary/5 text-accent flex items-center justify-center mb-6">
                    {pillar.icon}
                  </div>
                  <h3 className="font-bold text-lg text-primary mb-4">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{pillar.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Form Builder */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="eCOA form builder"
                className="rounded-2xl shadow-2xl border border-border"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-6">
                A Flexible, Powerful Form Builder
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Build protocol-aligned instruments in minutes — no custom development needed. StudyPal's authoring tools let research teams design, test, validate, and deploy assessments faster than traditional eCOA vendors.
              </p>
              <ul className="space-y-3 mb-6">
                {formBuilderFeatures.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-primary">
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground">
                All forms stay aligned with regulatory expectations — including FDA, EMA, and ICH E6(R3) guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ePRO + Wearable Fusion */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-6">
                Subjective + Objective Data in One Place
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Wearables provide objective data; ePRO captures subjective experience. Delve Health merges the two — enabling richer endpoints, early signal detection, and context around patient behavior.
              </p>
              <ul className="space-y-3 mb-6">
                {wearableFusionFeatures.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-primary">
                    <Activity className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg font-semibold text-primary">
                This is the future of evidence generation: <span className="text-secondary">signals + symptoms → complete insight.</span>
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Wearables integrated with ePRO"
                className="rounded-2xl shadow-2xl border border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Human Engagement */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Human engagement with patients"
                className="rounded-2xl shadow-2xl border border-border"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-6">
                Where Other eCOA Vendors Stop, Humans Take Over
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Software alone cannot fix missed diaries, low tech literacy, battery issues, or sync failures. Delve's Concierge-as-a-Service™ becomes the operational engine behind your study.
              </p>
              <ul className="space-y-3 mb-6">
                {humanEngagementFeatures.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-primary">
                    <Headset className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg font-semibold text-primary mb-6">
                It's not just eCOA — it's eCOA with a human safety net.
              </p>
              <Button asChild variant="link" className="p-0 text-accent">
                <Link to="/solutions/concierge">
                  Learn more about Concierge-as-a-Service™ <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4">
              Proven eCOA Outcomes
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {caseStudies.map((study, i) => (
              <Card key={i} className="border-0 shadow-sm hover:shadow-md transition-all overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                <CardContent className="pt-6 pb-8">
                  <h3 className="font-bold text-xl text-primary mb-3">{study.title}</h3>
                  <p className="text-muted-foreground">{study.stat}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-accent py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20 text-white">
            {stats.map((stat, idx) => (
              <div key={idx} className="px-4">
                <div className="font-display font-bold text-3xl md:text-4xl mb-2">{stat.val}</div>
                <div className="text-sm font-medium opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-primary opacity-10"></div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h2 className="font-display font-extrabold text-4xl md:text-5xl mb-6">
            Experience the Future of eCOA
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Unified assessments. Wearable-connected endpoints. Human engagement behind every data point.
          </p>
          <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-secondary">
            <Link to="/demo">See eCOA Demo</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SolutionECOA;
