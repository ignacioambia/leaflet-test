var map = L.map('map').setView([51.505, -0.09],13);
const mapBoxToken=`pk.eyJ1IjoiaWduYWNpb2FtYmlhIiwiYSI6ImNrN2doMzd2bDBkZ28zZW4xcGR1dmg4dGIifQ.a1zeov2shA1Mj4BKFYiKQg`;
L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={${mapBoxToken}}`
, {
    attribution: 'BeGo Maps &copy;',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: mapBoxToken
}).addTo(map);