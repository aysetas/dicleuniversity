var i=0;
var images=['dicleresimler/resim1.jpg','dicleresimler/resim2.jpg','dicleresimler/resim3.jpg','dicleresimler/resim4.jpg','dicleresimler/resim5.jpg'];
var duration=3000;

function slideImg(){
	document.slide.src=images[i];
	 if(i<images.length -1){
		 i++;
		 
	 }
	 else{
		 i=0;
	 }
	 setTimeout("slideImg()",duration);
}
window.onload=slideImg;

