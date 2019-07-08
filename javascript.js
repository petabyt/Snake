var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');

// Game things
var player = {
	dir:"up",
	x:200,
	y:200,
	appleX:0,
	appleY:0,
	points:0,
	pastX:[200],
	pastY:[200],
	length:10
}

// Make apple on load
apple();

function renderApple() {
	c.fillStyle = "red";
	c.fillRect(player.appleX,player.appleY,6,6);
}

// Detect if snake is touching apple
if (player.x == player.appleX && player.y == player.appleY) {
	apple();
	alert();
	player.points++
}

// Main Loop
setInterval(function() {
	if (player.dir == "up") {
		player.y -= 1;
	} else if (player.dir == "down") {
		player.y += 1;
	} else if (player.dir == "right") {
		player.x += 1;
	} else if (player.dir == "left") {
		player.x -= 1;
	}
	// Clear Screen
	c.clearRect(0,0,1000,1000);
	c.fillStyle = "green";
	// Render Snake
	for(i in player.pastX) {
	c.fillRect(player.pastX[i] - 1,player.pastY[i] - 1,3,3);
	}
	// Render Current Position
	c.fillRect(player.x - 1,player.y - 1,3,3);
	// Save Current Position
	player.pastX.push(player.x);
	player.pastY.push(player.y);
	// Keep Positions Saved To Length;
	if(player.pastX.length>player.length) {
		player.pastX.shift();
		player.pastY.shift();
	}
	// Check if apple is eaten
	if(Math.sqrt(((player.x-player.appleX)*(player.x-player.appleX))+((player.y-player.appleY)*(player.x-player.appleX)))<6) {
		player.length+=6;
		apple();
	}
	renderApple();
},20);

// Detect Keys
document.body.onkeydown = function(event) {
	if (event.key == "ArrowUp") {
		player.dir = "up";
	} else if (event.key == "ArrowDown") {
		player.dir = "down";
	} else if (event.key == "ArrowRight") {
		player.dir = "right";
	} else if (event.key == "ArrowLeft") {
		player.dir = "left";
	}
}

// Function to make an apple at a random position
function apple() {
	c.fillStyle = "red";
	player.appleX = Math.floor(Math.random() * 394) + 6;
	player.appleY = Math.floor(Math.random() * 394) + 6;
	c.fillRect(player.appleX,player.appleY,6,6);
}

