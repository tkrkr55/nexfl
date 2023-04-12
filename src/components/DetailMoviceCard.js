import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Badge } from 'react-bootstrap';
export default function DetailMoviceCard({item}) {

  return (
    <div className='card_movie'>
    <div className='detail_movice_card'
     style={{background:"url("+`https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.poster_path}`+")"}}
 
    >
     
      <div >
      <h1>{item.title}</h1>
      
      <span>평점 : {item.vote_average}</span>
      <div>청불 :{item.adult?"청불":"Under18"}</div>
      </div>
      </div>
      </div>
  )
}
