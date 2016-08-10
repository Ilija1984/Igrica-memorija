var container = $('.container');
var ikonice = ['deaf', 'envira', 'first-order', 'adjust', 'bicycle', 'briefcase', 'coffee', 'cogs', 'deaf', 'envira', 'first-order', 'adjust', 'bicycle', 'briefcase', 'coffee', 'cogs'];
var okrenute = 0;
var dveOkrenute = [];


var minuti = $('#minuti');
var sekunde = $('#sekunde');
var min = 5;
var sec = 59;
var naslov = $('#naslov');
var btn = $('#btn');
makeTable();
var boxes = $('.box');
startGame();



function makeTable(){
	for ( var i=0; i<16; i++){
	var rand = Math.floor(Math.random()*ikonice.length);	
	container.append('<div class="box"><div class="front"></div><div class="back"><i class="fa fa-'+ ikonice[rand] +'" aria-hidden="true"></i></div></div>');
	ikonice.splice(rand,1);
	}
}

function click(){
	boxes.on('click', function(){
	okrenute++;	
	dveOkrenute.push($(this));
	$(this).find('.front').css('transform', 'perspective(900px) rotateY(180deg)');
	$(this).find('.back').css('transform', 'perspective(900px) rotateY(0deg)');
	if (okrenute == 2){
		checkTwo();
	}
 })
	
}



function checkTwo(){
	if(dveOkrenute[0].html() == dveOkrenute[1].html()){
		min+=2;
		okrenute = 0;
		dveOkrenute.length = 0; 

	}else{
		setTimeout(function(){
		dveOkrenute[0].find('.front').css('transform', 'perspective(900px) rotateY(0deg)');
		dveOkrenute[0].find('.back').css('transform', 'perspective(900px) rotateY(180deg)');
		dveOkrenute[1].find('.front').css('transform', 'perspective(900px) rotateY(0deg)');
		dveOkrenute[1].find('.back').css('transform', 'perspective(900px) rotateY(180deg)')
		okrenute = 0;
		dveOkrenute.length = 0; 
		},600)
	}
}		
			
function startGame(){
	btn.on('click', function(){
		click();
		var loop = setInterval(function(){
		minuti.html(min); 
		sekunde.html(sec); 
		sec--;
		if (sec == 00){
			min--;
			sec = 59;
		}

	},10);	
		
	})
}

