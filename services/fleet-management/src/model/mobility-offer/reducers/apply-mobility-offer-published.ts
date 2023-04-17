import {MobilityOffer, MobilityOfferStatus} from "../mobility-offer";
import {Event} from "@app/messaging/event";
import {MobilityOfferPublished} from "../events/mobility-offer-published";

export const applyMobilityOfferPublished = (state: MobilityOffer, event: Event<MobilityOfferPublished>): MobilityOffer => {
  return {
    ...state,
    status: MobilityOfferStatus.published
  }
}
