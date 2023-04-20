import {DeepReadonly} from "json-schema-to-ts/lib/types/type-utils/readonly";
import {FromSchema} from "json-schema-to-ts";
import {makeQuery} from "@app/messaging/query";
import {Writable} from "json-schema-to-ts/lib/types/type-utils";
import definitions from "@app/fleet-management/read-model/types/definitions";
import {references} from "@app/fleet-management/read-model/types/references";

export const GetMobilityOfferSchema = {
  "type": "object",
  "properties": {
    "mobilityOfferId": {
      "type": "string"
    }
  },
  "required": [
    "mobilityOfferId"
  ],
  "additionalProperties": false,
  "$id": "/definitions/fleet-management/get-mobility-offer"
} as const;

export type GetMobilityOffer = DeepReadonly<FromSchema<
  typeof GetMobilityOfferSchema,
  {references: references}
>>;

export const getMobilityOffer = makeQuery<GetMobilityOffer>(
  'FleetManagement.GetMobilityOffer',
  GetMobilityOfferSchema as Writable<typeof GetMobilityOfferSchema>,
  definitions
);
