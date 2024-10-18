import React, { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const rooms = [
    {
        roomName: 'Meeting Room 1',
        bookedBy: 'Mr. Usman Ahmed',
        checkIn: '02:00 PM',
        checkOut: '03:00 PM',
        attendees: 35,
        agenda: 'Dashboard Project of ATE',
        totalCapacity: 40,
    },
    // Add more rooms if needed
];

const RoomStatus: React.FC = () => {
    const [selectedRoom, setSelectedRoom] = useState(rooms[0]);

    const handleRoomChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedRoomName = e.target.value;
        const room = rooms.find((r) => r.roomName === selectedRoomName);
        if (room) setSelectedRoom(room);
    };

    const vacantSpace = selectedRoom.totalCapacity - selectedRoom.attendees;
    const bookedPercentage = (selectedRoom.attendees / selectedRoom.totalCapacity) * 100;

    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-6">
            <h2 className="font-sans text-heading text-xl font-semibold leading-[22px] text-left">Room Status</h2>
            <p className="font-sans pt-1 text-sm font-normal leading-[22px] text-left text-lowemphasize">
                Information about room and its occupancy
            </p>

            {/* Dropdown */}
            <div className="mb-4">
                <select
                    onChange={handleRoomChange}
                    value={selectedRoom.roomName}
                    className="block w-full p-2 border rounded-lg text-highemphasize bg-white dark:bg-boxdark dark:border-strokedark text-[12px]"
                >
                    {rooms.map((room, index) => (
                        <option key={index} value={room.roomName}>
                            {room.roomName}
                        </option>
                    ))}
                </select>
            </div>

            {/* Room Information */}
            <div className="bg-gray-100 p-4 rounded-lg mb-6">
                <p className="text-[12px] text-lowemphasize">Booked by</p>
                <p className="mb-2 text-[16px] text-highemphasize">{selectedRoom.bookedBy}</p>
                <div className="flex justify-between mb-2">
                    <div>
                        <p className="text-[12px] text-lowemphasize">Check-In</p>
                        <p className="text-[16px] text-highemphasize">{selectedRoom.checkIn}</p>
                    </div>
                    <div>
                        <p className="text-[12px] text-lowemphasize">Check-Out</p>
                        <p className="text-[16px] text-highemphasize">{selectedRoom.checkOut}</p>
                    </div>
                </div>
                <div className="mb-2">
                    <p className="text-[12px] text-lowemphasize">Number of Attendees</p>
                    <p className="text-[16px] text-highemphasize">{selectedRoom.attendees}</p>
                </div>
                <div>
                    <p className="text-[12px] text-lowemphasize">Meeting Agenda</p>
                    <p className="text-[16px] text-highemphasize">{selectedRoom.agenda}</p>
                </div>
            </div>

            {/* Circular Room Space Visualization */}
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4 text-center text-highemphasize">Room Space</h3>
                <div className="flex justify-center">
                    <div className="w-40 h-40">
                        <CircularProgressbar
                            value={bookedPercentage}
                            text={`${selectedRoom.attendees}`}
                            styles={buildStyles({
                                textColor: '#000',
                                pathColor: '#004080',
                                trailColor: '#D1D5DB',
                            })}
                        />
                    </div>
                </div>
            </div>

            {/* Vacant and Booked Space Details */}
            <div className="flex justify-around text-sm">
                <div className="text-gray-600">
                    <span className="inline-block w-3 h-3 bg-gray-300 rounded-full mr-2"></span>
                    Vacant Space {vacantSpace}
                </div>
                <div className="text-gray-600">
                    <span className="inline-block w-3 h-3 bg-blue-700 rounded-full mr-2"></span>
                    Booked Space {selectedRoom.attendees}
                </div>
            </div>
        </div>
    );
};

export default RoomStatus;
