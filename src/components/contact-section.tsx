
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ContactSection = () => {
  return (
    <section className="py-16 bg-dentist-lightGray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Get in touch to book your first appointment
            </h2>
            <p className="text-gray-600 mb-8">
              We're here to answer any questions and help you take the first step toward a healthier smile. Fill out the form and we'll get back to you as soon as possible.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-dentist-purple flex items-center justify-center text-white">
                  📞
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone number</p>
                  <p className="font-medium">+1 (234) 567-8900</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-dentist-purple flex items-center justify-center text-white">
                  ✉️
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email address</p>
                  <p className="font-medium">contact@dentalclinic.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                  <Input id="firstName" placeholder="Your first name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                  <Input id="lastName" placeholder="Your last name" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                <Input id="phone" placeholder="(123) 456-7890" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  placeholder="Tell us about your dental needs..."
                />
              </div>
              
              <Button type="submit" className="w-full bg-dentist-purple hover:bg-dentist-purple/90">
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
