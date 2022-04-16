import React, { useState } from "react";
import bannerbackground from "../../../images/bannerbackground.png";
import logo2 from "../../../images/logo2.png";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init";
import toast, { Toaster } from 'react-hot-toast';

const SignIn = () => {
  const [makeError,setMakeError]=useState('')
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth ,{sendEmailVerification:true});
  const submitForm = (e) => {
    e.preventDefault();
    // const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    if(password === confirmPassword){
      createUserWithEmailAndPassword(email, password)
    }
    else{
      setMakeError(' Password must be same  !!!!!!!!')
    }
  };

  if(loading){
    toast('Please wait......')
  }

  return (
    <div className="relative mt-5">
      <img src={bannerbackground} className="h-screen" alt="" />

      <div className="flex items-center  justify-center min-h-screen absolute w-100 left-0 right-0 top-0 ">
        <div className="px-8 py-6 mx-4 mt-4 text-left  rounded-lg  md:w-1/3 lg:w-1/3 sm:w-1/3">
          <div className="flex justify-center mb-10">
            <img style={{ height: "50px" }} src={logo2} alt="" />
          </div>

          <form onSubmit={submitForm}>
            <div className="mt-4">
              <div>
                <label className="block">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  required
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
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
              <div className="mt-4">
                <label className="block">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  required
                  className="w-full px-4 py-2 mt-2 border  rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <span className="text-xs text-red-400">
                {
                  makeError ? makeError:''
                }
              </span>
              <div className="flex">
                <button className="w-full px-6 py-3 mt-4 text-white bg-rose-700 rounded-lg hover:bg-blue-500">
                  Sign In
                </button>
              </div>
              <div className="mt-6 text-grey-dark">
                Already have an account?
                <button className="text-blue-600 hover:underline" href="#">
                  Login
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

export default SignIn;
