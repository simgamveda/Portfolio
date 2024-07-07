import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent  implements OnInit {

  public projects:Array<any>=[
    {
      name:"RGUKT AP Admissions Portal",
      img:"admissions.png",
      description:"Developed a portal for my college to collect online applications for Admissions. I worked as a frontend developer for this project.",
      languages:["HTML","CSS","JavaScript","BootStrap"]
    },
    {
      name:"Online Outpass System",
      description:`
Students can get out-pass by registering through website. I Worked as Frontend Developer for this project.`,
      img:"outpass.jpeg",
      languages:["HTML","CSS","JavaScript","PHP"]
    },
    {
      name:"Campus Maintenance System",
      description:`It is a maintenance System, where 
Students can raise request for IT, Electric, Civil problems in there colleges.`,
      img:"cms.jpeg",
      languages:["HTML","JavaScript","BootStrap","NodeJS"]
    },
  ]
  constructor() { }

  ngOnInit() {}

}
