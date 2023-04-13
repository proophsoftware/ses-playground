import type { Serverless } from 'serverless/aws';
import { baseServerlessConfig } from '../../serverless.base';

const serverlessConfig: Partial<Serverless> = {
  ...baseServerlessConfig,
  service: 'FleetManagement',
  custom: {
    ...baseServerlessConfig.custom,
    'serverless-offline': {
      lambdaPort: 3005,
      httpPort: 3006,
    },
  },
  functions: {
    'consume-events': {
      handler: 'src/http/events-handler.main',
      events: [
        {
          http: {
            method: 'post',
            path: '/fleet-management/api/messages/events/consume',
            cors: true,
          },
        },
      ],
    },
    'add-car-to-fleet': {
      handler: 'src/http/add-car-to-fleet-handler.main',
      events: [{
        http: {
          method: 'post',
          path: '/fleet-management/api/messages/add-car-to-fleet',
          cors: true
        }
      }]
    },
    'update-car': {
      handler: 'src/http/update-car-handler.main',
      events: [{
        http: {
          method: 'post',
          path: '/fleet-management/api/messages/update-car',
          cors: true
        }
      }]
    }
  },
};

module.exports = serverlessConfig;
