import { Trees, Shield, Droplets, Wind, Zap, Play, Building2, Lightbulb, Landmark, Waves, Sparkles, Home } from "lucide-react";
import { Card } from "../Aarica-landingPage/ui/card.tsx";

const facilities = [
  { icon: Home, title: "Gated Community", delay: "0s" },
  { icon: Shield, title: "24/7 Security", delay: "0.1s" },
  { icon: Landmark, title: "30ft Entrance Road", delay: "0.2s" },
  { icon: Droplets, title: "Rainwater Harvesting", delay: "0.3s" },
  { icon: Building2, title: "Blacktop Road", delay: "0.4s" },
  { icon: Waves, title: "STP Sewage", delay: "0.5s" },
  { icon: Wind, title: "Underground Drainage", delay: "0.6s" },
  { icon: Trees, title: "Park And Tree", delay: "0.7s" },
  { icon: Play, title: "Kids Play Area", delay: "0.8s" },
  { icon: Zap, title: "Underground Electricity", delay: "0.9s" },
  { icon: Lightbulb, title: "Street Light", delay: "1s" },
  { icon: Sparkles, title: "100% Vaastu", delay: "1.1s" },
];

const Facilities = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Premium <span className="text-primary">Facilities</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover world-class amenities designed for modern living
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {facilities.map((facility, index) => (
            <Card
              key={index}
              className="p-6 flex flex-col items-center justify-center text-center bg-card hover:bg-secondary border border-border rounded-2xl card-hover animate-scale-in"
              style={{ animationDelay: facility.delay }}
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-primary/10">
                <facility.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-sm sm:text-base">
                {facility.title}
              </h3>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
