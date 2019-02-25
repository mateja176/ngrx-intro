export const IncrementType = '[Counter] Increment';
export const DecrementType = '[Counter] Decrement';

export class Increment {
  readonly type = IncrementType;
}

export class Decrement {
  readonly type = IncrementType;
}

export type CounterAction = Increment | Decrement;
