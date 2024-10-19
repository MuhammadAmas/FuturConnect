import React, { useState } from 'react';
import InfoCard from '../components/Cards/InfoCard';
import ManagementTable from '../components/ManagementTable';
import RoomModal from '../components/RoomModal';

const RoomManagement: React.FC = () => {
  // State to manage the modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle the modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const infoArray = [
    { title: 'Number Of Rooms', value: '15' },
    { title: 'Booked Rooms', value: '05' },
    { title: 'Vacant Rooms', value: '10' },
  ];

  const tableHeaders = [
    { label: 'Room Number', key: 'number' },
    { label: 'Floor No.', key: 'code' },
    { label: 'Status', key: 'status' },
    { label: 'Check-In', key: 'checkIn' },
    { label: 'Check-Out', key: 'checkOut' },
    { label: 'Media/Entity', key: 'media' },
    { label: 'Meeting Agenda', key: 'agenda' },
  ];

  const tableData = [
    {
      number: 'Meeting Room 1',
      code: 'MR1',
      status: 'Booked',
      checkIn: '12 Aug 2022 02:00 PM',
      checkOut: '12 Aug 2022 03:00 PM',
      media: 'PDF',
      agenda: 'Dashboard Project of ATE',
    },
    {
      number: 'Meeting Room 2',
      code: 'MR2',
      status: 'Booked',
      checkIn: '12 Aug 2022 08:00 PM',
      checkOut: '12 Aug 2022 10:00 PM',
      media: 'PDF',
      agenda: 'Project Admin Panel',
    },
    {
      number: 'Meeting Room 3',
      code: 'MR3',
      status: 'Vacant',
      checkIn: '-',
      checkOut: '-',
      media: '-',
      agenda: '-',
    },
    {
      number: 'Meeting Room 4',
      code: 'MR4',
      status: 'Booked',
      checkIn: '12 Aug 2022 08:00 PM',
      checkOut: '12 Aug 2022 10:00 PM',
      media: 'PDF',
      agenda: 'Dashboard Project of ATE',
    },
    {
      number: 'Meeting Room 5',
      code: 'MR5',
      status: 'Vacant',
      checkIn: '-',
      checkOut: '-',
      media: '-',
      agenda: '-',
    },
  ];

  return (
    <>
      {/* Header with buttons */}
      <div className="flex justify-between pb-4">
        <h1 className="font-sans text-highemphasize text-2xl font-semibold leading-[29.26px] text-left">
          Room Management
        </h1>
        <div className="flex justify-between gap-2">
          {/* Button to open the New Room modal */}
          <button
            onClick={toggleModal}
            className="font-montserrat text-[12px] font-semibold text-center border rounded-lg px-4 py-2 bg-primaryblue text-white flex items-center"
          >
            <img src="/add.png" alt="Arrow Down" className="w-4 h-4 mr-2" />
            New Room
          </button>

          <button className="font-montserrat text-[12px] font-semibold text-center border rounded-lg px-4 py-2 bg-white flex items-center">
            <img src="/linear.png" alt="calender" className="w-4 h-4 mr-2" />
            Book Room
          </button>
        </div>
      </div>

      {/* Info Cards */}
      <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <InfoCard
          heading="Booking"
          subHeading="Information about reservations"
          infoArr={infoArray}
        />
      </div>

      {/* Table */}
      <ManagementTable tableHeaders={tableHeaders} tableData={tableData} />

      {/* Modal Component */}
      <RoomModal isOpen={isModalOpen} onClose={toggleModal} />
    </>
  );
};

export default RoomManagement;
