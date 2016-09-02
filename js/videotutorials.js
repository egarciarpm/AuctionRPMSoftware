// JavaScript Document


window.onload= function(){
	"use strict";
	var count = 0;
	var VideoArray = [];
	VideoArray[0] = "https://www.youtube.com/embed/02fxuvv3sM8?rel=0";
	VideoArray[1] = "https://www.youtube.com/embed/vxLlA3iabZI?rel=0";
	VideoArray[2] = "https://www.youtube.com/embed/YxCHGwqL7lA?rel=0";
	VideoArray[3] = "https://www.youtube.com/embed/GQAfDL1ZwoU?rel=0";
	VideoArray[4] = "https://www.youtube.com/embed/inIlNoaF0fo?rel=0";
	VideoArray[5] = "https://www.youtube.com/embed/Puyr3MPUjfA?rel=0";
	VideoArray[6] = "https://www.youtube.com/embed/-eusC6YJJdA?rel=0";
	VideoArray[7] = "https://www.youtube.com/embed/4r8OLmtPSEs?rel=0";
	VideoArray[8] = "https://www.youtube.com/embed/s8QKYO_k0Fc?rel=0";
	VideoArray[9] = "https://www.youtube.com/embed/OCKAmifhxgw?rel=0";
	VideoArray[10] = "https://www.youtube.com/embed/ZA3j_IapC1g?rel=0";
	VideoArray[11] = "https://www.youtube.com/embed/jGiVsamxzro?rel=0";
	VideoArray[12] = "https://www.youtube.com/embed/FwgEEZYQyaA?rel=0";
	VideoArray[13] = "https://www.youtube.com/embed/B2k62PC46Yo?rel=0";
	VideoArray[14] = "https://www.youtube.com/embed/PxclF8XDSCk?rel=0";
	VideoArray[15] = "https://www.youtube.com/embed/CqFHe-7aMO4?rel=0";
	VideoArray[16] = "https://www.youtube.com/embed/YbrIfua0XZg?rel=0";
	VideoArray[17] = "https://www.youtube.com/embed/DMWJBq5p-iI?rel=0";
	VideoArray[18] = "https://www.youtube.com/embed/vFh5GcUGh0g?rel=0";
	VideoArray[19] = "https://www.youtube.com/embed/QTqcByr4K-A?rel=0";
	VideoArray[20] = "https://www.youtube.com/embed/g0-YD252cNY?rel=0";
	VideoArray[21] = "https://www.youtube.com/embed/Wx4dmMIj_Ys?rel=0";
	VideoArray[22] = "https://www.youtube.com/embed/E3XYE3AJsPk?rel=0";
	VideoArray[23] = "https://www.youtube.com/embed/w2_pPJRl1CE?rel=0";
	var VideoArrayCount = VideoArray.length;
	function addCount(){
		if(count<VideoArrayCount-1){
		count = count + 1;}
		else{
			count = 0;
		}
		console.log(count);
	}
	function minusCount(){
		if(count>0){
		count = count - 1;
	}
	else{
		count = VideoArrayCount -1;
	}
	console.log(count);
	}


	function VideoCount(c){
		document.getElementById('vid').src=c;
		console.log("working");

	}
	document.getElementById('prev').onclick= minusCount();{
		
		VideoCount(VideoArray[count]);
	}
	document.getElementById('next').onclick= function(){
		addCount();
		VideoCount(VideoArray[count]);
	};
	document.getElementById('0').onclick = function(){
		count = 0;
		VideoCount(VideoArray[count]);
	};
	document.getElementById('1').onclick = function(){
		count = 1;
		VideoCount(VideoArray[count]);
	};
	document.getElementById('2').onclick = function(){
		count = 2;
		VideoCount(VideoArray[count]);
	};
	document.getElementById('3').onclick = function(){
		count = 3;
		VideoCount(VideoArray[count]);
	};
	document.getElementById('4').onclick = function(){
		count = 4;
		VideoCount(VideoArray[count]);
	};
	document.getElementById('5').onclick = function(){
		count = 5;
		VideoCount(VideoArray[count]);
	};
	document.getElementById('6').onclick = function(){
		count = 6;
		VideoCount(VideoArray[count]);
	};
	document.getElementById('7').onclick = function(){
		count = 7;
		VideoCount(VideoArray[count]);
	};
	document.getElementById('8').onclick = function(){
		count = 8;
		VideoCount(VideoArray[count]);
	};
	document.getElementById('9').onclick = function(){
		count = 9;
		VideoCount(VideoArray[count]);
	};
	document.getElementById('10').onclick = function(){
		count = 10;
		VideoCount(VideoArray[count]);
	};
	document.getElementById('11').onclick = function(){
		count = 11;
		VideoCount(VideoArray[count]);
	};
	document.getElementById('12').onclick = function(){
		count = 12;
		VideoCount(VideoArray[count]);
	};
	
	document.getElementById('13').onclick = function(){
		count = 13;
		VideoCount(VideoArray[count]);
	};
	document.getElementById('14').onclick = function(){
		count = 14;
		VideoCount(VideoArray[count]);
	};
	document.getElementById('15').onclick = function(){
		count = 15;
		VideoCount(VideoArray[count]);
	};
	document.getElementById('16').onclick = function(){
		count = 16;
		VideoCount(VideoArray[count]);
	};
	document.getElementById('17').onclick = function(){
		count = 17;
		VideoCount(VideoArray[count]);
	};
	document.getElementById('18').onclick = function(){
		count = 18;
		VideoCount(VideoArray[count]);
	};
	document.getElementById('19').onclick = function(){
		count = 19;
		VideoCount(VideoArray[count]);
	};
	document.getElementById('20').onclick = function(){
		count = 20;
		VideoCount(VideoArray[count]);
	};
	document.getElementById('21').onclick = function(){
		count = 21;
		VideoCount(VideoArray[count]);
	};
	document.getElementById('22').onclick = function(){
		count = 22;
		VideoCount(VideoArray[count]);
	};
	document.getElementById('23').onclick = function(){
		count = 23;
		VideoCount(VideoArray[count]);
	};
};