from django.urls import path
from . import views

urlpatterns = [
	path('', views.store, name='store'),
	path('category/<slug:category>/', views.store, name='category'),
	path('category/<slug:category>/<slug:product>/', views.product_detail, name='product_detail'),
    path('search', views.search, name='search'),
]
