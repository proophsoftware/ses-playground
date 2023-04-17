import {Command} from "@app/messaging/command";
import {handle} from "@app/infrastructure/commandHandling";
import {DraftMobilityOffer} from "@app/fleet-management/model/mobility-offer/commands/draft-mobility-offer";
import {handleDraftMobilityOffer} from "@app/fleet-management/model/mobility-offer/handlers/handle-draft-mobility-offer";
import mobilityOfferRepository from "@app/fleet-management/model/mobility-offer/repository";
import carRepository from "@app/fleet-management/model/car/repository";

const dispatch = async (command: Command<DraftMobilityOffer>): Promise<boolean> => {
  const [car] = await carRepository.loadState(command.payload.vehicleId);

  return handle(command, handleDraftMobilityOffer, mobilityOfferRepository, true, {car});
}

export default dispatch;
