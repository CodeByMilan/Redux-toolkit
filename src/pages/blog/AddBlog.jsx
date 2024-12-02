import React, { useEffect } from 'react'
import { Navbar } from '../../components/Navbar'
import Form from './components/Form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { addBlog, setStatus} from '../../../store/blogSlice'
import STATUSES from '../../globals/status/statuses'
const AddBlog = () => {
  const {status}=useSelector((state)=>state.blog)
  const navigate=useNavigate()
  const dispatch=useDispatch()

const handleCreateBlog=(data)=>{
dispatch(addBlog(data))
 dispatch(fetchBlog());
if(status==STATUSES.SUCCESS){
  navigate('/')
}
else{
alert("something went wrong")
}
}

  return (
 <>
 <Navbar/>
 <Form title="New Blog" btnName="Create" onSubmit={handleCreateBlog}/>
 </>
  )
}

export default AddBlog