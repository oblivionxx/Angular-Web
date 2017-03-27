import { Component } from '@angular/core';
import { GithubSearchService } from './services/github-search.service'


@Component({
  moduleId: module.id,      //is that mandatory
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[GithubSearchService]

})
export class AppComponent {
}
