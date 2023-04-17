import { applyMobilityOfferDrafted } from "./apply-mobility-offer-drafted";
import { applyMobilityOfferUpdated } from "./apply-mobility-offer-updated";

const reducers = {
  "FleetManagement.MobilityOffer.MobilityOfferDrafted": applyMobilityOfferDrafted,
  "FleetManagement.MobilityOffer.MobilityOfferUpdated": applyMobilityOfferUpdated,
};

export default reducers;
