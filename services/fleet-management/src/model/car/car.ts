export interface Car {
    vehicleId: string;
}

export const makeCar = (state: Partial<Car>): Car => {
  // upcast state if needed
  return state as Car;
}
