import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Decrement, Increment } from './counter.actions';
import { CounterState, selectCount } from './counter.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  count$: Observable<number>;

  constructor(private store$: Store<CounterState>) {
    this.count$ = store$.pipe(select(selectCount));
  }

  increment() {
    this.store$.dispatch(new Increment());
  }
  decrement() {
    this.store$.dispatch(new Decrement());
  }
}
