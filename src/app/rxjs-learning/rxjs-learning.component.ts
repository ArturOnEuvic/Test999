import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, map, merge, Subject } from 'rxjs';


@Component({
  selector: 'app-rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrls: ['./rxjs-learning.component.css'],
})
export class RxjsLearningComponent implements OnInit {

  //! wynikowy stream który jest wyświetlany w textarea  
  textAreaOutput$ = new BehaviorSubject<string>(''); 
  // behaviorsubject sprawia, ze wyświetlane są po subskrypcji zarówno dane z poprzednich operacj, jak i te nowe
  randomValueStream$ = new Subject<string>(); 
  // subject nie utrzymuje wartości
  intervalStream$ = new Subject<string>();
  myInterval: any; 
  //typ any to dowolna wartość, przeciwność void, które jest pustą wartością
  //subjects mogą być observerem i observable w tym samym czasie
  //subject pozwala propagować wiele subskrypcji na raz
  inputForm: FormGroup;



//konstruktor inicjalizuje klasy, ale nie wykonuje żadnej pracy
  constructor(private formBuilder: FormBuilder) {
//
    this.inputForm = this.formBuilder.group({
      propagate: new FormControl('', { updateOn: 'submit' }),
      kopytka: new FormControl('', {updateOn: 'submit'}),
    })
  
  }

  ngOnInit(): any {

    const propagatevalueChanges$ = this.inputForm.controls['propagate'].valueChanges;
    const kopytkaChanges$ = this.inputForm.controls['kopytka'].valueChanges;

    //! scalanie wyników w jeden stream, przy pomocy 'merge'
    //podział wartości na subskrybowane wcześniej i aktualne
    merge(this.randomValueStream$, this.intervalStream$, propagatevalueChanges$, kopytkaChanges$.pipe(map(k => k + ' kopytko')))
      .subscribe((valueEmitted: string) => {
        let currentValue = this.textAreaOutput$.value;
        const newLine = "\r\n";
        this.textAreaOutput$.next(valueEmitted + newLine + currentValue);
      });

      
  /*   kopytkaChanges$
      .subscribe((valueEmitted: string) => {
        let currentValue = this.textAreaOutput$.value;
        const newLine = "\r\n";
        this.textAreaOutput$.next(valueEmitted + ' kopytka' + newLine + currentValue);
      });
*/
  }

//tworzenie metod reagujących na interakcję usera:
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
    this.textAreaOutput$.next('');
  }



}


/*
1.eksportujemy rxjs'a
2.tworzymy property, nadajemy im jeden z subjectów
3.konstruktor do propagate inputForm
4.tworzenie ngOnInit - wbudowana metoda, która uruchamia raz zapisany wewnątrz kod
5.kolejne metody
*/