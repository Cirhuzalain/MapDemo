// Initialize and add the map
let map;

async function initMap() {
  // The location of Bujumbura
  const position = { lat: -3.3753007, lng: 29.3543791 };
  
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    zoom: 13,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Bujumbura",
  });
}

initMap();
