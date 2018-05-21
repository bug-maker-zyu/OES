import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-middle-page',
  templateUrl: './middle-page.component.html',
  styleUrls: ['./middle-page.component.css']
})
export class MiddlePageComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
    this.location.back();
  }

}
