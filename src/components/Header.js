import React from "react";
import { signOut } from "firebase/auth"; 
import {auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
const navigate =useNavigate();
const user=useSelector((store)=>store.user);


  const handleSignOut =()=>{
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate("/error")
    });
  }
  return (
    <div className="absolute w-screen px-8 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="NETFLIX LOGO"
      />
      {user && <div className="flex p-2 m-2 gap-3">
        <img
          className="w-10 h-10 rounded-full"
          alt="usericon"
          src={user?.photoURL}
        />
        <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>
      </div>}
    </div>
  );
};

export default Header;
