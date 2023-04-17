
import {Command} from "@app/messaging/command";
import {AddCarToFleet} from "../commands/add-car-to-fleet";
import {Event} from "@app/messaging/event";
import {Car} from "../car";
import {incompleteCarAdded} from "@app/fleet-management/model/car/events/incomplete-car-added";
import {carAdded} from "@app/fleet-management/model/car/events/car-added";
import {carAddedToFleet} from "@app/fleet-management/model/car/events/car-added-to-fleet";
import carRepository from "@app/fleet-management/model/car/repository";
import {AggregateRepository} from "@app/infrastructure/AggregateRepository";

export const handleAddCarToFleet = async function* (state: Partial<Car>, command: Command<AddCarToFleet>): AsyncGenerator<Event> {
  const {payload} = command;

  if(!payload.productionYear) {
    yield incompleteCarAdded(payload);
  } else {
    yield carAdded({...payload, productionYear: payload.productionYear});
    yield carAddedToFleet({vehicleId: payload.vehicleId});
  }
}
