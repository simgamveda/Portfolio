import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public menuItems:Array<any> =
  [
    {
      name:"Home",
      url:'home'
    },
    {
      name:"About Me",
      url:'about'
    },
    {
      name:"Services",
      url:'services'
    },
    {
      name:"Blog",
      url:'blog'
    },
    {
      name:"Contact Me",
      url:'contact'
    },

  ]
  constructor() {}
}
