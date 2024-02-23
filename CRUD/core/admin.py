from django.contrib import admin
from core.models import Dog #import the Dog model

# Register your models here.
admin.site.register(Dog)
#registers the Dog models from the admin panel
