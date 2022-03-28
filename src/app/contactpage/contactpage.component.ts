import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrls: ['./contactpage.component.scss'],
  animations:[
    trigger("modal",[
      transition(":enter",[
        style({transform:"translateY(-100%)"}),
        animate("400ms ease-out", style({transform:"translateY(0)"}))
      ]),
      transition(":leave",[
        style({transform:"translateY(0)"}),
        animate("400ms ease-out", style({transform:"translateY(-100%)"}))
      ])
    ])
  ]
})
export class ContactpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  modal=false;
     email=""
    submit(form: NgForm){
        console.log(form.form.value);
        this.email=form.form.value.email
        form.reset()
        this.modal=true
    }
    hide_modal(){
      this.modal=false
    }
}
