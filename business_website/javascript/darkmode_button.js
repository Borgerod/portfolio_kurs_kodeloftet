function lightmodeButton() {
      let audio = new Audio("/media/audio/overthrone.mp3");
      let lightmodePopUp = document.querySelector("bodylightmode");
      
      

      audio.onplay = function() {
        // Show the image when the audio starts playing
        lightmodePopUp.style.visibility = "visible";
      };

      audio.play();
      lightmodePopUp.requestFullscreen();

      // pause sound and close popup after 9s
      setTimeout(function() {audio.pause()}, 9000);
      setTimeout(function() {lightmodePopUp.style.visibility = "hidden";}, 9000);
}
