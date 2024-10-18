import React from 'react';
import CardDataStats from '../../components/CardDataStats';
import ChartOne from '../../components/Charts/ChartOne';
import ChartThree from '../../components/Charts/ChartThree';
import ChartTwo from '../../components/Charts/ChartTwo';
import ChatCard from '../../components/Chat/ChatCard';
import MapOne from '../../components/Maps/MapOne';
import TableOne from '../../components/Tables/TableOne';
import Booking from './Components/Booking';
import InfoCard from '../../components/Cards/InfoCard';
import Timeline from './Components/Timeline';
import RoomManagement from '../RoomManagement';
import RoomStatus from './Components/RoomStatus';

const Dashboard: React.FC = () => {
  const infoArray = [
    { title: 'Number Of Rooms', value: '5' },
    { title: 'Booked Rooms', value: '03' },
    { title: 'Vacant Rooms', value: '02' },
  ];
  return (
    <>
      <div className="flex justify-between pb-4">
        <h1 className="font-sans text-highemphasize text-2xl font-semibold leading-[29.26px] text-left ">
          Dashboard
        </h1>
        <div className="flex justify-between gap-2">
          <button className="rounded-md bg-primaryblue py-1 px-6 font-medium text-white hover:shadow-1">
            New Room
          </button>
          <button className="rounded-md bg-white py-1 px-6 font-medium text-lowemphasize border hover:shadow-1">
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
    </>
  );
};

export default Dashboard;
