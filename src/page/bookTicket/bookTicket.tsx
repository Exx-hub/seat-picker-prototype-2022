import React, { useState } from "react";
import SearchTrips from "../../components/SearchTrips";
import TripsTable from "../../components/tripsTable";
import "./bookTicket.css";

function BookTicket() {
  const [tripsVisible, setTripsVisible] = useState(false);
  return (
    <div className="book-ticket-container">
      <SearchTrips setTripsVisible={setTripsVisible} />
      <div className="dashed-line" />
      {tripsVisible ? (
        <TripsTable />
      ) : (
        <div className="no-trips">Filter to get trips</div>
      )}
    </div>
  );
}

export default BookTicket;
