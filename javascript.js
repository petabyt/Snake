var canvas = document.getElementById('canvas');
var c = canvas.getContext('2d');

// Game things
var player = {
	dir:"up",
	x:200,
	y:200,
	appleX:0,
	appleY:0,
	points:0
}

// Make apple on load
apple();

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

	c.fillStyle = "green";
	c.fillRect(player.x - 1,player.y - 1,3,3);
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