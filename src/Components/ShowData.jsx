import React, { useState } from 'react'

const ShowData = ({ whetherData, dataStatus, code }) => {
  if (dataStatus) {
    return (
      <div className='flex w-full h-80 mt-5 bg-black/60 backdrop-blur-xl border border-gray-800 rounded-sm py-3 px-3'>
        <div className="flex-col gap-4 w-full flex items-center justify-center">
          <div
            className="w-15 h-15 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full"
          >
            <div
              className="w-11 h-11 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"
            ></div>
          </div>
        </div>
      </div>
    )
  }
  if (code) {
    return (
      <div className='flex w-full h-80 mt-5 bg-black/60 backdrop-blur-xl border border-gray-800 rounded-sm py-3 px-3'>
        <div className='mx-auto my-auto text-cyan-200 text-[14px]'>{code}</div>
      </div>

    )
  }

  return (
    <div className='flex w-full h-80 mt-5 bg-black/60 backdrop-blur-xl border border-gray-800 rounded-sm py-3 px-3'>
      {
        whetherData && (
          <>
            <div className='flex flex-col  w-3/5  text-white'>
              <span className='mt-4 pl-1 text-[28px] font-medium'>{whetherData.location.name}</span>
              <span className=' text-[16px] font-normal'><img className='w-5 h-5 mr-1 inline' src="src\assets\location.png" alt="map-pin" />{whetherData.location.country}</span>
              <span className='mt-5 text-6xl font-medium'>{whetherData.current.temp_c}&deg;c</span>
              <span className='mt-4 text-[18px] font-normal'>{whetherData.current.condition.text}</span>
              <div className='flex align-middle gap-2 mt-4 mb-7 font-semibold text-[14px]'>
                <div className=' bg-white/20 p-2 px-4  rounded-full'>
                  Feels Like {whetherData.current.feelslike_c}&deg; C</div>
                <div className=' bg-white/20 py-2  px-4 rounded-full font-semibold'><span className='text-red-400 font-medium'>H: </span>{whetherData.forecast.forecastday[0].day.maxtemp_c}&deg;C<span className='text-blue-400 ml-3 font-medium'>L: </span> {whetherData.forecast.forecastday[0].day.mintemp_c}&deg;C</div>
              </div>
            </div>
            <div className='flex flex-col items-center gap-12 w-2/5  text-white'>
              <div className='w-48 border border-gray-700 rounded-sm'><img className='w-44 h-44 mx-auto my-auto' src={whetherData?.current?.condition?.icon} alt="whether-img" /></div>
              <span className='pl-16 font-semibold'>{whetherData?.current?.last_updated}</span>
            </div>
          </>
        )
      }
    </div>
  )
}

export default ShowData