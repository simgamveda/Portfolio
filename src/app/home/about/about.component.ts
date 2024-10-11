import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ExperiencesComponent } from '../experiences/experiences.component';

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
      description:"Designed and implemented user interfaces using Angular and Ionic.",
      role:"Software Developer",
      responsibilities:[
        "Designed and implemented user interfaces using Angular and Ionic, resulting in a 50% increase in user satisfaction and enhanced application functionality.",
        "Developed and integrated real-time features for calls and meetings, improving user communication within the application by 30%.",
        "Administered user accounts and managed Firebase notifications and updates, ensuring 99% app performance uptime and reliability.",
        "Integrated payment gateways such as Stripe and Razorpay, streamlining transaction processes and enhancing financial transactions efficiency.",
        "Developed a Chrome Extension to automate contact detail retrieval from LinkedIn, increasing lead generation efficiency by 25%.",
        "Utilized Twilio for advanced calling and messaging functionalities, optimizing in-app communication and reducing response time by 15%.",
        "Applied microfrontend architecture for scalable and modular frontend development, facilitating code maintainability and scalability.",
        "Leveraged RxJS and NgRx for reactive state management, improving data handling and application performance by 20%.",
        "Created both reactive and template-driven forms to support flexible and efficient user input, enhancing form usability and data accuracy.",
        "Designed and implemented reusable components and pipes, reducing code duplication by 35% and enhancing maintainability across the application.",
        "Experienced in Agile environments, collaborating with backend teams, and following TDD (Test-Driven Development) and Scrum methodologies to enhance project delivery and team efficiency."
      ]
   },
   {
      img:"thriwin.svg",
      name:"Thriwin",
      fromDate:new Date("2022-10-10"),
      toDate:new Date("2023-06-30"),
      description:"Contributed to the development of HTML templates for mobile application.",
      role:"Software Developer Intern",
      responsibilities:[
        "Contributed to the development of HTML templates for mobile applications, enhancing front-end functionality during a 9-month Angular Developer internship.",
        "Assisted in report automation, enabling users to create, customize, and download their own reports. This improved data reporting efficiency and user control over report generation.",
        "Optimized codebase by reducing HTML template complexity through JSON construction and iteration,resulting in improved code maintainability."
      ]
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
  constructor(private httpClient:HttpClient,private modalController:ModalController) {
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

  public async showDetailsInModal(event:any,details:any)
  {
    const modal = await this.modalController.create({
      component:ExperiencesComponent,
      // showBackdrop:false,
      componentProps:{
        "data":details
      },
      cssClass:['modal']
    })
    modal.present();
  }
}
