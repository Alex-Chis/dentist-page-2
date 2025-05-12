
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white pt-16 border-t">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-bold text-lg mb-4">Dentist</h4>
            <p className="text-gray-600 mb-6">
              Professional dental care with a gentle touch. Your smile is our priority.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-8 w-8 bg-dentist-purple rounded-full flex items-center justify-center text-white">
                <span className="sr-only">Facebook</span>
                f
              </a>
              <a href="#" className="h-8 w-8 bg-dentist-purple rounded-full flex items-center justify-center text-white">
                <span className="sr-only">Twitter</span>
                t
              </a>
              <a href="#" className="h-8 w-8 bg-dentist-purple rounded-full flex items-center justify-center text-white">
                <span className="sr-only">Instagram</span>
                i
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-dentist-purple">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-dentist-purple">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-600 hover:text-dentist-purple">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-dentist-purple">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services/general" className="text-gray-600 hover:text-dentist-purple">
                  General Dentistry
                </Link>
              </li>
              <li>
                <Link to="/services/cosmetic" className="text-gray-600 hover:text-dentist-purple">
                  Cosmetic Dentistry
                </Link>
              </li>
              <li>
                <Link to="/services/implants" className="text-gray-600 hover:text-dentist-purple">
                  Dental Implants
                </Link>
              </li>
              <li>
                <Link to="/services/emergency" className="text-gray-600 hover:text-dentist-purple">
                  Emergency Care
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-600">
                123 Dental Street<br />
                New York, NY 10001
              </li>
              <li className="text-gray-600">
                +1 (234) 567-8900
              </li>
              <li className="text-gray-600">
                contact@dentalclinic.com
              </li>
              <li className="text-gray-600">
                Mon-Fri: 9am-6pm<br />
                Sat: 9am-4pm
              </li>
            </ul>
          </div>
        </div>
        
        <div className="py-6 border-t text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Dental Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
