import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Video, MessageSquare } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Demo = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
    country: "",
    interests: [] as string[],
    studyNeeds: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demo Request Received",
      description: "We'll contact you within 24 hours to schedule your personalized demo.",
    });
  };

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Schedule a Live Demo</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how our platform simplifies hybrid and decentralized studies
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Left Column - Form */}
              <div>
                <Card>
                  <CardContent className="pt-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            required
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            required
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Work Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">Company *</Label>
                        <Input
                          id="company"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="jobTitle">Job Title *</Label>
                        <Input
                          id="jobTitle"
                          required
                          value={formData.jobTitle}
                          onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="country">Country / Region *</Label>
                        <Input
                          id="country"
                          required
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        />
                      </div>

                      <div className="space-y-3">
                        <Label>Areas of Interest</Label>
                        <div className="space-y-2">
                          {["eCOA", "Wearables", "ePRO", "Other"].map((interest) => (
                            <div key={interest} className="flex items-center space-x-2">
                              <Checkbox
                                id={interest}
                                checked={formData.interests.includes(interest)}
                                onCheckedChange={() => handleInterestToggle(interest)}
                              />
                              <Label htmlFor={interest} className="font-normal cursor-pointer">
                                {interest}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="studyNeeds">Describe your study needs</Label>
                        <Textarea
                          id="studyNeeds"
                          rows={4}
                          value={formData.studyNeeds}
                          onChange={(e) => setFormData({ ...formData, studyNeeds: e.target.value })}
                          placeholder="Tell us about your upcoming trials..."
                        />
                      </div>

                      <Button type="submit" variant="hero" size="lg" className="w-full">
                        Request Demo
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        By submitting this form, you agree to our privacy policy and terms of service.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Benefits */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">What You'll See in Your Demo</h2>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Video className="text-primary" size={24} />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">View eCOA workflows in action</h3>
                        <p className="text-muted-foreground text-sm">
                          See how our intuitive interface simplifies data collection for patients and sites
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                          <Users className="text-accent" size={24} />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Explore patient engagement flows</h3>
                        <p className="text-muted-foreground text-sm">
                          Discover tools that keep participants connected and compliant throughout the trial
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                          <CheckCircle className="text-success" size={24} />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Learn how wearable data integrates</h3>
                        <p className="text-muted-foreground text-sm">
                          See real-time data capture from connected devices in a unified dashboard
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <MessageSquare className="text-primary" size={24} />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Ask questions about your specific needs</h3>
                        <p className="text-muted-foreground text-sm">
                          Get personalized answers from our clinical trial technology experts
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Card className="bg-muted/50">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-3">What to Expect</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Meet directly with Delve Health experts for a tailored 30-minute walkthrough and Q&A session. No
                      sales pressure—just real solutions for your clinical trial challenges.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle size={16} className="text-success flex-shrink-0" />
                      <span>Personalized demo based on your study needs</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-3">Join Leading Organizations</h3>
                    <p className="text-muted-foreground text-sm">
                      Pharma, biotech, and CRO leaders trust Delve Health to accelerate enrollment, improve data
                      quality, and enhance patient experiences across decentralized trials.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Demo;
