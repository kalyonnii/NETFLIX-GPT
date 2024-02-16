import { SECRET_KEY } from "../config-key/key";

export const LOGO_URL="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const USER_AVATAR="https://avatars.githubusercontent.com/u/91622057?v=4"
export const API_OPTIONS= {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: SECRET_KEY
    }
  };
  export const MOVIE_API="https://api.themoviedb.org/3/movie/now_playing?page=1"
        