import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonCol } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public open:boolean=false;
  constructor(
    public router:Router
  ) {
  }

  public openResume()
  {
    this.open=!this.open 
    this.router.navigate(['/home'],{fragment:'resume'})
    const element = document.querySelector(`#resume`);
      if (element && this.open) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      }
  }

  public download()
  {
    console.log("Downloading")
    let link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = 'assets/icon/Resume.pdf';
    link.download = 'VedaPrakash';
    document.body.appendChild(link);
    link.click();
    link.remove();
    console.log("Downloading")
  }
}
