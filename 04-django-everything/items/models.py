from django.db import models


# Create your models here.
class Category(models.Model):
	category_name = models.CharField(max_length=50, unique=True)
	slug = models.CharField(max_length=100, unique=True)
	description = models.TextField(max_length=255, blank=True)
	cat_image = models.ImageField(upload_to='photos/categories', blank=True)

	class Meta:
		verbose_name = 'category'
		verbose_name_plural = 'categories'

	def __str__(self):
		return f"{self.category_name}"


class CategoryMain(models.Model):
	category_name = models.CharField(max_length=50, unique=True)
	slug = models.CharField(max_length=100, unique=True)
	description = models.TextField(max_length=255, blank=True)
	cat_image = models.ImageField(upload_to='photos/categories', blank=True)

	class Meta:
		verbose_name = 'categories'
		verbose_name_plural = 'categories'

	def __str__(self):
		return f"{self.category_name}"
