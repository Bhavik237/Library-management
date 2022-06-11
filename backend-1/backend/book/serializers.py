from rest_framework import serializers
from .models import Book, Admin


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ('id', 'title', 'price')


class AdminSerializer(serializers.ModelSerializer):
    email = serializers.EmailField()
    password = serializers.CharField(max_length=20, allow_null=False)

    def create(self, validated_data):
        return Admin.objects.create(**validated_data)

    class Meta:
        model = Admin
        fields = ('email', 'password')
