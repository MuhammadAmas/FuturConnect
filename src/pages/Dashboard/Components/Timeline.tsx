import React from 'react';
import DropdownBasic from '../../../components/Dropdowns/DropdownBasic';

type RoomBooking = {
  roomCode: string;
  timeSlots: Array<{ start: number; end: number }>; // start and end times in 24-hour format
};

const bookings: RoomBooking[] = [
  { roomCode: 'MR1', timeSlots: [{ start: 14, end: 15 }] }, // 2PM - 3PM
  { roomCode: 'MR2', timeSlots: [{ start: 8, end: 12 }] }, // 8AM - 10AM
  { roomCode: 'MR3', timeSlots: [] }, // No bookings
  { roomCode: 'MR4', timeSlots: [{ start: 14, end: 19 }] }, // 2PM - 4PM
];

const hours = [8, 10, 12, 14, 16, 18, 20, 22]; // 8AM to 10PM

const Timeline: React.FC = () => {
  const menuItemsArr = [
    { title: 'This Month', value: '#' },
    { title: 'This Year', value: '#' },
  ];

  return (
    <div className="min-w-[850px] mt-4 p-6 bg-white rounded-md shadow-md">
      <div className="flex justify-between">
        <div>
          <h2 className="font-sans text-heading text-xl font-semibold leading-[22px] text-left">
            Timeline
          </h2>
          <p className="font-sans pt-1 text-sm font-normal leading-[22px] text-left text-lowemphasize">
            A simple graph that shows the meeting room availability
          </p>
        </div>
        <div>
          <DropdownBasic buttonText="Today" menuItems={menuItemsArr} />
        </div>
      </div>

      {/* Timeline Grid */}
      <div className="mt-4">
        <div className="grid grid-cols-[100px_repeat(8,_1fr)]">
          {/* Time Labels */}
          <div></div> {/* Empty space for room labels */}
          {hours.map((hour) => (
            <div
              key={hour}
              className="text-center text-sm bg-[#F5F6F7] py-1 mb-3 text-lowemphasize "
            >
              {hour % 24 === 0
                ? '12PM'
                : `${hour % 12 === 0 ? 12 : hour % 12}${
                    hour < 12 ? 'AM' : 'PM'
                  }`}
            </div>
          ))}
          {/* Room Booking Rows */}
          {bookings.map((booking, index) => (
            <React.Fragment key={index}>
              {/* Room Code */}
              <div className="font-medium text-lowemphasize text-sm">
                {booking.roomCode}
              </div>

              {/* Time Slots */}
              {hours.map((hour, idx) => {
                // Check if the current hour is part of a booking
                const isBooked = booking.timeSlots.some(
                  (slot) => hour >= slot.start && hour < slot.end,
                );

                // Check if the next hour is part of the same booking (to remove right border-radius)
                const isNextHourBooked = booking.timeSlots.some(
                  (slot) => hour + 2 >= slot.start && hour + 2 < slot.end,
                );

                // Check if the previous hour is part of the same booking (to remove left border-radius)
                const isPreviousHourBooked = booking.timeSlots.some(
                  (slot) => hour - 2 >= slot.start && hour - 2 < slot.end,
                );

                // Determine border-radius based on adjacent bookings
                const borderRadius = isPreviousHourBooked
                  ? isNextHourBooked
                    ? 'rounded-none' // No border-radius when it's between two booked slots
                    : 'rounded-r-md' // Only round the left side when no adjacent booking on the right
                  : isNextHourBooked
                  ? 'rounded-l-md' // Only round the right side when no adjacent booking on the left
                  : 'rounded-md'; // Full rounded when it's an isolated booking

                return (
                  <div key={hour} className="relative h-10 border-gray-200">
                    {isBooked && (
                      <div
                        className={`absolute inset-0 bg-[#05819F] ${borderRadius}`}
                      ></div>
                    )}
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
