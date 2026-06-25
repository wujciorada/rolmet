import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  const features = [
    "Profesjonalny sprzęt diagnostyczny",
    "Najlepsze części zamienne",
    "Doświadczony zespół specjalistów",
    "Konkurencyjne ceny usług",
    "Szybki czas realizacji",
    "Gwarancja na wykonane prace",
  ];


  return (
    <section id="about" className="section-padding bg-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-steel rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Content */}
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-2">
              O naszej firmie
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
              Jesteśmy liderem w regeneracji{" "}
              <span className="text-gradient">hydrauliki siłowej</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-2 leading-relaxed">
              Firma <strong className="text-foreground">ROLMET</strong> to wiodący specjalista w dziedzinie regeneracji 
              i naprawy układów hydraulicznych. Od ponad dwóch dekad świadczymy kompleksowe 
              usługi dla przemysłu, rolnictwa, leśnictwa oraz budownictwa.
            </p>
            <p className="text-muted-foreground mb-3 leading-relaxed">
              Nasz zespół doświadczonych inżynierów i techników wykorzystuje nowoczesny sprzęt 
              diagnostyczny oraz najlepsze części zamienne, zapewniając najwyższą jakość 
              wykonywanych usług.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-1">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
