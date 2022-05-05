from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Region(models.Model):
    region=models.CharField(max_length=50)
    price=models.IntegerField()
    
    def __str__(self):
        return str(self.region)


class Customer(models.Model):
    device = models.CharField(max_length=200, null=True, blank=True)
    full_name = models.CharField(max_length=50)
    phone = models.CharField(max_length=13)
    region = models.ForeignKey(
        Region, on_delete=models.SET_NULL, default=None, blank=True, null=True)
    address = models.CharField(max_length=300, null=True, blank=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        if self.full_name:
            return str(self.full_name)
        else:
            return str(self.device)

    @property
    def get_cart_product(self):
        qr = []
        for i in self.cart_set.all():
            if i.order == False:
                qr.append(i.product)
        return qr

    def get_cart(self):
        return self.cart_set.all()

    def save(self, *args, **kwargs):
        super(Customer, self).save(*args, **kwargs)
