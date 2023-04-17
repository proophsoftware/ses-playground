export const CarListSchema = {
  "type": "array",
  "items": {
    "$ref": "/definitions/fleet-management/read-model/types/car/car"
  },
  "$id": "/definitions/fleet-management/read-model/types/car/car-list"
} as const;

