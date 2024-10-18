import React, { useState, ChangeEvent } from 'react';

interface Room {
  number: string;
  code: string;
  status: string;
  checkIn: string;
  checkOut: string;
  media: string;
  agenda: string;
}

const ManagementTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [rooms] = useState<Room[]>([
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
  ]);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredRooms = rooms.filter((room) =>
    room.number.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="p-4 bg-white rounded-lg">
      {/* Search and Filter Section */}
      <div className="flex items-center justify-between mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search By Name"
            value={searchTerm}
            onChange={handleSearch}
            className="border rounded-lg p-2 w-80"
          />
        </div>
        <div className="flex items-center space-x-2">
          <button className="border rounded-lg px-4 py-2">Filter</button>
          <button className="border rounded-lg px-4 py-2 bg-blue-500 text-white">
            Bulk Action
          </button>
          <input
            type="date"
            className="border rounded-lg px-4 py-2"
            defaultValue="2024-10-18"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-4 text-left">
                <input type="checkbox" />
              </th>
              <th className="p-4 text-left">Room Number</th>
              <th className="p-4 text-left">Room Code</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Check-In</th>
              <th className="p-4 text-left">Check-Out</th>
              <th className="p-4 text-left">Media/Entity</th>
              <th className="p-4 text-left">Meeting Agenda</th>
            </tr>
          </thead>
          <tbody>
            {filteredRooms.map((room, index) => (
              <tr key={index} className="border-b">
                <td className="p-4">
                  <input type="checkbox" />
                </td>
                <td className="p-4">{room.number}</td>
                <td className="p-4 text-blue-500">{room.code}</td>
                <td
                  className={`p-4 ${
                    room.status === 'Vacant' ? 'text-red-500' : 'text-green-500'
                  }`}
                >
                  {room.status}
                </td>
                <td className="p-4">{room.checkIn}</td>
                <td className="p-4">{room.checkOut}</td>
                <td className="p-4">
                  {room.media === 'PDF' ? (
                    <svg
                      className="w-6 h-6 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H8v-2h3v2zm4.12 0H13v-2h2.88c-.17 1.02-.59 1.89-1.76 1.99v.01zM13 13H8v-2h5v2zm0-3H8V8h5v2zm5 3h-2v2h1.26c.13-.3.24-.63.33-1h1.11c.01.34.02.67.02 1H18v2h2v-1.01c0-1.66-.53-3.17-1.88-4.35.67-.22 1.38-.36 2.13-.35V12h-2v-1.01c-.03-.34-.05-.67-.05-1.01H18V10z" />
                    </svg>
                  ) : (
                    '-'
                  )}
                </td>
                <td className="p-4">{room.agenda}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between p-4 bg-gray-50">
        <span className="text-sm text-gray-700">1-4 of 5 items</span>
        <div className="flex space-x-1">
          <button className="border rounded-lg px-4 py-2">1</button>
          <button className="border rounded-lg px-4 py-2">2</button>
        </div>
      </div>
    </div>
  );
};

export default ManagementTable;
