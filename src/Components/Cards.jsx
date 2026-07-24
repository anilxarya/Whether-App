import React from 'react'

const Cards = ({ whetherData,code }) => {
    const cardStyle='flex flex-col gap-2 justify-between items-center py-3 w-34 h-auto border-2 border-gray-700  bg-gray-900 rounded-sm text-white'
    if (code) {
    return (
      <div className='flex w-full h-auto mt-5 bg-black/60 backdrop-blur-xl border border-gray-800 rounded-sm py-3 px-3'>
        <div className='mx-auto my-auto text-cyan-200 text-[14px]'>No Parameters Arrived</div>
      </div>
    )
  }
    return (
        <div className='flex flex-wrap justify-between gap-5 w-full my-5 h-auto'>
            {whetherData && ( 
                <>
                <div className={cardStyle}>
                    <img className='w-12 h-12 ' src="src\assets\water.png" alt="humidity-image" />
                    <span className='font-medium'>Humidity</span>
                    <span className='font-medium text-[18px]'>{whetherData?.current?.humidity}%</span>
                </div>
               
                <div className={cardStyle}>
                    <img className='w-12 h-12 ' src="src\assets\wind.png" alt="windspeed-image" />
                    <span className='font-medium'>Wind Speed</span>
                    <span className='font-medium text-[18px]'>{whetherData?.current?.wind_kph} km/h</span>
                </div>
                  
                 <div className={cardStyle}>
                    <div className='flex items-center justify-center bg-pink-400 rounded-full w-12 h-12'><img className='w-8 h-8 rouded-full' src="src\assets\vision.png" alt="vis-image" /></div>
                    <span className='font-medium'>Visibility</span>
                    <span className='font-medium text-[18px]'>{whetherData?.current?.vis_km} km</span>
                </div>

                <div className={cardStyle}>
                    <img className='w-12 h-12 ' src="src\assets\cloud.png" alt="vis-image" />
                    <span className='font-medium'>Clouds Cover</span>
                    <span className='font-medium text-[18px]'>{whetherData?.current?.cloud} %</span>
                </div>

                <div className={cardStyle}>
                    <img className='w-12 h-12 ' src="src\assets\sun.png" alt="vis-image" />
                    <span className='font-medium'>Sunrise/Sunset</span>
                    <span className='font-medium text-[14px]'>{whetherData?.forecast?.forecastday[0]?.astro?.sunrise}/{whetherData?.forecast?.forecastday[0]?.astro?.sunset}</span>
                </div>

                 <div className={cardStyle}>
                    <img className='w-12 h-12 ' src="src\assets\thermometer.png" alt="vis-image" />
                    <span className='font-medium'>Feels Like</span>
                    <span className='font-medium text-[18px]'>{whetherData?.current?.feelslike_c}&deg; C</span>
                </div>

                 <div className={cardStyle}>
                    <img className='w-12 h-12 ' src="src\assets\pressure-gauge.png" alt="vis-image" />
                    <span className='font-medium'>Pressure</span>
                    <span className='font-medium text-[18px]'>{whetherData?.current?.pressure_mb} mb</span>
                </div>

                  <div  className={cardStyle}>
                    <div className='flex items-center justify-center bg-gray-700 rounded-full w-12 h-12'><img className='w-8 h-8 rouded-full' src="src\assets\wind-socket.png" alt="vis-image" /></div>
                    <span className='font-medium'>Wind Direction</span>
                    <span className='font-medium text-[18px]'>{whetherData?.current?.wind_dir}</span>
                </div>
                </>
                
                
            )}
                 
        </div>
    )
}

export default Cards