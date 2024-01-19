import React, {useState} from 'react'
import {FaStar} from 'react-icons/fa';

export default function OneTrackCard({track, rating, setRating, comment, submitHandler, handleSubmit}) {
  const [hover, setHover] = useState(null)

  console.log({rating})
  



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
              Comments: {comment?.map((c) => (
                  <div key={c.track_id} className='row justify-content-center'>
                    <div>{c.text}</div>
                  </div>
                ))}
            </div>
            <p className="card-text">
              user_id: {track?.user_id}
            </p>
            
            <div className='App'>
            {[1,2,3,4,5].map((star) => (
                    <label>
                      <input 
                      type='radio' 
                      name='rating' 
                      value={star}
                      onClick={(e)=> {setRating(star); submitHandler(e, track.id) }}
                      />
                      <FaStar
                       className='star' 
                       size={35}
                       color={star <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                       onMouseEnter={() => setHover(star)}
                       onMouseLeave={() => setHover(null)}
                       />
                    </label>
                  ))}
                </div>
<h2>Рейтинг маршрута {rating}</h2>
            
            <form onSubmit={(e) =>handleSubmit(e, track.id)}>
            


              <br />
            
                <textarea className="form-control" name='text' placeholder="Leave a comment here" id="floatingTextarea2"/>
                
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
          </div>
        </div>
      );
    }
