import { animate, group, query, sequence, stagger, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { flush } from '@angular/core/testing';
import { Card, CardsService } from '../cards.service';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  animations: [
    trigger('expandedPanel', [
      state('initial', style({ opacity: 0 })),
      state('expanded', style({ opacity: 1 })),
      transition('* <=> *', animate('1s')),
    ]),
    trigger('filterAnimation', [
      transition(':increment', [
        sequence([
          // query(':enter .card', [
          //   style({ opacity: 0, transform: 'translateX(100%)' }),
          //   animate('800ms', style({ opacity: 1, transform: 'none' })),

          // ], { optional: true }),
          query(".card", [
            style({ transform: 'translateY(-100%)'}),
            animate("600ms ease-in-out", style({ transform: 'none'}))

          ])
        ]),


      ]),

    ]),

  ]
})
export class CardsComponent implements OnDestroy {


  // @Output() newItemEvent = new EventEmitter<string>();
  // addNewCard(value: string){
  //   this.newItemEvent.emit(value)
  //   this.inputValue =""
  // }
  constructor(private cardsService: CardsService) {

  }
  ngOnDestroy() {
    this.expand()

  }
  bool = false
  isShown = false
  can = true
  isExpanded: boolean = true
  state: string = 'expanded'
  expand() {
    this.isExpanded = !this.isExpanded
    this.state = this.isExpanded ? 'expanded' : 'initial'
  }

  addNewCard(elem: any) {
    
  this.cardsService.addData(elem.value)
  elem.value = ""
  }

  cards: Card[] = this.cardsService.getAllCards()

  inputValue: String = ""
  toggle = true
  changetoggle() {
    this.toggle = this.toggle ? false : true
  }
  identify(index: any, it: any) {
    return index;

  }

  search:string = ""


}
