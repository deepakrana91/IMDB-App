import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IMDB Movie Ratings';
  itemselected='addmovie';

  onNavigation(feature:string) {

    console.log(feature);

    this.itemselected=feature;

  }
}
