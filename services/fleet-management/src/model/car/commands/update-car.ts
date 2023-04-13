import {FromSchema} from "json-schema-to-ts";
import {Writable} from "json-schema-to-ts/lib/types/type-utils";
import {DeepReadonly} from "json-schema-to-ts/lib/types/type-utils/readonly";
import {makeCommand} from "@app/messaging/command";
import definitions from "@app/fleet-management/read-model/types/definitions";
import {references} from "@app/fleet-management/read-model/types/references";

export const UpdateCarSchema = {
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
  "$id": "/definitions/fleet-management/car/update-car"
} as const;

export type UpdateCar = DeepReadonly<FromSchema<
  typeof UpdateCarSchema,
  {references: references}
>>;

export const updateCar = makeCommand<UpdateCar>(
  'FleetManagement.UpdateCar',
  UpdateCarSchema as Writable<typeof UpdateCarSchema>,
  definitions
);
