// Initialize map
const map = new maplibregl.Map({
  container: 'map',

  // Free public style (no API key needed)
  style: 'https://demotiles.maplibre.org/style.json',

  center: [-30.9853, -25.4753], // Example: near Nelspruit
  zoom: 15
});

// Add navigation controls (zoom buttons)
map.addControl(new maplibregl.NavigationControl());

// Example campus locations (GeoJSON)
const campusData = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "Library"
      },
      geometry: {
        type: "Point",
        coordinates: [30.9860, -25.4748]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Main Hall"
      },
      geometry: {
        type: "Point",
        coordinates: [30.9845, -25.4755]
      }
    }
  ]
};

// Add markers when map loads
map.on('load', () => {

  // Add data source
  map.addSource('campus', {
    type: 'geojson',
    data: campusData
  });

  // Add layer
  map.addLayer({
    id: 'campus-points',
    type: 'circle',
    source: 'campus',
    paint: {
      'circle-radius': 6,
      'circle-color': '#007cbf'
    }
  });

  // Add click popup
  map.on('click', 'campus-points', (e) => {
    const coords = e.features[0].geometry.coordinates.slice();
    const name = e.features[0].properties.name;

    new maplibregl.Popup()
      .setLngLat(coords)
      .setHTML(`<strong>${name}</strong>`)
      .addTo(map);
  });

  // Change cursor on hover
  map.on('mouseenter', 'campus-points', () => {
    map.getCanvas().style.cursor = 'pointer';
  });

  map.on('mouseleave', 'campus-points', () => {
    map.getCanvas().style.cursor = '';
  });

});