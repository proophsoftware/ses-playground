import {DeepReadonly} from "json-schema-to-ts/lib/types/type-utils/readonly";
import {FromSchema} from "json-schema-to-ts";
import {makeEvent} from "@app/messaging/event";
import {Writable} from "json-schema-to-ts/lib/types/type-utils";
import definitions from "@app/fleet-management/read-model/types/definitions";
import {references} from "@app/fleet-management/read-model/types/references";

export const CarAddedSchema = {
  "type": "object",
  "properties": {
    "vehicleId": {
      "type": "string"
    },
    "brand": {
      "type": "string"
    },
    "model": {
      "type": "string"
    },
    "productionYear": {
      "type": "integer",
      "minimum": 1900
    }
  },
  "required": [
    "vehicleId",
    "brand",
    "model",
    "productionYear"
  ],
  "additionalProperties": false,
  "$id": "/definitions/fleet-management/car/car-added"
} as const;

export type CarAdded = DeepReadonly<FromSchema<
  typeof CarAddedSchema,
  {references: references}
>>;

export const carAdded = makeEvent<CarAdded>(
  'FleetManagement.Car.CarAdded',
  CarAddedSchema as Writable<typeof CarAddedSchema>,
  definitions
);
