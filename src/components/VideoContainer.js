import React,{useEffect, useState} from 'react'
import { YOUTUBE_API } from '../utils/constants'
import VideoCard from './VideoCard'

const VideoContainer = () => {
  
  const [videos, setVideos]=useState([])
  const getVideos=async()=>{
    const data = await fetch(YOUTUBE_API)
    const json = await data.json()
    setVideos(json?.items)
  }
  useEffect(()=>{
    getVideos()
  },[])
  return (
    <section className='flex flex-wrap'>
      {
        videos.map(video=>{
          return <VideoCard key={video.id} info={video} />
        })
      }
    </section>
  )
}

export default VideoContainer