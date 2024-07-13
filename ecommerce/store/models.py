from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=250, db_index=True)
    slug = models.SlugField(max_length=250, unique=True)

    class Meta:
        verbose_name_plural = 'categories'
        
    def __str__(self):
        return self.name #return name instead of Category(1)
        
class Product(models.Model):
    title = models.CharField(max_length=250, db_index=True)
    brand = models.CharField(max_length=250, default='un-branded')
    description = models.TextField(blank=True) 
    slug = models.SlugField(max_length=255, unique=True) #for uniqueness
    price = models.DecimalField(max_digits=4, decimal_places=2)
    #image = models.ImageField(upload_to='images/')
    
    
    class Meta:
        verbose_name_plural = 'products'
        
    def __str__(self):
        return self.title 
    
    
    
    
    
    
    
    
    