import React, { ReactNode } from 'react';
import DropdownBasic from '../../Dropdowns/DropdownBasic';

interface InfoCardProps {
  heading: string;
  subHeading: string;
  infoArr?: Array<{ title: string; value: string }>;
}

const InfoCard: React.FC<InfoCardProps> = ({
  heading,
  subHeading,
  infoArr,
}) => {
  const menuItemsArr = [
    { title: 'This Month', value: '#' },
    { title: 'This Year', value: '#' },
  ];

  return (
    <div className="w-[609px] h-[180px] rounded-lg bg-white p-6  dark:border-strokedark dark:bg-boxdark">
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
      <div className="my-4 flex items-end justify-between">
        {infoArr?.map((e, i) => (
          <div
            key={i}
            className="bg-[#F5F6F7] flex flex-col rounded-lg py-2 gap-1 px-6"
          >
            <p className="text-lowemphasize">{e.title}</p>
            <span className=" text-primaryblue font-sans text-xl font-semibold leading-[24.38px] text-left">
              {e.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoCard;
