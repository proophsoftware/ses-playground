import {DeepReadonly} from "json-schema-to-ts/lib/types/type-utils/readonly";
import {FromSchema} from "json-schema-to-ts";
import {makeValueObject} from "@app/messaging/value-object";
import {Writable} from "json-schema-to-ts/lib/types/type-utils";
import definitions from "@app/fleet-management/read-model/types/definitions";
import {references} from "@app/fleet-management/read-model/types/references";
import {CarListSchema} from "./car-list.schema";

export type CarList = DeepReadonly<FromSchema<
  typeof CarListSchema,
  {references: references}
>>;

export const carList = makeValueObject<CarList>(
  'FleetManagement.Car.CarList',
  CarListSchema as Writable<typeof CarListSchema>,
  definitions,
  (data: Partial<CarList>): CarList => {
    // Initializer: upcast data if needed
    return data as CarList;
  }
);
