
![mobile](https://user-images.githubusercontent.com/76554103/118412002-44c95580-b6a0-11eb-946b-23e529cd7e39.png)
![mobile2](https://user-images.githubusercontent.com/76554103/118412005-48f57300-b6a0-11eb-9694-e06ff74c1a58.png)
# SweetVibes
SweetVibes Project : 'is a project that tooked from an idea , and the idea was that a women that make a chocolate bites, so it named her shop with 'SweetVibes Bites' , so this Project 'Website' containes : 
1- Home Page.
2- NavBar.
3- Sign In / Sign Up Page.
4- Sign In With Google ID.
5- Shop Page.
6- Cart.
7- Order Procresses Complete.
8- Ramdan Mode.
9- User Order Status.
10- Logout.
11- Admin Login.
12- Admin Storage Page.
13- Admin Customers Order Page.
14- Admin Inbox Notfication Page.
15- About Us.
## Introduction
Home Page : In home page contains 'Main Product Picture' that made in Valentine Day , after that it will show all the products that in the store , and in each picture it give you able to see the name of the product and able to click on 
'Shop Now' that it will takes you to 'the same product page' , and in the end of the page there is why to choose our SweetVibes Shop , and of course the footer of the page.
Navigation Bar : NavBar contains the logo of the shop , and then it ' Home | Shop | About Us ' and 'Sign In' with flexibility of using the NavBar.
Sign In / Sign Up Page : here it easily give you to make an account that you can store your information when you process to make an order. , and of course we using the tool 'jsonwebtoken' that it will make your password is completely 'hashed' in our database , it means that only you know your password.
Sign In With Google ID : it easily to login with your google account with one-click , that give you the ability to  signin very fast , and fitch all your data information with your picture logo.
Shop Page : the 'Shop Page' is the main / function page in the store , that give you to see all the products that in the store with the price of each of each product , in give you the ability to add the product in a cart or order this product only , and give you in one-click to see 'Full Product View' and all the information you need to know about this product , and you can choose what you prefer to do , that to 'add the product to cart' that give you sll the ablity of all products that you have or the you can do a buy only a one product with the quntity that you want.
Cart : the cart is importent thing that made in this shop , that allow you to see all the products that you want to buy , with the picture of each product , the name , and the price of each product , and give you the ability to increase / discrease the quntity of the product , and then you can clear the cart or order the cart that you have been choosed.
Order Procresses Complete : after you have been choosed your cart and your products that you want to buy , the shop will take you to finish you order , how this work ? ' you need to sign in or sign up to complete your order that you shop will take access to get all your personality information like your 'Full Name' , 'Email' , and then the page will take from you , your phone number and your address that the admin can contact you , and give you your order.
Ramdan Mode :  Ramdan Mode , a tool that give you to feel Ramadan atmosphere , that after activing this tool it will change the NavBar background color to the 'dim grey color' , and changing the logo from regular to ramdan logo one , and it will change the cart background to dim grey color that it will give a beatifull view for the website.
User Order Status : in your profile setting you can access to your orders , that you can see all your orders that you have been made , and you can track your order progresser , to see if the admin has been finished to make your products , and send them to you , and you can delete your order only if the admin didn't statred to make them , and the order didn't tooked not more than a day.
Logout : this tool will give you the ability to logout from your accoun.
Admin Login : Administrator Tools Accesses are avalible in this website , the admin have an account with name ' SweetVibes Admin' that give him all the Comfortable to reach to his database and to edit all the stuffs that he want.
Admin Storage Page : the admin can add a new products with 'Image / detials / price' of his product , and then he can see a table of all the products that in the store with a easy and beatifull view for the table , that it will show [ Tools : 'Edit / Delete' , Product Image , Product ID (that it will give the admin to easily edit the home page products to go to 'Full View Product' to this product) , Product Name , Product Detials , Product Price , Created By (Admin Name , that it maybe be more than one admin) and Created At(when the prodcut has been added to the database)] , and of course after all actions like ' Edit , Add , Delete ' it will give an nofication that the action has been succesfully done.
Admin Customers Order Page : this page give the admin full accessibility to his customers orders , that every order are shown in this page will be in '3 Background Colors' that it will give the mean of each order , the admin can see [Order ID (that the customer can contact you about his order) ,Customer Name , Customer Email , Customer Address , Customer Phone , Total Price , Customer Order ( here the admin can see the products with the image product and the quntity of the product that it give for the admin the comfortability to prepare the bites the products) , Created At and the Status ( here the admin can choose what happen with the customer order like [1- [ORDER IN PROGRESS - Color White] that mean the order is new ,  2- [READY - Color Grey] if the admin has been prepared the products that he customer ordered , 3- [DONE - Color Purple] if the products has been delevired to the customer , 4- [NOT PREFERED] the admin can delete the orders , but I prefer not to delete the orders , that it will give the ablity to the customer to track his order and to see which orders he has been made ).
Admin Inbox Notfication Page : here it will give the admin to see all the actions that the customer made , if he add a new order , that it will show a new notifcation that been added with the customer name ,  and if the customer deleted his order it will give a new notifcation for the admin , and the admin can see [3 Type] 1- the first type it will show you the new notifcation ( and after veiwing the notifcation it will be disappeared after 1 minute) , 2- the second type that it will show all the notfication that you have been opened , 3- the third type that it will show all the notifcation that has been or seen or not .
About Us : this page give the customer the ablity to feel free to contuct us and send for us the feedback.
## Programing
In this project , I used a group of programing launguage :
This Project built with React
1- Html
2- Css
3- Sass
4- Material ui
5- Node.js
6- MongoDB
7- Express
## Setup
- run ```cd server && npm i && npm start``` for the back end side
- run ```cd client && npm i && npm start``` for the fronted side
