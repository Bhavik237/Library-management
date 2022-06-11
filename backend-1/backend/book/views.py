from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from rest_framework import viewsets
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser

from .serializers import BookSerializer, AdminSerializer
from .models import Book, Admin

# Create your views here.


class BookView(viewsets.ModelViewSet):
    serializer_class = BookSerializer
    queryset = Book.objects.all()


@csrf_exempt
def login(request):
    if request.method == 'POST':
        email = request.POST['email']
        try:
            admin = Admin.objects.get(pk=email)
        except Exception:
            return HttpResponse(status=404)
        if admin.password == request.POST['password']:
            return HttpResponse(status=200)
    return HttpResponse(status=404)


@csrf_exempt
def signup(request):
    if request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = AdminSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)
