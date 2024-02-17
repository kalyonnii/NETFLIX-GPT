import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[15%] px-20 absolute text-white bg-gradient-to-r from-black'>
    <h1 className='text-3xl font-bold'>{title}</h1>
    <p className='py-6 text-lg w-1/4'>{overview}</p>
    <div>
        <button className='bg-white mr-4 text-black p-3 px-8 text-xl  rounded-lg hover:opacity-80'>▶️ Play</button>
        <button className='bg-gray-500 text-white p-3 px-8 text-xl bg-opacity-50 rounded-lg' > More Info</button>
    </div>
    </div>
  )
}

export default VideoTitle;