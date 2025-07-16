import { Button } from "@/components/ui/button";




export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="hero-gradient text-white pt-20 pb-20 animate-scroll-fade-in relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[75vh]">
          <div className="space-y-6 lg:space-y-8 animate-slide-up order-2 lg:order-1">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white drop-shadow-lg">
                Soluzioni di Intelligenza Artificiale e Automazioni per Aziende
              </h1>
              <p className="text-xl md:text-2xl text-white leading-relaxed font-medium drop-shadow-md">
                Mi chiamo Lorenzo Algeri e implemento soluzioni di{" "}
                <strong className="text-blue-ncs">
                  Intelligenza Artificiale
                </strong>{" "}
                e automazioni per aziende che vogliono trasformare il loro business e farlo scalare velocemente.
              </p>
              <p className="text-lg text-white/90 leading-relaxed drop-shadow-sm">
                Realizzo chatbot personalizzati, automazioni intelligenti, siti
                web e applicazioni per trasformare attività ripetitive in
                processi efficienti e ottimizzati.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection("contatti")}
                className="btn-primary will-change-transform"
              >
                Contattami per una consulenza AI
              </button>
              <button
                onClick={() => scrollToSection("servizi-ai")}
                className="glass-card px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 will-change-transform"
              >
                Esplora i servizi di automazione
              </button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end animate-scale-up order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-ncs/15 to-transparent rounded-full blur-lg"></div>
              <picture>
                <source srcSet="/hero-image.webp" type="image/webp" />
                <img
                  src="/hero-image.png"
                  alt="Lorenzo Algeri – esperto in soluzioni di Intelligenza Artificiale e automazioni per aziende"
                  className="profile-image relative rounded-full w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover object-top border-4 border-blue-ncs/30"
                  style={{ objectPosition: 'center top' }}
                  loading="eager"
                />
              </picture>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
