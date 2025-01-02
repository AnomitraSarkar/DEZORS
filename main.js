console.log("Start the backend")

// $.get("./loader.html", function(data){
//     print(data)
//     $("#loading").replaceWith(data);
//   });
  

  $(window).on('load', function(){
    console.log("Loader was triggered")
    setTimeout(removeLoader, 1500); //wait for page load PLUS two seconds.
  });
  function removeLoader(){
      $( ".loader-wrapper" ).fadeOut(500, function() {
        // fadeOut complete. Remove the loading div
        $( ".loader-wrapper" ).remove(); //makes page more lightweight 
    });   
  }
  

console.log("End the backend")