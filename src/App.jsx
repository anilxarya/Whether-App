import { useState, useEffect } from 'react'
import './App.css'
import Search from './Components/Search'
import ShowData from './Components/ShowData'
import Cards from './Components/Cards'
import AboutWeather from './Components/AboutWeather'





function App() {
  const [whether, setWhether] = useState(null)
 
  
  return (
    <div className='w-3xl h-auto mx-auto my-5 p-10  bg-linear-to-br from-[#8DD7FF] via-[#4EA8FF]  to-[#1E63E9] rounded-lg flex flex-col items-center font-sans'>
        <div className='flex flex-col text-white gap-2 mb-8'>

          <div className='flex gap-2 items-center'>
            <img className='w-9 h-9' src="src\assets\partly-cloudy.png" alt="app-image" />
            <h1 className='text-3xl font-semibold'> Whether App</h1>
          </div>

          <p className='pl-5'>Get real-time whether updates</p>
        </div>
        <Search  setData={setWhether}/>
        <ShowData whetherData={whether}/>
        <Cards whetherData={whether}/>
        <AboutWeather whetherData={whether}/>

    </div>
  )
}

export default App
