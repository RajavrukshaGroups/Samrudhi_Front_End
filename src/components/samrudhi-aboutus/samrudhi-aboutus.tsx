import { Link } from "react-router-dom";
import { Button } from "../../components/samrudhi-aboutus/button.t";

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="mb-4 text-5xl font-bold text-primary">Welcome to Samrudhi</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Shaping inspired living through visionary developments and bespoke real estate solutions.
        </p>
        <Link to="/about-us">
          <Button className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
            Learn About Us
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
