import { Component, OnInit, Input, NgZone } from '@angular/core';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { TouchSequence } from 'selenium-webdriver';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { FormGroup, FormBuilder, FormControl, FormArray } from "@angular/forms";


export interface Workout {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  submitted = false;
  counter = 1;
  workoutForm: FormGroup;


  workouts: Workout[] = [
    {value: 'bänkpress', viewValue: 'Bänkpress'},
    {value: 'marklyft', viewValue: 'Marklyft'},
    {value: 'knäböj', viewValue: 'Knäböj'}
  ];
  
  constructor(
    public fb: FormBuilder, 
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
    ) {
      this.mainForm();
     }


     mainForm() {
       this.workoutForm = this.fb.group({
        name: [],
        sets: this.fb.array([this.fb.group({weight: '', rep: ''})]),
       })
     }

  get Sets(){
    return this.workoutForm.get('sets') as FormArray;
  }

  addSet() {
    this.Sets.push(this.fb.group({weight:'', rep:'',}));
  }

  ngOnInit() {
  }


  get myForm(){
    return this.workoutForm.controls;
    }

    onSubmit() {
    this.submitted = true;
    if (!this.workoutForm.valid) {
    return false;
    } else {
      console.log(this.workoutForm.value);
    this.apiService.createWorkout(this.workoutForm.value).subscribe(
    (res) => {
    console.log('Workout successfully created!')
    this.ngZone.run(() => this.router.navigateByUrl('/'))
    }, (error) => {
    console.log(error);
    });
    }
    }

    updateProfile(e){
      this.workoutForm.get('name').setValue(e, {
      onlySelf: true
      })
      }
}
