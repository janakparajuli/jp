//Initialize a mao and set its view
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
function popUp(f,l){
  var out = [];
  if (f.properties){
      for(key in f.properties){
          out.push(key+": "+f.properties[key]);
      }
      l.bindPopup(out.join("<br />"));
  }
}

let places = new L.GeoJSON.AJAX(["./data/map.geojson"],{onEachFeature:popUp});//.addTo(mymap);
places.on('data:loaded',function(){

  let clusters=L.markerClusterGroup();
  clusters.addLayer(places);
  mymap.addLayer(clusters);
});

// var markers = new L.MarkerClusterGroup();

// markers.addLayer(L.marker([175.3107, -37.7784]));
// // add more markers here...

// map.addLayer(markers);
// //places.addTo(mymap);