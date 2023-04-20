import {GetMobilityOffer} from "../queries/get-mobility-offer";
import {MobilityOffer, mobilityOffer} from "../types/mobility-offer/mobility-offer";
import {Query} from "@app/messaging/query";
import {getConfiguredDocumentStore} from "@app/core/configuredDocumentStore";
import {MOBILITYOFFER_COLLECTION} from "@app/fleet-management/model/mobility-offer/repository";
import {NotFoundError} from "@app/messaging/error/not-found-error";

export const resolveGetMobilityOffer = async (query: Query<GetMobilityOffer>): Promise<MobilityOffer> => {
  const ds = getConfiguredDocumentStore();

  const doc = await ds.getDoc<{state: MobilityOffer}>(MOBILITYOFFER_COLLECTION, query.payload.mobilityOfferId);

  if(!doc) {
    throw new NotFoundError(`Mobility offer with id ${query.payload.mobilityOfferId} not found`);
  }

  return mobilityOffer(doc.state);
}
