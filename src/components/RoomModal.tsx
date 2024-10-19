import React, { useState } from 'react';

interface RoomModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RoomModal: React.FC<RoomModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    roomNumber: '',
    floorNumber: '',
    checkInTime: '',
    checkOutTime: '',
    meetingAgenda: '',
  });

  // Handle input change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      id="room-modal"
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
    >
      <div className="relative p-4 w-full max-w-md">
        <div className="relative bg-white rounded-lg shadow">
          {/* Modal Header */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
            <h3 className="text-lg font-semibold text-highemphasize">
              Add New Meeting Room
            </h3>
            <button
              type="button"
              onClick={onClose}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          {/* Modal Body */}
          <form className="p-14 md:p-5" onSubmit={handleSubmit}>
            <div className="grid gap-4 mb-4 grid-cols-2">
              {/* Room Number and Floor Number in the same row */}
              <div className="col-span-1">
                <label
                  htmlFor="roomNumber"
                  className="block mb-2 text-sm font-medium text-highemphasize"
                >
                  Room Number
                </label>
                <input
                  type="text"
                  name="roomNumber"
                  id="roomNumber"
                  value={formData.roomNumber}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Enter room number"
                  required
                />
              </div>

              <div className="col-span-1">
                <label
                  htmlFor="floorNumber"
                  className="block mb-2 text-sm font-medium text-highemphasize"
                >
                  Floor No
                </label>
                <input
                  type="text"
                  name="floorNumber"
                  id="floorNumber"
                  value={formData.floorNumber}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Enter floor no"
                  required
                />
              </div>

              {/* Check In Time */}
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="checkInTime"
                  className="block mb-2 text-sm font-medium text-highemphasize"
                >
                  Check In Time
                </label>
                <input
                  type="datetime-local"
                  name="checkInTime"
                  id="checkInTime"
                  value={formData.checkInTime}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                />
              </div>

              {/* Check Out Time */}
              <div className="col-span-2 sm:col-span-1">
                <label
                  htmlFor="checkOutTime"
                  className="block mb-2 text-sm font-medium text-highemphasize"
                >
                  Check Out Time
                </label>
                <input
                  type="datetime-local"
                  name="checkOutTime"
                  id="checkOutTime"
                  value={formData.checkOutTime}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                />
              </div>

              {/* Meeting Agenda */}
              <div className="col-span-2">
                <label
                  htmlFor="meetingAgenda"
                  className="block mb-2 text-sm font-medium text-highemphasize"
                >
                  Meeting Agenda
                </label>
                <textarea
                  id="meetingAgenda"
                  name="meetingAgenda"
                  value={formData.meetingAgenda}
                  onChange={handleInputChange}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter meeting agenda here"
                ></textarea>
              </div>
            </div>

            {/* Right-aligned Modal Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="text-white inline-flex items-center bg-primaryblue font-medium rounded-lg text-sm px-5 py-2.5"
              >
                <img src="/add.png" alt="Arrow Down" className="w-4 h-4 mr-2" />
                Add Room
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RoomModal;
