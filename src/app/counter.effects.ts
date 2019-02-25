import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { SetCount, Types } from './counter.actions';

@Injectable()
export class CounterEffects {
  @Effect()
  loadMovies$ = this.actions$.pipe(
    ofType(Types.GetInitialCount),
    mergeMap(() =>
      this.http
        .get<Array<any>>('https://jsonplaceholder.typicode.com/users')
        .pipe(
          map(({ length: count }) => new SetCount({ count })),
          catchError(() => EMPTY),
        ),
    ),
  );

  constructor(private actions$: Actions, private http: HttpClient) {}
}
