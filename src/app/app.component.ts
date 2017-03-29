import { Component } from '@angular/core';
import { GithubSearchService } from './services/github-search.service'
import { SpotifySearchService } from './services/spotify-search.service'


@Component({
  moduleId: module.id,      //is that mandatory
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[GithubSearchService, SpotifySearchService]

})
export class AppComponent {
}
