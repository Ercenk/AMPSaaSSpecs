/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ServiceClientOptions } from "@azure/ms-rest-js";
import * as msRest from "@azure/ms-rest-js";

/**
 * An interface representing SubscriptionSummary.
 */
export interface SubscriptionSummary {
  id?: string;
  subscriptionName?: string;
  offerId?: string;
  planId?: string;
  quantity?: number;
}

/**
 * An interface representing ErrorError.
 */
export interface ErrorError {
  code?: string;
  message?: string;
}

/**
 * An interface representing ErrorModel.
 */
export interface ErrorModel {
  error?: ErrorError;
}

/**
 * An interface representing AadIdentifier.
 */
export interface AadIdentifier {
  emailId?: string;
  objectId?: string;
  tenantId?: string;
}

/**
 * An interface representing SubscriptionTerm.
 */
export interface SubscriptionTerm {
  startDate?: Date;
  endDate?: Date;
}

/**
 * An interface representing Subscription.
 */
export interface Subscription {
  id?: string;
  name?: string;
  publisherId?: string;
  offerId?: string;
  planId?: string;
  quantity?: number;
  /**
   * Dry Run indicates all transactions run as Test-Mode in the commerce stack. Possible values
   * include: 'None', 'DryRun'
   */
  sessionMode?: SessionMode;
  /**
   * true - the customer subscription is currently in free trial, false - the customer subscription
   * is not currently in free trial.(optional field - default false)
   */
  isFreeTrial?: boolean;
  /**
   * Indicating whether the current subscription is a test asset.
   */
  isTest?: boolean;
  /**
   * Possible Values are None, Csp (Csp sandbox purchase). Possible values include: 'None', 'Csp'
   */
  sandboxType?: SandboxType;
  /**
   * Indicates the status of the operation. Possible values include: 'NotStarted',
   * 'PendingFulfillmentStart', 'Subscribed', 'Suspended', 'Unsubscribed'
   */
  saasSubscriptionStatus?: SaasSubscriptionStatus;
  beneficiary?: AadIdentifier;
  purchaser?: AadIdentifier;
  term?: SubscriptionTerm;
  allowedCustomerOperations?: string[];
}

/**
 * An interface representing SubscriptionsResponse.
 */
export interface SubscriptionsResponse {
  subscriptions?: Subscription[];
  /**
   * Link to get the next set of subscriptions.
   */
  nextLink?: string;
}

/**
 * An interface representing Plan.
 */
export interface Plan {
  planId?: string;
  displayName?: string;
  isPrivate?: boolean;
}

/**
 * An interface representing PlansResponse.
 */
export interface PlansResponse {
  subscriptions?: Plan[];
}

/**
 * An interface representing PlanIdType.
 */
export interface PlanIdType {
  planId?: string;
}

/**
 * An interface representing QuantityType.
 */
export interface QuantityType {
  quantity?: number;
}

/**
 * An interface representing StatusType.
 */
export interface StatusType {
  /**
   * Possible values include: 'Success', 'Failure'
   */
  planId?: PlanId;
}

/**
 * An interface representing OperationType.
 */
export interface OperationType {
  id?: string;
  activityId?: string;
  subscriptionId?: string;
  offerId?: string;
  publisherId?: string;
  planId?: string;
  quantity?: number;
  action?: string;
  timeStamp?: string;
  status?: string;
}

/**
 * An interface representing SaaSFulfillmentOptions.
 */
export interface SaaSFulfillmentOptions extends ServiceClientOptions {
  baseUri?: string;
}

/**
 * Optional Parameters.
 */
export interface SaaSFulfillmentGetAllOperationsOptionalParams extends msRest.RequestOptionsBase {
  /**
   * A unique string value for tracking the request from the client, preferably a GUID. If this
   * value isn't provided, one will be generated and provided in the response headers.
   */
  xMsRequestid?: string;
  /**
   * A unique string value for operation on the client. This parameter correlates all events from
   * client operation with events on the server side. If this value isn't provided, one will be
   * generated and provided in the response headers.
   */
  xMsCorrelationid?: string;
}

/**
 * Optional Parameters.
 */
