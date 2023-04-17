export interface PricePerMonth {
  amount: number;
  currency: 'EUR'
}

export enum MobilityOfferStatus {
  draft = "draft",
  published = "published"
}

export interface MobilityOffer {
    mobilityOfferId: string;
    vehicleId: string;
    pricePerMonth?: PricePerMonth;
    availableFrom?: string;
    availableTo?: string;
    status: MobilityOfferStatus;
}

export const makeMobilityOffer = (state: Partial<MobilityOffer>): MobilityOffer => {
  // upcast state if needed
  return state as MobilityOffer;
}
