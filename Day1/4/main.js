import { MarkerClusterer } from "@googlemaps/markerclusterer";

async function initMap() {
  // Request needed libraries.
  const { Map, InfoWindow } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary(
    "marker",
  );
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: { lat: -3.3753007, lng: 29.3543791 },
    mapId: "DEMO_MAP_ID",
  });
  
  map.addListener("click", (e) => {
    console.log(e.latLng.toJSON());
  });
  
  const infoWindow = new google.maps.InfoWindow({
    content: "",
    disableAutoPan: true,
  });
  // Create an array of alphabetical characters used to label the markers.
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // Add some markers to the map.
  const markers = locations.map((position, i) => {
    const label = labels[i % labels.length];
    const pinGlyph = new google.maps.marker.PinElement({
      glyph: label,
      glyphColor: "white",
    });
    const marker = new google.maps.marker.AdvancedMarkerElement({
      position,
      content: pinGlyph.element,
    });

    // markers can only be keyboard focusable when they have click listeners
    // open info window when marker is clicked
    marker.addListener("click", () => {
      infoWindow.setContent(position.lat + ", " + position.lng);
      infoWindow.open(map, marker);
    });
    return marker;
  });

  // Add a marker clusterer to manage the markers.
  new MarkerClusterer({ markers, map });
}

const locations = [
{lat: -3.7814998734621375, lng: 29.74988691250001},
{lat: -3.7403898689965267, lng: 30.06025068203126},
{lat: -3.693796200473246, lng: 29.56311933437501},
{lat: -3.386766429909155, lng: 29.39557783046876},
{lat: -3.330308937161613, lng: 29.38184492031251},
{lat: -3.3316799080446153, lng: 29.42029706875001},
{lat: -3.3536151819224247, lng: 29.451882762109385},
{lat: -3.073904680033459, lng: 29.814431590234385},
{lat: -3.0684194054604648, lng: 29.60157148281251},
{lat: -3.0889890395496464, lng: 29.446389598046885},
{lat: -3.0917316273764195, lng: 29.35163251796876},
{lat: -2.9178128700542656, lng: 29.63727704921876},
{lat: -2.830032795458941, lng: 30.19208661953126},
{lat: -2.7202983768398328, lng: 30.31293622890626},
{lat: -2.7449895060457803, lng: 30.44202558437501},
{lat: -2.9617003499339627, lng: 30.41455976406251},
{lat: -2.9216780221836847, lng: 30.09595624843751},
{lat: -3.350873299532935, lng: 29.690835398828135},
{lat: -3.31522813163248, lng: 29.613931101953135},
{lat: -3.398855126605586, lng: 29.39832441250001},
{lat: -3.3645826345294583, lng: 29.388711375390635},
{lat: -3.3495023554568175, lng: 29.39557783046876},
{lat: -3.357727991088143, lng: 29.374978465234385},
{lat: -3.3507486645291937, lng: 29.377038401757822},
{lat: -3.350063192643884, lng: 29.371545237695322},
{lat: -3.363772539011476, lng: 29.383218211328135},
{lat: -3.3815944009356964, lng: 29.38459150234376},
{lat: -3.3843361968175465, lng: 29.366052073632822},
];

initMap();
