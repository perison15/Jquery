$(function() {
    $("#btn").click(function() {
        var txt = "";
        txt += "Width is: "+ $("#respond").outerWidth(true) + "<br>";
        txt += "height is: "+ $("#respond").outerHeight(true) + "<br>";
        $("#respond").html(txt);
    })
})