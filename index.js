

let slideshow = document.querySelectorAll(".images");
let title = document.querySelector(".image-title");

let showImages = document.querySelectorAll(".secondImage");

var btnNext = document.getElementById("btn-next"); 

var btnPrev = document.getElementById("btn-prev"); 

var nextImage = 3;
var preImage = 1;

console.log(slideshow);
console.log(title);

const delayTime = 3000;

var currentImage = 0;

var counter = 1;


//for(i=0; i<title.length-1; i++)
//{
//	console.log(title[i]);	
//};


	//slideshow[currentImage].style.display = "block";
	//title[i].innerHTML = `Image ${currentImage+1}`;


setInterval(showslides, delayTime);

function showslides(){
	
	slideshow[currentImage].style.display = "none";
	//title[i].innerHTML = `Image ${currentImage+1}`;
	currentImage = (currentImage + 1) % slideshow.length;
	
	slideshow[currentImage].style.display = "inline";
	title.innerHTML = `Image ${currentImage+1}`;
	//console.log(currentImage);

	//console.log(title[i].innerHTML);

};



document.addEventListener("DOMContentLoaded", function(){
for(i = 0; i < showImages.length-1; i++){
	showImages[0].style.display = "inline";
	
};	
});

fwd();
function fwd() {
	
btnNext.addEventListener("click", function(){
	btnPrev.disabled = true;
	console.log(event.target.value);
	
	var num = counter++;
	console.log(num);

	if(num == 1){
		moveImageFwd1();
	};
	
	if(num == 2) {
	moveImageFwd2();
	} 
	if(num === 3){
	moveImageFwd3();
	};
	if (num == 4){
		moveImageBwd1()
		  };
	if (num == 5){
		moveImageBwd2()
		  } 
	if (num == 6){
		moveImageBwd3()
		  };
	if (num > 6){
		btnNext.disabled = true;
		  };	
		
});

};

	function moveImageFwd1(){
	showImages[0].style.display = "none";
	showImages[1].style.display = "inline ";
	};
	function moveImageFwd2(){
	showImages[1].style.display = "none";
	showImages[2].style.display = "inline ";
	};

	function moveImageFwd3(){
	showImages[2].style.display = "none";
	showImages[0].style.display = "inline ";
	};

bwd();

function bwd(){


btnPrev.addEventListener('click', function(){
	btnNext.disabled = true;
	console.log(event.target);

var num = counter++;
	console.log(num);

if(num === 1){
	moveImageBwd1();
};

if(num === 2){
	moveImageBwd2();
};

if(num === 3){
	moveImageBwd3();	
} 

if(num === 4){
	moveImageFwd1();	
} 
if(num === 5){
	moveImageFwd2();	
};

if(num === 6){
	moveImageFwd2();	
} 

if(num > 6) {
	
	btnPrev.disabled = true;
	return;
}
});

};
	
function moveImageBwd1(){
	showImages[0].style.display = "none";
	showImages[1].style.display = "inline";
	};

function moveImageBwd2(){
	showImages[1].style.display = "none";
	showImages[2].style.display = "inline";
	};

function moveImageBwd3(){
	showImages[2].style.display = "none";
	showImages[0].style.display = "inline";
	};


