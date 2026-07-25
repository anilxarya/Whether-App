import React from 'react'

const AboutWeather = ({whetherData}) => {


  return (
    <div className='text-white'>
         {
          whetherData && (
          <p>{whetherData?.alerts?.alert}</p>
      )
     }  
                   
    </div>
  )
}

export default AboutWeather