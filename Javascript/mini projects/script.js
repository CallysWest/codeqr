(function(){
    "use strict"
     let myImages = [
       "double top and bottom.png",
       "naruto.png",
       "phoneGuy.png",
       "Dragonball.png",
     ];
     let currentImage = 0;

     document.getElementById("next").onclick = nextPhoto;
     document.getElementById("previous").onclick = previousPhoto;

     function nextPhoto() {
       currentImage++;
       if (currentImage > myImages.length - 1) {
         currentImage = 0;
       }
       document.getElementById("myimage").src = myImages[currentImage];
     }

     function previousPhoto() {
       currentImage--;
       if (currentImage < 0) {
         currentImage = myImages.length - 1;
       }
       document.getElementById("myimage").src = myImages[currentImage];
     }
})( );