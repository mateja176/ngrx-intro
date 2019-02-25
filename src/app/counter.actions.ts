export enum CounterActions {
  Increment = '[Counter] Increment',
  Decrement = '[Counter] Decrement',
}

export class Increment {
  readonly type = CounterActions.Increment;
}

export class Decrement {
  readonly type = CounterActions.Decrement;
}

export type CounterActionTypes = Increment | Decrement;
