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
      ["Heemstedestraat", 52.35190017507641, 4.840945023147366, '/heemstedestraat'],
      ["Centraal station", 52.37819918272987, 4.90056555085227, '/central_station'],
      ["Sint Antoniesbreestraat", 52.37073330039969, 4.900632333745544, '/sint_antoniesbreestraat'],
      ["Botanical gardens", 52.367214652369206, 4.90827080072837, '/botanical_gardens'],
      ["Roeterseiland Campus", 52.363967853560744, 4.911361384240066, '/roeterseiland_campus'],
    ];
  
    for(let i = 0; i < markers.length; i++){
      const currMarker = markers[i];
  
      const marker = new google.maps.Marker({
          position: { lat: currMarker[1], lng: currMarker[2] },
          map,
          title: currMarker[0],
          animation: google.maps.Animation.DROP,
          label: (i + 1).toString(),
        });
      
      marker.addListener("click", () => {
          window.location.href = currMarker[3];
      });
    }
  }
