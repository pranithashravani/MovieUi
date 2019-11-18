import { Component, OnInit,Input} from '@angular/core';
import {FormGroup, FormArray, FormBuilder} from '@angular/forms';
import {FormControl} from '@angular/forms';
import {MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import { Movie } from '../movie';
import {DetailsService} from '../details.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  registrationForm:FormGroup;
  details:FormArray;
id:any;
  userData: any = {};
  constructor(public router:Router, private service: DetailsService,public actRoute: ActivatedRoute,private fb:FormBuilder) {
    this.actRoute.params.subscribe(params=>{this.id=params['id'];});
   }
  //id = this.actRoute.snapshot.params['id'];
  ngOnInit() {
    this.service.getDataById(this.id).subscribe((data: {}) => {
      this.userData = data;
      console.log(this.userData);
    })
this.form();
  }
  form(){
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
 editData(value)
  {
    this.service.edit(this.userData).subscribe(data=>
    this.router.navigate(['/user']))
  }
  create() : FormGroup {
    return this.fb.group({
    hero: '',
      heroine: '',
      budget: ''
    });
  }
}
