
import { Card, CardContent } from "@/components/ui/card";
import { ClockIcon, ListIcon, MapPinIcon } from "@/components/icons";

const InfoCards = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InfoCard 
            icon={<MapPinIcon className="h-10 w-10 p-2 bg-dentist-lightPurple text-dentist-purple rounded-lg" />}
            title="Contact Us"
            text="123 Dental Street, NY 10001"
          />
          <InfoCard 
            icon={<ClockIcon className="h-10 w-10 p-2 bg-dentist-lightPurple text-dentist-purple rounded-lg" />}
            title="Open Hours"
            text="Mon-Fri: 9am-6pm, Sat: 9am-4pm"
          />
          <InfoCard 
            icon={<ListIcon className="h-10 w-10 p-2 bg-dentist-lightPurple text-dentist-purple rounded-lg" />}
            title="Services"
            text="General, cosmetic, emergency care"
          />
        </div>
      </div>
    </section>
  );
};

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

const InfoCard = ({ icon, title, text }: InfoCardProps) => {
  return (
    <Card className="overflow-hidden border-0 shadow-md">
      <CardContent className="p-6 flex items-start gap-4">
        {icon}
        <div>
          <h3 className="font-medium text-lg mb-1">{title}</h3>
          <p className="text-gray-500">{text}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default InfoCards;
