import { HttpClient } from '@angular/common/http';
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
      img:"skills.svg"
    },
    {
      name: 'Certificates',
      value: 'certificates',
      img:"certificates.svg"
    },
    {
      name: 'Education',
      value: 'education',
      img:"education.svg"
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
  public months:any = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
    'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  public experiences:Array<any>=[
    {
      img:"thriwin.svg",
      name:"Thriwin",
      fromDate:new Date("2023-07-01"),
      // toDate:new Date(),
      description:"Working as a Frontend Developer.",
      role:"Software Developer",
      
   },
   {
      img:"thriwin.svg",
      name:"Thriwin",
      fromDate:new Date("2022-10-10"),
      toDate:new Date("2023-06-30"),
      description:"Worked as a Frontend Developer.",
      role:"Software Developer Intern"
   }
  ]

  public education: Array<any> = [
    {
      courseName: 'Computer Science and Engineering',
      period: '2019-2023',
      college: 'RGUKT RK-Valley',
      grade: 'Grade Points : 9',
      img:'collegeLogo.png'
    },
    {
      courseName: 'Pre University Course - MPC',
      period: '2017-2019',
      college: 'RGUKT RK-Valley',
      grade: 'Grade Points : 8.7',
      img:'collegeLogo.png'
    },
    {
      courseName: '10th Class - BSEAP',
      period: '2016-2017',
      college: 'Z.P High School, Penumur',
      grade: 'Grade Points : 9.7',
      // img:'collegeLogo.png'
    },
  ];
  public skills:Array<any>=["Angular","Angular Material","Java","Data Structures","MySQL","Ionic Framework","JavaScript","TypeScript","HTML","CSS","Bootstrap","Materialize CSS","RxJS","JQuery","Git"]
  public currentTab = this.tabs[0];
  public experianceYears:string;
  public leetcodeDetails:any;
  constructor(private httpClient:HttpClient) {
    this.experianceYears=this.calculateYearsBetweenDates(new Date("2022-10-10"),new Date())
  }

  ngOnInit() {
    this.fetchLeetCodeDetails()
  }

  public calculateYearsBetweenDates(startDate:any, endDate:any) {
    const start:Date = new Date(startDate);
    const end:Date = new Date(endDate);
    start.getMonth
    const yearsBetween = end.getFullYear() - start.getFullYear()-1;
 
    // // Convert milliseconds to years (1 year = 1000 * 60 * 60 * 24 * 365.25 milliseconds)
    // const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
    // const yearsBetween = diffInMilliseconds / millisecondsInYear;
  
    return Math.round(yearsBetween)+"+";
  }

  public fetchLeetCodeDetails()
  {
   
    this.httpClient.get("https://alfa-leetcode-api.onrender.com/userProfile/vedaprakash865/").subscribe(res=>{
      this.leetcodeDetails=res;
      this.tabs.push({
        name:"Leetcode",
        value:"leetcode",
        img:"certificates.svg"
      })
    })
  }
}
