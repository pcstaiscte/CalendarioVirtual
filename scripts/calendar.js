var myCal = document.getElementById("adventCal");
var currentDate = new Date();

function Door(calendar, day) {

	this.width = ((calendar.width - 0.1 * calendar.width) / 4) * 0.95;
	this.height = ((calendar.height - 0.1 * calendar.height) / 6) * 0.95;
	this.adventMessage = info[day - 1];
	this.x = ( 0.04 * calendar.width + ((day- 1) % 4) * (1.1 * this.width) );
	this.y = - ( 0.96 * calendar.height - Math.floor((day - 1) / 4) * (1.1 * this.height) );

	this.content = function() { 
		
		var node = document.createElement("li");
		document.getElementById("adventDoors").appendChild(node);
		node.id = "door" + day;
		node.style.cssText = "width: " + this.width + "px; height: " + this.height + "px; top: " + this.y + "px; left: " + this.x + "px;";

		var innerNode = document.createElement("a");
		document.getElementById("door" + day).appendChild(innerNode);
		innerNode.innerHTML = day;
		innerNode.href = "#";

		/*if( ( currentDate.getMonth() + 1 ) < 12 || currentDate.getDate() < day ) {
			innerNode.className = "disabled";
			innerNode.onclick = function() {
				return false;
			}
		} else {
			var adventMessage = this.adventMessage;
			innerNode.onclick = function() {
				doorClicked(adventMessage);
				return false;
			}
		}*/

		var adventMessage = this.adventMessage;
		innerNode.onclick = function() {
			doorClicked(adventMessage);
			return false;
		}
	};

}

(function() {
	var doors = [];

	for(var i = 0; i < 24; i++) {

		doors[i] = new Door(myCal, i + 1);
		doors[i].content();

	}

	return doors;
})();

function doorClicked(day){
	if (day.length == 1){
		toggleCard(day[0])
	} else {
		toggle2Cards("Right", day[0])
		toggle2Cards("Left", day[1])
	}
	

}

function toggleCard(message){   
	var card = document.getElementById("cardAlone")
	if(card.style.display == "none" || card.style.display == ""){
		card.style.display = "block";
	}else { 
		card.style.display = "none"; }
	document.getElementById("picture").src = "resources/fotos_tuna_calendario/" + message.picture;
	naipe = "<img id='naipe' src=resources/" + message.naipe + ">";
	document.getElementById("name").textContent = message.name;
	document.getElementById("name").insertAdjacentHTML('beforeend', naipe);
	document.getElementById("message").textContent = message.text;
}

function toggle2Cards(side, message){   
	var card = document.getElementById("card" + side)
	if(card.style.display == "none" || card.style.display == ""){
		card.style.display = "block";
	}else { 
		card.style.display = "none"; }
	
	document.getElementById("picture" + side).src = "resources/fotos_tuna_calendario/" + message.picture;
	naipe = "<img id='naipe' src=resources/" + message.naipe + ">";
	document.getElementById("name" + side).textContent = message.name;
	document.getElementById("name" + side).insertAdjacentHTML('beforeend', naipe);
	document.getElementById("message" + side).textContent = message.text;
}

function hideCards(){
	var cards = document.getElementsByClassName("closable")
	for (card in cards){
		console.log(cards[card].style.display)
		if(cards[card].style.display != "none"){
			cards[card].style.display = "none"; 
		}
	}
}

