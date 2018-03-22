

function initMarkers(name,lat,lng,map) {
    var myLatLng = {
        lat: lat,
        lng: lng,
    };
    var marker = new google.maps.Marker({
        position: myLatLng,
        map:map,
        title:name,
     });
    var contentInfo = '<h1 id="countryName"> France <h1/>' +
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


    var countryInfo = new google.maps.InfoWindow({
        content: contentInfo
    });
    var isOpen = 0;
    marker.addListener('click', function () {

        if (isOpen == 0) {
            countryInfo.open(map, marker);
            isOpen = 1;
        } else {
            countryInfo.close(map, marker);
            isOpen = 0;
        }

    });
}