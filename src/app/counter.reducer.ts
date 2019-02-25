import { createFeatureSelector } from '@ngrx/store';
import { Action, Types } from './counter.actions';

export interface State {
  count: number;
}

export const initialState = 0;

export const count = (state = initialState, { type }: Action) => {
  switch (type) {
    case Types.Increment:
      return state + 1;

    case Types.Decrement:
      return state - 1;

    default:
      return state;
  }
};

// simple and composable but without the benefit of memoization
// export const selectCount = (state: CounterState) => state.count;
// export const selectCountOperator = pipe(map(selectCount));

export const selectCount = createFeatureSelector<State, number>('count');
