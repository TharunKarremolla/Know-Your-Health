from django.contrib import admin
from django.urls import path,include
from .views import index,labs

urlpatterns = [
  
    path("", index),
      path("labs/", labs),
]
