import { Component, OnInit } from '@angular/core';

import { InfoCard } from './info-card';
import { MOCKCARDS } from './mock-info-cards';


@Component({
  selector: 'app-info-cards',
  templateUrl: './info-cards.component.html',
  styleUrls: ['./info-cards.component.sass']
})
export class InfoCardsComponent implements OnInit {

  infoCards = MOCKCARDS;
  selectedCard: InfoCard;

  constructor() { }

  ngOnInit() {
  }

  onSelect(card: InfoCard): void {
    this.selectedCard = card;
    console.log('selectedCard',this.selectedCard);
  }

}
