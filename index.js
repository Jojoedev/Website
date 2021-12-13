

let slideshow = document.querySelectorAll(".images");
var title = document.querySelectorAll(".image-title");

console.log(slideshow);
console.log(title);

const delayTime = 3000;

var currentImage = 0;

for(i=0; i<title.length-1; i++)
{
	console.log(title[i]);
}


slideshow[currentImage].style.display = "block";
title[i].innerHTML = `Image ${currentImage+1}`;


setInterval(showslides, delayTime);

function showslides(){
	slideshow[currentImage].style.display = "none";


	currentImage = (currentImage + 1) % slideshow.length;
	slideshow[currentImage].style.display = "block";
	title[i].innerHTML = `Image ${currentImage+1}`;
	console.log(currentImage);

	console.log(title[i].innerHTML);

	
}
