import {DeepReadonly} from "json-schema-to-ts/lib/types/type-utils/readonly";
import {FromSchema} from "json-schema-to-ts";
import {makeQuery} from "@app/messaging/query";
import {Writable} from "json-schema-to-ts/lib/types/type-utils";
import definitions from "@app/fleet-management/read-model/types/definitions";
import {references} from "@app/fleet-management/read-model/types/references";

export const GetMobilityOfferListSchema = {
  "type": "object",
  "properties": {},
  "required": [],
  "additionalProperties": false,
  "$id": "/definitions/fleet-management/get-mobility-offer-list"
} as const;

export type GetMobilityOfferList = DeepReadonly<FromSchema<
  typeof GetMobilityOfferListSchema,
  {references: references}
>>;

export const getMobilityOfferList = makeQuery<GetMobilityOfferList>(
  'FleetManagement.GetMobilityOfferList',
  GetMobilityOfferListSchema as Writable<typeof GetMobilityOfferListSchema>,
  definitions
);
