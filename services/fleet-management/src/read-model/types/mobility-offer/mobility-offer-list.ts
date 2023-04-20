import {DeepReadonly} from "json-schema-to-ts/lib/types/type-utils/readonly";
import {FromSchema} from "json-schema-to-ts";
import {makeValueObject} from "@app/messaging/value-object";
import {Writable} from "json-schema-to-ts/lib/types/type-utils";
import definitions from "@app/fleet-management/read-model/types/definitions";
import {references} from "@app/fleet-management/read-model/types/references";
import {MobilityOfferListSchema} from "./mobility-offer-list.schema";

export type MobilityOfferList = DeepReadonly<FromSchema<
  typeof MobilityOfferListSchema,
  {references: references}
>>;

export const mobilityOfferList = makeValueObject<MobilityOfferList>(
  'FleetManagement.MobilityOffer.MobilityOfferList',
  MobilityOfferListSchema as Writable<typeof MobilityOfferListSchema>,
  definitions,
  (data: Partial<MobilityOfferList>): MobilityOfferList => {
    // Initializer: upcast data if needed
    return data as MobilityOfferList;
  }
);
