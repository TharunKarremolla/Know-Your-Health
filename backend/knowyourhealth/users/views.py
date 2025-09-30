from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate,login,logout
from django.views.decorators.csrf import csrf_exempt
from django.middleware.csrf import get_token
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from .serializers import UserSerializer,LoginSerializer


@api_view(['GET'])
def user(request):
    return JsonResponse({'username' :request.user.username})



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

@api_view(['POST'])
def login_view(request):

    if request.method == 'POST':
       
            serializer = LoginSerializer(data = request.data)
            if serializer.is_valid():
                username =serializer.validated_data['username']
                password =serializer.validated_data['password']
                user = authenticate(username = username,password = password)
                if user is not None:
                     login(request._request,user)
                     return Response(serializer.data,status=status.HTTP_200_OK)
                else:
                     return Response({'error' : 'Invalid Credentials'},status=status.HTTP_401_UNAUTHORIZED)
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['GET'])
def get_user(request,id):
    user = User.objects.filter(id = id)
    serializer = UserSerializer(user,many=True)
    print(serializer.data)
    return Response(serializer.data,status=status.HTTP_200_OK)


@api_view(['POST'])
def logout_view(request):
     logout(request)
     return Response({'message' : "Logged Out"}, status = status.HTTP_200_OK)

def get_csrf(request):
     return JsonResponse({'csrfToken' : get_token(request)})