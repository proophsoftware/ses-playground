import {AggregateRepository} from "@app/infrastructure/AggregateRepository";
import applyFunctions from "./reducers";
import {MobilityOffer, makeMobilityOffer} from "./mobility-offer";
import {WRITE_MODEL_STREAM} from "@app/core/configuredEventStore";
import {getConfiguredMultiModelStore} from "@app/core/configuredMultiModelStore";
export const MOBILITYOFFER_COLLECTION = 'mobilityoffer_collection';
export const AGGREGATE_TYPE = 'FleetManagement.MobilityOffer';
export const AGGREGATE_IDENTIFIER = 'mobilityOfferId';

const store = getConfiguredMultiModelStore();

const repository = new AggregateRepository<MobilityOffer>(
  store,
  WRITE_MODEL_STREAM,
  MOBILITYOFFER_COLLECTION,
  AGGREGATE_TYPE,
  AGGREGATE_IDENTIFIER,
  applyFunctions,
  makeMobilityOffer
);

export default repository;
