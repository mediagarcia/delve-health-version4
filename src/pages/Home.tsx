import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight, Activity, Users, Check, Heart,
  LayoutDashboard, BarChart3, Pill, Stethoscope, Dna, Building2,
  Headset, ClipboardList, Smartphone
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Home = () => {
  const stats = [
    { val: '95%', label: 'Device Compliance' },
    { val: '+45%', label: 'Higher ePRO Completion' },
    { val: '60%', label: 'Fewer Missed Syncs' },
    { val: '87%', label: 'Retention at 12 Months' },
  ];

  const conciergeFeatures = [
    "Secondary screening & prescreening support",
    "Missed-sync detection with 15-minute human follow-up",
    "Device onboarding & multilingual troubleshooting",
    "Medication reminders, scheduling & outreach",
    "Chart retrieval + televisit readiness for hybrid studies",
    "Daily compliance monitoring across devices and eCOA"
  ];

  const platformFeatures = [
    { title: "Validated Integrations", desc: "Seamless connection to medical-grade wearables and sensors." },
    { title: "Global eCOA & ePRO", desc: "Deployed in 120+ languages with regulatory alignment." },
    { title: "Real-Time Dashboards", desc: "Instant visibility for sponsors, CROs, and sites." },
  ];

  const industries = [
    {
      icon: <Pill className="w-8 h-8" />,
      title: "Pharma",
      desc: "Unified eCOA, wearables, and concierge support for global drug trials.",
      link: "/pharma"
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "MedTech",
      desc: "Real-world post-market data, device training, and patient engagement.",
      link: "/medtech"
    },
    {
      icon: <Dna className="w-8 h-8" />,
      title: "Biotech",
      desc: "Fit-for-purpose digital endpoints to help small teams move faster.",
      link: "/biotech"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Research Sites",
      desc: "Concierge support, scheduling, and burden-reducing workflows.",
      link: "/sites"
    },
  ];

  const capabilities = [
    { icon: <LayoutDashboard />, title: "Unified Platform", desc: "eCOA, wearables, diaries & dashboards connected end-to-end." },
    { icon: <Activity />, title: "Digital Endpoints", desc: "Validated, regulator-ready wearable biomarkers." },
    { icon: <Users />, title: "Human Concierge", desc: "Real humans supporting patients in 120 languages." },
    { icon: <BarChart3 />, title: "Real-Time Analytics", desc: "Live study visibility reduces delays and deviations." },
  ];

  const caseStudies = [
    {
      title: "Post-Market Respiratory",
      stat: "Visits reduced 12 → 2",
      sub: "Retention: 94%",
    },
    {
      title: "Hybrid Oncology",
      stat: "63% Increase",
      sub: "in retention through concierge",
    },
    {
      title: "Wearable Integration",
      stat: "35% Increase",
      sub: "in data completion in 14 days",
    }
  ];

  const comparisonRows = [
    "Unified eCOA + Wearables",
    "Human Concierge Support",
    "Sync Issue Resolution (15 min avg)",
    "Real-Time Dashboards",
    "Validated Wearables"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <h1 className="font-display font-extrabold text-5xl lg:text-7xl text-white leading-[1.1] mb-8">
              Some See Noise.<br/>
              <span className="text-accent">We Hear Heartbeats.</span>
            </h1>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
              Unified wearable data, multilingual eCOA, and human concierge support — delivering validated endpoints and unmatched compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                <Link to="/demo">Book a Demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                <Link to="/demo">Talk to Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white relative z-20 -mt-8 mx-4 sm:mx-8 lg:mx-auto max-w-7xl rounded-xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-8 text-center bg-white hover:bg-gray-50 transition-colors">
              <div className="font-display font-bold text-4xl text-accent mb-2">{stat.val}</div>
              <div className="font-medium text-primary text-sm uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Concierge Spotlight */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-muted rounded-3xl p-8 lg:p-12 border border-accent/20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-6">
                  Concierge-as-a-Service™<br/>
                  <span className="text-secondary">The Human Layer Every Trial Needs.</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Wearables don't fail because of technology — they fail because no one owns the operational layer. Delve's concierge team keeps patients engaged, sites supported, and devices online in the real world.
                </p>
                <div className="space-y-4 mb-10">
                  {conciergeFeatures.map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="mt-1 min-w-[20px]">
                        <Check className="w-5 h-5 text-accent" />
                      </div>
                      <span className="text-primary font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <Button asChild className="bg-accent hover:bg-accent/90 text-white">
                  <Link to="/solutions/concierge">
                    Explore Concierge-as-a-Service™ <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                    alt="Concierge Team"
                    className="object-cover w-full h-full object-center"
                  />
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur rounded-lg p-4 shadow-lg border-l-4 border-secondary">
                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Response Time</div>
                    <div className="text-2xl font-bold text-primary">~15 Minutes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unified Platform */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -inset-4 bg-accent/10 rounded-full filter blur-3xl opacity-70"></div>
              <img
                src="https://images.unsplash.com/photo-1631217868269-dfec8d9d7d3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Unified Platform in Action"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-6">
                One Platform. Every Signal.
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Wearables, eCOA, diaries, vitals, and concierge — harmonized into real-time insights. Reduce complexity, improve compliance, and deliver cleaner datasets.
              </p>
              <div className="space-y-6">
                {platformFeatures.map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 bg-muted rounded-xl border border-border hover:border-accent transition-colors">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
                      <LayoutDashboard className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">Who We Serve</h2>
            <p className="text-lg text-gray-300">
              Whether you're developing a drug, device, or running a research site — Delve Health offers tailored solutions to help your study run smarter, faster, and more human.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((card, idx) => (
              <Link
                key={idx}
                to={card.link}
                className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-accent hover:border-accent transition-all group cursor-pointer"
              >
                <div className="mb-6 text-accent group-hover:text-white transition-colors">
                  {card.icon}
                </div>
                <h3 className="font-display font-bold text-xl mb-4">{card.title}</h3>
                <p className="text-sm text-gray-300 group-hover:text-white/90 leading-relaxed">
                  {card.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Human + Automation */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-6">
                Automation Solves Problems.<br/>
                <span className="text-secondary">Humans Prevent Them.</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Automation flags issues. Humans resolve them. Our concierge team proactively restores missed syncs and improves compliance in minutes — not days.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Multilingual patient support",
                  "Proactive device troubleshooting",
                  "Real-time outreach for missed tasks",
                  "Daily compliance monitoring"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-muted p-4 rounded-lg">
                    <Headset className="w-5 h-5 text-secondary" />
                    <span className="font-medium text-primary text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-4.0.3&auto=format&fit=crop&w=1973&q=80"
                alt="Human Support with Wearables"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-display font-bold text-3xl text-primary mb-16">
            Built for Modern Clinical Research
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {capabilities.map((feat, i) => (
              <Card key={i} className="border-0 shadow-sm hover:shadow-md transition-shadow text-center">
                <CardContent className="pt-8 pb-8">
                  <div className="inline-flex p-3 rounded-full bg-accent/10 text-accent mb-4">
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

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-primary">Proven in Global Studies</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {caseStudies.map((study, idx) => (
              <Card key={idx} className="group cursor-pointer overflow-hidden border-2 hover:border-accent transition-colors">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-xl text-primary mb-2">{study.title}</h3>
                  <p className="text-accent font-bold text-lg">{study.stat}</p>
                  <p className="text-muted-foreground">{study.sub}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button asChild className="bg-accent hover:bg-accent/90 text-white">
              <Link to="/resources/case-studies">
                View Case Studies <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Dashboard Showcase */}
      <section className="py-24 bg-primary text-white overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">See Your Study in Real Time</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Every patient signal flows into Delve's unified dashboard — giving sponsors, CROs, and sites instant visibility.
            </p>
          </div>
          <div className="relative mx-auto max-w-5xl rounded-t-xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-2">
            <div className="bg-primary/10 w-full h-8 flex items-center px-4 space-x-2 border-b border-white/10 mb-2 rounded-t">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            {/* Mock Dashboard UI */}
            <div className="bg-white rounded h-[400px] sm:h-[500px] flex items-center justify-center text-gray-400 relative overflow-hidden">
              <div className="absolute inset-0 grid grid-cols-12 gap-4 p-6">
                {/* Sidebar */}
                <div className="col-span-2 bg-gray-50 rounded hidden md:block"></div>
                {/* Main */}
                <div className="col-span-12 md:col-span-10 grid grid-rows-6 gap-4">
                  {/* Header Stats */}
                  <div className="row-span-1 grid grid-cols-4 gap-4">
                    <div className="bg-blue-50 rounded border border-blue-100 p-4">
                      <div className="h-2 w-1/2 bg-blue-200 rounded mb-2"></div>
                      <div className="h-6 w-3/4 bg-blue-600 rounded"></div>
                    </div>
                    <div className="bg-teal-50 rounded border border-teal-100 p-4">
                      <div className="h-2 w-1/2 bg-teal-200 rounded mb-2"></div>
                      <div className="h-6 w-3/4 bg-teal-600 rounded"></div>
                    </div>
                    <div className="bg-orange-50 rounded border border-orange-100 p-4">
                      <div className="h-2 w-1/2 bg-orange-200 rounded mb-2"></div>
                      <div className="h-6 w-3/4 bg-orange-600 rounded"></div>
                    </div>
                    <div className="bg-purple-50 rounded border border-purple-100 p-4">
                      <div className="h-2 w-1/2 bg-purple-200 rounded mb-2"></div>
                      <div className="h-6 w-3/4 bg-purple-600 rounded"></div>
                    </div>
                  </div>
                  {/* Charts */}
                  <div className="row-span-3 grid grid-cols-2 gap-4">
                    <div className="bg-white border border-gray-100 rounded shadow-sm p-4 flex items-end justify-between px-8 pb-4">
                      <div className="w-8 h-[40%] bg-accent rounded-t"></div>
                      <div className="w-8 h-[60%] bg-accent rounded-t"></div>
                      <div className="w-8 h-[45%] bg-accent rounded-t"></div>
                      <div className="w-8 h-[75%] bg-accent rounded-t"></div>
                      <div className="w-8 h-[90%] bg-accent rounded-t"></div>
                    </div>
                    <div className="bg-white border border-gray-100 rounded shadow-sm relative overflow-hidden">
                      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                        <path d="M0 100 Q 50 50 100 80 T 200 40 T 300 90" fill="none" stroke="#FF6E2C" strokeWidth="3" />
                      </svg>
                    </div>
                  </div>
                  {/* List */}
                  <div className="row-span-2 bg-white border border-gray-100 rounded shadow-sm p-4 space-y-3">
                    <div className="h-8 bg-gray-50 rounded w-full"></div>
                    <div className="h-8 bg-gray-50 rounded w-full"></div>
                    <div className="h-8 bg-gray-50 rounded w-full"></div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/5 backdrop-blur-[1px]">
                <span className="bg-white/90 px-4 py-2 rounded shadow text-sm font-semibold text-gray-600">
                  Live Dashboard Preview
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center font-display font-bold text-3xl md:text-4xl text-primary mb-12">
              Why Sponsors Choose Delve
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="py-4 px-6 bg-muted text-primary font-bold text-lg border-b-2 border-accent w-1/2">Capability</th>
                    <th className="py-4 px-6 bg-primary text-white font-bold text-lg text-center w-1/4 rounded-t-lg">Delve Health</th>
                    <th className="py-4 px-6 bg-muted text-muted-foreground font-bold text-lg text-center w-1/4">Other Vendors</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={i} className="border-b border-border hover:bg-muted/50">
                      <td className="py-4 px-6 font-medium text-primary">{row}</td>
                      <td className="py-4 px-6 text-center bg-accent/5 border-l border-r border-accent/10">
                        <Check className="w-6 h-6 text-accent mx-auto stroke-[3]" />
                      </td>
                      <td className="py-4 px-6 text-center">
                        {i === 3 || i === 4 ? (
                          <span className="text-muted-foreground font-medium text-sm">{i === 3 ? "Partial" : "Limited"}</span>
                        ) : (
                          <span className="text-muted-foreground/50 font-bold">✗</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Heart className="w-12 h-12 text-secondary mx-auto fill-current" />
            </div>
            <blockquote className="text-2xl md:text-3xl font-display font-bold text-primary leading-tight mb-8">
              "Delve solved a problem nobody else could. Our retention jumped almost immediately — and for the first time, we had continuous visibility into patient data."
            </blockquote>
            <cite className="not-italic text-lg text-muted-foreground font-medium block">
              — VP, Global Clinical Operations (Top 10 Pharma)
            </cite>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-primary opacity-10"></div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h2 className="font-display font-extrabold text-4xl md:text-5xl mb-6">
            Make Your Next Study Human.
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Automation gives speed. Empathy delivers results. Ready to get started?
          </p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-secondary shadow-xl"
          >
            <Link to="/demo">Book a Demo</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
