import { Component, OnInit } from '@angular/core';
import { SpotifySearchService } from '../../services/spotify-search.service'
import { Artist} from '../../../../Artist'

@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.css']
})
export class SpotifyComponent implements OnInit {
  searchStr: string;
  searchRes: Artist[];

  constructor(private _spotifySearchService:SpotifySearchService) { 

  }

  searchMusic(){
    this._spotifySearchService.searchMusic(this.searchStr).subscribe(res => {
      this.searchRes = res.artists.items;   
    });
  }

  ngOnInit() {
  }

}
