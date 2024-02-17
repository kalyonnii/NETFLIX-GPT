import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen my-8 md:my-0 aspect-video pt-[15%] px-6 md:px-20 absolute text-white bg-gradient-to-r from-black'>
    <h1 className='text-xl md:text-3xl font-bold'>{title}</h1>
    <p className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>
    <div className='my-4 md:m-0'>
        <button className='bg-white mr-4 text-black py-2 md:py-4 px-2 md:px-8 md:text-xl  rounded-lg hover:opacity-80'>▶️ Play</button>
        <button className='hidden md:inline-block bg-gray-500 text-white p-4 px-8 text-xl bg-opacity-50 rounded-lg' > More Info</button>
    </div>
    </div>
  )
}

export default VideoTitle;