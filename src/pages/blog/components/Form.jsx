import React, { useState } from 'react'

const Form = (props) => {
  const{title,btnName,onSubmit}=props
  const [data,setData]=useState({
    title:'',
     subtitle:'',
    description:'',
    category:'',
    image:'',
   
  })
  const handleChange=(e)=>{
    const {name,value}=e.target
    setData({
      ...data,
      [name]:name==='image'?e.target.files[0]:value

    })

  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    onSubmit(data)
  }
return (
<>
<div className=" min-h-screen bg-gray-100 top-0 flex flex-col justify-center sm:py-12">
<div className="relative py-3 sm:max-w-xl sm:mx-auto">
  <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
    <div className="max-w-md mx-auto">
      <div className="flex items-center space-x-5">
        <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">i</div>
        <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
          <h2 className="leading-relaxed">{title}</h2>
          <p className="text-sm text-gray-500 font-normal leading-relaxed">create a new post then press create button</p>
        </div>
      </div>
     <form onSubmit={handleSubmit} >
     <div className="divide-y divide-gray-200">
        <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
          <div className="flex flex-col">
            <label className="leading-loose">Blog Title</label>
            <input type="text"
            name='title'
            onChange={handleChange}
            className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Blog title" required/>
          </div>
          <div className="flex flex-col">
            <label className="leading-loose">Blog SubTitle</label>
            <input type="text"
            name='subtitle'
            onChange={handleChange}
            className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Blog title" required/>
          </div>
          <div className="flex flex-col">
            <label className="leading-loose">Category</label>
            <input type="text"
            name='category'
            onChange={handleChange}
            className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="category" required/>
          </div>
          <div className="flex flex-col">
            <label className="leading-loose">Image</label>
            <input type="file" 
            name='image'
            onChange={handleChange}
            className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Optional"/>
          </div>

          <div className="flex flex-col">
            <label className="leading-loose">Blog Content</label>
            <textarea 
            rows="8"
            name='description'
            onChange={handleChange}
            className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" required placeholder="write content here "/>
          </div>
        </div>
        <div className="pt-4 flex items-center space-x-4">
            <button className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg> Cancel
            </button>
            <button className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">{btnName}</button>
        </div>
      </div>
     </form>
    </div>
  </div>
</div>
</div>
</>

)
}

export default Form