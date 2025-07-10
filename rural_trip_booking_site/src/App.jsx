
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectItem } from "@/components/ui/select";

const villages = [
  "Lambasingi",
  "Araku Valley",
  "Paderu",
  "Maredumilli",
  "Konaseema",
  "Srikakulam Coastal Belt",
  "Papi Hills"
];

const tripTypes = ["Family Vacation", "School Field Trip"];

export default function RuralTripBooking() {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6 text-green-800">
        Discover Rural Andhra Pradesh
      </h1>
      <p className="text-center text-lg mb-8">
        Explore hidden gems and plan educational field trips to Andhra's scenic villages.
      </p>

      <Card className="mb-6">
        <CardContent className="p-4 grid gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input placeholder="Your Name" />
            <Input type="email" placeholder="Email Address" />
            <Select>
              {tripTypes.map((type, idx) => (
                <SelectItem key={idx} value={type}>
                  {type}
                </SelectItem>
              ))}
            </Select>
            <Select>
              {villages.map((village, idx) => (
                <SelectItem key={idx} value={village}>
                  {village}
                </SelectItem>
              ))}
            </Select>
            <Input type="date" placeholder="Start Date" />
            <Input type="number" placeholder="Number of People/Students" />
          </div>
          <Button className="w-full bg-green-700 hover:bg-green-800">
            Book Your Trip
          </Button>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        {villages.map((village, idx) => (
          <Card key={idx} className="shadow-md">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold text-green-700 mb-2">{village}</h2>
              <p className="text-sm text-gray-600 mb-3">
                Enjoy nature, learn about rural life, and experience the local culture of {village}.
              </p>
              <Button variant="outline">Learn More</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
