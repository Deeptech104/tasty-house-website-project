
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import PageHeader from '@/components/Layout/PageHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactPage = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Show success message
    toast.success("Message sent successfully! We'll get back to you soon.");
    
    // Reset the form
    reset();
    setIsSubmitting(false);
  };
  
  return (
    <>
      <Navbar />
      
      <PageHeader 
        title="Contact Us" 
        background="bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')]"
      >
        <p className="text-lg">Get in touch with us at Perth Quay</p>
      </PageHeader>
      
      {/* Contact Info & Form Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="section-title">Get In Touch</h2>
              <p className="mb-8 text-lg">
                Have questions, suggestions, or want to make a reservation? We'd love to hear from you. 
                Reach out to us using any of the methods below or fill out our contact form.
              </p>
              
              <div className="space-y-8">
                <div className="flex">
                  <div className="mr-4 bg-restaurant-cream rounded-lg p-3 text-restaurant-orange flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Our Location</h3>
                    <p>
                      Stirling Arcade, Stirling, <br />
                      Stirlingshire, FK8 1AX <br />
                      United Kingdom
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 bg-restaurant-cream rounded-lg p-3 text-restaurant-orange flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Phone Number</h3>
                    <p>
                      <a href="tel:+441786475000" className="text-restaurant-navy hover:text-restaurant-orange transition-colors">
                        01786 475 000
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 bg-restaurant-cream rounded-lg p-3 text-restaurant-orange flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Email Address</h3>
                    <p>
                      <a href="mailto:contact@perthquay.com" className="text-restaurant-navy hover:text-restaurant-orange transition-colors">
                        contact@perthquay.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 bg-restaurant-cream rounded-lg p-3 text-restaurant-orange flex-shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Opening Hours</h3>
                    <p>
                      Every day: <br />
                      1:00 PM - 11:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 font-medium">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        {...register("name", { required: "Name is required" })}
                        placeholder="John Doe"
                        className={errors.name ? "border-red-500" : ""}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email", { 
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          }
                        })}
                        placeholder="john@example.com"
                        className={errors.email ? "border-red-500" : ""}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block mb-2 font-medium">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        {...register("subject", { required: "Subject is required" })}
                        placeholder="Reservation Inquiry"
                        className={errors.subject ? "border-red-500" : ""}
                      />
                      {errors.subject && (
                        <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block mb-2 font-medium">
                        Your Message
                      </label>
                      <Textarea
                        id="message"
                        {...register("message", { required: "Message is required" })}
                        rows={5}
                        placeholder="Tell us what you need..."
                        className={errors.message ? "border-red-500" : ""}
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                      )}
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-restaurant-orange hover:bg-restaurant-darkOrange" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="pb-16">
        <div className="container-custom">
          <h2 className="section-title text-center mb-8">Find Us</h2>
          <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2222.668492289802!2d-3.942778283975835!3d56.119532169190034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48886918feb728af%3A0xa3737bed88d6344c!2sStirling%20Arcade!5e0!3m2!1sen!2suk!4v1651278012345!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Perth Quay Location"
            ></iframe>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default ContactPage;
