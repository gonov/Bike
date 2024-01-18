import React from 'react'

export default function OneTrackCard({track}) {
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
      <p className="card-text">
        user_id: {track?.user_id}
      </p>
    </div>
  </div>
  )
}
