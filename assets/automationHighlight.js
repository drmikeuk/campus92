// highlight text using https://markjs.io/

var searchTerm = "pharmacy";

var options = {"className": "match"}

var context = document.querySelector(".content");
var instance = new Mark(context);
instance.mark(searchTerm, options);