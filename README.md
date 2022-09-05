# Project: Learn Express V2
## LetsCookin Apps API

Specified note or rules for each method already written below, please read carefully!
# 📁 Collection: User API 


## End-point: Get All Users
API to get all users data

| **Success Response** | **Error Response** |
| --- | --- |
| **NO PARAM**  <br>Will show all data | **NO PARAM**  <br>Couldn't get users data |
| **WITH PARAM**  <br>Will show data depend on the limit and page | **WITH PARAM**  <br>Limit <0 : Limit must be a positive number |
|  | **WITH PARAM**  <br>Page <= 0 : Page must be greater than 1  <br>Page over limit : Couldn't get users data |
|  | **WITH PARAM** :  <br>Param isn't a integer:  <br>System expect a number, but the input isn't a number |
### Method: GET
>```
>http://localhost:8000/letscookinapps/users
>```
### Headers

|Content-Type|Value|
|---|---|
|Origin|http://www.youtube.com|


### Headers

|Content-Type|Value|
|---|---|
|Vary|Origin|


### Query Params

|Param|value|
|---|---|
|limit|2|
|page|1|


### 🔑 Authentication noauth

|Param|value|Type|
|---|---|---|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get User Profile
An API to get specified user data

| **Success Response** | **Error Response** |
| --- | --- |
| Showing data user with specified Id | **Id isn't integer** :  <br>System expect a number, but the input isn't a number |
|  | **Id not in the system** :  <br>User not found |
### Method: GET
>```
>http://localhost:8000/letscookinapps/users/id
>```
### 🔑 Authentication noauth

|Param|value|Type|
|---|---|---|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Add User
An API to add a user/we can use it as register

| **Success Response** | **Error Response** |
| --- | --- |
| Registration succesful! | **Email is exist on system** :  <br>Email has been used! |
|  | **Phonenumber isn't a integer** :  <br>Phonenumber format must be a number and at least have more than 11 digits |
|  | **Mandatory field is blank** :  <br>Email, password and name is required. Do not leave it blank! |
|  | **Profile picture isn't jpeg/png/jpg** :  <br>Sorry, only png/jpg/jpeg is allowed |
### Method: POST
>```
>http://localhost:8000/letscookinapps/users
>```
### Body formdata

|Param|value|Type|
|---|---|---|
|name| Lucas|text|
|email| lucas1234567@gmail.com|text|
|password|1234|text|
|phoneNumber| 081297915977|text|
|profilePicture|/C:/Users/goodb/Downloads/rest-api.png|file|


### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token||string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Add Comment
An API to add comment on recipe

