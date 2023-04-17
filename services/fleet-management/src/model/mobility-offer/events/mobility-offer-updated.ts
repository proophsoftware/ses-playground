import {DeepReadonly} from "json-schema-to-ts/lib/types/type-utils/readonly";
import {FromSchema} from "json-schema-to-ts";
import {makeEvent} from "@app/messaging/event";
import {Writable} from "json-schema-to-ts/lib/types/type-utils";
import definitions from "@app/fleet-management/read-model/types/definitions";
import {references} from "@app/fleet-management/read-model/types/references";

export const MobilityOfferUpdatedSchema = {
  "type": "object",
  "properties": {
    "mobilityOfferId": {
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
    "mobilityOfferId"
  ],
  "additionalProperties": false,
  "$id": "/definitions/fleet-management/mobility-offer/mobility-offer-updated"
} as const;

export type MobilityOfferUpdated = DeepReadonly<FromSchema<
  typeof MobilityOfferUpdatedSchema,
  {references: references}
>>;

export const mobilityOfferUpdated = makeEvent<MobilityOfferUpdated>(
  'FleetManagement.MobilityOffer.MobilityOfferUpdated',
  MobilityOfferUpdatedSchema as Writable<typeof MobilityOfferUpdatedSchema>,
  definitions
);
