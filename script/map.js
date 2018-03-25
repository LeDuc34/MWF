function include(fileName){
    document.write("<script type='text/javascript' src='"+fileName+"'></script>" );
  }
  include("script/marker.js");


function initMap(){

    var myLatLng = {
        lat: 0,
        lng: 0,
    };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 3,
        minZoom:3,
        center: myLatLng,
    });

    initMarker("France",48.866667,2.333333,map);
    initMarker("Victor",-20,-20,map);
}
