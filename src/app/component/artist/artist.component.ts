import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';    //needed for passing id to router



@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
