import { animate, query, sequence, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit } from '@angular/core';
import { homepage_workpage_card_animation } from '../animations';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  animations: [homepage_workpage_card_animation]
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  work_classification = "website"
  change_cards(classification: string, $event: any) {
    this.work_classification = classification
    let btns = [...$event.path[1].children];
    btns.forEach((element: any) => {
      element.classList.remove("active_btn")
      element.style.pointerEvents= "none";
      setTimeout(()=>{
        element.style.pointerEvents = "auto"
      }, 800)
    })
    $event.path[0].classList.add("active_btn")
    
  }
}
