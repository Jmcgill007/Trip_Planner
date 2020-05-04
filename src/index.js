console.log("This is from index.js");
const markerMaker = require('./src/marker')
const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = "pk.eyJ1Ijoiam1jZ2lsbDAwNyIsImEiOiJjazlzcDB5ZmUxN2szM2twbjZoNTI5eGltIn0.vqf_nAQfyajQcvrN-R5ZXg";

const map = new mapboxgl.Map({
    container: "map",
    center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
    zoom: 12, // starting zoom
    style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

//Creating a Marker and it styling.
const marker = document.createElement("div");
marker.style.width = "32px";
marker.style.height = "39px";
marker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";


new mapboxgl.Marker(marker).setLngLat([-74.009151, 40.705086]).addTo(map);