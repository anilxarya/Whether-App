import React from 'react'



const ShowData = ({ whetherData }) => {

  return (
    <div className='flex w-full h-80 mt-5  bg-blue-600/30 rounded-sm py-3 px-5 '>
      {whetherData && (
        <>
        <div className='flex flex-col  w-3/5  text-white'>
          <span className='mt-4 pl-2 text-[28px] font-medium'>{whetherData.location.name}</span>
          <span className=' text-[16px] font-normal'><img className='w-5 h-5 mr-1 inline' src="src\assets\mappin.png" alt="map-pin" />{whetherData.location.country}</span>
          <span className='mt-5 text-6xl font-medium'>{whetherData.current.temp_c}&deg;c</span>
          <span className='mt-4 text-[18px] font-normal'>{whetherData.current.condition.text}</span>
          <div className='flex align-middle gap-2 mt-4 mb-7 font-semibold text-[14px]'>
            <div  className=' bg-black/20 p-2 px-4  rounded-full'> 
            Feels Like {whetherData.current.feelslike_c}&deg; C</div>
            <div  className=' bg-black/20 py-2  px-4 rounded-full font-semibold'><span className='text-red-400 font-medium'>H: </span>{whetherData.forecast.forecastday[0].day.maxtemp_c}&deg;C<span className='text-blue-400 ml-3 font-medium'>L: </span> {whetherData.forecast.forecastday[0].day.mintemp_c}&deg;C</div>
          </div>
        </div>
          <div className='flex flex-col gap-12 w-2/5  text-white'>
            <img className='w-44 h-44 ml-auto my-4' src={whetherData.current.condition.icon} alt="whether-img" />
            <span className='text-right font-semibold'>{whetherData.current.last_updated}</span>
          </div></>
      )}




    </div>
  )
}

export default ShowData