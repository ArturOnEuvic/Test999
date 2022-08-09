import { Component, OnInit } from '@angular/core';
import {of} from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrls: ['./rxjs-learning.component.css']
})
export class RxjsLearningComponent implements OnInit {

tablicaTestowa = of([1,2,3,4,5]);



// Produces



  ngOnInit(): void {
  }

  constructor(private snackBar: MatSnackBar) {}



  openSnackBar(message){
    this.snackBar.open(message);
  }





}