import React, { useEffect } from "react";
import Form from "./components/Form";
import { Navbar } from "../../components/Navbar";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { login, setStatus } from "../../../store/authSlice";
import STATUSES from "../../globals/status/statuses";

const Login = () => {
  const navigate =useNavigate()
  const{status,user}=useSelector((state)=>state.auth)
  console.log(user?.data?.username)
  const dispatch =useDispatch()
  const handleLogin = (data) => {
    dispatch(login(data));
    }

    useEffect(()=>{
      console.log(status)
      if(status==STATUSES.SUCCESS){
         navigate('/')
         dispatch(setStatus(null))
      }
    },[status])
  return (
    <>
    <Navbar/>
      <Form type="Login" user={user} onSubmit={handleLogin}/>
    </>
  );
};

export default Login;
