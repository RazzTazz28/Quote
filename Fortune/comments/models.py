from django.db import models
from django.utils import timezone as t
from mptt.models import MPTTModel


class Comment(MPTTModel):
    objects = models.Manager()
    id = models.AutoField(primary_key=True)

    parent = models.ForeignKey('self', on_delete=models.CASCADE, null=True, blank=True, related_name='children')
    user = models.CharField(max_length=30, blank=True, null=True)
    comment = models.CharField(max_length=800, blank=True, null=True)
    created_at = models.DateTimeField(default=t.now, blank=True, null=True)

    def __str__(self):
        return self.id

    class Meta:
        abstract = False
