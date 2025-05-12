
import { Button } from "@/components/ui/button";

const AppointmentBanner = () => {
  return (
    <section className="py-12 bg-dentist-purple text-white">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Schedule a virtual or presential appointment today
          </h2>
          <p className="text-white/80">
            Our friendly team is ready to help you achieve your healthiest smile
          </p>
        </div>
        
        <Button className="bg-white text-dentist-purple hover:bg-white/90 px-8">
          Book Online
        </Button>
      </div>
    </section>
  );
};

export default AppointmentBanner;
