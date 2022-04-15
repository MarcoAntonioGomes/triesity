import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'principal-tests',
  templateUrl: './principal-tests.component.html',
  styleUrls: ['./principal-tests.component.css'],
})
export class PrincipalTestsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('Teste');
  }

  startNow() {
    console.log('Click Event fired');
    this.router.navigateByUrl('/start-now');
  }
}
