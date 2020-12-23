setTimeout(console.log.bind(console, '%cCigna', 'color: #0094e4; font: bold 30px verdana;'),0);

$(document).ready(function() {
	//vimeo popup
	 $('.vimeo-popup').magnificPopup({
		 type: 'iframe',
		 mainClass: 'mfp-fade',
	 });

	 //개인정보처리방침 팝업
	 $(".btn-terms-privacy").click(function() {
		 $(".ck-terms-privacy").fadeIn();
	 });
	 // pop-close
	 $(".ck-btn-close").click(function() {
		 $(".ck-popup").fadeOut();
	 });
});
