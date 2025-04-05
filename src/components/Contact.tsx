
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Let's Work Together</h2>
          <p className="text-xl text-gray-600">
            Have a project in mind or want to discuss a potential collaboration? Get in touch!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <Input id="name" placeholder="Your Name" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <Input id="email" type="email" placeholder="your@email.com" required />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <Input id="subject" placeholder="Project Inquiry" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <Textarea id="message" placeholder="Tell me about your project..." rows={5} required />
              </div>
              <Button type="submit" className="w-full bg-gray-900 hover:bg-gray-800">
                <Send className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <p className="text-gray-600 mb-8">
                Feel free to reach out if you have any questions about my work or if you're interested in collaborating on a project.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-gray-800 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800">Email</h4>
                    <a href="mailto:hello@yourportfolio.com" className="text-gray-600 hover:text-gray-900 transition-colors">
                      hello@yourportfolio.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-gray-800 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800">Phone</h4>
                    <a href="tel:+11234567890" className="text-gray-600 hover:text-gray-900 transition-colors">
                      +1 (123) 456-7890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-gray-800 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800">Location</h4>
                    <p className="text-gray-600">
                      San Francisco, CA
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10 lg:mt-0 bg-gray-900 rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">Available for Freelance Projects</h4>
              <p className="mb-6 text-gray-300">
                I'm currently available for freelance projects and open to both short and long-term collaborations.
              </p>
              <Button variant="outline" className="border-white hover:bg-white hover:text-gray-900">
                View My Schedule
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
