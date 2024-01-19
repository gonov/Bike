import React, {useState, useEffect} from 'react';
import axios from 'axios'

export default function HomePage({tracks, user}) {
  const [allTracks, setAllTracks] = useState(tracks);
  const [input, setInput] = useState('');

  useEffect(() => {
    const time = setTimeout(() => {
      axios(`/tracks/search?filter=${input}`).then(({ data }) => setAllTracks(data));
    }, 800);

    return () => {
      clearTimeout(time);
    };
  }, [input]);

  // const submitHandler = async (event) => {
  //   event.preventDefault();
  //   const response = await fetch('/api/dolphins', {
  //     method: 'POST',
  //     headers: { 'Content-type': 'application/json' },
  //     body: JSON.stringify(input),
  //   });
  //   const data = await response.json();
  //   setAllTracks((prev) => [data, ...prev]);
  //   setInput({ name: '', img: '' });
  // };


  const changeHandler = (e) => {
    setInput(e.target.value);
  };


  return (
    <div className='container'>

<br />

<input name="filter" type="text" value={input} onChange={changeHandler} />

<br />
      home
      <form >
      {allTracks?.map((track) => (
        <div key={track.id} className='row justify-content-center'>
          <div className='col-8'> 
            <div className="card">
              {track?.img && <img src={track?.img} className="card-img-top" alt={track?.title} />}
              <div className="card-body">
                <h5 className="card-title">
                 <a href={`/tracks/${track.id}`}>{track?.title}</a> 
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
      </form>
    </div>

  );
}
