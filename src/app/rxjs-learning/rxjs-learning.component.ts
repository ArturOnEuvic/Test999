import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, map, merge, Subject} from 'rxjs';


@Component({
  selector: 'app-rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrls: ['./rxjs-learning.component.css'],
})
export class RxjsLearningComponent implements OnInit {

  //! wynikowy stream który jest wyświetlany w textarea  
  textAreaOutput$ = new BehaviorSubject<string>(''); 
  // behaviorsubject sprawia, ze wyświetlane są po subskrypcji zarówno dane z poprzednich operacj, jak i te nowe
  //! MM: nie tak działa ReplaySubject, że można mu ustawić ile wartości wstecz ma zwrócić, BehaviorSubject działa tak że zwraca wartosci w subscibe + zawsze można z niego wyciągnać aktualną wartość 
  randomValueStream$ = new Subject<string>(); 
  // subject nie utrzymuje wartości
  intervalStream$ = new Subject<string>();
  on_offInfo$ = new Subject<boolean>();
  lastInput$ = new BehaviorSubject<string>('');
  on_offFilterInfo$ = new Subject<boolean>();
  myInterval: any; 
  //subjects mogą być observerem i observable w tym samym czasie
  //subject pozwala propagować wiele subskrypcji na raz
  inputForm: FormGroup;
  //jak dobrze rozumiem te formgroup jest wbudowane i definiuje jak będzie działał input field na stronie



//konstruktor inicjalizuje klasy, ale nie wykonuje żadnej pracy
  constructor(private formBuilder: FormBuilder) {
    this.inputForm = this.formBuilder.group({
      //dzięki "updateOn: submit" propagate i kopytka się aktualizują jako gotowy output w momencie kiedy user to zatwierdzi
      propagate: new FormControl('', { updateOn: 'submit' }),
      kopytka: new FormControl('', {updateOn: 'submit'}),
    })
  
  }

  


  ngOnInit(): any {

    const propagatevalueChanges$ = this.inputForm.controls['propagate'].valueChanges;
    const kopytkaChanges$ = this.inputForm.controls['kopytka'].valueChanges;
    //const booleanValues$ = this.on_offInfo$.controls['timer_on_off'].valueChanges;



    //! scalanie wyników w jeden stream, przy pomocy 'merge'
    //podział wartości na subskrybowane wcześniej i aktualne
    //! MM: tutaj nie ma żadnego podziału, po prostu przy użyciu merge, scalamy nowe wartości emitowane przez te cztery streamy 
    //! MM: textAreaOutput$ które jest behavior subject pozwaala nam wyciagnać co jest aktualnie w text areaa i dokleić na początek nową wartość, z któregokolwiek ze streama
    merge(this.randomValueStream$, this.intervalStream$, /*booleanValues$,*/ propagatevalueChanges$, kopytkaChanges$.pipe(map(k => k + ' kopytko')))
      .subscribe((valueEmitted: string) => {
        let currentValue = this.textAreaOutput$.value;
        const newLine = "\r\n";
        this.textAreaOutput$.next(valueEmitted + newLine + currentValue);
      });

      
 
  }

//tworzenie metod reagujących na interakcję usera (generuje random, interval, czyści output area):
  emitRandomValue(): void {
    this.randomValueStream$.next(this.randomIntFromInterval(1, 100).toString());
  }

  randomIntFromInterval(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  toggleInterval(): void {
    if (this.myInterval) {
      clearInterval(this.myInterval),
      this.on_offInfo$.next(false)
    } else {
      this.myInterval = setInterval(this.intervalMethod.bind(this), 2000),
      this.on_offInfo$.next(true)
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
5.własne metody wywoływane tyle razy ile będą subskrybowane
*/
