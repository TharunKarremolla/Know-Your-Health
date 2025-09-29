from django.db import models

# Create your models here.
class Labs(models.Model):
    name = models.CharField(max_length = 200,null=False)
    address = models.CharField(max_length = 200,null=False)