import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import YouTube from 'react-youtube';



export default function DetailModal({id}) {
  const [show, setShow] = useState(false);
  const [detailKey,setDetailKey] = useState(null)
  const youtubeId = async () =>{
    const result = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((data)=>data.data)
    setDetailKey(result)
    }

    useEffect(()=>{
      youtubeId()
    },[])
  
  const API_KEY=process.env.REACT_APP_API_KEY
  return (
    <div>
       <Button variant="danger" onClick={() => setShow(true)}>
       예고편 보기
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-100w"
        aria-labelledby="example-custom-modal-styling-title"
        className='modal'
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
           예고편
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
          <YouTube
//videoId : https://www.youtube.com/watch?v={videoId} 유튜브 링크의 끝부분에 있는 고유한 아이디
  videoId='mvympVt69h4'
//opts(옵션들): 플레이어의 크기나 다양한 플레이어 매개 변수를 사용할 수 있음.
//밑에서 더 설명하겠습니다.
  opts={{
    width: "400",
    height: "400",
    playerVars: {
      autoplay: 1, //자동재생 O
      rel: 0, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
      modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
    },
  }}
  //이벤트 리스너 
  onEnd={(e)=>{e.target.stopVideo(0);}}      
/>
          </p>
        </Modal.Body>
      </Modal>
    </div>
  )
}
