from django.db import models

# Create your models here.

class Game(models.Model):
  name = models.CharField(max_length=100)
  genre = models.CharField(max_length=100)
  cover = models.CharField(max_length=1000)
  resume = models.TextField()
  date = models.DateTimeField(auto_now_add=True)


  def __str__(self):
    return self.name