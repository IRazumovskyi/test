
var p = $('div.top-js');

var arr=[];
for(var i=0;i<p.length;i++){
		arr.push($(p[i]).offset().top);

	}





var shouldScrool=true;

function SetTrue(){
	shouldScrool=true;
}

$(window).bind('mousewheel', function(event) {


	event.preventDefault();
	if(shouldScrool==false){
		return;
	}
	setTimeout(SetTrue, 300);

	if (event.originalEvent.wheelDelta >= 0) {
		var cont_top = window.pageYOffset
		if(cont_top>arr[3]){
	    		$('body').scrollTop(arr[3]);
	    		shouldScrool=false;
	    	} else if (cont_top<=arr[3] &&cont_top>arr[2]) {
	    		$('body').scrollTop(arr[2]);
	    		shouldScrool=false;
	    	} else if (cont_top<=arr[2] &&cont_top>arr[1]) {
	    		$('body').scrollTop(arr[1]);
	    		shouldScrool=false;
	    	} else if (cont_top<=arr[1] &&cont_top>arr[0]) {
	    		$('body').scrollTop(arr[0]);
	    		shouldScrool=false;
	    	} 
	} else {
	   
	    	var cont_top = window.pageYOffset;
	    	if(cont_top<arr[1]){
	    		$('body').scrollTop(arr[1]);
	    		shouldScrool=false;
	    	} else if (cont_top>=arr[1] && cont_top<arr[2]) {
	    		$('body').scrollTop(arr[2]);
	    		shouldScrool=false;
	    	} else if (cont_top>=arr[2] &&cont_top<arr[3]) {
	    		$('body').scrollTop(arr[3]);
	    		shouldScrool=false;
	    	} else if (cont_top>=arr[3] &&cont_top<arr[4]) {
	    		$('body').scrollTop(arr[4]);
	    		shouldScrool=false;
	    	} 
	    	/*switch(cont_top){
	    	case arr[0]:
	    	$('body').scrollTop(arr[1])
	    	break;
	    	case arr[1]:
	    	$('body').scrollTop(arr[2])
	    	break;
	    	case arr[2]:
	    	$('body').scrollTop(arr[3])
	    	break;
	    	case arr[3]:
	    	$('body').scrollTop(arr[4])
	    	break;
	    	}*/
	    

	}
});


/*var arr=[];
for(var i=0;i<p.length;i++){
	arr.push(p[i].offset().top)
}
for(var i=0;i<arr.length;i++){
	console.log(arr[i]);
}*/