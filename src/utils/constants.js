import { OPENAI_SECRET_KEY, SECRET_KEY } from "../config-key/key";

export const LOGO_URL =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_AVATAR =
  "https://avatars.githubusercontent.com/u/91622057?v=4";
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: SECRET_KEY,
  },
};
export const MOVIE_API =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";
export const MOVIE_API2 = "https://api.themoviedb.org/3/movie/popular?page=1";
export const MOVIE_API3 = "https://api.themoviedb.org/3/movie/top_rated?page=1";
export const MOVIE_API4 = "https://api.themoviedb.org/3/movie/upcoming?page=1";
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";
export const BG_IMG_URL =
  "https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg";
export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const OPENAI_KEY= process.env.REACT_APP_OPENAI_KEY;
//export const OPENAI_KEY=OPENAI_SECRET_KEY;
