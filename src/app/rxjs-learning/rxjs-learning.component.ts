import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, merge, Subject } from 'rxjs';


@Component({
  selector: 'app-rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrls: ['./rxjs-learning.component.css'],
})
export class RxjsLearningComponent implements OnInit {

  // wynikowy stream który jest wyświetlany w textarea 
  textAreaOutput$ = new BehaviorSubject<string>('');
  randomValueStream$ = new Subject<string>();
  intervalStream$ = new Subject<string>();
  myInterval: any;


  inputForm: FormGroup;
  

  constructor(private formBuilder: FormBuilder) {

    this.inputForm = this.formBuilder.group({
      propagate: new FormControl('', { updateOn: 'submit' }),
      kopytka: new FormControl('', {updateOn: 'submit'})
    })
  
  }

  ngOnInit(): any {

    const propagatevalueChanges$ = this.inputForm.controls['propagate'].valueChanges;

    // scalanie wyników w jeden stream, przy pomocy 'merge'
    merge(this.randomValueStream$, this.intervalStream$, propagatevalueChanges$)
      .subscribe((valueEmitted: string) => {

        let currentValue = this.textAreaOutput$.value;
        const newLine = "\r\n";
        this.textAreaOutput$.next(valueEmitted + newLine + currentValue);
      });


      const kopytkaChanges$ = this.inputForm.controls['kopytka'].valueChanges;
      
      merge(this.randomValueStream$, this.intervalStream$, kopytkaChanges$)
        .subscribe((valueEmitted: string) => {
  
          let currentValue = this.textAreaOutput$.value;
          const newLine = "\r\n";
          this.textAreaOutput$.next(valueEmitted + ' kopytka' + newLine + currentValue);
        });

  }


  emitRandomValue(): void {
    this.randomValueStream$.next(this.randomIntFromInterval(1, 100).toString());
  }

  randomIntFromInterval(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  toggleInterval(): void {
    if (this.myInterval) {
      clearInterval(this.myInterval);
    } else {
      this.myInterval = setInterval(this.intervalMethod.bind(this), 2000);
    }
  }

  intervalMethod() {
    this.intervalStream$.next(this.randomIntFromInterval(300, 400).toString());
  }

  clearAll(): void{
    this.textAreaOutput$.next(this.ngOnInit().reset())
  }




}

