from django.urls import path
from core import views

urlpatterns = [
    path('',views.Home, name='home'),
    path('create/', views.create_dog, name='create'),
    path('update/<dog_id>/', views.update_dog, name='update'),
    path('delete/<dog_id>/', views.delete_dog, name='delete'),
]
