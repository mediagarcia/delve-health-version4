import { Link } from "react-router-dom";
import { Linkedin, Twitter, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoWhite from "@/assets/delve-logo-white.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <img src={logoWhite} alt="Delve Health" className="h-12 w-auto" />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              We make clinical studies virtually unstoppable. Our unique, collaborative approach to patient-centered hybrid and decentralized studies delivers real results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-accent">Solutions</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><Link to="/solutions/ecoa" className="hover:text-white transition-colors">eCOA & ePRO</Link></li>
              <li><Link to="/solutions/wearables" className="hover:text-white transition-colors">Wearables & Endpoints</Link></li>
              <li><Link to="/solutions/concierge" className="hover:text-white transition-colors">Concierge-as-a-Service</Link></li>
              <li><Link to="/solutions/analytics" className="hover:text-white transition-colors">Real-Time Analytics</Link></li>
              <li><Link to="/sites" className="hover:text-white transition-colors">Site Enablement</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-accent">Company</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/resources/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/resources/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-accent">Get in Touch</h4>
            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <p className="text-sm text-gray-300 mb-4">
                Ready to optimize your next clinical trial?
              </p>
              <Button asChild className="w-full bg-secondary hover:bg-secondary/90 text-white">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; 2025 Delve Health. All rights reserved.
          </p>
          <div className="flex space-x-8 text-sm text-gray-400">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
