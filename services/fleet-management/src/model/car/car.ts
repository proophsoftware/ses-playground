export interface Car {
    vehicleId: string;
    completed?: boolean;
    productionYear?: number;
}

export const makeCar = (state: Partial<Car>): Car => {
  // upcast state if needed
  return state as Car;
}
