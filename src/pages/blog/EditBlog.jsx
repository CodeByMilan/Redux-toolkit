import React from 'react'
import Form from './components/Form'
import { Navbar } from '../../components/Navbar'

const EditBlog = () => {
  return (
    <>
    <Navbar/>
    <Form title="Edit Blog" btnName="Edit"/>
    </>
  )
}

export default EditBlog