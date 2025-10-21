import { Button } from "../../components/Aarica-landingPage/ui/button.tsx";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto text-center animate-fade-in-up">
        {/* <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
          Your Dream Home
          <span className="block text-primary mt-2">Awaits You</span>
        </h1> */}
        
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
          Experience luxury living in a gated community with world-class amenities 
          and prime location connectivity
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Explore Properties
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105"
          >
            Schedule a Visit
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">5 Acres</div>
            <div className="text-muted-foreground">Gated Community</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">₹3,499/-*</div>
            <div className="text-muted-foreground">Per Sq. Ft.</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">BMRDA</div>
            <div className="text-muted-foreground">Approved</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
