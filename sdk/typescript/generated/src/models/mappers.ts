/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as msRest from "@azure/ms-rest-js";


export const SubscriptionSummary: msRest.CompositeMapper = {
  serializedName: "SubscriptionSummary",
  type: {
    name: "Composite",
    className: "SubscriptionSummary",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Uuid"
        }
      },
      subscriptionName: {
        serializedName: "subscriptionName",
        type: {
          name: "String"
        }
      },
      offerId: {
        serializedName: "offerId",
        type: {
          name: "String"
        }
      },
      planId: {
        serializedName: "planId",
        type: {
          name: "String"
        }
      },
      quantity: {
        serializedName: "quantity",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ErrorError: msRest.CompositeMapper = {
  serializedName: "Error-error",
  type: {
    name: "Composite",
    className: "ErrorError",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorModel: msRest.CompositeMapper = {
  serializedName: "Error",
  type: {
    name: "Composite",
    className: "ErrorModel",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorError"
        }
      }
    }
  }
};

export const AadIdentifier: msRest.CompositeMapper = {
  serializedName: "AadIdentifier",
  type: {
    name: "Composite",
    className: "AadIdentifier",
    modelProperties: {
      emailId: {
        serializedName: "emailId",
        type: {
          name: "String"
        }
      },
      objectId: {
        serializedName: "objectId",
        type: {
          name: "Uuid"
        }
      },
      tenantId: {
        serializedName: "tenantId",
        type: {
          name: "Uuid"
        }
      }
    }
  }
};

export const SubscriptionTerm: msRest.CompositeMapper = {
  serializedName: "Subscription-term",
  type: {
    name: "Composite",
    className: "SubscriptionTerm",
    modelProperties: {
      startDate: {
        serializedName: "startDate",
        type: {
          name: "Date"
        }
      },
      endDate: {
        serializedName: "endDate",
        type: {
          name: "Date"
        }
      }
    }
  }
};

export const Subscription: msRest.CompositeMapper = {
  serializedName: "Subscription",
  type: {
    name: "Composite",
    className: "Subscription",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Uuid"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      publisherId: {
        serializedName: "publisherId",
        type: {
          name: "String"
        }
      },
      offerId: {
        serializedName: "offerId",
        type: {
          name: "String"
        }
      },
      planId: {
        serializedName: "planId",
        type: {
          name: "String"
        }
      },
      quantity: {
        serializedName: "quantity",
        type: {
          name: "Number"
        }
      },
      sessionMode: {
        serializedName: "sessionMode",
        type: {
          name: "String"
        }
      },
      isFreeTrial: {
        serializedName: "isFreeTrial",
        type: {
          name: "Boolean"
        }
      },
      isTest: {
        serializedName: "isTest",
        type: {
          name: "Boolean"
        }
      },
      sandboxType: {
        serializedName: "sandboxType",
        type: {
          name: "String"
        }
      },
      saasSubscriptionStatus: {
        serializedName: "saasSubscriptionStatus",
        type: {
          name: "String"
        }
      },
      beneficiary: {
        serializedName: "beneficiary",
        type: {
          name: "Composite",
          className: "AadIdentifier"
        }
      },
      purchaser: {
        serializedName: "purchaser",
        type: {
          name: "Composite",
          className: "AadIdentifier"
        }
      },
      term: {
        serializedName: "term",
        type: {
          name: "Composite",
          className: "SubscriptionTerm"
        }
      },
      allowedCustomerOperations: {
        serializedName: "allowedCustomerOperations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const SubscriptionsResponse: msRest.CompositeMapper = {
  serializedName: "SubscriptionsResponse",
  type: {
    name: "Composite",
    className: "SubscriptionsResponse",
    modelProperties: {
      subscriptions: {
        serializedName: "subscriptions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Subscription"
            }
          }
        }
      },
      nextLink: {
        serializedName: "@nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Plan: msRest.CompositeMapper = {
  serializedName: "Plan",
  type: {
    name: "Composite",
    className: "Plan",
    modelProperties: {
      planId: {
        serializedName: "planId",
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      isPrivate: {
        serializedName: "isPrivate",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const PlansResponse: msRest.CompositeMapper = {
  serializedName: "PlansResponse",
  type: {
    name: "Composite",
    className: "PlansResponse",
    modelProperties: {
      subscriptions: {
        serializedName: "subscriptions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Plan"
            }
          }
        }
      }
    }
  }
};

export const PlanIdType: msRest.CompositeMapper = {
  serializedName: "PlanIdType",
  type: {
    name: "Composite",
    className: "PlanIdType",
    modelProperties: {
      planId: {
        serializedName: "planId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const QuantityType: msRest.CompositeMapper = {
  serializedName: "QuantityType",
  type: {
    name: "Composite",
    className: "QuantityType",
    modelProperties: {
      quantity: {
        serializedName: "quantity",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const StatusType: msRest.CompositeMapper = {
  serializedName: "StatusType",
  type: {
    name: "Composite",
    className: "StatusType",
    modelProperties: {
      planId: {
        serializedName: "planId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationType: msRest.CompositeMapper = {
  serializedName: "OperationType",
  type: {
    name: "Composite",
    className: "OperationType",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Uuid"
        }
      },
      activityId: {
        serializedName: "activityId",
        type: {
          name: "Uuid"
        }
      },
      subscriptionId: {
        serializedName: "subscriptionId",
        type: {
          name: "Uuid"
        }
      },
      offerId: {
        serializedName: "offerId",
        type: {
          name: "String"
        }
      },
      publisherId: {
        serializedName: "publisherId",
        type: {
          name: "String"
        }
      },
      planId: {
        serializedName: "planId",
        type: {
          name: "String"
        }
      },
      quantity: {
        serializedName: "quantity",
        type: {
          name: "Number"
        }
      },
      action: {
        serializedName: "action",
        type: {
          name: "String"
        }
      },
      timeStamp: {
        serializedName: "timeStamp",
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      }
    }
  }
};
