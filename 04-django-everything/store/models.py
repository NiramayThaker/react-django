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


variation_category_choices = ( 
	('color', 'color'),
	('size', 'size'),
)

class VariationManager(models.Manager):
	def color(self):
		return super(VariationManager, self).filter(variation_category='color', is_active=True)

	def size(self):
		return super(VariationManager, self).filter(variation_category='size', is_active=True)

class Variation(models.Model):
	product = models.ForeignKey(Product, on_delete=models.CASCADE)
	variation_category = models.CharField(max_length=100, choices=variation_category_choices)
	variation_value = models.CharField(max_length=100)
	is_active = models.BooleanField(default=True)
	created_date = models.DateTimeField(auto_now=True)

	objects = VariationManager()

	def __unicode__(self):
		return self.product

	def __str__(self):
		return f"{self.product.product_name} - {self.variation_value}"
	