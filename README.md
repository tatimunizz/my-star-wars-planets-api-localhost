# Planetas Star Wars
​
Essa API cadastra, lista, busca e remove planetas do mundo do Star Wars.
​
## Parâmetros Obrigatórios
​
- nome
  - **O que é?** Nome de um planeta existente no mundo do Star Wars.
  - **De onde vem?** Inserido no corpo da requisição.
​
- clima
  - **O que é?** Clima do planeta.
  - **De onde vem?** Inserido no corpo da requisição.
​
- terreno
  - **O que é?** Tipo de terreno do planeta.
  - **De onde vem?** Inserido no corpo da requisição.
​
​
## Listar planetas

- Endpoint - `https://localhost:3333/`
- Método - `GET`

## Uso

/
​
## Retorno

- Quando deu certo.
```json
{
    "status_code": 200,
    "count": 2,
    "data": [
        {
            "_id": "609d7769a516a93624990d2c",
            "nome": "Alderaan",
            "clima": "temperate",
            "terreno": "grasslands, mountains",
            "filmes": 2,
            "__v": 0
        },
        {
            "_id": "609d85d4b40b0811cc108551",
            "nome": "Saleucami",
            "clima": "hot",
            "terreno": "caves, desert, mountains, volcanoes",
            "filmes": 1,
            "__v": 0
        }
    ]
}
```
Obs.: Essa lista pode aumentar ou diminuir conforme for adicionando ou apagando cadastros. Não se preocupe se a sua resposta vier diferente do que estamos mostrando.

## Adicionar um planeta

- Endpoint - `https://localhost:3333/`
- Método - `POST`

## Uso

/


body(raw):
```json
{
    "nome": "saleucami",
    "clima": "hot",
    "terreno": "caves, desert, mountains, volcanoes"
}
```
## Retorno

- Quando deu certo.
```json
{
    "status_code": 201,
    "data": {
        "_id": "609eb17e8f571d0ce475eb43",
        "nome": "Naboo",
        "clima": "temperate",
        "terreno": "grassy hills, swamps, forests, mountains",
        "filmes": 4,
        "__v": 0
    }
}
```
- Quando deu errado porque o planeta já está cadastrado.
```json
{
    "status_code": 200,
    "message": "Não pode ser efetuado o cadastro do planeta de nome 'Saleucami' pois ele já está cadastrado no nosso banco de dados."
}
```

- Quando deu errado porque está faltando um parâmetro obrigatório.
```json
{
    "status_code": 500,
    "message": "planets validation failed: terreno: Path `terreno` is required."
}
```

## Buscar planeta por Nome

- Endpoint - `https://localhost:3333/planeta-com-nome`
- Método - `POST`

## Uso

/planeta-com-nome
​
body(raw):
```json
{
    "nome": "Alderaan"
}
```
## Retorno

- Quando deu certo.
```json
{
    "status_code": 200,
    "data": [
        {
            "_id": "609d7769a516a93624990d2c",
            "nome": "Alderaan",
            "clima": "temperate",
            "terreno": "grasslands, mountains",
            "filmes": 2,
            "__v": 0
        }
    ]
}
```
- Quando deu errado porque o planeta não está cadastrado.
```json
{
    "status_code": 400,
    "message": "O planeta com o nome Aldern não foi encontrado."
}
```

## Buscar planeta por ID

- Endpoint - `https://localhost:3333/:id`
- Método - `GET`

## Uso

/:id

Exemplo: /609d7769a516a93624990d2c
​
## Retorno

- Quando deu certo.
```json
{
    "status_code": 200,
    "data": [
        {
            "_id": "609d7769a516a93624990d2c",
            "nome": "Alderaan",
            "clima": "temperate",
            "terreno": "grasslands, mountains",
            "filmes": 2,
            "__v": 0
        }
    ]
}
```
- Quando deu errado porque a ID passada não existe.
```json
{
    "status_code": 404,
    "message": "O planeta com o ID '609d7769a516a93624990d' não foi encontrado."
}
```

## Remover um planeta

- Endpoint - `https://localhost:3333/:id`
- Método - `DELETE`

## Uso

/:id

Exemplo: /609eb17e8f571d0ce475eb43
​
## Retorno

- Quando deu certo.
```json
{
    "status_code": 200,
    "message": "Planeta com ID '609eb17e8f571d0ce475eb43' foi deletado com sucesso."
}
```
- Quando deu errado porque a ID passada não existe.
```json
{
    "status_code": 500,
    "message": "Planeta com ID '609eb17e8f571d0ce475eb4' não foi encontrado."
}
```
