
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import PageHeader from '@/components/Layout/PageHeader';

const MenuPage = () => {
  return (
    <>
      <Navbar />
      
      <PageHeader 
        title="Our Menu" 
        background="bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')]"
      >
        <p className="text-lg">Coming soon - Our delicious menu offerings</p>
      </PageHeader>
      
      {/* Empty Menu Coming Soon Section */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl text-center">
          <div className="bg-white p-12 rounded-lg shadow-lg border border-gray-100">
            <h2 className="section-title mb-6">Menu Coming Soon</h2>
            <p className="text-xl mb-8">
              We're currently updating our online menu with our latest dishes and prices.
            </p>
            <p className="mb-6">
              Please check back soon to see our full menu offerings including our traditional British dishes
              with a modern twist, from hearty pub classics to elegant fine dining options.
            </p>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Sample food" 
                className="w-full max-w-md rounded-lg shadow-md my-8"
              />
            </div>
            <p className="text-lg font-medium text-restaurant-orange mt-8">
              To learn about today's specials, please call us at 01786 475 000
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default MenuPage;
