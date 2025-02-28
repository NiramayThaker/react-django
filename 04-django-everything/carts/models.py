from django.db import models
from store.models import Product

# Create your models here.
class Cart(models.Model):
    cart_id = models.CharField(max_length=250, blank=True)
    date_added = models.DateField(auto_now_add=True)
    
    def __str__(self):
        return self.cart_id


class CartItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    is_active = models.BooleanField(default=True)

    @property
    def sub_total(self):
        return self.product.price * self.quantity

    # @property
    # def total_cart_items(self):
    #     return sum([item.quantity for item in CartItem.objects.filter(cart=self.cart)])

    def __str__(self):
        return self.product.product_name

