import {FromSchema} from "json-schema-to-ts";
import {Writable} from "json-schema-to-ts/lib/types/type-utils";
import {DeepReadonly} from "json-schema-to-ts/lib/types/type-utils/readonly";
import {makeCommand} from "@app/messaging/command";
import definitions from "@app/fleet-management/read-model/types/definitions";
import {references} from "@app/fleet-management/read-model/types/references";

export const PublishMobilityOfferSchema = {
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
  "$id": "/definitions/fleet-management/mobility-offer/publish-mobility-offer"
} as const;

export type PublishMobilityOffer = DeepReadonly<FromSchema<
  typeof PublishMobilityOfferSchema,
  {references: references}
>>;

export const publishMobilityOffer = makeCommand<PublishMobilityOffer>(
  'FleetManagement.PublishMobilityOffer',
  PublishMobilityOfferSchema as Writable<typeof PublishMobilityOfferSchema>,
  definitions
);
