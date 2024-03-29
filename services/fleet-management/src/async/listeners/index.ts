import {
  EventListenerMap,
  makeEventDispatcher,
} from '@app/infrastructure/EventDispatcher';

const listeners: EventListenerMap = {};

const dispatch = makeEventDispatcher(listeners);

export default dispatch;
