const map = L.map('map').setView([-26.2, 26.0], 12);
const markers = L.markerClusterGroup();

// OpenStreetMap tiles
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

  //map.setView([-25.4599, 30.9986], 17);
});


const buffer = [
  [-25.4366, 30.9865], // A
  [-25.4425, 30.9889], // B
  [-25.4432, 30.9832], // C
  [-25.4393, 30.9796], // D
  [-25.4374, 30.9802], // E
  [-25.4370, 30.9787], // F
  [-25.4363, 30.9768], // G
  [-25.4352, 30.9747], // H
  [-25.4341, 30.9722], // I
  [-25.4333, 30.9698], // J
  [-25.4323, 30.9686], // K
  [-25.4313, 30.9680], // L
  [-25.4288, 30.9677], // M
  [-25.4273, 30.9671], // N
  [-25.4254, 30.9693], // O
  [-25.4197, 30.9731], // O
  [-25.4201, 30.9750], // P
  [-25.4200, 30.9759], // Q
  [-25.4197, 30.9764], // R
  [-25.4192, 30.9767], // S
  [-25.4219, 30.9772], // T
  [-25.4235, 30.9782], // U
  [-25.4286, 30.9789], // V
  [-25.4287, 30.9789], // W
  [-25.4321, 30.9844]  // X
 ];

const polygon = L.polygon(buffer).addTo(map);

//Icons 
const academic = L.icon({
    iconUrl: '/media/icons/', // path to your image
    iconSize: [40, 40],           // width, height
    iconAnchor: [20, 40],         // point of icon that touches map
    popupAnchor: [0, -40]
});

const accomodation = L.icon({
    iconUrl: '/media/icons/bed_breakfast1-2.png', // path to your image
    iconSize: [40, 40],           // width, height
    iconAnchor: [20, 40],         // point of icon that touches map
    popupAnchor: [0, -40]
});

const adminstration = L.icon({
    iconUrl: '/media/icons/', // path to your image
    iconSize: [40, 40],           // width, height
    iconAnchor: [20, 40],         // point of icon that touches map
    popupAnchor: [0, -40]
});

const facilties = L.icon({
    iconUrl: '/media/icons/', // path to your image
    iconSize: [40, 40],           // width, height
    iconAnchor: [20, 40],         // point of icon that touches map
    popupAnchor: [0, -40]
});

const parking = L.icon({
    iconUrl: '/media/icons/car.png', // path to your image
    iconSize: [40, 40],           // width, height
    iconAnchor: [20, 40],         // point of icon that touches map
    popupAnchor: [0, -40]
});

const library = L.icon({
    iconUrl: '/media/icons/library.png', // path to your image
    iconSize: [40, 40],           // width, height
    iconAnchor: [20, 40],         // point of icon that touches map
    popupAnchor: [0, -40]
});

const dh = L.icon({
    iconUrl: '/media/icons/', // path to your image
    iconSize: [40, 40],           // width, height
    iconAnchor: [20, 40],         // point of icon that touches map
    popupAnchor: [0, -40]
});

const self = L.icon({
    iconUrl: '/media/icons/', // path to your image
    iconSize: [40, 40],           // width, height
    iconAnchor: [20, 40],         // point of icon that touches map
    popupAnchor: [0, -40]
});

const entrance = L.icon({
    iconUrl: '/media/icons/entrance.png', // path to your image
    iconSize: [40, 40],           // width, height
    iconAnchor: [20, 40],         // point of icon that touches map
    popupAnchor: [0, -40]
});

map.setView([-25.4366, 30.9865], 17);
  const bufferPolygon = L.polygon(buffer, { color: '#000000', colorOpacity: 0.1, fillColor: '#000000', fillOpacity: 0.1 }).addTo(map);
  const center = bufferPolygon.getBounds().getCenter();
  

  /*const points = [
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
    {name: "B5 Cafeteria", coords: [-25.4358, 30.9824] }, //25°26'09.35"S 30°58'56.64"E
    {name: "B13 DH", coords: [-25.4369, 30.9807] }, //25°26'12.55"S 30°58'49.31"E
    {name: "Tuck shop", coords: [-25.4369, 30.9807] }, //25°26'12.69"S 30°58'50.69"E
    {name: "B6 Cafetaria", coords: [-25.4355, 30.9783] }, //25°26'07.98"S 30°58'41.94"E
    {name: "Parking Bay A", coords: [-] }, //
    {name: "Parking Bay B", coords: [-] }, //
    {name: "Parking Bay C", coords: [-] }, //
    {name: "Parking Bay D", coords: [-25.4360, 30.9790] }, //25°26'11.44"S 30°58'55.04"E
   
  ];*/







