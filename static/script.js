function initMap(){
  
    const map = new google.maps.Map(document.getElementById("map"), {
      mapId: "3377248da1914d52",
      center: { lat: 52.3674006623226, lng: 4.902158023208115 },
      zoom: 13,
      mapTypeControl: false,
      fullscreenControl: false,
      streetViewControl: false,
    });
  
    const markers = [
      ["Pondok Event Center", 52.3498386119879, 4.844201111220656, '/pondok_event_center'],
      ["Lelylaan Station", 52.357061619563216, 4.833977140057547, '/lelylaan_station'],
      ["Roeterseiland Campus", 52.363967853560744, 4.911361384240066, '/roeterseiland_campus'],
    ];
  
    for(let i = 0; i < markers.length; i++){
      const currMarker = markers[i];
  
      const marker = new google.maps.Marker({
          position: { lat: currMarker[1], lng: currMarker[2] },
          map,
          title: currMarker[0],
          animation: google.maps.Animation.DROP,
        });
      
      marker.addListener("click", () => {
          window.location.href = currMarker[3];
      });
    }

    const directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    var pondok = new google.maps.LatLng(52.3498386119879, 4.844201111220656);
    var lelylaan = new google.maps.LatLng(52.357061619563216, 4.833977140057547);

    const request = {
        origin: pondok,
        destination: lelylaan,
        travelMode: 'DRIVING',
    };

    directionsService.route(request, function(response, status) {
        if (status == 'OK') {
          directionsRenderer.setDirections(response);
        }
      });
  }