| **Success Response** | **Error Response** |
| --- | --- |
| Comment has been posted! | **Adding a blank comment** :  <br>lease type something to post a comment! |
|  | **Recipe id not exist** :  <br>Recipe not found |
|  | **User id not exist** :  <br>User not found |
### Method: POST
>```
>http://localhost:8000/letscookinapps/recipes/detail/
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImVtYWlsIjoiZWx6YS5lc3RlcmluYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMiRCQk5LdFRZNUs2a1AxZ1JKTkc4ZEdPbzNYT0pmaDJKYndKOG5kenY1dS9vT0VXR0cvVlpUYSIsIm5hbWUiOiJFbHphIEVzdGVyaW5hIiwicGhvbmVudW1iZXIiOiIwODEyOTc5MTU5MTEiLCJwcm9maWxlX3BpY3R1cmUiOm51bGwsImlhdCI6MTY1NjQ1NzEwMywiZXhwIjoxNjU2NDYwNzAzfQ.RjRyOrMMqo0zQEYRjlElw7pVyVxsEv3VL6POSKFLibY|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Edit User
An API to edit specified user information

| **Success Response** | **Error Response** |
| --- | --- |
| Update profile succesful! | **Unexpected error** :  <br>There is something wrong |
|  | **Phonenumber isn't a integer** :  <br>Phonenumber format must be a number and at least have more than 11 digits |
|  | **Using edit with same email or with existing email** :  <br>Email has been used! |
|  | **Profile picture not jpg/jpeg/png format** :  <br>Sorry, only png/jpg/jpeg is allowed |
|  | **User id not exist in system** :  <br>User not found |
### Method: PATCH
>```
>http://localhost:8000/letscookinapps/users
>```
### Body formdata

|Param|value|Type|
|---|---|---|
|id|12|text|
|name|Acong Bahlulx|text|
|email||text|
|password||text|
|phoneNumber||text|
|profilePicture|/C:/Users/goodb/Downloads/Unofficial_JavaScript_logo_2.png|file|


### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImVtYWlsIjoiZWx6YS5lc3RlcmluYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMiRCQk5LdFRZNUs2a1AxZ1JKTkc4ZEdPbzNYT0pmaDJKYndKOG5kenY1dS9vT0VXR0cvVlpUYSIsIm5hbWUiOiJFbHphIEVzdGVyaW5hIiwicGhvbmVudW1iZXIiOiIwODEyOTc5MTU5MTEiLCJwcm9maWxlX3BpY3R1cmUiOm51bGwsImlhdCI6MTY1NjQ2MDgzNywiZXhwIjoxNjU2NDY0NDM3fQ.M13HuwwIhhUaMAvgkD9unVcl4uiXtXbCXUPrS-CPGIU|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete User
An API to delete specified user

| **Success Response** | **Error Response** |
| --- | --- |
| Delete succesful! | **User id not exist in system** :  <br>User not found |
|  | **User id isn't a integer** :  <br>System expect a number, but the input isn't a number |
### Method: DELETE
>```
>http://localhost:8000/letscookinapps/users
>```
### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJlbHphLmVzdGVyaW5hQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEyJGprRmViMTk5dGhWSEpJRG9vQ3g3aS5udldHZHVQeEptS0V5QjZxb0RvTDlXeE9XbGVuajJhIiwibmFtZSI6IkVsemEgRXN0ZXJpbmEiLCJwaG9uZW51bWJlciI6IjA4MTI5NzkxNTk3NyIsInByb2ZpbGVfcGljdHVyZSI6bnVsbCwiaWF0IjoxNjU2NTE5MzY4LCJleHAiOjE2NTY1NjI1Njh9.6G7TNC5ImiSqL-cDoS0jR8EswTkpEO0AMYZIJG0ywyk|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Recipes API 


## End-point: Get All Recipe
API to get all recipes data

| **Success Response** | **Error Response** |
| --- | --- |
| **NO PARAM**  <br>Will show all data | **NO PARAM**  <br>Couldn't get recipes data |
| **WITH PARAM**  <br>Will show data depend on the limit and page | **WITH PARAM**  <br>Limit <0 : Limit must be a positive number |
|  | **WITH PARAM**  <br>Page <= 0 : Page must be greater than 1  <br>Page over limit : Couldn't get recipes data |
|  | **WITH PARAM** :  <br>Param isn't a integer:  <br>System expect a number, but the input isn't a number |
### Method: GET
>```
>http://localhost:8000/letscookinapps/recipes/?limit=10&page=3
>```
### Query Params

|Param|value|
|---|---|
|limit|10|
|page|3|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get Detail Recipe
An API to get specified recipe information

| **Success Response** | **Error Response** |
| --- | --- |
| Show the specified recipe information | **Id isn't an integer** :  <br>System expect a number, but the input isn't a number |
|  | **Id not exist in system :  <br>**Recipe not found |
### Method: GET
>```
>http://localhost:8000/letscookinapps/recipes/detail/
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get New Recipe
### Method: GET
>```
>http://localhost:8000/letscookinapps/recipes/new-recipe/
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Search Recipe By Name
An API to search recipe by their title, this search using LIKE.  
So you don't need type the entire title to search recipe

| **Success Response** |  |
| --- | --- |
| Showing data that including your input | **Not Found**:  <br>Recipe not found |
### Method: GET
>```
>http://localhost:8000/letscookinapps/recipes/search/:title
>```
### Query Params

|Param|value|
|---|---|
|:name|null|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Add Recipe
An API to add recipe

| **Success Response** | **Error Response** |
| --- | --- |
| Adding recipe is success! | **Unexpected error** :  <br>There is something wrong |
|  | **Mandatory field is blank:  <br>**Title, ingredients and author is required |
|  | **Author/user not found** :  <br>User not found |
|  | **Picture isn't jpg/jpeg/png**:  <br>Sorry, only png/jpg/jpeg is allowed |
|  | **Video isnt mp4** :  <br>Sorry, only mp4 is allowed |
### Method: POST
>```
>http://localhost:8000/letscookinapps/recipes/
>```
### Body formdata

|Param|value|Type|
|---|---|---|
|title|Nasi Gila|text|
|ingredients|Nasi, cabai|text|
|recipePicture|/C:/Users/goodb/Downloads/WhatsApp Image 2022-06-29 at 7.53.24 AM.jpeg|file|
|recipeVideo|/C:/Users/goodb/Videos/RF Online/RF Online 2021.10.29 - 18.59.59.01.mp4,/C:/Users/goodb/Videos/RF Online/RF Online 2021.11.02 - 23.38.33.01.mp4|file|
|userId|1|text|


### 🔑 Authentication bearer

|Param|value|Type|
|---|---|---|
|token|eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJlbHphLmVzdGVyaW5hQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEyJGprRmViMTk5dGhWSEpJRG9vQ3g3aS5udldHZHVQeEptS0V5QjZxb0RvTDlXeE9XbGVuajJhIiwibmFtZSI6IkVsemEgRXN0ZXJpbmEiLCJwaG9uZW51bWJlciI6IjA4MTI5NzkxNTk3NyIsInByb2ZpbGVfcGljdHVyZSI6bnVsbCwiaWF0IjoxNjU2NTYyNjA2LCJleHAiOjE2NTY2MDU4MDZ9.K8D6g6GCruk5vHWz_0ADAQ0gL9eG-7Q9QhQLI9CUxgY|string|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Edit Recipe
An API to edit specified recipe information:

| **Success Response** | **Error Response** |
| --- | --- |
| Recipe has been updated! | **Unexpected error** :  <br>There is something wrong |
|  | **Author/user not found** :  <br>User not found |
|  | **Picture isn't jpg/jpeg/png**:  <br>Sorry, only png/jpg/jpeg is allowed |
|  | **Video isnt mp4** :  <br>Sorry, only mp4 is allowed |
### Method: PATCH
>```
>http://localhost:8000/letscookinapps/recipes/
>```
### Body formdata

|Param|value|Type|
|---|---|---|
|id||text|
|title|Seblakx|text|
|ingredients|Kerupukx|text|
|recipePicture||file|
|recipeVideo||file|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete Recipe
An API to delete specified recipe

| **Success Response** | **Error Response** |
| --- | --- |
| Recipe has been deleted! | **Id not exist in system** :  <br>Recipe not found |
|  | **Id isn't a integer** :  <br>System expect a number, but the input isn't a number |
### Method: DELETE
>```
>http://localhost:8000/letscookinapps/recipes
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: Auth API 


## End-point: Login
An API to login to the system, that required a correct email and password

| **Success Response** | **Error Response** |
| --- | --- |
| Login succesful and show the token that can used as authorize token to run specified API | **Email isn't exist in system :  <br>**We couldn't found the email. |
|  | **Password isn't match with the hashed password:  <br>**Incorrect password |
### Method: POST
>```
>http://localhost:8000/letscookinapps/login/
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
_________________________________________________
Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
