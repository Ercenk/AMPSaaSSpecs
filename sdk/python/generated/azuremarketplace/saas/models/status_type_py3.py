# coding=utf-8
# --------------------------------------------------------------------------
# Code generated by Microsoft (R) AutoRest Code Generator.
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.
# --------------------------------------------------------------------------

from msrest.serialization import Model


class StatusType(Model):
    """StatusType.

    :param plan_id: Possible values include: 'Success', 'Failure'
    :type plan_id: str or ~azuremarketplace.saas.models.enum
    """

    _attribute_map = {
        'plan_id': {'key': 'planId', 'type': 'str'},
    }

    def __init__(self, *, plan_id=None, **kwargs) -> None:
        super(StatusType, self).__init__(**kwargs)
        self.plan_id = plan_id
