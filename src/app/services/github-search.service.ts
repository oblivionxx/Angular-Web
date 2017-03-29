import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';     //see response observable

@Injectable()
export class GithubSearchService {
  private username: string;
  private client_id = 'e62dc8b270cd465c8602';
  private client_secret = 'd1a050755efc1963c3d8cb2c2c3bf23540a9d2dc';

  constructor(private _http:Http) { 
    console.log('GitService Ready...');
    this.username = "oblivionxx";
  }

  getUser(){
    return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
      .map(res=>res.json());   //map to observable json
  }

  getRepos(){
    return this._http.get('http://api.github.com/users/'+this.username+'/repos')
      .map(res=>res.json());   
  }

  updateUser(username: string){
    this.username = username;
  }


}
