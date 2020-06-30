function Target()
{
  this.x;
  this.y;
  this.r = 100;
  this.isAlive = false;

  this.show = function() {
    if (!this.isAlive) {
      this.x = random(target.r, width-target.r);
      this.y = random(target.r, height-target.r-target.r/2);

      this.isAlive = true;
    } else {
      image(targetImg, this.x-this.r/2, this.y-this.r/2, this.r, this.r);
    }
  }

  this.check = function() {
    // If the target is outside of the display, change it's location
    if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
      this.isAlive = false;
      this.show();
    }
  }
}
