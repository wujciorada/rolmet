import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/supabase/client";


const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const { error } = await supabase
      .from("contacts")
      .insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
      ]);

    if (error) {
      console.error("Supabase error:", error);
      toast({
        title: "Błąd",
        description: "Nie udało się wysłać wiadomości.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Wiadomość wysłana!",
      description: "Dziękujemy za kontakt. Odpowiemy najszybciej jak to możliwe.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });

  } catch (err) {
    console.error("Catch error:", err);
    toast({
      title: "Błąd",
      description: "Wystąpił problem z wysyłką.",
      variant: "destructive",
    });
  }
};

  

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adres",
      content: "ul. Towarowa 14\n89-500 Tuchola",
    },
    {
      icon: Phone,
      title: "Telefon",
      content: "507 029 081",
    },
    {
      icon: Mail,
      title: "Email",
      content: "rolmet@onet.eu",
    },
    {
      icon: Clock,
      title: "Godziny pracy",
      content: "Pon-Pt: 7:00 - 15:00",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-background relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Kontakt
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Skontaktuj się <span className="text-gradient">z nami</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Masz pytania? Skontaktuj się z nami - odpowiadamy szybko 
            i rzeczowo na wszystkie zapytania.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-card-gradient p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground whitespace-pre-line">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
           <div className="bg-card-gradient rounded-xl border border-border overflow-hidden h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2400.0!2d17.8736886!3d53.5754497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470257aaf794ee9f%3A0x13d9fb94ea15445!2sRolmet.%20Zak%C5%82ad%20regeneracji%20i%20hydrauliki%20si%C5%82owej!5e0!3m2!1spl!2spl"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(85%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card-gradient p-8 rounded-xl border border-border shadow-card">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Masz pytania? Daj nam znać..
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Imię i nazwisko"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-muted border-border focus:border-primary"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  type="email"
                  placeholder="Adres email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-muted border-border focus:border-primary"
                />
                <Input
                  type="tel"
                  placeholder="Numer telefonu"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-muted border-border focus:border-primary"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Treść wiadomości..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-muted border-border focus:border-primary resize-none"
                />
              </div>
              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-button"
              >
                <Send className="w-5 h-5 mr-2" />
                Wyślij wiadomość
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
