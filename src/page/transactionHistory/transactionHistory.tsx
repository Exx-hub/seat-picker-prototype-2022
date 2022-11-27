import React from "react";
import "./transactionHistory.css";

import { Input, DatePicker, Button, Dropdown, Table } from "antd";

import {
  SearchOutlined,
  DownOutlined,
  ProfileOutlined,
} from "@ant-design/icons";

const { RangePicker } = DatePicker;

const tableSource = [
  {
    title: "Ticket ID",
    dataIndex: "ticketId",
    key: "ticketId",
    align: "center",
  },
  {
    title: "Transaction Date",
    dataIndex: "transactionDate",
    key: "transactionDate",
    align: "center",
  },
  {
    title: "Passenger/s",
    dataIndex: "passengerNames",
    key: "passengerNames",
    align: "center",
  },
  {
    title: "Seat No/s",
    dataIndex: "seatNumber",
    key: "seatNumber",
    align: "center",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
    align: "center",
  },
  {
    title: "Payment Type",
    dataIndex: "paymentType",
    key: "paymentType",
    align: "center",
  },
  {
    title: "Trip Id",
    dataIndex: "tripId",
    key: "tripId",
    align: "center",
  },
  {
    title: "Ticket Status",
    dataIndex: "ticketStatus",
    key: "ticketStatus",
    align: "center",
  },
];

const dataSource = [
  {
    ticketId: "123456",
    transactionDate: "12/24/2022 1:02 PM",
    passengerNames: "Alvin Buid, Alvin Acosta, Mikee Gemilo, Jona Guzon",
    seatNumber: "1,2,3,4",
    amount: "₱3328.00",
    paymentType: "walk-in",
    tripId: "T-ABC123",
    ticketStatus: "Confirmed",
    key: 0,
  },
  {
    ticketId: "122345",
    transactionDate: "12/23/2022 4:41 PM",
    passengerNames: "Juan dela Cruz",
    seatNumber: "22",
    amount: "₱832.70",
    paymentType: "walk-in",
    tripId: "T-ABC123",
    ticketStatus: "Pending",
    key: 1,
  },
  {
    ticketId: "133456",
    transactionDate: "12/18/2022 10:30 AM",
    passengerNames: "Pacifico Ruiz",
    seatNumber: "11",
    amount: "₱832.70",
    paymentType: "online",
    tripId: "T-ABC123",
    ticketStatus: "Confirmed",
    key: 2,
  },
  {
    ticketId: "144567",
    transactionDate: "12/18/2022 11:35 AM",
    passengerNames: "Conrado Paulo",
    seatNumber: "15",
    amount: "₱832.70",
    paymentType: "online",
    tripId: "T-ABC123",
    ticketStatus: "Cancelled",
    key: 3,
  },
];

function TransactionHistory() {
  const handleDownload = () => {};
  const menu = (
    <div className="dropdown-menu">
      <div onClick={handleDownload}>
        <ProfileOutlined /> Download XLS
      </div>
    </div>
  );

  // initial load, datepicker has initial values in state, fetch data once component mounts
  // if trip id entered and clicked or entered, makes another fetch with filter params including dates

  return (
    <div className="transactionHistory-container">
      <div className="search-date-container">
        <div className="table-title">Search Transaction</div>

        <div className="input-date-dropdown-div">
          <div>
            <Input
              placeholder="Trip ID | Ticket ID"
              // value={rsInput}
              // onChange={(e) => setRsInput(e.target.value)}
              // onPressEnter={searchByRsNo}
              suffix={
                <SearchOutlined
                  style={{ cursor: "pointer" }}
                  // onClick={searchByRsNo}
                />
              }
            />
          </div>
          <div>
            <RangePicker />
          </div>

          {/* @ts-ignore  */}
          <Dropdown overlay={menu}>
            <Button className="dropdown-item-btn">
              <DownOutlined /> Download
            </Button>
          </Dropdown>
        </div>
      </div>

      <div className="dashed-line" />

      <div className="tableContainer">
        <Table
          // loading={this.state.fetching}
          // scroll={{ y: 500 }}
          scroll={{ x: "max-content" }}
          rowKey="key"
          // pagination={{ position: ["bottomCenter"], pageSize: 10 }} // pageSize set dropdown
          pagination={false}
          // @ts-ignore
          columns={tableSource}
          dataSource={dataSource}
        />
      </div>
    </div>
  );
}

export default TransactionHistory;
