# 🌸 GirlLEAD_backend_engineer_daily-api 🌸

---

## CRUD API for a To-Do List Application

### Intro

In this assignment I was tasked with writing a CRUD API for a to-do list application. I decided to link this creation closely to the role of a backend engineer and also the institution GirlLEAD. I decided to call it **GirlLEAD Backend Engineer API**.

The reason I chose this is because I want to write a to-do list that showcases a day in the life of a backend engineer on the job, using the to-do list to manage their tasks. This reflects what CRUD is all about.

**CRUD** stands for **Create**, **Read**, **Update**, and **Delete**
A CRUD API is a web service that lets clients Create, Read, Update, and Delete resources, like your tasks, over the web.

Now, based on the backend engineer role, this API will allow them to
**Create** – Post or add a new task
**Read** – Get all tasks or one task
**Update** – Put or edit an existing task
**Delete** – Remove or delete a task

### Step 1

I decided to use **VS Code** because I love how versatile and convenient it is. I then made sure I downloaded **Node.js** on my system.

**Tools used**
Node.js
VS Code

### Step 2

I created a folder on my PC and named it
`GirlLEAD_backend_engineer_daily_api`

I opened the folder in VS Code and opened a new terminal. This is what I will use to run commands. Commands are simply ways to give instructions to your computer.

I used Node.js to initialize my project by writing this command in the terminal

```bash
npm init -y

```
![t1](https://github.com/user-attachments/assets/264c938b-e5c3-45f4-ae73-fa33dad82f33)


This command tells Node.js that I am starting a new project. It creates a special file that manages my project’s information.
It creates a file called `package.json` which helps me keep track of the project name, version control, and dependencies.

### Step 3

Now I will install the required packages. These packages will add tools that the app needs in order to work properly.

**express** lets me build the API
**mongoose** lets me talk to MongoDB, the database
**dotenv** lets me keep my database link secret
**nodemon** automatically restarts the server when I make changes

Now that I have identified which tools I want to use and how they will each help, I will install them one by one using the terminal

```bash
npm install express

npm install mongoose

npm install dotenv

npm install --save-dev nodemon


```
# npm install express - 
helps build the actual API routes like GET, POST, PUT, and DELETE.
![t2](https://github.com/user-attachments/assets/81156e31-2d13-4fb7-bbb4-9c93d0d9b4c5)

# npm install mongoose
allows the app to communicate with MongoDB, where the tasks will be saved.
![t3](https://github.com/user-attachments/assets/547ab52c-87c1-4eee-858e-8262a5f0f5c4)

# npm install dotenv
helps create a .env file to hide secret information, such as the database link.
![t4](https://github.com/user-attachments/assets/51a07547-4684-41a6-997b-74e23cee529b)

# npm install --save-dev nodemon
watches the files and automatically restarts the server every time a change is saved.
![t5](https://github.com/user-attachments/assets/7311a086-440b-4e65-9ef2-bd346582d611)

---

### Step 4 Create the First Server File

I created the first server file. What role will this file play? Here is what I will do:

* Make a file called `server.js`
* Use this file to start my backend server with Express
* Connect to my MongoDB database using Mongoose
* Listen for API requests

I will call this file `server.js`.

---

### What My server.js Code Does

I import the tools I need — Express to build the API, Mongoose to connect to the database, and Dotenv to load secret settings.

I load environment variables from a `.env` file so I can keep my database connection string secret.

I create an Express app and tell it to understand JSON data sent by users.

I connect to my MongoDB database using Mongoose and handle success or error messages.

I set up a simple route `/` that sends a friendly message so I know the API is working.

I start my server, telling it to listen on a port (5000 by default) and log a message when the server is ready.

![t6](https://github.com/user-attachments/assets/ae7209d7-2206-4a96-8caa-398ac5102c20)

---
Got it! Here's your revised section without that extra detail and without mentioning the full connection string. It's clean, in first person, and suitable for your README:

---

### Step 5

**Created the .env File with My Database Link**

First, I needed a MongoDB connection string. I created a file called `.env` in my project.

I then created my MongoDB database link using MongoDB Atlas.

When setting up MongoDB Atlas, I selected **JavaScript** and then **Node.js** as my application language.

I chose this because:

* My backend is built with Node.js using JavaScript
* Mongoose is a library made for Node.js
* Selecting Node.js provides the correct connection string for my project

Once I had the connection string, I added it to the `.env` file using the key `MONGO_URI`.

This is how I connected my project to the MongoDB database.
![t7](https://github.com/user-attachments/assets/34d2f57b-fbb4-421e-93ee-3ef0d9942794)

![t8](https://github.com/user-attachments/assets/9380b079-2d6e-4225-8c57-3c4548110e1a)

---

# Step 6
# Run My Server with Nodemon

To test my server, I opened the terminal in VS Code and ran the following command:

npx nodemon server.js

This command did the following:

Started my Express server

Tried to connect to MongoDB using the connection string from the .env file

![t9](https://github.com/user-attachments/assets/be6ad320-92c3-4081-8920-1c12ccbdf52a)

---

Got it! Here’s that part with an explanation of why I chose that address:

---

### Step 7

**Tested My Server in the Browser**

I opened my browser (I used Google Chrome, but any browser works like Firefox or Edge).

In the address bar, I typed:
`http://localhost:5000/`

I chose this address because my server is running locally on my computer (localhost) and listening on port 5000, which is the default port I set for the server.

After opening the page, I saw the message:
**Hello, GirlLEAD Backend Engineer!**

This confirmed that my server was running successfully.
![t10](https://github.com/user-attachments/assets/c3641076-25e8-42b5-a43a-1e88901a5f13)

# 🌸 Project Progress Checklist 🌸

![t11](https://github.com/user-attachments/assets/4a8f7684-fbcc-46a2-adc9-a0b94baa2afb)

