from .models import CartItem, Cart
from .views import _cart_id


def counter(request):
    if 'admin' in request.path:
        return {}
    else:
        try:
            cart = Cart.objects.get(cart_id=_cart_id(request))
            cart_items = CartItem.objects.all().filter(cart=cart)
            cart_items_count = cart_items.count()

        except Cart.DoesNotExist:
            cart_items_count = 0
    
    return dict(cart_count=cart_items_count)

