import { Component, OnInit } from '@angular/core';
import {Observable, of} from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { tap } from 'rxjs';


@Component({
  selector: 'app-rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrls: ['./rxjs-learning.component.css']
})
export class RxjsLearningComponent implements OnInit {

tablicaTestowa?:Observable< number[] |null>



  ngOnInit(): void {
    this.tablicaTestowa = of([1,2,3,4,5]);
  }

  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message: number[] |null){
    if(message){
    this.snackBar.open(message.join(','));
    }
  }

  pipe(){
    of([1,2,3,4,5])
    .pipe(tap((val) => console.log(this.tablicaTestowa)))
    .subscribe(console.log);
    
  }

}



