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

/games?subject=math&level=easy&type=txt  
          // El type puede ser math ó language,
          // El level: easy,medium,hard
          // El type puede ser  mtc(multiple choice) ó txt(tipo texto), en este ultimo caso correctAnswer seria siempre 1 y el array de respuestas tendria siempre un unico valor.

Retorna: un array de juegos

```
[
    {
      "games": [
          {
              "id": "16",
              "subject": "language",
              "type": "mtc",
              "level": "hard",
              "question": "¿Cuántos meses tienen 28 días?",
              "correctAnswer": "3",
              "answers": [
                  {
                      "answerItem": "Uno"
                  },
                  {
                      "answerItem": "Ninguno"
                  },
                  {
                      "answerItem": "Todos"
                  }
              ]
          },
          {
              "id": "17",
              "subject": "language",
              "type": "mtc",
              "level": "hard",
              "question": "Todos me quieren para descansar. Si ya te lo he dicho, no lo pienses más. ¿Qué soy?",
              "correctAnswer": "3",
              "answers": [
                  {
                      "answerItem": "nada"
                  },
                  {
                      "answerItem": "cama"
                  },
                  {
                      "answerItem": "silla"
                  }
              ]
          }
      ]
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
