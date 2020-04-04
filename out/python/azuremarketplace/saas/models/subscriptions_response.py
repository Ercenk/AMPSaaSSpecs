# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class SubscriptionsResponse(Model):
    """SubscriptionsResponse.

    :param subscriptions:
    :type subscriptions: list[~azuremarketplace.saas.models.Subscription]
    :param next_link: Link to get the next set of subscriptions.
    :type next_link: str
    """

    _attribute_map = {
        'subscriptions': {'key': 'subscriptions', 'type': '[Subscription]'},
        'next_link': {'key': '@nextLink', 'type': 'str'},
    }

    def __init__(self, **kwargs):
        super(SubscriptionsResponse, self).__init__(**kwargs)
        self.subscriptions = kwargs.get('subscriptions', None)
        self.next_link = kwargs.get('next_link', None)
