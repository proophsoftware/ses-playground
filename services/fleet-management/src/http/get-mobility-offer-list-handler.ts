import {QueryParams} from "@app/http/types";
import {getMobilityOfferList, GetMobilityOfferList} from "../read-model/queries/get-mobility-offer-list";
import {createProtectedHandler} from "@app/http/handlers";
import {httpError, httpResponse} from "@app/http/response";
import {ValidationError} from "ajv";
import {NotFoundError} from "@app/messaging/error/not-found-error";
import {resolveGetMobilityOfferList} from "../read-model/resolvers/resolve-get-mobility-offer-list";

type Params = QueryParams<GetMobilityOfferList>;

export const main = createProtectedHandler<Params>(async (event, context) => {
  try {
    const queryParams = event.queryStringParameters || {};

    const result = await resolveGetMobilityOfferList(getMobilityOfferList(queryParams));

    return httpResponse(result)
  } catch (e) {
    if(e instanceof ValidationError) {
      return httpError(e.errors, {statusCode: 400});
    }

    if(e instanceof NotFoundError) {
      return httpError(e.message, {statusCode: 404});
    }

    throw e;
  }
});
