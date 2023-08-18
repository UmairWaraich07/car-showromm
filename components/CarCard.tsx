"use client";
import { CarProps } from "@/types";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import Image from "next/image";
import React, { useState } from "react";
import CustomButton from "./CustomButton";
import CarDetails from "./CarDetails";

interface CarCardProps {
  car: CarProps;
}
const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, drive, highway_mpg, make, model, transmission, year } = car;

  const carRent = calculateCarRent(city_mpg, year);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="flex self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="flex self-end text-[14px] font-medium">/day</span>
      </p>

      <div className="relative w-full h-40 py-3 object-contain">
        <Image
          src={generateCarImageUrl(car)}
          alt="Car model"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="relative w-full flex mt-2">
        <div className="flex w-full group-hover:invisible justify-between text-gray">
          <div className="flex justify-center items-center flex-col gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex justify-center items-center flex-col gap-2">
            <Image src="/tire.svg" width={20} height={20} alt="Tire" />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
          <div className="flex justify-center items-center flex-col gap-2">
            <Image src="/gas.svg" width={20} height={20} alt="Gas" />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            title="View more"
            containerStyles="w-full bg-primary-blue rounded-full py-[16px]"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetails
        car={car}
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
      />
    </div>
  );
};

export default CarCard;
