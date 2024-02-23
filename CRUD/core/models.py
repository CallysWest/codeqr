from django.db import models

# Create your models here.
class Dog(models.Model):
    dog_choices = (
        ('Male', 'Male'),
        ('Female', 'Female')
        
    )
    breed = models.CharField(max_length=30)
    price = models.PositiveIntegerField()
    gender =  models.CharField(max_length=10, choices=dog_choices)
    is_spotted = models.BooleanField(default=False)
    
    def __str__(self):
        return self.breed 