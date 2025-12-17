import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Demo from "./pages/Demo";
import SolutionECOA from "./pages/SolutionECOA";
import Concierge from "./pages/Concierge";
import Pharma from "./pages/Pharma";
import MedTech from "./pages/MedTech";
import Biotech from "./pages/Biotech";
import Sites from "./pages/Sites";
import About from "./pages/About";
import WhitePapers from "./pages/WhitePapers";
import CaseStudies from "./pages/CaseStudies";
import Resources from "./pages/Resources";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<Demo />} />

          {/* Solutions */}
          <Route path="/solutions/ecoa" element={<SolutionECOA />} />
          <Route path="/solutions/wearables" element={<SolutionECOA />} />
          <Route path="/solutions/concierge" element={<Concierge />} />
          <Route path="/solutions/econsent" element={<SolutionECOA />} />
          <Route path="/solutions/analytics" element={<SolutionECOA />} />
          <Route path="/solutions/provisioning" element={<SolutionECOA />} />
          <Route path="/solutions/biomarkers" element={<SolutionECOA />} />

          {/* Industries */}
          <Route path="/pharma" element={<Pharma />} />
          <Route path="/medtech" element={<MedTech />} />
          <Route path="/biotech" element={<Biotech />} />
          <Route path="/sites" element={<Sites />} />

          {/* Company */}
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<About />} />
          <Route path="/contact" element={<Demo />} />

          {/* Resources */}
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/white-papers" element={<WhitePapers />} />
          <Route path="/resources/case-studies" element={<CaseStudies />} />
          <Route path="/resources/blog" element={<Resources />} />

          {/* Legal */}
          <Route path="/privacy" element={<NotFound />} />
          <Route path="/terms" element={<NotFound />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
