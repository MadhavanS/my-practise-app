import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatTooltipModule,
  MatSnackBarModule
} from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ActiveClassDirective } from './directives/active-class.directive';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { SelectedCastComponent } from './view/selected-cast/selected-cast.component';
import { MovieListComponent } from './view/movie-list/movie-list.component';
import { HoverContainerComponent } from './view/hover-container/hover-container.component';
import { StarRatingComponent } from './view/movie-list/star-rating/star-rating.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ViewComponent,
    AddComponent,
    ActiveClassDirective,
    SelectedCastComponent,
    MovieListComponent,
    HoverContainerComponent,
    StarRatingComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
