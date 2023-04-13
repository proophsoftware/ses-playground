import {Command} from "@app/messaging/command";
import {handle} from "@app/infrastructure/commandHandling";
import {AddCarToFleet} from "@app/fleet-management/model/car/commands/add-car-to-fleet";
import {handleAddCarToFleet} from "@app/fleet-management/model/car/handlers/handle-add-car-to-fleet";
import carRepository from "@app/fleet-management/model/car/repository";

const dispatch = async (command: Command<AddCarToFleet>): Promise<boolean> => {
  return handle(command, handleAddCarToFleet, carRepository, true);
}

export default dispatch;
