import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-presentation-section',
  templateUrl: './presentation-section.component.html',
  styleUrls: ['./presentation-section.component.scss'],
})
export class PresentationSectionComponent implements OnInit {
  lottieIdeaOptions: AnimationOptions = {
    path: 'assets/lottie/idea.json',
  };
  constructor() {}
  ngOnInit(): void {}
}
