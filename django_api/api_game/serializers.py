from rest_framework import serializers
from .models import Game, Genre

class GameSerializer(serializers.ModelSerializer):
    class Meta:
      model = Game
      fields = ['name','genre','cover','resume','date']
      depth = 1

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
      model = Genre
