import {DeepReadonly} from "json-schema-to-ts/lib/types/type-utils/readonly";
import {FromSchema} from "json-schema-to-ts";
import {makeEvent} from "@app/messaging/event";
import {Writable} from "json-schema-to-ts/lib/types/type-utils";
import definitions from "@app/fleet-management/read-model/types/definitions";
import {references} from "@app/fleet-management/read-model/types/references";

export const MobilityOfferDraftedSchema = {
  "type": "object",
  "properties": {
    "mobilityOfferId": {
      "type": "string"
    },
    "vehicleId": {
      "type": "string"
    },
    "pricePerMonth": {
      "type": "object",
      "properties": {
        "amount": {
          "type": "integer",
          "minimum": 100
        },
        "currency": {
          "enum": [
            "EUR"
          ]
        }
      },
      "required": [
        "amount",
        "currency"
      ],
      "additionalProperties": false
    },
    "availableFrom": {
      "type": "string",
      "format": "date"
    },
    "availableTo": {
      "type": "string",
      "format": "date"
    }
  },
  "required": [
    "mobilityOfferId",
    "vehicleId"
  ],
  "additionalProperties": false,
  "$id": "/definitions/fleet-management/mobility-offer/mobility-offer-drafted"
} as const;

export type MobilityOfferDrafted = DeepReadonly<FromSchema<
  typeof MobilityOfferDraftedSchema,
  {references: references}
>>;

export const mobilityOfferDrafted = makeEvent<MobilityOfferDrafted>(
  'FleetManagement.MobilityOffer.MobilityOfferDrafted',
  MobilityOfferDraftedSchema as Writable<typeof MobilityOfferDraftedSchema>,
  definitions
);
