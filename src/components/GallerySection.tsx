import { useState } from "react";
import { X } from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const images: GalleryImage[] = [
    { id: 1, src: "/zdjecia/silnik1.jpeg", alt: "silnik hydrauliczny", category: "silnik" },
    { id: 2, src: "/zdjecia/czesci.jpeg", alt: "części", category: "części" },
    { id: 3, src: "/zdjecia/rozebrane3.webp", alt: "pompa części", category: "pompa części" },
    { id: 4, src: "/zdjecia/pompa1.jpeg", alt: "pompa", category: "pompa hydrauliczna" },
    { id: 5, src: "/zdjecia/doladowcza.jpeg", alt: "doładowcza", category: "doładowcze" },
    { id: 6, src: "/zdjecia/pompa2.jpeg", alt: "pompa", category: "pompa hydrauliczna" },
  ];

  return (
    <section id="gallery" className="section-padding bg-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Galeria
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nasze <span className="text-gradient">realizacje</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Zobacz przykłady naszych prac. Każdy projekt realizujemy z pasją i precyzją, 
            dbając o najwyższą jakość wykonania.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="relative group cursor-pointer overflow-hidden rounded-xl aspect-[4/3]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 bg-primary/90 rounded-full text-sm text-primary-foreground font-medium">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-navy-deep/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage.src.replace("w=600&h=400", "w=1200&h=800")}
            alt={selectedImage.alt}
            className="max-w-full max-h-[80vh] rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
