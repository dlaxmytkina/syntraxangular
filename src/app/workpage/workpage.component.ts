import { Component, OnInit } from '@angular/core';
import { homepage_workpage_card_animation } from '../animations';

@Component({
  selector: 'app-workpage',
  templateUrl: './workpage.component.html',
  styleUrls: ['./workpage.component.scss'],
  animations:[homepage_workpage_card_animation]
})
export class WorkpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  work_classification="web";

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
