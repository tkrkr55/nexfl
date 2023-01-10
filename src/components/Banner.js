import React from 'react'

const Banner =({movie} )=> {
  console.log("movie?",movie)
  return (
    <div style={{backgroundImage:
    "url("+`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.poster_path}`+")"}}>
  
          
      </div>
  )
}

export default Banner
