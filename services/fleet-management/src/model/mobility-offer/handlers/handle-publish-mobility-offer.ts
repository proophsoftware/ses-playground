import {Command} from "@app/messaging/command";
import {PublishMobilityOffer} from "../commands/publish-mobility-offer";
import {Event} from "@app/messaging/event";
import {MobilityOffer} from "../mobility-offer";
import {Car} from "@app/fleet-management/model/car/car";
import {mobilityOfferPublished} from "@app/fleet-management/model/mobility-offer/events/mobility-offer-published";

interface Dependencies {
  car: Car
}

export const handlePublishMobilityOffer = async function* (state: MobilityOffer, command: Command<PublishMobilityOffer>, deps: Dependencies): AsyncGenerator<Event> {
  if(!deps.car.completed) {
    throw new Error(`Car with id ${deps.car.vehicleId} is not completed. Mobility offer ${state.mobilityOfferId} cannot be published.`);
  }

  if(!state.pricePerMonth) {
    throw new Error(`Mobility offer ${state.mobilityOfferId} cannot be published. No price per month given.`);
  }

  if(!state.availableFrom) {
    throw new Error(`Mobility offer ${state.mobilityOfferId} cannot be published. No availability given.`);
  }

  if(!state.availableTo) {
    throw new Error(`Mobility offer ${state.mobilityOfferId} cannot be published. No availability given.`);
  }

  yield mobilityOfferPublished(command.payload);
}
