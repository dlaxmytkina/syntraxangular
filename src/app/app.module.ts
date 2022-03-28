import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
//import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import {AppRoutingModule} from "./app-routing.module"

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { FormComponent } from './form/form.component';
import { SwitchComponent } from './switch/switch.component';
import { CardsComponent } from './cards/cards.component';
import { CardsService } from './cards.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FilterForSearch} from "./filter.pipe";
import { HomepageComponent } from './homepage/homepage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { WorkpageComponent } from './workpage/workpage.component';
import { WedopageComponent } from './wedopage/wedopage.component';
import { ContactpageComponent } from './contactpage/contactpage.component'

// const routes: Routes = [
//   // { path: 'cards', component: CardsComponent },
//   // { path: 'addCards', component: FormComponent },
//   // { path: 'switch', component: SwitchComponent }
// ];
 // sets up routes constant where you define your routes
 

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FormComponent,
    SwitchComponent,
    CardsComponent,
    FilterForSearch,
    HomepageComponent,
    AboutpageComponent,
    WorkpageComponent,
    WedopageComponent,
    ContactpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [CardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
