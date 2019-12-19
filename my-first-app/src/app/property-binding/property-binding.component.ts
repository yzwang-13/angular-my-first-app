import { Component, OnInit } from '@angular/core';
import {timeout} from "rxjs/operators";

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
  buttonDisabled = true;
  serverName = "My server name John";
  createdServerName = "";
  constructor() {
   setTimeout(()=>{
     this.buttonDisabled = false;
   },1000)
  }

  // event binding
  buttonClick(){
    this.buttonDisabled = true;
  }

  // event binding with parameters
  textEntered(event: any){
    console.log((<HTMLInputElement>event.target).value);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  // combine all forms of databinding
  createServer(){
    this.createdServerName = "Server created, name is"+this.serverName;
  }
  ngOnInit() {
  }

}
