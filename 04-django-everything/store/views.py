from items.models import Category
from django.shortcuts import render, get_object_or_404
from store.models import Product


# Create your views here.
def store(request, category=None):
    categories = None
    products = None

    if category is not None:
        categories = get_object_or_404(Category, slug=category)
        products = Product.objects.filter(category=categories, is_available=True)
        product_count = products.count()
    else:
        products = Product.objects.all().filter(is_available=True)
        product_count = products.count()

    context = {
        'products': products,
        'product_count': product_count,
    }
    return render(request, 'store/store.html', context)
