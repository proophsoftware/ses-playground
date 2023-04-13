import {Command} from "@app/messaging/command";
import {handle} from "@app/infrastructure/commandHandling";
import {UpdateCar} from "@app/fleet-management/model/car/commands/update-car";
import {handleUpdateCar} from "@app/fleet-management/model/car/handlers/handle-update-car";
import carRepository from "@app/fleet-management/model/car/repository";

const dispatch = async (command: Command<UpdateCar>): Promise<boolean> => {
  return handle(command, handleUpdateCar, carRepository, false);
}

export default dispatch;
