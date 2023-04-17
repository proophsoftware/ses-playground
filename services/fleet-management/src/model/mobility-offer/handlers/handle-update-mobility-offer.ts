import {Command} from "@app/messaging/command";
import {UpdateMobilityOffer} from "../commands/update-mobility-offer";
import {Event} from "@app/messaging/event";
import {MobilityOffer} from "../mobility-offer";
import {mobilityOfferUpdated} from "@app/fleet-management/model/mobility-offer/events/mobility-offer-updated";

export const handleUpdateMobilityOffer = async function* (state: MobilityOffer, command: Command<UpdateMobilityOffer>): AsyncGenerator<Event> {
  yield mobilityOfferUpdated(command.payload);
}
