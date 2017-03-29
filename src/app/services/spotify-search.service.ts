import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';     //see response observable

@Injectable()
export class SpotifySearchService {
  private searchUrl:string;

  constructor(private _http:Http) { }

  searchMusic(str:string, type='artist'){   //only for this app. only care about music. not include movie. so specify default type = artist
    this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type+'&market=US';
    return this._http.get(this.searchUrl).map(res=>res.json());
  }
}
