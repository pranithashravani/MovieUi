import { Component, OnInit,Input} from '@angular/core';
import {FormsModule, ReactiveFormsModule, FormArray} from "@angular/forms";
import {FormGroup, FormBuilder} from '@angular/forms';
import {FormControl} from '@angular/forms';
import {MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import { Movie } from '../movie';
import {DetailsService} from '../details.service';


@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent implements OnInit {
  registrationForm:FormGroup;
  details:FormArray;
  constructor(public router:Router, private service: DetailsService,private fb:FormBuilder) { }
 
  dataSource: MatTableDataSource<Movie>;

//  @Input() Userdata={id:' ',name:' ',director:' ',industry:' ',details:{
//    hero:' ',heroine:' ',budget:' '
//  }}
  

  ngOnInit() {
    this.registrationForm = this.fb.group({
      id: new FormControl(' '),
      name: new FormControl(' '),
      director: new FormControl(''),
      industry: new FormControl(' '),
      details:this.fb.array([this.create()
      // hero:new FormControl(' '),
      // heroine:new FormControl(' '),
      // budget:new FormControl('')
      ])
  
  
    });
  
  }
  addItem(): void {
    this.details = this.registrationForm.get('details') as FormArray;
    this.details.push(this.create());
  }
  addData(value)
  {
    this.service.add(value).subscribe();
    this.router.navigate(['/user']);
    }
    create() : FormGroup {
      return this.fb.group({
      hero: '',
        heroine: '',
        budget: ''
      });
    }

}
