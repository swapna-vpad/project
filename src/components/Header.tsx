import { Menu, X, Package } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/logo.jpeg" alt="Kik Pack Logo" className="h-16 w-auto" />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              About
            </button>
            <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Products
            </button>
            <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Why Choose Us
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors font-medium">
              Contact Us
            </button>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              About
            </button>
            <button onClick={() => scrollToSection('products')} className="block w-full text-left text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Products
            </button>
            <button onClick={() => scrollToSection('features')} className="block w-full text-left text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Why Choose Us
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors font-medium">
              Contact Us
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
