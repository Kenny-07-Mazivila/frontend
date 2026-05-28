const map = L.map('map').setView([-25.4366, 30.9825], 17);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19
}).addTo(map);



navigator.geolocation.getCurrentPosition((pos) => {

  const lat = pos.coords.latitude;
  const lng = pos.coords.longitude;

  L.marker([lat, lng])
    .addTo(map)
    .bindPopup("You are here")
    .openPopup();

});


const clusterIcons = {
  academic: "/media/icons/academic.png",
  accommodation: "/media/icons/bed_breakfast1-2.png",
  administration: "/media/icons/administration.png",
  facilities: "/media/icons/facilities.png",
  parking: "/media/icons/car.png",
  library: "/media/icons/library.png",
  entrance: "/media/icons/entrance.png"
};


const markers = L.markerClusterGroup({

  disableClusteringAtZoom: 17,
  spiderfyOnMaxZoom: true,
  showCoverageOnHover: false,
  zoomToBoundsOnClick: true,

  iconCreateFunction: function(cluster) {

    const childMarkers = cluster.getAllChildMarkers();

    const counts = {
      academic: 0,
      accommodation: 0,
      administration: 0,
      facilities: 0,
      parking: 0,
      library: 0,
      entrance: 0
    };


    childMarkers.forEach(marker => {

      const type = marker.options.type;

      if (counts[type] !== undefined) {
        counts[type]++;
      }

    });


    let dominantType = "facilities";
    let highest = 0;

    Object.keys(counts).forEach(type => {

      if (counts[type] > highest) {
        highest = counts[type];
        dominantType = type;
      }

    });


    return L.divIcon({

      html: `
        <div class="cluster-icon-wrapper">

          <img 
            src="${clusterIcons[dominantType]}" 
            class="cluster-icon-image"
          >

        </div>
      `,

      className: "custom-cluster",
      iconSize: [55, 55]

    });

  }

});


const buffer = [

  [-25.4366, 30.9865],
  [-25.4425, 30.9889],
  [-25.4432, 30.9832],
  [-25.4393, 30.9796],
  [-25.4374, 30.9802],
  [-25.4370, 30.9787],
  [-25.4363, 30.9768],
  [-25.4352, 30.9747],
  [-25.4341, 30.9722],
  [-25.4333, 30.9698],
  [-25.4323, 30.9686],
  [-25.4313, 30.9680],
  [-25.4288, 30.9677],
  [-25.4273, 30.9671],
  [-25.4254, 30.9693],
  [-25.4197, 30.9731],
  [-25.4201, 30.9750],
  [-25.4200, 30.9759],
  [-25.4197, 30.9764],
  [-25.4192, 30.9767],
  [-25.4219, 30.9772],
  [-25.4235, 30.9782],
  [-25.4286, 30.9789],
  [-25.4287, 30.9789],
  [-25.4321, 30.9844]

];

L.polygon(buffer, {
  color: "#000000",
  fillColor: "#000000",
  fillOpacity: 0.1
}).addTo(map);


const academic = L.icon({
  iconUrl: "/media/icons/academic.png",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});

const accommodation = L.icon({
  iconUrl: "/media/icons/bed_breakfast1-2.png",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});

const administration = L.icon({
  iconUrl: "/media/icons/administration.png",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});

const facilities = L.icon({
  iconUrl: "/media/icons/facilities.png",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});

const parking = L.icon({
  iconUrl: "/media/icons/car.png",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});

const library = L.icon({
  iconUrl: "/media/icons/library.png",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});

const entrance = L.icon({
  iconUrl: "/media/icons/entrance.png",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});



const buildings = [

  {
    name: "Building 1",
    type: "accommodation",
    coords: [-25.4366, 30.9811],
    icon: accommodation,
    image: "/media/building1.jpg",
    description: "Student accommodation.",
    floors: ["Ground", "1st Floor"]
  },

  {
    name: "Building 3",
    type: "library",
    coords: [-25.4369, 30.9825],
    icon: library,
    image: "/media/building3.jpg",
    description: "Library and study area.",
    floors: ["Ground", "1st Floor", "2nd Floor"]
  },

  {
    name: "Building 5",
    type: "academic",
    coords: [-25.4356, 30.9828],
    icon: academic,
    image: "/media/building5.jpg",
    description: "Lecture rooms and classrooms.",
    floors: ["Ground", "1st Floor"]
  },

  {
    name: "Main Entrance",
    type: "entrance",
    coords: [-25.4371, 30.9818],
    icon: entrance,
    image: "/media/background.jpg",
    description: "Campus entrance.",
    floors: []
  },

  {
    name: "Parking Bay D",
    type: "parking",
    coords: [-25.4360, 30.9790],
    icon: parking,
    image: "/media/parking.jpg",
    description: "Student parking area.",
    floors: []
  },

  {
    name: "B5 Cafeteria",
    type: "facilities",
    coords: [-25.4358, 30.9824],
    icon: facilities,
    image: "/media/b5_cafeteria.jpg",
    description: "Campus cafeteria.",
    floors: []
  }
// add buildings as needed and include a minzoom property, remember that zoom is inversly proportional to the number, meaning that the higher the number, the more you'll have to zoom in to see the building.
];


function openFloor(floor) {

  alert(`Opening ${floor}`);

}


buildings.forEach(building => {

  let floorButtons = "";

  building.floors.forEach(floor => {

    floorButtons += `
      <button onclick="openFloor('${floor}')"
        style="
          margin:5px;
          padding:8px 12px;
          border:none;
          border-radius:6px;
          background:#2ecc71;
          color:white;
          cursor:pointer;
        ">
        ${floor}
      </button>
    `;

  });

  const popupContent = `

    <div style="width:250px">

      <h3 style="margin-bottom:10px;color:#2c3e50;">
        ${building.name}
      </h3>

      <img
        src="${building.image}"
        style="
          width:100%;
          border-radius:10px;
          margin-bottom:10px;
        "
      >

      <p style="
        font-size:14px;
        color:#555;
        margin-bottom:15px;
      ">
        ${building.description}
      </p>

      ${
        building.floors.length > 0
        ? `
          <h4 style="margin-bottom:8px;color:#2c3e50;">
            Floors
          </h4>

          ${floorButtons}
        `
        : ""
      }

    </div>

  `;

  const marker = L.marker(building.coords, {

      icon: building.icon,
      type: building.type
    
    }).bindPopup(popupContent);
    marker.minZoom = building.minZoom || 0;
    markers.addLayer(marker);
    
});


// makes the building to appear with minzoom and disappear when zoomed out
function updateMarkerVisibility() {

  const currentZoom = map.getZoom();

  markers.eachLayer(layer => {

    if(layer.minZoom !== undefined) {

      if(currentZoom >= layer.minZoom) {

        layer.setOpacity(1);

        if(layer.getElement()) {
          layer.getElement().style.pointerEvents = "auto";
        }

      } else {

        layer.setOpacity(0);

        if(layer.getElement()) {
          layer.getElement().style.pointerEvents = "none";
        }

      }

    }

  });

}


updateMarkerVisibility();


map.on('zoomend', updateMarkerVisibility);



map.addLayer(markers);