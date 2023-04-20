import { CarListSchema } from "@app/fleet-management/read-model/types/car/car-list.schema";
import { CarSchema } from "@app/fleet-management/read-model/types/car/car.schema";
import { MobilityOfferSchema } from "@app/fleet-management/read-model/types/mobility-offer/mobility-offer.schema";
import { MobilityOfferListSchema } from "@app/fleet-management/read-model/types/mobility-offer/mobility-offer-list.schema";

export type references = [
  typeof CarListSchema,
  typeof CarSchema,
  typeof MobilityOfferSchema,
  typeof MobilityOfferListSchema
];
