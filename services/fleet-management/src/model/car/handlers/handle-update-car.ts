import {Command} from "@app/messaging/command";
import {UpdateCar} from "../commands/update-car";
import {Event} from "@app/messaging/event";
import {Car} from "../car";
import {carUpdated} from "@app/fleet-management/model/car/events/car-updated";

export const handleUpdateCar = async function* (state: Car, command: Command<UpdateCar>): AsyncGenerator<Event> {
  if(!command.payload.productionYear) {
    yield carUpdated(command.payload);
  }

  return null;
}
