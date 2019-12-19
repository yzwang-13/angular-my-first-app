import { Component, OnInit } from '@angular/core';
import {timeout} from "rxjs/operators";

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
  buttonDisabled = true;
  serverName = "";
  constructor() {
   setTimeout(()=>{
     this.buttonDisabled = false;
   },1000)
  }

  buttonClick(){
    this.buttonDisabled = true;
  }

  textEntered(event: any){
    console.log((<HTMLInputElement>event.target).value);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  ngOnInit() {
  }

}
