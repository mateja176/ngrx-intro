export enum Types {
  Increment = '[Counter] Increment',
  Decrement = '[Counter] Decrement',
  GetInitialCount = '[Counter] Get Initial Count',
  SetCount = '[Counter] Set Initial Count',
}

export class Increment {
  readonly type = Types.Increment;
}

export class Decrement {
  readonly type = Types.Decrement;
}

export class GetInitialCount {
  readonly type = Types.GetInitialCount;
}

export class SetCount {
  readonly type = Types.SetCount;

  constructor(public payload: { count: number }) {}
}

export type Action = Increment | Decrement | GetInitialCount | SetCount;
