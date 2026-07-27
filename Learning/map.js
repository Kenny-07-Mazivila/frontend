const map = L.map('map').setView(
  [-25.4366, 30.9811],
  16
);

L.tileLayer(
  'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    maxZoom: 19
  }
).addTo(map);

L.marker([-25.4372, 30.98239]) // Coodinates of the icon.
.addTo(map) //loads the icon on the map.
.bindPopup(`<div class="popup">
    <h1>Hello</h1>
    <p>This is my popup</p>
    </div>
    `) //Creates a message that appears when a user clicks
//.openPopup() //Forces the popup to load when the page loads


// ============= STORE MAKER IN A VARIABLE =================
const anypoint = L.marker([-25.4356, 30.9823])

//call the viriable name to make changes to the icon
anypoint.bindPopup("ICT building 5")
anypoint.addTo(map)

//============== Createa custom Icon ==================== \\

const myIcon = L.icon({
    iconUrl : '/media/icons/3d.png',
    iconAnchor: [-10, -30], //Point touching the ground
    popupAnchor: [0, -30] //Where the popup contents appear in respect to the icon
});

//use that Icon to create a marker
L.marker(
  [-25.4362, 30.9856],
  {
    icon: myIcon
  }
).addTo(map)
.bindPopup("this is the hostpitality building");

//============ Dragable marker ==========\\

L.marker([-25.4366, 30.9830],{
    draggable: true
}).addTo(map)

// ================Marker that listines to a click ========================== \\
anypoint.on('click', () => {
  alert("Clicked");
});

// ======= creating a curosal for images ========================= \\
// Image list
const images = [
  "/media/bld7.jpg",
  "/media/bld4.jpg"
];

// Track current image
let currentIndex = 0;

// Build popup HTML
function getPopupContent() {
  return `
    <div class="image-container" >

      <img  src="${images[currentIndex]}"  onclick="event.stopPropagation()"/>

      <div class="inner-container">
        <button  onclick="prevImage(event)">
          <i class="fa-solid fa-angle-left"></i>
        </button>
        <button  onclick="nextImage(event)">
          <i class="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>

    <div class="content">
      <h3>Image curosal</h3>
      <p> This is the testing part of the images </p>
      <a href="map.js">hi</a>
  `;
}

// Create marker
const cursorImages = L.marker([-25.4353, 30.9779], {
  icon: myIcon
}).addTo(map)
cursorImages.bindPopup(getPopupContent())
cursorImages.openPopup();


// FIX: stop bubbling + update popup safely
function nextImage(e) {
  if (e) e.stopPropagation();

  currentIndex = (currentIndex + 1) % images.length;

  cursorImages.setPopupContent(getPopupContent());
}

function prevImage(e) {
  if (e) e.stopPropagation();

  currentIndex = (currentIndex - 1 + images.length) % images.length;

  cursorImages.setPopupContent(getPopupContent());
}

// Make functions accessible to popup HTML
window.nextImage = nextImage;
window.prevImage = prevImage;