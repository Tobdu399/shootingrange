function runGame() {
	fill(55);
	noStroke();
	textFont(font);
	textSize(20);
  textAlign(LEFT);
  text("Time: " + time, 10, 30)
  text("Score: " + score, 10, 55);

  textFont(font_bold);
  textSize(30);
  text("?", width-40, 40);

  drawGround();

  if (game == false && gameover == false) {

    fill(55);
  	noStroke();
  	textFont(font_bold);
  	textSize(30);
    textAlign(CENTER);
  	text("Press any key to start!", width/2, height/2);

  } else if (gameover == true) {

		song.stop();
    fill(55);
  	noStroke();
  	textFont(font_bold);
  	textSize(30);
    textAlign(CENTER);
    text("Game Over!\nYou Scored " + score, width/2, height/2);
  }

  else {
    target.show();
  	displayBullets();
  }

  player.show();
}

function runTimer() {
  setInterval(() => {
    if (time > 0) {
      time--;
    } else if (time <= 0) {
      gameover = true;
    }
  }, 1000);
}

function help() {
  alert("Welcome to the Shooting Range!\n\
  \n- Move your cursor over a target and shoot to gain points!\
  \n- You have 60 seconds to hit as many targets as you can\
  \n- Your weapon has 12 bullets and you can reload it by pressing R\
	\n\nYou can restart the game by pressing RETURN")
}
