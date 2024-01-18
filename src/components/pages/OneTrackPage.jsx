import React, { useEffect } from 'react';
import OneTrackCard from '../ui/OneTrackCard';

function OneTrackPage({ tracks }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://api-maps.yandex.ru/2.1/?apikey=147df303-e99f-4bbb-b6c2-dc588fce9f73&lang=ru_RU';
    script.async = true;
    script.onload = () => {
      ymaps.ready(() => {
        const map = new ymaps.Map('map', {
          center: [55.70711175262821, 37.59748726002942],
          zoom: 17,
          controls: ['routeButtonControl'],
        });

        map.controls.remove('searchControl');
        map.controls.remove('trafficControl');
        map.controls.remove('typeSelector');

        const control = map.controls.get('routeButtonControl');
        // Assuming the first track from the array is used
        control.routePanel.state.set({
          from: tracks[0].start,
          to: tracks[0].finish,
          
        });
      });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [tracks]);

  return (
    <div className='containertrack'>
      <div className='track1'>
        {tracks?.map((track) => (
          <div key={track.id} className='row justify-content-center'>
            <div className='col-8'> 
              <OneTrackCard track={track}/>
            </div>
            <div id="map" className="map">
              {/* The map will be rendered here */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OneTrackPage;