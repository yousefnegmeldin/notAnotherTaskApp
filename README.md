# notAnotherTaskApp

This is a task app that has nested tasks.

Powered by the MERN stack. + TS

The goal of this project is to benefit from project-based learning following a youtube tutorial by Web Dev Cody to re-learn and emphasize my learning of expressJS, nodeJS and mongoDB. I have also not copied him step by step and tried to do things differently with my way to ensure that I am not just blindly following his footsteps.

At first I had to set up a client folder and a server folder, the client folder contains the react/vite app which will hold the frontend of the project, and the server folder holds the backend containing the express server.


## Workflow
After setting up the environment (express, typescript, tailwind, mongoDB) , first it is time to test if we can access the database correctly and add data into our model



## Issues I have come across:

-TypeScript complaining from a process.env variable as it can be undefined, i fixed this by using type assertion which is the same as type casting in other languages but no checks are actually done, the language assumes you know what you are doing. This can also be fixed by adding “!” at the end of the variable.

- .env file was not being read by node as you have to pass it in as a parameter to the cli when running the app, so just opted for installing dotenv module instead

-The infamous CORS error, the browser is not allowed to access other URLS other than the one it is currently on.

- i came across a weird CORS error that had to do with typescript complaining and i just found a solution on a github issue and copied boilerplate code that fixed it.
- i will have to fix this later as after i host i will have to put in the url of the server for cors to ignore

- not really an issue but axios helps abstract the behind the scenes of sending a post request, you dont need to set content type of application/json as it does that automatically

-passing down props in typescript isnt as straightforward as it seems. Very annoying process compared to using react with javascript.

https://www.youtube.com/watch?v=bmfQCxwoFl0 //this video helped me study components and passing down props in typescript

-decks were not immediately refreshed after deleting or adding, fixed this by chaining promises and using the dependency array in useEffect()

-Refactoring code 

- i had a problem with fetching the data and promises and async/await in the getDecks.ts file, i fixed it by using the ‘await’ keyword on a response.

-useEffect hook keeps re-rendering the component and does not stop, i am now looking for the reason.
	-the problem was that i was setting the deck array without spreading it into an array, i thought this was fine since it is technically a new array being fetched each time but i may have to research this more after i fixed it.

-UPLOADING THIS WAS SO PAINFUL ON RAILWAY.


## TODO

Re-learn mongoose and all the functions such as find, findOne etc.
Learn all the res, req methods in express.
Learn react component cycle
Learn how to pass down props to components in TS when the prop is an object,
Learn how to access object attributes in TS without it complaining



