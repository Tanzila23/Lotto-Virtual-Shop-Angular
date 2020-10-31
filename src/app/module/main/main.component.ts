import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  sideBarOpen = true;
  constructor() { }

  ngOnInit() {
  }
  sideBarToggle(){
    this.sideBarOpen = !this.sideBarOpen;
  }
}
