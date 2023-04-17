import {MobilityOffer, MobilityOfferStatus} from "../mobility-offer";
import {Event} from "@app/messaging/event";
import {MobilityOfferDrafted} from "../events/mobility-offer-drafted";

export const applyMobilityOfferDrafted = (state: MobilityOffer, event: Event<MobilityOfferDrafted>): MobilityOffer => {
  return {
    ...state,
    ...event.payload,
    status: MobilityOfferStatus.draft
  }
}
