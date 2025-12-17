import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Headset, Calendar, Smartphone, Users, Check, Pill, Video,
  ClipboardList, Globe, ArrowRight
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Concierge = () => {
  const overviewFeatures = [
    "Secondary screening & eligibility pre-checks",
    "Visit scheduling, reminders & coordination",
    "Wearables, sensors & app support",
    "Device troubleshooting & onboarding",
    "Symptom diaries & ePRO adherence coaching",
    "Site + sponsor escalation workflows"
  ];

  const screeningFeatures = [
    { icon: <ClipboardList />, title: "Eligibility Pre-Checks", desc: "Scripted assessments aligned with inclusion/exclusion criteria." },
    { icon: <Users />, title: "Patient Intake Interviews", desc: "Multilingual screening interviews to validate readiness." },
    { icon: <Smartphone />, title: "Technology Readiness", desc: "Checks patient devices, bandwidth, apps, and technical literacy." },
    { icon: <Calendar />, title: "Visit Scheduling", desc: "Coordinated scheduling with sites, nurses, and labs." }
  ];

  const deviceSupport = [
    "Device setup & onboarding",
    "Battery & sync monitoring",
    "Connectivity troubleshooting",
    "Wear-time coaching",
    "eCOA & eConsent guidance",
    "Device replacement coordination"
  ];

  const televisitFeatures = [
    { title: "Video/Audio Checks", desc: "Ensure the patient's device can support remote visits." },
    { title: "Bandwidth Tests", desc: "Connectivity diagnostics to prevent broken calls." },
    { title: "App Setup", desc: "Download, login, troubleshooting & verification." },
    { title: "Pre-Visit Coaching", desc: "Walk patients through what to expect during the visit." }
  ];

  const globalFeatures = [
    "Multilingual patient support",
    "24/7 global coverage",
    "Automated alerts for missed tasks",
    "Human follow-up when automation isn't enough",
    "Site escalation pathways"
  ];

  const stats = [
    { val: "92%", label: "ePRO completion with human follow-up" },
    { val: "95%", label: "Device compliance across wearable studies" },
    { val: "87%", label: "Retention at month 6 in hybrid trials" },
    { val: "60%", label: "Faster resolution of patient issues" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center bg-primary overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/50"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-display font-extrabold text-5xl lg:text-6xl text-white leading-[1.1] mb-8">
              Empathy + Automation.<br/>
              <span className="text-accent">The Human Layer of Every Trial.</span>
            </h1>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              Patient support, secondary screening, device troubleshooting, and protocol-driven workflows — all delivered by a multilingual team trained in clinical research.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
              <Link to="/demo">Explore Concierge Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-6">
                The Human Connection That Keeps Trials Moving
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Technology alone cannot prevent missed visits, incomplete diaries, or unsynced wearables. Delve's Concierge-as-a-Service™ pairs automation with real humans who ensure <strong className="text-primary">patients feel supported and sites stay efficient.</strong>
              </p>
              <ul className="space-y-3 mb-8">
                {overviewFeatures.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-primary">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1932&q=80"
                alt="Concierge Helping Patients"
                className="rounded-2xl shadow-2xl border border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Screening & Qualification */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4">
              Secondary Screening & Patient Qualification
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {screeningFeatures.map((feat, i) => (
              <Card key={i} className="border-0 shadow-sm hover:shadow-md transition-all">
                <CardContent className="pt-8 pb-8">
                  <div className="w-12 h-12 rounded-full bg-primary/5 text-accent flex items-center justify-center mb-6">
                    {feat.icon}
                  </div>
                  <h3 className="font-bold text-lg text-primary mb-3">{feat.title}</h3>
                  <p className="text-sm text-muted-foreground">{feat.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Device Support */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <img
                src="https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80"
                alt="Wearable Device Support"
                className="rounded-2xl shadow-2xl border border-border"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-6">
                Wearables, Sensors & App Support
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our team ensures that every wearable device and mobile app stays connected, charged, synced, and compliant.
              </p>
              <ul className="space-y-3 mb-8">
                {deviceSupport.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-primary">
                    <Check className="w-5 h-5 text-secondary mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-primary font-bold text-lg italic">Because endpoints only work when devices do.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Televisit Readiness */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Televisit Readiness & Remote Visit Support
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Hybrid trials require patients to be technically ready. Delve ensures every remote session runs smoothly.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {televisitFeatures.map((item, i) => (
              <div key={i} className="bg-white/5 p-6 rounded-xl border border-white/10">
                <div className="mb-4 text-accent">
                  <Video className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Coverage */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <img
                src="https://images.unsplash.com/photo-1526304640152-d4619684e484?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80"
                alt="Global Coverage"
                className="rounded-2xl shadow-2xl border border-border"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-6">
                Global Coverage + Hybrid Support Engine
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Delve's concierge team supports patients in <strong className="text-primary">120+ languages</strong> with 24/7 coverage across regions.
              </p>
              <ul className="space-y-3 mb-8">
                {globalFeatures.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-primary">
                    <Check className="w-5 h-5 text-accent mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="bg-accent py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20 text-white">
            {stats.map((stat, idx) => (
              <div key={idx} className="px-4">
                <div className="font-display font-bold text-4xl mb-2">{stat.val}</div>
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
              The Human Layer Every Trial Needs.
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Let us show you how Delve's concierge team improves compliance, retention, and data quality across decentralized and hybrid trials.
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

export default Concierge;
