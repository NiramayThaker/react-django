from django.contrib import admin
from .models import Cart, CartItem

# Register your models here.
class CartAdmin(admin.ModelAdmin):
    list_display = ['cart_id', 'date_added']
    search_fields = ['cart_id']

class CartItemAdmin(admin.ModelAdmin):
    list_display = ['cart', 'product', 'quantity', 'is_active']
    list_filter = ['is_active']
    search_fields = ['cart', 'product']


admin.site.register(Cart, CartAdmin)
admin.site.register(CartItem, CartItemAdmin)
