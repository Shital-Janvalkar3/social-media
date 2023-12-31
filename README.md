

A Social Media API

---
## Install

  
    $ npm install

## Configure app

Create a .env file and add :-
PORT=<YOUR_PREFERRED_PORT>
MONGO_URI=<YOUR MONGODB CONNECTION URI>
JWT_SECRET=<SECRET_WORD>


## Running the project

    $ npm start

## For Running tests
First close the running server then,

    $ npm test 

    **API Endpoints**

- POST /api/authenticate should perform user authentication and return a JWT token.
    - INPUT: Email, Password
    - RETURN: JWT token
- POST /api/follow/{id} authenticated user would follow user with {id}
- POST /api/unfollow/{id} authenticated user would unfollow a user with {id}
- GET /api/user should authenticate the request and return the respective user profile.
    - RETURN: User Name, number of followers & followings.
- POST api/posts/ would add a new post created by the authenticated user.
    - Input: Title, Description
    - RETURN: Post-ID, Title, Description, Created Time(UTC).
- DELETE api/posts/{id} would delete post with {id} created by the authenticated user.
- POST /api/like/{id} would like the post with {id} by the authenticated user.
- POST /api/unlike/{id} would unlike the post with {id} by the authenticated user.
- POST /api/comment/{id} add comment for post with {id} by the authenticated user.
    - Input: Comment
    - Return: Comment-ID
- GET api/posts/{id} would return a single post with {id} populated with its number of likes and comments
- GET /api/all_posts would return all posts created by authenticated user sorted by post time.
    - RETURN: For each post return the following values
        - id: ID of the post
        - title: Title of the post
        - desc: Description of the post
        - created_at: Date and time when the post was created
        - comments: Array of comments, for the particular post
        - likes: Number of likes for the particular post

**Tech Stack Used**

- Node
- Express.js
- MongoDB

**Note:** To login / get authenticated, pass the following values:
```
{
    email: 'sample@email.com',
    password: '1234'
}
```
    
 
