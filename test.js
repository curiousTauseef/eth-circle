    var map;
    var activeItem = "none";
    var activeMenu = "none";

  function initMap() {

    var eth = {lat: 47.375737, lng: 8.547935};

    map = new google.maps.Map(document.getElementById('map'), {
      center: eth,
      zoom:17,
      disableDefaultUI: true
    });

    //Friends on the map
    map.addListener('click', function() {
      $('#friendWrapper').css({'-webkit-transform': 'translateY(600px)', 'transform': 'translateY(600px)'});
      $('#eventWrapper').css({'-webkit-transform': 'translateY(600px)', 'transform': 'translateY(600px)'});
      $('#eventList').css({'-webkit-transform': 'translateX(-500px)', 'transform': 'translateX(-500px)'});
      $('#friendList').css({'-webkit-transform': 'translateX(-500px)', 'transform': 'translateX(-500px)'});
      activeItem = "none";
      activeMenu = "none";
    });

    var erikLoc = {lat: 47.375737, lng: 8.547935};
    var stevenLoc = {lat: 47.376605, lng: 8.547506};
    var andreaLoc = {lat: 47.376178, lng: 8.546701};
    var iremLoc = {lat: 47.376756, lng: 8.548470};
    var abhaLoc = {lat: 47.376860, lng: 8.546400};

    var names = ["erik", "steven", "irem", "andrea", "abha"];
    var locations = [erikLoc, stevenLoc, iremLoc, andreaLoc, abhaLoc];

    var erikIcon = {
        url: 'images/erik kopia.png',
        scaledSize: new google.maps.Size(30, 30),
        anchor: new google.maps.Point(15, 15)
    };
    var erikMarker = new google.maps.Marker({
        position: erikLoc,
        map: map,
        title: name,
        icon: erikIcon
    });
    erikMarker.addListener('click', function(){
      $('#friendList').css({'-webkit-transform': 'translateY(-500px)', 'transform': 'translateX(-500px)'});
      $('#eventList').css({'-webkit-transform': 'translateY(-500px)', 'transform': 'translateX(-500px)'});
      activeMenu = "none";
      if(activeItem != "erik"){
        
        $('#friendWrapper').css({'-webkit-transform': 'translateY(0px)', 'transform': 'translateY(0px)'});
        $('#eventWrapper').css({'-webkit-transform': 'translateY(600px)', 'transform': 'translateY(600px)'});
        activeItem = "erik";
      }else{
        $('#friendWrapper').css({'-webkit-transform': 'translateY(600px)', 'transform': 'translateY(600px)'});
        activeItem = "none";
      }
        $('#friendImg').css({'background-image': 'url(images/erik.jpg)'});
        $('#friendName').text("Erik");
        $('#friendDescription').text("Status: At Lecture");
      });
    var stevenIcon = {
        url: 'images/steven kopia.png',
        scaledSize: new google.maps.Size(30, 30),
        anchor: new google.maps.Point(15, 15)
    };
    var stevenMarker = new google.maps.Marker({
        position: stevenLoc,
        map: map,
        title: name,
        icon: stevenIcon
    });
   stevenMarker.addListener('click', function(){
    $('#friendList').css({'-webkit-transform': 'translateY(-500px)', 'transform': 'translateX(-500px)'});
      $('#eventList').css({'-webkit-transform': 'translateY(-500px)', 'transform': 'translateX(-500px)'});
      activeMenu = "none";
      if(activeItem != "steven"){
        $('#friendWrapper').css({'-webkit-transform': 'translateY(0px)', 'transform': 'translateY(0px)'});
        $('#eventWrapper').css({'-webkit-transform': 'translateY(600px)', 'transform': 'translateY(600px)'});
        activeItem = "steven";
      }else{
        $('#friendWrapper').css({'-webkit-transform': 'translateY(600px)', 'transform': 'translateY(600px)'});
        activeItem = "none";
      }
        $('#friendImg').css({'background-image': 'url(images/steven.jpg)'});
        $('#friendName').text("Steven");
        $('#friendDescription').text("Status: At Lecture");
      });
    var iremIcon = {
        url: 'images/irem kopia.png',
        scaledSize: new google.maps.Size(30, 30),
        anchor: new google.maps.Point(15, 15)
    };
    var iremMarker = new google.maps.Marker({
        position: iremLoc,
        map: map,
        title: name,
        icon: iremIcon
    });
    iremMarker.addListener('click', function(){
      $('#friendList').css({'-webkit-transform': 'translateY(-500px)', 'transform': 'translateX(-500px)'});
      $('#eventList').css({'-webkit-transform': 'translateY(-500px)', 'transform': 'translateX(-500px)'});
      activeMenu = "none";
      if(activeItem != "irem"){
        $('#friendWrapper').css({'-webkit-transform': 'translateY(0px)', 'transform': 'translateY(0px)'});
        $('#eventWrapper').css({'-webkit-transform': 'translateY(600px)', 'transform': 'translateY(600px)'});
        activeItem = "irem";
      }else{
        $('#friendWrapper').css({'-webkit-transform': 'translateY(600px)', 'transform': 'translateY(600px)'});
        activeItem = "none";
      }
        $('#friendImg').css({'background-image': 'url(images/irem.jpg)'});
        $('#friendName').text("Irem");
        $('#friendDescription').text("Status: At Lecture");
      });
    var andreaIcon = {
        url: 'images/andrea kopia.png',
        scaledSize: new google.maps.Size(30, 30),
        anchor: new google.maps.Point(15, 15)
    };
    var andreaMarker = new google.maps.Marker({
        position: andreaLoc,
        map: map,
        title: name,
        icon: andreaIcon
    });
    andreaMarker.addListener('click', function(){
      $('#friendList').css({'-webkit-transform': 'translateY(-500px)', 'transform': 'translateX(-500px)'});
      $('#eventList').css({'-webkit-transform': 'translateY(-500px)', 'transform': 'translateX(-500px)'});
      activeMenu = "none";
      if(activeItem != "andrea"){
        $('#friendWrapper').css({'-webkit-transform': 'translateY(0px)', 'transform': 'translateY(0px)'});
        $('#eventWrapper').css({'-webkit-transform': 'translateY(600px)', 'transform': 'translateY(600px)'});
        activeItem = "andrea";
      }else{
        $('#friendWrapper').css({'-webkit-transform': 'translateY(600px)', 'transform': 'translateY(600px)'});
        activeItem = "none";
      }
        $('#friendImg').css({'background-image': 'url(images/andrea.jpg)'});
        $('#friendName').text("Andrea");
        $('#friendDescription').text("Status: At Lecture");
      });
    var abhaIcon = {
        url: 'images/abha kopia.png',
        scaledSize: new google.maps.Size(30, 30),
        anchor: new google.maps.Point(15, 15)
    };
    var abhaMarker = new google.maps.Marker({
        position: abhaLoc,
        map: map,
        title: name,
        icon: abhaIcon
    });
    abhaMarker.addListener('click', function(){
      $('#friendList').css({'-webkit-transform': 'translateY(-500px)', 'transform': 'translateX(-500px)'});
      $('#eventList').css({'-webkit-transform': 'translateY(-500px)', 'transform': 'translateX(-500px)'});
      activeMenu = "none";
      if(activeItem != "abha"){
        $('#friendWrapper').css({'-webkit-transform': 'translateY(0px)', 'transform': 'translateY(0px)'});
        $('#eventWrapper').css({'-webkit-transform': 'translateY(600px)', 'transform': 'translateY(600px)'});
        activeItem = "abha";
      }else{
        $('#friendWrapper').css({'-webkit-transform': 'translateY(600px)', 'transform': 'translateY(600px)'});
        activeItem = "none";
      }
        $('#friendImg').css({'background-image': 'url(images/abha.jpg)'});
        $('#friendName').text("Abha");
        $('#friendDescription').text("Status: At Lecture");
    });

    //Events on the map
    var chocolateLoc = {lat: 47.37599, lng: 8.547935};

    var events = ["chocolate"];
    var eventlocations = [chocolateLoc];

    var chocolateIcon = {
        url: 'images/chocolate.jpg',
        scaledSize: new google.maps.Size(30, 30),
        anchor: new google.maps.Point(15, 15)
    };
    var chocolateMarker = new google.maps.Marker({
        position: chocolateLoc,
        map: map,
        title: name,
        icon: chocolateIcon
    });
    chocolateMarker.addListener('click', function(){

      $('#friendList').css({'-webkit-transform': 'translateY(-500px)', 'transform': 'translateX(-500px)'});
      $('#eventList').css({'-webkit-transform': 'translateY(-500px)', 'transform': 'translateX(-500px)'});
      activeMenu = "none";

      if(activeItem != "event"){
        $('#eventWrapper').css({'-webkit-transform': 'translateY(0px)', 'transform': 'translateY(0px)'});
        $('#friendWrapper').css({'-webkit-transform': 'translateY(600px)', 'transform': 'translateY(600px)'});
        activeItem = "event";
      }else{
        $('#eventWrapper').css({'-webkit-transform': 'translateY(600px)', 'transform': 'translateY(600px)'});
        activeItem = "none";
      }
        $('#eventImg').css({'background-image': 'url(images/chocolate.jpg)'});
        $('#eventName').text("Free Chocolate!");
        $('#eventDescription').text("Location: HG F.21");
        $('#eventTime').text("Time: 8.09.2015 at 4PM");
      });

  }


  $(document).ready(function(){
    //controls the menus on the left side
    $('#menuButton').click(function(){
      $('#eventWrapper').css({'-webkit-transform': 'translateY(600px)', 'transform': 'translateY(600px)'});
      $('#friendWrapper').css({'-webkit-transform': 'translateY(600px)', 'transform': 'translateY(600px)'});
      activeItem = "none";
      
      if(activeMenu != "friends"){
        $('#friendList').css({'-webkit-transform': 'translateY(0px)', 'transform': 'translateX(0px)'});
        $('#eventList').css({'-webkit-transform': 'translateY(-500px)', 'transform': 'translateX(-500px)'});
        activeMenu = "friends";
      }else{
        $('#friendList').css({
          '-webkit-transform': 'translateY(-500px)', 'transform': 'translateX(-500px)'
        });
        activeMenu = "none";
      }
    });

    $('#eventListButton').click(function(){
      $('#eventWrapper').css({'-webkit-transform': 'translateY(600px)', 'transform': 'translateY(600px)'});
      $('#friendWrapper').css({'-webkit-transform': 'translateY(600px)', 'transform': 'translateY(600px)'});
      activeItem = "none";

      if(activeMenu != "events"){
        $('#eventList').css({
          '-webkit-transform': 'translateY(0px)', 'transform': 'translateX(0px)'
        });
        $('#friendList').css({
          '-webkit-transform': 'translateY(-500px)', 'transform': 'translateX(-500px)'
        });
        activeMenu = "events";
      }else{
        $('#eventList').css({'-webkit-transform': 'translateY(-500px)', 'transform': 'translateX(-500px)'});
        activeMenu = "none";
      }
    });

    $('.friend').click(function(){
      var friend = $(this).data("target");
      var friendCap = friend.charAt(0).toUpperCase() + friend.slice(1);

      $('#friendImg').css({'background-image': 'url(images/' + friend + '.jpg)'});
      $('#friendName').text(friendCap);
      $('#friendDescription').text("Status: At Lecture");
      $('#friendList').css({'-webkit-transform': 'translateY(-500px)', 'transform': 'translateX(-500px)'});
      $('#friendWrapper').css({'-webkit-transform': 'translateY(0px)', 'transform': 'translateY(0px)'});
      activeMenu = "none";
      activeItem = friend;
    });

    $('.event').click(function(){
      $('#eventWrapper').css({'-webkit-transform': 'translateY(0px)', 'transform': 'translateY(0px)'});
      var _event = $(this).data("target");
      $('#eventImg').css({'background-image': 'url(images/' + _event + '.jpg)'});
      if(_event == "chocolate"){
        $('#eventName').text("Free Chocolate!");
        $('#eventDescription').text("Location: HG F.21");
      }
      $('#eventList').css({'-webkit-transform': 'translateX(-500px)', 'transform': 'translateX(-500px)'});
      
      activeMenu = "none";
      activeItem = "event";
    });


  });