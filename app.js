// hamburger javascript
const hamburger = document.getElementById("hamburger");
const links = document.getElementById("links");

hamburger.addEventListener("click", () => {
  links.classList.toggle("show");
});

// submit form
const btn = document.querySelector("#btn");
const btnText = document.querySelector("#btnText");

btn.onclick = () => {
  btnText.innerHTML = "Thanks";
  btn.classList.add("active");
};

// -------- google map api ------ //
// api key -- AIzaSyDpOOT7Mp2Yrl12s7fA7KNF17onwTenx1o
// Initialize and add the map
let map;

async function initMap() {
  const position = { lat: 37.59668, lng: -85.91099 };
  // Request needed libraries.
  //@ts-ignore

  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    zoom: 16,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Little Zion Baptist Church",
  });
}
initMap();
