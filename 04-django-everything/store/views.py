from items.models import Category
from django.shortcuts import render, get_object_or_404
from store.models import Product
from django.core.paginator import EmptyPage, PageNotAnInteger, Paginator

# Create your views here.
def store(request, category=None):
    categories = None
    products = None


    if category is not None:
        categories = get_object_or_404(Category, slug=category)
        products = Product.objects.filter(category=categories, is_available=True)
        paginator = Paginator(products, 3)
        page = request.GET.get('page')
        paged_products = paginator.get_page(page)
        product_count = products.count()
    else:
        products = Product.objects.all().filter(is_available=True).order_by('id')
        paginator = Paginator(products, 3)
        page = request.GET.get('page')
        paged_products = paginator.get_page(page)
        product_count = products.count()

    context = {
        'products': paged_products,
        'product_count': product_count,
    }
    return render(request, 'store/store.html', context)


def product_detail(request, category, product):
    try:
        single_product = Product.objects.get(category__slug=category, slug=product)
        context = {
            'product': single_product,
        }
    except:
        raise Exception('Product does not exist')

    return render(request, 'store/product_detail.html', context=context)


def search(request):
    product = Product.objects.filter(
        product_name__icontains=request.GET['item'],
        is_available=True   
    ).order_by('-created_date')

    context = {
        'products': product,
        'product_count': product.count(),
    }
    return render(request, 'store/store.html', context)
