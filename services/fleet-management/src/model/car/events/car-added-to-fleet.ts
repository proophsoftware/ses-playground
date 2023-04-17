import {DeepReadonly} from "json-schema-to-ts/lib/types/type-utils/readonly";
import {FromSchema} from "json-schema-to-ts";
import {makeEvent} from "@app/messaging/event";
import {Writable} from "json-schema-to-ts/lib/types/type-utils";
import definitions from "@app/fleet-management/read-model/types/definitions";
import {references} from "@app/fleet-management/read-model/types/references";

export const CarAddedToFleetSchema = {
  "type": "object",
  "properties": {
    "vehicleId": {
      "type": "string"
    }
  },
  "required": [
    "vehicleId"
  ],
  "additionalProperties": false,
  "$id": "/definitions/fleet-management/car/car-added-to-fleet"
} as const;

export type CarAddedToFleet = DeepReadonly<FromSchema<
  typeof CarAddedToFleetSchema,
  {references: references}
>>;

export const carAddedToFleet = makeEvent<CarAddedToFleet>(
  'FleetManagement.Car.CarAddedToFleet',
  CarAddedToFleetSchema as Writable<typeof CarAddedToFleetSchema>,
  definitions
);
