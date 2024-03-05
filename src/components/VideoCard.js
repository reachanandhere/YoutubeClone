import React from 'react'

const VideoCard = ({info}) => {
    const { snippet, statistics } = info;
    const { thumbnails, title, channelTitle } = snippet;
  return (
    <div className='p-4 w-72 m-2 shadow-lg cursor-pointer'>
        <img className='rounded-lg' alt='thumbnail' src={thumbnails.medium.url} />
        <h3 className='font-bold py-2'>{title}</h3>
        <h4>{channelTitle}</h4>
        <h4>{statistics.viewCount} views</h4>
    </div>
  )
}

export default VideoCard