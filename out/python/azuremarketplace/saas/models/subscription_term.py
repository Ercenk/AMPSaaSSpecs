# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class SubscriptionTerm(Model):
    """SubscriptionTerm.

    :param start_date:
    :type start_date: date
    :param end_date:
    :type end_date: date
    """

    _attribute_map = {
        'start_date': {'key': 'startDate', 'type': 'date'},
        'end_date': {'key': 'endDate', 'type': 'date'},
    }

    def __init__(self, **kwargs):
        super(SubscriptionTerm, self).__init__(**kwargs)
        self.start_date = kwargs.get('start_date', None)
        self.end_date = kwargs.get('end_date', None)
