import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-company',
  templateUrl: './select-company.page.html',
  styleUrls: ['./select-company.page.scss'],
})
export class SelectCompanyPage implements OnInit {
  foods = [
    {
      id: 1,
      name: 'Company Name 1',
      type: 'company',
    },
    {
      id: 2,
      name: 'Company Name 2',
      type: 'company',
    },
    {
      id: 3,
      name: 'Company Name 3',
      type: 'company',
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
