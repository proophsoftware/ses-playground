
import {Command} from "@app/messaging/command";
import {AddCarToFleet} from "../commands/add-car-to-fleet";
import {Event} from "@app/messaging/event";
import {Car} from "../car";
import {incompleteCarAdded} from "@app/fleet-management/model/car/events/incomplete-car-added";

export const handleAddCarToFleet = async function* (state: Partial<Car>, command: Command<AddCarToFleet>): AsyncGenerator<Event> {
  if(!command.payload.productionYear) {
    yield incompleteCarAdded(command.payload);
  }

  return null;
}