export interface SaaSFulfillmentResolveOptionalParams extends msRest.RequestOptionsBase {
  /**
   * A unique string value for tracking the request from the client, preferably a GUID. If this
   * value isn't provided, one will be generated and provided in the response headers.
   */
  xMsRequestid?: string;
  /**
   * A unique string value for operation on the client. This parameter correlates all events from
   * client operation with events on the server side. If this value isn't provided, one will be
   * generated and provided in the response headers.
   */
  xMsCorrelationid?: string;
  /**
   * The token query parameter in the URL when the user is redirected to the SaaS partner's website
   * from Azure (for example,  https://contoso.com/signup?token=..). Note, The URL decodes the
   * token value from the browser before using it.
   */
  xMsMarketplaceToken?: string;
}

/**
 * Optional Parameters.
 */
export interface SaaSFulfillmentGetSubscriptionOptionalParams extends msRest.RequestOptionsBase {
  /**
   * A unique string value for tracking the request from the client, preferably a GUID. If this
   * value isn't provided, one will be generated and provided in the response headers.
   */
  xMsRequestid?: string;
  /**
   * A unique string value for operation on the client. This parameter correlates all events from
   * client operation with events on the server side. If this value isn't provided, one will be
   * generated and provided in the response headers.
   */
  xMsCorrelationid?: string;
}

/**
 * Optional Parameters.
 */
export interface SaaSFulfillmentUpdateSubscriptionOptionalParams extends msRest.RequestOptionsBase {
  /**
   * A unique string value for tracking the request from the client, preferably a GUID. If this
   * value isn't provided, one will be generated and provided in the response headers.
   */
  xMsRequestid?: string;
  /**
   * A unique string value for operation on the client. This parameter correlates all events from
   * client operation with events on the server side. If this value isn't provided, one will be
   * generated and provided in the response headers.
   */
  xMsCorrelationid?: string;
}

/**
 * Optional Parameters.
 */
export interface SaaSFulfillmentDeleteSubscriptionOptionalParams extends msRest.RequestOptionsBase {
  /**
   * A unique string value for tracking the request from the client, preferably a GUID. If this
   * value isn't provided, one will be generated and provided in the response headers.
   */
  xMsRequestid?: string;
  /**
   * A unique string value for operation on the client. This parameter correlates all events from
   * client operation with events on the server side. If this value isn't provided, one will be
   * generated and provided in the response headers.
   */
  xMsCorrelationid?: string;
}

/**
 * Optional Parameters.
 */
export interface SaaSFulfillmentListSubscriptionPlansOptionalParams extends msRest.RequestOptionsBase {
  /**
   * A unique string value for tracking the request from the client, preferably a GUID. If this
   * value isn't provided, one will be generated and provided in the response headers.
   */
  xMsRequestid?: string;
  /**
   * A unique string value for operation on the client. This parameter correlates all events from
   * client operation with events on the server side. If this value isn't provided, one will be
   * generated and provided in the response headers.
   */
  xMsCorrelationid?: string;
}

/**
 * Optional Parameters.
 */
export interface SaaSFulfillmentActivateSubscriptionOptionalParams extends msRest.RequestOptionsBase {
  /**
   * A unique string value for tracking the request from the client, preferably a GUID. If this
   * value isn't provided, one will be generated and provided in the response headers.
   */
  xMsRequestid?: string;
  /**
   * A unique string value for operation on the client. This parameter correlates all events from
   * client operation with events on the server side. If this value isn't provided, one will be
   * generated and provided in the response headers.
   */
  xMsCorrelationid?: string;
}

/**
 * Optional Parameters.
 */
export interface SaaSFulfillmentGetSubscriptionOperationsOptionalParams extends msRest.RequestOptionsBase {
  /**
   * A unique string value for tracking the request from the client, preferably a GUID. If this
   * value isn't provided, one will be generated and provided in the response headers.
   */
  xMsRequestid?: string;
  /**
   * A unique string value for operation on the client. This parameter correlates all events from
   * client operation with events on the server side. If this value isn't provided, one will be
   * generated and provided in the response headers.
   */
  xMsCorrelationid?: string;
}

/**
 * Optional Parameters.
 */
export interface SaaSFulfillmentGetSubscriptionOperationOptionalParams extends msRest.RequestOptionsBase {
  /**
   * A unique string value for tracking the request from the client, preferably a GUID. If this
   * value isn't provided, one will be generated and provided in the response headers.
   */
  xMsRequestid?: string;
  /**
   * A unique string value for operation on the client. This parameter correlates all events from
   * client operation with events on the server side. If this value isn't provided, one will be
   * generated and provided in the response headers.
   */
  xMsCorrelationid?: string;
}

