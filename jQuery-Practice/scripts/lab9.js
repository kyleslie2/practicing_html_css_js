$(document).ready(function( ) {
    //2
    $("h1").text("Lab9");
    //3 (no header in HTML?)
    $("#header").html("<h3>'Working with jQuery'</h3>");
    //4
    $(":button").each(
    function() {
    $(this).addClass("btn-background");
    }
  );
    //5
    $("#buttons").addClass("red-border");
    //6
    $("p").each(
    function() {
      $(this).addClass("blue");
    }
  );
    //7
    $("#first").on("click", function(){
      $("p:first").addClass("green-border");
    });
    //8
    $("#last").on("click", function(){
      $("p:last").addClass("orange-border");
    });
    //9
    $("#prev").on("click", function(){
      $("#para3").prev().addClass("purple-border");
    });
     //10
     $("#next").on("click", function(){
       $("#para2").next().addClass("yellow-border");
     });
     //11
     $("#remove").on("click", function(){
       $("#footer").remove();
     });
     //BONUS
     $("#bonus").on("click", function(){
        $("h2").text("For question 3, there are no 'header' ids in the html, so the message will never show...").addClass("red");
        $("#specialdiv").html('<input type="button" id="newbutton" value="Surprise ugly button" class="button">').addClass("btn-background button fleft");
        $("#newbutton").on("click", function(){
          $("h2").html('<h2 id="header"></h2>');
          //question 3
          $("#header").html("<h3>'Working with jQuery'</h3>").addClass("green");
        })
     });
});
