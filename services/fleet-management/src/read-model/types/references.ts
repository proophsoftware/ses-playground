import { CarListSchema } from "@app/fleet-management/read-model/types/car/car-list.schema";
import { CarSchema } from "@app/fleet-management/read-model/types/car/car.schema";

export type references = [
  typeof CarListSchema,
  typeof CarSchema
];
