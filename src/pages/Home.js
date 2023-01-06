import React, { useEffect } from 'react'
import { movieAction } from '../redux/actions/movieAction'
import { useDispatch, useSelector} from "react-redux"
import Banner from '../components/Banner';

export default function Home() {
  const dispatch = useDispatch();
  const {popularMovies,topRatedMovies,upcomingMovies}= useSelector(state=>state.movie)
  
  useEffect(()=>{
    dispatch(movieAction.getMovies())
  },[])
  return (
    <div>
      {/* pop에 results 값이 있으면 랜더를 해줘 */}
     {popularMovies.results && <Banner movie={popularMovies.results[0]}/>} 
    </div>
  )
}
