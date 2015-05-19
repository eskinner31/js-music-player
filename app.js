
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

var setSelection = function(i){
  currentSelection.innerHTML = "Now Playing: " + songTitle[i].innerHTML;
}

var resetSelection = function(){
  currentSelection.innerHTML = "Select a Song!";
}


buttons[0].addEventListener('click',function(){
  if(tracks[0].paused == true){
    stopPlayback();
    tracks[0].play();
    setSelection(0);
    buttons[0].className = "fa fa-stop";
  }else if(tracks[0].paused == false){
    stopPlayback();
    resetSelection();
    buttons[0].className = "fa fa-play";
  }
})

buttons[1].addEventListener('click',function(){
  if(tracks[1].paused == true){
    stopPlayback();
    tracks[1].play();
    setSelection(1);
    buttons[1].className = "fa fa-stop";
  }else if(tracks[1].paused == false){
    stopPlayback();
    resetSelection();
    buttons[1].className = "fa fa-play";
  }
})

buttons[2].addEventListener('click',function(){
  if(tracks[2].paused == true){
    stopPlayback();
    tracks[2].play();
    setSelection(2);
    buttons[2].className = "fa fa-stop";
  }else if(tracks[2].paused == false){
    stopPlayback();
    resetSelection();
    buttons[2].className = "fa fa-play";
  }
})

buttons[3].addEventListener('click',function(){
  if(tracks[3].paused == true){
    stopPlayback();
    tracks[3].play();
    setSelection(3);
    buttons[3].className = "fa fa-stop";
  }else if(tracks[3].paused == false){
    stopPlayback();
    resetSelection();
    buttons[3].className = "fa fa-play";
  }
})
