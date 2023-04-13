import { applyIncompleteCarAdded } from "./apply-incomplete-car-added";
import { applyCarUpdated } from "./apply-car-updated";

const reducers = {
  "FleetManagement.Car.IncompleteCarAdded": applyIncompleteCarAdded,
  "FleetManagement.Car.CarUpdated": applyCarUpdated,
};

export default reducers;
