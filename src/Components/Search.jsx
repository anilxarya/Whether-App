import React from 'react'
import { useState } from 'react'

const Search = ({setLocation,setData,location}) => {
   const [value, setValue ] = useState("")

   const getInputData = (e) =>{
        setLocation(value)
        getData()
   }
    
  const getData = async () => {
  try {
     
     const response= await fetch('http://api.weatherapi.com/v1/forecast.json?key=58acd0e9a2944ce2855161401261807&q=${location}&days=1&aqi=yes&alerts=yes')
     const data= await response.json()
     setData(data)
     console.log(location)
     
     
  } catch (error) {
    console.log("something went wrong",error)   
  }
}

  return (
    <>
    <div className='flex  gap-2 justify-between items-center w-full h-fit px-3 py-2 rounded-md bg-white'>
      <div className='flex gap-3 items-center w-full font-medium'>
        <img className='w-5 h-5' src="src\assets\search.png" alt="whether-search-icon" />
      <input className='w-full outline-none cursor-pointer' 
      type="text" 
      value={value}
      placeholder='Enter city name'
      onChange={(e)=>setValue(e.target.value)}/>
      </div>

      <button className='w-20 py-1 rounded-sm text-white bg-[#2476e5] cursor-pointer'
       onClick={getInputData}>
        Search
      </button>
    </div>
    <div>
      <p  className='text-white text-[14px] mt-2'>Press Enter to search</p>
    </div>
    </>
    
  )
}

export default Search