
var nbWindow=0;
var firstMarker=0;
var firstInfoWindow=0;

function initMarker(name,lat,lng,map) {
    var myLatLng = {
        lat: lat,
        lng: lng,
    };
    var marker = new google.maps.Marker({
        position: myLatLng,
        map:map,
        title:name,
     });
    var contentInfo = '<h1 id="countryName"> '+name+' <h1/>' +
        '<div id="fiche">' +
        '<p>President : <p/>' +
        '<p>Population : <p>' +
        '<p> Indice : <p>' +
        '<p>Alliance : <p>' +
        '<div/>' +
        '<div id="action">' +
        '<a class="conv">Conversation privee</a>' +
        '<a class="attaque">Attaquer</a>' +
        '</div>';


    var infoWindow = new google.maps.InfoWindow({
        content: contentInfo
    });

    marker.addListener('click', function () {
        var isOpen = 0;
        if (isOpen == 0) {
            infoWindow.open(map, marker);
            isOpen = 1;
        } else {
            infoWindow.close(map, marker);
        }
        closeInfoWindow(marker,infoWindow,isOpen);
        console.log(isOpen);
    });
}



function closeInfoWindow(marker,infoWindow,opened){
  if(opened==1)nbWindow++;
  else nbWindow--;

  if(nbWindow==1){
  firstMarker=marker;
  firstInfoWindow = infoWindow;
}
      if(nbWindow==2){
      firstInfoWindow.close(map, firstMarker);
      firstMarker=marker;
      firstInfoWindow = infoWindow;
      nbWindow--;
    }
console.log(nbWindow);
}
