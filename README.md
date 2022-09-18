# NodeJS API with Auth Using Mysql and JWT

## Include
1. Sign in
2. Sign up
3. Dashboard (Access Page After JWT)

## API endpoints

1. `POST /api/auth/signup`: Creates a new user
2. `POST /api/auth/signin`: Logs in a user
2. `POST /api/module/accessPage`: Access Page after Authentication 


## Body Payload Specification
Signup expects

```js
{
    firstname: string,
    lastname: string,
    email: string,
    password: string
}
```

Signin expects

```js
{
    email: string,
    password: string
}
```

## Getting started


Clone the repository and rename .envExample to .env


Run npm install


```sh
npm install
```

Initialize the database with

```sh
npm run db:init
```

Start the app with

```sh
npm start
```

You can also start it in watch mode with

```sh
npm run start:dev
```
