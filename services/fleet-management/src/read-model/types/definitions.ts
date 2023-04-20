import { CarListSchema } from "@app/fleet-management/read-model/types/car/car-list.schema";
import { CarSchema } from "@app/fleet-management/read-model/types/car/car.schema";
import { MobilityOfferSchema } from "@app/fleet-management/read-model/types/mobility-offer/mobility-offer.schema";
import { MobilityOfferListSchema } from "@app/fleet-management/read-model/types/mobility-offer/mobility-offer-list.schema";

const definitions = {
  '/definitions/fleet-management/read-model/types/car/car-list': CarListSchema,
  '/definitions/fleet-management/read-model/types/car/car': CarSchema,
  '/definitions/fleet-management/read-model/types/mobility-offer/mobility-offer': MobilityOfferSchema,
  '/definitions/fleet-management/read-model/types/mobility-offer/mobility-offer-list': MobilityOfferListSchema
};

export default definitions;
