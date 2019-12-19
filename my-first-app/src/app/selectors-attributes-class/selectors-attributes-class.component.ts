import { Component, OnInit } from '@angular/core';

@Component({
  // use as normal html selectors
  // selector: 'app-selectors-attributes-class',
  // use as attributes
  // selector: '[app-selectors-attributes-class]',
  // use as class
  selector: ".app-selectors-attributes-class",
  templateUrl: './selectors-attributes-class.component.html',
  styleUrls: ['./selectors-attributes-class.component.css']
})
export class SelectorsAttributesClassComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
