import React, { useState } from 'react';
import InfoCard from '../../components/Cards/InfoCard';
import Timeline from './Components/Timeline';
import RoomStatus from './Components/RoomStatus';
import RoomModal from '../../components/RoomModal';

const Dashboard: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle the modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const infoArray = [
    { title: 'Number Of Rooms', value: '5' },
    { title: 'Booked Rooms', value: '03' },
    { title: 'Vacant Rooms', value: '02' },
  ];
  return (
    <>
      <div className="flex justify-between pb-4">
        <h1 className="font-sans text-highemphasize text-2xl font-semibold leading-[29.26px] text-left">
          Dashboard
        </h1>
        <div className="flex justify-between gap-2">
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

      <div className="flex gap-5">
        <div className="w-full">
          <div>
            <InfoCard
              heading="Booking"
              subHeading="Information about reservations"
              infoArr={infoArray}
              showTable={true}
            />
          </div>

          <div>
            <Timeline />
          </div>
        </div>
        <div className="w-2/5">
          <RoomStatus />
        </div>
      </div>
      <RoomModal isOpen={isModalOpen} onClose={toggleModal} />
    </>
  );
};

export default Dashboard;
