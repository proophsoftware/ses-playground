import {Car} from "../car";
import {Event} from "@app/messaging/event";
import {CarUpdated} from "../events/car-updated";

export const applyCarUpdated = (state: Car, event: Event<CarUpdated>): Car => {
  return {
    ...state,
    ...event.payload
  }
}
