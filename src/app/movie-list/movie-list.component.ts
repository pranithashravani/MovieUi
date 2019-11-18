import { Component, OnInit,Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormControl} from '@angular/forms';
import {MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import { Movie } from '../movie';
import {DetailsService} from '../details.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'director','industry','hero','heroine','budget','edit','delete'];
  dataSource: MatTableDataSource<Movie>;
  constructor(private service: DetailsService,
    private router:Router) { }

  ngOnInit() {
    this.getData();
  }
  getData()
  {
    this.service.getData()
      .subscribe(displayUser => {
        this.dataSource = new MatTableDataSource<Movie>(displayUser);
      });
  }

  delete(id)
  {
    this.service.delete(id).subscribe(deletUser=>{
      this.dataSource=new MatTableDataSource<Movie>(deletUser);
    });
  }
}
