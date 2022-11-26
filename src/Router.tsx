import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import BookTicket from "./page/bookTicket";
import BookingDetails from "./page/bookingDetails/bookingDetails";

import TransactionHistory from "./page/transactionHistory";

const AppNavigator = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<BookTicket />} />
        <Route path="booking-details/:tripId" element={<BookingDetails />} />
        <Route path="transactions" element={<TransactionHistory />} />
      </Route>
    </Routes>
  );
};

export default AppNavigator;
