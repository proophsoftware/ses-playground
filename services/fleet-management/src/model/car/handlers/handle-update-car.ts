import {Command} from "@app/messaging/command";
import {UpdateCar} from "../commands/update-car";
import {Event} from "@app/messaging/event";
import {Car} from "../car";
import {carUpdated} from "@app/fleet-management/model/car/events/car-updated";
import {carAddedToFleet} from "@app/fleet-management/model/car/events/car-added-to-fleet";

export const handleUpdateCar = async function* (state: Car, command: Command<UpdateCar>): AsyncGenerator<Event> {
  yield carUpdated(command.payload);

  if(command.payload.productionYear) {
    yield carAddedToFleet({vehicleId: command.payload.vehicleId});
  }
}
