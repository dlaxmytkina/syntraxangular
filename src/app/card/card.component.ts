import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localeRu from "@angular/common/locales/ru"
import { ActivatedRoute } from '@angular/router';
import { Card, CardsService } from '../cards.service';


registerLocaleData(localeRu, "ru")

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./app.component.scss']
    // interpolation: ['{{','}}']
})
export class CardComponent implements OnInit {
    ngOnInit() {
        if (this.id !== undefined) {
            this.index = this.id;
            this.goButton = false
        }
        console.log(this.index)
        this.getData(this.index as number)
        

    }
    changeTitle() {
        this.card.title = "title has been changed"
    };
    goButton: boolean = true
    id!: any;
    constructor(private activateRoute: ActivatedRoute, private cardsService: CardsService) {
        this.id = activateRoute.snapshot.params['id'];
    }
    card!: Card
    getData(index: any) {
        this.card = this.cardsService.getData(index-1)
        console.log(this.card)
    }
    @Input() index!: number

    title: string = "My card title";
    text = "My text";

    cardDate: Date = new Date()

    getInfo(): String {
        return 'This is my info'
    };
    changeHandler() {
        console.log(this.title)
    };
    textColor = "pink"
    backColor="#0035ff42"
    

}