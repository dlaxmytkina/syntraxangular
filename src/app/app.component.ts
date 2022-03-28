import { Component } from '@angular/core';
import { ChildrenOutletContexts, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { slideRightAnimation, triggerRouteAnimation } from './animations'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [triggerRouteAnimation, slideRightAnimation]
})
export class AppComponent {

  constructor(private contexts: ChildrenOutletContexts, private router: Router) { 
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd && event.id>1) {
          window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        }
      })
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

