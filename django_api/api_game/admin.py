from django.contrib import admin
from .models import Game, Genre

# Objets ModelAdmin
class GameAdmin(admin.ModelAdmin):
  fields = ['name','genre','cover','resume']
  list_filter = ['genre']
  search_fields = ['name']
  ordering = ['id']

admin.site.register(Game,GameAdmin)
# admin.site.register(Genre)