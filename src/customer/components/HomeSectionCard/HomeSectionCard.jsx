import React from "react";

const HomeSectionCard = () => {
  
  return (
    <div
      className="cursor-pointer flex flex-col items-center bg-white rounder-lg shadow-lg 
    overflow-hidden w-[15rem] mx-3"
    >
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src="https://down-vn.img.susercontent.com/file/sg-11134201-7qvdt-li6u1kjiwbrj1c_tn.webp"
          alt=""
        ></img>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">Áo polo</h3>
        <p className="mt-2 text-sm text-gray-500">
          Áo thun polo tay ngắn dáng rộng thời trang hè cho nam
        </p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
