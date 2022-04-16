import { Component, Input, OnInit } from '@angular/core';
import { TestInfo } from './models/test-info.model';

@Component({
  selector: 'test-info',
  templateUrl: './test-info.component.html',
  styleUrls: ['./test-info.component.css'],
})
export class TestInfoComponent implements OnInit {
  testInfo!: TestInfo;

  @Input()
  test!: string;

  constructor() {}

  ngOnInit(): void {
    this.mockTestInfo();
  }

  private mockTestInfo() {
    this.testInfo = {
      description: '',
      level: 'Iniciante - Intermedíario - Avançado',
      countTests: 100,
      durationTime: '1 Hora',
    };
  }
}
