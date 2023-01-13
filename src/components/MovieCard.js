import React from 'react'
import { Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
export const MovieCard = ({item}) => {

  const {genreList}=useSelector(state=>state.movie)
  const navigate = useNavigate()
  const showDetail=()=>{
    navigate(`/movies/${item.id}`)
    
  }

  return (
    <div className='card'
     style={{background:"url("+`https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.poster_path}`+")"}}
    onClick={showDetail}
    >
      <div className='overlay'>
      <h1>{item.title}</h1>
      <div>{item.genre_ids.map((id)=>(
      <Badge bg="danger">
       {genreList.find(item=>item.id == id).name}
      </Badge>))}
      </div>
      <span>{item.vote_average}</span>
      <span>{item.adult?"청불":"Under18"}</span>
      </div>
      </div>
  )
}
