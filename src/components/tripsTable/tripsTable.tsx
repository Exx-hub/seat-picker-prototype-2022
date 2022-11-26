import React from "react";
import "./TripsTable.css";

import { Table, Button } from "antd";

import { useNavigate } from "react-router-dom";
import { FixMeLater } from "../../types/interfaces";

function TripsTable() {
  const navigate = useNavigate();

  const viewSeats = (tripDetails: FixMeLater) => {
    const { tripId } = tripDetails;
    navigate(`/booking-details/${tripId}`, { state: tripDetails });
  };

  // {
  //   pathname: `/booking-details/${tripId}`,
  //   state: { tripDetails },
  // }

  const dataSource = [
    {
      tripId: "ABC123",
      startStation: "Cubao",
      endStation: "Baguio",
      startDate: "12/12/2022 06:00 PM",
      selectedBus: "Reg_AC",
      seatsLeft: 10,
      key: 0,
    },
    {
      tripId: "EFG123",
      startStation: "Pasay",
      endStation: "Baler",
      startDate: "12/23/2022 10:00 PM",
      selectedBus: "Premier",
      seatsLeft: 2,
      key: 1,
    },
    {
      tripId: "HIJ123",
      startStation: "Baguio",
      endStation: "Cubao",
      startDate: "12/23/2022 08:00 PM",
      selectedBus: "New_Normal",
      seatsLeft: "FULL",
      key: 2,
    },
    {
      tripId: "KLM123",
      startStation: "Pasay",
      endStation: "La Union",
      startDate: "12/20/2022 06:00 PM",
      selectedBus: "Reg_AC",
      seatsLeft: 2,
      key: 3,
    },
  ];

  const tableSource = [
    {
      title: "Trip Id",
      dataIndex: "tripId",
      key: "tripId",
      align: "center",
    },
    {
      title: "Start Station",
      dataIndex: "startStation",
      key: "startStation",
      align: "center",
    },
    {
      title: "End Station",
      dataIndex: "endStation",
      key: "endStation",
      align: "center",
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate",
      align: "center",
    },
    {
      title: "Selected Bus",
      dataIndex: "selectedBus",
      key: "selectedBus",
      align: "center",
    },
    {
      title: "Seats Left",
      dataIndex: "seatsLeft",
      key: "seatsLeft",
      align: "center",
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: (tripDetails: FixMeLater) => (
        <Button onClick={() => viewSeats(tripDetails)}>View Seats</Button>
      ),
    },
  ];

  return (
    <div className="trips-table-container">
      <Table
        // loading={this.state.fetching}
        // scroll={{ x: true }}
        rowKey="key"
        // pagination={false}
        // @ts-ignore
        columns={tableSource}
        dataSource={dataSource}
      />
    </div>
  );
}

export default TripsTable;
