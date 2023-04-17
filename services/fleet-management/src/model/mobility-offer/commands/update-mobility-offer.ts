import {FromSchema} from "json-schema-to-ts";
import {Writable} from "json-schema-to-ts/lib/types/type-utils";
import {DeepReadonly} from "json-schema-to-ts/lib/types/type-utils/readonly";
import {makeCommand} from "@app/messaging/command";
import definitions from "@app/fleet-management/read-model/types/definitions";
import {references} from "@app/fleet-management/read-model/types/references";

export const UpdateMobilityOfferSchema = {
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
  "$id": "/definitions/fleet-management/mobility-offer/update-mobility-offer"
} as const;

export type UpdateMobilityOffer = DeepReadonly<FromSchema<
  typeof UpdateMobilityOfferSchema,
  {references: references}
>>;

export const updateMobilityOffer = makeCommand<UpdateMobilityOffer>(
  'FleetManagement.UpdateMobilityOffer',
  UpdateMobilityOfferSchema as Writable<typeof UpdateMobilityOfferSchema>,
  definitions
);
