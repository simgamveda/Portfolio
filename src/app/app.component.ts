import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonMenu } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public menuItems: Array<any> = [
    {
      name: 'Home',
      url: 'home',
    },
    {
      name: 'Experience',
      url: 'experience',
    },
     {
      name:"About Me",
      url:'about'
    },
    {
      name:"Projects",
      url:'projects'
    },
    {
      name: 'My Heroes',
      url: 'heroes',
    },
    // {
    //   name:"Services",
    //   url:'services'
    // },
    // {
    //   name:"Blog",
    //   url:'blog'
    // },
    {
      name: 'Contact Me',
      url: 'contact',
    },
  ];
  @ViewChild(IonMenu) public menu: any;
  constructor(private router: Router, private route: ActivatedRoute) {
   
  }


  public scrollToSection(item: any) {
    this.menu.close();
    this.router.navigate(['/home'], { fragment: item.url });
    if (item.url) {
      const element = document.querySelector(`#${item.url}`);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      }
    }
  }

  ngAfterViewInit()
  {
    this.route.fragment.subscribe(fragment => {
      console.log(fragment)
      if (fragment) {
      
        setTimeout(()=>{
          const element = document.querySelector(`#${fragment}`);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
          }
        })
       
      }
    });
  }
}
