import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-now',
  templateUrl: './start-now.component.html',
  styleUrls: ['./start-now.component.css'],
})
export class StartNowComponent implements OnInit {
  languagues: string[] = [];
  frameworksFrontEnd: string[] = [];
  frameworksBackEnd: string[] = [];
  cloudServices: string[] = [];
  dataBases: string[] = [];
  containers: string[] = [];
  testChosen!: string;

  constructor() {}

  ngOnInit(): void {
    this.setArraysTests();
  }

  private setArraysTests() {
    this.languagues = ['C', 'C++', 'Java', 'PHP', 'Python'];
    this.frameworksFrontEnd = ['Angular', 'Vue.js', 'React'];
    this.frameworksBackEnd = ['Spring Boot', 'Node.js'];
    this.cloudServices = ['AWS', 'GCP'];
    this.dataBases = ['SQL', 'MYSQL', 'Redis'];
    this.containers = ['Docker'];
  }

  loadTestInfo(test: string) {
    this.testChosen = test;
  }

  removeTestInfo() {
    this.testChosen = '';
  }
}
