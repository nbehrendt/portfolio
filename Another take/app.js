// var main = function() {
    
//     $('#gohome').click(function(){
//     	$('.active').removeClass('active').addClass('hidden');
//     	$('#home').removeClass('hidden');
//     	$('#home').addClass('active');
//     })

//     $('#addesign').click(function(){
//         $('.active').removeClass('active').addClass('hidden');
//         $('#advertising').removeClass('hidden');
//         $('#advertising').addClass('active');
//     })

//     $('#graphicdesign').click(function(){
//         $('.active').removeClass('active').addClass('hidden');
//         $('#graphic').removeClass('hidden');
//         $('#graphic').addClass('active');
//     })

//      $('#uidesign').click(function(){
//     	$('.active').removeClass('active').addClass('hidden');
//     	$('#ui').removeClass('hidden');
//         $('#ui').addClass('active');
//     })

//     $('#res').click(function(){
//         $('.active').removeClass('active').addClass('hidden');
//         $('#resume').removeClass('hidden');
//         $('#resume').addClass('active');
//     })

// }

// $(document).ready(main)



// $('#gohome').click(function(){
//     $('#home').fadeOut(300, function(){
//         $('#othershit').fadeIn(200);
//     });
// });


document.getElementById('#gohome').on('click', function(){
    document.getElementById('#home').style('transition', 'all 2s ease-in-out')
});


