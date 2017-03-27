import { Component, OnInit } from '@angular/core';
import { GithubSearchService } from '../../services/github-search.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any;
  repos: any[];
  username: string;

  constructor(private _githubSearch: GithubSearchService) { 
    this.user = false;
  }

  userSearch(){
    this._githubSearch.updateUser(this.username);

    this._githubSearch.getUser().subscribe(user => {
      this.user=user;    
    });
    
    this._githubSearch.getRepos().subscribe(repos => {
      this.repos=repos;   
      console.log(repos);
    });
  }

  ngOnInit() {
  }

}
