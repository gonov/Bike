

ymaps.ready((tracks) => {
  const map = new ymaps.Map('map', {
    center: [55.70711175262821, 37.59748726002942],
    zoom: 17,
    controls: ['routeButtonControl', tracks],
  });

  map.controls.remove('searchControl');
  map.controls.remove('trafficControl');
  map.controls.remove('typeSelector');

  const control = map.controls.get('routeButtonControl');
  // const { track } = Track.findAll();
  // Задание состояния для панели маршрутизации.
  control.routePanel.state.set({
  // Адрес начальной точки.
    from: '123',
    // Адрес конечной точки.
    to: '123',
  });
});
