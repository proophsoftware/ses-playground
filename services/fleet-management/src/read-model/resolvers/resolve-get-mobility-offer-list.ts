import {GetMobilityOfferList} from "../queries/get-mobility-offer-list";
import {MobilityOfferList, mobilityOfferList} from "../types/mobility-offer/mobility-offer-list";
import {Query} from "@app/messaging/query";
import {getConfiguredDocumentStore} from "@app/core/configuredDocumentStore";
import {AnyFilter} from "@app/infrastructure/DocumentStore/Filter/AnyFilter";
import {asyncIteratorToArray} from "@app/infrastructure/helpers/async-iterator-to-array";
import {asyncMap} from "@app/infrastructure/helpers/async-map";
import {MOBILITYOFFER_COLLECTION} from "@app/fleet-management/model/mobility-offer/repository";
import {mobilityOffer, MobilityOffer} from "@app/fleet-management/read-model/types/mobility-offer/mobility-offer";

export const resolveGetMobilityOfferList = async (query: Query<GetMobilityOfferList>): Promise<MobilityOfferList> => {
  const ds = getConfiguredDocumentStore();

  const cursor = await ds.findDocs<{state: MobilityOffer}>(
    MOBILITYOFFER_COLLECTION,
    new AnyFilter()
  );

  return asyncIteratorToArray(asyncMap(cursor, ([,d]) => mobilityOffer(d.state)));
}
