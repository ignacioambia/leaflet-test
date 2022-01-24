// var map = L.map('map').setView([51.505, -0.09],13);


const destinations = {
  cdmx: { lat :19.42847 , lng:  -99.12766 },
  guadalajara: { lat:20.659698 , lng:-103.349609 },
  monterrey: { lat: 25.686613, lng: -100.316116}
}
const map = L.map('map', {zoomControl: false}).setView(destinations.cdmx,13);

// cdmx: { lat :19.42847 , lng:  -99.12766 },

L.control.zoom({
  position: 'bottomright'
}).addTo(map);

L.tileLayer('http://{s}.google.com/vt/lyrt=t,h&x={x}&y={y}&z={z}',{
  maxZoom: 30,
  subdomains:['mt0','mt1']
}).addTo(map);

const markers = L.markerClusterGroup();



map.addLayer(markers);

for( origin in destinations){
  console.log(origin)
  for(let i = 0; i < (Math.random() * (80 - 50) + 50); i++){
    addCoordinateNear({origin: destinations[origin]});
  }
}


function addCoordinateNear({origin, min = -0.5, max = 0.5}){
  const lat = Math.random() * ( max - min ) + min;
  const lng = Math.random() * ( max - min ) + min;
  const { lat: oLat, lng: oLng } = origin;
  const randomCoords =  { lat :oLat + lat, lng: oLng + lng };


  markers.addLayer(L.marker(Object.values(randomCoords)));
  console.log('calling addCoordinateNear');
}


function addMarker(){
  console.log('calling addMarker');
  addCoordinateNear({origin: { lat: destinations.cdmx[0], lng: destinations.cdmx[1]}});

}
  
  

