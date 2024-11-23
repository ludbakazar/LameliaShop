# lameliaShop API Documentation

## Endpoints :

List of available endpoints:

- `POST /login`
- `POST /register`

&nbsp;

## 1. POST /login

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_

```json
{
  "access_token": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Password is required"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid email or password"
}
```

&nbsp;

## 2. POST /register

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- body:

```json
{
  "email": "string",
  "password": "string",
  "name": "string"
}
```

_Response (201 - Ok)_

```json
{
  "id": "integer",
  "name": "string",
  "email": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Password is required"
}
OR
{
  "message": "Name is required"
}
OR
{
  "message": "Invalid must be email format"
}
OR
{
  "message": "Email already exists"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid Token"
}
```

_Response (403 - Forbidden)_

```json
{
  "message": "You don't have permission"
}
```

&nbsp;
