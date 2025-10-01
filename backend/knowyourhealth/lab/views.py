from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from .models import Labs,Appointments
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import LabSerializer,AppointmentSerializer
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
from django.core.mail import send_mail

def send_email(request):
    subject = "Hello from Django"
    message = "This is a test email sent from Django project."
    from_email = "karremollatharun@gmail.com"
    recipient_list = ["nandu77319@gmail.com"]

    send_mail(subject, message, from_email, recipient_list)

    return HttpResponse("Email sent successfully!")

@api_view(['GET'])
def MyAppointments(request):
    user = request.user
    print('current',user)
    appointments = list(Appointments.objects.select_related('patient','lab').filter(patient__username = user).values())
    print(appointments)
    return JsonResponse({'user' : appointments})

@api_view(['POST'])
def appointments(request):
    serializer = AppointmentSerializer(data = request.data)
    # print(serializer)
    if serializer.is_valid():
        patient = serializer.validated_data['patient']
        lab = serializer.validated_data['lab']
        from_email = lab.email
        recipient_list = [patient.email]
        subject = "Scheduling Appointments"
        message = f"Your appointment is scheduled at {serializer.validated_data['appointment_at']}"
        print(message)
        send_mail(subject,message,from_email,recipient_list)
        serializer.save()
        return Response(serializer.data,status=status.HTTP_200_OK)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    


@login_required
@api_view(['GET','POST'])
def labs(request):
    if request.method == 'GET':
        labs = Labs.objects.all()
        serializer = LabSerializer(labs,many=True)

        return Response(serializer.data,status= status.HTTP_200_OK)
    
    elif  request.method == 'POST':
        serializer = LabSerializer(data = request.data)
        if serializer.is_valid():
           
            serializer.save()
            return Response(serializer.data,status = status.HTTP_201_CREATED)



