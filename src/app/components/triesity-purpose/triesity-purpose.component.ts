import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'triesity-purpose',
  templateUrl: './triesity-purpose.component.html',
  styleUrls: ['./triesity-purpose.component.scss'],
})
export class TriesityPurposeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  startNow() {
    console.log('Click Event fired');
    this.router.navigateByUrl('/start-now');
  }
}
