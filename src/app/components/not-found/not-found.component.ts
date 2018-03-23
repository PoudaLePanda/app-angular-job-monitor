import { Component } from '@angular/core';

@Component({
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class PageNotFoundComponent {
  moveForce = 30; // max popup movement in pixels
  rotateForce = 20; // max popup rotation in deg
  moveX: number;
  moveY: number;
  rotateX: number;
  rotateY: number;

  onMouseMove(event) {
    var docX = event.view.innerHeight;
    var docY = event.view.innerWidth;

    // var docX = event.clientX;
    // var docY = event.clientY;

    this.moveX = (event.pageX - docX / 2) / (docX / 2) * - this.moveForce;
    this.moveY = (event.pageY - docY / 2) / (docY / 2) * - this.moveForce;

    this.rotateY = (event.pageX / docX * this.rotateForce * 2) - this.rotateForce;
    this.rotateX = -((event.pageY / docY * this.rotateForce * 2) - this.rotateForce);
  }

  getMouve() {
    const css = {
      'left': this.moveX,
      'top': this.moveY,
      'transform': 'rotateX(' + this.rotateX + 'deg) rotateY(' + this.rotateY + 'deg)'
    };
    return css;
  }
}
