import {Command} from "@app/messaging/command";
import {handle} from "@app/infrastructure/commandHandling";
import {PublishMobilityOffer} from "@app/fleet-management/model/mobility-offer/commands/publish-mobility-offer";
import {handlePublishMobilityOffer} from "@app/fleet-management/model/mobility-offer/handlers/handle-publish-mobility-offer";
import mobilityOfferRepository from "@app/fleet-management/model/mobility-offer/repository";
import carRepository from "@app/fleet-management/model/car/repository";

const dispatch = async (command: Command<PublishMobilityOffer>): Promise<boolean> => {
  const [mobilityOffer] = await mobilityOfferRepository.loadState(command.payload.mobilityOfferId);
  const [car] = await carRepository.loadState(mobilityOffer.vehicleId);

  return handle(command, handlePublishMobilityOffer, mobilityOfferRepository, false, {car});
}

export default dispatch;
