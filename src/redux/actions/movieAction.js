import api from "../api"

const API_KEY=process.env.REACT_APP_API_KEY
function getMovies (){
  return async(dispatch)=>{
    
    // loading 의 ture인 경우 try를 통해 에러가 난경우 catch로 보내기 위해 사용한다.
    try{
      // 데이터 도착전 Reducer에 loading 을 true로 바꿔주고 
      dispatch({
        type:"GET_MOVIES_REQUEST"
      })
    const popularMovieApi = api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
    const topRatedApi = api.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
    const upcomingApi = api.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
    const genreApi = api.get(`/genre/movie/list?api_key=${API_KEY}&language=en-US`)

    let [popularMovies,topRatedMovies,upcomingMovies,genreList] = await Promise.all([popularMovieApi,topRatedApi,upcomingApi,genreApi])
    // 데이터 도착 후 Reducer에도 loading을 false로 바꿔준다.
  
    dispatch({
      type:"GET_MOVIES_SUCCESS",
      payload:{popularMovies:popularMovies.data 
        , topRatedMovies:topRatedMovies.data , 
        upcomingMovies:upcomingMovies.data,
        genreList:genreList.data.genres,}
    })
    }catch(error){
      // 에러 핸들링 하는곳
      dispatch({
        type: "GET_MOVIES_FAILURE"})
    }
    
  }

}


export const movieAction = {
  getMovies,
}