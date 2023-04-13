import {Car} from "../car";
import {Event} from "@app/messaging/event";
import {IncompleteCarAdded} from "../events/incomplete-car-added";

export const applyIncompleteCarAdded = (state: Car, event: Event<IncompleteCarAdded>): Car => {
  return {
    ...state,
    ...event.payload
  }
}
