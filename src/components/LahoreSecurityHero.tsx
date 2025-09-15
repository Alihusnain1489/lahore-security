import { Button } from "@/components/ui/button";
import heroImage from "@/assets/lahore-hero-main.jpg";

export const LahoreSecurityHero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-lahore-navy/90 to-lahore-navy/70"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Your Trusted Security Partner in Lahore
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Providing professional security guard services, CCTV monitoring, and corporate security solutions across Pakistan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg"
              className="bg-lahore-red hover:bg-lahore-red/90 text-white border-none text-lg px-8 py-6"
            >
              GET A FREE QUOTE
            </Button>
            <Button 
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-lahore-navy transition-all duration-300 text-lg px-8 py-6"
              variant="outline"
            >
              CONTACT US
            </Button>
          </div>
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