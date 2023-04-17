import {Car} from "../car";
import {Event} from "@app/messaging/event";
import {CarAdded} from "../events/car-added";

export const applyCarAdded = (state: Car, event: Event<CarAdded>): Car => {
  return {
    ...state,
    ...event.payload
  }
}
