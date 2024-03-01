import React from "react";
import Image from "next/image";
import { HiDotsVertical } from "react-icons/hi";

const Notification = ({ image, time, username}) => {
  return (
    <div className="flex justify-between items-center gap-4 bg-white shadow-md my-2 p-2 rounded-md">
      <div>
        <Image
          src={image}
          width={65}
          height={65}
          alt="story"
          className="rounded-full"
        />
      </div>
      <div>
        <h4 className="font-semibold text-md">{username} <span className="font-normal">posted</span></h4>
        <p className="text-[14px]">some text that will break on 2 lines</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <p>{time}</p>
        <HiDotsVertical />
      </div>
    </div>
  );
};

export default Notification;
