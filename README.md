# Week 1
## JavaScript Assignments

You are provided empty JavaScript files (or having function signatures) in this directory. 
You have to follow the instructions given in each file and write the code in the same file to complete the assignment.

### Assignments
Feel free to start doing these in any order you like.
1. Easy
2. Medium
3. Hard

# Week 2
## JavaScript Assignments

This folder contains assignments related to asynchronous JavaScript.

### Assignments

Recommended order below but feel free to make a mess in any order you like.
1. Easy
   1. Counter
   2. Counter (no setInterval)
   3. Read from a file
   4. Write to a file
2. Medium
   1. File cleaner
   2. Clock
3. Hard
   1. Promisify setTimeout
   2. Sleep completely
   3. Promise all
   4. Promise chain

## Node.js Assignments
In this series of assignments, you are going to create native HTTP servers in Node.js which will handle different kinds of application logics.

You are provided empty JavaScript files (or having function signatures) in this directory. You have to follow the instructions given in each file and then run automated tests (also mentioned in each file) to check if you have successfully completed the assignment or you still have few more things to learn in it 😜

### Assignments
Recommended order of attempting the assignments.
1. Todo List App
2. File Server

# Week 3
## Create a course selling website

### Description
Same as the last assignment but you need to use jwts for authentication.
We have introduced the signgin endpoints for both users and admins.
For this one, in every authenticated requests, you need to send the jwt in headers (Authorization : "Bearer <actual token>").
You need to use mongodb to store all the data persistently.

## Routes
### Admin Routes:
- POST /admin/signup
  Description: Creates a new admin account.
  Input Body: { username: 'admin', password: 'pass' }
  Output: { message: 'Admin created successfully' }
- POST /admin/signin
  Description: Creates a new admin account.
  Input Body: { username: 'admin', password: 'pass' }
  Output: { token: 'your-token' }
- POST /admin/courses
  Description: Creates a new course.
  Input: Headers: { 'Authorization': 'Bearer <your-token>' }, Body: { title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com' }
  Output: { message: 'Course created successfully', courseId: "new course id" }
- GET /admin/courses
  Description: Returns all the courses.
  Input: Headers: { 'Authorization': 'Bearer <your-token>' }
  Output: { courses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }, ... ] }

### User routes
- POST /users/signup
  Description: Creates a new user account.
  Input: { username: 'user', password: 'pass' }
  Output: { message: 'User created successfully' }
- POST /users/signin
  Description: Creates a new user account.
  Input: { username: 'user', password: 'pass' }
  Output: { token: 'your-token' }
- GET /users/courses
  Description: Lists all the courses.
  Input: Headers: { 'Authorization': 'Bearer <your-token>' }
  Output: { courses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }, ... ] }
- POST /users/courses/:courseId
  Description: Purchases a course. courseId in the URL path should be replaced with the ID of the course to be purchased.
  Input: Headers: { 'Authorization': 'Bearer <your-token>' }
  Output: { message: 'Course purchased successfully' }
- GET /users/purchasedCourses
  Description: Lists all the courses purchased by the user.
  Input: Headers: { 'Authorization': 'Bearer <your-token>' }
  Output: { purchasedCourses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }, ... ] }

# Week 4
You have been given the code of a purely frontend TODO app
You have to fill in the following functions - 
 - addTodoToDom
 - removeTodoFromDom
 - updateTodoInDom
 - updateState

These 4 functions comprise of what it means to create a library like React.
The goal is the following - 
1. Any time the updateState function is called with a new state, the updateState function calculates the diff between newTodos and oldTodos and call `addTodoToDom`, `removeTodoFromDom` or `updateState` based on the calculated diff.
2. The id of a todo uniquely identifies it. If the title of a todo with the same id changes in two iterations, updateTodoInDom should be called for it.
3. The structure of the state variable looks something like this - 
```js
    const todos = [{
        title: "Go to gym",
        description: "Go to gym from 7-8PM",
        id: 1
    }]
```

# Week 5
You have to create a simple React App which has a reusable Card Component which has the following
 - Ability to pass in props to the Component
 - The Card must show a person's
    - Name
    - A short description
    - LinkedIn, Twitter and other Social Media Handle buttons
    - Interests Section
 - You can assume that this is kind of an e-business card and feel free to put in your creativity
 - Additional & Slightly advanced:
    - Create a page where you can add these kind of Cards by taking input from the user
    - Create a backend server where these cards get stored in a DB and can handle basic CRUD operations
    - Give the feature to perform CRUD operations from the frontend (Can be restricted to the admin only as well)

# Week 6
## React hook assignments
You will find a bunch of folders this week, each with some set of assignments for a specific hook
Go to the folder (for example 1-use-memo) and comment out the Assignment component you are working on (Assignment1/Assignment2...) and try to solve it
There are no tests, but solution videos will be provided

# Week 7
## Question.1 Create a profile component in reactJS.
Using  https://api.github.com/users/${username} API render your GitHub information as your GitHub info Card.

## Question.2 Create a background changer in reactJS 

## Question.3 Create a profile component in reactJS.
Hint:  In react we have a root element, here you have to create a HTML element and using JS render anchor tag.
  - Create an object for react element that has html anchor data
  - Create a function that generates html code from reactElement and returns the final html tag
  - Create a function customRender that takes in the object and the path of html where it will be rendered

## Question.4 Create a paragraph generator which takes length of words in paragraph and generate paragraph.

## Question.5 Create a OTP Login in reactJS.
Hint: you have seen Login via OTP on some sort of site like: hotstar etc. you have to build that. here is the basic prototype/design
Note: suppose that if user enter first digit of OTP, so cursor will automatically jump to the second digit.