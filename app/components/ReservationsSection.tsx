
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

export function ReservationsSection() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("2");
  const [specialRequests, setSpecialRequests] = useState("");

  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      name, email, phone, date,
      time, guests,
      specialRequests,
    });
    alert("Reservation submitted! (Not actually sent to a server.)");
  };

  const openingHours = [
    { day: "Monday - Friday", hours: "12:00 PM - 10:00 PM" },
    { day: "Saturday", hours: "11:00 AM - 11:00 PM" },
    { day: "Sunday", hours: "11:00 AM - 9:00 PM" },
  ];

  return (
    <section id="reservations" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
          [PLACEHOLDER: Reservations Title - e.g., Book Your Table]
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 flex flex-col gap-6">
            <h3 className="text-3xl font-semibold text-primary">
              [PLACEHOLDER: Call to Action - e.g., Reserve Your Spot]
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              [PLACEHOLDER: Reservation Description - e.g., Experience the finest dining in London. Book your table in advance to secure your preferred time.]
            </p>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <h4 className="text-2xl font-semibold mb-4 text-primary">Opening Hours</h4>
              {openingHours.map((item, index) => (
                <div key={index} className="flex justify-between mb-2 text-gray-700 dark:text-gray-300">
                  <span>{item.day}</span>
                  <span>{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700">
            <form onSubmit={handleReservationSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="[PLACEHOLDER: Your Name]"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="[PLACEHOLDER: your.email@example.com]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="[PLACEHOLDER: Your Phone Number]"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="time">Time</Label>
                <Input
                  id="time"
                  type="time"
                  placeholder="[PLACEHOLDER: Select Time]"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2 col-span-1 sm:col-span-2">
                <Label htmlFor="date">Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal text-gray-700 dark:text-gray-300 dark:bg-gray-800"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent align="start" className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2 col-span-1 sm:col-span-2">
                <Label htmlFor="guests">Number of Guests</Label>
                <Input
                  id="guests"
                  type="number"
                  min="1"
                  placeholder="[PLACEHOLDER: e.g., 2]"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2 col-span-1 sm:col-span-2">
                <Label htmlFor="specialRequests">Special Requests</Label>
                <Input
                  id="specialRequests"
                  placeholder="[PLACEHOLDER: e.g., Allergies, celebration]"
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                />
              </div>
              <div className="col-span-1 sm:col-span-2 text-center">
                <Button type="submit" size="lg" className="w-full sm:w-auto px-10 py-3">
                  Book Your Table
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
