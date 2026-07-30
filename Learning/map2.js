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
  academic: "/media/icons/school.png",
  accommodation: "/media/icons/bed_breakfast1-2.png",
  administration: "/media/icons/administration.png",
  facilities: "/media/icons/facilities.png",
  parking: "/media/icons/car.png",
  library: "/media/icons/library.png",
  entrance: "/media/icons/entrance.png",
  cafeteria: "/media/icons/cafetaria.png",
  office: "/media/icons/office-building.png",
  hotel: "/media/icons/hotel_0star.png",
  labs: "/media/icons/computers.png",
  hall: "/media/icons/fitness.png",
  gym: "/media/icons/fitness.png"
};


const markers = L.markerClusterGroup({

  disableClusteringAtZoom: 17,
  spiderfyOnMaxZoom: true,
  showCoverageOnHover: false,
  zoomToBoundsOnClick: true,

  iconCreateFunction: function(cluster) {

    const childMarkers = cluster.getAllChildMarkers();

    const counts = Object.keys(clusterIcons).reduce((acc, key) => {
      acc[key] = 0;
      return acc;
    }, {});


    childMarkers.forEach(marker => {

      const type = String(marker.options.type || "facilities").toLowerCase();

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

/*const points = [
    {name: "Multipurpose", coords: [-25.4347, 30.9800] },
    {name: "gym ", coords: [-25.4347, 30.9823] },
    {name: "Hotel", coords: [-25.4367, 30.9858] },
    { name: "Hospitality Building", coords: [-25.4362, 30.9856] },
    { name: "Building1", coords: [-25.4366, 30.9811] },
    { name: "Building2", coords: [-25.4372, 30.98239] }, //25°26'13.98"S 30°58'56.20"E
    { name: "Building3", coords: [-25.4369, 30.9825] },
    { name: "Building4", coords: [-25.4362, 30.9831] },
    { name: "Building5", coords: [-25.4356, 30.9828] }, //25°26'08.14"S 30°58'58.04"E
    { name: "Building6", coords: [-25.4353, 30.9779] }, //25°26'07.11"S 30°58'40.34"E
    { name: "Building7", coords: [-25.4354, 30.9805] }, //25°26'07.59"S 30°58'49.82"E
    { name: "Building10W", coords: [-25.4370, 30.9840]},//25°26'13.35"S 30°59'02.28"E
    { name: "Building10E", coords: [-25.4370, 30.9846]},//25°26'13.13"S 30°59'04.64"E
    { name: "Building13", coords: [-25.4370, 30.9808] },25°26'13.65"S 30°58'54.31"E
    {name: "Main entrence", coords: [-25.4371, 30.9818] }, //
    {name: "ict lab", coords: [-25.4355, 30.9823] }, //25°26'09.35"S 30°58'56.64"E
    {name: "B13 DH", coords: [-25.4369, 30.9807] }, //25°26'12.55"S 30°58'49.31"E
    {name: "Tuck shop", coords: [-25.4369, 30.9807] }, //25°26'12.69"S 30°58'50.69"E
    {name: "B6 Cafetaria", coords: [-25.4355, 30.9783] }, //25°26'07.98"S 30°58'41.94"E
    {name: "Loskop", coords: [-25.4365, 30.9814] }, //
    {name: "Deekarp", coords: [-25.4362, 30.9813] }, //
    {name: "Onderburg", coords: [-25.4359, 30.9808] }, //
    {name: "letaba", coords: [-25.4360, 30.9805] }, //
    {name: "Archive building", coords: [-25.4367, 30.9853] }, //25°26'11.76"S 30°58'52.00"E
    {name: "Parking Bay D", coords: [-25.4360, 30.9790] }, //25°26'11.44"S 30°58'55.04"E
   
  ];*/




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
  iconUrl: "/media/icons/school.png",
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



const cafeteria = L.icon({
  iconUrl: "/media/icons/cafetaria.png",
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

const hotel = L.icon({
  iconUrl: "/media/icons/hotel_0star.png",
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

const office = L.icon({
  iconUrl: "/media/icons/office-building.png",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});

const hall = L.icon({
  iconUrl: "/media/icons/fitness.png",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});

const gym = L.icon({
  iconUrl: "/media/icons/fitness.png",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});

const labs = L.icon({
  iconUrl: "/media/icons/computers.png",
  iconSize: [40, 40],
  iconAnchor: [20, 30],
  popupAnchor: [0, -40]
});



const buildings = [

  {
    name: "Building 1",
    type: "accommodation",
    coords: [-25.4366, 30.9811],
    icon: accommodation,
    image: "/media/bld1f.jpeg",
    description: "Student accommodation.",
    floors: ["Ground", "1st Floor"]
  },

  {
    name: "Building 3",
    type: "library",
    coords: [-25.4369, 30.9825],
    icon: library,
    image: "/media/library.webp",
    description: "Library and study area.",
    floors: ["Ground", "1st Floor", "2nd Floor"]
  },

  {
    name: "Deekarp",
    type: "accommodation",
    coords: [-25.4362, 30.9813],
    icon: accommodation,
    image: "/media/deekarp.jpg",
    description: "Deekarp building.",
    floors: ["Ground", "1st Floor"]
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
    name: "letaba",
    type: "accommodation",
    coords: [-25.4360, 30.9805],
    icon: accommodation,
    image: "/media/letaba.jpg",
    description: "Letaba building.",
    floors: ["Ground", "1st Floor"]
  },

  {
    name: "Loskop",
    type: "accommodation",
    coords: [-25.4365, 30.9814],
    icon: accommodation,
    image: "/media/loskop.jpg",
    description: "Loskop building.",
    floors: ["Ground", "1st Floor"]
  },

  {
      name: "Hospitality Building",
      type: "academic",
      coords: [-25.4362, 30.9856],  
      icon: academic,
      image: "/media/hospitality.jpg",
      description: "Hospitality building.",
      floors: ["Ground", "1st Floor", "2nd Floor"]
  },

  {
      name: "hotel",
      type: "hotel",
      coords: [-25.4367, 30.9858],  
      icon: hotel,
      image: "/media/hotel.jpg",
      description: "Hotel building.",
      floors: ["Ground", "1st Floor"]
  },



  {
    name: "Onderburg",
    type: "accommodation",
    coords: [-25.4359, 30.9808],    
    icon: accommodation,
    image: "/media/onderburg.jpg",
    description: "Onderburg building.",
    floors: ["Ground", "1st Floor"] 
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
    name: "iCT Lab",
    type: "labs",
    coords: [-25.4355, 30.9823],
    icon: labs,
    image: "/media/ict_lab.jpg",
    description: "Information and Communication Technology laboratory.",
    floors: ["Ground", "1st Floor", "2nd Floor"]
  },

  {
    name: "Building 13",
    type: "accommodation",
    coords: [-25.4369, 30.9807],  
    icon: accommodation,
    image: "/media/bld13dh.jpeg",
    description: "Department of Health Sciences.",
    floors: ["Ground", "1st Floor", "2nd Floor"]

  },

  {
    name: "Tuck Shop",
    type: "cafeteria",
    coords: [-25.4369, 30.9807],    
    icon: cafeteria,
    image: "/media/bld13tuckshop.jpeg",
    description: "Campus tuck shop.",
    floors: []
  },

  {
    name: "B6 Cafeteria",
    type: "cafeteria",
    coords: [-25.4355, 30.9783],
    icon: cafeteria,
    image: "/media/b6_cafeteria.jpg",
    description: "Another campus cafeteria.",
    floors: []
  },

  {
    name: "Building 10W",
    type: "office",
    coords: [-25.4370, 30.9840],
    icon: office,
    image: "/media/10w.webp",
    description: "Engineering and technology building.",
    floors: ["Ground", "1st Floor", "2nd Floor"]
  },

  {
    name: "Archive Building",
    type: "Office",
    coords: [-25.4367, 30.9853],
    icon: office,
    image: "/media/archive.jpeg",
    description: "Archive and documentation center.",
    floors: ["Ground", "1st Floor"]
  },

  {
    name: "Building 10E",
    type: "office",
    coords: [-25.4370, 30.9846],  
    icon: office,
    image: "/media/bld10e.jpeg",
    description: "Science and research building.",
    floors: ["Ground", "1st Floor", "2nd Floor"]
  },

  {
    name: "Multipurpose Hall",
    type: "hall",
    coords: [-25.4347, 30.9800],
    icon: hall,
    image: "/media/multpurps.jpeg",
    description: "Multipurpose hall for events and gatherings.",
    floors: ["Ground", "1st Floor"]
  },

  {
    name: "Gym",
    type: "gym",
    coords: [-25.4347, 30.9823],
    icon: gym,
    image: "/media/gym.jpg",
    description: "Sports and fitness center.",
    floors: ["Ground", "1st Floor"]
  },

  {
    name: "Building 2",
    type: "office",
    coords: [-25.4360, 30.9830],
    icon: office,
    image: "/media/bld2.jpeg",
    description: "Another office building.",
    floors: ["Ground", "1st Floor"]
  },

  {
    name: "Building 4",
    type: "academic",
    coords: [-25.4362, 30.9831],
    icon: academic,
    image: "/media/bld4.jpg",
    description: "Lecture rooms and classrooms.",
    floors: ["Ground", "1st Floor"]
  },

  { 
    name: "Building 7",
    type: "accommodation",
    coords: [-25.4354, 30.9805],
    icon: accommodation,
    image: "/media/bld7.jpg",
    description: "Student accommodation.",
    floors: ["Ground", "1st Floor"]
  },

  {
    name: "Building 6",
    type: "office",
    coords: [-25.4353, 30.9779],
    icon: office,
    image: "/media/ictbld.jpeg",
    description: "Lecture rooms and classrooms.",
    floors: ["Ground", "1st Floor"]
  },

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
    window.campusMarkers = window.campusMarkers || {};
    window.campusMarkers[building.name] = marker;
    
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



window.campusBuildings = buildings;
window.campusMap = map;
window.campusMarkerCluster = markers;

map.addLayer(markers);