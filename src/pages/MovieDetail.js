import React,{useEffect}from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function MovieDetail() {
  const {popularMovies,topRatedMovies,upcomingMovies,loading}=useSelector(state=>state.movie)
  let{id} =useParams()
 
  return (
    <div>
      
     </div>
  )
}
