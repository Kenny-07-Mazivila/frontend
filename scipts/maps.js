const map = L.map('map').setView([-25.4366, 30.9825], 17);

// OpenStreetMap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19
}).addTo(map);


// Example marker data
const buildings = [
  {
    name: "Building 1",
    coords: [-25.4366, 30.9811],
    icon: accomodation
  },

  {
    name: "Building 2",
    coords: [-25.4372, 30.98239],
    icon: adminstration
  },

  {
    name: "Library",
    coords: [-25.4369, 30.9825],
    icon: library
  }
];


// Create markers
const markers = [];

buildings.forEach(building => {

  const marker = L.marker(building.coords, {
    icon: building.icon
  }).bindPopup(building.name);

  markers.push(marker);

});


// Function to control visibility
function updateMarkers() {

  markers.forEach(marker => {

    if (map.getZoom() >= 16) {

      if (!map.hasLayer(marker)) {
        marker.addTo(map);
      }

    } else {

      if (map.hasLayer(marker)) {
        map.removeLayer(marker);
      }

    }

  });

}


// Run when zoom changes
map.on("zoomend", updateMarkers);


// Run immediately on page load
updateMarkers();