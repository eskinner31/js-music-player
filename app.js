
var currentSelection = document.getElementById("currentSelection");
var tracks = document.getElementsByClassName("track");
var songTitle = document.getElementsByClassName("songTitle");
var buttons = document.getElementsByTagName("i");

var stopPlayback = function(){
  for (var i = 0; i < tracks.length; i++) {
    tracks[i].pause();
    buttons[i].className = "fa fa-play";
  }
}

var setSelection = function(title){
  currentSelection.innerHTML = "Now Playing: " + title.innerHTML;
}

var resetSelection = function(){
  currentSelection.innerHTML = "Select a Song!";
}


  for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click',function(el){
      var button = el.target;
      var track = button.nextSibling;
      var title = track.nextElementSibling;
      debugger;
      if(track.paused == true){
        stopPlayback();
        track.play();
        setSelection(title);
        button.className = "fa fa-stop";
      }else if(track.paused == false){
        stopPlayback();
        resetSelection();
        button.className = "fa fa-play"
      }
    })
  }
