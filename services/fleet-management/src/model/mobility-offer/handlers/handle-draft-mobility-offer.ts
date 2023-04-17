import {Command} from "@app/messaging/command";
import {DraftMobilityOffer} from "../commands/draft-mobility-offer";
import {Event} from "@app/messaging/event";
import {MobilityOffer} from "../mobility-offer";
import {Car} from "@app/fleet-management/model/car/car";
import {mobilityOfferDrafted} from "@app/fleet-management/model/mobility-offer/events/mobility-offer-drafted";

interface Dependencies {
  car: Car
}

export const handleDraftMobilityOffer = async function* (state: Partial<MobilityOffer>, command: Command<DraftMobilityOffer>, deps: Dependencies): AsyncGenerator<Event> {
  if(!deps.car) {
    throw new Error(`Car with id ${command.payload.vehicleId} does not exist`);
  }

  yield mobilityOfferDrafted(command.payload);
}
