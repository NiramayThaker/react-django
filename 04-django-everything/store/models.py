from django.db import models
from django.urls import reverse
from items.models import Category
# from carts.models import CartItem


# Create your models here.
class Product(models.Model):
	product_name = models.CharField(max_length=200, unique=True)
	slug = models.SlugField(max_length=200, unique=True)
	description = models.TextField()
	price = models.IntegerField()
	image = models.ImageField(upload_to='photos/products')
	stock = models.IntegerField()
	is_available = models.BooleanField(default=True)
	category = models.ForeignKey(Category, on_delete=models.CASCADE)
	created_date = models.DateTimeField(auto_now_add=True)
	modified_date = models.DateTimeField(auto_now=True)

	def get_url(self):
		return reverse('product_detail', args=[self.category.slug, self.slug])
	
	def is_in_cart(self):
		# Import CartItem here to avoid circular import issues
		from carts.models import CartItem
		return CartItem.objects.filter(product=self).exists()

	def __str__(self):
		return self.product_name
