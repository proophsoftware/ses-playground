import type {BodyParams} from '@app/http/types';
import {createProtectedHandler} from '@app/http/handlers';
import {httpError, httpResponse} from '@app/http/response';
import {ValidationError} from "ajv";
import {AddCarToFleet, addCarToFleet} from "@app/fleet-management/model/car/commands/add-car-to-fleet";
import dispatch from "@app/fleet-management/command-bus/dispatch-add-car-to-fleet";

type Params = BodyParams<AddCarToFleet>;

export const main = createProtectedHandler<Params>(async (event, context) => {
try {
  if(!event.body) {
    return httpError("Request body is empty", {statusCode: 400});
  }

  const success = await dispatch(addCarToFleet(event.body, {userId: context.user?.id}));

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
