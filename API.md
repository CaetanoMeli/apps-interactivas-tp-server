### Crear usuario

POST

/users

```
{
  "nick": "${user_nick}"
}
```

Retorna:

- Si lo pudo crear: 201

Body:

```
{
  "id": 1 // id único que luego usamos para el submit
}
```

- Si ya existe ó es vacío: 

Status: 400 bad request

Body:

```
{
 "message": "el usuario ya existe"      //En caso que sea vacío el mensaje podría ser: "debe ingresar un usuario"
}
```



### Obtener juegos

GET

/games?type=math&level=easy  // El type puede ser math ó language, el level: easy,medium,hard

Retorna: un array de juegos

```
[
  {
    "id": "uuid",
    "type": "math",
    "level": "easy",
    "layout": "8 + ${answer} = 10",
    "answer": "2"
  },
  {
    "id": "uuid",
    "type": "language",
    "level": "easy",
    "layout": "Escritorio tiene ${answer} sílabas",
    "answer": "4"
  }
]
```

### Para submitear las respuestas de un nene

PUT // ya que puede volver a intentar para obtener un mejor score (al persistir estaría bueno entender si dejamos siempre el mejor score o el último que obtuvo

/users/:id/games?type=math&level=easy // Por ahi convenga pasar estos params para tener rankings diferenciados por tipo y dificultad

Body

```
[
  {
    "id": "uuid", // el que previamente retornamos en el get
    "is_correct": true,
    "start_game": "timestamp", //esto es el time now desde que se le muestra el juego
    "end_game": "timestamp"   // esto es una vez que submitea la respuesta, por que los necesitamos?
  },                           //Para crear el ranking basados en el tiempo que le llevo resolverlo
  {
    "id": "uuid",
    "is_correct": false,
    "start_game": "timestamp",
    "end_game": "timestamp"
  }
]
```

Retorna:

200 OK si pudo calcular el ranking para ese user y persistirlo correctamente

500 Internal server error sí no pudo leer el mongo o algo parecido.



### Para obtener el ranking

GET

/ranking?type=math&level=easy // Idem para obtener ranking por tipo de juego y dificultad

Retorna: un array con usuarios rankeados

```
[
  {
    "user": "pepe",
    "points" : "100"
  },
  {
    "user": "lolo",
    "points" : "80"
  }
]
```


200 OK si lo pudo calcular

500 Internal server error sí no pudo leer el mongo o algo parecido.
