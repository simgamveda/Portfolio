import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  public tabs: Array<any> = [
    {
      name: 'Main Skills',
      value: 'main-skills',
    },
    {
      name: 'Certificates',
      value: 'certificates',
    },
    {
      name: 'Education',
      value: 'education',
    },
  ];
  public certificates: Array<any> = [
    {
      certificateName: 'Angular Intermediate',
      date: 'Oct 2023',
      company: 'Hacker Rank',
      description: 'Credential ID 77DD6498DD2C',
      url: 'https://www.hackerrank.com/certificates/77dd6498dd2c',
    },
    {
      certificateName: 'JavaScript Intermediate',
      date: 'Oct 2023',
      company: 'Hacker Rank',
      description: 'Credential ID 125211809B8B',
      url: 'https://www.hackerrank.com/certificates/125211809b8b',
    },
  ];

  public education: Array<any> = [
    {
      courseName: 'Computer Science and Engineering',
      period: '2019-2023',
      college: 'RGUKT RK-Valley',
      grade: 'Grade Points : 9',
    },
    {
      courseName: 'Pre University Course - MPC',
      period: '2017-2019',
      college: 'RGUKT RK-Valley',
      grade: 'Grade Points : 8.7',
    },
  ];
  public currentTab = this.tabs[0];
  constructor() {}

  ngOnInit() {}
}
