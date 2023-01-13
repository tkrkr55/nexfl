import React, { useEffect } from 'react'
import { movieAction } from '../redux/actions/movieAction'
import { useDispatch, useSelector} from "react-redux"
import Banner from '../components/Banner';
import MovieSlide from '../components/MovieSlide';
import ClipLoader from "react-spinners/ClipLoader";

export default function Home() {
  const dispatch = useDispatch();
  const {popularMovies,topRatedMovies,upcomingMovies,loading} = useSelector(state=>state.movie)
  useEffect(()=>{
    dispatch(movieAction.getMovies())
  },[])
  // loading 이 true면 loading 스피너를 보여주고
  // loading 이 flase면 데이터를 보여주고
  // loading 이 true는 데이터 도착전
  // loading 이 flase 데이터 도착후 또는 에러가 났을때 
  if(loading){
    return <ClipLoader
    color='#838BB2'
    loading={loading}
    size={150}
  />
  }
  return (
    <div>
       
      {/* popular의 result란 값이 있으면? <Banner>의내용을 보여줘 &&은 둘다 참이여야한다. */}
      <Banner movie={popularMovies.results[0]}/>

      <h1>Popular Movie</h1>
      <MovieSlide movies={popularMovies}/>
      <h1>Top rated Movie</h1>
      <MovieSlide movies={topRatedMovies}/>
      <h1>Upcoming Movie</h1>
      <MovieSlide movies={upcomingMovies}/>
    </div>
  )
}
