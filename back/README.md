# Number Generator API

This is an Hono api to genrate on or more random numbers between a min and a max.

## Run locally

```sh
npm install
export CORS=[YOUR_CORS] && npm run dev
```

## Routes

- `GET /random`: Generate one random number between `min` and `max` (default: 1 and 100)
- `GET /random/:length`: Generate `length` random numbers between `min` and `max` (default: 1 and 100, length default: 5)

## Tests commands

```sh
curl "http://localhost:3000/random"  # Number between 1 and 100
curl "http://localhost:3000/random?max=10"   # Number between 1 and 10
curl "http://localhost:3000/random?min=10&max=20"  # Number between 10 and 20

curl "http://localhost:3000/random/19" # 19 random numbers between 1 and 100
curl "http://localhost:3000/random/19?max=10"  # 19 random numbers between 1 and 10
curl "http://localhost:3000/random/19?min=10&max=20"  # 19 random numbers between 10 and 20
```
