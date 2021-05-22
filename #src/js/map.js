const mapContainer = document.getElementById('map')


function initMap() {
    let options = {
        center: {lat: 40.2932074974116, lng: 44.35055671336521},
        zoom: 16,
        mapId: "cbfa135bc1f2d7ff"
    }

    let map = new google.maps.Map(mapContainer, options)

    const svgMarker = {
        path: "M5.70885 0.845978L11.3062 4.01742V10.3618L5.70885 13.5332L0.111542 10.3618V4.01742L5.70885 0.845978Z",
        fillColor: "#932322",
        fillOpacity: 1,
        strokeWeight: 0,
        scale: 3,
    };

    const markersArray = [
        {location: {lat: 40.2932074974116, lng: 44.35055671336521}, icon: svgMarker, content: `<h2>Bio Med 1</h2>`},
        {location: {lat: 40.293804880483705, lng: 44.34864698070171}, icon: svgMarker, content: `<h2>Bio Med 2</h2>`}
    ]

    /*Add marker function*/

    function addMarker(property) {
        const marker = new google.maps.Marker({
            position: property.location,
            map: map,
            icon: property.icon
        })

        const infoWindow = new google.maps.InfoWindow({
            content: property.content
        })

        marker.addListener('click', () => {
            infoWindow.open(map, marker)
        })
    }

    for (let i = 0; i < markersArray.length; i++){
        addMarker(markersArray[i])
    }
}
