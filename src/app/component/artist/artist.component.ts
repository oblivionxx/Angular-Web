import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';    //needed for passing id to router
import { Artist } from '../../../../Artist'
import { Album } from '../../../../Album'
import { SpotifySearchService  } from '../../services/spotify-search.service'

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  id: string;
  artist: Artist[];
  albums: Album[];

  constructor(private _spotifySearchService: SpotifySearchService, private _route:ActivatedRoute) {

   }

  ngOnInit() {
    this._route.params.
      map(params=>params['id'])
      .subscribe(id=>{
        this._spotifySearchService.getArtist(id)
          .subscribe(artist=>{
            this.artist=artist;
          })
        this._spotifySearchService.getAlbums(id)
          .subscribe(albums =>{
            this.albums=albums.items;
          })
      });
    }

}
