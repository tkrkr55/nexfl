import React,{useEffect, useState}from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector , } from 'react-redux'
import {Container,Row,Col} from 'react-bootstrap';
import { FaImdb } from 'react-icons/fa';
import { HiOutlineUserGroup } from 'react-icons/hi';
import YouTube from 'react-youtube';
import axios from 'axios'
import DetailModal from '../components/DetailModal';
import DetailMoviceCard from '../components/DetailMoviceCard';

export default function MovieDetail() {
  let{id} =useParams()
  const navigate = useNavigate()
  const [detail,setdetail] = useState(null)
  const [review,setReview] = useState()
  const [movies,setMovices] = useState()
  const API_KEY=process.env.REACT_APP_API_KEY
  const {popularMovies,topRatedMovies,upcomingMovies,loading}=useSelector(state=>state.movie)

  const getMovieDetail = async()=>{
   const result = await axios.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`).then((data)=>data.data)
  setdetail(result)
  console.log(result)
  }

  const getReviews = async ()=>{
    const result = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`).then((data)=>data.data.results)
    setReview(result)
    console.log(review)
   
  }

  const getMovies = async () =>{
    const result =  await axios.get(`/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`).then((data)=>data.data.results)
    console.log(result)
    setMovices(result)
  }

  useEffect(()=>{
    getMovies()
  },[])

  useEffect(()=>{
    getMovieDetail()

  },[])

  useEffect(()=>{
    getReviews()
  },[])
  
  return (
    <div>
      <div className='detail_wrap'>
      <img className='detail_bener' src='https://images.hdqwalls.com/download/polygonal-abstract-red-dark-background-eo-1280x1024.jpg'></img>
      <button className='datail_btn' onClick={()=>navigate('/')}>HOME | MUMMIES</button>
      </div>
      <div className='datail_info'>
      <Container>
      <Row >
        <Col lg={6} className='movie_img'>
          <img className='datailCard_img' src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${detail?.poster_path}`}></img>
        </Col>
        <Col lg={6}>
          
          <p>{detail?.genres.map((item)=>{
            return  <p className='dtail_genres'>{item.name}</p>
          })}</p>
          <h1>{detail?.title}</h1>
          <div>{detail?.tagline}</div>
          <div className='average_wrap'>
            <div>
            <FaImdb  className='averageicon'/>
           {detail?.vote_average.toFixed(1)}
           </div>
            <div className='popularity'>
            <HiOutlineUserGroup  className='pop_icon'/>
            {detail?.popularity}
            </div>
            {detail?.adult ? <div style={{color:"red"}}>청소년 관람 불가</div> : <div style={{color:"yellow"}}>청소년 관람 가능 </div>}
          </div>
          <div className='detail_overview'>{detail?.overview}</div>
          
          <div>
            <div className='budget'>
              <div className='detail_budget'>Budget</div>
              <div>{detail?.budget}</div>
            </div>
            <div className='budget'>
              <div className='detail_budget'>Revenue</div>
              <div>{detail?.revenue}</div>
            </div>
            <div className='budget'>
              <div className='detail_budget'>Release_date</div>
              <div>{detail?.release_date}</div>
            </div>
            <div className='budget'>
              <div className='detail_budget'>Time</div>
              <div>{detail?.runtime}</div>
            </div>

            <DetailModal id={id}/>
            
            <div>
             
            </div>
          
          </div>
          
        </Col>
      </Row>
      </Container>

      
      <div className='review_wrap'>
      <h2>review</h2>

      {review && review.map((item)=>{

        return  (
        <>
        <div>author :  {item.author}</div>
        <div className='review'>{item.content}</div>
        </>
      )
      })}
      
      </div>
      </div>
      <div>
        <Container>
          
          <Row>
          <h1 className='hotmovies'>hot movies</h1>
           {movies && movies.map((item)=>{
              return  <Col lg={6}><DetailMoviceCard item={item}/></Col>
            })}
          </Row>

        </Container>
      </div>
     </div>
  )
}
