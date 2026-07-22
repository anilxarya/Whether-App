import React from 'react'
import { useState } from 'react'

const Search = ({ setData }) => {
  const [value, setValue] = useState("")



  const getInputData = (e) => {
    e.preventDefault()
    getData()
  }

  const getData = async () => {
    try {
      const apilink = `http://api.weatherapi.com/v1/forecast.json?key=58acd0e9a2944ce2855161401261807&q=${value}&days=1&aqi=yes&alerts=yes`
      const response = await fetch(apilink)
      const data = await response.json()
      setData(data)


    } catch (error) {
      console.log("something went wrong", error)
    }
  }

  return (
    <>
      <div className='flex  gap-2 justify-between items-center w-full h-fit px-3 py-2 rounded-md bg-white'>
        <form className='flex gap-3 items-center w-full ' onSubmit={getInputData}>
          <img className='w-5 h-5' src="src\assets\search.png" alt="whether-search-icon" />
          <input className='w-full outline-none cursor-pointer '
            type="text"
            value={value}
            placeholder='Enter city name'
            onChange={(e) => setValue(e.target.value)} />
        </form>

        <button className='w-20 py-1 rounded-sm text-white bg-[#2476e5] cursor-pointer'
          onClick={getInputData}>
          Search
        </button>
      </div>
      <div>
        <p className='text-white text-[14px] mt-2'>Press Enter to search  &#10550;</p>
      </div>
    </>

  )
}

export default Search