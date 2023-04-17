import {DeepReadonly} from "json-schema-to-ts/lib/types/type-utils/readonly";
import {FromSchema} from "json-schema-to-ts";
import {makeValueObject} from "@app/messaging/value-object";
import {Writable} from "json-schema-to-ts/lib/types/type-utils";
import definitions from "@app/fleet-management/read-model/types/definitions";
import {references} from "@app/fleet-management/read-model/types/references";
import {CarSchema} from "./car.schema";

export type Car = DeepReadonly<FromSchema<
  typeof CarSchema,
  {references: references}
>>;

export const car = makeValueObject<Car>(
  'FleetManagement.Car.Car',
  CarSchema as Writable<typeof CarSchema>,
  definitions,
  (data: Partial<Car>): Car => {
    // Initializer: upcast data if needed
    return data as Car;
  }
);
