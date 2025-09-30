from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from .serializers import UserSerializer

# Create your views here.
def index(request):
    return HttpResponse("kasdfh")


@csrf_exempt
@api_view(['GET','POST'])
def users(request):
    if request.method == 'GET':
        details = User.objects.all()
        serializer = UserSerializer(details,many=True)

        return Response(serializer.data,status= status.HTTP_200_OK)
    
    elif  request.method == 'POST':
        print(request.data)
        serializer = UserSerializer(data = request.data)
        if serializer.is_valid():
           
            serializer.save()
            return Response(serializer.data,status = status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

