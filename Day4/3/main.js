var map = L.map('map').setView([-3.3753007, 29.3543791], 14);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 19, attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map); 

var LeafIcon = L.Icon.extend({
    options: {shadowUrl: 'leaf-shadow.png',iconSize:[38, 95], shadowSize:[50, 64], iconAnchor:[22, 94], shadowAnchor:[4, 62], popupAnchor:[-3, -76]}
});

var greenIcon = new LeafIcon({iconUrl: 'leaf-green.png'}), redIcon = new LeafIcon({iconUrl: 'leaf-red.png'}), orangeIcon = new LeafIcon({iconUrl: 'leaf-orange.png'});
    
L.icon = function (options) {
    return new L.Icon(options);
};

L.marker([-3.379596, 29.377012], {icon: greenIcon}).addTo(map).bindPopup("I am a green leaf.");
L.marker([-3.378311, 29.397097], {icon: redIcon}).addTo(map).bindPopup("I am a red leaf.");
L.marker([-3.366144, 29.362078], {icon: orangeIcon}).addTo(map).bindPopup("I am an orange leaf.");
