# Game API

![alt text](https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fbe721a3-fa20-46fd-92be-bdf95e351464/d6e8sy3-6b32f86d-3269-4ef6-bd6f-040becf113d3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvZmJlNzIxYTMtZmEyMC00NmZkLTkyYmUtYmRmOTVlMzUxNDY0XC9kNmU4c3kzLTZiMzJmODZkLTMyNjktNGVmNi1iZDZmLTA0MGJlY2YxMTNkMy5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.lwpq3DZUbpMb1akNa8HepJVYCs6EMWUe-H8fy1hgazc)

## Langages et librairies utilisées

###### Django ( Framework Python )
###### Angular ( Framework Javascript )
###### Bootstrap ( Librairie CSS )


## **Start Application and API**

##### [#f03c15] !! Python et NodeJS sont requis pour lancer le projet !!`#f03c15`

##### **installer les dépendances :** 
```bash
cd angular
npm install
```

##### **Demarré l'api :** 
```bash
cd django_api 
py manage.py runserver
```
##### **Demarré l'application :** 
```bash
cd angular
npm start
```

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



