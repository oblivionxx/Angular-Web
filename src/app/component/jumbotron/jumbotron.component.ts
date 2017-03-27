import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {
  private jbtHeading:string;
  private jbtContent:string;
  private jbtUrl:string;

  constructor() { 
    this.jbtHeading = "HELLO WORLD";
    this.jbtContent = "a large paragraph";
    this.jbtUrl = "www.google.com";
  }

  ngOnInit() {
  }

}
