import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  serverName = "";
  prompt = "";
  serverStatus = "";
  servers = ["aServer","bServer"];
  constructor() {
    this.serverStatus = Math.random() > 0.5? "Online": "Offline";
  }

  createServer(){
    this.servers.push(this.serverName);
    this.prompt = `Server was created, name is ${this.serverName}`;
    setTimeout(()=>{
      this.prompt = "";
    },1000)
  }

  getColor(){
    return this.serverStatus === "Online"? "green": "red";
  }
  ngOnInit() {
  }

}
