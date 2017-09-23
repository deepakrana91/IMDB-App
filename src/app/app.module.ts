import { HighlightDirective } from './hover.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { CollectionService } from "app/shared/collection.service";
import { HeaderComponent } from './header/header.component';
import { DisplaymovieComponent } from './displaymovie/displaymovie.component';
import { StarRatingModule } from 'angular-star-rating';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddmovieComponent,
    HeaderComponent,
    DisplaymovieComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    StarRatingModule.forRoot(),
    FormsModule,
  ],
  providers: [CollectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
