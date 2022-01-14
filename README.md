# API Spec

## 1. Article Collection

| Field Name | Type     | Description                                                             |
| ---------- | -------- | ----------------------------------------------------------------------- |
| _id        | ObjectId | Article ID is auto generate by MongoDB when admin add article           |
| title      | string   | The article title                                                       |
| img        | string   | Image of an article                                                     |
| desc       | string   | Short description about the article                                     |
| content    | string   | Main content of the article                                             |
| author     | string   | Admin name who post the article                                         |
| likes      | array    | List of the user_id who likes the article                               |
| createdAt  | date     | Article created date is auto generated by MongoDB when user add data    |
| updatedAt  | date     | Article updated date is auto generated by MongoDB when user update data |

### **a. Create Article**

This route is connected to Article collection of MongoDB. Only user with **admin** role can add the article.

Request :

- Method : POST
- Endpoint : `/article`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "title": "string",
  "img": "string",
  "desc": "string",
  "content": "string",
  "author": "string"
}
```

Response :

```json
{
  "message": "Article added successfully",
  "data": {
    "_id": "ObjectId",
    "title": "string",
    "img": "string",
    "desc": "string",
    "content": "string",
    "author": "string",
    "likes": "array",
    "createdAt": "Date",
    "updatedAt": "Date"
  }
}
```

### **b. Read All Article**

This route is connected to Article collection of MongoDB. User with **admin and member** role can read the article.

Request :

- Method : GET
- Endpoint : `/article`
- Header :
  - Accept: application/json

Response :

```json
{
  "_id": "ObjectId",
  "title": "string",
  "img": "string",
  "desc": "string",
  "content": "string",
  "author": "string",
  "likes": "array",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

### **c. Read Article by ID**

This route is connected to Article collection of MongoDB. User with **admin and member** role can read the article by id.

Request :

- Method : GET
- Endpoint : `/article/:id`
- Header :
  - Accept: application/json

Response :

```json
{
  "_id": "ObjectId",
  "title": "string",
  "img": "string",
  "desc": "string",
  "content": "string",
  "author": "string",
  "likes": "array",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

### **d. Update Article**

This route is connected to Article collection of MongoDB. Only user with **admin** role can update the article by id.

Request :

- Method : PATCH
- Endpoint : `/article/:id`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "title": "string",
  "img": "string",
  "desc": "string",
  "content": "string",
  "author": "string"
}
```

Response :

```json
{
  "message": "Article updated successfully",
  "data": {
    "_id": "ObjectId",
    "title": "string",
    "img": "string",
    "desc": "string",
    "content": "string",
    "author": "string",
    "likes": "array",
    "createdAt": "Date",
    "updatedAt": "Date"
  }
}
```

### **e. Delete Article**

This route is connected to Article collection of MongoDB. Only with **admin** role can delete the article by id.

Request :

- Method : DELETE
- Endpoint : `/article/:id`
- Header :
  - Accept: application/json

Response :

```json
{
  "message": "Article deleted"
}
```

## 2. Psychologist Profile Collection

| Field Name | Type   | Description                                                                     |
| ---------- | ------ | ------------------------------------------------------------------------------- |
| \_id       | int    | Psychologist ID is auto generate by MongoDB when admin add Psychologist profile |
| name       | string | Name of the psychologist                                                        |
| img        | string | Photo profile of the psychologist                                               |
| profile    | string | The introduction about psychologist background and experience                   |
| expertise  | array  | List of psychologist expertise area                                             |
| rating     | double | User rating of the psychologist                                                 |
| createdAt  | date   | Psychologist created date is auto generated by MongoDB when user add data       |
| updatedAt  | date   | Psychologist updated date is auto generated by MongoDB when user update         |

### **a. Create Psychologist Profile**

This route is connected to Psychologist Profile collection of MongoDB. Only user with **admin** role can add the psychologist profile.

Request :

- Method : POST
- Endpoint : `/psikolog`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "name": "string",
  "img": "string",
  "expert role": "string",
  "profile": "string",
  "expertise": "string",
  "rating": "double"
}
```

Response :

```json
{
  "message": "Psychologist profile updated successfully",
  "data": {
    "_id": "ObjectId",
    "name": "string",
    "img": "string",
    "profile": "string",
    "expertise": "string",
    "rating": "double",
    "createdAt": "Date",
    "updatedAt": "Date"
  }
}
```

### **b. Read All Psychologist Profile**

This route is connected to Psychologist Profile collection of MongoDB. User with **admin and member** role can read the psychologist profile.

Request :

- Method : GET
- Endpoint : `/psikolog`
- Header :
  - Accept: application/json

Response :

```json
{
  "_id": "ObjectId",
  "name": "string",
  "img": "string",
  "profile": "string",
  "expertise": "string",
  "rating": "double",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

### **c. Read Psychologist Profile by Id**

This route is connected to Psychologist Profile collection of MongoDB. User with **admin and member** role can read the psychologist profile by id.

Request :

- Method : GET
- Endpoint : `/psikolog/:id`
- Header :
  - Accept: application/json

Response :

```json
{
  "_id": "ObjectId",
  "name": "string",
  "img": "string",
  "profile": "string",
  "expertise": "string",
  "rating": "double",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

### **d. Update Psychologist Profile**

This route is connected to Psychologist Profile collection of MongoDB. User with **admin** role can update the psychologist profile by id.

Request :

- Method : PATCH
- Endpoint : `/psikolog/:id`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "name": "string",
  "img": "string",
  "expert role": "string",
  "profile": "string",
  "expertise": "string",
  "rating": "double"
}
```

Response :

```json
{
  "message": "Psychologist profile updated successfully",
  "data": {
    "_id": "ObjectId",
    "name": "string",
    "img": "string",
    "profile": "string",
    "expertise": "string",
    "rating": "double",
    "createdAt": "Date",
    "updatedAt": "Date"
  }
}
```

### **e. Delete Psychologist Profile**

This route is connected to Psychologist Profile collection of MongoDB. User with **admin and member** role can read the psychologist profile by id.

Request :

- Method : DELETE
- Endpoint : `/psikolog/:id`
- Header :
  - Content-Type: application/json
  - Accept: application/json

Response :

```json
{
  "message": "Psychologist profile deleted"
}
```

## 3. Users Profile Collection

| Field Name | Type   | Description                                                       |
| ---------- | ------ | ----------------------------------------------------------------- |
| \_id       | int    | User ID is auto generate by MongoDB when admin add profile        |
| name       | string | User full name                                                    |
| email      | string | User email                                                        |
| password   | string | User password                                                     |
| role       | string | User role either member or admin                                  |
| createdAt  | date   | User created date is auto generated by MongoDB when user register |
| updatedAt  | date   | User updated date is auto generated by MongoDB when user update   |

### **a. Create User Profile**

This route is connected to Users Profile collection of MongoDB. User will create this profile when he registering via register page

Request :

- Method : POST
- Endpoint : `/user`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "name": "string",
  "email": "string",
  "password": "string",
  "role": "string"
}
```

Response :

```json
{
  "message": "User created successfully",
  "data": {
    "id": "ObjectId",
    "name": "string",
    "email": "string",
    "password": "string",
    "role": "string",
    "createdAt": "Date",
    "updatedAt": "Date"
  }
}
```

### **b. Read All User Profile**

This route is connected to Users Profile collection of MongoDB. Only **admin** role can access the information of all user

Request :

- Method : GET
- Endpoint : `/user`
- Header :
  - Accept: application/json

Response :

```json
{
  "id": "ObjectId",
  "name": "string",
  "email": "string",
  "role": "string",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

### **c. Read User Profile by Id**

This route is connected to Users Profile collection of MongoDB. User who registered can see his information by visiting user page

Request :

- Method : GET
- Endpoint : `/user/:id`
- Header :
  - Accept: application/json

Response :

```json
{
  "id": "ObjectId",
  "name": "string",
  "email": "string",
  "password": "string",
  "role": "string",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

### **d. Update User's profile**

This route is connected to Users Profile collection of MongoDB. User who registered can update his profile through visiting user page and click on edit profile

Request :

- Method : PATCH
- Endpoint : `/user/id`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "name": "string",
  "password": "string"
}
```

Response :

```json
{
  "message": "User profile updated successfully"
}
```

### **e. Delete User's profile**

This route is connected to Users Profile collection of MongoDB. **Admin and member** role can deleted the user profile

Request :

- Method : DELETE
- Endpoint : `/user`
- Header :
  - Accept: application/json

Response :

```json
{
  "message": "User deleted"
}
```

## 4. Webinar Collection

| Field Name | Type   | Description                                                          |
| ---------- | ------ | -------------------------------------------------------------------- |
| \_id       | int    | Webinar ID is auto generate by MongoDB when admin add profile        |
| title      | string | Webinar title                                                        |
| thumbnail  | string | Webinar image thumbnail                                              |
| desc       | string | Description about webinar topic                                      |
| url        | string | Url of webinar video                                                 |
| likes      | array  | List of the user_id who likes the webinar                            |
| createdAt  | date   | Webinar created date is auto generated by MongoDB when user register |
| updatedAt  | date   | Webinar updated date is auto generated by MongoDB when user update   |

### **a. Create Webinar**

This route is connected to Webinar collection of MongoDB. Only **admin** role can add webinar video via dashboard

Request :

- Method : POST
- Endpoint : `/webinars`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "title": "string",
  "thumbnail": "string",
  "desc": "string",
  "url": "string"
}
```

Response :

```json
{
  "message": "Webinar added successfully",
  "data": {
    "_id": "ObjectId",
    "title": "string",
    "thumbnail": "string",
    "desc": "string",
    "url": "string",
    "create_date": "date",
    "likes": "array",
    "createdAt": "Date",
    "updatedAt": "Date"
  }
}
```

### **b. Read All Webinar**

This route is connected to Webinar collection of MongoDB. **Admin and member** role can view the webinar video by visiting webinar page

Request :

- Method : GET
- Endpoint : `/webinars`
- Header :
  - Accept: application/json

Response :

```json
{
  "_id": "ObjectId",
  "title": "string",
  "thumbnail": "string",
  "desc": "string",
  "url": "string",
  "create_date": "date",
  "likes": "array",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

### **c. Read Webinar by Id**

This route is connected to Webinar collection of MongoDB. **Admin and member** role can view the webinar video by visiting webinar page

Request :

- Method : GET
- Endpoint : `/webinars/:id`
- Header :
  - Accept: application/json

Response :

```json
{
  "_id": "ObjectId",
  "title": "string",
  "thumbnail": "string",
  "desc": "string",
  "url": "string",
  "create_date": "date",
  "likes": "array",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

### **d. Update Webinar profile**

This route is connected to Webinar collection of MongoDB. Only **admin** role can update the webinar video via dashboard

Request :

- Method : PATCH
- Endpoint : `/webinars/:id`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "name": "string",
  "email": "string",
  "password": "string",
  "role": "string",
  "create_date": "date"
}
```

Response :

```json
{
  "message": "Webinar updated successfully",
  "data": {
    "_id": "ObjectId",
    "title": "string",
    "thumbnail": "string",
    "desc": "string",
    "url": "string",
    "create_date": "date",
    "likes": "array",
    "createdAt": "Date",
    "updatedAt": "Date"
  }
}
```

### **e. Delete User's profile**

This route is connected to Webinar collection of MongoDB. Only **admin** role can delete the webinar video via dashboard

Request :

- Method : DELETE
- Endpoint : `/webinars/:id`
- Header :
  - Accept: application/json

Response :

```json
{
  "message": "Webinar deleted"
}
```

## 5. Register

This route is connected to Register of MongoDB. Only **member** role can join the website

- Endpoint : `/register`

Request :

```json
{
  "name": "string",
  "email": "string",
  "password": "string"
}
```

Response :

```json
{
  "message": "user created"
}
```

## 6. Login

This route is connected to Login of MongoDB. Only **member** role can join the website

- Endpoint : `/login`

Request :

```json
{
  "email": "string",
  "password": "string"
}
```

Response :

```json
{
  "accessToken": "string"
}
```

## 7. Coaching Collection

| Field Name | Type   | Description                                                          |
| ---------- | ------ | -------------------------------------------------------------------- |
| \_id       | int    | Coaching ID is auto generate by MongoDB when admin add profile       |
| materials  | string | coaching materials                                                   |
| content    | string | Main content about coaching topic                                    |
| coach      | string | coach who attending coaching                                         |
| categories | string | category about coaching topic                                        |

### **a. Create Coaching**

This route is connected to coaching collection of MongoDB. Only **admin** role can add coaching video via dashboard

Request :

- Method : POST
- Endpoint : `/coaching`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "materials": "string",
  "content": "string",
  "coach": "string",
  "categories": "array"
}
```

Response :

```json
{
  "message": "coaching added successfully",
  "data": {
    "_id": "ObjectId",
    "materials": "string",
    "content": "string",
    "coach": "string",
    "categories": "array",
    "create_date": "date",
    "createdAt": "Date",
    "updatedAt": "Date"
  }
}
```

### **b. Read All coaching**

This route is connected to coaching collection of MongoDB. **Admin and member** role can view the coaching video by visiting coaching page

Request :

- Method : GET
- Endpoint : `/coaching`
- Header :
  - Accept: application/json

Response :

```json
{
  "_id": "ObjectId",
  "materials": "string",
  "content": "string",
  "coach": "string",
  "categories": "array",
  "create_date": "date",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

### **c. Read Coaching by Id**

This route is connected to coaching collection of MongoDB. **Admin and member** role can view the coaching video by visiting coaching page

Request :

- Method : GET
- Endpoint : `/coaching/:id`
- Header :
  - Accept: application/json

Response :

```json
{{
  "_id": "ObjectId",
  "materials": "string",
  "content": "string",
  "coach": "string",
  "categories": "array",
  "create_date": "date",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

### **d. Update coaching profile**

This route is connected to coaching collection of MongoDB. Only **admin** role can update the coaching via dashboard

Request :

- Method : PATCH
- Endpoint : `/coaching/:id`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "materials": "string",
  "content": "string",
  "coach": "string",
  "categories": "array"
}
```

Response :

```json
{
  "message": "coaching updated successfully",
  "data": {
    {
      "_id": "ObjectId",
      "materials": "string",
      "content": "string",
      "coach": "string",
      "categories": "array",
      "create_date": "date",
      "createdAt": "Date",
      "updatedAt": "Date"
    }
  }
}
```

### **e. Delete coaching
This route is connected to coaching collection of MongoDB. Only **admin** role can delete the coaching via dashboard

Request :

- Method : DELETE
- Endpoint : `/coaching/:id`
- Header :
  - Accept: application/json

Response :

```json
{
  "message": "coaching deleted"
}
```