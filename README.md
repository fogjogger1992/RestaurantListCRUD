# Restaurant List
A simple site built by Node.js and Express. Restaurant list with create, read, update, and delete functions.

# Features
1. Click on the listed restaurants or the "Detail" button to get further information
2. Search a certain restaurant by entering keywords to the search bar
3. Click on the "新增餐廳" button on the nav bar to create a new restaurant
4. Click on the "Edit" button to update the information
5. Click on the "Delete" button to remove the restaurant from the list

# Installation
1. Clone the repository to your computer
```
git clone https://github.com/fogjogger1992/RestaurantListCRUD.git
```
2. CD to project folder
```
cd restaurant_list_crud
```
3. Install npm 
```
npm init -y
```
4. Install nodemon
```
npm install -g nodemon
```
5. Install express
```
npm install express
```
6. Install Express-handlebars
```
npm install express-handlebars
```
7. Install Body-parser
```
npm install body-parser
```
8. Download [mongodb](https://www.mongodb.com/) and make folder to conncet with mongodb 
```
mkdir mongodb-data
cd ~/mongodb/bin
$ ./mongod --dbpath /Users/[your username]/[mongodb-data's path]/mongodb-data
```
9. Create data in mongodb
```
npm run seed
```
10. Initiate server and execute the website
```
npm run dev 
```
Terminal show the message 
```
Server is running on http://localhost:3000 
mongodb connected!
```

# Development Environment 
* Visual studio code 
* Express: 4.17.1
* Express-handlebars: 5.2.1
* Node.js: 10.15.3
* Nodemon: 2.0.7
* Body-parser: 1.19.0
* Mongodb: 4.2.13
* Mongoose: 5.12.1