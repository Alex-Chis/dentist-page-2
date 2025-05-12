
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const MissionSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Dentists working together"
              className="rounded-2xl w-full h-[400px] object-cover"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Our team has only one mission: Make you smile
            </h2>
            <p className="text-gray-600 mb-8">
              With years of experience and a passionate commitment to patient care, our team of dental professionals is dedicated to providing the highest quality dental services in a comfortable, welcoming environment.
            </p>
            
            <div className="flex items-center gap-4 mb-8">
              <Avatar className="h-12 w-12 border-2 border-dentist-purple">
                <AvatarImage src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" />
                <AvatarFallback>DC</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-medium">Dr. Andrew Young</h4>
                <p className="text-sm text-gray-500">Chief Dental Surgeon</p>
              </div>
            </div>
            
            <Button className="bg-dentist-purple hover:bg-dentist-purple/90">
              Meet our team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
