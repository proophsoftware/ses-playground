import type {BodyParams} from '@app/http/types';
import {createProtectedHandler} from '@app/http/handlers';
import {httpError, httpResponse} from '@app/http/response';
import {ValidationError} from "ajv";
import {PublishMobilityOffer, publishMobilityOffer} from "@app/fleet-management/model/mobility-offer/commands/publish-mobility-offer";
import dispatch from "@app/fleet-management/command-bus/dispatch-publish-mobility-offer";

type Params = BodyParams<PublishMobilityOffer>;

export const main = createProtectedHandler<Params>(async (event, context) => {
try {
  if(!event.body) {
    return httpError("Request body is empty", {statusCode: 400});
  }

  const success = await dispatch(publishMobilityOffer(event.body, {userId: context.user?.id}));

  return httpResponse({
    success,
  })
} catch (e) {
  if(e instanceof ValidationError) {
    return httpError(e.errors, {statusCode: 400});
  }

  throw e;
}
});
