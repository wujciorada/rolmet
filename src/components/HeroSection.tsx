import { ArrowRight, Wrench, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-hydraulics.jpg";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/zdjecia/rolmetfotogpt2.webp"
          alt="Regeneracja hydrauliki" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-50 bg-hero opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-transparent" />
      </div>
	
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
	  <div className="flex justify-center mb-6">
		<img src="/zdjecia/rollogo.png" alt="Rolmet logo" className="w-64 md:w-96 object-contain"/>
		</div>
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-medium">Ponad 20 lat doświadczenia</span>
			
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Profesjonalna{" "}
            <span className="text-gradient">Regeneracja</span>{" "}
            Hydrauliki Siłowej
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Specjalizujemy się w regeneracji pomp, silniki hydraulicznych oraz siłowników. Zajmujemy się sprzedażą, obsługą różnych układów hydraulicznych oraz prowadzimy doradztwo techniczne w ich zakresie.
            Oferujemy kompleksowe usługi dla przemysłu, leśnictwa, rolnictwa i budownictwa. 
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button 
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-button text-lg px-8"
            >
              Kontakt
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#services")}
              className="border-steel text-foreground hover:bg-muted text-lg px-8"
            >
              Nasze usługi
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <Wrench className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Fachowa obsługa</p>
                <p className="text-sm text-muted-foreground">Wykwalifikowany zespół</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Gwarancja jakości</p>
                <p className="text-sm text-muted-foreground">Na wszystkie usługi</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Szybka realizacja</p>
                <p className="text-sm text-muted-foreground">Terminowe wykonanie</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
