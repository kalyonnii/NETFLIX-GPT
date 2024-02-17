import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        //navigate("/")
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when component will unmount
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    //toggle feature
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
    //console.log(e.target.value)
  };

  return (
    <div className="absolute w-screen px-8 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO_URL} alt="NETFLIX LOGO" />
      {user && (
        <div className="flex p-2 m-2 gap-3">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 bg-opacity-50 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  className=""
                  key={lang.identifier}
                  value={lang.identifier}
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="py-2 px-4 mx-4 my-2 bg-purple-800 rounded-lg text-white"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home Page":"GPT Search"}
            
          </button>
          <img
            className="w-10 h-10 rounded-full"
            alt="usericon"
            src={user?.photoURL}
          />
          <button onClick={handleSignOut} className="font-bold text-white">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
