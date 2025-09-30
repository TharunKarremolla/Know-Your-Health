from django.contrib import admin
from django.urls import path,include
from .views import users,login_view,get_user,logout_view,get_csrf,user

urlpatterns = [
        path("user/",user),
        path("users/",users),
        path("users/<int:id>/",get_user),
        path("login/",login_view),
        path("logout/",logout_view),
         path("csrf/",get_csrf),
]
