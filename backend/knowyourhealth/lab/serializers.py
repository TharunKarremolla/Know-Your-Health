from rest_framework import serializers
from .models import Labs

class LabSerializer(serializers.ModelSerializer):

    class Meta:
        model = Labs 
        fields = '__all__'