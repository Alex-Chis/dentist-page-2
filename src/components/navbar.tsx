
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full border-b py-3 bg-white">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-dentist-purple h-6 w-6"></div>
          <span className="font-bold text-xl">Dentist</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-dentist-text hover:text-dentist-purple font-medium">
            Home
          </Link>
          <Link to="/about" className="text-dentist-text hover:text-dentist-purple font-medium">
            About
          </Link>
          <Link to="/services" className="text-dentist-text hover:text-dentist-purple font-medium">
            Services
          </Link>
          <Link to="/testimonials" className="text-dentist-text hover:text-dentist-purple font-medium">
            Testimonials
          </Link>
          <Link to="/blog" className="text-dentist-text hover:text-dentist-purple font-medium">
            Blog
          </Link>
          <Link to="/contact" className="text-dentist-text hover:text-dentist-purple font-medium">
            Contact
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center gap-2">
            <PhoneCall size={16} className="text-dentist-purple" />
            <span className="text-sm font-medium">+1 234 567 8900</span>
          </div>
          <Button className="bg-dentist-purple hover:bg-dentist-purple/90">
            Book
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
