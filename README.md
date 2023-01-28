# To-Do App

You can access to this project on live! [Here is a link to it](https://todo-app-liard-sigma.vercel.app/).

## Features
- You can add/remove your todos
- You can set as complete or incomplete any todo
- You can order by todo's creation date
- You can display all your todos

## Tech
- The React app is deployed to `Vercel`
- The backend is deployed to `Heroku`
- Database is running at `MongoDB Atlas`
- This project supports GET/POST/PUT/DELETE requests
- Backend API developed with `nodejs/expressjs` and `mongodb`
- `Redux toolkit` used for state management neeeds
- `MUI` is used for it's components
- `dotenv-react` library is used on front-end side for environment configs
- `dotenv` library is used for DB credentials to be managed on backend side
- For styling, `SASS` is used to better manage CSS code
- To retrieve and manipulate data with BE side, `Axios` is used
- `Toastify` library used for creating notifications

## Data lifecycle
Within the app once loads, a request is being made to the backend application in order to retrieve all the data that we have. Within the next actions such as ADD/DELETE/UPDATE each and every time I updated the local storage.
