
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import PageHeader from '@/components/Layout/PageHeader';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      
      <PageHeader 
        title="About Us" 
        background="bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')]"
      >
        <p className="text-lg">Learn more about Perth Quay - The Tasty House</p>
      </PageHeader>
      
      {/* Our Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Story</h2>
              <p className="mb-4">
                Welcome to Perth Quay, where food, passion, and community come together. Our story began in February 2015 
                with a simple idea: to share delicious, homemade-style cuisine inspired by traditional British flavors but 
                with our own modern twist.
              </p>
              <p className="mb-4">
                Founded by Mr. Adrian Venoin, Perth Quay quickly became a beloved establishment in the Stirling community. 
                Our commitment to quality ingredients, exceptional service, and a warm, inviting atmosphere has made us a 
                favorite dining destination for locals and visitors alike.
              </p>
              <p>
                From our humble beginnings to where we are today, our passion for food and dedication to our customers 
                has remained unchanged. We continue to evolve and improve, always staying true to our core values of quality, 
                community, and hospitality.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Restaurant interior" 
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Vision Section */}
      <section className="section-padding bg-restaurant-cream">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">Our Vision</h2>
            <p className="mb-6">
              We aim to create a warm and inviting space where everyone feels at home. Our chefs are dedicated to crafting dishes 
              that not only taste amazing but also use only the freshest ingredients, sourced locally whenever possible.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-restaurant-navy">Quality</h3>
                <p>We're committed to serving only the best, using fresh ingredients and traditional methods.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-restaurant-navy">Community</h3>
                <p>We believe in supporting local businesses and events, giving back to our community.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3 text-restaurant-navy">Hospitality</h3>
                <p>We strive to make every guest feel welcome and valued from the moment they arrive.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* Owner */}
            <div className="text-center">
              <div className="mb-4 relative overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Adrian Venoin" 
                  className="w-full h-[300px] object-cover transition-transform hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold">Adrian Venoin</h3>
              <p className="text-restaurant-orange">Founder & Owner</p>
            </div>
            
            {/* Head Chef */}
            <div className="text-center">
              <div className="mb-4 relative overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80" 
                  alt="Head Chef" 
                  className="w-full h-[300px] object-cover transition-transform hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold">James Wilson</h3>
              <p className="text-restaurant-orange">Head Chef</p>
            </div>
            
            {/* Manager */}
            <div className="text-center">
              <div className="mb-4 relative overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80" 
                  alt="Manager" 
                  className="w-full h-[300px] object-cover transition-transform hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold">Sarah Campbell</h3>
              <p className="text-restaurant-orange">Restaurant Manager</p>
            </div>
            
            {/* Service Staff */}
            <div className="text-center">
              <div className="mb-4 relative overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1937&q=80" 
                  alt="Service Team" 
                  className="w-full h-[300px] object-cover transition-transform hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold">Our Service Team</h3>
              <p className="text-restaurant-orange">Friendly & Professional</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Awards Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Awards & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md text-center">
              <div className="text-restaurant-orange text-5xl font-serif mb-4">★</div>
              <h3 className="text-xl font-bold mb-2">Best Fast Food Restaurant</h3>
              <p className="text-gray-600">Stirling Food Awards 2022</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md text-center">
              <div className="text-restaurant-orange text-5xl font-serif mb-4">★</div>
              <h3 className="text-xl font-bold mb-2">Excellence in Service</h3>
              <p className="text-gray-600">Local Business Awards 2021</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md text-center">
              <div className="text-restaurant-orange text-5xl font-serif mb-4">★</div>
              <h3 className="text-xl font-bold mb-2">Customer Choice Award</h3>
              <p className="text-gray-600">Stirlingshire Dining Guide 2020</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default AboutPage;
