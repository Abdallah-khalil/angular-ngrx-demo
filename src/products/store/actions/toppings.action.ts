import { Action } from '@ngrx/store';
import { Topping } from '../../models/topping.model';

export const LOAD_TOPPINGS = '[Products] load toppings';
export const LOAD_TOPPINGS_FAIL = '[Products] load toppings fail';
export const LOAD_TOPPINGS_SUCCESS = '[Products] load toppings success';
export const VISUALIZE_TOPPINGS = '[Products]  visualize toppings';

export class LoadToppings implements Action {
  readonly type = LOAD_TOPPINGS;
}

export class LoadToppingsSuccess implements Action {
  readonly type = LOAD_TOPPINGS_SUCCESS;
  constructor(public payload: Topping[]) {}
}

export class LoadToppingsFail implements Action {
  readonly type = LOAD_TOPPINGS_FAIL;
  constructor(public payload: any) {}
}

export class VisalizeToppings implements Action {
  readonly type = VISUALIZE_TOPPINGS;
  constructor(public payload: number[]) {}
}

export type ToppingsAction =
  | LoadToppings
  | LoadToppingsSuccess
  | LoadToppingsFail
  | VisalizeToppings;
