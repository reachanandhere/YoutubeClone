import React from 'react'

const VideoCard = ({info}) => {
    const { snippet, statistics } = info;
    const { thumbnails, title, channelTitle } = snippet;
  return (
    <div className='p-4 w-72 sm:w-[90svw] m-2 shadow-2xl cursor-pointer min-h-[350px] sm:mx-4 sm:px-10'>
        <img className='rounded-lg sm:w-[100%]' alt='thumbnail' src={thumbnails.medium.url} />
        <h3 className='font-bold py-2'>{title}</h3>
        <h4>{channelTitle}</h4>
        <h4>{statistics.viewCount} views</h4>
    </div>
  )
}

export default VideoCard