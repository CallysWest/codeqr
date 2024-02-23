from django.shortcuts import render, redirect
from django.http import HttpResponse
from core.models import Dog #imports the dog models
from core.forms import DogForm #import Dog Form
#Create your views here.
# def Home(request):
#       welcome_text = '<h2>Hello, This is my first web application</h2>'
#     return HttpResponse('Hello, This is my first web application')


def Home(request):
    # dog = [
    #     'German Shephard',
    #     'Bull Dog',
    #     'Rottwiller'
    # ]
    
    #Grabs all the Dogs from our database
    dog = Dog.objects.all()
    
   
    return render(request, 'core/home.html', {'dogs': dog,})



def create_dog(request):
    form = DogForm()
    
    if request.method == 'POST':
        form = DogForm(request)
        if form.is_valid():
            form.save()
            return redirect('home')
    
    return render(request, 'core/create.html', {'dogforms': form})

def update_dog(request,dog_id):
    dog = Dog.objects.get(id=dog_id)#Grabs the dog we want to update
    
    form = DogForm(instance=dog)
    #tell the html form to display the information we want to update.
    
    if request.method == 'POST':
        form = DogForm(request.POST)
        if form.is_valid():
            form.save()
            # messages.success(request, f'{dog.breed} profile was updated.')
            return redirect('home')
        
    return render(request, 'core/create.html', {'dogform': form})

def delete_dog(request, dog_id):
    dog = Dog.objects.get(id=dog_id)#Grabs the dog we want to update
    
    dog.delete()
    #Delete/Remove the dog from our database
    return redirect('home')