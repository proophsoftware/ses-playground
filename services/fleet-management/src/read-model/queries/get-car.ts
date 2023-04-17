import {DeepReadonly} from "json-schema-to-ts/lib/types/type-utils/readonly";
import {FromSchema} from "json-schema-to-ts";
import {makeQuery} from "@app/messaging/query";
import {Writable} from "json-schema-to-ts/lib/types/type-utils";
import definitions from "@app/fleet-management/read-model/types/definitions";
import {references} from "@app/fleet-management/read-model/types/references";

export const GetCarSchema = {
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
  "$id": "/definitions/fleet-management/get-car"
} as const;

export type GetCar = DeepReadonly<FromSchema<
  typeof GetCarSchema,
  {references: references}
>>;

export const getCar = makeQuery<GetCar>(
  'FleetManagement.GetCar',
  GetCarSchema as Writable<typeof GetCarSchema>,
  definitions
);
