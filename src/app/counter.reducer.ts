import { createFeatureSelector } from '@ngrx/store';
import { CounterActions, CounterActionTypes } from './counter.actions';

export interface CounterState {
  count: number;
}

export const initialState = 0;

export const count = (state = initialState, { type }: CounterActionTypes) => {
  switch (type) {
    case CounterActions.Increment:
      return state + 1;

    case CounterActions.Decrement:
      return state - 1;

    default:
      return state;
  }
};

// simple and composable but without the benefit of memoization
// export const selectCount = (state: CounterState) => state.count;
// export const selectCountOperator = pipe(map(selectCount));

export const selectCount = createFeatureSelector<CounterState, number>('count');
