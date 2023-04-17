import { CarListSchema } from "@app/fleet-management/read-model/types/car/car-list.schema";
import { CarSchema } from "@app/fleet-management/read-model/types/car/car.schema";

const definitions = {
  '/definitions/fleet-management/read-model/types/car/car-list': CarListSchema,
  '/definitions/fleet-management/read-model/types/car/car': CarSchema
};

export default definitions;
