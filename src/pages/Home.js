import React, { useEffect } from 'react'
import { movieAction } from '../redux/actions/movieAction'
import { useDispatch, useSelector} from "react-redux"
import Banner from '../components/Banner';

export default function Home() {
  const dispatch = useDispatch();
  const {popularMovies,topRatedMovies,upcomingMovies} = useSelector(state=>state.movie)
 
  useEffect(()=>{
    dispatch(movieAction.getMovies())
  },[])
  return (
    <div>
      {/* popular의 result란 값이 있으면? <Banner>의내용을 보여줘 &&은 둘다 참이여야한다. */}
    {popularMovies.result && <Banner movie={popularMovies.results[0]}/> }
    </div>
  )
}
