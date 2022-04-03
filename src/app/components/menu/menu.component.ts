import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'menu-bar',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.initMenu();
  }

  private initMenu() {
    this.items = [
      {
        label: 'Linguagens',
        items: [
          {
            label: 'C',
          },
          {
            label: 'C++',
          },
          {
            label: 'Java',
          },
          {
            label: 'PHP',
          },
          {
            label: 'Python',
          },
        ],
      },
      {
        label: 'Banco de Dados',
        items: [
          {
            label: 'SQL',
          },
          {
            label: 'MYSQL',
          },
          {
            label: 'POSTGRES',
          },
          {
            label: 'D2B',
          },
          {
            label: 'Redis',
          },
        ],
      },
      {
        label: 'Frameworks',
        items: [
          {
            label: 'Front-End',
            items: [
              {
                label: 'Angular',
              },
            ],
          },
          {
            label: 'Back-end',
            items: [
              {
                label: 'Node.Js',
              },
              {
                label: 'Spring',
              },
            ],
          },
        ],
      },
    ];
  }
}
