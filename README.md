my notes 
## Netflix GPT
- Create react app
- configured tailwind css
- Header
- Routing 
- Login form
- SignUp form
- Form Validation
- useRef hook 
- Firebase setup 
- Deploying our app to production ----- pending
- create signup user account
- implement sign in user Api
- created Redux Store with userslice
- IMPLEMENTED SIGNOUT
- UPDATE PROFILE API CALL
- fetch movies  from tmdb
- BUg fix of sign up user display name and profile picture update
-  bugfix : if the user is not logged in redirect / browse to login page and vice versa
- unsubscribed to the onAuthStateChanged callback
- add hardcoded values to the constants file
- Register TMDB & create an app & get access token 
- Get data from TMDB now playing movies list API
- Custom hook for nowplaying movies 
- create a movie slice 
- update store with movies data 
planning for main container and secondary container 
- fetch data for trailer video 
- update store with trailer video data
- embedded the youtube video and make it autoplay and mute 
- tailwind classes to make main container  to look awesome 
- build secondary component
- BUILD MOVIE LIST 
- build movie card
- TMDB mage CDN URL 
- made thye browse page amazing with tailwind css
- usePopularMovies, useUpcomingMovies, useTopRatedMovies, custom hooks
- GPT search feature
- gpt search bar 
- **** multi language fature in our app
- INTEGRATE GPT APIS(get openAI KEY )
- 
- 




















## Features
- Login /Signup page 
    - sign in /sign up form 
    - redirect to browse page
- browse page  (After authentication )
    - header
    - Main movie 
        - trailer in background
        - movie title and description
        - movie suggestions 
            - movie list * N 
- Netflix gtp 
    - search bar 
    - movie recommendations


## LINKS 
- forms  
https://formik.org/docs/overview
- useRef
https://react.dev/reference/react/useRef


Firebase
https://firebase.google.com/docs/reference/js/?hl=en&authuser=0&_gl=1*k13vyu*_ga*NTExMTcwNDEuMTcwNzc1MjIyNQ..*_ga_CW55HF8NVT*MTcwNzc1MjIyNS4xLjEuMTcwNzc1MjU3MC4yMi4wLjA.
 PASSWORD AUTHENTICATION 
https://firebase.google.com/docs/auth/web/password-auth
https://firebase.google.com/docs/auth/web/manage-users

https://firebase.google.com/docs/auth/web/manage-users


https://stackoverflow.com/questions/65588846/getting-error-updating-email-password-on-firebase


TMDB API
https://developer.themoviedb.org/reference/search-movie

TMDB 
https://www.themoviedb.org/

TO GET API KEY AND ACCESS TOKEN
https://www.educative.io/courses/movie-database-api-python/set-up-the-credentials
TMDB -DOCS
https://developer.themoviedb.org/docs/getting-started

NOWPLAYING LINK
https://developer.themoviedb.org/reference/movie-now-playing-list


## Autoplay of emded video
https://developers.google.com/youtube/player_parameters
## MUTE
https://stackoverflow.com/questions/35044594/youtube-how-to-present-embed-video-with-sound-muted

## LOOP
https://stackoverflow.com/questions/13041088/getting-an-embedded-youtube-video-to-auto-play-and-loop

## TMDB IMAGES
https://developer.themoviedb.org/docs/image-basics

https://developer.themoviedb.org/reference/collection-images



## OPEN AI 
https://platform.openai.com/docs/overview

https://platform.openai.com/api-keys

https://www.npmjs.com/package/openai















# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
