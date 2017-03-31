import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';    //needed for passing id to router
import { Artist } from '../../../../Artist'
import { Album } from '../../../../Album'
import { SpotifySearchService  } from '../../services/spotify-search.service'


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  id: string;
  artist: Artist[];
  album: Album[];
  
  constructor(private _spotifySearchService: SpotifySearchService, private _route:ActivatedRoute) {

   }

  ngOnInit() {
    this._route.params.
      map(params=>params['id'])
      .subscribe(id=>{
        this._spotifySearchService.getAlbum(id)
          .subscribe(album=>{
            this.album=album;
            console.log(album);
          })

      });
    }

}
