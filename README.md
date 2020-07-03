# Game API

## Start Application and API

##### installer les dépendances : ```cd angular``` , ```npm install```

##### Demarré l'api : ```cd django_api``` , ```py manage.py runserver```
##### Demarré l'application : ```cd angular``` , ```npm start```

## Routes and Request :

###### Afficher tout les jeux : http://localhost:4200/games
###### Afficher un jeu : http://localhost:4200/games/1
###### Page d'administration : http://127.0.0.1:8000/admin/
###### API VIEW : http://127.0.0.1:8000/game/

## Creer une api Rest avec Django

###### Installation de python 
###### Installation de Django et Djangorestframework : ```pip install djangorestframework ```

###### Faire une migration de la base de données sqlite fournies avec le projet Django : ```py manage.py migrate```
###### Elle contient toutes les tables pour l'administration interne de Django
![alt text](https://i.imgur.com/xmHxPJo.png) 

###### Lancer le serveur : ```py manage.py runserver```
###### Creation de l'application qui aceuillera l'api : ```py manage.py startapp api_game```

###### Creation d'un superuser : ```py manage.py createsuperuser```



