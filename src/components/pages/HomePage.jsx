import React from 'react';

export default function HomePage({tracks, user}) {
  console.log({tracks})
  return (
    <div className='container'>
      home
   
      {tracks?.map((track) => (
        <div key={track.id} className='row justify-content-center'>
          <div className='col-8'> 
            <div className="card">
              {track?.img && <img src={track?.img} className="card-img-top" alt={track?.title} />}
              <div className="card-body">
                <h5 className="card-title">
                 <a href={`/${track.id}`}>{track?.title}</a> 
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
          </div>
        </div>
      ))}
    </div>

  );
}
