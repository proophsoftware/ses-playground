import {Car} from "../car";
import {Event} from "@app/messaging/event";
import {CarUpdated} from "../events/car-updated";

export const applyCarUpdated = (state: Car, event: Event<CarUpdated>): Car => {
  if(!event.payload.productionYear) {
    delete state.productionYear;
  }

  return {
    ...state,
    ...event.payload
  }
}
