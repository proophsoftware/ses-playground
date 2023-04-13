import {AggregateRepository} from "@app/infrastructure/AggregateRepository";
import applyFunctions from "./reducers";
import {Car, makeCar} from "./car";
import {WRITE_MODEL_STREAM} from "@app/core/configuredEventStore";
import {getConfiguredMultiModelStore} from "@app/core/configuredMultiModelStore";
export const CAR_COLLECTION = 'car_collection';
export const AGGREGATE_TYPE = 'FleetManagement.Car';
export const AGGREGATE_IDENTIFIER = 'vehicleId';

const store = getConfiguredMultiModelStore();

const repository = new AggregateRepository<Car>(
  store,
  WRITE_MODEL_STREAM,
  CAR_COLLECTION,
  AGGREGATE_TYPE,
  AGGREGATE_IDENTIFIER,
  applyFunctions,
  makeCar
);

export default repository;
