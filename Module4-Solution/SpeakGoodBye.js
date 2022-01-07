(function (window){

    var byeSpeaker = {};
    speakWord = "Good Bye";

    byeSpeaker.speakWord = function speak (name) {
        console.log(speakWord + ": " + name);
      
      }
      window.byeSpeaker = byeSpeaker;

})(window);