import {DeepReadonly} from "json-schema-to-ts/lib/types/type-utils/readonly";
import {FromSchema} from "json-schema-to-ts";
import {makeQuery} from "@app/messaging/query";
import {Writable} from "json-schema-to-ts/lib/types/type-utils";
import definitions from "@app/fleet-management/read-model/types/definitions";
import {references} from "@app/fleet-management/read-model/types/references";

export const GetCarListSchema = {
  "type": "object",
  "properties": {},
  "required": [],
  "additionalProperties": false,
  "$id": "/definitions/fleet-management/get-car-list"
} as const;

export type GetCarList = DeepReadonly<FromSchema<
  typeof GetCarListSchema,
  {references: references}
>>;

export const getCarList = makeQuery<GetCarList>(
  'FleetManagement.GetCarList',
  GetCarListSchema as Writable<typeof GetCarListSchema>,
  definitions
);
