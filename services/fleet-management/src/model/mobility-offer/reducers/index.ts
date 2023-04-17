import { applyMobilityOfferDrafted } from "./apply-mobility-offer-drafted";
import { applyMobilityOfferUpdated } from "./apply-mobility-offer-updated";
import { applyMobilityOfferPublished } from "./apply-mobility-offer-published";

const reducers = {
  "FleetManagement.MobilityOffer.MobilityOfferDrafted": applyMobilityOfferDrafted,
  "FleetManagement.MobilityOffer.MobilityOfferUpdated": applyMobilityOfferUpdated,
  "FleetManagement.MobilityOffer.MobilityOfferPublished": applyMobilityOfferPublished,
};

export default reducers;
