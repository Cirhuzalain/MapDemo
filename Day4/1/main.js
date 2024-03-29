var map = L.map('map').setView([-3.3753007, 29.3543791], 14);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 19, attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map); 

var marker = L.marker([-3.379596, 29.377012]).addTo(map);

var polygon = L.polygon([[-3.383966, 29.391775],[-3.378311, 29.397097],[-3.388935,  29.399071]]).addTo(map);

var circle = L.circle([-3.366144, 29.362078], {color: 'red',fillColor: '#f03',fillOpacity: 0.5,radius: 500}).addTo(map);

var popup = L.popup();

function onMapClick(e) {
    // popup.setLatLng(e.latlng).setContent("Vous avez cliquer sur la carte " + e.latlng.toString()).openOn(map);
    console.log("Position : " + e.latlng.toString());
}
map.on('click', onMapClick);


