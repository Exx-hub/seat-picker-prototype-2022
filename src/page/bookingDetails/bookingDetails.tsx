import React, { useState } from "react";
import { Layout, Image, Input, Button, Form } from "antd";
import "./bookingDetails.css";
import { useLocation, useNavigate } from "react-router-dom";
import senior from "../../assets/images/senior-citizen.png";
import available from "../../assets/images/emptySeat.png";
import selected from "../../assets/images/selected.png";
import booked from "../../assets/images/bookedSeat.png";
import ConfirmModal from "../../components/modal/confirmModal";

import SeatMapRegAC from "../../components/Seatmap/SeatMapRegAC";
import SeatMapNewNormal from "../../components/Seatmap/SeatMapNewNormal";
import SeatMapPremier from "../../components/Seatmap/SeatMapPremier";
import { FixMeLater } from "../../types/interfaces";
import { bookingSuccessful } from "../../utility";

const { Content } = Layout;

function BookingDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  // console.log(location);
  const tripDetails = location.state;
  // console.log(tripDetails);

  // selected seats array filled by clicking seats in seatmap component and passed to api for booking
  // along with passenger details, fare, and contact details
  const [selectedSeats, setSelectedSeats] = useState([]);
  // console.log(selectedSeats);

  // from api get seats already taken
  const [seatsTaken] = useState(["6", "7"]);
  const [seatsTaken1] = useState(["6", "7", "13", "23", "24", "33", "34"]);

  // from api get seats reserved for senior
  const [seniorSeats] = useState(["1", "2", "3", "4"]);
  const [seniorSeatsA] = useState(["1", "2", "3"]);

  const [farePerSeat] = useState(633);

  const [contactDetails, setContactDetails] = useState({
    email: "",
    mobileNumber: "",
  });

  // console.log(contactDetails);

  const [passengerDetails, setPassengerDetails] = useState({
    passenger1: "",
    passenger2: "",
    passenger3: "",
    passenger4: "",
    passenger5: "",
  });

  // console.log(passengerDetails);

  // confirm modal state
  const [summaryVisible, setSummaryVisible] = useState(false);
  // passengerArray with name and seat no
  const [passengerArray, setPassengerArray] = useState<FixMeLater>([]);
  // console.log(passengerArray);

  // toggles confirm modal, passes passenger list as array with name and seat number.
  const goToConfirm = () => {
    const passengerArray = Object.values(passengerDetails);

    const arr = selectedSeats.map((e, i) => {
      return {
        seat: e,
        passenger: passengerArray[i],
        key: i,
      };
    });

    // console.log(arr);
    setPassengerArray(arr);
    setSummaryVisible(true);
  };

  // passenger name change
  const passengerNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPassengerDetails({
      ...passengerDetails,
      [name]: value,
    });
  };

  // book seat after confirm modal
  const bookSeat = () => {
    // let data = [selectedSeats, contactDetails, Object.values(passengerDetails)]; // or passenger array?

    let data = {
      passengerName: Object.values(passengerDetails),
      seats: selectedSeats,
      contactDetails,
      tripDetails,
    };

    //but when sending in api it really is an object so i think this is not needed...

    console.log(data);
    // setSummaryVisible(false);

    // try catch
    // if success
    navigate("/");
    bookingSuccessful();

    // if failed
    // bookingFailed();
  };

  const seatMapSelect = (busType: string) => {
    switch (busType) {
      case "Reg_AC":
        return (
          <SeatMapRegAC
            selectedSeats={selectedSeats}
            setSelectedSeats={setSelectedSeats}
            seatsTaken={seatsTaken}
            seniorSeats={seniorSeats}
          />
        );
      case "Premier":
        return (
          <SeatMapPremier
            selectedSeats={selectedSeats}
            setSelectedSeats={setSelectedSeats}
            seatsTaken={seatsTaken1}
            seniorSeats={seniorSeats}
          />
        );
      case "New_Normal":
        return (
          <SeatMapNewNormal
            selectedSeats={selectedSeats}
            setSelectedSeats={setSelectedSeats}
            seatsTaken={seatsTaken}
            seniorSeats={seniorSeatsA}
          />
        );
      default:
        return;
    }
  };

  return (
    <Layout>
      <Content className="booking-details-container">
        <div className="booking-details-left">
          <div className="legend">
            <div>
              <Image src={senior} alt="" preview={false} />
              Senior
            </div>
            <div>
              <Image src={booked} alt="" preview={false} />
              Seat Taken
            </div>
            <div>
              <Image src={available} alt="" preview={false} />
              Available
            </div>
            <div>
              <Image src={selected} alt="" preview={false} />
              Selected
            </div>
          </div>
          <div className="seat-map">
            {seatMapSelect(tripDetails.selectedBus)}
          </div>
        </div>
        <div className="booking-details-right">
          <div className="trip-info">
            <h2>Trip Info:</h2>
            <div>
              <span>Trip ID:</span> {tripDetails.tripId}
            </div>
            <div>
              <span>Start Station: </span> {tripDetails.startStation}
            </div>
            <div>
              <span>End Station:</span> {tripDetails.endStation}
            </div>
            <div>
              <span>Travel Date: </span> {tripDetails.startDate}
            </div>
            <div>
              <span>Selected Bus: </span> {tripDetails.selectedBus}
            </div>
            <div>
              <span>Seats Left: </span> {tripDetails.seatsLeft}
            </div>
          </div>
          <div className="ticket-info">
            <h2>Booking Info:</h2>
            <div>
              <span>Fare per Seat: </span> ₱{farePerSeat.toFixed(2)}
            </div>
            <div>
              <span>Selected Seats:</span>{" "}
              {selectedSeats.length > 0
                ? selectedSeats.map((seat, i) => (
                    <span key={i} className="selected-seats">
                      {seat} &nbsp;
                    </span>
                  ))
                : "Select a seat"}
            </div>
            <div>
              <span>No. of Tickets: </span> {selectedSeats.length}
            </div>
            <div>
              <span>Total Fare: </span> ₱{" "}
              {(farePerSeat * selectedSeats.length).toFixed(2)}
            </div>
          </div>
          <Form onFinish={goToConfirm}>
            <div className="contact-details">
              <h2>Contact Details:</h2>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "email is required!",
                  },
                ]}
              >
                <Input
                  name="email"
                  placeholder="Customer's Email Address"
                  value={contactDetails.email}
                  onChange={(e) =>
                    setContactDetails({
                      ...contactDetails,
                      email: e.target.value,
                    })
                  }
                />
              </Form.Item>

              <Form.Item
                name="mobileNumber"
                rules={[
                  { required: true, message: "Mobile Number is required!" },
                ]}
              >
                <Input
                  placeholder="Customer's Mobile Number"
                  value={contactDetails.mobileNumber}
                  onChange={(e) =>
                    setContactDetails({
                      ...contactDetails,
                      mobileNumber: e.target.value,
                    })
                  }
                />
              </Form.Item>
            </div>
            <div className="passenger-details">
              <h2>Passenger Details:</h2>

              <Form.Item
                name="passenger1"
                rules={[
                  {
                    required: true,
                    message: "Please enter name of passenger!",
                  },
                ]}
              >
                <Input
                  placeholder="Passenger 1 Full Name"
                  name="passenger1"
                  value={passengerDetails.passenger1}
                  onChange={passengerNameChange}
                />
              </Form.Item>
              {selectedSeats.length > 1 && (
                <Form.Item
                  name="passenger2"
                  rules={[
                    {
                      required: true,
                      message: "Please enter name of passenger!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Passenger 2 Full Name"
                    name="passenger2"
                    value={passengerDetails.passenger2}
                    onChange={passengerNameChange}
                  />
                </Form.Item>
              )}
              {selectedSeats.length > 2 && (
                <Form.Item
                  name="passenger3"
                  rules={[
                    {
                      required: true,
                      message: "Please enter name of passenger!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Passenger 3 Full Name"
                    name="passenger3"
                    value={passengerDetails.passenger3}
                    onChange={passengerNameChange}
                  />
                </Form.Item>
              )}
              {selectedSeats.length > 3 && (
                <Form.Item
                  name="passenger4"
                  rules={[
                    {
                      required: true,
                      message: "Please enter name of passenger!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Passenger 4 Full Name"
                    name="passenger4"
                    value={passengerDetails.passenger4}
                    onChange={passengerNameChange}
                  />
                </Form.Item>
              )}
              {selectedSeats.length > 4 && (
                <Form.Item
                  name="passenger5"
                  rules={[
                    {
                      required: true,
                      message: "Please enter name of passenger!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Passenger 5 Full Name"
                    name="passenger5"
                    value={passengerDetails.passenger5}
                    onChange={passengerNameChange}
                  />
                </Form.Item>
              )}
              <button
                className={
                  selectedSeats.length < 1 ? "button-disabled" : "book-button"
                }
                type="submit"
              >
                Book
              </button>
            </div>
          </Form>
        </div>
      </Content>

      <ConfirmModal
        visible={summaryVisible}
        handleCancel={() => setSummaryVisible(false)}
        handleOk={bookSeat}
        tripDetails={tripDetails}
        passengerDetails={passengerArray}
        farePerSeat={farePerSeat}
        noOfSeats={selectedSeats.length}
      />
    </Layout>
  );
}

export default BookingDetails;
