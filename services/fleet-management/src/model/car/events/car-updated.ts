import {DeepReadonly} from "json-schema-to-ts/lib/types/type-utils/readonly";
import {FromSchema} from "json-schema-to-ts";
import {makeEvent} from "@app/messaging/event";
import {Writable} from "json-schema-to-ts/lib/types/type-utils";
import definitions from "@app/fleet-management/read-model/types/definitions";
import {references} from "@app/fleet-management/read-model/types/references";

export const CarUpdatedSchema = {
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
    "model"
  ],
  "additionalProperties": false,
  "$id": "/definitions/fleet-management/car/car-updated"
} as const;

export type CarUpdated = DeepReadonly<FromSchema<
  typeof CarUpdatedSchema,
  {references: references}
>>;

export const carUpdated = makeEvent<CarUpdated>(
  'FleetManagement.Car.CarUpdated',
  CarUpdatedSchema as Writable<typeof CarUpdatedSchema>,
  definitions
);
