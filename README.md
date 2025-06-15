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

---
### Task8
# Adding To-Do List Features
We will build a CRUD API that allows us to:

- Create a task (POST)

- Read tasks (GET)

- Update a task (PUT)

- Delete a task (DELETE)

This forms the complete set of operations for managing tasks.

---
Thanks for clarifying! Since you have **four separate files** for each CRUD method, here’s a clean, first-person step summary reflecting that, with the single update to `server.js` at the end:

---

### 🌼 Step 8.1: Adding Full CRUD Routes for To-Do List

# 1. **Created `post.js`**
   I started by building `post.js` to handle creating new tasks with POST requests.
![post-03](https://github.com/user-attachments/assets/4f2e03cf-3179-4ae9-af97-f303190b06a2)

# 2. **Created `get.js`**
   Next, I created `get.js` to allow fetching all tasks or a specific task using GET requests.
![get-02](https://github.com/user-attachments/assets/74d04649-48b4-41de-b151-34fb9bb93f0e)

# 3. **Created `put.js`**
   Then, I added `put.js` which contains the logic for updating tasks, such as editing a task’s title or marking it completed, via PUT requests.
![put](https://github.com/user-attachments/assets/273c32c1-e78d-48d2-838c-86db1f3374ef)

# 4. **Created `delete.js`**
   After that, I created `delete.js` to handle deleting tasks from the database using DELETE requests.
![delete-01](https://github.com/user-attachments/assets/171a3768-97c5-4efb-a018-c5ef314a57c4)

# 5. **Updated `server.js` to include all routes**
   Finally, I updated `server.js` once to import and activate all four route files — `post.js`, `get.js`, `put.js`, and `delete.js`. This made my server fully capable of handling all CRUD operations for the To-Do List API.
![server](https://github.com/user-attachments/assets/523d3d13-e824-4015-acb7-54bcdb226216)

---
Got it! Here’s the updated version with the actual output you received included:

---

### Step 9: Confirm Everything Is Working Perfectly

**Step 1: Make sure my server is running**
I ran this command in my terminal:

```bash
npx nodemon server.js
```

I saw the messages:

```
MongoDB connected  
Server running on port 5000
```

This confirmed my backend was connected and ready.
![b1](https://github.com/user-attachments/assets/3fc73e2b-2d23-4d20-af00-d3453e382675)

**Step 2: Test each route in Postman**

* **GET — Get all tasks**
  I sent a GET request to:

  ```
  http://localhost:5000/tasks
  ```

  No body needed. I clicked Send and got an empty array `[]` in response.
  This means the API successfully connected to the database and returned all tasks, but since I had not added any tasks yet, the list was empty. It confirmed that the Read operation of my CRUD API is working correctly.
![b2](https://github.com/user-attachments/assets/7335e6bf-a305-451c-a2ee-ad396b504aec)

---
Here’s that part written clearly in first person for your README:

---

**Step 3: Test POST — Create a new task**
I sent a POST request to:

```
http://localhost:5000/tasks
```

In Postman, I selected **raw** and **JSON** for the body, then added this example JSON:

```json
{
  "title": "Finish backend API",
  "description": "Write and test CRUD endpoints",
  "completed": false
}
```

I clicked Send and expected to receive the new task data back, including a unique `_id` generated by MongoDB.
![b3](https://github.com/user-attachments/assets/9450958c-ef82-4bd5-9be7-7f06310679a9)

---
Here’s that part written clearly in first person for your README:

---

**Step 4: Test PUT — Update an existing task**
I took the `_id` I got from the POST or GET response (for example: `"684ea347c7f0ec0a003ae154"`).
In Postman, I set the method to **PUT** and used this URL:

```
http://localhost:5000/tasks/684ea347c7f0ec0a003ae154
```
![b4](https://github.com/user-attachments/assets/5133298f-30d1-4f66-8929-072b2c40ac4c)

Then, in the Body tab, I selected **raw** and **JSON**, and pasted this JSON:

```json
{
  "title": "Finish backend API - updated",
  "description": "Add more test cases",
  "completed": true
}
```

After clicking Send, I received the updated task back with the new title, description, and completed status. This confirmed the task in the database was successfully updated.
![b5](https://github.com/user-attachments/assets/34d216af-5e0e-4211-bd59-57a1a9cb7ad2)

---
Here’s that part written in first person for your README:

---

**Step 5: Test DELETE — Remove a task**
I set the method to **DELETE** in Postman and used the URL:

```
http://localhost:5000/tasks/684ea347c7f0ec0a003ae154
```

(using the same task ID I wanted to delete)

I didn’t need to include anything in the Body tab for this request.

After clicking Send, I received a response message like:

```json
{ "message": "Task deleted successfully" }
```

This confirmed the task was removed. To double-check, I did another **GET /tasks** request — and the deleted task was no longer there.
![b6](https://github.com/user-attachments/assets/d78551e7-29e4-4e2d-98f7-708d804dc214)

---

## 🌟 Final Confirmation & What I’ve Achieved

After completing and testing all the CRUD features of my To-Do List API, I can confirm that everything is working perfectly.

### ✅ What I’ve Accomplished

* I created a fully functional **CRUD API** using Node.js, Express, and MongoDB.
* I connected my backend to a live database using **MongoDB Atlas**.
* I tested all routes (GET, POST, PUT, DELETE) successfully using **Postman**.
* I saw the correct outputs for each action — including getting an empty list at first, then adding, updating, and deleting tasks.
* I used **environment variables** to safely manage my database connection string.
* I followed the full backend development process — from setting up a server to testing each API route.

---

### 🌸 What This Means

I now understand how data flows from the client → through the API → into the database, and back again.
This project simulates what a backend engineer does in the real world — structuring routes, managing data, handling requests, and keeping things organized.

---
Absolutely! Here's the README text fully in first person, ready for you to paste:

---

# GirlLEAD To-Do List Frontend

## Step 1: Create My React App

I open my terminal (I use the VS Code terminal) and navigate to the folder where I want to keep my frontend project.

I run this command to create a new React app:

```bash
npx create-react-app girllead-todo-frontend
```
![b8](https://github.com/user-attachments/assets/d99d6e40-d9c3-4258-ae0f-3a813e84dd86)

This takes a few minutes as it installs everything I need.

When it finishes, I see a new folder called `girllead-todo-frontend` with my React app inside.
![b9](https://github.com/user-attachments/assets/f1187c94-7ad3-467d-a4e8-ba56737b10e3)

---

## Step 2: Start My React App

I navigate into the new folder and start the React development server:

```bash
cd girllead-todo-frontend
npm start
```
![b10](https://github.com/user-attachments/assets/dc65b485-bebc-47f8-ae3d-bab4a647d8de)

My browser opens at `http://localhost:3000/` where I see the React welcome page.
![a1](https://github.com/user-attachments/assets/4c7d5d3c-2665-4533-ae77-de5a98dfa982)
![a2](https://github.com/user-attachments/assets/e1bd3e21-163d-4513-b9db-4d19a4ed268f)

---
Got it! Here’s a focused README section just for the **frontend part** we completed so far, written in first person:

---

## Frontend Setup and Work So Far

I created the frontend for my GirlLEAD Daily Tasks app using **React**. Here’s what I did step-by-step:

1. I opened a terminal and navigated to the folder where I wanted my frontend code.

2. I ran this command to create a new React app:

   ```bash
   npx create-react-app girllead-todo-frontend
   ```

   This created a new folder named `girllead-todo-frontend` with all the React setup.

3. I opened the project folder in VS Code.

4. Inside the React app, I replaced the default `App.js` code with my own code that:

   * Fetches tasks from my backend API.
   * Displays the list of tasks.
   * Lets me add new tasks with a simple input and button.
   * Allows me to delete tasks by clicking a delete button.

5. I ran the frontend locally by typing:

   ```bash
   npm start
   ```

   This opened the React app in my browser on `http://localhost:3000`.

6. I tested adding and deleting tasks, and everything was working — tasks showed up after adding, and the delete buttons worked.

7. I made sure the backend server was running with CORS enabled so the frontend could communicate with it without errors.

---
![b1](https://github.com/user-attachments/assets/386b6593-0e78-4bab-85e6-dfdbf0d94bd3)
![b2](https://github.com/user-attachments/assets/09b90ceb-9b5e-4fca-b902-6a9d6d447621)
![b3](https://github.com/user-attachments/assets/4a1ce57f-6b0d-4b3c-9010-fa9a1f841a72)

This is where I am with the frontend now. Next, I plan to improve the UI and add update functionality.

---















