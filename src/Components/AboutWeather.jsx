import React from 'react'

const AboutWeather = ({whetherData}) => {
  return (
    <div className='flex w-full mt-5 py-3 px-5 items-center gap-5 border border-gray-600 rounded-sm shadow  bg-black/60 backdrop-blur-xl'>
        <img className='w-15 h-15 rounded-full shadow' src="src\assets\file.png" alt="weather-file" />
        <div className='flex flex-col text-white'>
            <p className='text-[16px] font-medium mb-3'>About the weather</p>
            {whetherData && (
                <p className='text-[14px] font-normal'>No active alerts in your area.</p>               
            )}
           
        </div>

    </div>
  )
}

export default AboutWeather