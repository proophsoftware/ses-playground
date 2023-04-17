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
    },
    'get-car-list': {
      handler: 'src/http/get-car-list-handler.main',
      events: [{
        http: {
          method: 'get',
          path: '/fleet-management/api/messages/get-car-list',
          cors: true
        }
      }]
    },
    'get-car': {
      handler: 'src/http/get-car-handler.main',
      events: [{
        http: {
          method: 'get',
          path: '/fleet-management/api/messages/get-car',
          cors: true
        }
      }]
    },
    'draft-mobility-offer': {
      handler: 'src/http/draft-mobility-offer-handler.main',
      events: [{
        http: {
          method: 'post',
          path: '/fleet-management/api/messages/draft-mobility-offer',
          cors: true
        }
      }]
    },
    'update-mobility-offer': {
      handler: 'src/http/update-mobility-offer-handler.main',
      events: [{
        http: {
          method: 'post',
          path: '/fleet-management/api/messages/update-mobility-offer',
          cors: true
        }
      }]
    },
    'publish-mobility-offer': {
      handler: 'src/http/publish-mobility-offer-handler.main',
      events: [{
        http: {
          method: 'post',
          path: '/fleet-management/api/messages/publish-mobility-offer',
          cors: true
        }
      }]
    }
  },
};

module.exports = serverlessConfig;
