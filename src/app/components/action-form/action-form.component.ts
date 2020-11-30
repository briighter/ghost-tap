import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'action-form',
  templateUrl: './action-form.component.html',
  styleUrls: ['./action-form.component.css']
})
export class ActionFormComponent implements OnInit {
  // Form Model
  commentBool = false;

  /*-- Num Likes Slider --*/
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = true;
  numLikesVal = 0;
  vertical = false;
  tickInterval = 1;
  /*---------------------------*/

  constructor() { }

  ngOnInit(): void {
  }

  // Get Slider Tick Info
  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }

  /** Like a Post
   * 1. Get number of post to like from user
   * 2. Use Query selector to find button
   * 3. For each item to like
   */
  


}
