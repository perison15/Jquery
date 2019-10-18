// $(function() {
//     $("button").click(function() {
//       $("p:first").hide();
//     });
//   });

//EVENTS!!!


// $(function() {
//     $("p").click(function() {
//         $(this).hide();
//     });
// });

//METHODS!!

// $(function() {
//     $("p").dblclick(function() {
//         $(this).hide();
//     });
// });


//EFFECTS!!


// $(function() {
//     $("#p").mouseenter(function() {
//         alert("Thank you jesus!!");
//     });
// });

// $(function() {
//     $("#c").mouseleave(function() {
//         alert("fuck!!");
//     });
// });

// $(function() {
//     $("#p").mouseup(function() {
//         alert("Hello world!");
//     });
// });

// $(function() {
//     $("#c").hover(function() {
//         alert("u have entered the zone.");
//     },
//     function() {
//         alert("bye for now!");
//     });
// });

// $(function() {
//     $("input").focus(function() {
//         $(this).css("background-color","yellow");
//     });
//     $("input").blur(function() {
//         $(this).css("background-color","green");
//     });
// });

// $(function() {
//     $("p").on("click",function() {
//         $(this).hide();
//     });
// });

// $(function() {
//     $("p").on( {
//         mouseenter: function() {
//             $(this).css("background-color","black");
//         },
//         mouseleave: function() {
//             $(this).css("background-color","grey");
//         },
//         click: function() {
//             $(this).css("background-color","purple");
//         }
//     });
// });

// $(function() {
//     $("#hide").click(function() {
//         $("p").hide(10000);
//     });
//     $("#show").click(function() {
//         $("p").show(200000);
//     });
// });

// $(function() {
//     $("button").click(function() {
//         $("p").toggle(1000);
//     });
// });

// $(function() {
//     $("button").click(function() {
//         $("#div1").fadeIn();
//         $("#div2").fadeIn("slow");
//         $("#div3").fadeIn(3000);
//     });
// });

// $(function() {
//     $("button").click(function() {
//         $("#div1").fadeOut();
//         $("#div2").fadeOut("slow");
//         $("#div3").fadeOut(3000);
//     });
// });

// $(function() {
//     $("button").click(function() {
//         $("#div1").fadeToggle();
//         $("#div2").fadeToggle("slow");
//         $("#div3").fadeToggle(3000);
//     });
// });

// $(function() {
//     $("button").click(function() {
//         $("#div1").fadeTo("slow",0.1);
//         $("#div2").fadeTo("slow",0.3);
//         $("#div3").fadeTo(3000,0.2);
//     });
// });

// $(function() {
//     $("#flip").click(function() {
//         $("#slide").slideToggle("slow");
//     });
// });

// $(function() {
//     $("button").click(function() {
//         $("div").animate({left:'250px'});
//     });
// });

// $(function() {
//     $("button").click(function() {
//         $("div").animate({
//             left:'250px',
//             opacity:'0.5',
//             height:'toggle',
//             width:'+=150px'
//         });
//     });
// });

// $(function() {
//     $("button").click(function() {
//         var div = $("div");
//         div.animate({height: '300px',opacity:0.4},"slow");
//         div.animate({width:'300px',opacity:0.8},"slow");
//         div.animate({height:'100px',opacity:0.4},"slow");
//         div.animate({width:'100px',opacity:0.8},"slow");
//         });
// });

// $(function() {
//     $("button").click(function() {
//         var div = $("div");
//         div.animate({left:'1000px', opacity:0.6},10000);
//         div.animate({fontSize:'3em'},"slow" );
//     });
// });

// $(function() {
//     $("#flip").click(function() {
//         $("#slide").slideDown(4000);
//     });
//     $("#stop").click(function() {
//         $("#slide").stop();
//     });
// });

// $(function() {
//     $("button").click(function() {
//         $("p").hide("slow",function() {
//             alert("The paragraph is now Hidden!");
//         });
//     });
// });

// $(function() {
//     $("button").click(function() {
//         $("#p").css("color","blue").slideUp("slow").slideDown("slow");
//     });
// });

// $(function() {
//     $("#btn1").click(function() {
//         alert($("#p").text());
//     });
//     $("#btn2").click(function() {
//         alert($("#p").html());
//     });
// });

$(function() {
    $("#btn1").click(function() {
        alert($("#pi").val());
    });
});