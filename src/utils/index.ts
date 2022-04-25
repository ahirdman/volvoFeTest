import { ICar } from '../interface';

const availableBodyTypes = (cars: ICar[]) => {
  const allTypes = cars.map((car: ICar) => car.bodyType);
  return Array.from(new Set(allTypes));
};

const filterCars = (filterParam: string, searchObject: ICar[]): ICar[] =>
  searchObject.filter((car: ICar) => car.bodyType === filterParam);

export { availableBodyTypes, filterCars };
