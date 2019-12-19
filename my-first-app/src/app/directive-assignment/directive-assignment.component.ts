import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-assignment',
  templateUrl: './directive-assignment.component.html',
  styleUrls: ['./directive-assignment.component.css']
})
export class DirectiveAssignmentComponent implements OnInit {

  buttonClickCount = 0;
  clicks = [];
  flag = false;
  constructor() { }

  addClick(){
    this.flag = !this.flag;
    this.buttonClickCount += 1;
    this.clicks.push(this.buttonClickCount);
  }

  changeBackgroundColor(click){
    return click >= 5? "blue": null;
  }
  ngOnInit() {
  }

}
