import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieAddComponent } from './movie-add/movie-add.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from '@angular/material';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    MovieAddComponent,
    MovieEditComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatToolbarModule,BrowserAnimationsModule,FormsModule,ReactiveFormsModule,HttpClientModule,RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
