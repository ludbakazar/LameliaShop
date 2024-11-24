# lameliaShop API Documentation

## Endpoints :

List of available endpoints:

- `POST /login`
- `POST /register`
- `GET /products`
- `GET /products/:id`
- `POST /products`
- `PUT /products/:id`
- `DELETE /products/:id`
- `GET /categories`
- `POST /categories`

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

## 3. GET /products

Request:

- headers:

```json
{
  "access_token": "string"
}
```

_Response (200 - Ok)_

```json
[
    {
        "id": 3,
        "name": "Oversized Striped Crew Neck T-Shirt | Half Sleeve",
        "imageUrl": "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/465492/item/goods_69_465492_3x4.jpg?width=369",
        "stock": 30,
        "price": 199000,
        "CategoryId": 1,
        "createdAt": "2024-11-23T05:10:48.615Z",
        "updatedAt": "2024-11-23T05:10:48.615Z",
        "Category": {
            "id": 1,
            "name": "T-Shirt",
            "createdAt": "2024-11-23T05:10:48.606Z",
            "updatedAt": "2024-11-23T05:10:48.606Z"
        }
    },
    {
        "id": 2,
        "name": "Oversized Striped Crew Neck T-Shirt | Half Sleeve",
        "imageUrl": "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/465492/item/goods_69_465492_3x4.jpg?width=369",
        "stock": 10,
        "price": 199000,
        "CategoryId": 1,
        "createdAt": "2024-11-23T05:10:48.615Z",
        "updatedAt": "2024-11-23T05:10:48.615Z",
        "Category": {
            "id": 1,
            "name": "T-Shirt",
            "createdAt": "2024-11-23T05:10:48.606Z",
            "updatedAt": "2024-11-23T05:10:48.606Z"
        }
    }, ...
]
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid Token"
}
```

&nbsp;

## 4. GET /products/:id

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": "number"
}
```

_Response (200 - Ok)_

```json
{
  "id": 3,
  "name": "Oversized Striped Crew Neck T-Shirt | Half Sleeve",
  "imageUrl": "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/465492/item/goods_69_465492_3x4.jpg?width=369",
  "stock": 30,
  "price": 199000,
  "CategoryId": 1,
  "createdAt": "2024-11-23T05:10:48.615Z",
  "updatedAt": "2024-11-23T05:10:48.615Z",
  "Category": {
    "id": 1,
    "name": "T-Shirt",
    "createdAt": "2024-11-23T05:10:48.606Z",
    "updatedAt": "2024-11-23T05:10:48.606Z"
  }
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid Token"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Not found"
}
```

&nbsp;

## 5. POST /products

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
  "name": "string",
  "imageUrl": "string",
  "stock": "number",
  "price": "number",
  "CategoryId": "number"
}
```

_Response (201 - Created)_

```json
{
  "id": 7,
  "name": "Stelan Bola Nike Air",
  "imageUrl": "goooogggg",
  "stock": 10,
  "price": 1590000,
  "CategoryId": 1,
  "updatedAt": "2024-11-24T04:33:13.282Z",
  "createdAt": "2024-11-24T04:33:13.282Z"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid Token"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Name is required"
}
OR
{
  "message" : "Image Url is required"
}
OR
{
  "message" : "Stock is required"
}
OR
{
  "message" : "Price is required"
}
```

&nbsp;

## 6. PUT /products/:id

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": "number"
}
```

- body:

```json
{
  "name": "string",
  "imageUrl": "string",
  "stock": "number",
  "price": "number",
  "CategoryId": "number"
}
```

_Response (200 - Ok)_

```json
{
  "id": 7,
  "name": "Stelan Bola Nike Air",
  "imageUrl": "goooogggg",
  "stock": 10,
  "price": 1590000,
  "CategoryId": 1,
  "updatedAt": "2024-11-24T04:33:13.282Z",
  "createdAt": "2024-11-24T04:33:13.282Z"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid Token"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Name is required"
}
OR
{
  "message" : "Image Url is required"
}
OR
{
  "message" : "Stock is required"
}
OR
{
  "message" : "Price is required"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Not Found"
}
```

&nbsp;

## 7. DELETE /products/:id

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": "number"
}
```

_Response (200 - Ok)_

```json
{
  "message": "Product deleted successfully"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid Token"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Not Found"
}
```

&nbsp;

## 8. GET /categories

Request:

- headers:

```json
{
  "access_token": "string"
}
```

_Response (200 - Ok)_

```json
{
  [
    {
        "id": 1,
        "name": "T-Shirt",
        "createdAt": "2024-11-23T05:10:48.606Z",
        "updatedAt": "2024-11-23T05:10:48.606Z"
    },
    {
        "id": 2,
        "name": "Jaket",
        "createdAt": "2024-11-23T05:10:48.606Z",
        "updatedAt": "2024-11-23T05:10:48.606Z"
    },
    {
        "id": 3,
        "name": "Polo Shirt",
        "createdAt": "2024-11-23T05:10:48.606Z",
        "updatedAt": "2024-11-23T05:10:48.606Z"
    },
    ...
  ]
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid Token"
}
```

&nbsp;

## 9. POST /categories

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- Body:

```json
{
  "name": "string"
}
```

_Response (201 - Created)_

```json
{
  "id": 6,
  "name": "Outerwear",
  "updatedAt": "2024-11-24T06:19:49.843Z",
  "createdAt": "2024-11-24T06:19:49.843Z"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Name is required"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid Token"
}
```

&nbsp;
