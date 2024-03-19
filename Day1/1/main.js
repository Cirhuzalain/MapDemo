let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -3.3753007, lng: 29.3543791 },
    zoom: 13,
  });
}

initMap();
