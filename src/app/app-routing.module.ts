import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { FormComponent } from './form/form.component';
import { SwitchComponent } from './switch/switch.component';
import { CardComponent } from './card/card.component';
import { HomepageComponent } from './homepage/homepage.component';
import { WorkpageComponent } from './workpage/workpage.component';
import { WedopageComponent } from './wedopage/wedopage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';



const routes: Routes = [
  {
    path: '', component: HomepageComponent, data: {
      animation: "homepage"
    }
  },
  {
    path: 'work', component: WorkpageComponent, data: {
      animation: "workpage"
    }
  },
  {
    path: 'wedo', component: WedopageComponent, data: {
      animation: "wedopage"
    }
  },
  {
    path: 'about', component: AboutpageComponent, data: {
      animation: "aboutpage"
    }
  },
  {
    path: 'contact', component: ContactpageComponent, data: {
      animation: "contactpage"
    }
  },
  {
    path: 'cards', component: CardsComponent, data: {
      animation: "cardsPage"
    }
  },



  { path: 'addCards', component: FormComponent },
  {
    path: 'switch', component: SwitchComponent, data: {
      animation: "switchPage"
    }
  },
  {
    path: 'cards/:id', component: CardComponent, data: {
      animation: "cardPage"
    }
  },
  { path: 'about', component: FormComponent },
  { path: 'wedo', component: FormComponent },
  { path: 'home', component: FormComponent },
  { path: 'contact', component: FormComponent },
  { path: 'work', component: FormComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
