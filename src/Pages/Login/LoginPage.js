import React, { useState } from "react";
import logo from '../../images/logo.png'
import toast, { Toaster } from 'react-hot-toast';
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate=useNavigate();

  const location = useLocation();
  const [makeError,setMakeError]=useState('')
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const submitForm = (e) => {
    e.preventDefault();
    // const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    if(password){
      signInWithEmailAndPassword(email, password)
    }
    else{
      setMakeError('Please Put Password  !!!!!!!!')
    }
  };
  let from = location.state?.from?.pathname || "/";
  const navigateSignIn=(e)=>{
    navigate('/signIn')
  }

  if (user) {
    navigate(from, { replace: true });
}

  if(loading){
    toast('Please wait......')
  }

  return (
    <div className="relative">

      <div className="flex items-center  justify-center min-h-screen bg-lime-100 absolute w-100 left-0 right-0 top-0 ">
        <div className="px-8 py-6 mx-4 mt-4 text-left  rounded-lg  md:w-1/3 lg:w-1/3 sm:w-1/3">
          <div className="flex justify-center mb-10">
            <img style={{ height: "50px" }} src={logo} alt="" />
          </div>

          <form onSubmit={submitForm}>
            <div className="mt-4">
              <div className="mt-4">
                <label className="block">Email</label>
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  required
                  className="w-full px-4 py-2  mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              {/* <p>{loading && 'loading....'}</p> */}
              <div className="mt-4">
                <label className="block"> Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  required
                  className="w-full px-4 py-2 mt-2 border  rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <span className="text-xs text-red-400">
                {
                  makeError ? makeError:''
                }
                {
                  error ? error : ''
                }
              </span>
              <div className="flex">
                <button className="w-full px-6 py-3 mt-4 text-white bg-rose-700 rounded-lg hover:bg-blue-500">
                Login
                </button>
              </div>
              <div className="mt-6 text-grey-dark">
                Already have an account?
                <button className="text-blue-600 hover:underline" onClick={navigateSignIn}>
                 Sign In
                </button>
                <Toaster />
              </div>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};

export default LoginPage;
