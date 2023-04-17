import {Command} from "@app/messaging/command";
import {handle} from "@app/infrastructure/commandHandling";
import {UpdateMobilityOffer} from "@app/fleet-management/model/mobility-offer/commands/update-mobility-offer";
import {handleUpdateMobilityOffer} from "@app/fleet-management/model/mobility-offer/handlers/handle-update-mobility-offer";
import mobilityOfferRepository from "@app/fleet-management/model/mobility-offer/repository";

const dispatch = async (command: Command<UpdateMobilityOffer>): Promise<boolean> => {
  return handle(command, handleUpdateMobilityOffer, mobilityOfferRepository, false);
}

export default dispatch;
