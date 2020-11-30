import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'action-form',
  templateUrl: './action-form.component.html',
  styleUrls: ['./action-form.component.css']
})
export class ActionFormComponent implements OnInit {
  destination = "https://instagram.com"
  isDoneLoading = false
  // Like Button DOM Object
  likeBtnPosition = 1
  likeBtnSeletor = "#react-root > section > main > section > div > div:nth-child(2) > div > article:nth-child(" + this.likeBtnPosition + ") > div.eo2As > section.ltpMr.Slqrh > span.fr66n > button"
  likeBtn: HTMLElement = document.querySelector(this.likeBtnSeletor) as HTMLElement;

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

  // Navigate to Instagram
  goToInstagram() {
    window.location.href = this.destination
    setTimeout(() => { this.isDoneLoading = true }, 3000);
  }

  /** Like a Post
   * 1. Get number of post to like from user
   * 2. Use Query selector to find button instance
   * 3. For each item to like
   *    - if the area-label="Unlike"
   *    -- skip
   */
  likePosts(numLikesVal) {
    // this.goToInstagram()
    $(document).ready(function () {
      while (numLikesVal != 0) {
        this.likeBtn.click()
        this.likeBtnPosition++
        this.likeBtnSeletor = "#react-root > section > main > section > div > div:nth-child(2) > div > article:nth-child(" + this.likeBtnPosition + ") > div.eo2As > section.ltpMr.Slqrh > span.fr66n > button"
        numLikesVal--
      }
    });
  }

}
