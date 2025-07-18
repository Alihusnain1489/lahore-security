import { Button } from "@/components/ui/button";
import heroImage from "@/assets/securitas-hero-bg.jpg";

export const SecuritasHero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-securitas-navy/90 to-securitas-navy/70"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            See a different world.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Over 90 years of protecting the things that matter, we've seen more than most. 
            Let us help you customize your security guarding solution to meet your needs.
          </p>
          <Button 
            size="lg"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-securitas-navy transition-all duration-300 text-lg px-8 py-6"
            variant="outline"
          >
            LEARN MORE ABOUT US
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};