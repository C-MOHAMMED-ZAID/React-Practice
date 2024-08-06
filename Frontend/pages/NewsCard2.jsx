import { useState } from "react"


function NewsCard2({imgurl,title,children,heart,likes,dislikes}) {
    const [heartCount,setHeartCount]= useState(heart);
    const [likeCount,setLikeCount]= useState(likes);
    const [dislikeCount,setDislikeCount]= useState(dislikes);
    const handleHeart= () =>{
        setHeartCount(heartCount+1);
    };
    const handleLike= () => {
        setLikeCount(likeCount+1);
    };
    const handleDislike= () => {
        setDislikeCount(dislikeCount+1);
    }
  return (
    <div>
      <div className="card" style={{width: "18rem",marginLeft:'10px'}}>
  <img src={imgurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{children}</p>
    <div className='btn position-relative' style={{marginRight:"20px"}} onClick={handleHeart}><i class="bi bi-heart"></i>
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">{heartCount}
  </span>
</div>
    <div className='btn position-relative' style={{marginLeft:"30px"}} onClick={handleLike}><i class="bi bi-hand-thumbs-up"></i>
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">{likeCount}
  </span></div>
    <div className='btn position-relative' style={{marginLeft:"50px"}} onClick={handleDislike}><i class="bi bi-hand-thumbs-down"></i>
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{dislikeCount}
  </span></div>
    
  </div>
</div>
    </div>
  )
}

export default NewsCard2