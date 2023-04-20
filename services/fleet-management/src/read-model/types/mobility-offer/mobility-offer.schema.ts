export const MobilityOfferSchema = {
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
    },
    "status": {
      "enum": [
        "draft",
        "published"
      ]
    }
  },
  "required": [
    "mobilityOfferId",
    "vehicleId",
    "status"
  ],
  "additionalProperties": false,
  "$id": "/definitions/fleet-management/read-model/types/mobility-offer/mobility-offer"
} as const;

