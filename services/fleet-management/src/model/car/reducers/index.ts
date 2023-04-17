import { applyIncompleteCarAdded } from "./apply-incomplete-car-added";
import { applyCarUpdated } from "./apply-car-updated";
import { applyCarAdded } from "./apply-car-added";
import { applyCarAddedToFleet } from "./apply-car-added-to-fleet";

const reducers = {
  "FleetManagement.Car.IncompleteCarAdded": applyIncompleteCarAdded,
  "FleetManagement.Car.CarUpdated": applyCarUpdated,
  "FleetManagement.Car.CarAdded": applyCarAdded,
  "FleetManagement.Car.CarAddedToFleet": applyCarAddedToFleet,
};

export default reducers;
