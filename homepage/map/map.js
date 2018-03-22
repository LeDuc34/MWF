function include(fileName){
    document.write("<script type='text/javascript' src='"+fileName+"'></script>" );
  }
  include(marker.js);


function initMap(){

    var myLatLng = {
        lat: 0,
        lng: 0,
    };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 3,
        center: myLatLng,
    });
    initMarkers("France",48.866667,2.333333,map);
}