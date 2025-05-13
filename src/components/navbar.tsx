import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [shouldShowShadow, setShouldShowShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Adjust 50 to the scroll distance you want
        setShouldShowShadow(true);
      } else {
        setShouldShowShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`w-full border-b py-3 bg-white sticky top-0 z-50 ${
        shouldShowShadow ? "shadow-md" : ``
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-dentist-purple h-6 w-6"></div>
          <span className="font-bold text-xl">Dentist</span>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            onClick={() => scrollToSection("home")}
            to="#"
            className="text-dentist-text hover:text-dentist-purple font-medium"
          >
            Home
          </Link>
          <Link
            onClick={() => scrollToSection("about")}
            to="#"
            className="text-dentist-text hover:text-dentist-purple font-medium"
          >
            About
          </Link>
          <Link
            onClick={() => scrollToSection("services")}
            to="#"
            className="text-dentist-text hover:text-dentist-purple font-medium"
          >
            Services
          </Link>
          <Link
            onClick={() => scrollToSection("testimonials")}
            to="#"
            className="text-dentist-text hover:text-dentist-purple font-medium"
          >
            Testimonials
          </Link>
          <Link
            onClick={() => scrollToSection("blog")}
            to="#"
            className="text-dentist-text hover:text-dentist-purple font-medium"
          >
            Blog
          </Link>
          <Link
            onClick={() => scrollToSection("contact")}
            to="#"
            className="text-dentist-text hover:text-dentist-purple font-medium"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center gap-2">
            <PhoneCall size={16} className="text-dentist-purple" />
            <span className="text-sm font-medium">+1 234 567 8900</span>
          </div>
          <Button
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className="bg-dentist-purple hover:bg-dentist-purple/90"
          >
            Book
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
