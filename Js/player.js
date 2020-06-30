function Player()
{
  this.r = 50;

  this.show = function() {
    this.x = mouseX;
    this.y = mouseY;

    noFill();
    stroke(0);
    strokeWeight(3);
    //ellipse(this.x, this.y, this.r, this.r);
    image(sight, this.x-this.r/2, this.y-this.r/2, this.r, this.r);
  }
}

function keyPressed() {
  if (keyCode === 13) {
    location.reload();
  }

  if (game && time != 0) {
    if (keyCode === 82 && bulletsAmount != bulletsFull) {
      reloading = true;
      reload.play();

      let reloadAnim = setInterval(() => {
        if (bulletsFull > bulletsAmount) {
          bulletsAmount += 1;
        }
      }, 1800/12);

      setTimeout(() => {
        clearInterval(reloadAnim);
        reloading = false;
        bulletsAmount = bulletsFull;
      }, 2100);   // Reloading sound's duration is about 2 seconds
    }
  } else {game = true; runTimer()}
}

function mouseClicked() {
  if (mouseX > width-50 && mouseX < width-20
      && mouseY > 10 && mouseY < 50) {
    help()
  }

  if (game && !time <= 0) {
    if (bulletsAmount > 0 && reloading == false && mouseX < width && mouseX > 0 && mouseY < height && mouseY > 0) {
      gunsound.play();

      if (player.x+player.r/4 > target.x-target.r/4 && player.x-player.r/4 < target.x+target.r/4
          && player.y+player.r/4 > target.y-target.r/4 && player.y-player.r/4 < target.y+target.r/4) {
          bullethit.play();
          target.isAlive = false;
          score++;
      }

      bulletsAmount--;
    }
  } else {game = true; runTimer()}
}
