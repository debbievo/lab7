'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
	$(".likeBtn").click(clickLikeBtn);
}

function clickLikeBtn(){
	//gtag('create', 'UA-134888574-1', 'auto');
	//gtag('send', 'event', 'like', 'click');
	
	//This one works
	gtag('event','click', {'event_category': 'like', 'event_label': 'click'});
}
