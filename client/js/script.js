/*jshint browser:true, devel:true*/
/*globals $*/
(function (){
    "use strict";
     
    $(document).ready( function (){
        console.log("Please work in JQuery");
        
        var jqrefbutton = $("#playclip");
        jqrefbutton.on("click", function(evt){
            $.ajax({
                method:"GET",
                url:"/play"
            });
        });
    });
    
}());