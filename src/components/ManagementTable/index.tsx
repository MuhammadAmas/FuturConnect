import React, { useState, ChangeEvent } from 'react';
import CheckboxOne from '../Checkboxes/CheckboxOne';
import LayoutType from '../LayoutType';

interface TableHeader {
  label: string;
  key: string;
}

interface TableData {
  [key: string]: string;
}

interface ManagementTableProps {
  tableHeaders: TableHeader[];
  tableData: TableData[];
}

const ManagementTable: React.FC<ManagementTableProps> = ({
  tableHeaders,
  tableData,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = tableData.filter((data) =>
    Object.values(data).some((value) =>
      value.toLowerCase().includes(searchTerm.toLowerCase()),
    ),
  );

  return (
    <div className="p-4 bg-white rounded-lg">
      {/* Search and Filter Section */}
      <div className="flex items-center justify-between mb-4">
        <div className="relative w-1/2">
          <img
            src="/search.png"
            alt="Search Icon"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500"
          />
          <input
            type="text"
            placeholder="Search By Name"
            value={searchTerm}
            onChange={handleSearch}
            className="border rounded-lg pl-10 pr-4 py-2 w-full text-gray-600 placeholder-gray-400 focus:outline-none focus:border-gray-500"
          />
        </div>

        <div className="flex items-center space-x-2">
          <button className="font-montserrat text-[12px] text-lowemphasize font-semibold flex items-center border rounded-lg px-4 py-2 bg-white border-gray-300 h-full">
            <img src="/filter.png" alt="Filter Icon" className="w-4 h-4 mr-2" />
            Filter
          </button>

          <button className="font-montserrat text-[12px] font-semibold text-center border rounded-lg px-4 py-2 bg-primaryblue text-white flex items-center">
            Bulk Action
            <img
              src="/arrow-down.png"
              alt="Arrow Down"
              className="w-4 h-4 ml-2"
            />
          </button>

          <input
            type="date"
            className="border rounded-lg px-4 py-2"
            defaultValue="2024-10-18"
          />
          <LayoutType />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-4 text-left">
                <CheckboxOne />
              </th>
              {tableHeaders.map((header, index) => (
                <th key={index} className="p-4 text-black text-left">
                  {header.label}
                  <img
                    src="/sort.png"
                    alt="Sort Icon"
                    className="inline-block ml-2 w-4 h-4"
                  />
                </th>
              ))}
              <th className="p-4 text-left"></th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((data, index) => (
              <tr
                key={index}
                className={`border-b ${
                  index % 2 === 0
                    ? 'bg-white'
                    : 'bg-gray-50' /* Alternate row colors */
                }`}
              >
                <td className="p-4">
                  <CheckboxOne />
                </td>
                {tableHeaders.map((header, i) => (
                  <td
                    key={i}
                    className={`p-4 ${
                      data[header.key].toLowerCase() === 'vacant'
                        ? 'text-[#D61C2A] font-semibold'
                        : data[header.key].toLowerCase() === 'booked'
                        ? 'text-[#199D54] font-semibold'
                        : 'text-lowemphasize'
                    }`}
                  >
                    {header.key === 'media' && data[header.key] === 'PDF' ? (
                      <img
                        src="/Pdf.png" // PDF icon image
                        alt="PDF Icon"
                        className="inline-block"
                      />
                    ) : (
                      data[header.key]
                    )}
                  </td>
                ))}
                <td className="p-4">
                  {' '}
                  {/* Menu icon for the last column */}
                  <img
                    src="/menu.png" // Menu icon image
                    alt="Menu Icon"
                    className="inline-block w-4 h-4"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg">
        <div className="flex gap-8 items-center">
          <div className="flex items-center">
            <label htmlFor="items-per-page" className="text-gray-600 mr-2">
              Items per page
            </label>
            <select
              id="items-per-page"
              className="border rounded-lg px-3 py-1 text-gray-600"
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
          </div>

          <span className="text-sm text-left text-gray-700">
            1-4 of {tableData.length} items
          </span>
        </div>

        <div className="flex items-center">
          <button className="border rounded-lg px-3 py-1 text-gray-600 mr-1">
            1
          </button>
          <span className="text-gray-600">
            of {Math.ceil(tableData.length / 10)} pages
          </span>
          <button className="border rounded-lg px-3 py-1 text-gray-600 ml-1">
            &lt;
          </button>
          <button className="border rounded-lg px-3 py-1 text-gray-600 ml-1">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManagementTable;
