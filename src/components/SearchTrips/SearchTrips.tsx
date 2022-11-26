import "./SearchTrips.css";
import { startDes, endDes } from "./utils";

import { AutoComplete, DatePicker, Col, Row, Button, Select } from "antd";
import { FixMeLater } from "../../types/interfaces";
const { Option } = Select;

interface SearchTripsProps {
  setTripsVisible: (value: boolean) => void;
}

function SearchTrips({ setTripsVisible }: SearchTripsProps) {
  return (
    <div className="search-trips-container">
      <Col className="col">
        <Row>Start Destination</Row>
        <Row>
          <AutoComplete
            className="autocomplete"
            placeholder="Select Start Station"
          >
            {startDes.map((e, i) => (
              <Option key={i} value={e}>
                {e}
              </Option>
            ))}
          </AutoComplete>
        </Row>
      </Col>

      <Col className="col">
        <Row>End Destination</Row>
        <Row>
          <AutoComplete
            className="autocomplete"
            placeholder="Select End Station"
          >
            {endDes.map((e, i) => (
              <Option key={i} value={e}>
                {e}
              </Option>
            ))}
          </AutoComplete>
        </Row>
      </Col>

      <Col className="col">
        <Row>Travel Date</Row>
        <Row>
          <DatePicker className="date-picker" />
        </Row>
      </Col>
      <Col className="button-column">
        <Button onClick={() => setTripsVisible(true)} className="filter-button">
          Filter
        </Button>
      </Col>
    </div>
  );
}

export default SearchTrips;
