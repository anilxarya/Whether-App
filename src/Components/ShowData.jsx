import React from 'react'

const ShowData = ({whetherData}) => {
  const whetherArray= Object.values(whetherData)
  console.log(whetherArray)
  


  
  return (
    <div className='w-full mt-5 p-2 bg-white'>
      {
        whetherArray.map((ele,index)=>(
          <div key={index}>{ele.name}</div>
        ))
      }
      
    </div>
    
  )
}

export default ShowData