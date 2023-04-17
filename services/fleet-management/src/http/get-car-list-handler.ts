import {QueryParams} from "@app/http/types";
import {getCarList, GetCarList} from "../read-model/queries/get-car-list";
import {createProtectedHandler} from "@app/http/handlers";
import {httpError, httpResponse} from "@app/http/response";
import {ValidationError} from "ajv";
import {NotFoundError} from "@app/messaging/error/not-found-error";
import {resolveGetCarList} from "../read-model/resolvers/resolve-get-car-list";

type Params = QueryParams<GetCarList>;

export const main = createProtectedHandler<Params>(async (event, context) => {
  try {
    const queryParams = event.queryStringParameters || {};

    const result = await resolveGetCarList(getCarList(queryParams));

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
