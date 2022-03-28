import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent  {

  changeColor(){
    console.log(this.color, this.color==="blue")
    this.color==="blue"? this.color = "green": this.color="blue"
    
  }
  color: String = "blue"

}
