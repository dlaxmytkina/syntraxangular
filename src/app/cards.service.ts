import { Injectable } from '@angular/core';
export interface Card {
  title: String,
  text:String
}
@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private cards: Card[] = [
    { title: "Card", text: "This is card number 1" },
    { title: "Card", text: "This is card number 2" },
    { title: "Card", text: "This is card number 3" }
  ]

  getData(index: any) {
    return this.cards[index]
  }
  addData(newCard: string) {
    this.cards.unshift({title: newCard, text:"my new text"})
  }
  getAllCards(){
    return this.cards
  }
}
