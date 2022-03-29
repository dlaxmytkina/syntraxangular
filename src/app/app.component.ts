import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { ChildrenOutletContexts, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { slideRightAnimation, triggerRouteAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [triggerRouteAnimation,
    trigger("openclose_menu", [

      transition(":enter", [
        style({ transform: "translateY(-100%)" }),
        animate("400ms ease-out", style({ transform: "translateY(0)" }))
      ]),
      transition(":leave", [
        style({ transform: "translateY(0)" }),
        animate("400ms ease-out", style({ transform: "translateY(-100%)" }))
      ])

    ])
  ]
})
export class AppComponent {

  constructor(private contexts: ChildrenOutletContexts, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && event.id > 1) {
        if (this.menu_open){
          this.open_menu();
        }
        
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    })
  }
  menu_open = false;
  open_menu() {
    this.menu_open = this.menu_open === false ? true : false
  }
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
  goHome() {
    this.router.navigate([''])
  }
}
  // addNewCard(value:string){
  //   this.cards.unshift({title: value, text:"newText"})
  // }
  // toggleCards(){
  //   this.toggle = !this.toggle
  // }

