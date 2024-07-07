import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonCol } from '@ionic/angular';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public open:boolean=false;
  public name:string="V";
  public index:number=1;
  public increase:boolean=true;
  public timer=interval(300);
  public nameArray="Veda Prakash".split("");
  constructor(
    public router:Router
  ) {
   this.timer.subscribe(()=>{
    if(this.increase)
    {
      this.name=this.name+this.nameArray[this.index]
      this.index++;
    }
    else
    {
      this.name=""+this.nameArray.slice(0,this.index-1).join("");
      this.index--;
    }
    if(this.index==12)
    {
      this.increase=false;
    }
    if(this.index==1)
    {
      this.increase=true;
    }
    // this.name="Veda Prakash"
   })
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
