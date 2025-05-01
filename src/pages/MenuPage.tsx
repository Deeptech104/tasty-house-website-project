
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import PageHeader from '@/components/Layout/PageHeader';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const MenuPage = () => {
  const handleOrderNow = () => {
    // Open WhatsApp with the restaurant's number
    window.open('https://wa.me/441786475000', '_blank');
  };

  return (
    <>
      <Navbar />
      
      <PageHeader 
        title="Our Menu" 
        background="bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')]"
      >
        <p className="text-lg">Discover our selection of delicious British cuisine with a modern twist</p>
      </PageHeader>
      
      {/* Menu Section */}
      <section className="section-padding">
        <div className="container-custom max-w-6xl">
          {/* Introduction */}
          <div className="text-center mb-16">
            <h2 className="section-title">Our Delicious Offerings</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Perth Quay, we pride ourselves on serving traditional British cuisine with a modern twist.
              All of our dishes are prepared using fresh, locally-sourced ingredients to ensure the highest quality.
            </p>
          </div>
          
          {/* Breakfast Section */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="h-0.5 bg-restaurant-orange w-12"></div>
              <h3 className="text-3xl font-serif font-bold px-4">Breakfast</h3>
              <div className="h-0.5 bg-restaurant-orange w-12"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-[url('https://images.unsplash.com/photo-1533920379810-6bedac9e31f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">Full English Breakfast</h4>
                  <p className="text-gray-600 mb-4">Bacon, sausages, eggs, grilled tomatoes, mushrooms, and toast.</p>
                  <p className="text-restaurant-orange font-bold">£12.95</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-[url('https://images.unsplash.com/photo-1608039829572-78524f79c4c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80')] bg-cover bg-center"></div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">Eggs Benedict</h4>
                  <p className="text-gray-600 mb-4">Poached eggs on toasted English muffins with smoked salmon and hollandaise sauce.</p>
                  <p className="text-restaurant-orange font-bold">£11.50</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-[url('https://images.unsplash.com/photo-1603046891744-1f76eb10aec3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')] bg-cover bg-center"></div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">Avocado Toast</h4>
                  <p className="text-gray-600 mb-4">Toasted sourdough with mashed avocado, cherry tomatoes, and feta cheese.</p>
                  <p className="text-restaurant-orange font-bold">£9.95</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Lunch Section */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="h-0.5 bg-restaurant-orange w-12"></div>
              <h3 className="text-3xl font-serif font-bold px-4">Lunch</h3>
              <div className="h-0.5 bg-restaurant-orange w-12"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-[url('https://images.unsplash.com/photo-1576777647209-e8733d7b851d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')] bg-cover bg-center"></div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">Fish and Chips</h4>
                  <p className="text-gray-600 mb-4">Fresh cod in a crispy batter, served with chunky chips and mushy peas.</p>
                  <p className="text-restaurant-orange font-bold">£14.95</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-[url('https://images.unsplash.com/photo-1505253716511-3992280490a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')] bg-cover bg-center"></div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">Ploughman's Lunch</h4>
                  <p className="text-gray-600 mb-4">A selection of artisanal cheeses, bread, pickles, and chutneys.</p>
                  <p className="text-restaurant-orange font-bold">£13.50</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-[url('https://images.unsplash.com/photo-1626078292945-19c5f02a6a15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')] bg-cover bg-center"></div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">Chicken and Mushroom Pie</h4>
                  <p className="text-gray-600 mb-4">A hearty pie filled with chicken, mushrooms, and creamy sauce.</p>
                  <p className="text-restaurant-orange font-bold">£13.95</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Dinner Section */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="h-0.5 bg-restaurant-orange w-12"></div>
              <h3 className="text-3xl font-serif font-bold px-4">Dinner</h3>
              <div className="h-0.5 bg-restaurant-orange w-12"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-[url('https://images.unsplash.com/photo-1546964124-0cce460f38ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">Roast Beef</h4>
                  <p className="text-gray-600 mb-4">Slow-cooked roast beef with roasted vegetables, Yorkshire pudding, and gravy.</p>
                  <p className="text-restaurant-orange font-bold">£18.95</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-[url('https://images.unsplash.com/photo-1448043552756-e747b7a2b2b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2062&q=80')] bg-cover bg-center"></div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">Pan-Seared Salmon</h4>
                  <p className="text-gray-600 mb-4">Fresh salmon fillet, pan-seared and served with lemon butter and herbs.</p>
                  <p className="text-restaurant-orange font-bold">£17.50</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-[url('https://images.unsplash.com/photo-1498579809087-ef1d1aec3233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">Lamb Shank</h4>
                  <p className="text-gray-600 mb-4">Braised lamb shank with rosemary and garlic, served with roasted potatoes and carrots.</p>
                  <p className="text-restaurant-orange font-bold">£19.95</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Desserts Section */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="h-0.5 bg-restaurant-orange w-12"></div>
              <h3 className="text-3xl font-serif font-bold px-4">Desserts</h3>
              <div className="h-0.5 bg-restaurant-orange w-12"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-[url('https://images.unsplash.com/photo-1586788680434-30d324b2d46f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2151&q=80')] bg-cover bg-center"></div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">Sticky Toffee Pudding</h4>
                  <p className="text-gray-600 mb-4">Warm sponge cake with sticky toffee sauce and vanilla ice cream.</p>
                  <p className="text-restaurant-orange font-bold">£7.95</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-[url('https://images.unsplash.com/photo-1596078841242-12f73dc697c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">Trifle</h4>
                  <p className="text-gray-600 mb-4">Layers of sponge cake, fruit, custard, and whipped cream.</p>
                  <p className="text-restaurant-orange font-bold">£6.95</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-[url('https://images.unsplash.com/photo-1551879400-111a9087cd86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">Eccles Cakes</h4>
                  <p className="text-gray-600 mb-4">Flaky pastry cakes filled with currants and topped with a glaze made of icing sugar.</p>
                  <p className="text-restaurant-orange font-bold">£5.95</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Drinks Section */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="h-0.5 bg-restaurant-orange w-12"></div>
              <h3 className="text-3xl font-serif font-bold px-4">Drinks</h3>
              <div className="h-0.5 bg-restaurant-orange w-12"></div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h4 className="text-2xl font-bold mb-4">Beers</h4>
              <ul className="space-y-4">
                <li className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <div>
                    <span className="font-bold">London Pride</span>
                    <p className="text-gray-600">A classic English bitter.</p>
                  </div>
                  <span className="text-restaurant-orange font-bold">£4.95</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <div>
                    <span className="font-bold">Newcastle Brown Ale</span>
                    <p className="text-gray-600">A rich, malty ale from the north-east.</p>
                  </div>
                  <span className="text-restaurant-orange font-bold">£5.25</span>
                </li>
                <li className="flex justify-between items-center">
                  <div>
                    <span className="font-bold">Bombardier</span>
                    <p className="text-gray-600">A hoppy, golden ale from Bedfordshire.</p>
                  </div>
                  <span className="text-restaurant-orange font-bold">£4.75</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Events Section */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="h-0.5 bg-restaurant-orange w-12"></div>
              <h3 className="text-3xl font-serif font-bold px-4">Events</h3>
              <div className="h-0.5 bg-restaurant-orange w-12"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-bold mb-2">Live Music</h4>
                <p className="text-gray-600 mb-4">Join us for live music performances from local musicians, every Friday evening.</p>
                <p className="text-restaurant-orange font-medium">Every Friday, 8:00 PM - 10:00 PM</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-bold mb-2">Quiz Night</h4>
                <p className="text-gray-600 mb-4">Test your knowledge and win prizes on our weekly quiz night, every Wednesday.</p>
                <p className="text-restaurant-orange font-medium">Every Wednesday, 7:30 PM - 9:30 PM</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-bold mb-2">Sunday Roast</h4>
                <p className="text-gray-600 mb-4">Join us for a traditional Sunday roast with all the trimmings, every Sunday.</p>
                <p className="text-restaurant-orange font-medium">Every Sunday, 1:00 PM - 8:00 PM</p>
              </div>
            </div>
          </div>
          
          {/* Opening Hours */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="h-0.5 bg-restaurant-orange w-12"></div>
              <h3 className="text-3xl font-serif font-bold px-4">Opening Hours</h3>
              <div className="h-0.5 bg-restaurant-orange w-12"></div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 max-w-xl mx-auto">
              <ul className="space-y-4">
                <li className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="font-medium">Monday to Thursday</span>
                  <span className="text-restaurant-orange font-bold">11:00 AM - 10:00 PM</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="font-medium">Friday to Saturday</span>
                  <span className="text-restaurant-orange font-bold">11:00 AM - 11:00 PM</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-medium">Sunday</span>
                  <span className="text-restaurant-orange font-bold">10:00 AM - 9:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Order Now Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Ready to place your order?</h3>
            <Button 
              onClick={handleOrderNow} 
              size="lg" 
              className="bg-restaurant-orange hover:bg-restaurant-darkOrange text-white px-8 py-6 text-lg"
            >
              <Phone className="mr-2" />
              Order Now via WhatsApp
            </Button>
            <p className="mt-4 text-gray-600">
              You can also call us directly at <a href="tel:+441786475000" className="text-restaurant-navy font-medium hover:text-restaurant-orange transition-colors">01786 475 000</a>
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default MenuPage;
