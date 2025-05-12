
import { Button } from "@/components/ui/button";
import { ImplantIcon, ToothbrushIcon, ToothIcon } from "./icons";

const ServicesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our team of dentists can help with<br />a variety of dental services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            icon={<ToothIcon className="h-12 w-12 text-dentist-purple" />}
            title="General treatments"
            description="Regular checkups, cleanings, fillings and preventative care to keep your smile healthy."
          />
          
          <ServiceCard
            icon={<ToothbrushIcon className="h-12 w-12 text-dentist-purple" />}
            title="Dental Surgery"
            description="Extractions, root canals, and other procedures performed with precision and care."
          />
          
          <ServiceCard
            icon={<ImplantIcon className="h-12 w-12 text-dentist-purple" />}
            title="Dental Implants"
            description="Permanent tooth replacement solutions that look and function like natural teeth."
          />
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-dentist-lightGray p-8 rounded-xl text-center">
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <Button variant="outline" className="border-dentist-purple text-dentist-purple hover:bg-dentist-purple hover:text-white">
        Learn more
      </Button>
    </div>
  );
};

export default ServicesSection;
