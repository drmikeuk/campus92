// highlight text using https://markjs.io/

var context = document.querySelector(".content");
var markInstance = new Mark(context);

$(document).ready( function () {
  // Highlight on load (as input is prepopulated)
  highlight();

  // Highlight on change
  $("input[name='highlight']").on("input", highlight);

} );


// Function to mark highlighted text
function highlight(){
  var options = {"className": "match"};
  var keyword = $("input[name='highlight']").val();
  //console.log ("Highlight: " + keyword);
  // UNMARK (remove previous marked elements) and MARK the new keyword
  markInstance.unmark({
  	done: function(){
    	markInstance.mark(keyword, options);
    }
  });  
}

