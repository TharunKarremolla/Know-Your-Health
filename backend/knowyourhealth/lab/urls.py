from django.contrib import admin
from django.urls import path,include
from .views import labs,appointments,send_email,MyAppointments

urlpatterns = [
  
      path('appointments/',appointments),
      path("labs/", labs),
      path('email/',send_email),
       path('MyAppointments/',MyAppointments)
]
