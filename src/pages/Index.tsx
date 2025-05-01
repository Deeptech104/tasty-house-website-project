
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Phone, MapPin, Utensils } from 'lucide-react';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';

const Index = () => {
  useEffect(() => {
    // Simple animation for elements as they scroll into view
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
          element.classList.add('animated');
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    // Initial check on page load
    animateOnScroll();
    
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative container-custom h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 opacity-0 animate-fade-in" style={{animationDelay: '0.3s'}}>
            Perth Quay
          </h1>
          <p className="text-xl md:text-2xl italic mb-6 opacity-0 animate-fade-in" style={{animationDelay: '0.6s'}}>
            The Tasty House
          </p>
          <p className="max-w-2xl text-lg mb-8 opacity-0 animate-fade-in" style={{animationDelay: '0.9s'}}>
            Traditional British Cuisine with a Modern Twist at Stirling's Favorite Fast Food Restaurant
          </p>
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" style={{animationDelay: '1.2s'}}>
            <Button asChild size="lg" className="bg-restaurant-orange hover:bg-restaurant-darkOrange text-white">
              <a href="tel:+441786475000">Order Now</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-restaurant-navy">
              <Link to="/menu">View Our Menu</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Quick Info Section */}
      <section className="py-8 bg-restaurant-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center p-4 animate-on-scroll">
              <Clock size={32} className="text-restaurant-orange mr-4" />
              <div>
                <h3 className="font-bold text-lg">Opening Hours</h3>
                <p>1:00 PM - 11:00 PM <br/>(7 days a week)</p>
              </div>
            </div>
            <div className="flex items-center p-4 animate-on-scroll">
              <Phone size={32} className="text-restaurant-orange mr-4" />
              <div>
                <h3 className="font-bold text-lg">Call Us</h3>
                <p><a href="tel:+441786475000" className="hover:text-restaurant-orange transition-colors">01786 475 000</a></p>
              </div>
            </div>
            <div className="flex items-center p-4 animate-on-scroll">
              <MapPin size={32} className="text-restaurant-orange mr-4" />
              <div>
                <h3 className="font-bold text-lg">Find Us</h3>
                <p>Stirling Arcade, Stirling, <br/>FK8 1AX</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt="Restaurant interior" 
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            <div className="animate-on-scroll">
              <h2 className="section-title">Our Story</h2>
              <p className="mb-6">
                Welcome to Perth Quay, where passion for food meets exceptional service. Since February 2015, 
                we've been serving the Stirling community with delicious fast food inspired by traditional 
                British cuisine but with our own modern twist.
              </p>
              <p className="mb-6">
                At Perth Quay, we're passionate about serving up delicious, authentic British dishes with 
                a contemporary flair. From hearty pub classics to elegant fine dining options, our menu is 
                designed to showcase the best of British cuisine.
              </p>
              <Button asChild className="flex items-center">
                <Link to="/about">
                  Learn More <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Menu Highlights */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="section-title">Menu Highlights</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Explore some of our most popular dishes, crafted with care using the finest ingredients
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Menu Item 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105 animate-on-scroll">
              <img 
                src="https://images.unsplash.com/photo-1534656471056-c44f76cc0e4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt="Fish and Chips" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Fish and Chips</h3>
                <p className="text-gray-600 mb-4">
                  Fresh cod in a crispy batter, served with chunky chips and mushy peas.
                </p>
              </div>
            </div>
            
            {/* Menu Item 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105 animate-on-scroll">
              <img 
                src="https://images.unsplash.com/photo-1642134111420-326ec5a51938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt="Roast Beef" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Sunday Roast</h3>
                <p className="text-gray-600 mb-4">
                  Slow-cooked roast beef with roasted vegetables, Yorkshire pudding, and gravy.
                </p>
              </div>
            </div>
            
            {/* Menu Item 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105 animate-on-scroll">
              <img 
                src="https://images.unsplash.com/photo-1608039790184-c435f1449555?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                alt="English Breakfast" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Full English Breakfast</h3>
                <p className="text-gray-600 mb-4">
                  Bacon, sausages, eggs, grilled tomatoes, mushrooms, and toast.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12 animate-on-scroll">
            <Button asChild size="lg">
              <Link to="/menu" className="flex items-center justify-center">
                View Full Menu <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="section-title">Our Services</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              At Perth Quay, we offer a variety of services to enhance your dining experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Services list */}
            {[
              { 
                title: "Online Ordering", 
                description: "Order your favorite dishes from the comfort of your own home." 
              },
              { 
                title: "Takeout", 
                description: "Enjoy our delicious food from the comfort of your own home." 
              },
              { 
                title: "Delivery", 
                description: "Get our dishes delivered right to your doorstep." 
              },
              { 
                title: "Catering", 
                description: "Let us handle the food for your next event or party." 
              },
              { 
                title: "Private Dining", 
                description: "Book our private room for special occasions or events." 
              },
              { 
                title: "Dietary Options", 
                description: "We offer gluten-free, vegan, and other dietary options." 
              },
            ].map((service, index) => (
              <div 
                key={index} 
                className="p-6 bg-white rounded-lg shadow-md border border-gray-100 animate-on-scroll"
              >
                <div className="mb-4 text-restaurant-orange">
                  <Utensils size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')] bg-cover bg-center py-20">
        <div className="absolute inset-0 bg-restaurant-navy bg-opacity-80"></div>
        <div className="relative container-custom text-center text-white">
          <div className="max-w-3xl mx-auto animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience Our Food?</h2>
            <p className="text-lg mb-8">
              Order now or visit us at Perth Quay, Stirling Arcade. We're open every day from 1:00 PM to 11:00 PM.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-restaurant-orange hover:bg-restaurant-darkOrange text-white">
                <a href="tel:+441786475000">Order by Phone</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-restaurant-navy">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default Index;
