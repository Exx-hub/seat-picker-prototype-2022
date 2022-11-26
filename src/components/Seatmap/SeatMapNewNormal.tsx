// @ts-nocheck
import "./SeatmapDefault.css";

import { Image } from "antd";

import senior from "../../assets/images/senior-citizen.png";
import available from "../../assets/images/emptySeat.png";
import selected from "../../assets/images/selected.png";
import booked from "../../assets/images/bookedSeat.png";

// import available from "../../assets/images/seat.png";

function SeatMapNewNormal(props) {
  const { selectedSeats, seatsTaken, setSelectedSeats, seniorSeats } = props;
  // console.log(selectedSeats.length < 5);
  // console.log(selectedSeats.length);

  const selectSeat = (seatNumber) => {
    let filtered;
    if (
      !selectedSeats.includes(seatNumber) &&
      !seatsTaken.includes(seatNumber) &&
      !seniorSeats.includes(seatNumber) &&
      selectedSeats.length < 5
    ) {
      setSelectedSeats([...selectedSeats, seatNumber].sort((a, b) => a - b));
    } else if (selectedSeats.includes(seatNumber)) {
      filtered = selectedSeats.filter((num) => num !== seatNumber);
      setSelectedSeats(filtered);
    }
  };

  const getClassName = (seatNumber) => {
    return seatsTaken.includes(seatNumber) || seniorSeats.includes(seatNumber)
      ? "seat-div no-cursor"
      : "seat-div";
  };

  const getSeatImage = (seatNumber) => {
    return seniorSeats.includes(seatNumber)
      ? senior
      : seatsTaken.includes(seatNumber)
      ? booked
      : selectedSeats.includes(seatNumber)
      ? selected
      : available;
  };

  return (
    <>
      <div className="front-label">Front</div>

      {/* 1-3  */}
      <div className="three-seat-row">
        <div className={getClassName("1")}>
          <Image src={getSeatImage("1")} alt="" preview={false} />
          <div
            className="seat-number"
            onClick={(e) => selectSeat(e.target.textContent)}
          >
            1
          </div>
        </div>
        <div className={getClassName("2")}>
          <Image src={getSeatImage("2")} alt="" preview={false} />
          <div
            className="seat-number"
            onClick={(e) => selectSeat(e.target.textContent)}
          >
            2
          </div>
        </div>

        <div className={getClassName("3")}>
          <Image src={getSeatImage("3")} alt="" preview={false} />
          <div
            className="seat-number"
            onClick={(e) => selectSeat(e.target.textContent)}
          >
            3
          </div>
        </div>
      </div>

      {/* 4-6 */}
      <div className="three-seat-row">
        <div className={getClassName("4")}>
          <Image src={getSeatImage("4")} alt="" preview={false} />
          <div
            className="seat-number"
            onClick={(e) => selectSeat(e.target.textContent)}
          >
            4
          </div>
        </div>
        <div className={getClassName("5")}>
          <Image src={getSeatImage("5")} alt="" preview={false} />
          <div
            className="seat-number"
            onClick={(e) => selectSeat(e.target.textContent)}
          >
            5
          </div>
        </div>

        <div className={getClassName("6")}>
          <Image src={getSeatImage("6")} alt="" preview={false} />
          <div
            className="seat-number"
            onClick={(e) => selectSeat(e.target.textContent)}
          >
            6
          </div>
        </div>
      </div>

      {/* 7 8 9 */}
      <div className="three-seat-row">
        <div className={getClassName("7")}>
          <Image src={getSeatImage("7")} alt="" preview={false} />
          <div
            className="seat-number"
            onClick={(e) => selectSeat(e.target.textContent)}
          >
            7
          </div>
        </div>
        <div className={getClassName("8")}>
          <Image src={getSeatImage("8")} alt="" preview={false} />
          <div
            className="seat-number"
            onClick={(e) => selectSeat(e.target.textContent)}
          >
            8
          </div>
        </div>

        <div className={getClassName("9")}>
          <Image src={getSeatImage("9")} alt="" preview={false} />
          <div
            className="seat-number"
            onClick={(e) => selectSeat(e.target.textContent)}
          >
            9
          </div>
        </div>
      </div>

      {/* 10 11 12 */}
      <div className="three-seat-row">
        <div className={getClassName("10")}>
          <Image src={getSeatImage("10")} alt="" preview={false} />
          <div
            className="seat-number"
            onClick={(e) => selectSeat(e.target.textContent)}
          >
            10
          </div>
        </div>
        <div className={getClassName("11")}>
          <Image src={getSeatImage("11")} alt="" preview={false} />
          <div
            className="seat-number"
            onClick={(e) => selectSeat(e.target.textContent)}
          >
            11
          </div>
        </div>

        <div className={getClassName("12")}>
          <Image src={getSeatImage("12")} alt="" preview={false} />
          <div
            className="seat-number"
            onClick={(e) => selectSeat(e.target.textContent)}
          >
            12
          </div>
        </div>
      </div>

      {/* 13 14 15 */}
      <div className="three-seat-row">
        <div className={getClassName("13")}>
          <Image src={getSeatImage("13")} alt="" preview={false} />
          <div
            className="seat-number"
            onClick={(e) => selectSeat(e.target.textContent)}
          >
            13
          </div>
        </div>
        <div className={getClassName("14")}>
          <Image src={getSeatImage("14")} alt="" preview={false} />
          <div
            className="seat-number"
            onClick={(e) => selectSeat(e.target.textContent)}
          >
            14
          </div>
        </div>

        <div className={getClassName("15")}>
          <Image src={getSeatImage("15")} alt="" preview={false} />
          <div
            className="seat-number"
            onClick={(e) => selectSeat(e.target.textContent)}
          >
            15
          </div>
        </div>
      </div>

      {/* 16 17 18 */}
      <div className="three-seat-row">
        <div className={getClassName("16")}>
          <Image src={getSeatImage("16")} alt="" preview={false} />
          <div
            className="seat-number"
            onClick={(e) => selectSeat(e.target.textContent)}
          >
            16
          </div>
        </div>
        <div className={getClassName("17")}>
          <Image src={getSeatImage("17")} alt="" preview={false} />
          <div
            className="seat-number"
            onClick={(e) => selectSeat(e.target.textContent)}
          >
            17
          </div>
        </div>

        <div className={getClassName("18")}>
          <Image src={getSeatImage("18")} alt="" preview={false} />
          <div
            className="seat-number"
            onClick={(e) => selectSeat(e.target.textContent)}
          >
            18
          </div>
        </div>
      </div>

      {/* 19 20 21 */}
      <div className="three-seat-row">
        <div className={getClassName("19")}>
          <Image src={getSeatImage("19")} alt="" preview={false} />
          <div
            className="seat-number"
            onClick={(e) => selectSeat(e.target.textContent)}
          >
            19
          </div>
        </div>
        <div className={getClassName("20")}>
          <Image src={getSeatImage("20")} alt="" preview={false} />
          <div
            className="seat-number"
            onClick={(e) => selectSeat(e.target.textContent)}
          >
            20
          </div>
        </div>

        <div className={getClassName("21")}>
          <Image src={getSeatImage("21")} alt="" preview={false} />
          <div
            className="seat-number"
            onClick={(e) => selectSeat(e.target.textContent)}
          >
            21
          </div>
        </div>
      </div>

      {/* 22 23 24 */}
      <div className="three-seat-row">
        <div className={getClassName("22")}>
          <Image src={getSeatImage("22")} alt="" preview={false} />
          <div
            className="seat-number"
            onClick={(e) => selectSeat(e.target.textContent)}
          >
            22
          </div>
        </div>
        <div className={getClassName("23")}>
          <Image src={getSeatImage("23")} alt="" preview={false} />
          <div
            className="seat-number"
            onClick={(e) => selectSeat(e.target.textContent)}
          >
            23
          </div>
        </div>

        <div className={getClassName("24")}>
          <Image src={getSeatImage("24")} alt="" preview={false} />
          <div
            className="seat-number"
            onClick={(e) => selectSeat(e.target.textContent)}
          >
            24
          </div>
        </div>
      </div>

      {/* 25 26 27 */}
      <div className="three-seat-row">
        <div className={getClassName("25")}>
          <Image src={getSeatImage("25")} alt="" preview={false} />
          <div
            className="seat-number"
            onClick={(e) => selectSeat(e.target.textContent)}
          >
            25
          </div>
        </div>
        <div className={getClassName("26")}>
          <Image src={getSeatImage("26")} alt="" preview={false} />
          <div
            className="seat-number"
            onClick={(e) => selectSeat(e.target.textContent)}
          >
            26
          </div>
        </div>

        <div className={getClassName("27")}>
          <Image src={getSeatImage("27")} alt="" preview={false} />
          <div
            className="seat-number"
            onClick={(e) => selectSeat(e.target.textContent)}
          >
            27
          </div>
        </div>
      </div>

      {/* 28 29 30 */}
      <div className="three-seat-row">
        <div className={getClassName("28")}>
          <Image src={getSeatImage("28")} alt="" preview={false} />
          <div
            className="seat-number"
            onClick={(e) => selectSeat(e.target.textContent)}
          >
            28
          </div>
        </div>
        <div className={getClassName("29")}>
          <Image src={getSeatImage("29")} alt="" preview={false} />
          <div
            className="seat-number"
            onClick={(e) => selectSeat(e.target.textContent)}
          >
            29
          </div>
        </div>

        <div className={getClassName("30")}>
          <Image src={getSeatImage("30")} alt="" preview={false} />
          <div
            className="seat-number"
            onClick={(e) => selectSeat(e.target.textContent)}
          >
            30
          </div>
        </div>
      </div>

      {/* 31 32 33 */}
      <div className="three-seat-row">
        <div className={getClassName("31")}>
          <Image src={getSeatImage("31")} alt="" preview={false} />
          <div
            className="seat-number"
            onClick={(e) => selectSeat(e.target.textContent)}
          >
            31
          </div>
        </div>
        <div className={getClassName("32")}>
          <Image src={getSeatImage("32")} alt="" preview={false} />
          <div
            className="seat-number"
            onClick={(e) => selectSeat(e.target.textContent)}
          >
            32
          </div>
        </div>

        <div className={getClassName("33")}>
          <Image src={getSeatImage("33")} alt="" preview={false} />
          <div
            className="seat-number"
            onClick={(e) => selectSeat(e.target.textContent)}
          >
            33
          </div>
        </div>
      </div>
    </>
  );
}

export default SeatMapNewNormal;
