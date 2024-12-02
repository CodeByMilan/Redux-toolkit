import React, { useEffect } from "react";
import Form from "./components/Form";
import { Navbar } from "../../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { register, resetStatus, setStatus } from "../../../store/authSlice";
import { useNavigate } from "react-router";
import STATUSES from "../../globals/status/statuses";


const Register = () => {
  const navigate=useNavigate()
  const{status}=useSelector((state)=>state.auth)
  console.log(status)
  const dispatch = useDispatch();
  const handleRegister=(data)=>{
      dispatch(register(data))
    }
    useEffect(()=>{
      console.log(status)
      if(status==STATUSES.SUCCESS){
        navigate('/login')
        dispatch(setStatus(null))
      }
    },[status])
   
  return (
 <>
 <Navbar/>
 <Form type="Register" onSubmit={handleRegister}/>
 </>
  );
};

export default Register;
