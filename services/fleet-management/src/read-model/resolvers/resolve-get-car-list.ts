import {GetCarList} from "../queries/get-car-list";
import {CarList} from "../types/car/car-list";
import {Query} from "@app/messaging/query";
import {getConfiguredDocumentStore} from "@app/core/configuredDocumentStore";
import {car, Car} from "@app/fleet-management/read-model/types/car/car";
import {CAR_COLLECTION} from "@app/fleet-management/model/car/repository";
import {AnyFilter} from "@app/infrastructure/DocumentStore/Filter/AnyFilter";
import {asyncIteratorToArray} from "@app/infrastructure/helpers/async-iterator-to-array";
import {asyncMap} from "@app/infrastructure/helpers/async-map";

export const resolveGetCarList = async (query: Query<GetCarList>): Promise<CarList> => {
  const ds = getConfiguredDocumentStore();

  const cursor = await ds.findDocs<{state: Car}>(
    CAR_COLLECTION,
    new AnyFilter()
  );

  return asyncIteratorToArray(asyncMap(cursor, ([,d]) => car(d.state)));
}