// BUILDING DATA ----------------
const buildings = [
  {
    name: "Building 1",
    coords: [-25.4366, 30.9811],
    icon: accomodation,
    image: "images/building1.jpg",
    description: "Student accommodation and residence facilities.",
    floors: ["Ground Floor", "1st Floor"]
  },

  {
    name: "Building 2",
    coords: [-25.4372, 30.98239],
    icon: adminstration,
    image: "/media/library.webp",
    description: "Administration offices and student services.",
    floors: ["Ground Floor", "1st Floor", "2nd Floor"]
  },

  {
    name: "Building 7",
    coords: [-25.4354, 30.9805],
    icon: accomodation,
    image: "/media/bld7.jpg",
    description: "Residence building for students.",
    floors: ["Ground Floor", "1st Floor"]
  },

  {
    name: "Building 3",
    coords: [-25.4369, 30.9825],
    icon: library,
    image: "/media/building3.jpg",
    description: "Library and study areas.",
    floors: ["Ground Floor", "1st Floor", "2nd Floor"]
  },

  {
    name: "Building 4",
    coords: [-25.4362, 30.9831],
    icon: academic,
    image: "/media/bld4.jpg",
    description: "Academic lecture rooms and labs.",
    floors: ["Ground Floor", "1st Floor"]
  },

  {
    name: "Building 5",
    coords: [-25.4356, 30.9828],
    icon: academic,
    image: "/media/building5.jpg",
    description: "Teaching facilities and classrooms.",
    floors: ["Ground Floor", "1st Floor", "2nd Floor"]
  },

  {
    name: "Building 6",
    coords: [-25.4353, 30.9779],
    icon: academic,
    image: "/media/building6.jpg",
    description: "Faculty offices and lecture halls.",
    floors: ["Ground Floor", "1st Floor"]
  },

  {
    name: "Building 10W",
    coords: [-25.4370, 30.9840],
    icon: adminstration,
    image: "/media/10w.webp",
    description: "Western administration offices.",
    floors: ["Ground Floor", "1st Floor"]
  },

  {
    name: "Building 10E",
    coords: [-25.4370, 30.9846],
    icon: adminstration,
    image: "/media/10w.webp",
    description: "Eastern administration section.",
    floors: ["Ground Floor", "1st Floor"]
  },

  {
    name: "Building 13",
    coords: [-25.4370, 30.9808],
    icon: accomodation,
    image: "images/building13.jpg",
    description: "Student housing and residence rooms.",
    floors: ["Ground Floor", "1st Floor", "2nd Floor"]
  },

  {
    name: "Main Entrance",
    coords: [-25.4371, 30.9818],
    icon: entrance,
    image: "media/background.jpg",
    description: "Main entrance to the campus.",
    floors: []
  },

  {
    name: "B5 Cafeteria",
    coords: [-25.4358, 30.9824],
    icon: facilties,
    image: "/media/b5_cafeteria.jpg",
    description: "Cafeteria serving students and staff.",
    floors: []
  },

  {
    name: "B13 Dining Hall",
    coords: [-25.4369, 30.9807],
    icon: facilties,
    image: "/media/b13_dining_hall.jpg",
    description: "Dining hall for students and staff.",
    floors: []
  },

  {
    name: "Tuck Shop",
    coords: [-25.4369, 30.9807],
    icon: facilties,
    image: "/media/tuck_shop.jpg",
    description: "Snack and beverage shop for students and staff.",
    floors: []
  },
  {
    name: "B6 Cafeteria",
    coords: [-25.4355, 30.9783],
    icon: facilties,  
    image: "/media/b6_cafeteria.jpg",
    description: "Cafeteria serving students and staff.",
    floors: []
  },
  {
    name: "Building 6 ICT Building",
    coords: [-25.4359, 30.9771],
    icon: facilties,  
    image: "/media/",
    description: "",
    floors: []
  },
  {
    name: "Lethaba mens residences",
    coords: [-25.4360, 30.9805],
    icon: facilties,  
    image: "/media/",
    description: "",
    floors: []
  },
  {
    name: "Onderberg",
    coords: [-25.4359, 30.9808],
    icon: facilties,  
    image: "/media/",
    description: "",
    floors: []
  },
  {
    name: "Deepkorp Womens Residences",
    coords: [-25.4362, 30.9813],
    icon: facilties,  
    image: "/media/",
    description: "",
    floors: []
  },
  {
    name: "Loskop",
    coords: [-25.4365, 30.9814],
    icon: facilties,  
    image: "/media/",
    description: "",
    floors: []
  },

  //Testing 
  {
    name: "Human Resources",
    coords: [-25.4359, 30.9831],
    icon: facilties,  
    image: "/media/",
    description: "",
    floors: []
  },
  {
    name: "Archive Building",
    coords: [-25.4367, 30.9858],
    icon: facilties,  
    image: "/media/",
    description: "",
    floors: []
  },
  {
    name: "Hostpitality Building",
    coords: [-25.4362, 30.9856],
    icon: facilties,  
    image: "/media/",
    description: "",
    floors: []
  },
  {
    name: "Hotel",
    coords: [-25.4367, 30.9858],
    icon: facilties,  
    image: "/media/",
    description: "",
    floors: []
  }

];

// FLOOR FUNCTION
function openFloor(floor) {
  alert(`Opening ${floor}`);
}  

//  CREATE MARKERS
buildings.forEach(building => {

  // Create floor buttons
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

  // Popup content
  const popupContent = `
    <div style="width:250px">

      <h3 style="
        margin-bottom:10px;
        color:#2c3e50;
      ">
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
          <h4 style="
            margin-bottom:8px;
            color:#2c3e50;
          ">
            Floors
          </h4>

          ${floorButtons}
        `
        : ""
      }

    </div>
  `;

  // Add marker
  const marker = L.marker(building.coords, {
    icon: building.icon
  }).bindPopup(popupContent);
    
  markers.addLayer(marker);
  
});
map.addLayer(markers);

// Set initial map view ONCE
map.setView([-25.4366, 30.9825], 17);

 

