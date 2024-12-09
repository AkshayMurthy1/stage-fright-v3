import Link from 'next/link';
import { Mail, Phone, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-red-600/20 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-red-600 mb-4">Stage Fright</h3>
            <p className="text-sm">
              Breaking boundaries and creating unforgettable experiences through music.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-red-500 transition-colors">About Us</Link></li>
              <li><Link href="/tour" className="hover:text-red-500 transition-colors">Tour Dates</Link></li>
              <li><Link href="/merch" className="hover:text-red-500 transition-colors">Merchandise</Link></li>
              <li><Link href="/contact" className="hover:text-red-500 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>booking@stagefright.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-red-500 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Stage Fright. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;