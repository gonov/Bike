import React, {useState} from 'react'
import {FaStar} from 'react-icons/fa';

export default function OneTrackCard({track, comments, handleSubmit}) {
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)
  


    return (
        <div className="card">
          {track?.img && <img src={track?.img} className="card-img-top" alt={track?.title} />}
          <div className="card-body">
            <h5 className="card-title">
              Name: {track?.title}
            </h5>
            <p className="card-text">
              City: {track?.city}
            </p>
            <p className="card-text">
              Start: {track?.start}
            </p>
            <p className="card-text">
              Finish: {track?.finish}
            </p>
            <div>
              Comments: {comments?.map((comment) => (
                  <div key={comment.track_id} className='row justify-content-center'>
                    <div>{comment.text}</div>
                  </div>
                ))}
            </div>
            <p className="card-text">
              user_id: {track?.user_id}
            </p>
            <form onSubmit={(e) =>handleSubmit(e, track.id)}>
            <div className='App'>
            {[...Array(5)].map((star , index) => {
                  const currentRating = index + 1;
                  return (
                    <label>
                      <input 
                      type='radio' 
                      name='rating' 
                      value={currentRating}
                      onClick={()=> setRating(currentRating)}
                      />
                      <FaStar
                       className='star' 
                       size={35}
                       color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                       onMouseEnter={() => setHover(currentRating)}
                       onMouseLeave={() => setHover(null)}
                       />
                    </label>
                  )
                })}
                </div>
<h2>Рейтинг маршрута {rating}</h2>
            </form>
            <form onSubmit={(e) =>handleSubmit(e, track.id)}>
            


              <br />
            
                <textarea className="form-control" name='text' placeholder="Leave a comment here" id="floatingTextarea2"/>
                
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
          </div>
        </div>
      );
    }
