import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-heroes',
  templateUrl: './my-heroes.component.html',
  styleUrls: ['./my-heroes.component.scss'],
})
export class MyHeroesComponent implements OnInit {
  public forwardArrow: boolean = true;
  public heroesDetails: Array<any> = [
    {
      id: 1,
      img: 'kane.webp',
      name: 'Kane Williamson',
      role: 'Cricketer',
      quote: 'When life throws problems at you just smile and face them.',
    },
    {
      id: 2,
      img: 'dia.jpg',
      name: 'Dia',
      role: 'Kannada Movie',
      quote: 'Life is full of surprizes and miracles.',
    },
    {
      id: 3,
      img: 'virat.jpg',
      name: 'Virat Kohli',
      role: 'Cricketer',
      quote: 'Take responsibility of your life and always lead from the front.',
    },
    {
      id: 4,
      img: 'tejaswini.jpg',
      name: 'Tejaswini Manogna',
      role: 'Doctor',
      quote:
        'Life is definitely not easy.Stick to your goals, follow your passion and believe in your self.One day you definitely achieve your goal.',
    },

    {
      id: 5,
      img: 'sundhar.webp',
      name: 'Sundar Pichai',
      role: 'CEO of Alphabet',
      quote:
        'You might fail a few times, but that’s Ok. You end up doing something worthwhile which you learn a great deal from.',
    },
  ];
  public interval: any;
  public currentCard = this.heroesDetails[0];
  constructor() {}

  ngOnInit() {}

  public scrollCards(forward: boolean) {
    this.forwardArrow = forward;
    if (forward) {
      if (this.currentCard.id < this.heroesDetails.length) {
        this.currentCard = this.heroesDetails[this.currentCard.id];
      } else {
        this.currentCard = this.heroesDetails[0];
      }
    } else {
      if (this.currentCard.id > 1) {
        this.currentCard = this.heroesDetails[this.currentCard.id - 2];
      } else {
        this.currentCard = this.heroesDetails[this.heroesDetails.length - 1];
      }
    }
    this.scrollTo('card_' + this.currentCard.id);
  }

  public scrollTo(id: any) {
    const element = document.querySelector(`#${id}`);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest',
      });
    }
  }
}
