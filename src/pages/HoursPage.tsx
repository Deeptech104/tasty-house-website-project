
import React from 'react';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import PageHeader from '@/components/Layout/PageHeader';
import { Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HoursPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      
      <PageHeader 
        title="Opening Hours" 
        background="bg-[url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')]"
      >
        <p className="text-lg">Find out when you can visit us at Perth Quay</p>
      </PageHeader>
      
      {/* Hours Section */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-block p-4 rounded-full bg-restaurant-cream text-restaurant-orange mb-4">
              <Clock size={48} />
            </div>
            <h2 className="section-title">Our Opening Hours</h2>
            <p className="text-lg text-gray-600 mb-8">
              Perth Quay is open 7 days a week to serve you our delicious food
            </p>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
              <div className="bg-restaurant-navy text-white p-6">
                <h3 className="text-2xl font-bold">We're Open Every Day</h3>
                <p className="text-xl mt-2">1:00 PM - 11:00 PM</p>
              </div>
              <div className="p-8">
                <ul className="space-y-4 text-lg">
                  <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="font-medium">Monday</span>
                    <span className="text-restaurant-orange font-bold">11:00 AM - 10:00 PM</span>
                  </li>
                  <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="font-medium">Tuesday</span>
                    <span className="text-restaurant-orange font-bold">11:00 AM - 10:00 PM</span>
                  </li>
                  <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="font-medium">Wednesday</span>
                    <span className="text-restaurant-orange font-bold">11:00 AM - 10:00 PM</span>
                  </li>
                  <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="font-medium">Thursday</span>
                    <span className="text-restaurant-orange font-bold">11:00 AM - 10:00 PM</span>
                  </li>
                  <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="font-medium">Friday</span>
                    <span className="text-restaurant-orange font-bold">11:00 AM - 11:00 PM</span>
                  </li>
                  <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="font-medium">Saturday</span>
                    <span className="text-restaurant-orange font-bold">11:00 AM - 11:00 PM</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="font-medium">Sunday</span>
                    <span className="text-restaurant-orange font-bold">10:00 AM - 9:00 PM</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Special Events Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Special Events & Services</h2>
            <p className="text-lg text-gray-600">
              Join us for these special events throughout the week
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">Quiz Night</h3>
              <p className="text-gray-600 mb-2">Every Tuesday</p>
              <p className="mb-4">Test your knowledge and win prizes on our weekly quiz night.</p>
              <p className="text-restaurant-orange font-medium">7:30 PM - 9:30 PM</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">Live Music</h3>
              <p className="text-gray-600 mb-2">Every Friday</p>
              <p className="mb-4">Enjoy live music performances from local musicians.</p>
              <p className="text-restaurant-orange font-medium">8:00 PM - 10:00 PM</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">Sunday Roast Special</h3>
              <p className="text-gray-600 mb-2">Every Sunday</p>
              <p className="mb-4">Join us for a traditional Sunday roast with all the trimmings.</p>
              <p className="text-restaurant-orange font-medium">1:00 PM - 8:00 PM</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Holiday Notice */}
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <div className="bg-restaurant-cream rounded-lg shadow-md p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Holiday Hours</h3>
            <p className="mb-6">
              Please note that our opening hours may vary during public holidays and special occasions. 
              Follow us on social media or call us for the most up-to-date information.
            </p>
            <Button asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Order Options */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center py-20">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative container-custom text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            You can order for delivery or takeaway during our opening hours. We deliver to all areas within a 3-mile radius of our restaurant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-restaurant-orange hover:bg-restaurant-darkOrange">
              <a href="tel:+441786475000">Call to Order</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-restaurant-navy">
              <Link to="/menu">View Our Menu</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </React.Fragment>
  );
};

export default HoursPage;
