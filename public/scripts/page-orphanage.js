const options ={
  dragging: false,
  touchZoom: false,
  doubleclickzoom: false,
  scrollwheelzoom: false,
  zoomcontrol: false
}
const spanLat = document.querySelector('span[data-lat]')
const spanLng = document.querySelector('span[data-lng]')
//create map
const map = L.map('mapid', options).setView([spanLat.dataset.lat,spanLng.dataset.lng], 15);

//create and add titlelayer
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
  iconUrl:"/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
})


//create and add marker


L
.marker([spanLat.dataset.lat,spanLng.dataset.lng], { icon })
.addTo(map)

/* image gallery */

function selectImage(event){
  const button = event.currentTarget

  console.log(button.children)

  //remover todas as classes .active
  const buttons = document.querySelectorAll(".images button")
  buttons.forEach(removeActiveClass)

  function removeActiveClass(button) {
    button.classList.remove("active")
    
  }

  //selecionar a image clicada
  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img")

  //atualizar o container de image
  imageContainer.src = image.src

  //adicionar a classe .active para este botao
  button.classList.add("active")
}

