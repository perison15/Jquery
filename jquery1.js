// $(function() {
//     $("button").click(function() {
//         $("p").slideToggle(1000);
//     });
// });

// $(function() {
//     $("#btn1").click(function() {
//         $("#test1").text("PAnenge pakaipa ipapa!");
//     });
//     $("#btn2").click(function() {
//         $("#test2").html("<b>PAnenge pakaipa ipapa!<b>");
//     });
//     $("#btn3").click(function() {
//         $("#test3").val("PAnenge pakaipa ipapa!");
//     });
// })

// $(function() {
//     $("#btn1").click(function() {
//         $("#test1").text(function(i,oldtext) {
//             return "Old Text: " + oldtext + " New Text: Hello world (Index:"+ i +")";
//         });
//     });
//     $("#btn2").click(function() {
//         $("#test2").html(function(i,oldtext) {
//             return "Old html: "+oldtext+ " New text: Hello world (Index:"+i+")";
//         });
//     });
// });


// $(function() {
//     $("#btn1").click(function() {
//         $("#pbi").attr("href",function(i,oldtext) {
//             return oldtext + "/ai-powered-analytics/";
//         });
//     });
// });

// $(function() {
//     $("#btn1").click(function() {
//         $("p").prepend("<b>Appended text</b>");
//     });
//     $("#btn2").click(function() {
//         $("ol").prepend("<li>trinity 4</li>");
//     });
// });

// $(function() {
//     $("#btn1").click(function() {
//         $("div").remove();
//     });
//     $("#btn2").click(function() {
//         $("div").empty();
//     });
// });

// $(function() {
//     $("#btn1").click(function() {
//         $("div").addClass("important blue");
//     });
//     $("#btn2").click(function() {
//         $("button").addClass("blue");
//     });
// });

// $(function() {
//     $("#btn1").click(function() {
//         $("div").toggleClass("important class");
//     });
// });

//THE CSS() METHOD

// $(function() {
//     $("#btn1").click(function() {
//     alert("the background-color is:" + $("p").css("background-color",));
//     });
// });

// $(function() {
//     $("#btn1").click(function() {
//         $("p").css("background-color","blue");
//     });
// });

// $(function() {
//     $("#btn1").click(function() {
//         $("p").css({"background-color":"green","font-size":"100px","font-family":"sans","font-type":"italic"});
//     });
// });

// $(function() {
//     $("#btn1").click(function(){
//         var txt="";
//         txt+="The width is:"+$("#div").width() + "<br>";
//         txt+="The height is:"+$("#div").height() + "<br>";
//         txt+="The innerwidth is:"+$("#div").innerWidth() + "<br>";
//         txt+="The innerheight is:"+$("#div").innerHeight() + "<br>";
//         txt+="The outerwidth_true is:"+$("#div").outerWidth() + "<br>";
//         txt+="The outerheight_true is:"+$("#div").outerHeight() + "<br>";
//         txt+="The outerwidth_true is:"+$("#div").outerWidth(true) + "<br>";
//         txt+="The outerheight_true is:"+$("#div").outerHeight(true) + "<br>";
//         $("div").html(txt);
//     });

// });

//WIDTH AND HEIGHT OF THE DOCUMENT AND WINDOW

// $(function() {
//     $("#btn1").click(function() {
//         var txt = "";
//         txt+="The document dimensions are: "+$(document).width();
//         txt+="x"+$(document).height()+"<br>";
//         txt+="The Window dimensions are: "+$(window).width();
//         txt+="x"+$(window).height()+"\n";
//         $("div").html(txt);
//         $("div").width(500).height(500);
//     });
    
// })

$(function() {
    $("p").next().css({"color":"red","border":"5px solid red"});
});