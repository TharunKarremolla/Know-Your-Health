from django.shortcuts import render
from django.http import HttpResponse
from .models import Labs
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import LabSerializer
from rest_framework import status

# Create your views here.
def index(request):
    return HttpResponse("kasdfh")

@api_view(['GET','POST'])
def labs(request):
    if request.method == 'GET':
        labs = Labs.objects.all()
        serializer = LabSerializer(labs,many=True)

        return Response(serializer.data,status= status.HTTP_200_OK)
    
    elif  request.method == 'POST':
        serializer = LabSerializer(data = request.data)
        if serializer.is_valid():
            print(serializer)
            serializer.save()
            return Response(serializer.data,status = status.HTTP_201_CREATED)

