import React from 'react'

export default function OneTrackCard({track, comments, handleSubmit}) {
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
                <textarea className="form-control" name='text' placeholder="Leave a comment here" id="floatingTextarea2"/>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
          </div>
        </div>
      );
    }
