import {DeepReadonly} from "json-schema-to-ts/lib/types/type-utils/readonly";
import {FromSchema} from "json-schema-to-ts";
import {makeEvent} from "@app/messaging/event";
import {Writable} from "json-schema-to-ts/lib/types/type-utils";
import definitions from "@app/fleet-management/read-model/types/definitions";
import {references} from "@app/fleet-management/read-model/types/references";

export const MobilityOfferPublishedSchema = {
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
  "$id": "/definitions/fleet-management/mobility-offer/mobility-offer-published"
} as const;

export type MobilityOfferPublished = DeepReadonly<FromSchema<
  typeof MobilityOfferPublishedSchema,
  {references: references}
>>;

export const mobilityOfferPublished = makeEvent<MobilityOfferPublished>(
  'FleetManagement.MobilityOffer.MobilityOfferPublished',
  MobilityOfferPublishedSchema as Writable<typeof MobilityOfferPublishedSchema>,
  definitions
);
