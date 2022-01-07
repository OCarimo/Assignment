(function (window){

    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for (var i = 0; i < names.length; i++) {
        console.log(names[i]) 
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speakWord(names[i]);
          } else {
            helloSpeaker.speakWord(names[i]);
      }
    }
})(window);