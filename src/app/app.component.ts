import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Decrement, GetInitialCount, Increment } from './counter.actions';
import { selectCount, State } from './counter.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store$: Store<State>) {}

  ngOnInit() {
    this.store$.dispatch(new GetInitialCount());

    this.count$ = this.store$.pipe(select(selectCount));
  }

  increment() {
    this.store$.dispatch(new Increment());
  }
  decrement() {
    this.store$.dispatch(new Decrement());
  }
}
