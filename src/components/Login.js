import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
//import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG_URL, USER_AVATAR } from "../utils/constants";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  //const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    //validate the form data
    // const message = checkValidData(email.current.value, password.current.value);
    // console.log(message);
    // setErrorMessage(message);
    let message = "";

    if (!isSignInForm) {
      // Only validate name if it's a sign-up form
      message = checkValidData(
        email.current.value,
        password.current.value,
        name.current.value
      );
    } else {
      // For sign-in form, validate email and password only
      message = checkValidData(email.current.value, password.current.value);
    }

    console.log(message);
    setErrorMessage(message);
    //console.log(password.current.value)
    if (message) return;

    //Sign In  SignUp logic

    if (!isSignInForm) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              //navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // sign in logic

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          //navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute w-full ">
        <img className="w-full h-screen object-cover" src={BG_IMG_URL} alt="bg_image" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute  w-9/12  md:w-3/12 p-12 mt-32 bg-black mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="text-4xl px-2 py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name "
            className="p-2 my-3 w-full rounded-lg bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-3 w-full rounded-lg bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder=" Password"
          className="p-2 my-3 w-full rounded-lg bg-gray-700"
        />
        <p className=" my-3 font-bold text-red-500">{errorMessage}</p>
        <button
          className="p-2 my-6 bg-red-700 w-full rounded-lg "
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer " onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered!! SignIn Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
