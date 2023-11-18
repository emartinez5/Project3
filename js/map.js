let map;

async function initMap() {
  const funkoHQ = { 47.98040880624634, -122.20758740998346 }; 	
  map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

  const marker = new google.maps.Marker({
	  position: funkoHQ,
	  map: map, 
	  title: 'Funko HQ'
	  icon: 'images/funkoICON.png'
  });



initMap();