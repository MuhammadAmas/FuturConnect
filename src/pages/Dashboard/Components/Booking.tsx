import React from 'react';

type Room = {
    roomNumber: string;
    roomCode: string;
    status: 'Booked' | 'Vacant';
    checkIn: string;
    checkOut: string;
};

const rooms: Room[] = [
    { roomNumber: 'Meeting Room 1', roomCode: 'MR1', status: 'Booked', checkIn: '02:00 PM', checkOut: '03:00 PM' },
    { roomNumber: 'Meeting Room 2', roomCode: 'MR2', status: 'Booked', checkIn: '08:00 AM', checkOut: '10:00 AM' },
    { roomNumber: 'Meeting Room 3', roomCode: 'MR3', status: 'Vacant', checkIn: '-', checkOut: '-' },
    { roomNumber: 'Meeting Room 4', roomCode: 'MR4', status: 'Booked', checkIn: '02:00 PM', checkOut: '03:00 PM' },
    { roomNumber: 'Meeting Room 5', roomCode: 'MR5', status: 'Vacant', checkIn: '-', checkOut: '-' },
];

const Booking: React.FC = () => {
    const bookedRooms = rooms.filter(room => room.status === 'Booked').length;
    const vacantRooms = rooms.length - bookedRooms;

    return (
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-4">Booking</h2>
            <p className="text-sm text-gray-600">Information about reservations</p>

            <div className="flex justify-between my-4">
                <div className="bg-gray-100 p-4 rounded-md text-center">
                    <p className="text-sm text-gray-500">Number of Rooms</p>
                    <p className="text-2xl font-semibold">{rooms.length}</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-md text-center">
                    <p className="text-sm text-gray-500">Booked Rooms</p>
                    <p className="text-2xl font-semibold">{bookedRooms}</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-md text-center">
                    <p className="text-sm text-gray-500">Vacant Rooms</p>
                    <p className="text-2xl font-semibold">{vacantRooms}</p>
                </div>
            </div>

            <table className="w-full text-left border-collapse mt-6">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b font-medium">Room Number</th>
                        <th className="py-2 px-4 border-b font-medium">Room Code</th>
                        <th className="py-2 px-4 border-b font-medium">Status</th>
                        <th className="py-2 px-4 border-b font-medium">Check-In</th>
                        <th className="py-2 px-4 border-b font-medium">Check-Out</th>
                    </tr>
                </thead>
                <tbody>
                    {rooms.map((room, index) => (
                        <tr key={index}>
                            <td className="py-2 px-4 border-b">{room.roomNumber}</td>
                            <td className="py-2 px-4 border-b text-blue-500">{room.roomCode}</td>
                            <td className={`py-2 px-4 border-b ${room.status === 'Booked' ? 'text-green-500' : 'text-red-500'}`}>
                                {room.status}
                            </td>
                            <td className="py-2 px-4 border-b">{room.checkIn}</td>
                            <td className="py-2 px-4 border-b">{room.checkOut}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Booking;
