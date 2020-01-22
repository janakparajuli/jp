//Initialize a mao and set its view
console.log('I reached js page');
var mymap = L.map("mapid", {
    zoom: 6,
    center: [27.98801, 85.116184],
    zoomControl:true
  });//.setView([51.505, -0.09], 13);

// Add a tile layer to the map
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoiamFuYWtwYXJhanVsaSIsImEiOiJjaWdtMWd2eWUwMjRvdXJrcjVhbTFvcmszIn0.jRIRtmgCm5waI7RXih3t5A'
}).addTo(mymap);

