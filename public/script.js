function init() {
  const map = new ymaps.Map('map', {
    center: [55.70711175262821, 37.59748726002942],
    zoom: 17,
    controls: ['routePanelControl'],
  });

  let control = myMap.controls.get('routePanelControl')

  map.controls.remove('searchControl');
  map.controls.remove('trafficControl');
  map.controls.remove('typeSelector');
}

ymaps.ready(init);
