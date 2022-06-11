from django.db import models

# Create your models here.


class Book(models.Model):
    title = models.CharField(max_length=100)
    price = models.IntegerField()

    def _str_(self):
        return self.title


class Admin(models.Model):
    email = models.EmailField(primary_key=True)
    password = models.CharField(max_length=20, null=False)
