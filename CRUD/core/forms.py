from django import forms 
from core.models import Dog 

class DogForm(forms.ModelForm):
    class Meta:
        model = Dog
        fields = '__all__'
        # exclude = ['price']