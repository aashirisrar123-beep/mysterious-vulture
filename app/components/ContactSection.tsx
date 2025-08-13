
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Contact form submitted! (Not actually sent to a server.)");
  };

  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-850">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
          [PLACEHOLDER: Contact Us Title - e.g., Get In Touch]
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 flex flex-col gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <h4 className="text-2xl font-semibold mb-4 text-primary flex items-center">
                <MapPin className="h-6 w-6 mr-3" /> Location
              </h4>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                [PLACEHOLDER: Restaurant Address - e.g., 123 Regent Street, London, W1B 5TA]
              </p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline mt-2 inline-block"
              >
                [PLACEHOLDER: View Map Link - e.g., Get Directions]
              </a>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <h4 className="text-2xl font-semibold mb-4 text-primary flex items-center">
                <Phone className="h-6 w-6 mr-3" /> Call Us
              </h4>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                [PLACEHOLDER: Phone Number - e.g., +44 20 7123 4567]
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <h4 className="text-2xl font-semibold mb-4 text-primary flex items-center">
                <Mail className="h-6 w-6 mr-3" /> Email Us
              </h4>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                [PLACEHOLDER: Email Address - e.g., info@london-eatery.com]
              </p>
            </div>
          </div>
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="contactName">Name</Label>
                  <Input id="contactName" placeholder="[PLACEHOLDER: Your Name]" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contactEmail">Email</Label>
                  <Input id="contactEmail" type="email" placeholder="[PLACEHOLDER: your.email@example.com]" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="[PLACEHOLDER: Subject of your message]" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" rows={6} placeholder="[PLACEHOLDER: Your message here...]" required />
              </div>
              <div className="text-center">
                <Button type="submit" size="lg" className="px-10 py-3">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
