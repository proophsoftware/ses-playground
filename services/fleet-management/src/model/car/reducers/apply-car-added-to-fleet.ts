import {Car} from "../car";
import {Event} from "@app/messaging/event";
import {CarAddedToFleet} from "../events/car-added-to-fleet";

export const applyCarAddedToFleet = (state: Car, event: Event<CarAddedToFleet>): Car => {
  return {
    ...state,
    completed: true
  }
}
