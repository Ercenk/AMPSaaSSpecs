# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class QuantityType(Model):
    """QuantityType.

    :param quantity:
    :type quantity: int
    """

    _attribute_map = {
        'quantity': {'key': 'quantity', 'type': 'int'},
    }

    def __init__(self, **kwargs):
        super(QuantityType, self).__init__(**kwargs)
        self.quantity = kwargs.get('quantity', None)
