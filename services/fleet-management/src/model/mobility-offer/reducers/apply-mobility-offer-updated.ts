import {MobilityOffer} from "../mobility-offer";
import {Event} from "@app/messaging/event";
import {MobilityOfferUpdated} from "../events/mobility-offer-updated";

export const applyMobilityOfferUpdated = (state: MobilityOffer, event: Event<MobilityOfferUpdated>): MobilityOffer => {
  return {
    ...state,
    ...event.payload
  }
}
