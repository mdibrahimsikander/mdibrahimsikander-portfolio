function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 22.554923, lng: 88.360342};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'kolkata, India' // Title Location
    });
}