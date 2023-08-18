import { CarProps, FilterProps } from "@/types";
import { title } from "process";

export const fetchCars = async (filters: FilterProps) => {
  const { manufacturer, model, limit, fuel, year } = filters;
  const headers = {
    "X-Api-Key": "ozElFptBVUoP44h3NYzqbw==k7uq3McvWEmCEmXE",
  };

  const response = await fetch(
    `https://api.api-ninjas.com/v1/cars?limit=${limit}&model=${model}&make=${manufacturer}&year=${year}&fuel_type=${fuel}`,
    {
      headers: headers,
    }
  );
  const data = await response.json();
  return data;
};

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");

  const { make, year, model } = car;

  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};

export const updateSearchParams = (title: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(title, value);

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};
