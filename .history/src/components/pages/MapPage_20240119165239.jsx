import React, { useEffect } from 'react'

export default function MapPage() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://api-maps.yandex.ru/2.1/?apikey=147df303-e99f-4bbb-b6c2-dc588fce9f73&lang=ru_RU';
        script.async = true;
        script.onload = () => {
          ymaps.ready(() => {
            const map = new ymaps.Map('map', {
              center: [55.70711175262821, 37.59748726002942],
              zoom: 17,
              controls: ['routePanelControl'],
              
            });

    
            // map.controls.remove('searchControl');
            // map.controls.remove('trafficControl');
            // map.controls.remove('typeSelector');
    
            // const control = map.controls.get('routePanelControl');
            // Assuming the first track from the array is used
           
          });
        };
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);
  return (
    <div>
       <div id="map" className="map">
              {/* The map will be rendered here */}
            </div>
    </div>
  )
}
