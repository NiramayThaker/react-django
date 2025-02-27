from django.urls import path
from . import views

urlpatterns = [
	path('', views.store, name='store'),
	path('<slug:category>/', views.store, name='category'),
	path('<slug:category>/<slug:product>/', views.product_detail, name='product_detail'),
]
