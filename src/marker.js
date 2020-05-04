const mapboxgl = require("mapbox-gl");

const makeMarker = (type, coords) => {
    let filteredType = type.toLowerCase();
    const marker = document.createElement("div");
    marker.style.width = "32px";
    marker.style.height = "39px";

    if (filteredType === "activity") {
        marker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.pn)";
    } else if (filteredType === "hotel") {
        marker.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
    } else if (filteredType === "restaurant") {
        marker.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
    } else {
        marker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
    }

    return new mapboxgl.Marker(marker).setLngLat(coords).addTo(map);
};

//const marker = document.createElement("div");
//marker.style.width = "32px";
//marker.style.height = "39px";
//marker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";


//new mapboxgl.Marker(marker).setLngLat([-74.009151, 40.705086]).addTo(map);

module.exports = { makeMarker };