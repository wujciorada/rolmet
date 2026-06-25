import { Cylinder, Gauge, Cog, Droplets, Wrench, Settings } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: Gauge,
      title: "Regeneracja pomp hydraulicznych",
      description: "Profesjonalna regeneracja pomp tłoczkowych. Przywracamy pełną sprawność i wydajność.",
    },
    {
      icon: Cylinder,
      title: "Naprawa siłowników",
      description: "Kompleksowa naprawa i regeneracja siłowników hydraulicznych wszystkich typów i rozmiarów. Wymiana uszczelnień, tłoczysk i cylindrów.",
    },
     {
      icon: Settings,
      title: "Diagnostyka układów",
      description: "Nowoczesna diagnostyka komputerowa układów hydraulicznych. Wykrywanie usterek i optymalizacja pracy.",
    },
    {
      icon: Cylinder,
      title: "Regeneracja silników hydraulicznych",
      description: "Profesjonalna naprawa silników hydraulicznych jedno i dwu biegowych.",
    },
    {
      icon: Wrench,
      title: "Sprzedaż części",
      description: "Posiadamy duży asortyment części zamiennych do pomp oraz silników hydraulicznych.",
    },
	   {
      icon: Cog,
      title: "Usługi tokarskie, frezarskie i szlifierskie",
      description: "Precyzyjna obróbka metalu i elementów hydraulicznych, głównie części stosowanych w hydraulice siłowe.",
    },
  ];

  return (
    <section id="services" className="section-padding bg-background relative">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-navy" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-2">
            Nasze usługi
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Kompleksowa <span className="text-gradient">obsługa hydrauliki</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Oferujemy pełen zakres usług związanych z regeneracją i naprawą układów hydraulicznych. 
            Każde zlecenie realizujemy z najwyższą starannością.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-card-gradient border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer shadow-card"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="font-display text-xl text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
