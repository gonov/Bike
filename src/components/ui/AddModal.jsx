import axios from 'axios';
import React, { useState } from 'react'

export default function AddModal({track}) {
  const[currentTrack, setCurrentTrack]=useState(track)

  const handleChange = (e) => {
    const {name, value } = e.target;
    setCurrentTrack((prevTrack) => ({...prevTrack, [name]:value}))
  }

  const handleSave = async (e, id) => {
    try {
      await axios.put(`/api/profile/track/edit/${id}`, Object.fromEntries(new FormData(e.target)))
    } catch (error) {
      console.log(error);
    }
  }

  return (
  <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <form onSubmit={(e) => handleSave(e, track.id)}>
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Editing a route</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text" id="inputGroup-sizing-sm">Name: </span>
          <input onChange={handleChange} name='title' defaultValue={track?.title} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
        </div>
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text" id="inputGroup-sizing-sm">City: </span>
          <input onChange={handleChange} name='city' defaultValue={track?.city} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
        </div>
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text" id="inputGroup-sizing-sm">Start: </span>
          <input onChange={handleChange} name='start' defaultValue={track?.start} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
        </div>
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text" id="inputGroup-sizing-sm">Finish: </span>
          <input onChange={handleChange} name='finish' defaultValue={track?.finish} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary">Save</button>
      </div>
    </div>
    </form>
  </div>
</div>
  )
}
