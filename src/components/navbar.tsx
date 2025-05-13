import { Button } from "@/components/ui/button";
import { PhoneCall, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [shouldShowShadow, setShouldShowShadow] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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
      setIsMenuOpen(false); // Close the menu after clicking a link
    }
  };

  return (
    <div
      className={`w-full flex-col gap-3 border-b py-3 bg-white sticky top-0 z-50 ${
        shouldShowShadow ? "shadow-md" : ""
      }`}
    >
      <header>
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-dentist-purple h-6 w-6"></div>
            <span className="font-bold text-xl">Dentist</span>
          </div>

          {/* Mobile Menu Button */}
          <div className="block self-end md:hidden pr-2 ">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
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

          <div className="hidden md:flex items-center space-x-4">
            <div className="md:flex items-center gap-2">
              <PhoneCall size={16} className="text-dentist-purple" />
              <span className="text-sm font-medium">+1 234 567 8900</span>
            </div>
            <Button
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className="hidden md:block bg-dentist-purple hover:bg-dentist-purple/90"
            >
              Book
            </Button>
          </div>
        </div>
      </header>
      {/* Mobile Menu */}
      <nav className={`md:hidden w-full ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="bg-white flex-col justify-evenly text-center p-4 space-y-4">
          <Link
            onClick={() => scrollToSection("home")}
            to="#"
            className="text-dentist-text hover:text-dentist-purple font-medium block"
          >
            Home
          </Link>
          <Link
            onClick={() => scrollToSection("about")}
            to="#"
            className="text-dentist-text hover:text-dentist-purple font-medium block"
          >
            About
          </Link>
          <Link
            onClick={() => scrollToSection("services")}
            to="#"
            className="text-dentist-text hover:text-dentist-purple font-medium block"
          >
            Services
          </Link>
          <Link
            onClick={() => scrollToSection("testimonials")}
            to="#"
            className="text-dentist-text hover:text-dentist-purple font-medium block"
          >
            Testimonials
          </Link>
          <Link
            onClick={() => scrollToSection("blog")}
            to="#"
            className="text-dentist-text hover:text-dentist-purple font-medium block"
          >
            Blog
          </Link>
          <Link
            onClick={() => scrollToSection("contact")}
            to="#"
            className="text-dentist-text hover:text-dentist-purple font-medium block"
          >
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
