import React, { ReactNode } from 'react';
import DropdownBasic from '../../Dropdowns/DropdownBasic';

interface InfoCardProps {
  heading: string;
  subHeading: string;
  infoArr?: Array<{ title: string; value: string }>;
  showTable?: boolean;
}

type Room = {
  roomNumber: string;
  roomCode: string;
  status: 'Booked' | 'Vacant';
  checkIn: string;
  checkOut: string;
};

const rooms: Room[] = [
  {
    roomNumber: 'Meeting Room 1',
    roomCode: 'MR1',
    status: 'Booked',
    checkIn: '02:00 PM',
    checkOut: '03:00 PM',
  },
  {
    roomNumber: 'Meeting Room 2',
    roomCode: 'MR2',
    status: 'Booked',
    checkIn: '08:00 AM',
    checkOut: '10:00 AM',
  },
  {
    roomNumber: 'Meeting Room 3',
    roomCode: 'MR3',
    status: 'Vacant',
    checkIn: '-',
    checkOut: '-',
  },
  {
    roomNumber: 'Meeting Room 4',
    roomCode: 'MR4',
    status: 'Booked',
    checkIn: '02:00 PM',
    checkOut: '03:00 PM',
  },
  {
    roomNumber: 'Meeting Room 5',
    roomCode: 'MR5',
    status: 'Vacant',
    checkIn: '-',
    checkOut: '-',
  },
];
const InfoCard: React.FC<InfoCardProps> = ({
  heading,
  subHeading,
  infoArr,
  showTable,
}) => {
  const menuItemsArr = [
    { title: 'This Month', value: '#' },
    { title: 'This Year', value: '#' },
  ];

  const bookedRooms = rooms.filter((room) => room.status === 'Booked').length;
  const vacantRooms = rooms.length - bookedRooms;

  return (
    <div
      className={`${
        showTable ? 'min-w-[850px]' : 'min-w-[780px]'
      } w-auto rounded-lg bg-white p-6  dark:border-strokedark dark:bg-boxdark`}
    >
      <div className="flex justify-between align-bottom">
        <div className="flex flex-col gap-1">
          <h1 className="font-sans text-heading text-xl font-semibold leading-[22px] text-left">
            {heading}
          </h1>
          <p className="font-sans pt-1 text-sm font-normal leading-[22px] text-left text-lowemphasize">
            {subHeading}
          </p>
        </div>

        <DropdownBasic buttonText="This Week" menuItems={menuItemsArr} />
      </div>
      <div className="my-4 flex items-end gap-3">
        {infoArr?.map((e, i) => (
          <div
            key={i}
            className={`bg-[#F5F6F7] w-full flex flex-col rounded-lg py-2 gap-1 ${
              showTable ? 'pl-6 pr-24' : 'px-6'
            }`}
          >
            <p className="text-lowemphasize">{e.title}</p>
            <span className=" text-primaryblue font-sans text-xl font-semibold leading-[24.38px] text-left">
              {e.value}
            </span>
          </div>
        ))}
      </div>
      {showTable && <hr className="w-full border-[#E4E5E6] " />}
      {showTable && (
        <table className="w-full text-left border-collapse ">
          <thead>
            <tr>
              <th className="py-1 px-4 font-medium text-highemphasize">
                Room Number
              </th>
              <th className="py-1 px-4 font-medium text-highemphasize">
                Floor Code
              </th>
              <th className="py-1 px-4 font-medium text-highemphasize">
                Status
              </th>
              <th className="py-1 px-4 font-medium text-highemphasize">
                Check-In
              </th>
              <th className="py-1 px-4 font-medium text-highemphasize">
                Check-Out
              </th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room, index) => (
              <tr key={index}>
                <td className="py-1 px-4 text-lowemphasize">
                  {room.roomNumber}
                </td>
                <td className="py-1 px-4 text-[#004080]">{room.roomCode}</td>
                <td
                  className={`py-1 px-4 font-semibold ${
                    room.status === 'Booked'
                      ? 'text-[#199D54] '
                      : 'text-[#D61C2A] '
                  }`}
                >
                  {room.status}
                </td>
                <td className="py-1 px-4 text-lowemphasize">{room.checkIn}</td>
                <td className="py-1 px-4 text-lowemphasize">{room.checkOut}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default InfoCard;
