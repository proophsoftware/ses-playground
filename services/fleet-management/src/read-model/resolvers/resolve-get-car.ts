import {GetCar} from "../queries/get-car";
import {Car, car} from "../types/car/car";
import {Query} from "@app/messaging/query";
import {getConfiguredDocumentStore} from "@app/core/configuredDocumentStore";
import {CAR_COLLECTION} from "@app/fleet-management/model/car/repository";
import {NotFoundError} from "@app/messaging/error/not-found-error";

export const resolveGetCar = async (query: Query<GetCar>): Promise<Car> => {
  const ds = getConfiguredDocumentStore();

  const doc = await ds.getDoc<{state: Car}>(CAR_COLLECTION, query.payload.vehicleId);

  if(!doc) {
    throw new NotFoundError(`Car with id: ${query.payload.vehicleId} not found!`);
  }

  return car(doc.state);
}
