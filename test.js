    var map;
    var activeFriend = "none";
  function initMap() {

    var eth = {lat: 47.375737, lng: 8.547935};

    map = new google.maps.Map(document.getElementById('map'), {
      center: eth,
      zoom:17,
      disableDefaultUI: true
    });

    map.addListener('click', function() {
      $('#friendWrapper').css({'-webkit-transform': 'translateY(400px)', 'transform': 'translateY(400px)'});
        activeFriend = "none";
    });

    var erikLoc = {lat: 47.375737, lng: 8.547935};
    var stevenLoc = {lat: 47.376605, lng: 8.547506};
    var andreaLoc = {lat: 47.376178, lng: 8.546701};
    var iremLoc = {lat: 47.376756, lng: 8.548470};
    var abhaLoc = {lat: 47.376860, lng: 8.546400};

    var names = ["erik", "steven", "irem", "andrea", "abha"];
    var locations = [erikLoc, stevenLoc, iremLoc, andreaLoc, abhaLoc];

    for(var i = 0; i < names.length; i++){
      var name = names[i];
      var location = locations[i];
      var icon = {
        url: 'images/' + name + ' kopia.png',
        scaledSize: new google.maps.Size(30, 30),
        anchor: new google.maps.Point(15, 15)
      };
      var marker = new google.maps.Marker({
        position: location,
        map: map,
        title: name,
        icon: icon
      });

      marker.addListener('click', function(){
      if(activeFriend != name){
        $('#friendWrapper').css({'-webkit-transform': 'translateY(0px)', 'transform': 'translateY(0px)'});
        activeFriend = name
      }else{
        $('#friendWrapper').css({'-webkit-transform': 'translateY(400px)', 'transform': 'translateY(400px)'});
        activeFriend = "none";
      }
      var capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
        $('#friendImg').css({'background-image': 'url(images/erik.jpg)'});
        $('#friendName').text(capitalizedName);
      });

    }

  }

  $(document).ready(function(){

    var menuHidden = true;
    $('#menuButton').click(function(){
      if(menuHidden){
        $('#popOut').css({
          '-webkit-transform': 'translateY(0px)', 'transform': 'translateX(0px)'
        });
        menuHidden = false;
      }else{
        $('#popOut').css({
          '-webkit-transform': 'translateY(-400px)', 'transform': 'translateX(-500px)'
        });
        menuHidden = true;
      }
    });

  });