// pages/booking/index.tsx
import React from "react";
import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import CancellationPolicy from "@/components/booking/CancellationPolicy";

const BookingPage: React.FC = () => {
  // Example booking details, replace with real data if needed
  const bookingDetails = {
    propertyName: "Sample Property",
    price: 120,
    nights: 2,
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Booking Page</h1>
      <BookingForm />
      <OrderSummary bookingDetails={bookingDetails} />
      <CancellationPolicy />
    </div>
  );
};

export default BookingPage;
