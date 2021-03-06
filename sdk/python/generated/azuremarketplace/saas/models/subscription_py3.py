# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class Subscription(Model):
    """Subscription.

    :param id:
    :type id: str
    :param name:
    :type name: str
    :param publisher_id:
    :type publisher_id: str
    :param offer_id:
    :type offer_id: str
    :param plan_id:
    :type plan_id: str
    :param quantity:
    :type quantity: int
    :param session_mode: Dry Run indicates all transactions run as Test-Mode
     in the commerce stack. Possible values include: 'None', 'DryRun'
    :type session_mode: str or ~azuremarketplace.saas.models.enum
    :param is_free_trial: true - the customer subscription is currently in
     free trial, false - the customer subscription is not currently in free
     trial.(optional field - default false)
    :type is_free_trial: bool
    :param is_test: Indicating whether the current subscription is a test
     asset.
    :type is_test: bool
    :param sandbox_type: Possible Values are None, Csp (Csp sandbox purchase).
     Possible values include: 'None', 'Csp'
    :type sandbox_type: str or ~azuremarketplace.saas.models.enum
    :param saas_subscription_status: Indicates the status of the operation.
     Possible values include: 'NotStarted', 'PendingFulfillmentStart',
     'Subscribed', 'Suspended', 'Unsubscribed'
    :type saas_subscription_status: str or ~azuremarketplace.saas.models.enum
    :param beneficiary:
    :type beneficiary: ~azuremarketplace.saas.models.AadIdentifier
    :param purchaser:
    :type purchaser: ~azuremarketplace.saas.models.AadIdentifier
    :param term:
    :type term: ~azuremarketplace.saas.models.SubscriptionTerm
    :param allowed_customer_operations:
    :type allowed_customer_operations: list[str]
    """

    _attribute_map = {
        'id': {'key': 'id', 'type': 'str'},
        'name': {'key': 'name', 'type': 'str'},
        'publisher_id': {'key': 'publisherId', 'type': 'str'},
        'offer_id': {'key': 'offerId', 'type': 'str'},
        'plan_id': {'key': 'planId', 'type': 'str'},
        'quantity': {'key': 'quantity', 'type': 'int'},
        'session_mode': {'key': 'sessionMode', 'type': 'str'},
        'is_free_trial': {'key': 'isFreeTrial', 'type': 'bool'},
        'is_test': {'key': 'isTest', 'type': 'bool'},
        'sandbox_type': {'key': 'sandboxType', 'type': 'str'},
        'saas_subscription_status': {'key': 'saasSubscriptionStatus', 'type': 'str'},
        'beneficiary': {'key': 'beneficiary', 'type': 'AadIdentifier'},
        'purchaser': {'key': 'purchaser', 'type': 'AadIdentifier'},
        'term': {'key': 'term', 'type': 'SubscriptionTerm'},
        'allowed_customer_operations': {'key': 'allowedCustomerOperations', 'type': '[str]'},
    }

    def __init__(self, *, id: str=None, name: str=None, publisher_id: str=None, offer_id: str=None, plan_id: str=None, quantity: int=None, session_mode=None, is_free_trial: bool=None, is_test: bool=None, sandbox_type=None, saas_subscription_status=None, beneficiary=None, purchaser=None, term=None, allowed_customer_operations=None, **kwargs) -> None:
        super(Subscription, self).__init__(**kwargs)
        self.id = id
        self.name = name
        self.publisher_id = publisher_id
        self.offer_id = offer_id
        self.plan_id = plan_id
        self.quantity = quantity
        self.session_mode = session_mode
        self.is_free_trial = is_free_trial
        self.is_test = is_test
        self.sandbox_type = sandbox_type
        self.saas_subscription_status = saas_subscription_status
        self.beneficiary = beneficiary
        self.purchaser = purchaser
        self.term = term
        self.allowed_customer_operations = allowed_customer_operations
