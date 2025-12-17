import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  ChevronDown,
  Smartphone,
  Watch,
  Users,
  FileCheck,
  BarChart3,
  Box,
  Activity,
  Building2,
  FileText,
  BookOpen,
  Rss,
  Info,
  Briefcase,
  Mail,
  Pill,
  Stethoscope,
  Dna
} from "lucide-react";
import { cn } from "@/lib/utils";
import logoMain from "@/assets/delve-logo-main.png";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const solutions = [
    {
      title: "eCOA & ePRO",
      href: "/solutions/ecoa",
      description: "Electronic Clinical Outcome Assessments",
      icon: Smartphone,
    },
    {
      title: "Wearables & Digital Endpoints",
      href: "/solutions/wearables",
      description: "Real-time data from connected devices",
      icon: Watch,
    },
    {
      title: "Concierge-as-a-Service™",
      href: "/solutions/concierge",
      description: "Human support for patients & sites",
      icon: Users,
    },
    {
      title: "eConsent",
      href: "/solutions/econsent",
      description: "Digital informed consent solutions",
      icon: FileCheck,
    },
    {
      title: "Real-Time Analytics",
      href: "/solutions/analytics",
      description: "Live dashboards and study visibility",
      icon: BarChart3,
    },
    {
      title: "Device Provisioning",
      href: "/solutions/provisioning",
      description: "End-to-end device logistics",
      icon: Box,
    },
    {
      title: "Digital Biomarkers",
      href: "/solutions/biomarkers",
      description: "Validated wearable endpoints",
      icon: Activity,
    },
    {
      title: "Site Enablement",
      href: "/sites",
      description: "Streamlined site workflows",
      icon: Building2,
    },
  ];

  const industries = [
    {
      title: "Pharma",
      href: "/pharma",
      description: "Global drug trial solutions",
      icon: Pill,
    },
    {
      title: "MedTech",
      href: "/medtech",
      description: "Post-market data & device trials",
      icon: Stethoscope,
    },
    {
      title: "Biotech",
      href: "/biotech",
      description: "Fit-for-purpose digital endpoints",
      icon: Dna,
    },
    {
      title: "Research Sites",
      href: "/sites",
      description: "Burden-reducing workflows",
      icon: Building2,
    },
  ];

  const resources = [
    {
      title: "Case Studies",
      href: "/resources/case-studies",
      description: "Success stories from partners",
      icon: BookOpen,
    },
    {
      title: "White Papers",
      href: "/resources/white-papers",
      description: "Research and insights",
      icon: FileText,
    },
    {
      title: "Blog",
      href: "/resources/blog",
      description: "Latest industry news",
      icon: Rss,
    },
  ];

  const company = [
    {
      title: "About Us",
      href: "/about",
      description: "Our mission and values",
      icon: Info,
    },
    {
      title: "Careers",
      href: "/careers",
      description: "Join our team",
      icon: Briefcase,
    },
    {
      title: "Contact",
      href: "/contact",
      description: "Get in touch",
      icon: Mail,
    },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center group">
            <img src={logoMain} alt="Delve Health" className="h-10 w-auto transition-transform group-hover:scale-105" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 relative">
            <div className="flex items-center space-x-1">
              {/* Solutions Menu Item */}
              <div
                className="relative h-20 flex items-center"
                onMouseEnter={() => setActiveDropdown("solutions")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-primary hover:text-accent transition-colors">
                  Solutions
                  <ChevronDown size={16} className={cn("transition-transform duration-200", activeDropdown === "solutions" && "rotate-180")} />
                </button>
                {activeDropdown === "solutions" && (
                  <div className="absolute top-full left-0 w-80 bg-white shadow-xl rounded-b-xl border-t-4 border-accent border-l border-r border-b border-gray-100 p-3 z-50">
                    {solutions.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                          <item.icon className="w-4 h-4 text-accent" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-primary">{item.title}</div>
                          <p className="text-xs text-muted-foreground">{item.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Industries Menu Item */}
              <div
                className="relative h-20 flex items-center"
                onMouseEnter={() => setActiveDropdown("industries")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-primary hover:text-accent transition-colors">
                  Industries
                  <ChevronDown size={16} className={cn("transition-transform duration-200", activeDropdown === "industries" && "rotate-180")} />
                </button>
                {activeDropdown === "industries" && (
                  <div className="absolute top-full left-0 w-72 bg-white shadow-xl rounded-b-xl border-t-4 border-accent border-l border-r border-b border-gray-100 p-3 z-50">
                    {industries.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                          <item.icon className="w-4 h-4 text-accent" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-primary">{item.title}</div>
                          <p className="text-xs text-muted-foreground">{item.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Resources Menu Item */}
              <div
                className="relative h-20 flex items-center"
                onMouseEnter={() => setActiveDropdown("resources")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-primary hover:text-accent transition-colors">
                  Resources
                  <ChevronDown size={16} className={cn("transition-transform duration-200", activeDropdown === "resources" && "rotate-180")} />
                </button>
                {activeDropdown === "resources" && (
                  <div className="absolute top-full left-0 w-72 bg-white shadow-xl rounded-b-xl border-t-4 border-accent border-l border-r border-b border-gray-100 p-3 z-50">
                    {resources.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
                          <item.icon className="w-4 h-4 text-secondary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-primary">{item.title}</div>
                          <p className="text-xs text-muted-foreground">{item.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Company Menu Item */}
              <div
                className="relative h-20 flex items-center"
                onMouseEnter={() => setActiveDropdown("company")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-primary hover:text-accent transition-colors">
                  Company
                  <ChevronDown size={16} className={cn("transition-transform duration-200", activeDropdown === "company" && "rotate-180")} />
                </button>
                {activeDropdown === "company" && (
                  <div className="absolute top-full left-0 w-72 bg-white shadow-xl rounded-b-xl border-t-4 border-accent border-l border-r border-b border-gray-100 p-3 z-50">
                    {company.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                          <item.icon className="w-4 h-4 text-accent" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-primary">{item.title}</div>
                          <p className="text-xs text-muted-foreground">{item.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <Button asChild className="bg-secondary hover:bg-secondary/90 text-white shadow-lg shadow-secondary/20">
              <Link to="/demo">Book a Demo</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 absolute w-full h-[calc(100vh-5rem)] overflow-y-auto pb-20">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {/* Solutions */}
            <div className="py-4 border-b border-gray-50">
              <div className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-3">Solutions</div>
              {solutions.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block py-3 text-sm font-medium text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            {/* Industries */}
            <div className="py-4 border-b border-gray-50">
              <div className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-3">Industries</div>
              {industries.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block py-3 text-sm font-medium text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            {/* Resources */}
            <div className="py-4 border-b border-gray-50">
              <div className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-3">Resources</div>
              {resources.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block py-3 text-sm font-medium text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            {/* Company */}
            <div className="py-4 border-b border-gray-50">
              <div className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-3">Company</div>
              {company.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block py-3 text-sm font-medium text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <div className="pt-6 px-3">
              <Button
                asChild
                className="w-full justify-center bg-secondary hover:bg-secondary/90 text-white"
              >
                <Link to="/demo" onClick={() => setMobileMenuOpen(false)}>
                  Book a Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
