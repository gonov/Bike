import React, { useState } from 'react';
import Modal from '../ui/Modal';

export default function ProfilePage({trackData, userData}) {
  const [curElement, setCurElement] = useState({});

  return (
    <div className="d-flex flex-column justify-content-center">
      <div className='userProfile'>
              {userData?.map((user) => (
                <div key={user.id} className='row justify-content-center'>
                  <div className='col-8'> 
                    <div className="card">
                        <div className="card-body">
                          <p className="card-text"> Name: {user?.name}</p>
                          <p className="card-text"> Email: {user?.email}</p>
                          <img src='/img/ph.jpeg' className="photo" alt={user?.title}/>
                        </div>
                    </div>
                  </div>
                </div>
              ))}
      </div>
        {trackData ? 
          <div className='container mt-3'>
            <div className='track1'>
            
              {trackData?.map((track) => (
                <div key={track.id} className='row justify-content-center'>
                  <div className='col-8'> 
                    <div className="d-flex flex-row justify-content-between">
                      
                      {track?.img && <img src={track?.img} className="card-img-top" alt={track?.title} />}
                        <div className="card-body">
                          <p className="card-text m-0"> Name: {track?.title}</p>
                          <p className="card-text  m-0"> City: {track?.city}</p>
                          <p className="card-text  m-0"> Start: {track?.start}</p>
                          <p className="card-text  m-0"> Finish: {track?.finish}</p>
                        </div>
                        <div className="d-grid gap-2 d-md-block">
                        <button onClick={() => setCurElement(track)} type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        edit</button>
                        <button className="btn btn-danger" type="button">delete</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
      :
      <h2>Нет добавленных маршрутов</h2>}
        <Modal
          track={curElement}
        />
    
    </div>
  );
}
