import { Building, School, Hospital, ShoppingBag, Plane, Train } from "lucide-react";
import { Card } from "../Aarica-landingPage/ui/card.tsx";

const developments = [
  {
    icon: Building,
    text: "10 minute from Foxconn & Tech Park – major industrial hub",
  },
  {
    icon: Building,
    text: "Close to Kwin City – fast-growing township in North Bangalore",
  },
  {
    icon: Train,
    text: "5 minute from Doddaballapur Railway Station",
  },
  {
    icon: Plane,
    text: "25 minute from Kempegowda International Airport",
  },
  {
    icon: School,
    text: "Nearby schools and colleges – Sterling School, Presidency University, NM",
  },
  {
    icon: Hospital,
    text: "Hospitals within 15 minutes – Akash Hospital, Leena Multispeciality Hospital",
  },
  {
    icon: ShoppingBag,
    text: "Close to Dmart, local markets, and malls",
  },
  {
    icon: Building,
    text: "Excellent connectivity via Bangalore–Doddaballapur–Hindupur Highway",
  },
];

const NearbyDevelopments = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/30 to-background bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Nearby <span className="text-primary">Developments</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strategically located with excellent connectivity to key areas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {developments.map((development, index) => (
            <Card
              key={index}
              className="p-6 flex items-start gap-4 bg-card border border-border rounded-2xl card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-primary/10">
                <development.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-foreground leading-relaxed">
                {development.text}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NearbyDevelopments;
