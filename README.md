# GirlLEAD_backend_engineer_daily-api

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
![t1](https://github.com/user-attachments/assets/156ee8b9-18d4-40c0-9e6b-416bb3cc8a31)

---


