import { Component, OnInit } from '@angular/core';
import {interval, Observable, of, tap, range, min, max } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import {BehaviorSubject} from 'rxjs';





@Component({
  selector: 'app-rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrls: ['./rxjs-learning.component.css']
})
export class RxjsLearningComponent implements OnInit {
  title = 'toolsets'
  data: number = 0;



  
setInterval(): any{
const data = range(1,10);
this.data = Math.floor(min)
this.data = Math.floor(max)
this.data = Math.floor(Math.random() * max - min + 1) + min;
data.subscribe((d) => {
  console.log(d);
  this.data = d;
  });
}






tablicaTestowa?:Observable< number[] |null>

  ngOnInit(): any {
    this.tablicaTestowa = of([1,2,3,4,5]).pipe(tap(console.log))
  }
  constructor(private snackBar: MatSnackBar) {}
  openSnackBar(message: number[] |null){
    if(message){
    this.snackBar.open(message.join(','));
    }
  }

    
    
  
}



