import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative py-16 md:py-24 bg-pattern">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 text-dentist-text">
              A dentistry clinic <br />
              you can trust
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Modern technology and compassionate care ensure your dental
              experience is comfortable and effective. We'll help make your
              smile.
            </p>
            <Button
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className="bg-dentist-purple hover:bg-dentist-purple/90 font-medium text-white py-6 px-8"
            >
              Book an appointment
            </Button>
          </div>
          <div className="relative h-[350px] md:h-[450px]">
            <img
              src="/lovable-uploads/bfa48eef-678b-46b7-8b96-f907501c9f73.png"
              alt="Dental clinic chair"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
