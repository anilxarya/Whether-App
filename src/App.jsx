import { useState, useEffect } from 'react'
import './App.css'
import Search from './Components/Search'
import ShowData from './Components/ShowData'
import Cards from './Components/Cards'
import AboutWeather from './Components/AboutWeather'





function App() {
  const [whether, setWhether] = useState(null)
  const [isloading, setIsloading] = useState()
  const [error, setErrors] = useState("")

  
 
  
  return (
    <div className='w-3xl h-auto mx-auto my-5 p-10  bg-[url("src/assets/pexels-kseniya.jpg")] bg-cover bg-center rounded-lg flex flex-col items-center font-sans'>
        <div className='flex flex-col text-white gap-2 mb-8'>

          <div className='flex gap-2 items-center'>
            <img className='w-9 h-9' src="src\assets\partly-cloudy.png" alt="app-image" />
            <h1 className='text-3xl font-semibold'> Whether App</h1>
          </div>

          <p className='pl-5'>Get real-time whether updates</p>
        </div>
        <Search  setData={setWhether} status={setIsloading} setError={setErrors}/>
        <ShowData whetherData={whether} dataStatus={isloading} code={error}/>
        <Cards whetherData={whether} />
        <AboutWeather whetherData={whether}/>

    </div>
  )
}

export default App
