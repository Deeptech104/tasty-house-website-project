
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Opening Hours', path: '/hours' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className={`font-serif font-bold text-2xl md:text-3xl ${isScrolled ? 'text-restaurant-navy' : 'text-white'}`}>
            Perth Quay
          </h1>
          <span className={`hidden md:block ml-2 text-sm italic ${isScrolled ? 'text-restaurant-orange' : 'text-restaurant-cream'}`}>
            The Tasty House
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className={`md:hidden ${isScrolled ? 'text-restaurant-navy' : 'text-white'}`}
          onClick={toggleMenu}
        >
          <Menu size={24} />
        </Button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium transition-colors hover:text-restaurant-orange ${
                isScrolled ? 'text-restaurant-navy' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="bg-restaurant-orange hover:bg-restaurant-darkOrange">
            <a href="tel:+441786475000">Order Now</a>
          </Button>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 animate-fade-in">
            <div className="container-custom flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-restaurant-navy font-medium py-2 hover:text-restaurant-orange transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild className="bg-restaurant-orange hover:bg-restaurant-darkOrange w-full mt-2">
                <a href="tel:+441786475000">Order Now</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
