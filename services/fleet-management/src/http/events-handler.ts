import type { BodyParams } from '@app/http/types';
import { createProtectedHandler } from '@app/http/handlers';
import { httpError, httpResponse } from '@app/http/response';
import { ValidationError } from 'ajv';
import { Event } from '@app/messaging/event';
import validate from '@app/infrastructure/GenericEventValidator';
import dispatch from '@app/fleet-management/async/listeners';

type Params = BodyParams<Record<keyof Event, any>>;

export const main = createProtectedHandler<Params>(async (event, context) => {
  try {
    if (!event.body) {
      return httpError('Request body is empty', { statusCode: 400 });
    }

    validate(event.body);

    const rawApplicationEvent = {
      ...event.body,
      meta: {
        userId: context.user.id,
        ...event.body.meta,
      },
    };

    const success = await dispatch(rawApplicationEvent);

    return httpResponse({
      success,
    });
  } catch (e) {
    if (e instanceof ValidationError) {
      return httpError(e.errors, { statusCode: 400 });
    }

    throw e;
  }
});
