var main = function() {
    
    $('#dsn').click(function(){
    	$(".active").addClass("hidden");
    	$("#design").removeClass("hidden");
    	$("#design").addClass("active");
    })

     $('#ui').click(function(){
    	$(".active").addClass("hidden");
    	$("#uiux").removeClass("hidden");
    	$("#uiux").addClass("active");
    })

      $('#ad').click(function(){
    	$(".active").addClass("hidden");
    	$("#advertising").removeClass("hidden");
    	$("#advertising").addClass("active");
    })

      // function animateBg(i) {
      //     document.body.style.backgroundColor = 'hsl(' + 0.2 * i + ', 100%, 50%)';
          
          // setTimeout(function() {
          //     animateBg(++i)
          // }, i);
      // }

      // animateBg(0);


    function colorChange() {
    	var randy = Math.random() * 360;
    	document.body.style.backgroundColor = 'hsl(' + randy + ', 40%, 90%)';
}
    	function changeUp(){
    		randy++;
    		if (randy = 360) {
    			randy = 0;
    			return
    		};
    	}
	colorChange();
    setTimeout(changeUp(), 50);
}

$(document).ready(main)