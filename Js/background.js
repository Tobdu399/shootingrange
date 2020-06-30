function drawGround() {
  let groundImgs = [];
  let i = 0;

  while (width > i) {
    append(groundImgs, i);
    i += ground.width/2;
  }

  for (let j=0; j<groundImgs.length; j++) {
    image(ground, groundImgs[j], height-ground.height/3, ground.width/2, ground.height/2);
  }
}


function displayBullets() {
  let bullets = [];
  let spacing = 20;
  let i = 0;

  while (bulletsAmount > i) {
    append(bullets, spacing);
    spacing += 20;
    i++;
  }

  for (let k=0; k<bullets.length; k++) {
    image(bulletImg, bullets[k], height-40, 13, 28);
  }
}