/**
 * Optional Parameters.
 */
export interface SaaSFulfillmentUpdateOperationOptionalParams extends msRest.RequestOptionsBase {
  /**
   * A unique string value for tracking the request from the client, preferably a GUID. If this
   * value isn't provided, one will be generated and provided in the response headers.
   */
  xMsRequestid?: string;
  /**
   * A unique string value for operation on the client. This parameter correlates all events from
   * client operation with events on the server side. If this value isn't provided, one will be
   * generated and provided in the response headers.
   */
  xMsCorrelationid?: string;
}

/**
 * Defines values for SessionMode.
 * Possible values include: 'None', 'DryRun'
 * @readonly
 * @enum {string}
 */
export type SessionMode = 'None' | 'DryRun';

/**
 * Defines values for SandboxType.
 * Possible values include: 'None', 'Csp'
 * @readonly
 * @enum {string}
 */
export type SandboxType = 'None' | 'Csp';

/**
 * Defines values for SaasSubscriptionStatus.
 * Possible values include: 'NotStarted', 'PendingFulfillmentStart', 'Subscribed', 'Suspended',
 * 'Unsubscribed'
 * @readonly
 * @enum {string}
 */
export type SaasSubscriptionStatus = 'NotStarted' | 'PendingFulfillmentStart' | 'Subscribed' | 'Suspended' | 'Unsubscribed';

/**
 * Defines values for PlanId.
 * Possible values include: 'Success', 'Failure'
 * @readonly
 * @enum {string}
 */
export type PlanId = 'Success' | 'Failure';

/**
 * Defines values for ApiVersion.
 * Possible values include: '2018-08-31', '2018-09-15'
 * @readonly
 * @enum {string}
 */
export type ApiVersion = '2018-08-31' | '2018-09-15';

/**
 * Defines values for ApiVersion1.
 * Possible values include: '2018-08-31', '2018-09-15'
 * @readonly
 * @enum {string}
 */
export type ApiVersion1 = '2018-08-31' | '2018-09-15';

/**
 * Defines values for ApiVersion2.
 * Possible values include: '2018-08-31', '2018-09-15'
 * @readonly
 * @enum {string}
 */
export type ApiVersion2 = '2018-08-31' | '2018-09-15';

/**
 * Contains response data for the getAllOperations operation.
 */
export type GetAllOperationsResponse = {
  /**
   * The parsed response body.
   */
  body: any;

  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: any;
    };
};

/**
 * Contains response data for the resolve operation.
 */
export type ResolveResponse = {
  /**
   * The parsed response body.
   */
  body: any;

  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: any;
    };
};

/**
 * Contains response data for the getSubscription operation.
 */
export type GetSubscriptionResponse = {
  /**
   * The parsed response body.
   */
  body: any;

  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: any;
    };
};

/**
 * Contains response data for the updateSubscription operation.
 */
export type UpdateSubscriptionResponse = ErrorModel & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ErrorModel;
    };
};

/**
 * Contains response data for the deleteSubscription operation.
 */
export type DeleteSubscriptionResponse = ErrorModel & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ErrorModel;
    };
};

/**
 * Contains response data for the listSubscriptionPlans operation.
 */
export type ListSubscriptionPlansResponse = {
  /**
   * The parsed response body.
   */
  body: any;

  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: any;
    };
};

/**
 * Contains response data for the activateSubscription operation.
 */
export type ActivateSubscriptionResponse = ErrorModel & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ErrorModel;
    };
};

/**
 * Contains response data for the getSubscriptionOperations operation.
 */
export type GetSubscriptionOperationsResponse = {
  /**
   * The parsed response body.
   */
  body: any;

  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: any;
    };
};

/**
 * Contains response data for the getSubscriptionOperation operation.
 */
export type GetSubscriptionOperationResponse = {
  /**
   * The parsed response body.
   */
  body: any;

  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: any;
    };
};

/**
 * Contains response data for the updateOperation operation.
 */
export type UpdateOperationResponse = ErrorModel & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ErrorModel;
    };
};