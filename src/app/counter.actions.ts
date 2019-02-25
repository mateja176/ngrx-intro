export enum Types {
  Increment = '[Counter] Increment',
  Decrement = '[Counter] Decrement',
}

export class Increment {
  readonly type = Types.Increment;
}

export class Decrement {
  readonly type = Types.Decrement;
}

export type Action = Increment | Decrement;
