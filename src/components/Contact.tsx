
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 bg-market-muted">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Get in Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have questions about our products or services? Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-market-dark p-6 rounded-lg border border-market-border">
            <h3 className="text-xl font-semibold mb-4 text-white">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-market-accent/20 flex items-center justify-center text-market-accent">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:winstoneonyango76@gmail.com" className="text-white hover:text-market-accent">
                    winstoneonyango76@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-market-accent/20 flex items-center justify-center text-market-accent">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a href="tel:+254791002178" className="text-white hover:text-market-accent">
                    +254 791 002 178
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-medium mb-3 text-white">Business Hours</h4>
              <div className="space-y-2 text-gray-400">
                <p>Monday - Friday: 9am - 6pm</p>
                <p>Saturday: 10am - 4pm</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
          
          <div className="bg-market-dark p-6 rounded-lg border border-market-border">
            <h3 className="text-xl font-semibold mb-4 text-white">Send us a Message</h3>
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-gray-400">Your Name</label>
                  <Input id="name" placeholder="John Doe" className="bg-market-muted border-market-border" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-gray-400">Your Email</label>
                  <Input id="email" placeholder="john@example.com" className="bg-market-muted border-market-border" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm text-gray-400">Subject</label>
                <Input id="subject" placeholder="How can we help?" className="bg-market-muted border-market-border" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-gray-400">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Your message here..." 
                  className="bg-market-muted border-market-border min-h-[120px]" 
                />
              </div>
              <Button className="w-full bg-market-accent hover:bg-market-accentHover">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
