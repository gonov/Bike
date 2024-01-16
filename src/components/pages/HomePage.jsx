import React from 'react';

export default function HomePage() {
  return (
    <div className="d-flex flex-column justify-content-center">

      <div className="row d-flex justify-content-center">
        {allTracks?.map((el) => {
          (
            <div className="card mb-3 me-3" style={{ width: '18rem' }}>
              <img src={track.img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{track.title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                {/* <a href={`/dolphins/${track.id}`} className="btn btn-dark">See the dolphin</a> */}

                <button className="btn btn-danger" type="button" onClick={() => deleteHandler(track.id)}>Swim away</button>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
