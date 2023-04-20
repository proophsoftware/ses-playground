import {DeepReadonly} from "json-schema-to-ts/lib/types/type-utils/readonly";
import {FromSchema} from "json-schema-to-ts";
import {makeValueObject} from "@app/messaging/value-object";
import {Writable} from "json-schema-to-ts/lib/types/type-utils";
import definitions from "@app/fleet-management/read-model/types/definitions";
import {references} from "@app/fleet-management/read-model/types/references";
import {MobilityOfferSchema} from "./mobility-offer.schema";

export type MobilityOffer = DeepReadonly<FromSchema<
  typeof MobilityOfferSchema,
  {references: references}
>>;

export const mobilityOffer = makeValueObject<MobilityOffer>(
  'FleetManagement.MobilityOffer.MobilityOffer',
  MobilityOfferSchema as Writable<typeof MobilityOfferSchema>,
  definitions,
  (data: Partial<MobilityOffer>): MobilityOffer => {
    // Initializer: upcast data if needed
    return data as MobilityOffer;
  }
);
